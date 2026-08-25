"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () { this.onload = null; this.onerror = null; };
global.localStorage = { getItem: function () { return null; }, setItem: function () {} };

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

function createContext() {
  return {
    save: function () {}, restore: function () {}, translate: function () {}, rotate: function () {}, scale: function () {},
    fillRect: function () {}, strokeRect: function () {}, beginPath: function () {}, closePath: function () {},
    moveTo: function () {}, lineTo: function () {}, arc: function () {}, fill: function () {}, stroke: function () {},
    fillText: function () {}, drawImage: function () {}
  };
}

function createGame() {
  var canvas = { width: 1440, height: 900, getContext: function () { return createContext(); } };
  var input = {
    pointer: { down: false, pressed: false, inside: false },
    isDown: function () { return false; },
    reset: function () {}
  };
  var game = new TankGame.Game(canvas, input);
  game.setMode("normal");
  game.state = TankGame.Config.states.PLAYING;
  return game;
}

var turret = TankGame.Entities.createTurret(100, 100, "enemy", 0.09);
assert.strictEqual(turret.type, "tank");
assert.strictEqual(turret.isTurret, true);
assert.strictEqual(turret.canMove, false);
assert.strictEqual(turret.turretWeapon, "bullet");
assert.strictEqual(TankGame.Entities.createTurret(100, 100, "enemy", 0.10).turretWeapon, "bomb");
assert.strictEqual(TankGame.Entities.createTurret(100, 100, "enemy", 0.59).turretWeapon, "bomb");
assert.strictEqual(TankGame.Entities.createTurret(100, 100, "enemy", 0.60).turretWeapon, "mortar");

var game = createGame();
var baseHealth = 75;
turret.health = baseHealth;
turret.maxHealth = baseHealth;
turret.bulletDamage = 25;
game.makeFixedTurret(turret);
assert.strictEqual(turret.health, Math.round(baseHealth * 1.3));
assert.strictEqual(turret.maxHealth, Math.round(baseHealth * 1.3));
assert.strictEqual(game.getEnemyAttackRange(turret, TankGame.Config.modes.normal), 510 * 2);
assert.strictEqual(game.getEnemyFireCooldown(turret, TankGame.Config.modes.normal),
  TankGame.Config.modes.normal.fireCooldown * 0.85);

var ordinary = TankGame.Entities.createTank(100, 100, "enemy");
ordinary.mode = TankGame.Config.modes.normal;
assert.strictEqual(game.getEnemyAttackRange(ordinary, ordinary.mode), 510);

game.camera.x = 3000;
game.camera.y = 3000;
turret.aiState = TankGame.AI.states.ATTACK;
turret.fireCooldown = 0;
turret.alive = true;
game.enemies = [turret];
assert.strictEqual(game.canEnemyFire(turret), true, "fixed turret should fire outside the player viewport");

var oldRandom = Math.random;
Math.random = function () { return 0.09; };
game.resetWorld(false);
Math.random = oldRandom;
assert.strictEqual(game.enemies.length, 4);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isTurret; }).length, 4,
  "each ordinary spawn slot should independently allow turret creation");
assert.ok(game.enemies.every(function (enemy) { return enemy.isTurret && !enemy.isBoss && !enemy.isElite; }));

Math.random = function () { return 0.15; };
game.resetWorld(false);
Math.random = oldRandom;
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isTurret; }).length, 0,
  "0.15 must be outside the 15% turret interval");

function prepareWeapon(weapon) {
  var enemy = TankGame.Entities.createTurret(100, 100, "enemy", weapon === "bullet" ? 0.1 : (weapon === "bomb" ? 0.6 : 0.9));
  enemy.turretWeapon = weapon;
  enemy.mode = TankGame.Config.modes.normal;
  enemy.bulletDamage = 20;
  enemy.turretAngle = 0;
  game.player = TankGame.Entities.createTank(1000, 100, "player");
  game.player.alive = true;
  game.bullets = [];
  game.muzzleFlashes = [];
  game.fire(enemy);
  if (weapon === "mortar") {
    assert.strictEqual(game.bullets.length, 0);
    assert.strictEqual(game.mortarWarnings.length, 1);
    return game.mortarWarnings[0];
  }
  assert.strictEqual(game.bullets.length, 1);
  return game.bullets[0];
}

