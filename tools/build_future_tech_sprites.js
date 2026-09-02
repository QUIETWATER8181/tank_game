"use strict";

// Deterministic raster generator for the Future Tech tank skin.
// It uses only Node's standard library so the release assets are reproducible.

var fs = require("fs");
var path = require("path");
var zlib = require("zlib");

var SIZE = 512;
var SCALE = 3;

function color(hex, alpha) {
  var value = hex.replace("#", "");
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16),
    alpha === undefined ? 255 : alpha
  ];
}

function Canvas(size, scale) {
  this.size = size;
  this.scale = scale;
  this.width = size * scale;
  this.height = size * scale;
  this.data = Buffer.alloc(this.width * this.height * 4);
}

Canvas.prototype.blend = function (x, y, rgba) {
  x = Math.round(x);
  y = Math.round(y);
  if (x < 0 || y < 0 || x >= this.width || y >= this.height || rgba[3] <= 0) { return; }
  var offset = (y * this.width + x) * 4;
  var sourceAlpha = rgba[3] / 255;
  var targetAlpha = this.data[offset + 3] / 255;
  var outputAlpha = sourceAlpha + targetAlpha * (1 - sourceAlpha);
  if (outputAlpha <= 0) { return; }
  this.data[offset] = Math.round((rgba[0] * sourceAlpha + this.data[offset] * targetAlpha * (1 - sourceAlpha)) / outputAlpha);
  this.data[offset + 1] = Math.round((rgba[1] * sourceAlpha + this.data[offset + 1] * targetAlpha * (1 - sourceAlpha)) / outputAlpha);
  this.data[offset + 2] = Math.round((rgba[2] * sourceAlpha + this.data[offset + 2] * targetAlpha * (1 - sourceAlpha)) / outputAlpha);
  this.data[offset + 3] = Math.round(outputAlpha * 255);
};

Canvas.prototype.fill = function (rgba) {
  for (var y = 0; y < this.height; y += 1) {
    for (var x = 0; x < this.width; x += 1) { this.blend(x, y, rgba); }
  }
};

Canvas.prototype.circle = function (cx, cy, radius, rgba) {
  cx *= this.scale; cy *= this.scale; radius *= this.scale;
  var minX = Math.max(0, Math.floor(cx - radius));
  var maxX = Math.min(this.width - 1, Math.ceil(cx + radius));
  var minY = Math.max(0, Math.floor(cy - radius));
  var maxY = Math.min(this.height - 1, Math.ceil(cy + radius));
  var rr = radius * radius;
  for (var y = minY; y <= maxY; y += 1) {
    for (var x = minX; x <= maxX; x += 1) {
      if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= rr) { this.blend(x, y, rgba); }
    }
  }
};

Canvas.prototype.glowCircle = function (cx, cy, radius, rgba, spread) {
  for (var layer = spread; layer >= 1; layer -= 1) {
    this.circle(cx, cy, radius + layer * 2.5, [rgba[0], rgba[1], rgba[2], Math.max(1, Math.round(rgba[3] * (spread - layer + 1) / (spread * spread * 1.5)))]);
  }
  this.circle(cx, cy, radius, rgba);
};

Canvas.prototype.line = function (x1, y1, x2, y2, width, rgba) {
  x1 *= this.scale; y1 *= this.scale; x2 *= this.scale; y2 *= this.scale; width *= this.scale;
  var minX = Math.max(0, Math.floor(Math.min(x1, x2) - width));
  var maxX = Math.min(this.width - 1, Math.ceil(Math.max(x1, x2) + width));
  var minY = Math.max(0, Math.floor(Math.min(y1, y2) - width));
  var maxY = Math.min(this.height - 1, Math.ceil(Math.max(y1, y2) + width));
  var dx = x2 - x1;
  var dy = y2 - y1;
  var lengthSquared = dx * dx + dy * dy || 1;
  var radiusSquared = width * width / 4;
  for (var y = minY; y <= maxY; y += 1) {
    for (var x = minX; x <= maxX; x += 1) {
      var t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / lengthSquared));
      var px = x1 + t * dx;
      var py = y1 + t * dy;
      if ((x - px) * (x - px) + (y - py) * (y - py) <= radiusSquared) { this.blend(x, y, rgba); }
    }
  }
};

