"use strict";

// 2.5D 纵向压扁回归测试
//
// 规则：贴在某个世界坐标上的「竖直物体 / 文字 / 护盾」必须抵消相机俯仰造成的
// scale(1, k)；贴地的投影（阴影、预警圈、履带）必须跟着地面一起压扁。
// 这里用一个记录变换矩阵的假 2D context，直接断言绘制时的有效矩阵，
// 不依赖浏览器截图，也不依赖任何美术资源。

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () { this.onload = null; this.onerror = null; };
global.localStorage = {
  getItem: function () { return null; },
  setItem: function () {}
};

var root = path.resolve(__dirname, "..");

// ---------------------------------------------------------------- 假 context

function multiply(m, n) {
  return {
    a: m.a * n.a + m.c * n.b,
    b: m.b * n.a + m.d * n.b,
    c: m.a * n.c + m.c * n.d,
    d: m.b * n.c + m.d * n.d,
    e: m.a * n.e + m.c * n.f + m.e,
    f: m.b * n.e + m.d * n.f + m.f
  };
}

function applyMatrix(m, x, y) {
  return { x: m.a * x + m.c * y + m.e, y: m.b * x + m.d * y + m.f };
}

function gradientStub() {
  return { addColorStop: function () {} };
}

function makeContext(label) {
  var current = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  var stack = [];
  var target = {
    calls: [],
    canvas: { width: 1440, height: 900 },
    fillStyle: "#000",
    strokeStyle: "#000",
    lineWidth: 1,
    lineCap: "butt",
    lineJoin: "miter",
    globalAlpha: 1,
    globalCompositeOperation: "source-over",
    shadowColor: "transparent",
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    font: "10px sans-serif",
    textAlign: "start",
    textBaseline: "alphabetic",
    imageSmoothingEnabled: true,
    filter: "none"
  };
  var recording = ["fillRect", "strokeRect", "fillText", "strokeText", "drawImage", "arc", "ellipse", "moveTo", "lineTo"];
  recording.forEach(function (name) {
    target[name] = function () {
      target.calls.push({
        name: name,
        args: Array.prototype.slice.call(arguments),
        matrix: { a: current.a, b: current.b, c: current.c, d: current.d, e: current.e, f: current.f },
        label: label || ""
      });
    };
  });
  target.save = function () {
    stack.push({ a: current.a, b: current.b, c: current.c, d: current.d, e: current.e, f: current.f });
  };
  target.restore = function () {
    if (stack.length) { current = stack.pop(); }
  };
  target.translate = function (x, y) {
    current = multiply(current, { a: 1, b: 0, c: 0, d: 1, e: x || 0, f: y || 0 });
  };
  target.scale = function (x, y) {
    current = multiply(current, { a: x, b: 0, c: 0, d: y === undefined ? x : y, e: 0, f: 0 });
  };
  target.rotate = function (angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    current = multiply(current, { a: cos, b: sin, c: -sin, d: cos, e: 0, f: 0 });
  };
  target.setTransform = function (a, b, c, d, e, f) {
    current = { a: a, b: b, c: c, d: d, e: e, f: f };
  };
  target.resetTransform = function () {
    current = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  };
  target.createLinearGradient = gradientStub;
  target.createRadialGradient = gradientStub;
  target.createPattern = function () { return {}; };
  target.createImageData = function (width, height) {
    return { width: width, height: height, data: new Uint8ClampedArray(width * height * 4) };
  };
  target.getImageData = function (x, y, width, height) {
    return { width: width, height: height, data: new Uint8ClampedArray(width * height * 4) };
  };
  target.measureText = function (text) { return { width: String(text).length * 7 }; };
  target.getTransform = function () { return { a: current.a, b: current.b, c: current.c, d: current.d, e: current.e, f: current.f }; };

  // 未显式实现的方法一律当无操作，避免新增绘制代码把测试打挂
  return new Proxy(target, {
    get: function (object, property) {
      if (property in object) { return object[property]; }
      if (typeof property === "symbol") { return undefined; }
      return function () {};
    }
  });
}

function makeCanvasStub() {
  return {
    width: 0,
    height: 0,
    getContext: function () { return makeContext("sprite"); }
  };
}

