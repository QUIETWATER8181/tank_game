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
var mainSource = require("fs").readFileSync(path.join(root, "js", "main.js"), "utf8");
assert.ok(mainSource.indexOf("var levelClearEyebrow =") !== -1);
assert.ok(mainSource.indexOf("var levelClearWarning =") !== -1);
assert.ok(mainSource.indexOf('game.selectedMode === "brave" ? game.braveRevives : game.lives') !== -1);
["config", "collision", "entities", "cinematic", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});

var audioEvents = [];
TankGame.Audio = {
  play: function (name) { audioEvents.push(["play", name]); },
  playBurning: function () { return {}; },
  stopAllBurning: function () {},
  setMusicTrack: function (track) { audioEvents.push(["music", track]); },
  startCinematicAudio: function () { audioEvents.push(["cinematic", "start"]); },
  stopCinematicAudio: function () { audioEvents.push(["cinematic", "stop"]); }
};
require(path.join(root, "js", "game.js"));

function createGame() {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, pressed: false, inside: false },
    isDown: function () { return false; },
    reset: function () {},
    setCamera: function () {}
  };
  return new TankGame.Game(canvas, input);
}

function assertBossLevel(game, braveLevel, endlessLevel, health, damage, leapDistance) {
  assert.strictEqual(game.selectedMode, "brave");
  assert.strictEqual(game.braveLevel, braveLevel);
  assert.strictEqual(game.getMapLevel(), endlessLevel);
  assert.strictEqual(game.state, TankGame.Config.states.CINEMATIC);
  assert.strictEqual(game.countdown, 0);
  assert.ok(game.cinematic);
  assert.strictEqual(game.enemies.length, 1);
  assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isBoss; }).length, 1);
  assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isElite; }).length, 0);
  var boss = game.findLevelBoss();
  assert.ok(boss instanceof TankGame.Entities.BossEnemy);
  assert.strictEqual(boss.health, health);
  assert.strictEqual(boss.maxHealth, health);
  assert.strictEqual(boss.bulletDamage, damage);
  assert.strictEqual(boss.bossSkillLevel, braveLevel);
  assert.strictEqual(game.getBossSkillLevel(), braveLevel);
  assert.strictEqual(game.getBossSkillConfig("leap").maximumDistance, leapDistance);
  assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "music"; }).slice(-1)[0],
    ["music", TankGame.Config.bossBackgroundMusic]);
  assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "cinematic"; }).slice(-1)[0],
    ["cinematic", "start"]);
}

var game = createGame();
game.setMode("brave");
audioEvents.length = 0;
game.start();
assertBossLevel(game, 1, 10, 435, 89, 280);
assert.strictEqual(game.player.maxHealth, 125);
assert.strictEqual(game.player.bulletDamage, 30);
assert.deepStrictEqual(game.endlessPermanent, {});

var firstBoss = game.findLevelBoss();
var burstTimer = firstBoss.bossBurstTimer;
game.finishBossCinematic();
game.updateBossEnemies(0.25);
assert.ok(firstBoss.bossBurstTimer < burstTimer, "Boss skills must update during brave combat");

firstBoss.boss_skills = ["bomb", "clone"];
firstBoss.skill_states = {
  bomb: { state: "ready", timer: 0, phase: "ready" },
  clone: { state: "ready", timer: 0, phase: "ready" }
};
firstBoss.active_skill = null;
assert.strictEqual(game.startBossSkill(firstBoss, "bomb"), true);
game.updateActiveBossSkill(firstBoss, 0.5);
game.bullets = [];
game.fire(firstBoss);
assert.strictEqual(game.bullets[0].bossBomb, true);
assert.strictEqual(game.bullets[0].damage, Math.max(1, Math.round(firstBoss.bulletDamage * 1.25)));
game.finishBossSkill(firstBoss, "bomb");
firstBoss.skill_states.clone.state = "ready";
game.bossCloneTrails = [];
assert.strictEqual(game.startBossSkill(firstBoss, "clone"), true);
assert.strictEqual(game.bossCloneTrails.length, 1);
assert.strictEqual(game.bossCloneTrails[0].points.length, 14);
assert.strictEqual(game.bossCloneTrails[0].maxLife, 0.6);

var bravePlayer = game.player;
bravePlayer.maxHealth = 125;
bravePlayer.health = 25;
game.collectSupply({ type: "repair", x: bravePlayer.x, y: bravePlayer.y });
assert.strictEqual(bravePlayer.health, 75);
game.collectSupply({ type: "shield", x: bravePlayer.x, y: bravePlayer.y });
assert.strictEqual(bravePlayer.shieldCharges, 3);
assert.strictEqual(bravePlayer.shieldTimer, 25);
game.collectSupply({ type: "perspective", x: bravePlayer.x, y: bravePlayer.y });
assert.strictEqual(bravePlayer.perspectiveTimer, 15);

game.enemies = [];
game.completeLevel();
assert.strictEqual(game.state, TankGame.Config.states.LEVEL_CLEAR);
assert.strictEqual(game.resultLevel, 1);
assert.strictEqual(game.lastCompletedLevel, 1);
assert.strictEqual(game.rewardOptions.length, 0);
assert.strictEqual(game.braveRevives, 1);

audioEvents.length = 0;
game.startNextBraveLevel();
assertBossLevel(game, 2, 20, 1065, 251, 320);
assert.strictEqual(game.player.health, game.player.maxHealth);
assert.strictEqual(game.getBossSkillConfig("bomb").radius, 85);
assert.strictEqual(game.getBossSkillConfig("clone").duration, 11);
assert.strictEqual(game.braveRevives, 1);

game.finishBossCinematic();
game.braveRevives = 0;
game.player.alive = false;
game.updatePlayerLifeCycle(0.016);
assert.strictEqual(game.state, TankGame.Config.states.DEFEAT);
assert.strictEqual(game.resultLevel, 2);

game.start();
assertBossLevel(game, 1, 10, 435, 89, 280);
for (var stressLevel = 1; stressLevel <= 10; stressLevel += 1) {
  assert.strictEqual(game.braveLevel, stressLevel);
  game.update(17);
  assert.strictEqual(game.state, TankGame.Config.states.PLAYING);
  game.enemies = [];
  game.completeLevel();
  assert.strictEqual(game.state, TankGame.Config.states.LEVEL_CLEAR);
  if (stressLevel < 10) { game.startNextBraveLevel(); }
}
var sanitized = game.sanitizeRecords({ brave: { highScore: "700", bestTime: null } });
assert.deepStrictEqual(sanitized.brave, { highScore: 700, bestTime: null });

console.log("Brave action mode tests: PASS");