Canvas.prototype.glowLine = function (x1, y1, x2, y2, width, rgba) {
  this.line(x1, y1, x2, y2, width + 12, [rgba[0], rgba[1], rgba[2], 12]);
  this.line(x1, y1, x2, y2, width + 6, [rgba[0], rgba[1], rgba[2], 28]);
  this.line(x1, y1, x2, y2, width, rgba);
};

Canvas.prototype.polygon = function (points, rgba) {
  var scaled = points.map(function (point) { return [point[0] * this.scale, point[1] * this.scale]; }, this);
  var minY = Math.max(0, Math.floor(Math.min.apply(null, scaled.map(function (point) { return point[1]; }))));
  var maxY = Math.min(this.height - 1, Math.ceil(Math.max.apply(null, scaled.map(function (point) { return point[1]; }))));
  for (var y = minY; y <= maxY; y += 1) {
    var intersections = [];
    for (var i = 0, j = scaled.length - 1; i < scaled.length; j = i, i += 1) {
      var a = scaled[i];
      var b = scaled[j];
      if ((a[1] > y) !== (b[1] > y)) { intersections.push(a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1])); }
    }
    intersections.sort(function (a, b) { return a - b; });
    for (var k = 0; k < intersections.length; k += 2) {
      for (var x = Math.max(0, Math.ceil(intersections[k])); x <= Math.min(this.width - 1, Math.floor(intersections[k + 1])); x += 1) { this.blend(x, y, rgba); }
    }
  }
};

Canvas.prototype.strokePolygon = function (points, width, rgba) {
  for (var i = 0; i < points.length; i += 1) {
    var next = points[(i + 1) % points.length];
    this.line(points[i][0], points[i][1], next[0], next[1], width, rgba);
  }
};

Canvas.prototype.composite = function (other) {
  for (var y = 0; y < this.height; y += 1) {
    for (var x = 0; x < this.width; x += 1) {
      var offset = (y * this.width + x) * 4;
      this.blend(x, y, [other.data[offset], other.data[offset + 1], other.data[offset + 2], other.data[offset + 3]]);
    }
  }
};

Canvas.prototype.downsample = function () {
  var output = Buffer.alloc(this.size * this.size * 4);
  var samples = this.scale * this.scale;
  for (var y = 0; y < this.size; y += 1) {
    for (var x = 0; x < this.size; x += 1) {
      var totals = [0, 0, 0, 0];
      for (var sy = 0; sy < this.scale; sy += 1) {
        for (var sx = 0; sx < this.scale; sx += 1) {
          var source = (((y * this.scale + sy) * this.width) + x * this.scale + sx) * 4;
          totals[0] += this.data[source]; totals[1] += this.data[source + 1];
          totals[2] += this.data[source + 2]; totals[3] += this.data[source + 3];
        }
      }
      var target = (y * this.size + x) * 4;
      output[target] = Math.round(totals[0] / samples); output[target + 1] = Math.round(totals[1] / samples);
      output[target + 2] = Math.round(totals[2] / samples); output[target + 3] = Math.round(totals[3] / samples);
    }
  }
  return output;
};

