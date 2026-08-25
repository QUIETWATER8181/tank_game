"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () {
  this.complete = false;
  this.naturalWidth = 0;
};
global.localStorage = {
  getItem: function () { return null; },
  setItem: function () {}
};

var root = path.resolve(__dirname, "..");
["config", "collision", "entities", "cinematic", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});
TankGame.Audio = {
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {},
  setMusicTrack: function () {},
  startCinematicAudio: function () {},
  stopCinematicAudio: function () {}
};
require(path.join(root, "js", "game.js"));

function createGame(mode) {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, pressed: false, inside: false },
    isDown: function () { return false; },
    reset: function () {},
    setCamera: function () {}
  };
  var game = new TankGame.Game(canvas, input);
  game.setMode(mode);
  game.start();
  if (game.state === TankGame.Config.states.CINEMATIC) { game.finishBossCinematic(); }
  game.worldMap.obstacles = [];
  game.worldMap.obstacleGrid = Array.from({ length: TankGame.Map.rows }, function () {
    return Array(TankGame.Map.columns).fill(null);
  });
  game.worldMap._obstacleGridCount = 0;
  game.player.invulnerable = 0;
  game.player.shieldCharges = 0;
  game.player.shieldTimer = 0;
  game.player.frontShieldCharges = 0;
  return game;
}

function updateProjectileUntilStopped(game, bullet, maximumSteps) {
  for (var step = 0; step < maximumSteps && bullet.alive; step += 1) {
    game.updateBullet(bullet, 0.05);
  }
}

function verifyLeapFrequency() {
  var game = createGame("brave");
  var boss = game.findLevelBoss();
  var leapConfig = game.getBossSkillConfig("leap");
  var starts = [];
  var previousSkill = null;
  var maximumObservedHeight = 0;

  boss.boss_skills = ["leap"];
  boss.skill_states = { leap: { state: "ready", timer: 0, phase: "ready" } };
  boss.active_skill = null;
  boss.skillDecisionTimer = 0;
  boss.bossChargeCooldown = Infinity;
  boss.bossBurstTimer = Infinity;
  game.player.x = boss.x + leapConfig.distantTriggerRange + 200;
  game.player.y = boss.y;

  for (var index = 0; index < 1200; index += 1) {
    var elapsed = (index + 1) * 0.05;
    game.updateBossEnemies(0.05);
    maximumObservedHeight = Math.max(maximumObservedHeight, boss.leapHeight || 0);
    if (boss.active_skill !== previousSkill) {
      if (boss.active_skill === "leap") { starts.push(elapsed); }
      previousSkill = boss.active_skill;
    }
    if (!boss.active_skill && boss.skill_states.leap.state === "ready") {
      game.player.x = boss.x + leapConfig.distantTriggerRange + 200;
      game.player.y = boss.y;
    }
  }

  var intervals = starts.slice(1).map(function (value, index) {
    return Number((value - starts[index]).toFixed(2));
  });
  var expectedInterval = leapConfig.duration + leapConfig.cooldown;
  assert.ok(starts.length >= 16, "Leap should repeatedly trigger while the player remains distant");
  assert.ok(maximumObservedHeight > 30, "Leap should produce a visible airborne arc");
  assert.ok(intervals.every(function (interval) {
    return interval >= expectedInterval && interval <= expectedInterval + 0.1;
  }), "Leap usage must respect its configured duration and cooldown");

  return { count: starts.length, interval: intervals[0], cooldown: leapConfig.cooldown };
}

