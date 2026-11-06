// 进战场后把镜头挪到中央石台旁边，并挑一个最近的装饰物入镜，然后截图。
// 用法：
//   node tools/pseudo3d/shoot.js --page=index.html --query="pitch=48&stats=1" \
//     --afterFile=tools/pseudo3d/after-arena.js --afterWait=5200 --out=... --raw=1 \
//     --evalFile=tools/pseudo3d/eval-probe.js
// 加 &nodecor=1 可以隐藏装饰物，用来做「有/无装饰物」的 A/B 像素对比。
// 地图种子固定成 20261101，两次运行才是同一张图。
(function () {
  var SEED = 20261101;
  var noDecor = /[?&]nodecor=1/.test(window.location.search);
  var noFreeze = /[?&]nofreeze=1/.test(window.location.search);
  // 清空敌人会立刻触发「关卡完成」遮罩把画面压暗，只有做 A/B 时才清
  var keepEnemies = /[?&]keepenemies=1/.test(window.location.search);

  var originalCreate = TankGame.Map.create;
  TankGame.Map.create = function (options) {
    options = options || {};
    options.seed = SEED;
    return originalCreate.call(this, options);
  };

  document.getElementById("startButton").click();

  // 抓住 Game 实例（main.js 没有把实例挂到 window 上）
  var P = TankGame.Game.prototype;
  function hook(name) {
    var original = P[name];
    P[name] = function () {
      window.__g = this;
      P[name] = original;
      return original.apply(this, arguments);
    };
  }
  hook("render");
  hook("updateCamera");

  setTimeout(function () {
    var game = window.__g;
    if (!game) { window.__probe = { error: "no game instance" }; return; }
    game.player.invulnerable = 999;
    if (!keepEnemies) { game.enemies.length = 0; }
    var arena = game.worldMap.bossArena;
    var decorations = game.worldMap.decorations || [];
    var best = null;
    var bestDistance = Infinity;
    for (var index = 0; index < decorations.length; index += 1) {
      var decoration = decorations[index];
      var distance = Math.abs(decoration.x - arena.centerX) * 0.5 +
        Math.abs(decoration.y - (arena.y + arena.height) - 240);
      if (distance < bestDistance) { bestDistance = distance; best = decoration; }
    }
    // 站在石台南沿外侧（正对石台中心），整块石台 + 附近装饰物一起入镜
    game.player.x = arena.centerX + 120;
    game.player.y = arena.y + arena.height + 60;
    game.updateCamera(0.016, true);
    window.__probe = {
      seed: SEED,
      px: Math.round(game.player.x),
      py: Math.round(game.player.y),
      decor: best ? best.kind : null,
      decorCount: decorations.length,
      arena: arena
    };
    if (noDecor) {
      setTimeout(function () {
        game.worldMap.decorations.length = 0;
        window.__probe.hiddenDecor = true;
      }, 300);
    }

    if (noFreeze) { return; }
    // 冻结一帧再截图：停掉 rAF、把 elapsed 钉死，这样两次运行画出来的
    // 是完全同一帧，A/B 像素差就只剩装饰物本身（否则会被场上的脉冲/闪光盖掉）。
    // 时间点要排在倒计时结束之后，否则画面被倒计时遮罩压暗。
    setTimeout(function () {
      window.requestAnimationFrame = function () { return 0; };
      setTimeout(function () {
        game.elapsed = 12.345;
        game.updateCamera(0.016, true);
        game.render();
        window.__probe.frozen = true;
      }, 120);
    }, 2600);
  }, 2200);
  return "started";
}())
