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
var playedSounds = [];
TankGame.Audio = {
  play: function (name) { playedSounds.push(name); },
  playBurning: function () { playedSounds.push("burn"); return {}; },
  stopAllBurning: function () {}
};
require(path.join(root, "js", "game.js"));

function createGame() {
  var canvas = { getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, inside: false },
    isDown: function () { return false; },
    reset: function () {}
  };
  return new TankGame.Game(canvas, input);
}

var normal = createGame();
normal.start();
assert.strictEqual(playedSounds[playedSounds.length - 1], "begin");
assert.strictEqual(normal.selectedMode, "normal");
assert.strictEqual(normal.lives, 2);
assert.strictEqual(normal.enemies.length, 4);
normal.enemies.forEach(function (enemy) { assert.strictEqual(enemy.health, Math.round(50 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1))); });
assert.strictEqual(normal.enemies.filter(function (enemy) { return enemy.isElite; }).length, 0);
assert.strictEqual(normal.enemies.filter(function (enemy) { return enemy.isBoss; }).length, 0);

normal.updateCountdown(4);
assert.strictEqual(normal.state, TankGame.Config.states.PLAYING);
normal.player.alive = false;
normal.updatePlayerLifeCycle(0.016);
assert.strictEqual(normal.lives, 1);
assert.strictEqual(normal.state, TankGame.Config.states.PLAYING);
normal.updatePlayerLifeCycle(2);
assert.strictEqual(normal.player.alive, true);
assert.strictEqual(playedSounds[playedSounds.length - 1], "again");
assert.ok(normal.player.invulnerable > 0);
normal.player.alive = false;
normal.updatePlayerLifeCycle(0.016);
assert.strictEqual(normal.lives, 0);
assert.strictEqual(normal.state, TankGame.Config.states.DEFEAT);
assert.strictEqual(playedSounds[playedSounds.length - 1], "defeat");

var victory = createGame();
victory.start();
victory.updateCountdown(4);
victory.enemies = [];
victory.update(1 / 60);
assert.strictEqual(victory.state, TankGame.Config.states.VICTORY);
assert.strictEqual(playedSounds[playedSounds.length - 1], "victory");
var victoryScore = victory.score;
victory.completeLevel();
assert.strictEqual(victory.score, victoryScore);

var combat = createGame();
combat.start();
var water = combat.worldMap.obstacles.find(function (obstacle) { return obstacle.kind === "W"; });
assert.ok(water, "generated map includes water");
assert.strictEqual(TankGame.Map.findSegmentObstacle(combat.worldMap, water.x - 20, water.y + 30, water.x + 80, water.y + 30, 5), null,
  "water must not block bullets");
assert.strictEqual(TankGame.Map.circleCollides(combat.worldMap, { x: water.x + 30, y: water.y + 30, radius: 23 }), true,
  "water must block tanks");
var target = TankGame.Entities.createTank(600, 150, "enemy");
target.health = 50;
target.maxHealth = 50;
assert.strictEqual(TankGame.Entities.getMuzzleDistance(combat.player), 44);
assert.strictEqual(TankGame.Entities.getMuzzleDistance(target), 46);
var eliteMuzzle = TankGame.Entities.createTank(0, 0, "enemy");
eliteMuzzle.isElite = true;
eliteMuzzle.visualScale = 1.1;
assert.ok(Math.abs(TankGame.Entities.getMuzzleDistance(eliteMuzzle) - 53.9) < 0.0001);
var bossMuzzle = TankGame.Entities.createTank(0, 0, "enemy");
bossMuzzle.isBoss = true;
bossMuzzle.visualScale = 1.1;
assert.ok(Math.abs(TankGame.Entities.getMuzzleDistance(bossMuzzle) - 61.6) < 0.0001);
combat.enemies = [target];
combat.fire(combat.player);
combat.fire(target);
assert.deepStrictEqual(playedSounds.slice(-2), ["shoot", "enemyShoot"]);
combat.bullets = [];
var bullet = TankGame.Entities.createBullet(520, 150, 0, "player");
combat.updateBullet(bullet, 0.1);
assert.strictEqual(bullet.alive, false);
assert.strictEqual(target.health, 25);
assert.strictEqual(combat.stats.hits, 1);
assert.strictEqual(playedSounds[playedSounds.length - 1], "hit");