function verifyBossMortar() {
  var game = createGame("brave");
  var boss = game.findLevelBoss();
  var mortarBullet = null;
  var healthBefore = game.player.health;

  boss.x = game.worldMap.bossArena.centerX - 180;
  boss.y = game.worldMap.bossArena.centerY;
  game.player.x = boss.x + 300;
  game.player.y = boss.y;
  boss.boss_skills = ["mortar"];
  boss.skill_states = { mortar: { state: "ready", timer: 0, phase: "ready" } };
  boss.active_skill = null;
  boss.skillDecisionTimer = 0;
  boss.bossChargeCooldown = Infinity;
  boss.bossBurstTimer = Infinity;
  boss.fireCooldown = 0;
  boss.reactionTimer = 0;
  boss.turretAngle = 0;

  for (var step = 0; step < 420 && !mortarBullet; step += 1) {
    game.updateBossEnemies(1 / 60);
    TankGame.AI.updateEnemy(game, boss, 1 / 60);
    mortarBullet = game.bullets.find(function (bullet) { return bullet.mortar; }) || null;
  }
  assert.ok(mortarBullet, "Boss AI should fire during the mortar effect phase");
  updateProjectileUntilStopped(game, mortarBullet, 80);
  assert.strictEqual(mortarBullet.bossBombDetonated, true);
  assert.ok(game.player.health < healthBefore, "Boss mortar explosion should damage the player");

  return { damage: healthBefore - game.player.health, detonated: mortarBullet.bossBombDetonated };
}

function verifyTurretWeapon(randomValue, expectedWeapon, playerY) {
  var game = createGame("normal");
  var turret = TankGame.Entities.createTurret(
    game.worldMap.bossArena.centerX - 200,
    playerY,
    "enemy",
    randomValue
  );
  var projectile = null;
  var warning = null;
  var healthBefore = game.player.health;

  game.player.x = turret.x + 400;
  game.player.y = turret.y;
  game.camera.x = turret.x - 300;
  game.camera.y = turret.y - 300;
  turret.health = 100;
  turret.maxHealth = 100;
  turret.bulletDamage = 20;
  turret.fireCooldown = 0;
  turret.turretAngle = 0;
  TankGame.AI.initialize(turret, 0, TankGame.Config.modes.normal);
  turret.reactionTimer = 0;
  game.enemies = [turret];
  game.bullets = [];

  var originalRandom = Math.random;
  Math.random = function () { return 0.5; };
  try {
    for (var step = 0; step < 180 && !projectile && !warning; step += 1) {
      TankGame.AI.updateEnemy(game, turret, 1 / 60);
      projectile = game.bullets[0] || null;
      warning = game.mortarWarnings[0] || null;
    }
  } finally {
    Math.random = originalRandom;
  }
  assert.strictEqual(turret.turretWeapon, expectedWeapon);

  if (expectedWeapon === "mortar") {
    assert.ok(warning, "Fixed mortar turret should create a target warning");
    assert.strictEqual(warning.radius, TankGame.Config.fixedTurret.mortarWarningRadius);
    game.updateMortarWarnings(TankGame.Config.fixedTurret.mortarWarningDuration);
    projectile = game.bullets[0] || null;
    assert.ok(projectile, "Fixed mortar turret should launch after its warning");
    game.updateBullet(projectile, TankGame.Config.fixedTurret.mortarFlightDuration);
    assert.strictEqual(projectile.mortar, true);
    assert.strictEqual(projectile.bossBombDetonated, true);
    assert.ok(game.player.health < healthBefore, "Fixed mortar explosion should damage the player");
  } else {
    assert.ok(projectile, "Fixed turret AI should fire its selected weapon");
    updateProjectileUntilStopped(game, projectile, 80);
    assert.strictEqual(projectile.mortar, undefined);
    assert.strictEqual(projectile.bossBomb, undefined);
    assert.ok(game.player.health < healthBefore, "Fixed turret projectile should damage the player");
  }
  return { weapon: expectedWeapon, damage: healthBefore - game.player.health };
}

var result = {
  leap: verifyLeapFrequency(),
  bossMortar: verifyBossMortar(),
  turretBullet: verifyTurretWeapon(0.09, "bullet", 2200),
  turretMortar: verifyTurretWeapon(0.9, "mortar", 2500)
};

console.log("Boss and turret validation tests: PASS");
console.log(JSON.stringify(result));
