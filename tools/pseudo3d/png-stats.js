// Minimal PNG reader + stats helper for the pseudo-3D research.
// No dependencies: node:zlib handles the DEFLATE stream, the rest is plain JS.
// Usage:
//   node tools/pseudo3d/png-stats.js <file.png> [--bands=8]
//   node tools/pseudo3d/png-stats.js --diff <a.png> <b.png>
"use strict";

var fs = require("fs");
var zlib = require("zlib");

function decodePng(buffer) {
  if (buffer.readUInt32BE(0) !== 0x89504e47) { throw new Error("not a png"); }
  var offset = 8;
  var width = 0;
  var height = 0;
  var bitDepth = 0;
  var colorType = 0;
  var idat = [];
  var palette = null;
  var transparency = null;
  while (offset < buffer.length) {
    var length = buffer.readUInt32BE(offset);
    var type = buffer.toString("ascii", offset + 4, offset + 8);
    var data = buffer.subarray(offset + 8, offset + 8 + length);
    offset += 12 + length;
    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      if (data[12] !== 0) { throw new Error("interlaced png unsupported"); }
    } else if (type === "PLTE") {
      palette = data;
    } else if (type === "tRNS") {
      transparency = data;
    } else if (type === "IDAT") {
      idat.push(data);
    } else if (type === "IEND") {
      break;
    }
  }
  if (bitDepth !== 8) { throw new Error("only 8-bit png supported, got " + bitDepth); }
  var channels = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 0 ? 1 : colorType === 4 ? 2 : 0;
  if (!channels && colorType === 3) { channels = 1; }
  if (!channels) { throw new Error("unsupported color type " + colorType); }
  var raw = zlib.inflateSync(Buffer.concat(idat));
  var stride = width * channels;
  var pixels = Buffer.alloc(width * height * 4);
  var previous = Buffer.alloc(stride);
  var line = Buffer.alloc(stride);
  var pointer = 0;
  for (var y = 0; y < height; y += 1) {
    var filter = raw[pointer];
    pointer += 1;
    raw.copy(line, 0, pointer, pointer + stride);
    pointer += stride;
    for (var x = 0; x < stride; x += 1) {
      var left = x >= channels ? line[x - channels] : 0;
      var up = previous[x];
      var upLeft = x >= channels ? previous[x - channels] : 0;
      var value = line[x];
      if (filter === 1) { value += left; }
      else if (filter === 2) { value += up; }
      else if (filter === 3) { value += (left + up) >> 1; }
      else if (filter === 4) {
        var p = left + up - upLeft;
        var pa = Math.abs(p - left);
        var pb = Math.abs(p - up);
        var pc = Math.abs(p - upLeft);
        value += (pa <= pb && pa <= pc) ? left : (pb <= pc ? up : upLeft);
      }
      line[x] = value & 0xff;
    }
    line.copy(previous);
    for (var px = 0; px < width; px += 1) {
      var source = px * channels;
      var target = (y * width + px) * 4;
      if (colorType === 6) {
        pixels[target] = line[source];
        pixels[target + 1] = line[source + 1];
        pixels[target + 2] = line[source + 2];
        pixels[target + 3] = line[source + 3];
      } else if (colorType === 2) {
        pixels[target] = line[source];
        pixels[target + 1] = line[source + 1];
        pixels[target + 2] = line[source + 2];
        pixels[target + 3] = 255;
      } else if (colorType === 0) {
        pixels[target] = pixels[target + 1] = pixels[target + 2] = line[source];
        pixels[target + 3] = 255;
      } else if (colorType === 4) {
        pixels[target] = pixels[target + 1] = pixels[target + 2] = line[source];
        pixels[target + 3] = line[source + 1];
      } else if (colorType === 3) {
        var index = line[source] * 3;
        pixels[target] = palette[index];
        pixels[target + 1] = palette[index + 1];
        pixels[target + 2] = palette[index + 2];
        pixels[target + 3] = transparency && transparency[line[source]] !== undefined ? transparency[line[source]] : 255;
      }
    }
  }
  return { width: width, height: height, pixels: pixels };
}