var bullet = prepareWeapon("bullet");
assert.strictEqual(bullet.bossBomb, undefined);
assert.strictEqual(bullet.mortar, undefined);

var bomb = prepareWeapon("bomb");
assert.strictEqual(bomb.bossBomb, true);
assert.strictEqual(bomb.turretWeapon, "bomb");
assert.strictEqual(bomb.mortar, false);
assert.strictEqual(bomb.explosionRadius, TankGame.Config.fixedTurret.bombRadius);

var mortarWarning = prepareWeapon("mortar");
assert.strictEqual(mortarWarning.radius, TankGame.Config.fixedTurret.mortarWarningRadius);
assert.strictEqual(mortarWarning.radius, 50);
assert.strictEqual(mortarWarning.timer, TankGame.Config.fixedTurret.mortarWarningDuration);
assert.strictEqual(mortarWarning.x, game.player.x);
assert.strictEqual(mortarWarning.y, game.player.y);
game.updateMortarWarnings(0.69);
assert.strictEqual(game.bullets.length, 0);
assert.strictEqual(game.mortarWarnings.length, 1);
game.updateMortarWarnings(0.02);
assert.strictEqual(game.mortarWarnings.length, 0);
assert.strictEqual(game.bullets.length, 1);
var mortar = game.bullets[0];
assert.strictEqual(mortar.fixedTurretMortar, true);
assert.strictEqual(mortar.mortar, true);
assert.strictEqual(mortar.explosionRadius, TankGame.Config.fixedTurret.mortarRadius);
assert.strictEqual(mortar.flightTimer, TankGame.Config.fixedTurret.mortarFlightDuration);
var targetX = mortar.targetX;
var targetY = mortar.targetY;
var healthBeforeMortarImpact = game.player.health;
game.player.x += 300;
game.updateBullet(mortar, 0.7);
assert.strictEqual(mortar.alive, false);
assert.strictEqual(mortar.bossBombDetonated, true);
assert.strictEqual(mortar.x, targetX);
assert.strictEqual(mortar.y, targetY);
assert.strictEqual(game.player.health, healthBeforeMortarImpact,
  "a player that leaves the warning circle must not be hit at their new position");

var movementGame = createGame();
movementGame.worldMap.obstacles = [];
movementGame.player = TankGame.Entities.createTank(1000, 100, "player");
var movingTurret = TankGame.Entities.createTurret(100, 100, "enemy", 0.09);
movingTurret.mode = TankGame.Config.modes.normal;
TankGame.AI.initialize(movingTurret, 0, movingTurret.mode);
movingTurret.reactionTimer = 2;
movingTurret.fireCooldown = 5;
movementGame.enemies = [movingTurret];
var startX = movingTurret.x;
var startY = movingTurret.y;
TankGame.AI.updateEnemy(movementGame, movingTurret, 1);
assert.strictEqual(movingTurret.x, startX);
assert.strictEqual(movingTurret.y, startY);

var turretContext = createContext();
var turretFillRects = [];
var turretStrokeRects = 0;
turretContext.fillRect = function (x, y, width, height) { turretFillRects.push([x, y, width, height]); };
turretContext.strokeRect = function () { turretStrokeRects += 1; };
TankGame.Entities.drawTank(turretContext, movingTurret);
assert.ok(turretFillRects.some(function (rect) { return rect[2] === 76 && rect[3] === 72; }),
  "fixed turret should draw its own reinforced armored base");
assert.ok(turretStrokeRects >= 2, "fixed turret should draw reinforced armor outlines");

console.log("Fixed turret tests: PASS");

