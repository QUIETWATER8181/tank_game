// 伪3D 视图可行性原型
// 复用正式项目的 js/config.js、js/map.js、js/entities.js（地图、碰撞、坦克数据），
// 只把「渲染」换成可切换的投影管线，用来判断伪3D视图值不值得做、怎么做。
//
// 三种投影：
//   flat  平铺俯视 —— 现状基线，用于对照
//   pitch 斜俯视  —— 世界 Y 压缩 cos(pitch)，物体按「高度」上移，墙做立面挤出
//   iso   等距     —— 世界绕 Z 轴转 45°，再压缩 Y，墙做两个可见立面
//
// 关键点：世界坐标、碰撞、AI、射程全部不变，只有「世界 → 屏幕」这一步不同。
"use strict";

(function () {
  var TankGame = window.TankGame;
  var Config = TankGame.Config;
  var Map = TankGame.Map;
  var Entities = TankGame.Entities;

  var canvas = document.getElementById("stage");
  var ctx = canvas.getContext("2d", { alpha: false });
  var W = canvas.width;
  var H = canvas.height;

  var params = new URLSearchParams(window.location.search);
  var SHOT = params.get("shot") === "1";
  var FREEZE = params.get("freeze") === "1";
  var presetName = params.get("mode") || "iso";
  var cameraParam = params.get("cam");

  // 固定随机数，保证三种投影截到的是同一个场面，便于逐像素对照
  var randomState = 0x9e3779b9;
  function random() {
    randomState = (Math.imul(randomState, 1664525) + 1013904223) >>> 0;
    return randomState / 4294967296;
  }

  var PRESETS = {
    flat: { yaw: 0, pitch: 0, height: 0, label: "平铺俯视（现状基线）" },
    pitch: { yaw: 0, pitch: 34, height: 1, label: "斜俯视 34°（假透视 + 墙体挤出）" },
    iso: { yaw: 45, pitch: 30, height: 1, label: "等距 45° / 30°" }
  };

  var state = {
    mode: PRESETS[presetName] ? presetName : "iso",
    yaw: 45,
    pitch: 30,
    zoom: 1,
    heightScale: 1,
    depthSort: true,
    wallExtrude: true,
    tankExtrude: true,
    shadows: true,
    groundTexture: true,
    groundDetail: true,
    ambientOcclusion: true,
    haze: true,
    craters: true,
    grassFringe: true
  };

  var TILE = Config.tileSize;
  var WALL_HEIGHT = { "#": 56, "B": 38, "I": 68, "S": 12 };
  var WALL_FACE = { "#": "#6a7a7c", "B": "#8d4c39", "I": "#5f7568", "S": "#7b827a" };
  var SOLID_KINDS = { "#": true, "B": true, "I": true, "S": true };
  // 光照方向：左上方来光，影子往右下倒
  var LIGHT = { x: 0.46, y: 0.38 };

  var world = {
    map: null,
    player: null,
    enemies: [],
    bullets: [],
    particles: [],
    camera: { x: 0, y: 0 }
  };

  var keys = Object.create(null);
  var pointer = { x: 0, y: 0, inside: false, down: false };
  var inputShim = {
    isDown: function (code) { return Boolean(keys[code]); },
    pointer: pointer
  };

  var sprites = {};
  var SPRITE_SCALE = { player: 0.13, enemy: 0.34, elite: 0.18, boss: 0.27 };

  var stats = {
    frames: 0,
    fps: 0,
    renderMs: 0,
    items: 0,
    faces: 0,
    grassLayers: 1,
    lastFrameTime: 0
  };
  var lastFrameAt = 0;

  // ---------------------------------------------------------------- 投影

  function Projector(camera, yawDegrees, pitchDegrees, zoom) {
    this.camera = camera;
    this.zoom = zoom;
    this.yaw = yawDegrees * Math.PI / 180;
    this.pitch = pitchDegrees * Math.PI / 180;
    this.cos = Math.cos(this.yaw);
    this.sin = Math.sin(this.yaw);
    // 地面平面：世界 Y 方向压缩 cos(pitch)；高度方向：屏幕上移 sin(pitch)
    this.k = Math.cos(this.pitch);
    this.m = Math.sin(this.pitch);
  }

  // 世界 → 屏幕的仿射矩阵，height 为离地高度
  Projector.prototype.matrix = function (height) {
    var z = this.zoom;
    var c = this.cos;
    var s = this.sin;
    var k = this.k;
    return [
      z * c, z * s, -z * s * k, z * c * k,
      W / 2 - z * (c * this.camera.x - s * k * this.camera.y),
      H / 2 - z * (s * this.camera.x + c * k * this.camera.y) - (height || 0) * this.m * z
    ];
  };

  Projector.prototype.apply = function (height) {
    var matrix = this.matrix(height);
    ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
  };

  Projector.prototype.point = function (x, y, height) {
    var matrix = this.matrix(height);
    return {
      x: matrix[0] * x + matrix[2] * y + matrix[4],
      y: matrix[1] * x + matrix[3] * y + matrix[5]
    };
  };

  // 屏幕 → 世界（只对地面高度 0 有意义，用于鼠标瞄准）
  // 矩阵 M = [[z·cos, -z·sin·k], [z·sin, z·cos·k]]，逆矩阵的行列式是 z²·k
  Projector.prototype.toWorld = function (screenX, screenY) {
    var z = this.zoom;
    var c = this.cos;
    var s = this.sin;
    var k = this.k;
    var px = screenX - W / 2;
    var py = screenY - H / 2;
    return {
      x: (c * px + s * py) / z + this.camera.x,
      y: (-s * px + c * py) / (z * k) + this.camera.y
    };
  };

  // 深度：越大越靠近镜头（画家算法从远到近绘制）
  Projector.prototype.depth = function (x, y) {
    return (x - this.camera.x) * this.sin + (y - this.camera.y) * this.cos;
  };

  // 注意：不能用「屏幕四角反投影后的世界 AABB」当绘制范围。
  // 旋转 45° 后，那个 AABB 反投影回来是另一个旋转矩形，四角盖不住屏幕，
  // 会在屏幕角上露出底色。这里改用「外接圆 → 正方形」，保证一定盖满。
  Projector.prototype.bounds = function (margin) {
    margin = margin || 0;
    var center = this.toWorld(W / 2, H / 2);
    var corners = [
      this.toWorld(0, 0),
      this.toWorld(W, 0),
      this.toWorld(W, H),
      this.toWorld(0, H)
    ];
    var radius = 0;
    corners.forEach(function (corner) {
      radius = Math.max(radius, Math.hypot(corner.x - center.x, corner.y - center.y));
    });
    radius += 80 + margin;
    return {
      left: Math.max(0, center.x - radius),
      top: Math.max(0, center.y - radius),
      right: Math.min(Config.worldWidth, center.x + radius),
      bottom: Math.min(Config.worldHeight, center.y + radius)
    };
  };

  // ---------------------------------------------------------------- 资源

  function makeSilhouette(image, color) {
    var surface = document.createElement("canvas");
    surface.width = 512;
    surface.height = 512;
    var surfaceContext = surface.getContext("2d");
    surfaceContext.drawImage(image, 0, 0);
    surfaceContext.globalCompositeOperation = "source-in";
    surfaceContext.fillStyle = color || "#0d1412";
    surfaceContext.fillRect(0, 0, 512, 512);
    return surface;
  }

  // 坦克侧壁的三段色阶：底最暗、顶最亮，用硬切而不是渐变，保持 2D 手绘感
  var SIDE_TONES = ["#0a100d", "#141d19", "#233029"];

  function loadSprites() {
    Object.keys(SPRITE_SCALE).forEach(function (key) {
      var hull = new Image();
      var turret = new Image();
      var entry = { hull: hull, turret: turret, hullDark: null, turretDark: null, hullSides: null, turretSides: null };
      sprites[key] = entry;
      hull.onload = function () {
        entry.hullDark = makeSilhouette(hull);
        entry.hullSides = SIDE_TONES.map(function (tone) { return makeSilhouette(hull, tone); });
      };
      turret.onload = function () {
        entry.turretDark = makeSilhouette(turret);
        entry.turretSides = SIDE_TONES.map(function (tone) { return makeSilhouette(turret, tone); });
      };
      hull.src = "../../assets/images/tanks/" + key + "-hull.png";
      turret.src = "../../assets/images/tanks/" + key + "-turret.png";
    });
  }

  // ---------------------------------------------------------------- 世界

  function findFreeSpot(cx, cy) {
    for (var radius = 0; radius < 40; radius += 1) {
      for (var angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
        var x = cx + Math.cos(angle) * radius * TILE * 0.5;
        var y = cy + Math.sin(angle) * radius * TILE * 0.5;
        if (x < 80 || y < 80 || x > Config.worldWidth - 80 || y > Config.worldHeight - 80) { continue; }
        if (!Map.circleCollides(world.map, { x: x, y: y, radius: 26 })) { return { x: x, y: y }; }
      }
    }
    return { x: cx, y: cy };
  }

  function spawnBullet(tank, angle, team) {
    world.bullets.push({
      x: tank.x + Math.cos(angle) * 46,
      y: tank.y + Math.sin(angle) * 46,
      vx: Math.cos(angle) * 760,
      vy: Math.sin(angle) * 760,
      life: 2.4,
      team: team
    });
    for (var index = 0; index < 5; index += 1) {
      world.particles.push({
        x: tank.x + Math.cos(angle) * 52,
        y: tank.y + Math.sin(angle) * 52,
        vx: Math.cos(angle) * (90 + Math.random() * 120) + (Math.random() - 0.5) * 120,
        vy: Math.sin(angle) * (90 + Math.random() * 120) + (Math.random() - 0.5) * 120,
        life: 0.25 + Math.random() * 0.2,
        maxLife: 0.45,
        size: 2 + Math.random() * 3,
        color: index % 2 ? "#ffd166" : "#ff8a24"
      });
    }
  }

  function burst(x, y, color, count) {
    for (var index = 0; index < count; index += 1) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 40 + Math.random() * 190;
      world.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0.3 + Math.random() * 0.5,
        maxLife: 0.8,
        size: 2 + Math.random() * 4,
        color: Math.random() > 0.45 ? color : "#ffd166"
      });
    }
  }

  function initWorld() {
    world.map = Map.create({ seed: 20261031, level: 1, mode: "endless" });
    var start = world.map.playerSpawn;
    if (cameraParam) {
      var parts = cameraParam.split(",");
      var cx = Number(parts[0]);
      var cy = Number(parts[1]);
      if (isFinite(cx) && isFinite(cy)) { start = findFreeSpot(cx, cy); }
    }
    world.player = Entities.createTank(start.x, start.y, "player");
    world.player.bodyAngle = -Math.PI / 2;
    world.player.health = 100;
    world.player.maxHealth = 100;
    world.camera.x = start.x;
    world.camera.y = start.y;

    var offsets = [
      [-260, -180], [300, -140], [-330, 220], [260, 260], [40, -330], [-120, 340]
    ];
    var extraEnemies = Math.max(0, Math.min(40, Number(params.get("enemies") || 0) - offsets.length));
    for (var extra = 0; extra < extraEnemies; extra += 1) {
      var angle = extra / extraEnemies * Math.PI * 2;
      var radius = 140 + (extra % 5) * 90;
      offsets.push([Math.cos(angle) * radius, Math.sin(angle) * radius]);
    }
    offsets.forEach(function (offset, index) {
      var spot = findFreeSpot(start.x + offset[0], start.y + offset[1]);
      var enemy = Entities.createTank(spot.x, spot.y, "enemy");
      enemy.bodyAngle = random() * Math.PI * 2;
      enemy.turretAngle = enemy.bodyAngle;
      enemy.thinkTimer = random() * 1.5;
      enemy.fireCooldown = 0.8 + random() * 1.6;
      enemy.health = 100;
      enemy.maxHealth = 100;
      world.enemies.push(enemy);
    });
  }

  // ---------------------------------------------------------------- 更新

  function updatePlayer(deltaTime) {
    Entities.updatePlayer(world.player, inputShim, world.map, deltaTime, [], function () {});
    world.player.fireCooldown = Math.max(0, world.player.fireCooldown - deltaTime);
    if ((keys.Space || pointer.down) && world.player.fireCooldown <= 0) {
      world.player.fireCooldown = Config.playerFireCooldown;
      spawnBullet(world.player, world.player.turretAngle, "player");
    }
  }

  function updateEnemies(deltaTime) {
    world.enemies.forEach(function (enemy) {
      if (!enemy.alive) { return; }
      var dx = world.player.x - enemy.x;
      var dy = world.player.y - enemy.y;
      var distance = Math.hypot(dx, dy);
      enemy.turretAngle = Math.atan2(dy, dx);
      enemy.thinkTimer -= deltaTime;
      if (enemy.thinkTimer <= 0) {
        enemy.thinkTimer = 1.1 + Math.random();
        enemy.bodyAngle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.4;
      }
      var speed = 62;
      var nextX = enemy.x + Math.cos(enemy.bodyAngle) * speed * deltaTime;
      var nextY = enemy.y + Math.sin(enemy.bodyAngle) * speed * deltaTime;
      if (distance < 190) {
        nextX = enemy.x - Math.cos(enemy.bodyAngle) * speed * deltaTime;
        nextY = enemy.y - Math.sin(enemy.bodyAngle) * speed * deltaTime;
      }
      if (!Map.circleCollides(world.map, { x: nextX, y: enemy.y, radius: enemy.radius })) { enemy.x = nextX; }
      else { enemy.bodyAngle += Math.PI * 0.55; }
      if (!Map.circleCollides(world.map, { x: enemy.x, y: nextY, radius: enemy.radius })) { enemy.y = nextY; }
      else { enemy.bodyAngle += Math.PI * 0.55; }
      enemy.fireCooldown -= deltaTime;
      if (enemy.fireCooldown <= 0 && distance < 680) {
        enemy.fireCooldown = 1.5 + Math.random() * 1.6;
        spawnBullet(enemy, enemy.turretAngle, "enemy");
      }
    });
  }

  function updateBullets(deltaTime) {
    world.bullets = world.bullets.filter(function (bullet) {
      bullet.x += bullet.vx * deltaTime;
      bullet.y += bullet.vy * deltaTime;
      bullet.life -= deltaTime;
      if (bullet.life <= 0) { return false; }
      if (Map.circleCollides(world.map, { x: bullet.x, y: bullet.y, radius: 4 })) {
        burst(bullet.x, bullet.y, "#b9c6c2", 7);
        return false;
      }
      var targets = bullet.team === "player" ? world.enemies : [world.player];
      for (var index = 0; index < targets.length; index += 1) {
        var target = targets[index];
        if (!target || !target.alive) { continue; }
        if (Math.hypot(target.x - bullet.x, target.y - bullet.y) > 26) { continue; }
        target.hitFlash = 0.12;
        target.health -= 25;
        burst(bullet.x, bullet.y, "#ffb04a", 12);
        if (target.health <= 0) {
          target.alive = false;
          burst(target.x, target.y, "#ff6a2a", 40);
          if (target === world.player) { respawnPlayer(); }
        }
        return false;
      }
      return true;
    });
  }

  function respawnPlayer() {
    var spawn = world.map.playerSpawn;
    world.player.alive = true;
    world.player.health = 100;
    world.player.x = spawn.x;
    world.player.y = spawn.y;
    world.player.hitFlash = 0;
  }

  function updateParticles(deltaTime) {
    world.particles = world.particles.filter(function (particle) {
      particle.x += particle.vx * deltaTime;
      particle.y += particle.vy * deltaTime;
      particle.vx *= 0.94;
      particle.vy *= 0.94;
      particle.life -= deltaTime;
      return particle.life > 0;
    });
  }

  // 旋转视角下屏幕四角对应的世界偏移是固定的，用它算相机能待的范围，
  // 保证画面里不会露出世界外的空白。
  function cameraLimits() {
    var projector = new Projector({ x: 0, y: 0 }, state.yaw, state.pitch, state.zoom);
    var offsets = [
      projector.toWorld(0, 0),
      projector.toWorld(W, 0),
      projector.toWorld(W, H),
      projector.toWorld(0, H)
    ];
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    offsets.forEach(function (offset) {
      minX = Math.min(minX, offset.x);
      maxX = Math.max(maxX, offset.x);
      minY = Math.min(minY, offset.y);
      maxY = Math.max(maxY, offset.y);
    });
    return {
      minX: -minX,
      maxX: Config.worldWidth - maxX,
      minY: -minY,
      maxY: Config.worldHeight - maxY
    };
  }

  function updateCamera(deltaTime) {
    var blend = 1 - Math.exp(-9 * deltaTime);
    world.camera.x += (world.player.x - world.camera.x) * blend;
    world.camera.y += (world.player.y - world.camera.y) * blend;
    var limits = cameraLimits();
    if (limits.minX <= limits.maxX) {
      world.camera.x = Math.max(limits.minX, Math.min(limits.maxX, world.camera.x));
    } else {
      world.camera.x = Config.worldWidth / 2;
    }
    if (limits.minY <= limits.maxY) {
      world.camera.y = Math.max(limits.minY, Math.min(limits.maxY, world.camera.y));
    } else {
      world.camera.y = Config.worldHeight / 2;
    }
  }

  // ---------------------------------------------------------------- 绘制：地面
  function hash(x, y, salt) {
    var value = Math.imul((x | 0) ^ 0x45D9F3B, 0x27D4EB2D);
    value = Math.imul(value ^ (y | 0), 0x165667B1);
    value = Math.imul(value ^ (salt | 0), 0x9E3779B1);
    value ^= value >>> 15;
    return (value >>> 0) / 4294967296;
  }

  // 预渲染「柔和矩形」：中心实心、边缘按 falloff 渐隐。
  // 接地阴影和环境光遮蔽都用它——每帧只 drawImage，比现场建渐变便宜得多。
  function makeSoftRectSprite(size, falloff) {
    var sprite = document.createElement("canvas");
    sprite.width = sprite.height = size;
    var spriteContext = sprite.getContext("2d");
    var image = spriteContext.createImageData(size, size);
    for (var y = 0; y < size; y += 1) {
      for (var x = 0; x < size; x += 1) {
        var dx = Math.max(falloff - x, x - (size - 1 - falloff), 0);
        var dy = Math.max(falloff - y, y - (size - 1 - falloff), 0);
        var distance = Math.sqrt(dx * dx + dy * dy);
        var alpha = Math.max(0, 1 - distance / falloff);
        alpha *= alpha;
        var index = (y * size + x) * 4;
        image.data[index] = 0;
        image.data[index + 1] = 0;
        image.data[index + 2] = 0;
        image.data[index + 3] = Math.round(alpha * 255);
      }
    }
    spriteContext.putImageData(image, 0, 0);
    return sprite;
  }

  var softShadowSprite = null;
  var softAmbientSprite = null;
  var grassPattern = null;
  var grassPattern2 = null;
  var fringeSprites = [];
  var sideFringeSprites = [];
  var dirtSprite = null;

  function prepareSprites() {
    softShadowSprite = makeSoftRectSprite(96, 22);
    softAmbientSprite = makeSoftRectSprite(96, 15);
    var grassTile = makeGrassTile(512);
    grassPattern = ctx.createPattern(grassTile, "repeat");
    grassPattern2 = ctx.createPattern(grassTile, "repeat");
    if (grassPattern2 && typeof DOMMatrix === "function" && grassPattern2.setTransform) {
      grassPattern2.setTransform(new DOMMatrix([1.37, 0, 0, 1.37, 211, 137]));
    } else {
      grassPattern2 = null;
    }
    fringeSprites = [
      makeFringeSprite(96, 34, 0x1234abcd),
      makeFringeSprite(96, 34, 0x77aa0011),
      makeFringeSprite(96, 34, 0x5e5e5e5e)
    ];
    sideFringeSprites = [
      makeSideFringe(34, 96, 0x2bad2bad),
      makeSideFringe(34, 96, 0x9c9c1234)
    ];
    dirtSprite = makeDirtSprite(96);
  }

  function solidAt(column, row) {
    var cells = world.map && world.map.cells;
    var line = cells && cells[row];
    if (!line) { return false; }
    var kind = line[column];
    return Boolean(kind && SOLID_KINDS[kind]);
  }

  function isEdgeTile(obstacle) {
    var column = obstacle.column;
    var row = obstacle.row;
    return !solidAt(column, row - 1) || !solidAt(column + 1, row) ||
      !solidAt(column, row + 1) || !solidAt(column - 1, row);
  }

  // 只有朝镜头的两条边（南 / 东）需要投影，避免整块墙每个格子都叠一层影子
  function castsShadow(obstacle) {
    return !solidAt(obstacle.column, obstacle.row + 1) || !solidAt(obstacle.column + 1, obstacle.row);
  }

  // ---- 草地：预渲染一张无缝贴图，用 pattern 按世界坐标铺满（跟着视角一起转）----

  // 周期噪声：整数周期，保证贴图四边无缝
  function periodicNoise(x, y, period, salt) {
    var xi = Math.floor(x);
    var yi = Math.floor(y);
    var xf = x - xi;
    var yf = y - yi;
    var u = xf * xf * (3 - 2 * xf);
    var v = yf * yf * (3 - 2 * yf);
    function wrap(value) { return ((value % period) + period) % period; }
    var x0 = wrap(xi);
    var x1 = wrap(xi + 1);
    var y0 = wrap(yi);
    var y1 = wrap(yi + 1);
    var a = hash(x0, y0, salt);
    var b = hash(x1, y0, salt);
    var c = hash(x0, y1, salt);
    var d = hash(x1, y1, salt);
    return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
  }

  function makeTileRandom(seed) {
    var value = seed >>> 0;
    return function () {
      value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function mixColor(from, to, amount) {
    return [
      Math.round(from[0] + (to[0] - from[0]) * amount),
      Math.round(from[1] + (to[1] - from[1]) * amount),
      Math.round(from[2] + (to[2] - from[2]) * amount)
    ];
  }

  // 在一张方形贴图上「绕边重画」，保证跨边界的草叶/土斑在拼接处连续
  function wrapped(size, x, y, margin, draw) {
    var offsetsX = [0];
    var offsetsY = [0];
    if (x < margin) { offsetsX.push(size); }
    if (x > size - margin) { offsetsX.push(-size); }
    if (y < margin) { offsetsY.push(size); }
    if (y > size - margin) { offsetsY.push(-size); }
    offsetsX.forEach(function (offsetX) {
      offsetsY.forEach(function (offsetY) {
        draw(offsetX, offsetY);
      });
    });
  }

  // 草地贴图：低频色场（深绿↔亮绿↔干黄）+ 土斑 + 草叶 + 石子
  function makeGrassTile(size) {
    var tile = document.createElement("canvas");
    tile.width = size;
    tile.height = size;
    var g = tile.getContext("2d");
    var random = makeTileRandom(0x51ed270b);
    var cell = 8;
    var cells = size / cell;

    var dark = [22, 50, 27];
    var mid = [56, 96, 50];
    var light = [116, 140, 76];
    var dry = [148, 134, 86];

    var image = g.createImageData(size, size);
    var data = image.data;
    for (var cy = 0; cy < cells; cy += 1) {
      for (var cx = 0; cx < cells; cx += 1) {
        var broad = periodicNoise(cx / 8, cy / 8, cells / 8, 11);
        var fine = periodicNoise(cx / 2, cy / 2, cells / 2, 12);
        var dryness = periodicNoise(cx / 16, cy / 16, cells / 16, 13);
        var value = broad * 0.62 + fine * 0.38;
        var base = value < 0.5 ? mixColor(dark, mid, value * 2) : mixColor(mid, light, (value - 0.5) * 2);
        var color = mixColor(base, dry, Math.max(0, dryness - 0.48) * 1.6);
        for (var py = 0; py < cell; py += 1) {
          var row = ((cy * cell + py) * size + cx * cell) * 4;
          for (var px = 0; px < cell; px += 1) {
            data[row + px * 4] = color[0];
            data[row + px * 4 + 1] = color[1];
            data[row + px * 4 + 2] = color[2];
            data[row + px * 4 + 3] = 255;
          }
        }
      }
    }
    g.putImageData(image, 0, 0);

    // 土斑：露出一点泥土，打散「整片纯草」的均匀感
    for (var soil = 0; soil < 34; soil += 1) {
      var soilX = random() * size;
      var soilY = random() * size;
      var soilRadius = 18 + random() * 52;
      wrapped(size, soilX, soilY, soilRadius + 4, function (offsetX, offsetY) {
        var gradient = g.createRadialGradient(soilX + offsetX, soilY + offsetY, soilRadius * 0.2,
          soilX + offsetX, soilY + offsetY, soilRadius);
        gradient.addColorStop(0, "rgba(92, 76, 48, 0.26)");
        gradient.addColorStop(0.6, "rgba(84, 70, 44, 0.12)");
        gradient.addColorStop(1, "rgba(80, 68, 42, 0)");
        g.fillStyle = gradient;
        g.fillRect(soilX + offsetX - soilRadius, soilY + offsetY - soilRadius, soilRadius * 2, soilRadius * 2);
      });
    }

    // 草叶：两段二次曲线，根部深、尖部亮
    var bladeColors = [
      "rgba(20, 46, 26, 0.55)",
      "rgba(44, 82, 40, 0.55)",
      "rgba(82, 124, 58, 0.50)",
      "rgba(140, 162, 88, 0.42)",
      "rgba(168, 176, 104, 0.30)"
    ];
    for (var blade = 0; blade < 3200; blade += 1) {
      var bladeX = random() * size;
      var bladeY = random() * size;
      var length = 4 + random() * 9;
      var lean = (random() - 0.5) * 1.2;
      var tipX = bladeX + lean * length;
      var tipY = bladeY - length;
      var width = 0.8 + random() * 0.9;
      var tone = bladeColors[Math.min(bladeColors.length - 1, Math.floor(random() * random() * bladeColors.length))];
      wrapped(size, bladeX, bladeY, length + 2, function (offsetX, offsetY) {
        g.beginPath();
        g.moveTo(bladeX + offsetX, bladeY + offsetY);
        g.quadraticCurveTo(bladeX + offsetX + lean * length * 0.3, bladeY + offsetY - length * 0.6,
          tipX + offsetX, tipY + offsetY);
        g.strokeStyle = tone;
        g.lineWidth = width;
        g.lineCap = "round";
        g.stroke();
      });
    }

    // 石子：亮面 + 暗影，给地面一点硬质颗粒
    for (var pebble = 0; pebble < 90; pebble += 1) {
      var pebbleX = random() * size;
      var pebbleY = random() * size;
      var pebbleRadius = 1 + random() * 2.2;
      wrapped(size, pebbleX, pebbleY, 6, function (offsetX, offsetY) {
        g.beginPath();
        g.ellipse(pebbleX + offsetX, pebbleY + offsetY + pebbleRadius * 0.6, pebbleRadius, pebbleRadius * 0.8, 0, 0, Math.PI * 2);
        g.fillStyle = "rgba(26, 34, 24, 0.28)";
        g.fill();
        g.beginPath();
        g.ellipse(pebbleX + offsetX, pebbleY + offsetY, pebbleRadius, pebbleRadius * 0.8, 0, 0, Math.PI * 2);
        g.fillStyle = "rgba(178, 176, 150, 0.55)";
        g.fill();
      });
    }

    return tile;
  }

  // 墙脚草丛：贴在墙根、往墙面上压一截，让墙「长在草里」而不是浮在草上
  function makeFringeSprite(width, height, seed) {
    var sprite = document.createElement("canvas");
    sprite.width = width;
    sprite.height = height;
    var g = sprite.getContext("2d");
    var random = makeTileRandom(seed);
    for (var index = 0; index < 110; index += 1) {
      var x = random() * width;
      var baseY = height - random() * 6;
      var length = height * (0.3 + random() * 0.62);
      var lean = (random() - 0.5) * 1.1;
      var shade = random();
      g.beginPath();
      g.moveTo(x, baseY);
      g.quadraticCurveTo(x + lean * length * 0.3, baseY - length * 0.62, x + lean * length, baseY - length);
      g.lineWidth = 1 + random() * 1.3;
      g.lineCap = "round";
      g.strokeStyle = shade > 0.74 ? "rgba(150, 172, 94, 0.85)"
        : (shade > 0.38 ? "rgba(72, 112, 54, 0.9)" : "rgba(30, 66, 34, 0.94)");
      g.stroke();
    }
    return sprite;
  }

  // 东侧墙脚：竖直的一条草带，草叶沿墙根往上长
  function makeSideFringe(width, height, seed) {
    var sprite = document.createElement("canvas");
    sprite.width = width;
    sprite.height = height;
    var g = sprite.getContext("2d");
    var random = makeTileRandom(seed);
    for (var index = 0; index < 130; index += 1) {
      var x = width * (0.35 + random() * 0.65);
      var baseY = random() * height;
      var length = 9 + random() * 20;
      var lean = (random() - 0.5) * 0.8;
      var shade = random();
      g.beginPath();
      g.moveTo(x, baseY);
      g.quadraticCurveTo(x + lean * length * 0.3, baseY - length * 0.62, x + lean * length, baseY - length);
      g.lineWidth = 1 + random() * 1.3;
      g.lineCap = "round";
      g.strokeStyle = shade > 0.74 ? "rgba(150, 172, 94, 0.85)"
        : (shade > 0.38 ? "rgba(72, 112, 54, 0.9)" : "rgba(30, 66, 34, 0.94)");
      g.stroke();
    }
    return sprite;
  }

  function makeDirtSprite(size) {
    var sprite = document.createElement("canvas");
    sprite.width = size;
    sprite.height = size;
    var g = sprite.getContext("2d");
    var gradient = g.createRadialGradient(size / 2, size / 2, size * 0.1, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, "rgba(96, 80, 50, 0.55)");
    gradient.addColorStop(0.55, "rgba(90, 76, 48, 0.28)");
    gradient.addColorStop(1, "rgba(86, 72, 46, 0)");
    g.fillStyle = gradient;
    g.fillRect(0, 0, size, size);
    return sprite;
  }

  // 地面：贴图打底（草叶/土斑/石子）→ 大块色斑打散重复 → 弹坑
  // 只铺「屏幕四角反投影出来的四边形」，不铺整个外接正方形——省掉约 2/3 的填充面积
  function drawGroundTexture(projector, bounds) {
    var corners = [
      projector.toWorld(-2, -2),
      projector.toWorld(W + 2, -2),
      projector.toWorld(W + 2, H + 2),
      projector.toWorld(-2, H + 2)
    ];
    ctx.beginPath();
    ctx.moveTo(corners[0].x, corners[0].y);
    for (var corner = 1; corner < corners.length; corner += 1) {
      ctx.lineTo(corners[corner].x, corners[corner].y);
    }
    ctx.closePath();
    ctx.fillStyle = "#315f31";
    ctx.fill();
    if (state.groundTexture === false) { return; }

    if (grassPattern) {
      ctx.fillStyle = grassPattern;
      ctx.fill();
    }
    // 再铺一层放大的：同一张图两倍尺寸错位叠加，肉眼很难看出重复
    if (grassPattern2) {
      ctx.globalAlpha = 0.45;
      ctx.fillStyle = grassPattern2;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    if (state.groundDetail) {
      // 大块色斑：每 300 世界单位一个，位置抖动、半径随机，边缘完全柔和
      var patchCell = 300;
      for (var gx = Math.floor(bounds.left / patchCell) - 1; gx <= Math.ceil(bounds.right / patchCell); gx += 1) {
        for (var gy = Math.floor(bounds.top / patchCell) - 1; gy <= Math.ceil(bounds.bottom / patchCell); gy += 1) {
          var roll = hash(gx, gy, 13);
          var centerX = (gx + 0.5 + (hash(gx, gy, 7) - 0.5) * 0.8) * patchCell;
          var centerY = (gy + 0.5 + (hash(gx, gy, 8) - 0.5) * 0.8) * patchCell;
          var radius = patchCell * (0.38 + hash(gx, gy, 31) * 0.5);
          var color = roll > 0.62 ? "128,130,72" : (roll > 0.3 ? "26,70,38" : "92,136,60");
          var alpha = 0.10 + hash(gx, gy, 37) * 0.13;
          var gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.08, centerX, centerY, radius);
          gradient.addColorStop(0, "rgba(" + color + "," + alpha.toFixed(3) + ")");
          gradient.addColorStop(1, "rgba(" + color + ",0)");
          ctx.fillStyle = gradient;
          ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
        }
      }
    }
  }

  // 弹坑：坑底压暗 + 受光侧一圈亮边 + 飞溅碎土，给地面一点「被炸过」的层次
  function drawCraters(bounds) {
    if (!state.craters) { return; }
    var cell = 330;
    for (var gx = Math.floor(bounds.left / cell); gx <= Math.ceil(bounds.right / cell); gx += 1) {
      for (var gy = Math.floor(bounds.top / cell); gy <= Math.ceil(bounds.bottom / cell); gy += 1) {
        if (hash(gx, gy, 91) > 0.36) { continue; }
        var centerX = (gx + 0.25 + hash(gx, gy, 92) * 0.5) * cell;
        var centerY = (gy + 0.25 + hash(gx, gy, 93) * 0.5) * cell;
        var radius = 15 + hash(gx, gy, 94) * 17;

        ctx.fillStyle = "rgba(24, 20, 14, 0.30)";
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius * 0.82, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(12, 10, 8, 0.34)";
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + radius * 0.14, radius * 0.6, radius * 0.46, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(198, 188, 132, 0.22)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius * 0.82, 0, Math.PI * 1.05, Math.PI * 1.95);
        ctx.stroke();

        for (var speck = 0; speck < 4; speck += 1) {
          var angle = hash(gx, gy, 100 + speck) * Math.PI * 2;
          var distance = radius * (1.1 + hash(gx, gy, 110 + speck) * 0.7);
          ctx.fillStyle = "rgba(58, 48, 32, 0.5)";
          ctx.fillRect(centerX + Math.cos(angle) * distance, centerY + Math.sin(angle) * distance * 0.8,
            2 + hash(gx, gy, 120 + speck) * 4, 2 + hash(gx, gy, 130 + speck) * 3);
        }
      }
    }
  }

  // 墙根遮蔽 + 统一方向投影：都画在地面层，墙和坦克随后覆盖上去，遮挡关系天然正确
  function drawGroundOcclusion(projector, obstacles) {
    if (!state.ambientOcclusion && !state.shadows && !state.grassFringe) { return; }
    projector.apply(0);
    obstacles.forEach(function (obstacle) {
      if (obstacle.kind === "W") { return; }
      var height = (WALL_HEIGHT[obstacle.kind] || 0) * state.heightScale;
      if (height <= 0.5) { return; }
      if (state.shadows && castsShadow(obstacle)) {
        ctx.globalAlpha = 0.32;
        ctx.drawImage(softShadowSprite, obstacle.x + height * LIGHT.x - 12, obstacle.y + height * LIGHT.y - 12,
          TILE + 24, TILE + 24);
      }
      if (state.ambientOcclusion && isEdgeTile(obstacle)) {
        ctx.globalAlpha = 0.34;
        ctx.drawImage(softAmbientSprite, obstacle.x - 15, obstacle.y - 15, TILE + 30, TILE + 30);
      }
      // 墙脚一圈被踩秃的泥土：草和墙之间有个过渡，不是硬切
      if (state.grassFringe && !solidAt(obstacle.column, obstacle.row + 1)) {
        ctx.globalAlpha = 0.55;
        ctx.drawImage(dirtSprite, obstacle.x - 12, obstacle.y + TILE - 20, TILE + 24, 36);
      }
    });
    ctx.globalAlpha = 1;
  }

  // 石台：不加高度（上面要站人），改用「投影 + 内倒角」做出抬起的错觉
  function drawPlatformShadow(arena) {
    if (!state.shadows) { return; }
    var depth = 26;
    var gradient = ctx.createLinearGradient(0, arena.y + arena.height, 0, arena.y + arena.height + depth);
    gradient.addColorStop(0, "rgba(4, 10, 8, 0.42)");
    gradient.addColorStop(1, "rgba(4, 10, 8, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(arena.x - 6, arena.y + arena.height, arena.width + 12, depth);

    gradient = ctx.createLinearGradient(arena.x + arena.width, 0, arena.x + arena.width + depth, 0);
    gradient.addColorStop(0, "rgba(4, 10, 8, 0.34)");
    gradient.addColorStop(1, "rgba(4, 10, 8, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(arena.x + arena.width, arena.y - 6, depth, arena.height + 12);
  }

  function drawPlatformBevel(arena) {
    if (!state.ambientOcclusion) { return; }
    var depth = 12;
    var gradient = ctx.createLinearGradient(0, arena.y + arena.height - depth, 0, arena.y + arena.height);
    gradient.addColorStop(0, "rgba(10, 16, 14, 0)");
    gradient.addColorStop(1, "rgba(10, 16, 14, 0.40)");
    ctx.fillStyle = gradient;
    ctx.fillRect(arena.x + 3, arena.y + arena.height - depth, arena.width - 6, depth);

    gradient = ctx.createLinearGradient(arena.x + arena.width - depth, 0, arena.x + arena.width, 0);
    gradient.addColorStop(0, "rgba(10, 16, 14, 0)");
    gradient.addColorStop(1, "rgba(10, 16, 14, 0.32)");
    ctx.fillStyle = gradient;
    ctx.fillRect(arena.x + arena.width - depth, arena.y + 3, depth, arena.height - 6);

    gradient = ctx.createLinearGradient(0, arena.y, 0, arena.y + 8);
    gradient.addColorStop(0, "rgba(246, 241, 215, 0.30)");
    gradient.addColorStop(1, "rgba(246, 241, 215, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(arena.x + 3, arena.y + 3, arena.width - 6, 8);
  }

  // ---------------------------------------------------------------- 绘制：墙

  function shade(color, factor) {
    var value = parseInt(color.slice(1), 16);
    var red = Math.min(255, Math.round(((value >> 16) & 255) * factor));
    var green = Math.min(255, Math.round(((value >> 8) & 255) * factor));
    var blue = Math.min(255, Math.round((value & 255) * factor));
    return "rgb(" + red + "," + green + "," + blue + ")";
  }

  function drawWall(projector, obstacle) {
    var height = (WALL_HEIGHT[obstacle.kind] || 0) * state.heightScale;
    var size = TILE;
    var x = obstacle.x;
    var y = obstacle.y;

    if (height > 0.5 && state.wallExtrude) {
      var corners = [[x, y], [x + size, y], [x + size, y + size], [x, y + size]];
      var normals = [[0, -1], [1, 0], [0, 1], [-1, 0]];
      var baseColor = WALL_FACE[obstacle.kind] || "#4a5450";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      for (var index = 0; index < 4; index += 1) {
        var normal = normals[index];
        // 相邻格子也是实心墙，就不画这一面——否则整面墙会被切成一条条竖缝，
        // 石台也会变成「一堆小方块」而不是一整块台子。
        if (solidAt(obstacle.column + normal[0], obstacle.row + normal[1])) { continue; }
        // 立面朝向镜头才可见：法线投影到屏幕 Y 后为正
        var screenNormalY = projector.k * (projector.sin * normal[0] + projector.cos * normal[1]);
        if (screenNormalY <= 0.02) { continue; }
        stats.faces += 1;
        var from = corners[index];
        var to = corners[(index + 1) % 4];
        var fromBase = projector.point(from[0], from[1], 0);
        var toBase = projector.point(to[0], to[1], 0);
        var fromTop = projector.point(from[0], from[1], height);
        var toTop = projector.point(to[0], to[1], height);
        ctx.beginPath();
        ctx.moveTo(fromBase.x, fromBase.y);
        ctx.lineTo(toBase.x, toBase.y);
        ctx.lineTo(toTop.x, toTop.y);
        ctx.lineTo(fromTop.x, fromTop.y);
        ctx.closePath();
        // 越正对镜头越亮，模拟顶光；立面本身比顶面暗一档，形成体积感
        var brightness = 0.52 + 0.34 * Math.min(1, screenNormalY / Math.max(0.05, projector.k));
        ctx.fillStyle = shade(baseColor, brightness);
        ctx.fill();
        // 底部压暗 + 顶部提亮，制造环境光遮蔽与棱边高光
        var gradient = ctx.createLinearGradient(0, fromBase.y, 0, fromTop.y);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.34)");
        gradient.addColorStop(0.55, "rgba(0, 0, 0, 0.05)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.10)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = "rgba(6, 10, 9, 0.55)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    projector.apply(height);
    Map.drawObstacle(ctx, obstacle, world.map);

    // 墙脚草丛：画在墙之后，草叶压住墙面下沿，墙就像「长在草里」
    // 只给相机附近的墙画——远处的草叶在屏幕上只有几像素，画了也看不见，白花时间
    var fringeDistance = Math.abs(obstacle.x - world.camera.x) + Math.abs(obstacle.y - world.camera.y);
    if (state.grassFringe && height > 0.5 && fringeDistance < 900) {
      projector.apply(0);
      if (!solidAt(obstacle.column, obstacle.row + 1)) {
        var fringe = fringeSprites[(obstacle.column * 7 + obstacle.row * 13) % fringeSprites.length];
        ctx.globalAlpha = 0.95;
        ctx.drawImage(fringe, x - 10, y + TILE - 15, TILE + 20, 30);
      }
      if (!solidAt(obstacle.column + 1, obstacle.row)) {
        var sideFringe = sideFringeSprites[(obstacle.column * 5 + obstacle.row * 11) % sideFringeSprites.length];
        ctx.globalAlpha = 0.92;
        ctx.drawImage(sideFringe, x + TILE - 16, y - 8, 30, TILE + 16);
      }
      ctx.globalAlpha = 1;
    }
  }

  // ---------------------------------------------------------------- 绘制：坦克
  // 侧面：把剪影沿高度一层层叠上去，底暗顶亮，形成一段有厚度的侧壁
  function drawTankLayer(projector, tank, image, sides, angle, scale, baseHeight, topHeight) {
    if (!image || !image.complete || !image.naturalWidth) { return; }
    var extrude = state.tankExtrude && sides && sides.length;
    var steps = extrude ? 9 : 0;
    var step;
    for (step = 0; step < steps; step += 1) {
      var tone = sides[Math.min(sides.length - 1, Math.floor(step / steps * sides.length))];
      var height = baseHeight + (topHeight - baseHeight) * (step / steps);
      projector.apply(height);
      ctx.save();
      ctx.translate(tank.x, tank.y);
      ctx.rotate(angle);
      ctx.scale(scale, scale);
      ctx.drawImage(tone, -256, -256);
      ctx.restore();
    }
    projector.apply(topHeight);
    ctx.save();
    ctx.translate(tank.x, tank.y);
    ctx.rotate(angle);
    ctx.scale(scale, scale);
    ctx.drawImage(image, -256, -256);
    ctx.restore();
  }

  function drawTank(projector, tank) {
    var key = tank.team === "player" ? "player" : "enemy";
    var sprite = sprites[key];
    if (!sprite) { return; }
    var scale = SPRITE_SCALE[key] * (tank.visualScale || 1);
    var lift = state.heightScale;

    if (state.shadows) {
      projector.apply(0);
      ctx.save();
      ctx.translate(tank.x + 6, tank.y + 10);
      ctx.scale(30 * (tank.visualScale || 1), 27 * (tank.visualScale || 1));
      ctx.beginPath();
      ctx.arc(0, 0, 1, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(3, 7, 5, 0.45)";
      ctx.fill();
      ctx.restore();
    }

    drawTankLayer(projector, tank, sprite.hull, sprite.hullSides, tank.bodyAngle, scale, 0, 26 * lift);
    drawTankLayer(projector, tank, sprite.turret, sprite.turretSides, tank.turretAngle, scale, 26 * lift, 38 * lift);

    if (tank.hitFlash > 0) {
      projector.apply(38 * lift);
      ctx.save();
      ctx.translate(tank.x, tank.y);
      ctx.scale(scale, scale);
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.55;
      ctx.drawImage(sprite.hull, -256, -256);
      ctx.restore();
    }
  }

  // ---------------------------------------------------------------- 绘制：子弹 / 粒子

  function drawBullet(projector, bullet) {
    var height = 14 * state.heightScale;
    var top = projector.point(bullet.x, bullet.y, height);
    var ground = projector.point(bullet.x, bullet.y, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.strokeStyle = "rgba(255, 214, 120, 0.30)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ground.x, ground.y);
    ctx.lineTo(top.x, top.y);
    ctx.stroke();
    ctx.shadowColor = bullet.team === "player" ? "#ffd166" : "#ff6a3d";
    ctx.shadowBlur = 14;
    ctx.fillStyle = "#fff3c4";
    ctx.beginPath();
    ctx.arc(top.x, top.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function drawParticle(projector, particle) {
    var point = projector.point(particle.x, particle.y, 6 * state.heightScale);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = Math.max(0, Math.min(1, particle.life / particle.maxLife));
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(point.x, point.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // ---------------------------------------------------------------- 主渲染
  function collectItems(projector, bounds) {
    var items = [];
    Map.queryObstacles(world.map, bounds.left, bounds.top, bounds.right, bounds.bottom).forEach(function (obstacle) {
      if (obstacle.kind === "W") { return; }
      items.push({
        depth: projector.depth(obstacle.x + TILE * 0.5, obstacle.y + TILE),
        kind: "wall",
        data: obstacle
      });
    });
    world.enemies.forEach(function (enemy) {
      if (!enemy.alive) { return; }
      items.push({ depth: projector.depth(enemy.x, enemy.y), kind: "tank", data: enemy });
    });
    if (world.player.alive) {
      items.push({ depth: projector.depth(world.player.x, world.player.y), kind: "tank", data: world.player });
    }
    world.bullets.forEach(function (bullet) {
      items.push({ depth: projector.depth(bullet.x, bullet.y), kind: "bullet", data: bullet });
    });
    world.particles.forEach(function (particle) {
      items.push({ depth: projector.depth(particle.x, particle.y), kind: "particle", data: particle });
    });
    if (state.depthSort) {
      items.sort(function (a, b) { return a.depth - b.depth; });
    } else {
      items.sort(function (a, b) {
        var order = { wall: 0, particle: 1, bullet: 2, tank: 3 };
        return order[a.kind] - order[b.kind];
      });
    }
    return items;
  }

  function render() {
    var started = performance.now();
    var projector = new Projector(world.camera, state.yaw, state.pitch, state.zoom);
    var bounds = projector.bounds(80);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#0a0f0d";
    ctx.fillRect(0, 0, W, H);

    projector.apply(0);
    drawGroundTexture(projector, bounds);
    drawCraters(bounds);
    Map.drawWater(ctx, world.map, bounds);
    Map.drawDriedGround(ctx, world.map, bounds);
    Map.drawDecorations(ctx, world.map, bounds);
    drawPlatformShadow(world.map.bossArena);
    Map.drawStonePlatform(ctx, world.map);
    drawPlatformBevel(world.map.bossArena);
    Map.drawFirePatches(ctx, world.map, bounds);
    Map.drawSpawnMarkers(ctx, world.map);

    // 接地阴影 / 墙根遮蔽画在地面层，墙和坦克之后覆盖上去，遮挡关系天然正确
    var obstacles = Map.queryObstacles(world.map, bounds.left, bounds.top, bounds.right, bounds.bottom);
    drawGroundOcclusion(projector, obstacles);

    var items = collectItems(projector, bounds);
    stats.faces = 0;
    stats.grassLayers = grassPattern2 ? 2 : 1;
    items.forEach(function (item) {
      if (item.kind === "wall") { drawWall(projector, item.data); }
      else if (item.kind === "tank") { drawTank(projector, item.data); }
      else if (item.kind === "bullet") { drawBullet(projector, item.data); }
      else { drawParticle(projector, item.data); }
    });
    stats.items = items.length;

    drawAtmosphere();
    drawHud(projector);
    stats.renderMs = stats.renderMs * 0.9 + (performance.now() - started) * 0.1;
  }

  // 远景雾 + 暗角：屏幕上方是「远处」，压暗一点就有空气透视；四角再收一点光
  function drawAtmosphere() {
    if (state.haze) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      var gradient = ctx.createLinearGradient(0, 0, 0, H);
      gradient.addColorStop(0, "rgba(10, 24, 28, 0.10)");
      gradient.addColorStop(0.42, "rgba(10, 24, 28, 0.04)");
      gradient.addColorStop(0.75, "rgba(8, 16, 18, 0)");
      gradient.addColorStop(1, "rgba(4, 8, 8, 0.10)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);
    }
    var vignette = ctx.createRadialGradient(W / 2, H * 0.52, H * 0.32, W / 2, H * 0.52, H * 0.92);
    vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
    vignette.addColorStop(1, "rgba(0, 0, 0, 0.06)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, W, H);
  }

  function drawHud(projector) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (SHOT) { return; }
    ctx.fillStyle = "rgba(6, 12, 10, 0.62)";
    ctx.fillRect(16, 16, 372, 108);
    ctx.strokeStyle = "rgba(120, 220, 190, 0.35)";
    ctx.strokeRect(16.5, 16.5, 371, 107);
    ctx.fillStyle = "#c9f5e4";
    ctx.font = "600 18px 'Segoe UI', system-ui, sans-serif";
    ctx.fillText(PRESETS[state.mode].label, 30, 44);
    ctx.font = "14px 'Consolas', monospace";
    ctx.fillStyle = "#8fe0c4";
    ctx.fillText("FPS " + stats.fps.toFixed(0) + "   render " + stats.renderMs.toFixed(2) + " ms", 30, 68);
    ctx.fillText("yaw " + state.yaw + "°  pitch " + state.pitch + "°  items " + stats.items, 30, 90);
    ctx.fillText("WASD 移动 · 鼠标瞄准 · 空格开火", 30, 112);
  }

  // ---------------------------------------------------------------- 自检

  function pixelReport() {
    var data = ctx.getImageData(0, 0, W, H).data;
    var columns = 16;
    var rows = 10;
    var cells = [];
    var total = 0;
    var totalCount = 0;
    var dark = 0;
    for (var row = 0; row < rows; row += 1) {
      for (var column = 0; column < columns; column += 1) {
        var sum = 0;
        var count = 0;
        var x0 = Math.floor(column * W / columns);
        var x1 = Math.floor((column + 1) * W / columns);
        var y0 = Math.floor(row * H / rows);
        var y1 = Math.floor((row + 1) * H / rows);
        for (var y = y0; y < y1; y += 3) {
          for (var x = x0; x < x1; x += 3) {
            var index = (y * W + x) * 4;
            var luma = data[index] * 0.2126 + data[index + 1] * 0.7152 + data[index + 2] * 0.0722;
            sum += luma;
            count += 1;
            total += luma;
            totalCount += 1;
            if (luma < 18) { dark += 1; }
          }
        }
        cells.push(Math.round(sum / count));
      }
    }
    return {
      meanLuma: Number((total / totalCount).toFixed(1)),
      darkRatio: Number((dark / totalCount).toFixed(3)),
      grid: cells
    };
  }

  // 投影 / 反投影必须严格互逆，否则鼠标瞄准和拾取会整体偏掉。
  function projectionError() {
    var projector = new Projector(world.camera, state.yaw, state.pitch, state.zoom);
    var worst = 0;
    [[0, 0], [720, 450], [1439, 899], [100, 800], [1300, 120]].forEach(function (screen) {
      var point = projector.toWorld(screen[0], screen[1]);
      var back = projector.point(point.x, point.y, 0);
      worst = Math.max(worst, Math.hypot(back.x - screen[0], back.y - screen[1]));
    });
    return Number(worst.toExponential(2));
  }

  window.__pseudo3d = {
    ready: false,
    getStats: function () {
      return {
        mode: state.mode,
        label: PRESETS[state.mode].label,
        fps: Number(stats.fps.toFixed(1)),
        renderMs: Number(stats.renderMs.toFixed(2)),
        items: stats.items,
        faces: stats.faces,
        grassLayers: stats.grassLayers,
        frames: stats.frames,
        projectionErrorPx: projectionError(),
        pixels: pixelReport()
      };
    },
    setPreset: function (name) {
      if (!PRESETS[name]) { return; }
      state.mode = name;
      state.yaw = PRESETS[name].yaw;
      state.pitch = PRESETS[name].pitch;
      state.heightScale = PRESETS[name].height;
      syncControls();
    },
    setOption: function (key, value) {
      if (key in state) { state[key] = value; }
      syncControls();
    },
    getState: function () {
      return JSON.parse(JSON.stringify(state));
    },
    probe: function (x, y) {
      var data = ctx.getImageData(x, y, 1, 1).data;
      return [data[0], data[1], data[2], data[3]];
    },
    debug: function () {
      var projector = new Projector(world.camera, state.yaw, state.pitch, state.zoom);
      return {
        camera: { x: world.camera.x, y: world.camera.y },
        limits: cameraLimits(),
        bounds: projector.bounds(80),
        player: { x: world.player.x, y: world.player.y }
      };
    }
  };

  // ---------------------------------------------------------------- 循环 / 输入

  var previousTime = 0;
  var accumulator = 0;

  function frame(now) {
    if (!previousTime) { previousTime = now; }
    var deltaTime = Math.min((now - previousTime) / 1000, 0.1);
    previousTime = now;
    accumulator += deltaTime;
    var steps = 0;
    while (accumulator >= Config.fixedStep && steps < 5) {
      if (!FREEZE) {
        updatePlayer(Config.fixedStep);
        updateEnemies(Config.fixedStep);
        updateBullets(Config.fixedStep);
        updateParticles(Config.fixedStep);
        updateCamera(Config.fixedStep);
      }
      accumulator -= Config.fixedStep;
      steps += 1;
    }
    render();
    stats.frames += 1;
    if (lastFrameAt) {
      var instantaneous = 1000 / Math.max(1, now - lastFrameAt);
      stats.fps = stats.fps ? stats.fps * 0.9 + instantaneous * 0.1 : instantaneous;
    }
    lastFrameAt = now;
    window.__pseudo3d.ready = true;
    requestAnimationFrame(frame);
  }

  function bindInput() {
    window.addEventListener("keydown", function (event) {
      keys[event.code] = true;
      if (["KeyW", "KeyA", "KeyS", "KeyD", "Space"].indexOf(event.code) !== -1) { event.preventDefault(); }
    });
    window.addEventListener("keyup", function (event) { keys[event.code] = false; });
    canvas.addEventListener("pointermove", function (event) {
      var rect = canvas.getBoundingClientRect();
      var sx = (event.clientX - rect.left) * (W / rect.width);
      var sy = (event.clientY - rect.top) * (H / rect.height);
      var projector = new Projector(world.camera, state.yaw, state.pitch, state.zoom);
      var point = projector.toWorld(sx, sy);
      pointer.x = point.x;
      pointer.y = point.y;
      pointer.inside = true;
    });
    canvas.addEventListener("pointerdown", function (event) {
      if (event.button === 0) { pointer.down = true; }
    });
    window.addEventListener("pointerup", function () { pointer.down = false; });
  }

  function syncControls() {
    document.querySelectorAll("[data-preset]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-preset") === state.mode);
    });
    var yaw = document.getElementById("yaw");
    var pitch = document.getElementById("pitch");
    var zoom = document.getElementById("zoom");
    var height = document.getElementById("height");
    if (yaw) { yaw.value = String(state.yaw); }
    if (pitch) { pitch.value = String(state.pitch); }
    if (zoom) { zoom.value = String(state.zoom); }
    if (height) { height.value = String(state.heightScale); }
    var label = document.getElementById("readout");
    if (label) {
      label.textContent = "yaw " + state.yaw + "° / pitch " + state.pitch + "° / zoom " + state.zoom +
        " / 高度 " + state.heightScale;
    }
    ["depthSort", "wallExtrude", "tankExtrude", "shadows",
      "groundDetail", "ambientOcclusion", "haze", "craters", "grassFringe"].forEach(function (key) {
      var box = document.getElementById(key);
      if (box) { box.checked = Boolean(state[key]); }
    });
  }

  function bindControls() {
    document.querySelectorAll("[data-preset]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.__pseudo3d.setPreset(button.getAttribute("data-preset"));
      });
    });
    ["yaw", "pitch", "zoom", "height"].forEach(function (key) {
      var input = document.getElementById(key);
      if (!input) { return; }
      input.addEventListener("input", function () {
        var value = Number(input.value);
        if (key === "yaw") { state.yaw = value; }
        if (key === "pitch") { state.pitch = value; }
        if (key === "zoom") { state.zoom = value; }
        if (key === "height") { state.heightScale = value; }
        syncControls();
      });
    });
    ["depthSort", "wallExtrude", "tankExtrude", "shadows",
      "groundDetail", "ambientOcclusion", "haze", "craters", "grassFringe"].forEach(function (key) {
      var box = document.getElementById(key);
      if (!box) { return; }
      box.addEventListener("change", function () { state[key] = box.checked; });
    });
  }

  function start() {
    var preset = PRESETS[state.mode];
    state.yaw = preset.yaw;
    state.pitch = preset.pitch;
    state.heightScale = preset.height;
    if (params.get("depth") === "0") { state.depthSort = false; }
    if (params.get("walls") === "0") { state.wallExtrude = false; }
    if (params.get("tanks") === "0") { state.tankExtrude = false; }
    if (params.get("shadows") === "0") { state.shadows = false; }
    if (params.get("ground") === "0") { state.groundTexture = false; }
    if (params.get("detail") === "0") { state.groundDetail = false; }
    if (params.get("ao") === "0") { state.ambientOcclusion = false; }
    if (params.get("haze") === "0") { state.haze = false; }
    if (params.get("craters") === "0") { state.craters = false; }
    if (params.get("fringe") === "0") { state.grassFringe = false; }
    if (SHOT) {
      document.body.classList.add("shot");
      var panel = document.getElementById("panel");
      if (panel) { panel.style.display = "none"; }
    }
    prepareSprites();
    loadSprites();
    initWorld();
    bindInput();
    bindControls();
    syncControls();
    requestAnimationFrame(frame);
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    start();
  } else {
    window.addEventListener("DOMContentLoaded", start);
  }
}());