function alphaBounds(image) {
  var minX = image.width;
  var minY = image.height;
  var maxX = -1;
  var maxY = -1;
  for (var y = 0; y < image.height; y += 1) {
    for (var x = 0; x < image.width; x += 1) {
      if (image.pixels[(y * image.width + x) * 4 + 3] < 8) { continue; }
      if (x < minX) { minX = x; }
      if (y < minY) { minY = y; }
      if (x > maxX) { maxX = x; }
      if (y > maxY) { maxY = y; }
    }
  }
  return maxX < 0 ? null : { minX: minX, minY: minY, maxX: maxX, maxY: maxY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

function describe(image, label) {
  var bounds = alphaBounds(image);
  var sum = 0;
  var count = 0;
  var opaque = 0;
  for (var i = 0; i < image.pixels.length; i += 4) {
    if (image.pixels[i + 3] > 8) {
      opaque += 1;
      sum += (image.pixels[i] * 0.2126 + image.pixels[i + 1] * 0.7152 + image.pixels[i + 2] * 0.0722);
      count += 1;
    }
  }
  return {
    label: label,
    width: image.width,
    height: image.height,
    alphaBounds: bounds,
    opaqueRatio: Number((opaque / (image.width * image.height)).toFixed(4)),
    meanLuma: count ? Number((sum / count).toFixed(1)) : 0
  };
}

function bandReport(image, bands) {
  var rows = [];
  var bandHeight = Math.ceil(image.height / bands);
  for (var band = 0; band < bands; band += 1) {
    var sum = 0;
    var count = 0;
    var minLuma = 255;
    var maxLuma = 0;
    for (var y = band * bandHeight; y < Math.min(image.height, (band + 1) * bandHeight); y += 1) {
      for (var x = 0; x < image.width; x += 1) {
        var index = (y * image.width + x) * 4;
        var luma = image.pixels[index] * 0.2126 + image.pixels[index + 1] * 0.7152 + image.pixels[index + 2] * 0.0722;
        sum += luma;
        count += 1;
        if (luma < minLuma) { minLuma = luma; }
        if (luma > maxLuma) { maxLuma = luma; }
      }
    }
    rows.push({
      band: band,
      meanLuma: Number((sum / count).toFixed(1)),
      minLuma: Math.round(minLuma),
      maxLuma: Math.round(maxLuma)
    });
  }
  return rows;
}

function diff(a, b) {
  if (a.width !== b.width || a.height !== b.height) {
    return { sizeMismatch: true, a: [a.width, a.height], b: [b.width, b.height] };
  }
  var changed = 0;
  var total = a.width * a.height;
  var sum = 0;
  for (var i = 0; i < a.pixels.length; i += 4) {
    var delta = Math.abs(a.pixels[i] - b.pixels[i]) + Math.abs(a.pixels[i + 1] - b.pixels[i + 1]) + Math.abs(a.pixels[i + 2] - b.pixels[i + 2]);
    if (delta > 18) { changed += 1; }
    sum += delta;
  }
  return {
    changedRatio: Number((changed / total).toFixed(4)),
    meanChannelDelta: Number((sum / total / 3).toFixed(2))
  };
}

// 把截图降采样成 ASCII，方便在没有看图能力的环境里粗看构图。
var ASCII_RAMP = " .:-=+*#%@";
function asciiArt(image, columns) {
  var rows = Math.max(1, Math.round(columns * image.height / image.width / 2.1));
  var lines = [];
  for (var row = 0; row < rows; row += 1) {
    var line = "";
    for (var column = 0; column < columns; column += 1) {
      var x0 = Math.floor(column * image.width / columns);
      var x1 = Math.max(x0 + 1, Math.floor((column + 1) * image.width / columns));
      var y0 = Math.floor(row * image.height / rows);
      var y1 = Math.max(y0 + 1, Math.floor((row + 1) * image.height / rows));
      var sum = 0;
      var count = 0;
      for (var y = y0; y < y1; y += 2) {
        for (var x = x0; x < x1; x += 2) {
          var index = (y * image.width + x) * 4;
          sum += image.pixels[index] * 0.2126 + image.pixels[index + 1] * 0.7152 + image.pixels[index + 2] * 0.0722;
          count += 1;
        }
      }
      var luma = sum / Math.max(1, count);
      line += ASCII_RAMP[Math.min(ASCII_RAMP.length - 1, Math.max(0, Math.round(luma / 255 * (ASCII_RAMP.length - 1))))];
    }
    lines.push(line);
  }
  return lines.join("\n");
}

function histogram(image, limit) {
  var counts = new Map();
  for (var i = 0; i < image.pixels.length; i += 4) {
    var key = (image.pixels[i] >> 3 << 10) | (image.pixels[i + 1] >> 3 << 5) | (image.pixels[i + 2] >> 3);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return Array.from(counts.entries())
    .sort(function (a, b) { return b[1] - a[1]; })
    .slice(0, limit || 12)
    .map(function (entry) {
      var key = entry[0];
      var red = (key >> 10) << 3;
      var green = ((key >> 5) & 31) << 3;
      var blue = (key & 31) << 3;
      return {
        color: "#" + [red, green, blue].map(function (v) { return v.toString(16).padStart(2, "0"); }).join(""),
        percent: Number((entry[1] / (image.width * image.height) * 100).toFixed(2))
      };
    });
}

// 按色相分类的字符图：比亮度 ASCII 更容易看清「墙/砖/草/坦克」的分布。
function classify(red, green, blue) {
  var luma = red * 0.2126 + green * 0.7152 + blue * 0.0722;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var saturation = max === 0 ? 0 : (max - min) / max;
  if (luma < 16) { return " "; }
  if (blue > red * 1.35 && blue > green * 1.05 && luma > 55) { return "~"; }  // 水
  if (red > green * 1.35 && red > blue * 1.35 && luma > 60) { return "B"; }   // 砖 / 火
  if (green > red * 1.25 && green > blue * 1.2) { return "."; }              // 草地
  if (luma > 150) { return "*"; }                                            // 高光 / 弹丸
  if (saturation < 0.22) { return luma > 95 ? "#" : "="; }                   // 石墙顶面 / 立面
  if (luma > 80) { return "o"; }                                             // 其它亮块
  return "-";                                                                // 暗块 / 阴影
}

function classMap(image, columns) {
  var rows = Math.max(1, Math.round(columns * image.height / image.width / 2.1));
  var lines = [];
  for (var row = 0; row < rows; row += 1) {
    var line = "";
    for (var column = 0; column < columns; column += 1) {
      var x0 = Math.floor(column * image.width / columns);
      var x1 = Math.max(x0 + 1, Math.floor((column + 1) * image.width / columns));
      var y0 = Math.floor(row * image.height / rows);
      var y1 = Math.max(y0 + 1, Math.floor((row + 1) * image.height / rows));
      var red = 0;
      var green = 0;
      var blue = 0;
      var count = 0;
      for (var y = y0; y < y1; y += 2) {
        for (var x = x0; x < x1; x += 2) {
          var index = (y * image.width + x) * 4;
          red += image.pixels[index];
          green += image.pixels[index + 1];
          blue += image.pixels[index + 2];
          count += 1;
        }
      }
      line += classify(red / count, green / count, blue / count);
    }
    lines.push(line);
  }
  return lines.join("\n");
}

function main(argv) {
  if (argv[0] === "--map") {
    var mapColumns = 100;
    var mapFiles = argv.slice(1).filter(function (arg) {
      if (arg.indexOf("--cols=") === 0) { mapColumns = Number(arg.split("=")[1]); return false; }
      return true;
    });
    mapFiles.forEach(function (file) {
      var image = decodePng(fs.readFileSync(file));
      console.log("=== " + file + " ===");
      console.log(classMap(image, mapColumns));
    });
    return;
  }
  if (argv[0] === "--hist") {
    argv.slice(1).forEach(function (file) {
      var image = decodePng(fs.readFileSync(file));
      console.log("=== " + file + " ===");
      console.log(JSON.stringify(histogram(image, 14), null, 2));
    });
    return;
  }
  if (argv[0] === "--ascii") {
    var asciiColumns = 110;
    var asciiFiles = argv.slice(1).filter(function (arg) {
      if (arg.indexOf("--cols=") === 0) { asciiColumns = Number(arg.split("=")[1]); return false; }
      return true;
    });
    asciiFiles.forEach(function (file) {
      var image = decodePng(fs.readFileSync(file));
      console.log("=== " + file + " (" + image.width + "x" + image.height + ") ===");
      console.log(asciiArt(image, asciiColumns));
    });
    return;
  }
  if (argv[0] === "--diff") {
    var imageA = decodePng(fs.readFileSync(argv[1]));
    var imageB = decodePng(fs.readFileSync(argv[2]));
    console.log(JSON.stringify({ diff: diff(imageA, imageB) }, null, 2));
    return;
  }
  var bands = 8;
  var files = argv.filter(function (arg) {
    if (arg.indexOf("--bands=") === 0) { bands = Number(arg.split("=")[1]); return false; }
    return true;
  });
  var output = files.map(function (file) {
    var image = decodePng(fs.readFileSync(file));
    var result = describe(image, file);
    result.bands = bandReport(image, bands);
    return result;
  });
  console.log(JSON.stringify(output, null, 2));
}

if (require.main === module) {
  main(process.argv.slice(2));
} else {
  module.exports = { decodePng: decodePng, describe: describe, histogram: histogram, classMap: classMap, diff: diff };
}
