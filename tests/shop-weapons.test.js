"use strict";

var assert = require("assert");
var path = require("path");
var storage = Object.create(null);

global.window = global;
global.Image = function () {};
global.localStorage = {
  getItem: function (key) { return storage[key] || null; },
  setItem: function (key, value) { storage[key] = String(value); }
};

var root = path.resolve(__dirname, "..");
["config", "collision", "entities", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});
TankGame.Audio = {
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {},
  setMusicTrack: function () {}
};
require(path.join(root, "js", "game.js"));

function createGame(mode) {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { x: 900, y: 450, down: false, pressed: false, inside: false },
    isDown: function () { return false; },
    reset: function () {},
    setCamera: function () {}
  };
  var game = new TankGame.Game(canvas, input);
  game.setMode(mode || "endless");
  return game;
}

function makeMap(obstacles) {
  var cells = Array.from({ length: TankGame.Map.rows }, function () {
    return Array.from({ length: TankGame.Map.columns }, function () { return "."; });
  });
  obstacles.forEach(function (obstacle) { cells[obstacle.row][obstacle.column] = obstacle.kind; });
  var worldMap = { cells: cells, obstacles: [], obstacleGrid: [], navigationRevision: 0 };
  TankGame.Map.rebuildObstacles(worldMap);
  return worldMap;
}

var purchaseGame = createGame("endless");
purchaseGame.parts = 100000;
assert.strictEqual(purchaseGame.purchaseShopItem("items", "mortar").ok, true);
assert.strictEqual(purchaseGame.shopData.items.mortar, 1);
purchaseGame.start();
assert.strictEqual(purchaseGame.runShop.mortar, 1);
assert.strictEqual(purchaseGame.shopData.items.mortar, 0);
assert.strictEqual(createGame("endless").shopData.items.mortar, 0);

var stackedInventoryGame = createGame("endless");
stackedInventoryGame.shopData.items.mortar = 50;
stackedInventoryGame.start();
assert.strictEqual(stackedInventoryGame.runShop.mortar, 50);
assert.strictEqual(stackedInventoryGame.shopData.items.mortar, 0);

var game = createGame("endless");
game.start();
game.state = TankGame.Config.states.PLAYING;
game.runShop = { healing: false, frenzy: false, instantKill: false, mudTruck: false, bomb: false, mortar: true, redBullet: false };
game.endlessPermanent = { tracking: 1, splitBullet: 2, explosive: 1 };
game.player.trackingTime = 2;
game.player.turretAngle = 0;
var target = TankGame.Entities.createTank(700, 450, "enemy");
game.enemies = [target];
game.markedTarget = target;
var originalRandom = Math.random;
Math.random = function () { return 0; };
game.fire(game.player);
Math.random = originalRandom;
assert.strictEqual(game.bullets.length, 3);
assert.ok(game.bullets.every(function (bullet) {
  return bullet.playerMortar && bullet.mortarProjectile && bullet.trackingTarget === target;
}));
assert.ok(game.bullets.every(function (bullet) {
  var offsetDistance = Math.hypot(bullet.targetOffsetX, bullet.targetOffsetY);
  return offsetDistance >= 40 && offsetDistance <= 180;
}));
var mortar = game.bullets[0];
game.updateBullet(mortar, mortar.flightDuration);
assert.strictEqual(mortar.alive, false);
assert.strictEqual(game.bullets.length, 11);
assert.ok(game.bullets.filter(function (bullet) { return bullet.mortarFragment; }).every(function (bullet) {
  return Math.abs(Math.hypot(bullet.targetX - mortar.x, bullet.targetY - mortar.y) - 200) < 0.000001;
}));

var stackedMortarGame = createGame("endless");
stackedMortarGame.start();
stackedMortarGame.state = TankGame.Config.states.PLAYING;
stackedMortarGame.runShop = { healing: 0, frenzy: 0, instantKill: 0, mudTruck: 0, bomb: 0, mortar: 50, redBullet: 0 };
stackedMortarGame.player.turretAngle = 0;
Math.random = function () { return 0.499; };
stackedMortarGame.fire(stackedMortarGame.player);
Math.random = originalRandom;
assert.strictEqual(stackedMortarGame.bullets[0].playerMortar, true);

var belowStackedMortarGame = createGame("endless");
belowStackedMortarGame.start();
belowStackedMortarGame.state = TankGame.Config.states.PLAYING;
belowStackedMortarGame.runShop = { healing: 0, frenzy: 0, instantKill: 0, mudTruck: 0, bomb: 0, mortar: 50, redBullet: 0 };
belowStackedMortarGame.player.turretAngle = 0;
Math.random = function () { return 0.501; };
belowStackedMortarGame.fire(belowStackedMortarGame.player);
Math.random = originalRandom;
assert.strictEqual(belowStackedMortarGame.bullets[0].playerMortar, undefined);

