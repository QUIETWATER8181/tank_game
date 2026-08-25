"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () { this.onload = null; this.onerror = null; };
global.localStorage = {
  getItem: function () { return null; },
  setItem: function () {}
};

var root = path.resolve(__dirname, "..");
["config", "collision", "entities", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});

TankGame.Audio = {
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {}
};
require(path.join(root, "js", "game.js"));

function createGame() {
  var context = {};
  var canvas = { getContext: function () { return context; } };
  var input = {
    pointer: { down: false, inside: false },
    isDown: function () { return false; },
    reset: function () {}
  };
  return new TankGame.Game(canvas, input);
}

function assertEnemyWave(game, count, health) {
  assert.strictEqual(game.enemies.length, count);
  game.enemies.forEach(function (enemy) {
    var expectedHealth = Math.round(health * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1));
    assert.strictEqual(enemy.health, expectedHealth);
    assert.strictEqual(enemy.maxHealth, expectedHealth);
  });
}

var game = createGame();
game.setMode("challenge");
game.start();
assert.strictEqual(game.challengeLevel, 1);
assert.strictEqual(game.lives, 1);
assert.strictEqual(game.player.maxHealth, 100);
assert.strictEqual(game.player.bulletDamage, TankGame.Config.bulletDamage);
assertEnemyWave(game, 4, 75);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isElite; }).length, 0);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isBoss; }).length, 0);
var levelOneReaction = game.enemies[0].mode.reactionTime;
var levelOneFireCooldown = game.enemies[0].mode.fireCooldown;

game.completeLevel();
assert.strictEqual(game.state, TankGame.Config.states.LEVEL_CLEAR);
assert.strictEqual(game.lastCompletedLevel, 1);
game.startNextChallengeLevel();
assert.strictEqual(game.challengeLevel, 2);
assert.strictEqual(game.lives, 1);
assertEnemyWave(game, 6, 100);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isBoss; }).length, 0);

game.completeLevel();
assert.strictEqual(game.state, TankGame.Config.states.LEVEL_CLEAR);
game.startNextChallengeLevel();
assert.strictEqual(game.challengeLevel, 3);
assert.strictEqual(game.lives, 1);
assertEnemyWave(game, 8, 125);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isBoss; }).length, 0);
assert.ok(game.enemies[0].mode.reactionTime < levelOneReaction);
assert.ok(game.enemies[0].mode.fireCooldown < levelOneFireCooldown);

game.completeLevel();
assert.strictEqual(game.state, TankGame.Config.states.VICTORY);
assert.strictEqual(game.lastCompletedLevel, 3);

var failedRun = createGame();
failedRun.setMode("challenge");
failedRun.start();
failedRun.completeLevel();
failedRun.startNextChallengeLevel();
failedRun.player.alive = false;
failedRun.updatePlayerLifeCycle(0.016);
assert.strictEqual(failedRun.state, TankGame.Config.states.DEFEAT);
assert.strictEqual(failedRun.resultLevel, 2);
failedRun.start();
assert.strictEqual(failedRun.challengeLevel, 1);
assertEnemyWave(failedRun, 4, 75);

var aiEnemy = TankGame.Entities.createTank(100, 100, "enemy");
TankGame.AI.initialize(aiEnemy, 2, {
  enemySpeed: 100, enemyTurnSpeed: 2, reactionTime: 0.1, pathInterval: 0.5,
  fireCooldown: 1, aimError: 0.1, detectionRange: 900, attackRange: 700,
  preferredRange: 300, strafeChance: 1
});
var aiAlly = TankGame.Entities.createTank(200, 100, "enemy");
var aiPlayer = TankGame.Entities.createTank(300, 100, "player");
assert.strictEqual(TankGame.AI.isFriendlyFireBlocked(aiEnemy, aiPlayer, [aiEnemy, aiAlly]), true);
aiAlly.y = 180;
assert.strictEqual(TankGame.AI.isFriendlyFireBlocked(aiEnemy, aiPlayer, [aiEnemy, aiAlly]), false);
assert.strictEqual(aiEnemy.tacticalSlot, 2);
assert.strictEqual(typeof aiEnemy.strafeDirection, "number");
assert.strictEqual(aiEnemy.attackManeuver, "hold");

console.log("Challenge campaign tests: PASS");