var lethalBullet = TankGame.Entities.createBullet(520, 150, 0, "player");
combat.updateBullet(lethalBullet, 0.1);
assert.strictEqual(target.alive, false);
assert.strictEqual(target.wreck, true);
assert.strictEqual(target.wreckLife, 3);
assert.strictEqual(target.wreckParticles.length, 84);
assert.ok(target.wreckParticles.every(function (particle) {
  return particle.x >= -32 && particle.x <= 32 && particle.y >= -29 && particle.y <= 29 &&
    particle.size >= 7 && particle.size <= 14;
}));
assert.deepStrictEqual(playedSounds.slice(-2), ["explode", "burn"]);
assert.strictEqual(combat.enemies.length, 1);
assert.strictEqual(TankGame.Collision.tankCollidesWithWreck({ x: 560, y: 150, radius: 23 }, combat.enemies), true);
var movingPlayer = TankGame.Entities.createTank(550, 150, "player");
var forwardInput = { pointer: { inside: false }, isDown: function (key) { return key === "KeyW"; } };
TankGame.Entities.updatePlayer(movingPlayer, forwardInput, { obstacles: [] }, 0.1, combat.enemies);
assert.strictEqual(movingPlayer.x, 550);

var blockedBullet = TankGame.Entities.createBullet(520, 150, 0, "player");
combat.updateBullet(blockedBullet, 0.1);
assert.strictEqual(blockedBullet.alive, false);
combat.updateWrecks(2.999);
assert.strictEqual(combat.enemies.length, 1);
combat.updateWrecks(0.001);
assert.strictEqual(combat.enemies.length, 0);

var brick = combat.worldMap.obstacles.find(function (obstacle) { return obstacle.kind === "B"; });
var obstacleCount = combat.worldMap.obstacles.length;
var brickBullet = TankGame.Entities.createBullet(brick.x - 18, brick.y + brick.height / 2, 0, "player");
combat.updateBullet(brickBullet, 0.1);
assert.strictEqual(brickBullet.alive, false);
assert.strictEqual(combat.worldMap.obstacles.length, obstacleCount - 1);
assert.strictEqual(combat.worldMap.cells[brick.row][brick.column], ".");
combat.collectSupply({ type: "rapid", x: combat.player.x, y: combat.player.y });
assert.strictEqual(playedSounds[playedSounds.length - 1], "boostPickup");

combat.player.maxHealth = 101;
combat.player.health = 20;
combat.collectSupply({ type: "repair", x: combat.player.x, y: combat.player.y });
assert.strictEqual(combat.player.health, 60);
combat.collectSupply({ type: "shield", x: combat.player.x, y: combat.player.y });
assert.strictEqual(combat.player.shieldCharges, 3);
assert.strictEqual(combat.player.shieldTimer, 25);
combat.worldMap.obstacles = [];
combat.enemies = [];
for (var shieldHit = 0; shieldHit < 3; shieldHit += 1) {
  var absorbedBullet = TankGame.Entities.createBullet(combat.player.x - 40, combat.player.y, 0, "enemy");
  combat.updateBullet(absorbedBullet, 0.1);
  assert.strictEqual(combat.player.health, 60);
  assert.strictEqual(combat.player.shieldCharges, 2 - shieldHit);
}
var unshieldedBullet = TankGame.Entities.createBullet(combat.player.x - 40, combat.player.y, 0, "enemy");
combat.updateBullet(unshieldedBullet, 0.1);
assert.strictEqual(combat.player.health, 35);

combat.collectSupply({ type: "shield", x: combat.player.x, y: combat.player.y });
combat.state = TankGame.Config.states.PLAYING;
combat.enemies = [];
combat.update(25.1);
assert.strictEqual(combat.player.shieldTimer, 0);
assert.strictEqual(combat.player.shieldCharges, 0);