var bombGame = createGame("endless");
bombGame.start();
bombGame.state = TankGame.Config.states.PLAYING;
bombGame.runShop = { healing: false, frenzy: false, instantKill: false, mudTruck: false, bomb: true, mortar: false, redBullet: false };
bombGame.endlessPermanent = { splitBullet: 1 };
bombGame.player.turretAngle = 0;
Math.random = function () { return 0; };
bombGame.fire(bombGame.player);
Math.random = originalRandom;
assert.strictEqual(bombGame.bullets.length, 2);
assert.ok(bombGame.bullets.every(function (bullet) { return bullet.playerBomb && !bullet.playerMortar; }));
assert.ok(bombGame.bullets.every(function (bullet) {
  return bullet.explosionRadius === 56 && bullet.damage === bombGame.player.bulletDamage * 0.7;
}));

var explosiveBombGame = createGame("endless");
explosiveBombGame.start();
explosiveBombGame.state = TankGame.Config.states.PLAYING;
explosiveBombGame.runShop = { healing: 0, frenzy: 0, instantKill: 0, mudTruck: 0, bomb: 10, mortar: 0, redBullet: 0 };
explosiveBombGame.endlessPermanent = { explosive: 1 };
explosiveBombGame.player.turretAngle = 0;
explosiveBombGame.fire(explosiveBombGame.player);
var mainBomb = explosiveBombGame.bullets[0];
explosiveBombGame.shake = 0;
explosiveBombGame.detonatePlayerBomb(mainBomb);
var smallBombs = explosiveBombGame.bullets.filter(function (bullet) { return bullet.fragment && bullet.playerBomb; });
assert.strictEqual(explosiveBombGame.shake, 0);
assert.strictEqual(smallBombs.length, 8);
assert.ok(smallBombs.every(function (bullet) {
  return bullet.bossBomb && bullet.explosionRadius === 56 && bullet.damage === mainBomb.damage * 0.25;
}));

var redGame = createGame("endless");
redGame.start();
redGame.state = TankGame.Config.states.PLAYING;
redGame.runShop = { healing: false, frenzy: false, instantKill: false, mudTruck: false, bomb: false, mortar: false, redBullet: true };
redGame.endlessPermanent = { splitBullet: 1 };
redGame.player.turretAngle = 0;
redGame.fire(redGame.player);
assert.ok(redGame.bullets.every(function (bullet) {
  return bullet.redBullet && bullet.damage === redGame.player.bulletDamage * 0.7 * 2;
}));
redGame.worldMap = makeMap([{ column: 5, row: 2, kind: "B" }]);
redGame.score = 0;
var redWallBullet = TankGame.Entities.createBullet(250, 150, 0, "player");
redWallBullet.redBullet = true;
redWallBullet.speed = 600;
redGame.updateBullet(redWallBullet, 0.1);
assert.strictEqual(redGame.worldMap.obstacles.length, 0);
assert.strictEqual(redGame.score, 10);

var wallGame = createGame("endless");
wallGame.start();
wallGame.worldMap = makeMap([{ column: 5, row: 2, kind: "B" }, { column: 5, row: 3, kind: "B" }]);
wallGame.score = 0;
wallGame.detonatePlayerBomb({ x: 350, y: 150, damage: 1, explosionRadius: 80, playerBomb: true, bossBomb: true });
assert.strictEqual(wallGame.worldMap.obstacles.length, 0);
assert.strictEqual(wallGame.score, 20);

wallGame.worldMap = makeMap([{ column: 5, row: 2, kind: "B" }, { column: 5, row: 3, kind: "B" }]);
wallGame.score = 0;
wallGame.detonatePlayerBomb({ x: 350, y: 150, damage: 1, explosionRadius: 92, playerMortar: true, bossBomb: true });
assert.strictEqual(wallGame.worldMap.obstacles.length, 0);
assert.strictEqual(wallGame.score, 20);

wallGame.worldMap = makeMap([{ column: 5, row: 2, kind: "B" }]);
wallGame.player.x = 250;
wallGame.player.y = 150;
wallGame.player.radius = 23;
wallGame.player.bulletDamage = 10;
wallGame.runShop.mudTruck = 1;
var ramTarget = TankGame.Entities.createTank(310, 150, "enemy");
ramTarget.health = 100;
ramTarget.maxHealth = 100;
wallGame.enemies = [ramTarget];
wallGame.score = 0;
wallGame.movePlayerSafely(wallGame.player, 0, 80, 250, 150);
assert.strictEqual(wallGame.worldMap.obstacles.length, 0);
assert.strictEqual(wallGame.player.x, 330);
assert.strictEqual(wallGame.score, 10);
assert.strictEqual(ramTarget.health, 80);

var mudGame = createGame("endless");
mudGame.endlessPermanent = {};
mudGame.runShop = { healing: 0, frenzy: 0, instantKill: 0, mudTruck: 1, bomb: 0, mortar: 0, redBullet: 0 };
mudGame.resetWorld(true);
assert.strictEqual(mudGame.player.moveSpeedMultiplier, 1.1);
assert.strictEqual(mudGame.player.visualScale, 1.1);
assert.strictEqual(mudGame.player.radius, 25.3);

var normalGame = createGame("normal");
normalGame.parts = 100000;
assert.strictEqual(normalGame.purchaseShopItem("items", "mortar").reason, "mode");

console.log("Shop weapon tests: PASS");
