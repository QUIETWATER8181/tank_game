"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () {};
var root = path.resolve(__dirname, "..");
require(path.join(root, "js", "config.js"));
require(path.join(root, "js", "collision.js"));
require(path.join(root, "js", "map.js"));

var maps = [];
assert.strictEqual(TankGame.Config.worldWidth, 7200);
assert.strictEqual(TankGame.Config.worldHeight, 4800);
assert.strictEqual(TankGame.Map.columns, 120);
assert.strictEqual(TankGame.Map.rows, 80);
for (var level = 1; level <= 100; level += 1) {
  var worldMap = TankGame.Map.create({ seed: 0x1000 + level * 7919, level: level, mode: "endless" });
  var validation = TankGame.Map.validate(worldMap);
  assert.strictEqual(validation.valid, true, "generated map must be valid at level " + level);
  assert.strictEqual(worldMap.usedFallback, false, "normal generation should pass at level " + level);
  assert.strictEqual(worldMap.bossArena.width, 14 * TankGame.Map.tileSize);
  assert.strictEqual(worldMap.bossArena.height, 10 * TankGame.Map.tileSize);
  assert.strictEqual(TankGame.Map.queryObstacles(
    worldMap,
    worldMap.bossArena.x,
    worldMap.bossArena.y,
    worldMap.bossArena.x + worldMap.bossArena.width,
    worldMap.bossArena.y + worldMap.bossArena.height
  ).length, 0);
  maps.push(worldMap.cells.map(function (row) { return row.join(""); }).join("\n"));
}

assert.ok(new Set(maps).size > 90, "different seeds should produce different terrain");
var repeatA = TankGame.Map.create({ seed: 123456, level: 12, mode: "endless" });
var repeatB = TankGame.Map.create({ seed: 123456, level: 12, mode: "endless" });
assert.deepStrictEqual(repeatA.cells, repeatB.cells, "same seed and level must be deterministic");

console.log("Map generation tests: PASS");
