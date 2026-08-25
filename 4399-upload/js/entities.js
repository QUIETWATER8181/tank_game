(function () {
  "use strict";

  var TankGame = window.TankGame = window.TankGame || {};
  var Config = TankGame.Config;

  var tankSpriteDefinitions = {
    player: { scale: 0.13, muzzleDistance: 44, pixelated: false },
    enemy: { scale: 0.34, muzzleDistance: 46, pixelated: false },
    elite: { scale: 0.18, muzzleDistance: 49, pixelated: true },
    boss: { scale: 0.27, muzzleDistance: 56, pixelated: false }
  };
  var tankSprites = {};

  Object.keys(tankSpriteDefinitions).forEach(function (key) {
    var hull = new Image();
    var turret = new Image();
    hull.src = "assets/images/tanks/" + key + "-hull.png";
    turret.src = "assets/images/tanks/" + key + "-turret.png";
    tankSprites[key] = { hull: hull, turret: turret };
  });

  function wrapAngle(angle) {
    while (angle > Math.PI) { angle -= Math.PI * 2; }
    while (angle < -Math.PI) { angle += Math.PI * 2; }
    return angle;
  }

  function getTankSpriteKey(tank) {
    if (tank.team === "player") { return "player"; }
    if (tank.isBoss || tank.isBossClone) { return "boss"; }
    if (tank.isElite) { return "elite"; }
    return "enemy";
  }

  function spriteReady(image) {
    return Boolean(image && image.complete && image.naturalWidth > 0);
  }

  function drawSpriteLayer(context, image, tank, angle, drawY, definition, shadow) {
    context.save();
    context.globalAlpha = shadow ? 0.48 : 1;
    context.translate(tank.x, drawY);
    context.rotate(angle);
    context.scale((tank.visualScale || 1) * definition.scale, (tank.visualScale || 1) * definition.scale);
    context.imageSmoothingEnabled = !definition.pixelated;
    context.shadowColor = "rgba(0, 0, 0, 0.6)";
    context.shadowBlur = 8 / definition.scale;
    context.shadowOffsetY = 5 / definition.scale;
    if (tank.hitFlash > 0) {
      context.filter = "brightness(1.75) saturate(0.45)";
    } else if (shadow) {
      context.filter = "sepia(0.9) saturate(2.2) hue-rotate(225deg) brightness(0.72)";
    }
    context.drawImage(image, -256, -256);
    context.restore();
  }

  function drawTankSprites(context, tank, drawY, shadow) {
    var key = getTankSpriteKey(tank);
    var definition = tankSpriteDefinitions[key];
    var sprites = tankSprites[key];
    if (!sprites || !spriteReady(sprites.hull) || !spriteReady(sprites.turret)) { return false; }
    drawSpriteLayer(context, sprites.hull, tank, tank.bodyAngle, drawY, definition, shadow);
    drawSpriteLayer(context, sprites.turret, tank, tank.turretAngle, drawY, definition, shadow);
    return true;
  }

  function drawFixedTurret(context, tank, drawY) {
    var scale = (tank.visualScale || 1) * 1.12;
    var flash = tank.hitFlash > 0;

    // The base stays aligned to the battlefield while the armored head tracks its target.
    context.save();
    context.translate(tank.x, drawY);
    context.scale(scale, scale);
    context.shadowColor = "rgba(0, 0, 0, 0.72)";
    context.shadowBlur = 13;
    context.shadowOffsetY = 8;

    context.fillStyle = "#242722";
    context.fillRect(-38, -38, 76, 76);
    context.shadowColor = "transparent";
    context.fillStyle = flash ? "#ebe6cf" : "#67665e";
    context.fillRect(-35, -35, 70, 70);

    context.fillStyle = flash ? "#f4eed8" : "#9a927f";
    context.beginPath();
    context.moveTo(-27, -32);
    context.lineTo(27, -32);
    context.lineTo(32, -27);
    context.lineTo(32, 27);
    context.lineTo(27, 32);
    context.lineTo(-27, 32);
    context.lineTo(-32, 27);
    context.lineTo(-32, -27);
    context.closePath();
    context.fill();
    context.strokeStyle = "#3a3b36";
    context.lineWidth = 3;
    context.stroke();

    context.fillStyle = flash ? "#d9d4c2" : "#67675f";
    context.fillRect(-29, -29, 8, 58);
    context.fillRect(21, -29, 8, 58);
    context.fillRect(-17, -30, 34, 5);
    context.fillRect(-17, 25, 34, 5);
    context.fillStyle = "#343630";
    context.fillRect(-27, -20, 7, 14);
    context.fillRect(-27, 6, 7, 14);
    context.fillRect(20, -20, 7, 14);
    context.fillRect(20, 6, 7, 14);

    context.fillStyle = "#252823";
    [[-27, -27], [27, -27], [27, 27], [-27, 27]].forEach(function (bolt) {
      context.beginPath();
      context.arc(bolt[0], bolt[1], 2.2, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();

    context.save();
    context.translate(tank.x, drawY);
    context.rotate(tank.turretAngle);
    context.scale(scale, scale);
    context.shadowColor = "rgba(0, 0, 0, 0.58)";
    context.shadowBlur = 8;
    context.shadowOffsetY = 4;

    if (tank.turretWeapon === "mortar") {
      context.fillStyle = "#20231f";
      context.beginPath();
      context.moveTo(-19, -20);
      context.lineTo(14, -20);
      context.lineTo(27, -10);
      context.lineTo(27, 10);
      context.lineTo(14, 20);
      context.lineTo(-19, 20);
      context.closePath();
      context.fill();
      context.fillStyle = flash ? "#ead9c5" : "#79796d";
      context.beginPath();
      context.moveTo(-16, -16);
      context.lineTo(11, -16);
      context.lineTo(21, -8);
      context.lineTo(21, 8);
      context.lineTo(11, 16);
      context.lineTo(-16, 16);
      context.closePath();
      context.fill();
      context.strokeStyle = "#363933";
      context.lineWidth = 3;
      context.stroke();
      context.fillStyle = "#33362f";
      context.fillRect(-8, -8, 20, 16);
      context.fillStyle = "#1a1d1a";
      context.save();
      context.translate(13, 0);
      context.rotate(-0.54);
      context.fillRect(-3, -10, 35, 20);
      context.fillStyle = "#595747";
      context.fillRect(0, -7, 29, 14);
      context.fillStyle = "#151713";
      context.fillRect(27, -11, 7, 22);
      context.restore();
      context.fillStyle = "#c24d3d";
      context.beginPath();
      context.arc(-12, 13, 3.2, 0, Math.PI * 2);
      context.fill();
    } else {
      context.fillStyle = "#20231f";
      context.fillRect(8, -7, 52, 14);
      context.fillStyle = flash ? "#eee9d3" : "#8e8877";
      context.fillRect(9, -5, 47, 10);
      context.fillStyle = "#403f39";
      context.fillRect(27, -6, 5, 12);
      context.fillRect(47, -6, 5, 12);
      context.fillStyle = "#171a17";
      context.fillRect(55, -8, 9, 16);
      context.fillStyle = "#b4aa91";
      context.fillRect(55, -4, 7, 8);

      context.fillStyle = flash ? "#f4eed8" : "#b2a98f";
      context.beginPath();
      context.moveTo(-19, -16);
      context.lineTo(-8, -23);
      context.lineTo(13, -20);
      context.lineTo(23, -10);
      context.lineTo(23, 10);
      context.lineTo(13, 20);
      context.lineTo(-8, 23);
      context.lineTo(-19, 16);
      context.closePath();
      context.fill();
      context.strokeStyle = "#393a34";
      context.lineWidth = 3;
      context.stroke();

      context.fillStyle = flash ? "#ded8c4" : "#817b6b";
      context.beginPath();
      context.arc(-4, 0, 11, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = "#4a4941";
      context.lineWidth = 2;
      context.stroke();
      context.fillStyle = "#393b35";
      context.fillRect(-11, -2, 14, 4);
    }

    if (tank.turretWeapon !== "mortar") {
      context.fillStyle = tank.turretWeapon === "bomb" ? "#d89a35" : "#8eaa4a";
      context.beginPath();
      context.arc(-14, 13, 2.8, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }
  function isBoundaryObstacle(obstacle) {
    return obstacle.row === 0 || obstacle.row === TankGame.Map.rows - 1 ||
      obstacle.column === 0 || obstacle.column === TankGame.Map.columns - 1;
  }

  function breakParadiseWalls(tank, worldMap, circle, onWallBroken) {
    if (!tank.paradiseMade || !worldMap || !worldMap.obstacles || !onWallBroken) { return; }
    worldMap.obstacles.slice().forEach(function (obstacle) {
      if (isBoundaryObstacle(obstacle) || obstacle.kind === "W" || !TankGame.Collision.circleIntersectsRectangle(circle, obstacle)) { return; }
      onWallBroken(obstacle);
    });
  }

  function BossEnemy(x, y, skillPool) {
    var tank = TankGame.Entities.createTank(x, y, "enemy");
    var shuffled = (skillPool || []).slice();
    for (var i = shuffled.length - 1; i > 0; i -= 1) {
      var swapIndex = Math.floor(Math.random() * (i + 1));
      var swap = shuffled[i];
      shuffled[i] = shuffled[swapIndex];
      shuffled[swapIndex] = swap;
    }
    Object.assign(this, tank);
    this.isBoss = true;
    this.boss_skills = shuffled.slice(0, Math.min(3, shuffled.length));
    this.skill_states = {};
    this.boss_skills.forEach(function (skill) {
      this.skill_states[skill] = { state: "ready", timer: 0, phase: "ready" };
    }, this);
    this.active_skill = null;
  }

  TankGame.Entities = {
    createTank: function (x, y, team) {
      return {
        type: "tank",
        x: x,
        y: y,
        team: team,
        bodyAngle: 0,
        turretAngle: 0,
        health: 100,
        radius: 23,
        fireCooldown: 0,
        hitFlash: 0,
        alive: true,
        wreck: false,
        wreckLife: 0,
        wreckParticles: []
      };
    },

    chooseTurretWeapon: function (randomValue) {
      var roll = typeof randomValue === "number" ? randomValue : Math.random();
      if (roll < Config.fixedTurret.weaponBreakpoints.bullet) { return "bullet"; }
      if (roll < Config.fixedTurret.weaponBreakpoints.bomb) { return "bomb"; }
      return "mortar";
    },

    createTurret: function (x, y, team, randomValue) {
      var turret = this.createTank(x, y, team);
      turret.isTurret = true;
      turret.canMove = false;
      turret.attackRangeMultiplier = Config.fixedTurret.attackRangeMultiplier;
      turret.turretWeapon = this.chooseTurretWeapon(randomValue);
      return turret;
    },

    updatePlayer: function (tank, input, worldMap, deltaTime, wrecks, onWallBroken) {
      var turn = 0;
      var direction = 0;
      var speed;
      var distance;
      var nextX;
      var nextY;

      if (input.isDown("KeyA")) { turn -= 1; }
      if (input.isDown("KeyD")) { turn += 1; }
      if (input.isDown("KeyW")) { direction += 1; }
      if (input.isDown("KeyS")) { direction -= 1; }

      tank.bodyAngle = wrapAngle(tank.bodyAngle + turn * Config.playerTurnSpeed * deltaTime);
      speed = (direction >= 0 ? Config.playerSpeed : Config.playerReverseSpeed) * (tank.moveSpeedMultiplier || 1);
      distance = direction * speed * deltaTime;
      nextX = tank.x + Math.cos(tank.bodyAngle) * distance;
      nextY = tank.y + Math.sin(tank.bodyAngle) * distance;

      breakParadiseWalls(tank, worldMap, { x: nextX, y: tank.y, radius: tank.radius }, onWallBroken);
      if ((tank.voidWalker && !tank.wallLocked || !TankGame.Map.circleCollides(worldMap, { x: nextX, y: tank.y, radius: tank.radius })) &&
          !TankGame.Collision.tankCollidesWithWreck({ x: nextX, y: tank.y, radius: tank.radius }, wrecks)) {
        tank.x = nextX;
      }
      breakParadiseWalls(tank, worldMap, { x: tank.x, y: nextY, radius: tank.radius }, onWallBroken);
      if ((tank.voidWalker && !tank.wallLocked || !TankGame.Map.circleCollides(worldMap, { x: tank.x, y: nextY, radius: tank.radius })) &&
          !TankGame.Collision.tankCollidesWithWreck({ x: tank.x, y: nextY, radius: tank.radius }, wrecks)) {
        tank.y = nextY;
      }

      if (input.pointer.inside) {
        tank.turretAngle = Math.atan2(input.pointer.y - tank.y, input.pointer.x - tank.x);
      }
      tank.fireCooldown = Math.max(0, tank.fireCooldown - deltaTime);
      tank.hitFlash = Math.max(0, tank.hitFlash - deltaTime);
    },

    drawTank: function (context, tank) {
      var scale = tank.visualScale || 1;
      var elite = tank.team === "enemy" && tank.isElite;
      var boss = tank.team === "enemy" && tank.isBoss;
      var turret = tank.team === "enemy" && tank.isTurret;
      var shadow = tank.team === "enemy" && tank.isShadow;
      var drawY = tank.y - (tank.leapHeight || 0);
      if (tank.wreck) {
        this.drawWreck(context, tank);
        return;
      }
      if (turret) {
        drawFixedTurret(context, tank, drawY);
        context.save();
        context.fillStyle = "rgba(20, 18, 14, 0.86)";
        context.fillRect(tank.x - 33 * scale, drawY - 51 * scale, 66 * scale, 6);
        context.fillStyle = "#d3a448";
        context.fillRect(tank.x - 32 * scale, drawY - 50 * scale, 64 * scale * Math.max(0, tank.health / (tank.maxHealth || 50)), 4);
        context.restore();
        return;
      }
      if (!drawTankSprites(context, tank, drawY, shadow)) {
        context.save();
        context.globalAlpha = shadow ? 0.48 : 1;
        context.translate(tank.x, drawY);
        context.rotate(tank.bodyAngle);
        context.scale(scale, scale);
        context.shadowColor = "rgba(0, 0, 0, 0.55)";
        context.shadowBlur = 10;
        context.shadowOffsetY = 6;
        context.fillStyle = "#101815";
        context.fillRect(-27, -25, 54, 50);
        context.fillStyle = tank.hitFlash > 0 ? "#f1f4d6" : (tank.team === "player" ? "#2f463c" : (boss ? "#8b0000" : (elite ? "#72191d" : (shadow ? "#392a55" : "#5c332f"))));
        context.fillRect(-21, -22, 42, 44);
        context.fillStyle = tank.team === "player" ? "#8cf6c3" : (boss ? "#ffd700" : (elite ? "#c89b3c" : (shadow ? "#c77dff" : "#ff8e71")));
        context.fillRect(-28, -25, 9, 50);
        context.fillRect(19, -25, 9, 50);
        if (elite || boss) {
          context.fillStyle = "rgba(242, 196, 91, 0.5)";
          context.fillRect(-14, -20, 5, 40);
          context.fillRect(5, -20, 5, 40);
        }
        context.fillStyle = boss ? "#ffd700" : "#d9eee4";
        context.beginPath();
        context.moveTo(25, 0);
        context.lineTo(12, -14);
        context.lineTo(12, 14);
        context.closePath();
        context.fill();
        context.restore();

        context.save();
        context.globalAlpha = shadow ? 0.48 : 1;
        context.translate(tank.x, drawY);
        context.rotate(tank.turretAngle);
        context.scale(scale, scale);
        context.fillStyle = boss ? "#ffd700" : (elite ? "#e3b957" : "#d9eee4");
        context.fillRect(0, -5, 42, 10);
        context.fillStyle = "#101815";
        context.fillRect(34, -7, 13, 14);
        context.beginPath();
        context.arc(0, 0, 17, 0, Math.PI * 2);
        context.fillStyle = tank.team === "player" ? "#5ed6a6" : (boss ? "#8b0000" : (elite ? "#a91f27" : (shadow ? "#6b4c91" : "#d9614c")));
        context.fill();
        context.strokeStyle = boss ? "#ffd700" : (elite ? "#e3b957" : "#d9eee4");
        context.lineWidth = 3;
        context.stroke();
        context.fillStyle = "#10231c";
        context.font = "700 9px Consolas, monospace";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(tank.team === "player" ? "XPZ" : (boss ? "B" : (elite ? "EL" : (shadow ? "S" : "EN"))), 0, 1);
        context.restore();
      }

      context.save();
      context.globalAlpha = shadow ? 0.48 : 1;
      context.translate(tank.x, drawY);
      context.rotate(tank.bodyAngle);
      context.scale(scale, scale);
      context.strokeStyle = tank.team === "player" ? "#58f3ff" : (boss ? "#ffd700" : (elite ? "#ff4b3e" : (shadow ? "#c77dff" : "#ffd75f")));
      context.lineWidth = 5;
      context.lineCap = "round";
      context.shadowColor = context.strokeStyle;
      context.shadowBlur = 12;
      context.beginPath();
      context.arc(0, 0, 32, -0.72, 0.72);
      context.stroke();
      context.restore();


      if (tank.team === "enemy") {
        context.save();
        context.globalAlpha = shadow ? 0.52 : 1;
        context.fillStyle = "rgba(4, 10, 8, 0.82)";
        context.fillRect(tank.x - 25 * scale, drawY - 38 * scale, 50 * scale, 6);
        context.fillStyle = boss ? "#ffd700" : (elite ? "#e3b957" : (shadow ? "#c77dff" : "#ff8068"));
        context.fillRect(tank.x - 24 * scale, drawY - 37 * scale, 48 * scale * Math.max(0, tank.health / (tank.maxHealth || 50)), 4);
        context.restore();
      }

      if (boss && tank.bossShieldCharges > 0) {
        context.save();
        context.translate(tank.x, drawY);
        context.rotate(tank.bodyAngle);
        context.strokeStyle = "rgba(255, 215, 0, 0.9)";
        context.fillStyle = "rgba(255, 215, 0, 0.16)";
        context.lineWidth = 6;
        context.shadowColor = "#ffd700";
        context.shadowBlur = 18;
        context.beginPath();
        context.arc(0, 0, 42, -0.78, 0.78);
        context.lineTo(0, 0);
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
      }

      if (tank.team === "player" && tank.frontShieldCharges > 0) {
        context.save();
        context.translate(tank.x, drawY);
        context.rotate(tank.bodyAngle);
        context.strokeStyle = "#72cfff";
        context.lineWidth = 5;
        context.shadowColor = "#72cfff";
        context.shadowBlur = 14;
        context.beginPath();
        context.arc(0, 0, 39, -0.72, 0.72);
        context.stroke();
        context.restore();
      }

      if (tank.team === "player" && tank.shieldCharges > 0 && (tank.levelShield || tank.shieldTimer > 0)) {
        context.save();
        context.strokeStyle = "rgba(114, 207, 255, 0.85)";
        context.lineWidth = 2 + Math.min(3, tank.shieldCharges);
        context.shadowColor = "#72cfff";
        context.shadowBlur = 16;
        context.beginPath();
        context.arc(tank.x, tank.y, 35 + Math.sin(performance.now() / 110) * 2, 0, Math.PI * 2);
        context.stroke();
        context.restore();
      }
    },

    getMuzzleDistance: function (tank) {
      var definition = tankSpriteDefinitions[getTankSpriteKey(tank)];
      return (definition ? definition.muzzleDistance : 49) * (tank.visualScale || 1);
    },

    drawWreck: function (context, wreck) {
      context.save();
      context.translate(wreck.x, wreck.y);
      context.rotate(wreck.bodyAngle);
      context.scale(wreck.visualScale || 1, wreck.visualScale || 1);
      context.shadowColor = "rgba(0, 0, 0, 0.8)";
      context.shadowBlur = 12;
      context.fillStyle = "#171b1a";
      context.fillRect(-27, -24, 54, 48);
      context.fillStyle = "#353b38";
      context.fillRect(-22, -19, 44, 38);
      context.strokeStyle = "#0a0d0c";
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(-21, -17); context.lineTo(20, 16);
      context.moveTo(20, -17); context.lineTo(-21, 16);
      context.stroke();
      context.restore();

      var now = performance.now();
      context.save();
      context.translate(wreck.x, wreck.y);
      context.rotate(wreck.bodyAngle);
      wreck.wreckParticles.forEach(function (particle) {
        var time = now * particle.speed;
        var flicker = 0.62 + Math.sin(particle.phase + time / 85) * 0.34;
        var rise = Math.abs(Math.sin(particle.phase + time / 155)) * particle.rise;
        var sway = Math.sin(particle.phase * 1.7 + time / 120) * particle.sway;
        var size = particle.size * (0.82 + Math.abs(Math.sin(particle.phase + time / 105)) * 0.32);
        context.save();
        context.globalAlpha = flicker * Math.min(1, wreck.wreckLife / 0.25);
        context.fillStyle = particle.color;
        context.shadowColor = particle.color;
        context.shadowBlur = 14;
        context.fillRect(particle.x + sway - size / 2, particle.y - rise - size / 2, size, size);
        context.restore();
      });
      context.restore();
    },

    createBullet: function (x, y, angle, team) {
      return {
        type: "bullet",
        x: x,
        y: y,
        previousX: x,
        previousY: y,
        angle: angle,
        team: team,
        radius: Config.bulletRadius,
        speed: Config.bulletSpeed,
        damage: Config.bulletDamage,
        lifetime: Config.bulletLifetime,
        trackingRemaining: 0,
        armingTime: 0,
        fragment: false,
        alive: true
      };
    },

    drawBullet: function (context, bullet) {
      if (bullet.fixedTurretMortar) {
        var progress = 1 - Math.max(0, bullet.flightTimer) / bullet.flightDuration;
        var height = Math.sin(progress * Math.PI) * 56;
        context.save();
        context.shadowColor = "#ff6b51";
        context.shadowBlur = 15;
        context.fillStyle = "#d24f3b";
        context.beginPath();
        context.arc(bullet.x, bullet.y - height, bullet.radius * 2, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "#ffd18a";
        context.beginPath();
        context.arc(bullet.x - 4, bullet.y - height - 4, Math.max(4, bullet.radius * 0.35), 0, Math.PI * 2);
        context.fill();
        context.restore();
        return;
      }
      context.save();
      context.strokeStyle = bullet.fieldArmor ? "rgba(255, 68, 54, 0.88)" : (bullet.team === "player" ? "rgba(183, 255, 220, 0.7)" :
        (bullet.bossBomb ? "rgba(255, 176, 0, 0.82)" : (bullet.bossBurst ? "rgba(255, 215, 0, 0.78)" : "rgba(255, 143, 113, 0.72)")));
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(bullet.previousX, bullet.previousY);
      context.lineTo(bullet.x, bullet.y);
      context.stroke();
      context.shadowColor = bullet.fieldArmor ? "#ff3b30" : (bullet.team === "player" ? "#8cf6c3" : (bullet.bossBomb || bullet.bossBurst ? "#ffd700" : "#ff715c"));
      context.shadowBlur = bullet.bossBomb ? 20 : 12;
      context.fillStyle = bullet.fieldArmor ? "#ff453a" : (bullet.bossBomb ? "#ff8c00" : (bullet.bossBurst ? "#fff2a8" : "#fff7cf"));
      context.beginPath();
      context.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }
  };

  TankGame.Entities.BossEnemy = BossEnemy;
}());

