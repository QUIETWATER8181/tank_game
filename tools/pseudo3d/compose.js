// 把多张截图拼成一张对比图（零依赖，自带 PNG 编码）。
//   node tools/pseudo3d/compose.js out.png a.png b.png c.png [--cols=3] [--scale=0.45]
"use strict";

var fs = require("fs");
var zlib = require("zlib");
var path = require("path");

function decodePng(buffer) {
  var width = buffer.readUInt32BE(16);
  var height = buffer.readUInt32BE(20);
  var bitDepth = buffer[24];
  var colorType = buffer[25];
  if (bitDepth !== 8 || (colorType !== 6 && colorType !== 2)) { throw new Error("unsupported png"); }
  var channels = colorType === 6 ? 4 : 3;
  var offset = 8;
  var idat = [];
  while (offset < buffer.length) {
    var length = buffer.readUInt32BE(offset);
    var type = buffer.toString("ascii", offset + 4, offset + 8);
    if (type === "IDAT") { idat.push(buffer.subarray(offset + 8, offset + 8 + length)); }
    if (type === "IEND") { break; }
    offset += 12 + length;
  }
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
      pixels[target] = line[source];
      pixels[target + 1] = line[source + 1];
      pixels[target + 2] = line[source + 2];
      pixels[target + 3] = 255;
    }
  }
  return { width: width, height: height, pixels: pixels };
}

function encodePng(image) {
  var width = image.width;
  var height = image.height;
  var raw = Buffer.alloc((width * 4 + 1) * height);
  var pointer = 0;
  for (var y = 0; y < height; y += 1) {
    raw[pointer] = 0;
    pointer += 1;
    image.pixels.copy(raw, pointer, y * width * 4, (y + 1) * width * 4);
    pointer += width * 4;
  }
  var idat = zlib.deflateSync(raw, { level: 9 });
  var chunks = [];
  var header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  chunks.push(makeChunk("IHDR", header));
  chunks.push(makeChunk("IDAT", idat));
  chunks.push(makeChunk("IEND", Buffer.alloc(0)));
  return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])].concat(chunks));
}

var CRC_TABLE = (function () {
  var table = new Int32Array(256);
  for (var n = 0; n < 256; n += 1) {
    var c = n;
    for (var k = 0; k < 8; k += 1) { c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; }
    table[n] = c;
  }
  return table;
}());

function crc32(buffer) {
  var c = 0xffffffff;
  for (var index = 0; index < buffer.length; index += 1) {
    c = CRC_TABLE[(c ^ buffer[index]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  var length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  var body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  var crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
}

function scaleNearest(image, factor) {
  var width = Math.max(1, Math.round(image.width * factor));
  var height = Math.max(1, Math.round(image.height * factor));
  var pixels = Buffer.alloc(width * height * 4);
  for (var y = 0; y < height; y += 1) {
    var sourceY = Math.min(image.height - 1, Math.floor(y / factor));
    for (var x = 0; x < width; x += 1) {
      var sourceX = Math.min(image.width - 1, Math.floor(x / factor));
      var source = (sourceY * image.width + sourceX) * 4;
      var target = (y * width + x) * 4;
      pixels[target] = image.pixels[source];
      pixels[target + 1] = image.pixels[source + 1];
      pixels[target + 2] = image.pixels[source + 2];
      pixels[target + 3] = 255;
    }
  }
  return { width: width, height: height, pixels: pixels };
}

function main() {
  var args = process.argv.slice(2).filter(function (arg) {
    if (arg.indexOf("--scale=") === 0) { return false; }
    if (arg.indexOf("--gap=") === 0) { return false; }
    return true;
  });
  var scaleArg = (process.argv.find(function (arg) { return arg.indexOf("--scale=") === 0; }) || "--scale=0.45").split("=")[1];
  var gapArg = (process.argv.find(function (arg) { return arg.indexOf("--gap=") === 0; }) || "--gap=10").split("=")[1];
  var scale = Number(scaleArg);
  var gap = Number(gapArg);
  var out = args[0];
  var images = args.slice(1).map(function (file) {
    return scaleNearest(decodePng(fs.readFileSync(path.resolve(file))), scale);
  });
  var width = images.reduce(function (sum, image) { return sum + image.width; }, 0) + gap * (images.length + 1);
  var height = Math.max.apply(null, images.map(function (image) { return image.height; })) + gap * 2;
  var canvas = { width: width, height: height, pixels: Buffer.alloc(width * height * 4) };
  for (var index = 0; index < canvas.pixels.length; index += 4) {
    canvas.pixels[index] = 8;
    canvas.pixels[index + 1] = 12;
    canvas.pixels[index + 2] = 10;
    canvas.pixels[index + 3] = 255;
  }
  var cursor = gap;
  images.forEach(function (image) {
    for (var y = 0; y < image.height; y += 1) {
      image.pixels.copy(canvas.pixels, ((y + gap) * width + cursor) * 4, y * image.width * 4, (y + 1) * image.width * 4);
    }
    cursor += image.width + gap;
  });
  fs.writeFileSync(out, encodePng(canvas));
  console.log("wrote " + out + " (" + width + "x" + height + ")");
}

main();