combat.collectSupply({ type: "perspective", x: combat.player.x, y: combat.player.y });
assert.strictEqual(combat.player.perspectiveTimer, 15);
combat.camera = { x: 500, y: 500 };
combat.enemies = [
  TankGame.Entities.createTank(400, 950, "enemy"),
  TankGame.Entities.createTank(2000, 950, "enemy"),
  TankGame.Entities.createTank(1220, 400, "enemy"),
  TankGame.Entities.createTank(1220, 1600, "enemy"),
  TankGame.Entities.createTank(300, 300, "enemy"),
  TankGame.Entities.createTank(900, 900, "enemy")
];
var indicators = combat.getPerspectiveIndicators();
assert.strictEqual(indicators.length, 5);
assert.ok(indicators.some(function (indicator) { return indicator.x === 28 && Math.abs(indicator.y - 450) < 0.000001 && Math.abs(indicator.angle) < 0.000001; }));
assert.ok(indicators.some(function (indicator) { return indicator.x === 1412 && Math.abs(indicator.y - 450) < 0.000001 && Math.abs(indicator.angle - Math.PI) < 0.000001; }));
assert.ok(indicators.some(function (indicator) { return Math.abs(indicator.y - 28) < 0.000001 && Math.abs(indicator.angle - Math.PI / 2) < 0.000001; }));
assert.ok(indicators.some(function (indicator) { return indicator.y === 872 && Math.abs(indicator.angle + Math.PI / 2) < 0.000001; }));

var fireRangeGame = createGame();
fireRangeGame.camera = { x: 500, y: 500 };
fireRangeGame.endlessLevel = 9;
var rangedEnemy = TankGame.Entities.createTank(900, 900, "enemy");
["normal", "challenge", "endless", "brave"].forEach(function (mode) {
  fireRangeGame.selectedMode = mode;
  rangedEnemy.x = 900;
  rangedEnemy.y = 900;
  assert.strictEqual(fireRangeGame.canEnemyFire(rangedEnemy), true);
  rangedEnemy.x = 499;
  assert.strictEqual(fireRangeGame.canEnemyFire(rangedEnemy), false);
  rangedEnemy.x = 1941;
  assert.strictEqual(fireRangeGame.canEnemyFire(rangedEnemy), false);
  rangedEnemy.x = 900;
  rangedEnemy.y = 1401;
  assert.strictEqual(fireRangeGame.canEnemyFire(rangedEnemy), false);
});
rangedEnemy.isElite = true;
assert.strictEqual(fireRangeGame.canEnemyFire(rangedEnemy), true);
rangedEnemy.isElite = false;
rangedEnemy.isBoss = true;
assert.strictEqual(fireRangeGame.canEnemyFire(rangedEnemy), true);

var sanitized = combat.sanitizeRecords({
  normal: { highScore: "120", bestTime: "9.5" },
  challenge: { highScore: "not-a-number", bestTime: -4 },
  ignored: { highScore: 999999 }
});
assert.deepStrictEqual(sanitized.normal, { highScore: 120, bestTime: 9.5 });
assert.deepStrictEqual(sanitized.challenge, { highScore: 0, bestTime: null });
assert.strictEqual(sanitized.ignored, undefined);

var combo = createGame();
combo.start();
combo.registerEnemyKill();
combo.registerEnemyKill();
assert.strictEqual(combo.comboCount, 2);
assert.strictEqual(combo.score, 230);
assert.strictEqual(combo.maxCombo, 2);
combo.state = TankGame.Config.states.PLAYING;
combo.update(4.51);
assert.strictEqual(combo.comboCount, 0);
combo.registerEnemyKill();
assert.strictEqual(combo.comboCount, 1);
combo.reset();
assert.strictEqual(combo.comboCount, 0);
assert.strictEqual(combo.comboTimer, 0);
assert.strictEqual(combo.maxCombo, 0);

console.log("Gameplay smoke tests: PASS");