global.document = {
  createElement: function (tag) {
    if (tag === "canvas") { return makeCanvasStub(); }
    return {};
  },
  getElementById: function () { return null; }
};

// ---------------------------------------------------------------- 加载模块

["config", "view", "collision", "entities", "map", "battlefield", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});
TankGame.Audio = {
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {}
};
require(path.join(root, "js", "game.js"));
require(path.join(root, "js", "field-skills.js"));

var View = TankGame.View;

// ---------------------------------------------------------------- 断言工具

function ratio(matrix) {
  // 纵向 / 横向缩放比：1 = 没被压扁，k = 跟着地面压扁
  return Math.abs(matrix.d) / Math.abs(matrix.a);
}

function assertClose(actual, expected, message, tolerance) {
  var limit = tolerance === undefined ? 1e-6 : tolerance;
  assert.ok(Math.abs(actual - expected) <= limit,
    message + "（期望 " + expected.toFixed(4) + "，实际 " + actual.toFixed(4) + "）");
}

function assertIsotropic(matrix, message) {
  assertClose(ratio(matrix), 1, message + "：不应被纵向压扁", 1e-6);
}

function assertGroundSquashed(matrix, k, message) {
  assertClose(ratio(matrix), k, message + "：应跟随地面压扁", 1e-6);
}

function findCall(context, name, predicate) {
  var matches = context.calls.filter(function (call) {
    return call.name === name && (!predicate || predicate(call));
  });
  return matches.length ? matches[matches.length - 1] : null;
}

var failures = 0;
function check(name, body) {
  try {
    body();
    console.log("  ok  " + name);
  } catch (error) {
    failures += 1;
    console.log("  FAIL " + name + " → " + error.message);
  }
}

// ---------------------------------------------------------------- 用例

var PITCH = 48;
View.setPitch(PITCH, false);
var K = View.k;
assert.ok(K < 0.9, "48° 俯仰应产生明显的纵向压缩");

check("View.billboard 在 2.5D 下把纵向拉回 1:1，2D 下不动", function () {
  var pitched = makeContext("billboard");
  pitched.scale(1, K);
  pitched.save();
  View.billboard(pitched);
  pitched.translate(10, 20);
  pitched.moveTo(0, 0);
  var probe = findCall(pitched, "moveTo");
  assert.ok(probe, "应记录到绘制调用");
  assertIsotropic(probe.matrix, "立牌补偿");

  View.setPitch(0, false);
  var flat = makeContext("flat");
  flat.save();
  View.billboard(flat);
  flat.translate(10, 20);
  flat.moveTo(0, 0);
  var flatProbe = findCall(flat, "moveTo");
  assertIsotropic(flatProbe.matrix, "2D 下应保持恒等");
  View.setPitch(PITCH, false);
});

check("2.5D 装饰物：贴图不被压扁，脚底落在地面点上", function () {
  var context = makeContext("decor");
  context.scale(1, K);
  var decoration = { x: 1234, y: 567, kind: "rock", scale: 1 };
  TankGame.Map.drawDecoration(context, decoration, { seed: 1, decorations: [decoration] }, true);
  var draw = findCall(context, "drawImage");
  assert.ok(draw, "装饰物应通过 drawImage 画出来");
  assertIsotropic(draw.matrix, "装饰物立牌");
  // 贴图矩形的「底边中点」往上让出透明边，必须落回装饰物的地面坐标
  var pad = TankGame.Battlefield.decorationPad;
  var bottomCenter = applyMatrix(draw.matrix,
    draw.args[1] + draw.args[3] / 2,
    draw.args[2] + draw.args[4] - pad);
  assertClose(bottomCenter.x, decoration.x, "装饰物脚底 X 应贴在地面点", 0.5);
  assertClose(bottomCenter.y, decoration.y * K, "装饰物脚底 Y 应贴在地面点", 0.5);
});

check("2.5D 装饰物的接地阴影仍然跟着地面压扁", function () {
  var context = makeContext("decor-shadow");
  context.scale(1, K);
  var decoration = { x: 400, y: 300, kind: "bush", scale: 1 };
  TankGame.Map.drawDecoration(context, decoration, { seed: 1 }, true);
  var shadow = findCall(context, "ellipse", function (call) {
    // 接地阴影是装饰物这一帧里唯一一个 ellipse
    return true;
  });
  assert.ok(shadow, "应画出接地阴影");
  assertGroundSquashed(shadow.matrix, K, "接地阴影");
});

