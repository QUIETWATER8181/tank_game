// 端到端比例标尺校验：从截图里找品红方块，量它的宽高比。
// 用法：node tools/pseudo3d/measure-ruler.js <png>
// 三个方块分别是：立牌（应 40×40）、未补偿的世界绘制（应 40×26.8）、屏幕空间（应 40×40）。
"use strict";

var fs = require("fs");
var stats = require("./png-stats.js");

function isMagenta(pixels, index) {
  return pixels[index] > 200 && pixels[index + 1] < 80 && pixels[index + 2] > 200;
}

function boxes(image) {
  var visited = new Uint8Array(image.width * image.height);
  var found = [];
  var stack = [];
  for (var y = 0; y < image.height; y += 1) {
    for (var x = 0; x < image.width; x += 1) {
      var index = y * image.width + x;
      if (visited[index] || !isMagenta(image.pixels, index * 4)) { continue; }
      var box = { left: x, right: x, top: y, bottom: y, count: 0 };
      stack.length = 0;
      stack.push(index);
      visited[index] = 1;
      while (stack.length) {
        var current = stack.pop();
        var cx = current % image.width;
        var cy = (current - cx) / image.width;
        box.count += 1;
        if (cx < box.left) { box.left = cx; }
        if (cx > box.right) { box.right = cx; }
        if (cy < box.top) { box.top = cy; }
        if (cy > box.bottom) { box.bottom = cy; }
        var neighbours = [current - 1, current + 1, current - image.width, current + image.width];
        for (var n = 0; n < neighbours.length; n += 1) {
          var next = neighbours[n];
          if (next < 0 || next >= image.width * image.height) { continue; }
          if (visited[next]) { continue; }
          if (Math.abs((next % image.width) - cx) > 1) { continue; }
          if (!isMagenta(image.pixels, next * 4)) { continue; }
          visited[next] = 1;
          stack.push(next);
        }
      }
      if (box.count > 200) { found.push(box); }
    }
  }
  return found.map(function (box) {
    return {
      left: box.left,
      top: box.top,
      width: box.right - box.left + 1,
      height: box.bottom - box.top + 1,
      pixels: box.count
    };
  }).sort(function (a, b) { return a.left - b.left; });
}

var file = process.argv[2];
if (!file) {
  console.error("usage: node tools/pseudo3d/measure-ruler.js <png>");
  process.exit(2);
}
var image = stats.decodePng(fs.readFileSync(file));
var found = boxes(image);
var expected = [
  { name: "billboard", width: 40, height: 40 },
  { name: "world-squashed", width: 40, height: 26.8 },
  { name: "screen-space", width: 40, height: 40 }
];
var report = found.map(function (box, index) {
  var target = expected[index] || null;
  return {
    box: index,
    left: box.left,
    top: box.top,
    width: box.width,
    height: box.height,
    ratio: Number((box.height / box.width).toFixed(3)),
    expected: target,
    ok: target ? Math.abs(box.width - target.width) <= 2 && Math.abs(box.height - target.height) <= 2 : null
  };
});
console.log(JSON.stringify({ count: found.length, boxes: report }, null, 2));
if (report.length !== expected.length || report.some(function (entry) { return entry.ok !== true; })) {
  process.exit(1);
}