function drawHull(canvas) {
  var outer = [[82, 154], [128, 110], [350, 110], [429, 150], [466, 224], [466, 288], [429, 362], [350, 402], [128, 402], [82, 358], [54, 302], [54, 210]];
  canvas.polygon([[55, 171], [100, 125], [379, 125], [453, 181], [486, 231], [486, 281], [453, 331], [379, 387], [100, 387], [55, 341], [28, 302], [28, 210]], color("#050b20", 210));
  canvas.strokePolygon([[55, 171], [100, 125], [379, 125], [453, 181], [486, 231], [453, 331], [379, 387], [100, 387], [55, 341], [28, 302], [28, 210]], 8, color("#5535d8", 150));
  canvas.polygon(outer, color("#101a48"));
  canvas.strokePolygon(outer, 7, color("#744bff"));

  canvas.polygon([[94, 170], [136, 128], [206, 128], [185, 194], [110, 222]], color("#273d88"));
  canvas.polygon([[94, 342], [136, 384], [206, 384], [185, 318], [110, 290]], color("#432877"));
  canvas.polygon([[315, 128], [374, 134], [437, 184], [402, 219], [324, 190]], color("#322674"));
  canvas.polygon([[315, 384], [374, 378], [437, 328], [402, 293], [324, 322]], color("#263b83"));
  canvas.polygon([[188, 156], [316, 156], [369, 208], [358, 304], [310, 356], [188, 356], [145, 306], [145, 206]], color("#17265a"));
  canvas.strokePolygon([[188, 156], [316, 156], [369, 208], [358, 304], [310, 356], [188, 356], [145, 306], [145, 206]], 5, color("#9270ff", 210));

  canvas.polygon([[38, 192], [86, 168], [92, 208], [46, 230]], color("#6544e9"));
  canvas.polygon([[38, 320], [86, 344], [92, 304], [46, 282]], color("#3159e7"));
  canvas.polygon([[403, 184], [469, 214], [486, 246], [421, 232]], color("#3569ff"));
  canvas.polygon([[403, 328], [469, 298], [486, 266], [421, 280]], color("#7e3cff"));

  [[116, 157, 181, 202], [116, 355, 181, 310], [329, 158, 391, 204], [329, 354, 391, 308]].forEach(function (segment) {
    canvas.glowLine(segment[0], segment[1], segment[2], segment[3], 5, color("#32d8ff", 240));
  });
  canvas.glowLine(174, 256, 100, 256, 5, color("#20e7ff", 230));
  canvas.glowLine(338, 256, 433, 256, 5, color("#9a70ff", 230));
  canvas.glowCircle(256, 256, 49, color("#4a30a8", 245), 8);
  canvas.circle(256, 256, 38, color("#0b1644"));
  canvas.glowCircle(256, 256, 23, color("#1bd9ff", 250), 10);
  canvas.circle(256, 256, 11, color("#e2fbff"));
  [[120, 256], [392, 256], [256, 164], [256, 348]].forEach(function (point) { canvas.glowCircle(point[0], point[1], 5, color("#31ddff", 245), 4); });
}