check("2D 模式不接管装饰物（仍走旧的矢量绘制）", function () {
  var original = TankGame.Battlefield.drawDecoration;
  var called = false;
  TankGame.Battlefield.drawDecoration = function () { called = true; return true; };
  try {
    var context = makeContext("2d-decor");
    TankGame.Map.drawDecoration(context, { x: 200, y: 200, kind: "rock", scale: 1 }, { seed: 1 }, false);
    assert.strictEqual(called, false, "2D 不应调用 battlefield 的立牌绘制");
    assert.ok(context.calls.length > 0, "2D 仍应有绘制调用");
  } finally {
    TankGame.Battlefield.drawDecoration = original;
  }
});

check("联机玩家名字不被压扁", function () {
  var context = makeContext("name");
  context.scale(1, K);
  var tank = TankGame.Entities.createTank(600, 700, "enemy");
  tank.name = "联机玩家A";
  tank.alive = true;
  TankGame.Entities.drawTank(context, tank);
  var text = findCall(context, "fillText", function (call) { return call.args[0] === "联机玩家A"; });
  assert.ok(text, "名字应该被绘制");
  assertIsotropic(text.matrix, "玩家名字");
});

check("敌人血条不被压扁", function () {
  var context = makeContext("healthbar");
  context.scale(1, K);
  var tank = TankGame.Entities.createTank(300, 300, "enemy");
  tank.alive = true;
  tank.health = 25;
  tank.maxHealth = 50;
  TankGame.Entities.drawTank(context, tank);
  // 血条底色：50*scale 宽、6*scale 高
  var bar = findCall(context, "fillRect", function (call) {
    return Math.abs(call.args[2] - 50) < 0.001 && Math.abs(call.args[3] - 6) < 0.001;
  });
  assert.ok(bar, "血条应该被绘制");
  assertIsotropic(bar.matrix, "敌人血条");
});

check("等级护盾环不被压扁", function () {
  var context = makeContext("shield");
  context.scale(1, K);
  var tank = TankGame.Entities.createTank(500, 500, "player");
  tank.alive = true;
  tank.shieldCharges = 2;
  tank.shieldTimer = 3;
  TankGame.Entities.drawTank(context, tank);
  var ring = findCall(context, "arc", function (call) {
    return Math.abs(call.args[2] - 35) < 4 && call.args[3] === 0;
  });
  assert.ok(ring, "护盾环应该被绘制");
  assertIsotropic(ring.matrix, "等级护盾");
});

check("场地技能站点：插画立起来，底座仍贴地", function () {
  var context = makeContext("field-site");
  context.scale(1, K);
  var site = { left: 300, top: 200, width: 180, height: 180, centerX: 390, centerY: 290, theme: "undyingTotem" };
  var fakeGame = {
    fieldSite: site,
    getFieldSkill: function () { return { id: "undyingTotem", color: "#72cfff", label: "亡者图腾" }; }
  };
  TankGame.Game.prototype.drawFieldSite.call(fakeGame, context);

  var plate = findCall(context, "fillRect", function (call) {
    return Math.abs(call.args[0] - site.left) < 0.001 && Math.abs(call.args[1] - site.top) < 0.001;
  });
  assert.ok(plate, "应有贴地底座");
  assertGroundSquashed(plate.matrix, K, "站点底座");

  var panel = findCall(context, "fillRect", function (call) {
    return Math.abs(call.args[0]) < 0.001 && Math.abs(call.args[1]) < 0.001 &&
      Math.abs(call.args[2] - site.width) < 0.001 && Math.abs(call.args[3] - site.height) < 0.001;
  });
  assert.ok(panel, "应有立牌插画");
  assertIsotropic(panel.matrix, "站点插画");

  var label = findCall(context, "fillText", function (call) { return call.args[0] === "亡者图腾"; });
  assert.ok(label, "应有站点标题");
  assertIsotropic(label.matrix, "站点标题");

  // 立牌底边应压在站点南沿（世界坐标 → 屏幕 y）
  var bottom = applyMatrix(panel.matrix, 0, site.height);
  assertClose(bottom.y, (site.top + site.height) * K, "插画底边应落在站点南沿", 0.5);
});

