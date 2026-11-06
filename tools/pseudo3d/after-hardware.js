// 进战场后摆一个固定炮台 + 两具刚炸毁的遗骸，用来看新贴图在实机里的样子。
// 用法：
//   node tools/pseudo3d/shoot.js --page=index.html --query="pitch=48&freeze=1" \
//     --afterFile=tools/pseudo3d/after-hardware.js --afterWait=6500 --out=... --raw=1 \
//     --evalFile=tools/pseudo3d/eval-probe.js
// 加 &pitch=off 就是 2D 对照；加 &freeze=1 冻结一帧，避免火星位置每次不同；
// 加 &nohardware=1 不摆炮台/遗骸，用来和上面那版做像素 A/B。
(function () {
  var SEED = 20261101;
  var freeze = /[?&]freeze=1/.test(window.location.search);
  var noEnemies = /[?&]noenemies=1/.test(window.location.search);
  var noHardware = /[?&]nohardware=1/.test(window.location.search);
  // 加 &nofire=1 把火关掉，专门看残骸本身的造型（火会盖住轮廓）
  var noFire = /[?&]nofire=1/.test(window.location.search);

  var originalCreate = TankGame.Map.create;
  TankGame.Map.create = function (options) {
    options = options || {};
    options.seed = SEED;
    return originalCreate.call(this, options);
  };

  document.getElementById("startButton").click();

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
    var Entities = TankGame.Entities;
    game.player.invulnerable = 999;
    if (noFire && TankGame.Battlefield) {
      TankGame.Battlefield.drawFire = function () { return true; };
    }

    // 站到出生点北边一点的空地上
    var spawn = game.worldMap.playerSpawn;
    game.player.x = spawn.x;
    game.player.y = spawn.y - 120;
    game.player.bodyAngle = -Math.PI / 2;
    game.player.turretAngle = -Math.PI / 2;

    // 右侧：固定炮台，炮口对着玩家
    var turret = Entities.createTurret(game.player.x + 170, game.player.y - 40, "enemy");
    turret.mode = game.mode || TankGame.Config.modes.normal;   // 手动塞进 enemies 时要补 AI 用的难度配置
    turret.turretAngle = Math.PI;
    turret.health = turret.maxHealth;
    if (!noHardware) { game.enemies.push(turret); }

    // 左侧：两具遗骸（一具还在猛烧，一具快烧完了）。
    // 注意 wreckLife 每帧都会递减、归零就整具消失，所以这里给大一点，
    // 冻结帧时才还在烧（默认 3 秒的话 2.6 秒后已经没了）。
    var wreckA = Entities.createTank(game.player.x - 160, game.player.y - 60, "enemy");
    wreckA.alive = false;
    wreckA.wreck = true;
    wreckA.wreckLife = 8;
    wreckA.bodyAngle = 0.6;
    wreckA.wreckParticles = [];   // 火星是随机初始化的，留着会让截图每次都不一样
    if (!noHardware) { game.enemies.push(wreckA); }

    var wreckB = Entities.createTank(game.player.x - 150, game.player.y + 90, "enemy");
    wreckB.alive = false;
    wreckB.wreck = true;
    wreckB.wreckLife = 4.5;
    wreckB.bodyAngle = -1.1;
    wreckB.wreckParticles = [];
    if (!noHardware) { game.enemies.push(wreckB); }

    // 玩家阵亡留下的那种残骸（走 game.wrecks 那条绘制路径）
    if (!noHardware) {
      game.wrecks.push({
        x: game.player.x + 130,
        y: game.player.y + 110,
        angle: 2.2,
        life: 9,
        playerDeathWreck: true
      });
    }

    // 右上：被击毁的固定炮台（走 isTurret 分支，贴图另一套）
    var turretWreck = Entities.createTurret(game.player.x + 150, game.player.y - 200, "enemy");
    turretWreck.alive = false;
    turretWreck.wreck = true;
    turretWreck.wreckLife = 6;
    turretWreck.wreckParticles = [];
    if (!noHardware) { game.enemies.push(turretWreck); }

    if (noEnemies) {
      // 留一个在地图角落的「保活」敌人：清空敌人会触发关卡完成遮罩，整屏都不一样，
      // 就没法拿来做 A/B 了。
      var keeper = Entities.createTank(240, 240, "enemy");
      keeper.mode = game.mode || TankGame.Config.modes.normal;
      keeper.__keeper = true;
      game.enemies.push(keeper);
      game.enemies = game.enemies.filter(function (enemy) {
        return enemy.wreck || enemy.isTurret || enemy.__keeper;
      });
    }

    game.updateCamera(0.016, true);
    // 把各物件换算成屏幕坐标，方便和像素 A/B 的热点位置对照
    var view = TankGame.View;
    function toScreen(point) {
      return {
        x: Math.round(point.x - game.camera.x),
        y: Math.round((point.y - game.camera.y) * view.k)
      };
    }
    window.__probe = {
      seed: SEED,
      px: Math.round(game.player.x),
      py: Math.round(game.player.y),
      turret: { x: Math.round(turret.x), y: Math.round(turret.y) },
      screen: {
        player: toScreen(game.player),
        turret: toScreen(turret),
        wreckA: toScreen(wreckA),
        wreckB: toScreen(wreckB),
        turretWreck: toScreen(turretWreck),
        playerWreck: toScreen({ x: game.player.x + 130, y: game.player.y + 110 })
      },
      enemies: game.enemies.length,
      wrecks: game.wrecks.length
    };

    if (!freeze) { return; }
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
