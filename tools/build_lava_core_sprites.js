"use strict";

// Deterministic raster generator for the Lava Core tank skin.
// The assets stay transparent so the game can rotate each layer independently.
var fs = require("fs");
var path = require("path");
var zlib = require("zlib");
var SIZE = 512;
var SCALE = 1;

function rgba(hex, alpha) {
  var value = hex.replace("#", "");
  return [parseInt(value.slice(0, 2), 16), parseInt(value.slice(2, 4), 16), parseInt(value.slice(4, 6), 16), alpha === undefined ? 255 : alpha];
}

function Canvas() {
  this.width = SIZE * SCALE;
  this.height = SIZE * SCALE;
  this.data = Buffer.alloc(this.width * this.height * 4);
}

Canvas.prototype.fill = function (color) {
  for (var y = 0; y < this.height; y += 1) {
    for (var x = 0; x < this.width; x += 1) {
      var offset = (y * this.width + x) * 4;
      this.data[offset] = color[0]; this.data[offset + 1] = color[1]; this.data[offset + 2] = color[2]; this.data[offset + 3] = color[3];
    }
  }
};

Canvas.prototype.blend = function (x, y, color) {
  x = Math.round(x * SCALE); y = Math.round(y * SCALE);
  if (x < 0 || y < 0 || x >= this.width || y >= this.height || !color[3]) { return; }
  var offset = (y * this.width + x) * 4;
  var source = color[3] / 255;
  var target = this.data[offset + 3] / 255;
  var alpha = source + target * (1 - source);
  this.data[offset] = Math.round((color[0] * source + this.data[offset] * target * (1 - source)) / alpha);
  this.data[offset + 1] = Math.round((color[1] * source + this.data[offset + 1] * target * (1 - source)) / alpha);
  this.data[offset + 2] = Math.round((color[2] * source + this.data[offset + 2] * target * (1 - source)) / alpha);
  this.data[offset + 3] = Math.round(alpha * 255);
};

Canvas.prototype.circle = function (cx, cy, radius, color) {
  var minX = Math.floor(cx - radius); var maxX = Math.ceil(cx + radius);
  var minY = Math.floor(cy - radius); var maxY = Math.ceil(cy + radius);
  for (var y = minY; y <= maxY; y += 1) {
    for (var x = minX; x <= maxX; x += 1) {
      if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= radius * radius) { this.blend(x, y, color); }
    }
  }
};

Canvas.prototype.glowCircle = function (cx, cy, radius, color) {
  for (var spread = 8; spread > 0; spread -= 1) { this.circle(cx, cy, radius + spread * 3, [color[0], color[1], color[2], Math.round(color[3] / (spread * 3.3))]); }
  this.circle(cx, cy, radius, color);
};

Canvas.prototype.line = function (x1, y1, x2, y2, width, color) {
  var minX = Math.floor(Math.min(x1, x2) - width); var maxX = Math.ceil(Math.max(x1, x2) + width);
  var minY = Math.floor(Math.min(y1, y2) - width); var maxY = Math.ceil(Math.max(y1, y2) + width);
  var dx = x2 - x1; var dy = y2 - y1; var length = dx * dx + dy * dy || 1;
  for (var y = minY; y <= maxY; y += 1) {
    for (var x = minX; x <= maxX; x += 1) {
      var t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / length));
      var px = x1 + t * dx; var py = y1 + t * dy;
      if ((x - px) * (x - px) + (y - py) * (y - py) <= width * width / 4) { this.blend(x, y, color); }
    }
  }
};

Canvas.prototype.polygon = function (points, color) {
  var minY = Math.floor(Math.min.apply(null, points.map(function (point) { return point[1]; })));
  var maxY = Math.ceil(Math.max.apply(null, points.map(function (point) { return point[1]; })));
  for (var y = minY; y <= maxY; y += 1) {
    var intersections = [];
    for (var i = 0, j = points.length - 1; i < points.length; j = i, i += 1) {
      var a = points[i]; var b = points[j];
      if ((a[1] > y) !== (b[1] > y)) { intersections.push(a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1])); }
    }
    intersections.sort(function (a, b) { return a - b; });
    for (var k = 0; k < intersections.length; k += 2) {
      for (var x = Math.ceil(intersections[k]); x <= Math.floor(intersections[k + 1]); x += 1) { this.blend(x, y, color); }
    }
  }
};

Canvas.prototype.stroke = function (points, width, color) {
  for (var i = 0; i < points.length; i += 1) { var next = points[(i + 1) % points.length]; this.line(points[i][0], points[i][1], next[0], next[1], width, color); }
};