check("地面类特效（迫击炮预警圈）保持压扁", function () {
  var context = makeContext("warning");
  context.scale(1, K);
  var fakeGame = { mortarWarnings: [{ x: 100, y: 120, radius: 40, alive: true }] };
  TankGame.Game.prototype.drawMortarWarnings.call(fakeGame, context);
  var ring = findCall(context, "arc", function (call) { return Math.abs(call.args[2] - 40) < 0.001; });
  assert.ok(ring, "预警圈应该被绘制");
  assertGroundSquashed(ring.matrix, K, "地面预警圈");
});

check("所有装饰物变体都能画出来且不报错", function () {
  var kinds = TankGame.Battlefield.decorationKinds();
  assert.ok(kinds.length >= 10, "装饰物种类应覆盖自然物 + 军事道具");
  var context = makeContext("decor-all");
  context.scale(1, K);
  kinds.forEach(function (entry) {
    for (var variant = 0; variant < entry.variants; variant += 1) {
      // 用不同的坐标逼出不同变体，同时保证脚底断言可复算
      var decoration = { x: 100 + variant * 37, y: 200 + variant * 53, kind: entry.kind, scale: 0.85 + variant * 0.1 };
      context.calls.length = 0;
      TankGame.Map.drawDecoration(context, decoration, { seed: 1 }, true);
      var draw = findCall(context, "drawImage");
      assert.ok(draw, entry.kind + " 变体 " + variant + " 应画出贴图");
      assertIsotropic(draw.matrix, entry.kind + " 立牌");
      var pad = TankGame.Battlefield.decorationPad;
      var foot = applyMatrix(draw.matrix,
        draw.args[1] + draw.args[3] / 2,
        draw.args[2] + draw.args[4] - pad);
      assertClose(foot.x, decoration.x, entry.kind + " 脚底 X", 0.5);
      assertClose(foot.y, decoration.y * K, entry.kind + " 脚底 Y", 0.5);
    }
  });
  assert.strictEqual(TankGame.Battlefield.lastDecorationError, undefined,
    "装饰贴图生成不应抛异常：" + JSON.stringify(TankGame.Battlefield.lastDecorationError || null));
});

check("2.5D 中央石台：石板按地面画，台基立面朝南", function () {
  var context = makeContext("platform");
  context.scale(1, K);
  var worldMap = {
    isBossMap: false,
    bossArena: { x: 200, y: 300, width: 840, height: 600, centerX: 620, centerY: 600 }
  };
  var drawn = TankGame.Battlefield.drawStonePlatform(context, worldMap);
  assert.strictEqual(drawn, true, "2.5D 石台应交给 battlefield 绘制");
  var floor = findCall(context, "fillRect", function (call) {
    return Math.abs(call.args[0] - 200) < 0.001 && Math.abs(call.args[1] - 300) < 0.001 &&
      Math.abs(call.args[2] - 840) < 0.001 && Math.abs(call.args[3] - 600) < 0.001;
  });
  assert.ok(floor, "石板地面应铺满整个竞技场");
  assertGroundSquashed(floor.matrix, K, "石板地面");
});

check("2.5D 坦克遗骸：车体是立牌，地面焦土跟着地面压扁", function () {
  var context = makeContext("wreck");
  context.scale(1, K);
  var wreck = { x: 900, y: 640, bodyAngle: 0.4, visualScale: 1, wreckParticles: [] };
  var drawn = TankGame.Battlefield.drawWreck(context, wreck, { life: 3, variant: 0 });
  assert.strictEqual(drawn, true, "遗骸应交给 battlefield 绘制");
  var draw = findCall(context, "drawImage");
  assert.ok(draw, "遗骸应画出贴图");
  assertIsotropic(draw.matrix, "遗骸车体");
  // 贴图中心要抬到车体高度（和坦克同一套 lift 约定），否则遗骸会陷进地面
  assertClose(draw.matrix.f, (wreck.y - View.lift) * K, "遗骸贴图中心应抬到车体高度", 0.5);
  // 焦土画在遗骸自己的世界坐标上（火焰里的烟圈不在这个位置，别抓错）
  var scorch = findCall(context, "arc", function (call) {
    return call.args[2] > 55 && Math.abs(call.args[0] - wreck.x) < 0.001;
  });
  assert.ok(scorch, "应有地面焦土");
  assertGroundSquashed(scorch.matrix, K, "遗骸地面焦土");
});

