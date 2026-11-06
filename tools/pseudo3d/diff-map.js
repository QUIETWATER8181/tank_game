// 两张同机位截图的变化热力图（ASCII），用来在没有看图能力时判断
// 「差异是零散的小物件」还是「整片色带/糊成一片」。
// 用法：node tools/pseudo3d/diff-map.js <a.png> <b.png> [--cols=96] [--threshold=18]
"use strict";

var fs = require("fs");
var stats = require("./png-stats.js");

var argv = process.argv.slice(2);
var files = [];
var columns = 96;
var threshold = 18;
argv.forEach(function (arg) {
  if (arg.indexOf("--cols=") === 0) { columns = Number(arg.split("=")[1]); return; }
  if (arg.indexOf("--threshold=") === 0) { threshold = Number(arg.split("=")[1]); return; }
  files.push(arg);
});

if (files.length !== 2) {
  console.error("usage: node tools/pseudo3d/diff-map.js <a.png> <b.png> [--cols=96]");
  process.exit(2);
}

var a = stats.decodePng(fs.readFileSync(files[0]));
var b = stats.decodePng(fs.readFileSync(files[1]));
if (a.width !== b.width || a.height !== b.height) {
  console.error("size mismatch: " + a.width + "x" + a.height + " vs " + b.width + "x" + b.height);
  process.exit(1);
}

var rows = Math.max(1, Math.round(columns * a.height / a.width / 2.1));
var ramp = " .:-=+*#%@";
var lines = [];
var changed = 0;
var minX = a.width, maxX = -1, minY = a.height, maxY = -1;
for (var row = 0; row < rows; row += 1) {
  var line = "";
  for (var column = 0; column < columns; column += 1) {
    var x0 = Math.floor(column * a.width / columns);
    var x1 = Math.max(x0 + 1, Math.floor((column + 1) * a.width / columns));
    var y0 = Math.floor(row * a.height / rows);
    var y1 = Math.max(y0 + 1, Math.floor((row + 1) * a.height / rows));
    var hits = 0;
    var total = 0;
    for (var y = y0; y < y1; y += 1) {
      for (var x = x0; x < x1; x += 1) {
        var index = (y * a.width + x) * 4;
        var delta = Math.abs(a.pixels[index] - b.pixels[index]) +
          Math.abs(a.pixels[index + 1] - b.pixels[index + 1]) +
          Math.abs(a.pixels[index + 2] - b.pixels[index + 2]);
        total += 1;
        if (delta > threshold) {
          hits += 1;
          changed += 1;
          if (x < minX) { minX = x; }
          if (x > maxX) { maxX = x; }
          if (y < minY) { minY = y; }
          if (y > maxY) { maxY = y; }
        }
      }
    }
    var density = total ? hits / total : 0;
    line += ramp[Math.min(ramp.length - 1, Math.round(density * (ramp.length - 1)))];
  }
  lines.push(line);
}

console.log(lines.join("\n"));
console.log(JSON.stringify({
  changedPixels: changed,
  changedRatio: Number((changed / (a.width * a.height)).toFixed(4)),
  boundingBox: maxX < 0 ? null : { left: minX, top: minY, right: maxX, bottom: maxY }
}, null, 2));