Canvas.prototype.composite = function (other) {
  for (var y = 0; y < this.height; y += 1) {
    for (var x = 0; x < this.width; x += 1) {
      var offset = (y * this.width + x) * 4;
      var alpha = other.data[offset + 3] / 255;
      if (!alpha) { continue; }
      this.data[offset] = Math.round(other.data[offset] * alpha + this.data[offset] * (1 - alpha));
      this.data[offset + 1] = Math.round(other.data[offset + 1] * alpha + this.data[offset + 1] * (1 - alpha));
      this.data[offset + 2] = Math.round(other.data[offset + 2] * alpha + this.data[offset + 2] * (1 - alpha));
      this.data[offset + 3] = Math.round((alpha + this.data[offset + 3] / 255 * (1 - alpha)) * 255);
    }
  }
};

Canvas.prototype.downsample = function () {
  var output = Buffer.alloc(SIZE * SIZE * 4);
  for (var y = 0; y < SIZE; y += 1) {
    for (var x = 0; x < SIZE; x += 1) {
      var totals = [0, 0, 0, 0];
      for (var sy = 0; sy < SCALE; sy += 1) { for (var sx = 0; sx < SCALE; sx += 1) {
        var source = (((y * SCALE + sy) * SIZE * SCALE) + x * SCALE + sx) * 4;
        totals[0] += this.data[source]; totals[1] += this.data[source + 1]; totals[2] += this.data[source + 2]; totals[3] += this.data[source + 3];
      } }
      var target = (y * SIZE + x) * 4;
      var samples = SCALE * SCALE;
      output[target] = Math.round(totals[0] / samples); output[target + 1] = Math.round(totals[1] / samples); output[target + 2] = Math.round(totals[2] / samples); output[target + 3] = Math.round(totals[3] / samples);
    }
  }
  return output;
};