check("2.5D 固定炮台：基座与炮塔都是立牌，接地投影压扁", function () {
  var context = makeContext("turret");
  context.scale(1, K);
  var turret = {
    x: 700, y: 500, turretAngle: 0.5, visualScale: 1,
    isTurret: true, health: 40, maxHealth: 50
  };
  var drawn = TankGame.Battlefield.drawFixedTurret(context, turret, turret.y - View.lift);
  assert.strictEqual(drawn, true, "炮台应交给 battlefield 绘制");
  var images = context.calls.filter(function (call) { return call.name === "drawImage"; });
  assert.ok(images.length >= 2, "基座和炮塔都应画出来（实际 " + images.length + " 次）");
  images.forEach(function (call) { assertIsotropic(call.matrix, "炮台贴图"); });
  var shadow = findCall(context, "ellipse");
  assert.ok(shadow, "应有接地投影");
  assertGroundSquashed(shadow.matrix, K, "炮台接地投影");
});

check("炮台的炮口距离与当前模式的炮管长度对齐", function () {
  var art = TankGame.Battlefield.turretArt;
  View.setPitch(48, false);
  var pitched = TankGame.Entities.getMuzzleDistance({ isTurret: true, visualScale: 1 });
  // 2.5D 的炮口要落在贴图画出来的炮管口上，否则炮弹会从炮管中段冒出来
  assertClose(pitched, art.barrelTip * art.scale, "2.5D 炮口距离应等于炮管口位置", 0.5);
  View.setPitch(0, false);
  var flat = TankGame.Entities.getMuzzleDistance({ isTurret: true, visualScale: 1 });
  assertClose(flat, 46, "2D 仍用原版短炮管的 46", 0.01);
  View.setPitch(48, false);
});

check("2D 模式不接管遗骸与炮台（仍走原版矢量画法）", function () {
  View.setPitch(0, false);
  try {
    var turretContext = makeContext("turret-2d");
    TankGame.Entities.drawTank(turretContext, {
      x: 500, y: 400, turretAngle: 0, visualScale: 1, isTurret: true,
      team: "enemy", health: 40, maxHealth: 50, bodyAngle: 0
    });
    var turretImages = turretContext.calls.filter(function (call) { return call.name === "drawImage"; });
    assert.strictEqual(turretImages.length, 0, "2D 炮台不应绘制贴图");
    // 原版基座是 76×72 的 fillRect，认它能确认走的是旧路径
    var base = findCall(turretContext, "fillRect", function (call) {
      return Math.abs(call.args[0] + 38) < 0.001 && Math.abs(call.args[1] + 36) < 0.001 &&
        Math.abs(call.args[2] - 76) < 0.001 && Math.abs(call.args[3] - 72) < 0.001;
    });
    assert.ok(base, "2D 炮台应画原版的 76×72 基座");

    var wreckContext = makeContext("wreck-2d");
    TankGame.Entities.drawWreck(wreckContext, { x: 300, y: 300, bodyAngle: 0.2, wreckParticles: [] });
    var wreckImages = wreckContext.calls.filter(function (call) { return call.name === "drawImage"; });
    assert.strictEqual(wreckImages.length, 0, "2D 遗骸不应绘制贴图");
    var body = findCall(wreckContext, "fillRect", function (call) {
      return Math.abs(call.args[0] + 27) < 0.001 && Math.abs(call.args[1] + 24) < 0.001 &&
        Math.abs(call.args[2] - 54) < 0.001 && Math.abs(call.args[3] - 48) < 0.001;
    });
    assert.ok(body, "2D 遗骸应画原版的 54×48 车体");
  } finally {
    View.setPitch(48, false);
  }
});

