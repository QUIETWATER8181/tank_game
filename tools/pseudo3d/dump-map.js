// Dump a generated map as ASCII so we can pick a camera spot for screenshots.
// Usage: node tools/pseudo3d/dump-map.js [seed] [radius]
"use strict";

global.window = global;
require("../../js/config.js");
require("../../js/map.js");

var TankGame = global.TankGame;
var seed = Number(process.argv[2] || 20261031);
var radius = Number(process.argv[3] || 14);

var world = TankGame.Map.create({ seed: seed, level: 1, mode: "endless" });
var size = TankGame.Map.tileSize;
var playerColumn = Math.floor(world.playerSpawn.x / size);
var playerRow = Math.floor(world.playerSpawn.y / size);

var lines = [];
for (var row = Math.max(0, playerRow - radius); row <= Math.min(TankGame.Map.rows - 1, playerRow + radius); row += 1) {
  var line = "";
  for (var column = Math.max(0, playerColumn - radius * 2); column <= Math.min(TankGame.Map.columns - 1, playerColumn + radius * 2); column += 1) {
    var cell = world.cells[row][column];
    line += cell === "." ? " " : cell;
  }
  lines.push((row === playerRow ? ">" : " ") + String(row).padStart(2, "0") + "|" + line);
}
console.log("seed=" + seed + " spawnCell=" + playerColumn + "," + playerRow + " obstacles=" + world.obstacles.length);
console.log(lines.join("\n"));