function drawTurret(canvas) {
  canvas.polygon([[202, 197], [258, 174], [326, 198], [350, 226], [350, 286], [326, 314], [258, 338], [202, 315], [174, 284], [174, 228]], color("#090e2c", 225));
  canvas.strokePolygon([[202, 197], [258, 174], [326, 198], [350, 226], [350, 286], [326, 314], [258, 338], [202, 315], [174, 284], [174, 228]], 8, color("#6c3fe8", 220));
  canvas.polygon([[213, 207], [262, 189], [315, 207], [335, 233], [335, 279], [315, 305], [262, 323], [213, 305], [190, 278], [190, 234]], color("#263375"));
  canvas.polygon([[207, 213], [258, 198], [258, 314], [207, 296], [188, 272], [188, 238]], color("#48277e"));
  canvas.polygon([[304, 231], [472, 238], [503, 249], [503, 263], [472, 274], [304, 281]], color("#0b1742"));
  canvas.strokePolygon([[304, 231], [472, 238], [503, 249], [503, 263], [472, 274], [304, 281]], 5, color("#3fcfff", 235));
  canvas.polygon([[348, 239], [469, 244], [488, 251], [488, 261], [469, 268], [348, 273]], color("#2751a9"));
  canvas.glowLine(329, 248, 482, 253, 4, color("#37e1ff", 245));
  canvas.glowLine(329, 264, 482, 259, 3, color("#8b61ff", 225));
  canvas.glowCircle(504, 256, 6, color("#d9fbff", 255), 7);

  canvas.polygon([[178, 223], [128, 198], [145, 241], [173, 256]], color("#6f42e9"));
  canvas.polygon([[178, 289], [128, 314], [145, 271], [173, 256]], color("#365de8"));
  canvas.glowLine(145, 222, 189, 244, 4, color("#8a65ff", 230));
  canvas.glowLine(145, 290, 189, 268, 4, color("#26dcff", 230));

  canvas.glowCircle(258, 256, 60, color("#442b94", 210), 8);
  canvas.circle(258, 256, 47, color("#111a4c"));
  canvas.strokePolygon([[258, 202], [305, 229], [305, 283], [258, 310], [211, 283], [211, 229]], 5, color("#8c65ff", 230));
  canvas.glowCircle(258, 256, 25, color("#22dfff", 250), 11);
  canvas.circle(258, 256, 13, color("#dffcff"));
  canvas.glowLine(218, 226, 238, 238, 4, color("#9a72ff", 240));
  canvas.glowLine(218, 286, 238, 274, 4, color("#2ce4ff", 240));
  canvas.glowLine(280, 218, 299, 231, 4, color("#2ce4ff", 240));
  canvas.glowLine(280, 294, 299, 281, 4, color("#9a72ff", 240));
}

var crcTable = (function () {
  var table = [];
  for (var n = 0; n < 256; n += 1) {
    var value = n;
    for (var k = 0; k < 8; k += 1) { value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1); }
    table[n] = value >>> 0;
  }
  return table;
}());

function crc32(buffer) {
  var value = 0xffffffff;
  for (var i = 0; i < buffer.length; i += 1) { value = crcTable[(value ^ buffer[i]) & 0xff] ^ (value >>> 8); }
  return (value ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  var typeBuffer = Buffer.from(type, "ascii");
  var output = Buffer.alloc(data.length + 12);
  output.writeUInt32BE(data.length, 0); typeBuffer.copy(output, 4); data.copy(output, 8);
  output.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), data.length + 8);
  return output;
}

function writePng(filename, canvas) {
  var rgba = canvas.downsample();
  var scanlines = Buffer.alloc((SIZE * 4 + 1) * SIZE);
  for (var y = 0; y < SIZE; y += 1) {
    var target = y * (SIZE * 4 + 1);
    scanlines[target] = 0;
    rgba.copy(scanlines, target + 1, y * SIZE * 4, (y + 1) * SIZE * 4);
  }
  var header = Buffer.alloc(13);
  header.writeUInt32BE(SIZE, 0); header.writeUInt32BE(SIZE, 4);
  header[8] = 8; header[9] = 6;
  var png = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", header), chunk("IDAT", zlib.deflateSync(scanlines, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
  fs.writeFileSync(filename, png);
}

function build() {
  var output = path.resolve(__dirname, "..", "assets", "images", "tanks");
  var hull = new Canvas(SIZE, SCALE);
  var turret = new Canvas(SIZE, SCALE);
  drawHull(hull); drawTurret(turret);
  writePng(path.join(output, "future-tech-hull.png"), hull);
  writePng(path.join(output, "future-tech-turret.png"), turret);

  var preview = new Canvas(SIZE, SCALE);
  preview.fill(color("#050817"));
  for (var grid = 32; grid < SIZE; grid += 32) {
    preview.line(grid, 0, grid, SIZE, 1, color("#203061", 90));
    preview.line(0, grid, SIZE, grid, 1, color("#30215f", 90));
  }
  preview.glowCircle(258, 256, 175, color("#17296b", 140), 14);
  preview.composite(hull); preview.composite(turret);
  writePng(path.join(output, "future-tech-preview.png"), preview);
  console.log("Future Tech tank sprites generated in " + output);
}

build();