check("火焰是竖直的：2.5D 下火舌与火星都不被压扁，只有贴地底焰压扁", function () {
  var context = makeContext("fire");
  context.scale(1, K);
  var drawn = TankGame.Battlefield.drawFire(context, 400, 300, { size: 30, intensity: 1, seed: 1, time: 5 });
  assert.strictEqual(drawn, true, "火焰应该画出来");
  var arcs = context.calls.filter(function (call) { return call.name === "arc"; });
  assert.ok(arcs.length > 0, "火焰应至少画出底焰和火星");
  var ground = 0;
  arcs.forEach(function (call) {
    var ratio = call.matrix.d / call.matrix.a;
    if (Math.abs(ratio - 1) < 0.001) { return; }
    // 底焰是贴着残骸摊开的一圈光，本来就该压扁（0.62 是它的固定压扁比）
    assert.ok(Math.abs(ratio - 0.62) < 0.001,
      "火焰里的圆弧只允许两种：竖直的（" + ratio.toFixed(3) + "）或贴地底焰（0.62）");
    ground += 1;
  });
  assert.strictEqual(ground, 1, "贴地底焰只该有一圈");
  assert.ok(arcs.length - ground >= 10, "火星和烟应该保持竖直（实际 " + (arcs.length - ground) + " 个）");
  var tongues = context.calls.filter(function (call) { return call.name === "moveTo"; });
  assert.ok(tongues.length >= 5, "应有多条火舌（实际 " + tongues.length + " 条）");
  tongues.forEach(function (call) { assertIsotropic(call.matrix, "火舌"); });
});

check("火焰根部沿椭圆起伏，不是一条直线", function () {
  var context = makeContext("fire-base");
  TankGame.Battlefield.drawFire(context, 400, 300, { size: 40, intensity: 1, seed: 2, time: 3, spread: 14 });
  // 前三层火舌各 5 条，取第一层的 5 个根部看高度差（后面几条是飘离火体的火舌，不算）
  var bases = context.calls.filter(function (call) { return call.name === "moveTo"; })
    .slice(0, 5).map(function (call) { return call.args[1]; });
  assert.strictEqual(bases.length, 5, "第一层应有 5 条火舌");
  var gap = Math.max.apply(null, bases) - Math.min.apply(null, bases);
  assert.ok(gap > 6, "各条火舌的根部高度应拉开差距（实际 " + gap.toFixed(1) + "px）");
});

check("炮台遗骸和坦克遗骸不是同一套画法", function () {
  var tankContext = makeContext("wreck-tank");
  tankContext.scale(1, K);
  TankGame.Battlefield.drawWreck(tankContext, { x: 400, y: 300, bodyAngle: 0 }, { life: 3 });
  var turretContext = makeContext("wreck-turret");
  turretContext.scale(1, K);
  TankGame.Battlefield.drawWreck(turretContext, { x: 400, y: 300, bodyAngle: 0, isTurret: true }, { life: 3 });

  function imagesOf(target) {
    return target.calls.filter(function (call) { return call.name === "drawImage"; })
      .map(function (call) { return call.args[0]; });
  }
  var tankImages = imagesOf(tankContext);
  var turretImages = imagesOf(turretContext);
  assert.ok(tankImages.length > 0 && turretImages.length > 0, "两种遗骸都应该画出来");
  tankImages.forEach(function (image) {
    assert.ok(turretImages.indexOf(image) === -1, "炮台遗骸不能复用坦克遗骸的画布");
  });

  // 基座比车体大一圈，焦土也要跟着更大
  var tankScorch = findCall(tankContext, "arc", function (call) {
    return call.args[2] > 55 && Math.abs(call.args[0] - 400) < 0.001;
  });
  var turretScorch = findCall(turretContext, "arc", function (call) {
    return call.args[2] > 55 && Math.abs(call.args[0] - 400) < 0.001;
  });
  assert.ok(tankScorch && turretScorch, "两种遗骸都应有地面焦土");
  assert.ok(turretScorch.args[2] > tankScorch.args[2] * 1.2,
    "炮台遗骸的焦土应该明显更大（" + turretScorch.args[2].toFixed(1) + " vs " + tankScorch.args[2].toFixed(1) + "）");
});

if (failures > 0) {
  console.error(failures + " 个 2.5D 比例用例失败");
  process.exit(1);
}
console.log("2.5D 比例回归：全部通过");
// 这个用例会建大量离屏 canvas，stdout 是管道时 node 跑完不会自己退出，
// 会把整个测试套件卡在这一行（CPU 归零、永远不结束），所以显式收尾。
setTimeout(function () { process.exit(0); }, 10);
