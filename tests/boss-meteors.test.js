"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () { this.onload = null; this.onerror = null; };
global.localStorage = { getItem: function () { return null; }, setItem: function () {} };

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
  game.setMode(mode || "brave");
  game.start();
  if (game.state === TankGame.Config.states.CINEMATIC) { game.finishBossCinematic(); }
  game.state = TankGame.Config.states.PLAYING;
  return game;
}

var game = createGame();
var targetX = 900;
var targetY = 900;
var cells = Array.from({ length: TankGame.Map.rows }, function () {
  return Array(TankGame.Map.columns).fill(".");
});
var obstacles = [
  { x: 840, y: 840, width: 60, height: 60, kind: "B", column: 14, row: 14 },
  { x: 900, y: 840, width: 60, height: 60, kind: "#", column: 15, row: 14 },
  { x: 840, y: 900, width: 60, height: 60, kind: "I", column: 14, row: 15 },
  { x: 900, y: 900, width: 60, height: 60, kind: "W", column: 15, row: 15 },
  { x: 900, y: 0, width: 60, height: 60, kind: "#", column: 15, row: 0 }
];
obstacles.forEach(function (obstacle) { cells[obstacle.row][obstacle.column] = obstacle.kind; });
game.worldMap.cells = cells;
game.worldMap.obstacles = obstacles;
game.worldMap.obstacleGrid = null;
game.worldMap._obstacleGridCount = 0;
game.worldMap.driedGround = [];
game.player.x = targetX;
game.player.y = targetY;
game.player.health = 250;
game.player.maxHealth = 250;
game.fieldCrystals = [{ x: targetX, y: targetY, life: 30 }];
var callbackCount = 0;
game.onFieldWallBroken = function () { callbackCount += 1; };

assert.ok(game.findLevelBoss(), "boss battle must have a live boss");
var meteor = game.spawnBossMeteors(1, [{ x: targetX, y: targetY }])[0];
assert.strictEqual(meteor.damage, 100);
assert.strictEqual(meteor.radius, 100);
assert.strictEqual(meteor.duration, 2);
assert.strictEqual(meteor.timer, 2);
assert.ok(Math.abs(Math.abs(meteor.startX - meteor.targetX) - Math.abs(meteor.startY - meteor.targetY)) < 0.000001, "meteor path is diagonal");
assert.ok([Math.PI / 4, Math.PI * 3 / 4].indexOf(meteor.flightAngle) !== -1, "meteor falls on a diagonal from the upper side");
assert.strictEqual(game.bossMeteors.length, 1);
meteor.timer = 0;
game.updateBossBattleEffects(0);

assert.strictEqual(game.player.health, 150, "meteor impact deals 100 damage");
assert.strictEqual(game.worldMap.obstacles.some(function (obstacle) { return obstacle.kind === "B"; }), false);
assert.strictEqual(game.worldMap.obstacles.some(function (obstacle) { return obstacle.kind === "#" && obstacle.row !== 0; }), false);
assert.strictEqual(game.worldMap.obstacles.some(function (obstacle) { return obstacle.kind === "I"; }), false);
assert.strictEqual(game.worldMap.obstacles.some(function (obstacle) { return obstacle.kind === "W"; }), true, "dry riverbed data remains available for the boss map visual");
assert.strictEqual(game.worldMap.obstacles.some(function (obstacle) { return obstacle.row === 0; }), true, "boundary walls survive");
assert.strictEqual(game.worldMap.cells[15][15], "W");
assert.strictEqual(game.worldMap.driedGround.length, 0, "meteor no longer converts water into dried ground");
assert.strictEqual(game.fieldCrystals.length, 0, "meteor destroys energy cans");
assert.strictEqual(callbackCount, 0, "meteor wall destruction must not create energy cans");
assert.strictEqual(game.bossMeteors.length, 0);
assert.strictEqual(game.bossFirePits.length, 1);
assert.strictEqual(game.bossFirePits[0].radius, 100);
assert.strictEqual(game.bossFirePits[0].life, 12);
var fireTarget = TankGame.Entities.createTank(targetX, targetY, "enemy");
fireTarget.health = 20; fireTarget.maxHealth = 20;
game.enemies = [fireTarget];
game.updateFireHazards(0.1);
assert.strictEqual(fireTarget.burning, true, "meteor fire pit applies burning");
game.updateBossBattleEffects(12);
assert.strictEqual(game.bossFirePits.length, 0, "meteor fire pit expires after 12 seconds");

var normal = createGame("normal");
normal.resetWorld(false);
normal.state = TankGame.Config.states.PLAYING;
assert.strictEqual(normal.isBossBattleActive(), false);
assert.deepStrictEqual(normal.spawnBossMeteors(3), []);

console.log("Boss meteor tests: PASS");