var crcTable = [];
for (var n = 0; n < 256; n += 1) { var crc = n; for (var bit = 0; bit < 8; bit += 1) { crc = (crc & 1) ? (0xedb88320 ^ (crc >>> 1)) : (crc >>> 1); } crcTable[n] = crc >>> 0; }
function crc32(buffer) { var value = 0xffffffff; for (var i = 0; i < buffer.length; i += 1) { value = crcTable[(value ^ buffer[i]) & 255] ^ (value >>> 8); } return (value ^ 0xffffffff) >>> 0; }
function chunk(type, data) { var name = Buffer.from(type, "ascii"); var output = Buffer.alloc(data.length + 12); output.writeUInt32BE(data.length, 0); name.copy(output, 4); data.copy(output, 8); output.writeUInt32BE(crc32(Buffer.concat([name, data])), data.length + 8); return output; }
function writePng(filename, canvas) {
  var rgbaData = canvas.downsample(); var scanlines = Buffer.alloc((SIZE * 4 + 1) * SIZE);
  for (var y = 0; y < SIZE; y += 1) { scanlines[y * (SIZE * 4 + 1)] = 0; rgbaData.copy(scanlines, y * (SIZE * 4 + 1) + 1, y * SIZE * 4, (y + 1) * SIZE * 4); }
  var header = Buffer.alloc(13); header.writeUInt32BE(SIZE, 0); header.writeUInt32BE(SIZE, 4); header[8] = 8; header[9] = 6;
  fs.writeFileSync(filename, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", header), chunk("IDAT", zlib.deflateSync(scanlines, { level: 9 })), chunk("IEND", Buffer.alloc(0))]));
}

function drawHull(canvas) {
  var outline = [[48, 180], [90, 128], [155, 108], [357, 108], [420, 133], [466, 181], [482, 230], [482, 282], [463, 333], [417, 381], [354, 404], [157, 404], [91, 385], [48, 339], [29, 286], [29, 230]];
  canvas.polygon(outline, rgba("#100e0e")); canvas.stroke(outline, 8, rgba("#5b1d18"));
  canvas.polygon([[73, 174], [125, 137], [175, 125], [340, 125], [394, 145], [431, 184], [446, 230], [446, 282], [429, 328], [390, 364], [338, 380], [174, 380], [124, 365], [83, 331], [68, 283], [68, 230]], rgba("#272020"));
  canvas.polygon([[91, 174], [132, 143], [177, 133], [193, 190], [111, 219]], rgba("#40302a"));
  canvas.polygon([[91, 338], [132, 365], [177, 374], [193, 316], [111, 288]], rgba("#171313"));
  canvas.polygon([[320, 133], [341, 190], [405, 218], [429, 184], [391, 150]], rgba("#3c2a26"));
  canvas.polygon([[320, 374], [341, 316], [405, 288], [429, 329], [391, 360]], rgba("#171313"));
  canvas.polygon([[184, 151], [326, 151], [371, 194], [367, 316], [320, 357], [190, 357], [143, 314], [143, 194]], rgba("#321f1d"));
  canvas.stroke([[184, 151], [326, 151], [371, 194], [367, 316], [320, 357], [190, 357], [143, 314], [143, 194]], 5, rgba("#6c2b1d"));
  [[116, 158, 180, 203], [116, 354, 180, 309], [332, 158, 397, 203], [332, 354, 397, 309], [175, 256, 103, 256], [337, 256, 424, 256]].forEach(function (line) { canvas.line(line[0], line[1], line[2], line[3], 7, rgba("#ff4a1f", 150)); canvas.line(line[0], line[1], line[2], line[3], 3, rgba("#ffb52e")); });
  canvas.glowCircle(256, 256, 48, rgba("#b52c14", 230)); canvas.circle(256, 256, 36, rgba("#201110")); canvas.glowCircle(256, 256, 22, rgba("#ff4b1f", 250)); canvas.circle(256, 256, 10, rgba("#ffd47a"));
  [[120, 256], [392, 256], [256, 164], [256, 348]].forEach(function (point) { canvas.glowCircle(point[0], point[1], 5, rgba("#ff7a24", 230)); });
}

function drawTurret(canvas) {
  var outline = [[195, 197], [258, 171], [327, 195], [353, 225], [353, 288], [326, 319], [258, 343], [195, 318], [169, 286], [169, 226]];
  canvas.polygon(outline, rgba("#120e0e")); canvas.stroke(outline, 8, rgba("#702419")); canvas.polygon([[205, 205], [258, 184], [317, 205], [338, 231], [338, 281], [316, 306], [258, 329], [205, 306], [184, 279], [184, 232]], rgba("#332321"));
  canvas.polygon([[210, 210], [258, 190], [258, 321], [210, 301], [191, 277], [191, 235]], rgba("#4a2b24")); canvas.polygon([[258, 190], [310, 210], [331, 235], [331, 276], [309, 301], [258, 321]], rgba("#211515"));
  canvas.polygon([[305, 229], [470, 235], [505, 247], [505, 265], [470, 277], [305, 283]], rgba("#130e0e")); canvas.polygon([[318, 238], [469, 243], [490, 250], [490, 262], [469, 269], [318, 274]], rgba("#40221c")); canvas.line(330, 247, 480, 252, 6, rgba("#ff6424")); canvas.line(330, 266, 480, 261, 3, rgba("#9e2c1b")); canvas.glowCircle(505, 256, 7, rgba("#ffbd52"));
  canvas.polygon([[180, 221], [134, 199], [149, 242], [179, 256]], rgba("#5c2a20")); canvas.polygon([[180, 291], [134, 313], [149, 270], [179, 256]], rgba("#251716"));
  canvas.glowCircle(258, 256, 58, rgba("#a92b17", 190)); canvas.circle(258, 256, 46, rgba("#251313")); canvas.stroke([[213, 218], [258, 201], [303, 218], [317, 239], [317, 274], [303, 294], [258, 311], [213, 294], [198, 274], [198, 239]], 4, rgba("#c74420")); canvas.glowCircle(258, 256, 24, rgba("#ff551f", 245)); canvas.circle(258, 256, 12, rgba("#ffd36d"));
  [[214, 225, 237, 238], [214, 287, 237, 274], [280, 218, 301, 231], [280, 294, 301, 281]].forEach(function (line) { canvas.line(line[0], line[1], line[2], line[3], 4, rgba("#ff7a24")); });
}

function build() {
  var output = path.resolve(__dirname, "..", "assets", "images", "tanks");
  var hull = new Canvas(); var turret = new Canvas(); drawHull(hull); drawTurret(turret);
  writePng(path.join(output, "lava-core-hull.png"), hull); writePng(path.join(output, "lava-core-turret.png"), turret);
  var preview = new Canvas(); preview.fill(rgba("#160c0b"));
  for (var grid = 32; grid < SIZE; grid += 32) { preview.line(grid, 0, grid, SIZE, 1, rgba("#51211b", 110)); preview.line(0, grid, SIZE, grid, 1, rgba("#51211b", 110)); }
  preview.glowCircle(256, 256, 176, rgba("#7d2015", 95)); preview.composite(hull); preview.composite(turret); writePng(path.join(output, "lava-core-preview.png"), preview);
  console.log("Lava Core tank sprites generated in " + output);
}
build();
