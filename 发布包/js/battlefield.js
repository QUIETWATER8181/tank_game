(function () {
  "use strict";

  // 2.5D 战场渲染层。
  //
  // 只负责「看起来像战场」：地表材质、道路/弹坑/履带、墙体厚度与受光、
  // 坦克接地阴影与扬尘、屏幕空间的气氛层。碰撞、AI、联机协议一概不碰。
  // 所有贴图都在第一次绘制时程序化生成一次，之后每帧只做 drawImage / fillRect。
  var TankGame = window.TankGame = window.TankGame || {};
  var Config = TankGame.Config;
  var TILE = Config.tileSize || 60;

  var B = {
    ready: false,
    patterns: {},
    sprites: {},
    roadCache: null,
    tracks: [],
    groundChunks: null,
    groundChunkClock: 0,
    wallSpriteCache: Object.create(null),
    wallSpriteCacheCount: 0,
    wallTiles: Object.create(null),
    wallPhaseTiles: Object.create(null),
    now: 0
  };

  var WALL_HEIGHT = { "#": 38, "B": 27, "I": 56, "S": 10 };
  var SOLID = { "#": true, "B": true, "I": true, "S": true };

  // ---------------------------------------------------------------- 基础工具

  function hash(x, y, salt) {
    var value = Math.imul((x | 0) ^ 0x45D9F3B, 0x27D4EB2D);
    value = Math.imul(value ^ (y | 0), 0x165667B1);
    value = Math.imul(value ^ (salt | 0), 0x9E3779B1);
    value ^= value >>> 15;
    return (value >>> 0) / 4294967296;
  }

  function rng(seed) {
    var value = seed >>> 0;
    return function () {
      value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function smoothstep(edge0, edge1, value) {
    var t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  function mixColor(from, to, amount) {
    return [
      Math.round(from[0] + (to[0] - from[0]) * amount),
      Math.round(from[1] + (to[1] - from[1]) * amount),
      Math.round(from[2] + (to[2] - from[2]) * amount)
    ];
  }

  function rgb(color) {
    return "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
  }

  function makeCanvas(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  function nowSeconds() {
    return (typeof performance !== "undefined" && performance.now ? performance.now() : Date.now()) / 1000;
  }

  function fract(value) {
    return value - Math.floor(value);
  }

  // 周期噪声：整数周期，贴图四边无缝
  function periodicNoise(x, y, period, salt) {
    var xi = Math.floor(x);
    var yi = Math.floor(y);
    var xf = x - xi;
    var yf = y - yi;
    var u = xf * xf * (3 - 2 * xf);
    var v = yf * yf * (3 - 2 * yf);
    function wrap(value) { return ((value % period) + period) % period; }
    var x0 = wrap(xi);
    var x1 = wrap(xi + 1);
    var y0 = wrap(yi);
    var y1 = wrap(yi + 1);
    var a = hash(x0, y0, salt);
    var b = hash(x1, y0, salt);
    var c = hash(x0, y1, salt);
    var d = hash(x1, y1, salt);
    return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
  }

  // 在方形贴图上「绕边重画」，跨边界的草叶/石子不会在拼接处断掉
  function wrapped(size, x, y, margin, draw) {
    var offsetsX = [0];
    var offsetsY = [0];
    if (x < margin) { offsetsX.push(size); }
    if (x > size - margin) { offsetsX.push(-size); }
    if (y < margin) { offsetsY.push(size); }
    if (y > size - margin) { offsetsY.push(-size); }
    offsetsX.forEach(function (offsetX) {
      offsetsY.forEach(function (offsetY) {
        draw(offsetX, offsetY);
      });
    });
  }

  // ---------------------------------------------------------------- 贴图生成

  // 512 无缝地表：低频色场 + 干草/泥斑 + 草叶 + 石子 + 灰烬
  function makeGroundTile(size) {
    var tile = makeCanvas(size, size);
    var g = tile.getContext("2d");
    var random = rng(0x51ED270B);
    var cell = 4;
    var cells = size / cell;

    var dark = [25, 30, 20];
    var mid = [52, 56, 36];
    var light = [94, 94, 58];
    var dry = [124, 108, 70];
    var mud = [54, 44, 32];

    var image = g.createImageData(size, size);
    var data = image.data;
    for (var cy = 0; cy < cells; cy += 1) {
      for (var cx = 0; cx < cells; cx += 1) {
        var broad = periodicNoise(cx / 16, cy / 16, cells / 16, 11);
        var fine = periodicNoise(cx / 4, cy / 4, cells / 4, 12);
        var dryness = periodicNoise(cx / 16, cy / 16, cells / 16, 13);
        var muddiness = periodicNoise(cx / 8, cy / 8, cells / 8, 14);
        var value = broad * 0.54 + fine * 0.34 + periodicNoise(cx / 2, cy / 2, cells / 2, 15) * 0.12;
        var base = value < 0.5 ? mixColor(dark, mid, value * 2) : mixColor(mid, light, (value - 0.5) * 2);
        base = mixColor(base, dry, smoothstep(0.46, 0.78, dryness) * 0.72);
        base = mixColor(base, mud, smoothstep(0.55, 0.82, muddiness) * 0.55);
        for (var py = 0; py < cell; py += 1) {
          var row = ((cy * cell + py) * size + cx * cell) * 4;
          for (var px = 0; px < cell; px += 1) {
            data[row + px * 4] = base[0];
            data[row + px * 4 + 1] = base[1];
            data[row + px * 4 + 2] = base[2];
            data[row + px * 4 + 3] = 255;
          }
        }
      }
    }
    g.putImageData(image, 0, 0);

    // 泥斑：压暗并带一点湿土色
    for (var patch = 0; patch < 30; patch += 1) {
      var patchX = random() * size;
      var patchY = random() * size;
      var patchRadius = 16 + random() * 58;
      wrapped(size, patchX, patchY, patchRadius + 6, function (offsetX, offsetY) {
        var gradient = g.createRadialGradient(patchX + offsetX, patchY + offsetY, patchRadius * 0.15,
          patchX + offsetX, patchY + offsetY, patchRadius);
        gradient.addColorStop(0, "rgba(52, 41, 29, 0.34)");
        gradient.addColorStop(0.55, "rgba(60, 48, 33, 0.16)");
        gradient.addColorStop(1, "rgba(60, 48, 33, 0)");
        g.fillStyle = gradient;
        g.fillRect(patchX + offsetX - patchRadius, patchY + offsetY - patchRadius, patchRadius * 2, patchRadius * 2);
      });
    }

    // 枯草/干土亮斑：打散整片绿
    for (var dryPatch = 0; dryPatch < 22; dryPatch += 1) {
      var dryX = random() * size;
      var dryY = random() * size;
      var dryRadius = 20 + random() * 46;
      wrapped(size, dryX, dryY, dryRadius + 4, function (offsetX, offsetY) {
        var gradient = g.createRadialGradient(dryX + offsetX, dryY + offsetY, dryRadius * 0.1,
          dryX + offsetX, dryY + offsetY, dryRadius);
        gradient.addColorStop(0, "rgba(146, 127, 76, 0.22)");
        gradient.addColorStop(0.65, "rgba(132, 116, 70, 0.10)");
        gradient.addColorStop(1, "rgba(132, 116, 70, 0)");
        g.fillStyle = gradient;
        g.fillRect(dryX + offsetX - dryRadius, dryY + offsetY - dryRadius, dryRadius * 2, dryRadius * 2);
      });
    }

    // 草叶：根部深、尖端亮，整体偏橄榄/枯黄，避免霓虹绿
    var bladeColors = [
      "rgba(18, 26, 18, 0.62)",
      "rgba(40, 52, 32, 0.58)",
      "rgba(68, 76, 42, 0.52)",
      "rgba(108, 104, 58, 0.46)",
      "rgba(142, 126, 76, 0.34)"
    ];
    for (var blade = 0; blade < 2800; blade += 1) {
      var bladeX = random() * size;
      var bladeY = random() * size;
      var length = 3.5 + random() * 8;
      var lean = (random() - 0.5) * 1.25;
      var tipX = bladeX + lean * length;
      var tipY = bladeY - length;
      var width = 0.6 + random() * 0.9;
      var tone = bladeColors[Math.min(bladeColors.length - 1, Math.floor(random() * random() * bladeColors.length))];
      wrapped(size, bladeX, bladeY, length + 2, function (offsetX, offsetY) {
        g.beginPath();
        g.moveTo(bladeX + offsetX, bladeY + offsetY);
        g.quadraticCurveTo(bladeX + offsetX + lean * length * 0.3, bladeY + offsetY - length * 0.6,
          tipX + offsetX, tipY + offsetY);
        g.strokeStyle = tone;
        g.lineWidth = width;
        g.lineCap = "round";
        g.stroke();
      });
    }

    // 石子：暗影 + 亮面，给地面一点硬质颗粒
    for (var pebble = 0; pebble < 130; pebble += 1) {
      var pebbleX = random() * size;
      var pebbleY = random() * size;
      var pebbleRadius = 0.8 + random() * 2.4;
      wrapped(size, pebbleX, pebbleY, 8, function (offsetX, offsetY) {
        g.beginPath();
        g.ellipse(pebbleX + offsetX, pebbleY + offsetY + pebbleRadius * 0.7, pebbleRadius, pebbleRadius * 0.7, 0, 0, Math.PI * 2);
        g.fillStyle = "rgba(18, 22, 16, 0.34)";
        g.fill();
        g.beginPath();
        g.ellipse(pebbleX + offsetX, pebbleY + offsetY, pebbleRadius, pebbleRadius * 0.72, 0, 0, Math.PI * 2);
        g.fillStyle = random() > 0.5 ? "rgba(142, 138, 112, 0.52)" : "rgba(96, 94, 78, 0.48)";
        g.fill();
      });
    }

    // 灰烬/焦土点：战场不是干净草坪
    for (var ash = 0; ash < 620; ash += 1) {
      var ashX = random() * size;
      var ashY = random() * size;
      var ashSize = 1 + random() * 2.2;
      wrapped(size, ashX, ashY, 4, function (offsetX, offsetY) {
        g.fillStyle = random() > 0.55 ? "rgba(26, 25, 22, 0.34)" : "rgba(96, 92, 78, 0.22)";
        g.fillRect(ashX + offsetX, ashY + offsetY, ashSize, ashSize);
      });
    }

    return tile;
  }

  // 256 土路：压实土 + 碎石 + 车辙色
  function makeRoadTile(size) {
    var tile = makeCanvas(size, size);
    var g = tile.getContext("2d");
    var random = rng(0x2A17C0DE);
    var cell = 4;
    var cells = size / cell;
    var dark = [58, 49, 36];
    var mid = [88, 76, 56];
    var light = [118, 102, 74];

    var image = g.createImageData(size, size);
    var data = image.data;
    for (var cy = 0; cy < cells; cy += 1) {
      for (var cx = 0; cx < cells; cx += 1) {
        var value = periodicNoise(cx / 8, cy / 8, cells / 8, 21) * 0.58 +
          periodicNoise(cx / 2, cy / 2, cells / 2, 22) * 0.42;
        var base = value < 0.5 ? mixColor(dark, mid, value * 2) : mixColor(mid, light, (value - 0.5) * 2);
        for (var py = 0; py < cell; py += 1) {
          var row = ((cy * cell + py) * size + cx * cell) * 4;
          for (var px = 0; px < cell; px += 1) {
            data[row + px * 4] = base[0];
            data[row + px * 4 + 1] = base[1];
            data[row + px * 4 + 2] = base[2];
            data[row + px * 4 + 3] = 255;
          }
        }
      }
    }
    g.putImageData(image, 0, 0);

    for (var stone = 0; stone < 240; stone += 1) {
      var stoneX = random() * size;
      var stoneY = random() * size;
      var stoneRadius = 0.7 + random() * 1.8;
      wrapped(size, stoneX, stoneY, 6, function (offsetX, offsetY) {
        g.fillStyle = "rgba(36, 30, 22, 0.28)";
        g.beginPath();
        g.ellipse(stoneX + offsetX, stoneY + offsetY + 1, stoneRadius, stoneRadius * 0.7, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = random() > 0.5 ? "rgba(158, 142, 108, 0.5)" : "rgba(72, 64, 48, 0.5)";
        g.beginPath();
        g.ellipse(stoneX + offsetX, stoneY + offsetY, stoneRadius, stoneRadius * 0.7, 0, 0, Math.PI * 2);
        g.fill();
      });
    }
    for (var crack = 0; crack < 18; crack += 1) {
      var crackX = random() * size;
      var crackY = random() * size;
      g.strokeStyle = "rgba(32, 27, 20, 0.34)";
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(crackX, crackY);
      g.lineTo(crackX + (random() - 0.5) * 26, crackY + random() * 20);
      g.lineTo(crackX + (random() - 0.5) * 38, crackY + random() * 34);
      g.stroke();
    }
    return tile;
  }

  // 128 墙面材质：混凝土 / 砖 / 钢板
  function makeWallTile(kind) {
    var size = 128;
    var tile = makeCanvas(size, size);
    var g = tile.getContext("2d");
    var random = rng(kind === "B" ? 0x71B21C4D : (kind === "I" ? 0x5EE1A0B3 : 0x3C9D77A1));
    var image;
    var data;
    var x;
    var y;

    if (kind === "B") {
      g.fillStyle = "#6d5d49";
      g.fillRect(0, 0, size, size);
      var brickRows = 8;
      var brickHeight = size / brickRows;
      var brickWidth = 32;
      for (var row = 0; row < brickRows; row += 1) {
        var offset = row % 2 ? brickWidth / 2 : 0;
        for (var column = -1; column < size / brickWidth + 1; column += 1) {
          var brickX = column * brickWidth + offset;
          var brickY = row * brickHeight;
          var tone = 0.72 + random() * 0.36;
          g.fillStyle = "rgb(" + Math.round(104 * tone) + "," + Math.round(55 * tone) + "," + Math.round(42 * tone) + ")";
          g.fillRect(brickX + 1.5, brickY + 1.5, brickWidth - 3, brickHeight - 3);
          g.fillStyle = "rgba(226, 168, 118, 0.16)";
          g.fillRect(brickX + 2, brickY + 2, brickWidth - 5, 2);
          g.fillStyle = "rgba(38, 22, 18, 0.26)";
          g.fillRect(brickX + 2, brickY + brickHeight - 4, brickWidth - 4, 2);
          if (random() > 0.82) {
            g.fillStyle = "rgba(28, 20, 16, 0.42)";
            g.fillRect(brickX + 5 + random() * 16, brickY + 4, 4 + random() * 7, 2 + random() * 3);
          }
        }
      }
      // 砖缝里的烟熏/水渍
      for (var stain = 0; stain < 10; stain += 1) {
        var stainX = random() * size;
        g.fillStyle = "rgba(24, 18, 14, " + (0.04 + random() * 0.06).toFixed(3) + ")";
        g.fillRect(stainX, 0, 4 + random() * 12, size);
      }
      return tile;
    }

    var base = kind === "I" ? [84, 92, 90] : [108, 110, 100];
    var dark = [base[0] * 0.62, base[1] * 0.62, base[2] * 0.62];
    var light = [Math.min(255, base[0] * 1.18), Math.min(255, base[1] * 1.18), Math.min(255, base[2] * 1.18)];
    image = g.createImageData(size, size);
    data = image.data;
    for (y = 0; y < size; y += 1) {
      for (x = 0; x < size; x += 1) {
        var noise = hash(x, y, kind === "I" ? 71 : 31) * 0.55 + hash(Math.floor(x / 2), Math.floor(y / 2), 37) * 0.45;
        var color = mixColor(dark, light, noise);
        var index = (y * size + x) * 4;
        data[index] = color[0];
        data[index + 1] = color[1];
        data[index + 2] = color[2];
        data[index + 3] = 255;
      }
    }
    g.putImageData(image, 0, 0);

    if (kind === "I") {
      // 钢板：拼缝 + 铆钉 + 锈迹
      g.strokeStyle = "rgba(26, 30, 30, 0.62)";
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(0, 64); g.lineTo(size, 64);
      g.moveTo(64, 0); g.lineTo(64, size);
      g.stroke();
      g.strokeStyle = "rgba(218, 224, 214, 0.18)";
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(0, 62); g.lineTo(size, 62);
      g.moveTo(62, 0); g.lineTo(62, size);
      g.stroke();
      for (var rivetY = 8; rivetY < size; rivetY += 16) {
        for (var rivetX = 8; rivetX < size; rivetX += 16) {
          g.fillStyle = "rgba(20, 24, 24, 0.55)";
          g.beginPath(); g.arc(rivetX, rivetY, 2.2, 0, Math.PI * 2); g.fill();
          g.fillStyle = "rgba(196, 202, 190, 0.30)";
          g.beginPath(); g.arc(rivetX - 0.6, rivetY - 0.6, 1.1, 0, Math.PI * 2); g.fill();
        }
      }
      for (var rust = 0; rust < 14; rust += 1) {
        var rustX = random() * size;
        var rustY = random() * size * 0.5;
        g.fillStyle = "rgba(124, 70, 38, " + (0.10 + random() * 0.16).toFixed(3) + ")";
        g.fillRect(rustX, rustY, 2 + random() * 4, 12 + random() * 38);
      }
    } else {
      // 混凝土：模板缝 + 拉杆孔 + 水渍 + 裂缝
      g.strokeStyle = "rgba(48, 52, 46, 0.42)";
      g.lineWidth = 1.5;
      [32, 64, 96].forEach(function (lineY) {
        g.beginPath(); g.moveTo(0, lineY); g.lineTo(size, lineY); g.stroke();
        g.strokeStyle = "rgba(206, 206, 188, 0.12)";
        g.beginPath(); g.moveTo(0, lineY + 1.5); g.lineTo(size, lineY + 1.5); g.stroke();
        g.strokeStyle = "rgba(48, 52, 46, 0.42)";
      });
      g.strokeStyle = "rgba(40, 44, 40, 0.34)";
      g.beginPath(); g.moveTo(64, 0); g.lineTo(64, size); g.stroke();
      for (var holeY = 16; holeY < size; holeY += 32) {
        for (var holeX = 16; holeX < size; holeX += 32) {
          g.fillStyle = "rgba(30, 34, 30, 0.55)";
          g.beginPath(); g.arc(holeX, holeY, 2.6, 0, Math.PI * 2); g.fill();
          g.fillStyle = "rgba(186, 188, 170, 0.16)";
          g.beginPath(); g.arc(holeX - 0.7, holeY - 0.7, 1.2, 0, Math.PI * 2); g.fill();
        }
      }
      for (var waterStain = 0; waterStain < 9; waterStain += 1) {
        var stainX = random() * size;
        var stainTop = random() * size * 0.4;
        g.fillStyle = "rgba(38, 44, 38, " + (0.05 + random() * 0.07).toFixed(3) + ")";
        g.fillRect(stainX, stainTop, 3 + random() * 9, size - stainTop);
      }
      for (var crack = 0; crack < 7; crack += 1) {
        var crackX = random() * size;
        var crackY = random() * size;
        g.strokeStyle = "rgba(28, 32, 28, 0.48)";
        g.lineWidth = 1.2;
        g.beginPath();
        g.moveTo(crackX, crackY);
        g.lineTo(crackX + (random() - 0.5) * 18, crackY + random() * 14);
        g.lineTo(crackX + (random() - 0.5) * 28, crackY + random() * 30);
        g.stroke();
      }
    }

    // 边角破损：让墙面不是一块完美的瓷砖
    for (var chip = 0; chip < 12; chip += 1) {
      var chipX = random() * size;
      var chipY = random() > 0.5 ? 0 : size;
      g.fillStyle = "rgba(22, 24, 20, 0.52)";
      g.beginPath();
      g.moveTo(chipX, chipY);
      g.lineTo(chipX + 3 + random() * 8, chipY + (chipY === 0 ? 1 : -1) * (2 + random() * 5));
      g.lineTo(chipX + 7 + random() * 10, chipY);
      g.closePath();
      g.fill();
    }
    return tile;
  }

  function makeSoftRectSprite(size, falloff) {
    var sprite = makeCanvas(size, size);
    var g = sprite.getContext("2d");
    var image = g.createImageData(size, size);
    for (var y = 0; y < size; y += 1) {
      for (var x = 0; x < size; x += 1) {
        var dx = Math.max(falloff - x, x - (size - 1 - falloff), 0);
        var dy = Math.max(falloff - y, y - (size - 1 - falloff), 0);
        var distance = Math.sqrt(dx * dx + dy * dy);
        var alpha = Math.max(0, 1 - distance / falloff);
        alpha *= alpha;
        var index = (y * size + x) * 4;
        image.data[index] = 0;
        image.data[index + 1] = 0;
        image.data[index + 2] = 0;
        image.data[index + 3] = Math.round(alpha * 255);
      }
    }
    g.putImageData(image, 0, 0);
    return sprite;
  }

  function makeRadialSprite(size, colorStops) {
    var sprite = makeCanvas(size, size);
    var g = sprite.getContext("2d");
    var gradient = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    colorStops.forEach(function (stop) { gradient.addColorStop(stop[0], stop[1]); });
    g.fillStyle = gradient;
    g.fillRect(0, 0, size, size);
    return sprite;
  }

  function makeWallShadowSprite() {
    var sprite = makeCanvas(128, 96);
    var g = sprite.getContext("2d");
    var gradient = g.createLinearGradient(0, 0, 0, 96);
    gradient.addColorStop(0, "rgba(4, 6, 5, 0.50)");
    gradient.addColorStop(0.45, "rgba(4, 6, 5, 0.22)");
    gradient.addColorStop(1, "rgba(4, 6, 5, 0)");
    g.fillStyle = gradient;
    g.fillRect(0, 0, 128, 96);
    // 左右收边，影子不是一块硬矩形
    g.globalCompositeOperation = "destination-in";
    var side = g.createLinearGradient(0, 0, 128, 0);
    side.addColorStop(0, "rgba(0,0,0,0)");
    side.addColorStop(0.16, "rgba(0,0,0,1)");
    side.addColorStop(0.84, "rgba(0,0,0,1)");
    side.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = side;
    g.fillRect(0, 0, 128, 96);
    return sprite;
  }

  function makeFaceShadeSprite() {
    var sprite = makeCanvas(64, 128);
    var g = sprite.getContext("2d");
    var gradient = g.createLinearGradient(0, 0, 0, 128);
    gradient.addColorStop(0, "rgba(255, 246, 216, 0.13)");
    gradient.addColorStop(0.12, "rgba(255, 246, 216, 0.04)");
    gradient.addColorStop(0.62, "rgba(0, 0, 0, 0.10)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.42)");
    g.fillStyle = gradient;
    g.fillRect(0, 0, 64, 128);
    return sprite;
  }

  function makeTopLightSprite() {
    var sprite = makeCanvas(64, 64);
    var g = sprite.getContext("2d");
    var gradient = g.createLinearGradient(0, 0, 64, 64);
    gradient.addColorStop(0, "rgba(255, 246, 214, 0.10)");
    gradient.addColorStop(0.55, "rgba(255, 246, 214, 0.02)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.12)");
    g.fillStyle = gradient;
    g.fillRect(0, 0, 64, 64);
    return sprite;
  }

  function makeFringeSprite(width, height, seed) {
    var sprite = makeCanvas(width, height);
    var g = sprite.getContext("2d");
    var random = rng(seed);
    for (var index = 0; index < 130; index += 1) {
      var x = random() * width;
      var baseY = height - random() * 6;
      var length = height * (0.28 + random() * 0.62);
      var lean = (random() - 0.5) * 1.15;
      var shade = random();
      g.beginPath();
      g.moveTo(x, baseY);
      g.quadraticCurveTo(x + lean * length * 0.3, baseY - length * 0.62, x + lean * length, baseY - length);
      g.lineWidth = 0.8 + random() * 1.2;
      g.lineCap = "round";
      g.strokeStyle = shade > 0.78 ? "rgba(150, 146, 88, 0.82)" :
        (shade > 0.42 ? "rgba(76, 88, 52, 0.88)" : "rgba(30, 40, 26, 0.92)");
      g.stroke();
    }
    return sprite;
  }

  function makeDustSprite() {
    return makeRadialSprite(64, [
      [0, "rgba(176, 160, 126, 0.46)"],
      [0.45, "rgba(164, 148, 116, 0.22)"],
      [1, "rgba(150, 136, 108, 0)"]
    ]);
  }

  function makeTankShadowSprite() {
    return makeRadialSprite(96, [
      [0, "rgba(0, 0, 0, 0.62)"],
      [0.55, "rgba(0, 0, 0, 0.34)"],
      [1, "rgba(0, 0, 0, 0)"]
    ]);
  }

  function ensure(ctx) {
    if (B.ready) { return true; }
    if (!ctx || !document || !document.createElement) { return false; }

    B.patterns.ground = ctx.createPattern(makeGroundTile(512), "repeat");
    B.patterns.road = ctx.createPattern(makeRoadTile(256), "repeat");
    // 中央石台的石板：正常图偏冷灰绿，BOSS 图偏暖灰烬
    B.patterns.stone = ctx.createPattern(makeStoneTile(256, false), "repeat");
    B.patterns.stoneBoss = ctx.createPattern(makeStoneTile(256, true), "repeat");
    B.patterns.wall = {
      "#": ctx.createPattern(makeWallTile("#"), "repeat"),
      "B": ctx.createPattern(makeWallTile("B"), "repeat"),
      "I": ctx.createPattern(makeWallTile("I"), "repeat")
    };

    B.sprites.ao = makeSoftRectSprite(96, 22);
    B.sprites.wallShadow = makeWallShadowSprite();
    B.sprites.faceShade = makeFaceShadeSprite();
    B.sprites.topLight = makeTopLightSprite();
    B.sprites.fringe = [
      makeFringeSprite(96, 34, 0x1234ABCD),
      makeFringeSprite(96, 34, 0x77AA0011),
      makeFringeSprite(96, 34, 0x5E5E5E5E)
    ];
    B.sprites.dust = makeDustSprite();
    B.sprites.tankShadow = makeTankShadowSprite();
    B.sprites.blobs = {
      light: makeRadialSprite(128, [[0, "rgba(150, 138, 88, 0.22)"], [0.55, "rgba(150, 138, 88, 0.08)"], [1, "rgba(150, 138, 88, 0)"]]),
      dark: makeRadialSprite(128, [[0, "rgba(12, 24, 16, 0.30)"], [0.55, "rgba(12, 24, 16, 0.12)"], [1, "rgba(12, 24, 16, 0)"]]),
      mud: makeRadialSprite(128, [[0, "rgba(74, 58, 38, 0.28)"], [0.55, "rgba(74, 58, 38, 0.10)"], [1, "rgba(74, 58, 38, 0)"]]),
      ash: makeRadialSprite(128, [[0, "rgba(48, 46, 42, 0.24)"], [0.55, "rgba(48, 46, 42, 0.08)"], [1, "rgba(48, 46, 42, 0)"]] )
    };
    B.ready = true;
    return true;
  }

  // ---------------------------------------------------------------- 地形查询

  function solidAt(worldMap, column, row) {
    return Boolean(neighborKind(worldMap, column, row));
  }

  // 返回格子里的实心墙种类（"#"/"B"/"I"/"S"），空格/水/越界都返回 null
  function neighborKind(worldMap, column, row) {
    var cells = worldMap && worldMap.cells;
    var line = cells && cells[row];
    if (!line) { return null; }
    var kind = line[column];
    return kind && SOLID[kind] ? kind : null;
  }

  function getRoadPaths(worldMap) {
    var bossSpawn = worldMap.bossSpawn || { x: Config.worldWidth / 2, y: Config.worldHeight / 2 };
    var playerSpawn = worldMap.playerSpawn || { x: Config.worldWidth / 2, y: Config.worldHeight - 4 * TILE };
    var cacheKey = [
      worldMap.seed || 0,
      worldMap.baseSeed || 0,
      worldMap.generationAttempt || 0,
      worldMap.isBossMap ? 1 : 0,
      Math.round(bossSpawn.x), Math.round(bossSpawn.y),
      Math.round(playerSpawn.x), Math.round(playerSpawn.y)
    ].join(":");
    if (B.roadCache && B.roadCache.key === cacheKey) { return B.roadCache.paths; }
    var paths = [];
    var boss = bossSpawn;
    var player = playerSpawn;
    // 中央十字：补给主线
    paths.push({ x1: 0, y1: boss.y, x2: Config.worldWidth, y2: boss.y, width: 126, main: true });
    paths.push({ x1: boss.x, y1: 0, x2: boss.x, y2: Config.worldHeight, width: 146, main: true });
    // 玩家出生点到中央
    paths.push({ x1: player.x, y1: player.y, x2: boss.x, y2: boss.y, width: 104, main: false });
    // 每个敌军出生点到中央：这些走廊在地图生成时被保留，路上不会有墙
    (worldMap.enemySpawns || []).forEach(function (spawn) {
      paths.push({ x1: spawn.x, y1: spawn.y, x2: boss.x, y2: boss.y, width: 84, main: false });
    });
    B.roadCache = { key: cacheKey, paths: paths };
    return paths;
  }

  // ---------------------------------------------------------------- 地面

  function drawMacroPatches(ctx, left, top, right, bottom) {
    var cell = 330;
    for (var gy = Math.floor(top / cell) - 1; gy <= Math.ceil(bottom / cell); gy += 1) {
      for (var gx = Math.floor(left / cell) - 1; gx <= Math.ceil(right / cell); gx += 1) {
        var roll = hash(gx, gy, 13);
        var sprite = roll > 0.70 ? B.sprites.blobs.light :
          (roll > 0.44 ? B.sprites.blobs.dark :
            (roll > 0.20 ? B.sprites.blobs.mud : B.sprites.blobs.ash));
        if (!sprite) { continue; }
        var centerX = (gx + 0.5 + (hash(gx, gy, 7) - 0.5) * 0.72) * cell;
        var centerY = (gy + 0.5 + (hash(gx, gy, 8) - 0.5) * 0.72) * cell;
        var radius = cell * (0.30 + hash(gx, gy, 31) * 0.36);
        ctx.globalAlpha = 0.40 + hash(gx, gy, 37) * 0.34;
        ctx.drawImage(sprite, centerX - radius, centerY - radius, radius * 2, radius * 2);
      }
    }
    ctx.globalAlpha = 1;
  }

  function drawRoads(ctx, worldMap) {
    var paths = getRoadPaths(worldMap);
    var pattern = B.patterns.road;
    if (!pattern) { return; }
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // 路肩：比路面宽一圈的暗色，让土路和草地之间有过渡
    paths.forEach(function (path) {
      ctx.beginPath();
      ctx.moveTo(path.x1, path.y1);
      ctx.lineTo(path.x2, path.y2);
      ctx.strokeStyle = "rgba(34, 29, 20, 0.26)";
      ctx.lineWidth = path.width + 26;
      ctx.stroke();
    });
    // 路面
    paths.forEach(function (path) {
      ctx.beginPath();
      ctx.moveTo(path.x1, path.y1);
      ctx.lineTo(path.x2, path.y2);
      ctx.strokeStyle = pattern;
      ctx.lineWidth = path.width;
      ctx.stroke();
    });
    // 中间被压实的浅色带
    paths.forEach(function (path) {
      ctx.beginPath();
      ctx.moveTo(path.x1, path.y1);
      ctx.lineTo(path.x2, path.y2);
      ctx.strokeStyle = "rgba(142, 124, 88, 0.10)";
      ctx.lineWidth = path.width * 0.46;
      ctx.stroke();
    });
    // 车辙：两条平行暗线
    paths.forEach(function (path) {
      var dx = path.x2 - path.x1;
      var dy = path.y2 - path.y1;
      var length = Math.hypot(dx, dy) || 1;
      var nx = -dy / length;
      var ny = dx / length;
      var offset = path.width * 0.24;
      [-offset, offset].forEach(function (side) {
        ctx.beginPath();
        ctx.moveTo(path.x1 + nx * side, path.y1 + ny * side);
        ctx.lineTo(path.x2 + nx * side, path.y2 + ny * side);
        ctx.strokeStyle = "rgba(34, 29, 21, 0.22)";
        ctx.lineWidth = path.main ? 5 : 3.5;
        ctx.stroke();
      });
    });
    ctx.restore();
  }

  function drawCraters(ctx, bounds) {
    var cell = 340;
    for (var gy = Math.floor(bounds.top / cell); gy <= Math.ceil(bounds.bottom / cell); gy += 1) {
      for (var gx = Math.floor(bounds.left / cell); gx <= Math.ceil(bounds.right / cell); gx += 1) {
        if (hash(gx, gy, 91) > 0.36) { continue; }
        var centerX = (gx + 0.25 + hash(gx, gy, 92) * 0.5) * cell;
        var centerY = (gy + 0.25 + hash(gx, gy, 93) * 0.5) * cell;
        var radius = 14 + hash(gx, gy, 94) * 20;
        var squash = 0.62 + hash(gx, gy, 95) * 0.20;

        ctx.fillStyle = "rgba(18, 16, 12, 0.14)";
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * 1.45, radius * 1.45 * squash, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(24, 20, 15, 0.38)";
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius * squash, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(10, 9, 7, 0.38)";
        ctx.beginPath();
        ctx.ellipse(centerX + radius * 0.08, centerY + radius * squash * 0.14,
          radius * 0.62, radius * squash * 0.52, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(178, 164, 116, 0.20)";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius * squash, 0, Math.PI * 1.02, Math.PI * 1.94);
        ctx.stroke();

        for (var speck = 0; speck < 5; speck += 1) {
          var angle = hash(gx, gy, 100 + speck) * Math.PI * 2;
          var distance = radius * (1.05 + hash(gx, gy, 110 + speck) * 0.75);
          ctx.fillStyle = "rgba(48, 40, 27, 0.42)";
          ctx.fillRect(centerX + Math.cos(angle) * distance,
            centerY + Math.sin(angle) * distance * squash,
            1.5 + hash(gx, gy, 120 + speck) * 3.5,
            1 + hash(gx, gy, 130 + speck) * 2.5);
        }
      }
    }
  }

  function drawDebris(ctx, bounds) {
    var cell = 150;
    for (var gy = Math.floor(bounds.top / cell); gy <= Math.ceil(bounds.bottom / cell); gy += 1) {
      for (var gx = Math.floor(bounds.left / cell); gx <= Math.ceil(bounds.right / cell); gx += 1) {
        if (hash(gx, gy, 201) > 0.58) { continue; }
        var baseX = (gx + hash(gx, gy, 202)) * cell;
        var baseY = (gy + hash(gx, gy, 203)) * cell;
        var count = 1 + Math.floor(hash(gx, gy, 204) * 3);
        for (var index = 0; index < count; index += 1) {
          var x = baseX + (hash(gx, gy, 210 + index) - 0.5) * cell * 0.8;
          var y = baseY + (hash(gx, gy, 220 + index) - 0.5) * cell * 0.8;
          var kind = hash(gx, gy, 230 + index);
          if (kind < 0.42) {
            ctx.fillStyle = "rgba(34, 30, 22, 0.34)";
            ctx.beginPath();
            ctx.ellipse(x + 1, y + 1, 3.2, 1.8, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "rgba(132, 126, 102, 0.48)";
            ctx.beginPath();
            ctx.ellipse(x, y, 2.4, 1.4, 0, 0, Math.PI * 2);
            ctx.fill();
          } else if (kind < 0.72) {
            ctx.strokeStyle = "rgba(132, 112, 68, 0.42)";
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(x - 4, y + 2);
            ctx.lineTo(x + 4, y - 2);
            ctx.stroke();
          } else {
            ctx.fillStyle = "rgba(24, 24, 22, 0.44)";
            ctx.fillRect(x - 2, y - 1, 4, 2);
            ctx.fillStyle = "rgba(172, 156, 120, 0.24)";
            ctx.fillRect(x - 2, y - 1, 3, 1);
          }
        }
      }
    }
  }

  // 512 贴图接缝的视觉遮罩：柔和的枯草/泥土过渡带 + 草簇/碎石散点。
  // 噪声周期已经修正，这里再叠一层“过渡带”，让即使有残留色差也读成地形变化。
  function drawGrassTuft(ctx, x, y, scale, seed) {
    var count = 3 + Math.floor(hash(seed, 1, 601) * 3);
    ctx.save();
    ctx.translate(x, y);
    ctx.lineCap = "round";
    for (var index = 0; index < count; index += 1) {
      var lean = (hash(seed, index, 602) - 0.5) * 12 * scale;
      var height = (7 + hash(seed, index, 603) * 11) * scale;
      var toneRoll = hash(seed, index, 604);
      ctx.strokeStyle = toneRoll > 0.66 ? "rgba(138, 124, 76, 0.58)" :
        (toneRoll > 0.33 ? "rgba(88, 96, 54, 0.56)" : "rgba(54, 66, 40, 0.54)");
      ctx.lineWidth = 0.8 + hash(seed, index, 605) * 0.9;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(lean * 0.2, -height * 0.55, lean, -height);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(10, 16, 8, 0.20)";
    ctx.beginPath();
    ctx.ellipse(0, 1, 4.5 * scale, 1.5 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawPebbleCluster(ctx, x, y, scale, seed) {
    var count = 2 + Math.floor(hash(seed, 1, 611) * 3);
    for (var index = 0; index < count; index += 1) {
      var offsetX = (hash(seed, index, 612) - 0.5) * 12 * scale;
      var offsetY = (hash(seed, index, 613) - 0.5) * 7 * scale;
      var radius = (1.1 + hash(seed, index, 614) * 2.2) * scale;
      ctx.fillStyle = "rgba(20, 22, 16, 0.34)";
      ctx.beginPath();
      ctx.ellipse(x + offsetX + 0.8, y + offsetY + 0.9, radius, radius * 0.62, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(126, 120, 96, 0.52)";
      ctx.beginPath();
      ctx.ellipse(x + offsetX, y + offsetY, radius, radius * 0.58, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawSeamCover(ctx, left, top, right, bottom) {    var cell = 512;
    var gx;
    var gy;
    var index;
    var spanY = Math.max(1, bottom - top);
    var spanX = Math.max(1, right - left);

    for (gx = Math.floor(left / cell) - 1; gx <= Math.ceil(right / cell) + 1; gx += 1) {
      var lineX = gx * cell;
      for (index = 0; index < 4; index += 1) {
        var beltY = top + hash(gx, index, 621) * spanY;
        var beltX = lineX + (hash(gx, index, 622) - 0.5) * 90;
        var beltRadius = 45 + hash(gx, index, 623) * 70;
        ctx.globalAlpha = 0.10 + hash(gx, index, 624) * 0.10;
        ctx.drawImage(index % 2 ? B.sprites.blobs.light : B.sprites.blobs.mud,
          beltX - beltRadius, beltY - beltRadius, beltRadius * 2, beltRadius * 2);
      }
      ctx.globalAlpha = 1;
      for (index = 0; index < 10; index += 1) {
        var tuftY = top + hash(gx, index, 631) * spanY;
        var tuftX = lineX + (hash(gx, index, 632) - 0.5) * 80;
        drawGrassTuft(ctx, tuftX, tuftY, 0.8 + hash(gx, index, 633) * 0.8, gx * 97 + index);
      }
      for (index = 0; index < 4; index += 1) {
        var pebbleY = top + hash(gx, index, 641) * spanY;
        var pebbleX = lineX + (hash(gx, index, 642) - 0.5) * 70;
        drawPebbleCluster(ctx, pebbleX, pebbleY, 0.8 + hash(gx, index, 643) * 0.6, gx * 53 + index);
      }
    }

    for (gy = Math.floor(top / cell) - 1; gy <= Math.ceil(bottom / cell) + 1; gy += 1) {
      var lineY = gy * cell;
      for (index = 0; index < 4; index += 1) {
        var beltX2 = left + hash(gy, index, 651) * spanX;
        var beltY2 = lineY + (hash(gy, index, 652) - 0.5) * 90;
        var beltRadius2 = 45 + hash(gy, index, 653) * 70;
        ctx.globalAlpha = 0.10 + hash(gy, index, 654) * 0.10;
        ctx.drawImage(index % 2 ? B.sprites.blobs.light : B.sprites.blobs.mud,
          beltX2 - beltRadius2, beltY2 - beltRadius2, beltRadius2 * 2, beltRadius2 * 2);
      }
      ctx.globalAlpha = 1;
      for (index = 0; index < 10; index += 1) {
        var tuftX2 = left + hash(gy, index, 661) * spanX;
        var tuftY2 = lineY + (hash(gy, index, 662) - 0.5) * 80;
        drawGrassTuft(ctx, tuftX2, tuftY2, 0.8 + hash(gy, index, 663) * 0.8, gy * 89 + index);
      }
      for (index = 0; index < 4; index += 1) {
        var pebbleX2 = left + hash(gy, index, 671) * spanX;
        var pebbleY2 = lineY + (hash(gy, index, 672) - 0.5) * 70;
        drawPebbleCluster(ctx, pebbleX2, pebbleY2, 0.8 + hash(gy, index, 673) * 0.6, gy * 47 + index);
      }
    }
    ctx.globalAlpha = 1;
  }

  // 静态地面缓存：草地/道路/弹坑/碎石/遮缝只生成一次，之后每帧只 blit 可见块。
  // 512 世界像素一块，和地面贴图同尺寸，方便对齐。
  var GROUND_CHUNK = 512;
  var GROUND_CHUNK_LIMIT = 32;
  var GROUND_CACHE_ENABLED = true;
  try {
    GROUND_CACHE_ENABLED = !/[?&]bfcache=0/.test(window.location.search);
  } catch (error) {
    GROUND_CACHE_ENABLED = true;
  }

  function groundChunkKey(worldMap, cx, cy) {
    return [
      worldMap && worldMap.seed || 0,
      worldMap && worldMap.baseSeed || 0,
      worldMap && worldMap.generationAttempt || 0,
      worldMap && worldMap.isBossMap ? 1 : 0,
      cx,
      cy
    ].join(":");
  }

  function buildGroundChunk(worldMap, cx, cy) {
    var canvas = makeCanvas(GROUND_CHUNK, GROUND_CHUNK);
    var g = canvas.getContext("2d");
    if (!g) { return canvas; }
    var margin = 90;
    var left = cx * GROUND_CHUNK;
    var top = cy * GROUND_CHUNK;
    var wide = GROUND_CHUNK + margin * 2;
    var tall = GROUND_CHUNK + margin * 2;
    var expanded = {
      left: left - margin,
      top: top - margin,
      right: left + GROUND_CHUNK + margin,
      bottom: top + GROUND_CHUNK + margin
    };

    g.save();
    g.translate(-left, -top);
    g.fillStyle = "#2b2f20";
    g.fillRect(expanded.left, expanded.top, wide, tall);
    if (B.patterns.ground) {
      g.fillStyle = B.patterns.ground;
      g.fillRect(expanded.left, expanded.top, wide, tall);
    }
    if (worldMap && worldMap.isBossMap) {
      g.fillStyle = "rgba(36, 28, 22, 0.52)";
      g.fillRect(expanded.left, expanded.top, wide, tall);
      g.fillStyle = "rgba(88, 66, 44, 0.10)";
      g.fillRect(expanded.left, expanded.top, wide, tall);
    }
    drawMacroPatches(g, expanded.left, expanded.top, expanded.right, expanded.bottom);
    drawRoads(g, worldMap);
    drawCraters(g, expanded);
    drawDebris(g, expanded);
    drawSeamCover(g, expanded.left, expanded.top, expanded.right, expanded.bottom);
    g.restore();
    return canvas;
  }

  function getGroundChunk(worldMap, cx, cy) {
    var key = groundChunkKey(worldMap, cx, cy);
    var cache = B.groundChunks || (B.groundChunks = Object.create(null));
    var entry = cache[key];
    if (entry) {
      entry.used = ++B.groundChunkClock;
      return entry.canvas;
    }
    var canvas = buildGroundChunk(worldMap, cx, cy);
    cache[key] = { canvas: canvas, used: ++B.groundChunkClock };
    var keys = Object.keys(cache);
    if (keys.length > GROUND_CHUNK_LIMIT) {
      keys.sort(function (a, b) { return cache[a].used - cache[b].used; });
      for (var index = 0; index < keys.length - GROUND_CHUNK_LIMIT; index += 1) {
        delete cache[keys[index]];
      }
    }
    return canvas;
  }

  B.reset = function () {
    B.tracks = [];
    B.roadCache = null;
    B.groundChunks = Object.create(null);
    B.groundChunkClock = 0;
  };

  B.drawGroundDirect = function (ctx, worldMap, bounds) {
    var left = bounds ? bounds.left : 0;
    var top = bounds ? bounds.top : 0;
    var right = bounds ? bounds.right : Config.worldWidth;
    var bottom = bounds ? bounds.bottom : Config.worldHeight;
    var width = Math.max(1, right - left);
    var height = Math.max(1, bottom - top);
    ctx.save();
    ctx.fillStyle = "#2b2f20";
    ctx.fillRect(left, top, width, height);
    if (B.patterns.ground) {
      ctx.fillStyle = B.patterns.ground;
      ctx.fillRect(left, top, width, height);
    }
    if (worldMap && worldMap.isBossMap) {
      ctx.fillStyle = "rgba(36, 28, 22, 0.52)";
      ctx.fillRect(left, top, width, height);
      ctx.fillStyle = "rgba(88, 66, 44, 0.10)";
      ctx.fillRect(left, top, width, height);
    }
    drawMacroPatches(ctx, left, top, right, bottom);
    drawRoads(ctx, worldMap);
    drawCraters(ctx, bounds);
    drawDebris(ctx, bounds);
    drawSeamCover(ctx, left, top, right, bottom);
    B.drawTracks(ctx);
    ctx.restore();
  };

  B.drawGround = function (ctx, worldMap, bounds) {
    if (!ensure(ctx)) { return; }
    B.now = nowSeconds();
    if (!GROUND_CACHE_ENABLED) {
      B.drawGroundDirect(ctx, worldMap, bounds);
      return;
    }
    var left = bounds ? bounds.left : 0;
    var top = bounds ? bounds.top : 0;
    var right = bounds ? bounds.right : Config.worldWidth;
    var bottom = bounds ? bounds.bottom : Config.worldHeight;

    ctx.save();
    var startX = Math.max(0, Math.floor(left / GROUND_CHUNK));
    var endX = Math.min(Math.ceil(Config.worldWidth / GROUND_CHUNK) - 1, Math.floor((right - 1) / GROUND_CHUNK));
    var startY = Math.max(0, Math.floor(top / GROUND_CHUNK));
    var endY = Math.min(Math.ceil(Config.worldHeight / GROUND_CHUNK) - 1, Math.floor((bottom - 1) / GROUND_CHUNK));
    for (var cy = startY; cy <= endY; cy += 1) {
      for (var cx = startX; cx <= endX; cx += 1) {
        ctx.drawImage(getGroundChunk(worldMap, cx, cy), cx * GROUND_CHUNK, cy * GROUND_CHUNK);
      }
    }
    B.drawTracks(ctx);
    ctx.restore();
  };

  // 墙根遮蔽 + 朝南投影：画在地面层，墙和坦克之后覆盖上去，遮挡关系自然正确
  B.drawGroundShadows = function (ctx, worldMap, obstacles) {
    if (!B.ready || !obstacles) { return; }
    var k = TankGame.View && TankGame.View.isPitched() ? TankGame.View.k : 1;
    ctx.save();
    obstacles.forEach(function (obstacle) {
      if (obstacle.kind === "W") { return; }
      var screenHeight = WALL_HEIGHT[obstacle.kind] || 0;
      if (screenHeight <= 0) { return; }
      var height = screenHeight / Math.max(0.25, k);
      var x = obstacle.x;
      var y = obstacle.y;
      if (!solidAt(worldMap, obstacle.column, obstacle.row + 1) ||
          !solidAt(worldMap, obstacle.column + 1, obstacle.row)) {
        ctx.globalAlpha = 0.26;
        ctx.drawImage(B.sprites.ao, x - 13, y - 13, TILE + 26, TILE + 26);
      }
      if (!solidAt(worldMap, obstacle.column, obstacle.row + 1)) {
        var shadowLength = Math.max(20, height * 0.62);
        ctx.globalAlpha = 0.52;
        ctx.drawImage(B.sprites.wallShadow,
          x - 10 + height * 0.22, y + TILE - 14,
          TILE + 20, shadowLength + 26);
      }
    });
    ctx.globalAlpha = 1;
    ctx.restore();
  };

  // ---------------------------------------------------------------- 墙

  B.getWallHeight = function (kind) {
    return WALL_HEIGHT[kind] || 0;
  };

  B.drawObstacle = function (ctx, obstacle, worldMap, noCache, patternOverride) {
    if (!ensure(ctx)) {
      if (TankGame.Map && TankGame.Map.drawObstacle) { TankGame.Map.drawObstacle(ctx, obstacle, worldMap); }
      return;
    }
    if (!obstacle || obstacle.kind === "W") { return; }
    var k = TankGame.View && TankGame.View.isPitched() ? TankGame.View.k : 1;
    var screenHeight = WALL_HEIGHT[obstacle.kind] || 0;
    if (screenHeight <= 0) {
      if (TankGame.Map && TankGame.Map.drawObstacle) { TankGame.Map.drawObstacle(ctx, obstacle, worldMap); }
      return;
    }
    var facade = Math.round(screenHeight / Math.max(0.25, k));
    var x = obstacle.x;
    var y = obstacle.y;
    var size = TILE;
    var pattern = patternOverride || B.patterns.wall[obstacle.kind] || B.patterns.wall["#"];

    if (worldMap && worldMap.isBossMap) {
      // BOSS 场地的栅栏/砖堆沿用原画，只补一层厚度
      ctx.save();
      ctx.fillStyle = obstacle.kind === "B" ? "#2a1a14" : "#1b211e";
      ctx.fillRect(x + 2, y + size - facade, size - 4, facade);
      ctx.fillStyle = "rgba(150, 120, 84, 0.16)";
      ctx.fillRect(x + 2, y + size - facade, size - 4, 2);
      ctx.translate(0, -facade);
      if (TankGame.Map && TankGame.Map.drawObstacle) { TankGame.Map.drawObstacle(ctx, obstacle, worldMap); }
      ctx.restore();
      return;
    }

    // 相邻格子的「种类」比「是否实心」有用：墙高不一样时，矮墙挡不住高墙的下半截立面，
    // 只按布尔值判断就会出现「砖墙贴着钢墙 → 钢墙的正面整块消失、顶面像是错位压过来」。
    var southKind = neighborKind(worldMap, obstacle.column, obstacle.row + 1);
    var westKind = neighborKind(worldMap, obstacle.column - 1, obstacle.row);
    var eastKind = neighborKind(worldMap, obstacle.column + 1, obstacle.row);
    var southOpen = !southKind;
    var westOpen = !westKind;
    var eastOpen = !eastKind;
    var southHeight = southKind ? (WALL_HEIGHT[southKind] || 0) : 0;
    var westHeight = westKind ? (WALL_HEIGHT[westKind] || 0) : 0;
    var eastHeight = eastKind ? (WALL_HEIGHT[eastKind] || 0) : 0;
    // 南侧矮墙能盖住的立面高度；露出来的那一段才是本块真正要画的
    var southCover = southHeight > 0 ? Math.round(southHeight / Math.max(0.25, k)) : 0;
    var facadeVisible = facade - southCover;
    // 侧面棱线：邻居比本块矮（或干脆没有邻居）时，那道棱是看得见的
    var southEdge = southOpen || southHeight < screenHeight;
    var westEdge = westOpen || westHeight < screenHeight;
    var eastEdge = eastOpen || eastHeight < screenHeight;
    var fringeIndex = (obstacle.column * 7 + obstacle.row * 13) % B.sprites.fringe.length;

    if (!noCache) {
      var cacheKey = obstacle.kind + "|" + southHeight + "," + westHeight + "," + eastHeight +
        "|" + fringeIndex + "|" + facade.toFixed(2) +
        "|" + (((obstacle.x % 128) + 128) % 128) + "," + (((obstacle.y % 128) + 128) % 128);
      var cached = B.wallSpriteCache[cacheKey];
      if (cached) {
        ctx.drawImage(cached.canvas, x + cached.offsetX, y + cached.offsetY);
        return;
      }
      var built = B.buildWallSprite(obstacle, facade, southKind, westKind, eastKind, cacheKey);
      if (built) {
        ctx.drawImage(built.canvas, x + built.offsetX, y + built.offsetY);
        return;
      }
    }

    // 顶面
    ctx.save();
    ctx.translate(0, -facade);
    ctx.beginPath();
    ctx.rect(x, y, size + 0.6, size + 0.6);
    ctx.clip();
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fillRect(x, y, size + 0.6, size + 0.6);
    } else {
      ctx.fillStyle = obstacle.kind === "B" ? "#7a4436" : "#777c74";
      ctx.fillRect(x, y, size + 0.6, size + 0.6);
    }
    ctx.drawImage(B.sprites.topLight, x, y, size + 0.6, size + 0.6);
    // 顶面边缘：只画暴露的边，墙连成片时不会出现网格线
    ctx.strokeStyle = "rgba(226, 224, 196, 0.20)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    if (southEdge) {
      ctx.moveTo(x, y + size);
      ctx.lineTo(x + size, y + size);
    }
    if (westEdge) {
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + size);
    }
    if (eastEdge) {
      ctx.moveTo(x + size, y);
      ctx.lineTo(x + size, y + size);
    }
    ctx.stroke();
    ctx.restore();

    // 朝南立面：按完整高度画，但只露出没被南侧矮墙挡住的那一段（clip 而不是缩短，
    // 砖缝相位才不会跟着变，和相邻墙才对得上）
    if (facadeVisible > 0.5) {
      var faceY = y + size - facade;
      ctx.save();
      ctx.beginPath();
      ctx.rect(x, faceY, size + 0.6, facadeVisible);
      ctx.clip();
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(x, faceY, size + 0.6, facade);
      } else {
        ctx.fillStyle = obstacle.kind === "B" ? "#5d3228" : "#4c524d";
        ctx.fillRect(x, faceY, size + 0.6, facade);
      }
      ctx.drawImage(B.sprites.faceShade, x, faceY, size + 0.6, facade);
      // 顶部压顶石/砖檐
      ctx.fillStyle = obstacle.kind === "B" ? "rgba(202, 148, 104, 0.34)" : "rgba(220, 216, 190, 0.26)";
      ctx.fillRect(x, faceY, size, 2);
      ctx.fillStyle = "rgba(16, 18, 15, 0.34)";
      ctx.fillRect(x, faceY + 2, size, 1);
      // 底部积土/烟熏
      ctx.fillStyle = "rgba(18, 20, 16, 0.30)";
      ctx.fillRect(x, y + size - 4, size, 4);
      // 暴露的左右边缘压暗：邻居比本块矮时，那半截立面也是露出来的
      ctx.fillStyle = "rgba(12, 14, 12, 0.26)";
      if (westEdge) { ctx.fillRect(x, faceY, 2, facade); }
      if (eastEdge) { ctx.fillRect(x + size - 2, faceY, 2, facade); }
      ctx.restore();

      // 墙脚草：压在墙面上，墙就不会像一块浮在草地上的贴纸。
      // 南侧有墙时墙脚被挡住了，再画就会糊到别人顶面上。
      var fringe = southOpen ? B.sprites.fringe[fringeIndex] : null;
      if (fringe) {
        ctx.globalAlpha = 0.78;
        ctx.drawImage(fringe, x - 10, y + size - 16, size + 20, 30);
        ctx.globalAlpha = 1;
      }
    }
  };

  // 把一块墙的顶面/朝南立面/墙脚草预渲染成小图；相邻墙是否实心决定暴露边，
  // 把一块墙的顶面/朝南立面/墙脚草预渲染成小图；相邻墙的**种类**（决定高矮）决定哪段立面/棱线露出来，
  // 所以缓存键里要带 south/west/east 三个邻居的高度和当前俯仰下的立面高度。
  B.buildWallSprite = function (obstacle, facade, southKind, westKind, eastKind, cacheKey) {
    if (typeof document === "undefined" || !document.createElement) { return null; }
    if (B.wallSpriteCacheCount > 192) {
      B.wallSpriteCache = Object.create(null);
      B.wallSpriteCacheCount = 0;
      B.wallPhaseTiles = Object.create(null);
    }
    var size = TILE;
    var canvas = document.createElement("canvas");
    canvas.width = size + 20;
    canvas.height = Math.ceil(facade + size + 14);
    var spriteContext = canvas.getContext("2d");
    if (!spriteContext) { return null; }

    // 用真实邻居种类重放一遍：drawObstacle 内部靠 WALL_HEIGHT 判断遮挡关系，
    // 这里塞 "#" 会让「砖墙 + 钢墙」的缓存图和直接绘制不一致。
    var cells = [];
    cells[obstacle.row] = [];
    cells[obstacle.row][obstacle.column] = obstacle.kind;
    cells[obstacle.row + 1] = [];
    cells[obstacle.row + 1][obstacle.column] = southKind || " ";
    if (obstacle.column > 0) {
      cells[obstacle.row][obstacle.column - 1] = westKind || " ";
    }
    cells[obstacle.row][obstacle.column + 1] = eastKind || " ";

    var fakeMap = { cells: cells, isBossMap: false };
    var fakeObstacle = {
      x: 0, y: 0, kind: obstacle.kind,
      column: obstacle.column, row: obstacle.row
    };
    var tileKind = obstacle.kind === "B" || obstacle.kind === "I" ? obstacle.kind : "#";
    if (!B.wallTiles[tileKind]) { B.wallTiles[tileKind] = makeWallTile(tileKind); }
    var localPattern = null;
    if (B.wallTiles[tileKind]) {
      // 把墙砖纹理按世界坐标相位平移，保证缓存墙和直接绘制时砖缝完全对齐。
      var phaseX = ((obstacle.x % 128) + 128) % 128;
      var phaseY = ((obstacle.y % 128) + 128) % 128;
      var phaseKey = tileKind + "|" + phaseX + "," + phaseY;
      var shiftedTile = B.wallPhaseTiles[phaseKey];
      if (!shiftedTile) {
        shiftedTile = document.createElement("canvas");
        shiftedTile.width = 128;
        shiftedTile.height = 128;
        var shiftedContext = shiftedTile.getContext("2d");
        shiftedContext.drawImage(B.wallTiles[tileKind], -phaseX, -phaseY);
        shiftedContext.drawImage(B.wallTiles[tileKind], 128 - phaseX, -phaseY);
        shiftedContext.drawImage(B.wallTiles[tileKind], -phaseX, 128 - phaseY);
        shiftedContext.drawImage(B.wallTiles[tileKind], 128 - phaseX, 128 - phaseY);
        B.wallPhaseTiles[phaseKey] = shiftedTile;
      }
      localPattern = spriteContext.createPattern(shiftedTile, "repeat");
    }
    spriteContext.translate(10, facade);
    B.drawObstacle(spriteContext, fakeObstacle, fakeMap, true, localPattern);

    var sprite = { canvas: canvas, offsetX: -10, offsetY: -facade };
    B.wallSpriteCache[cacheKey] = sprite;
    B.wallSpriteCacheCount += 1;
    return sprite;
  };

  // ---------------------------------------------------------------- 坦克特效

  function noteTankTrack(tank) {
    if (!tank || tank.wreck || tank.isTurret || tank.ghost) { return; }
    var lastX = tank._bfTrackX;
    var lastY = tank._bfTrackY;
    if (typeof lastX !== "number" || typeof lastY !== "number") {
      tank._bfTrackX = tank.x;
      tank._bfTrackY = tank.y;
      return;
    }
    var dx = tank.x - lastX;
    var dy = tank.y - lastY;
    if (dx * dx + dy * dy < 196) { return; }
    tank._bfTrackX = tank.x;
    tank._bfTrackY = tank.y;
    B.tracks.push({ x: tank.x, y: tank.y, angle: tank.bodyAngle, created: B.now || nowSeconds() });
    if (B.tracks.length > 260) { B.tracks.splice(0, B.tracks.length - 260); }
  }

  B.drawTracks = function (ctx) {
    if (!B.tracks.length) { return; }
    var now = B.now || nowSeconds();
    var alive = [];
    ctx.save();
    for (var index = 0; index < B.tracks.length; index += 1) {
      var track = B.tracks[index];
      var age = now - track.created;
      if (age > 6.5) { continue; }
      alive.push(track);
      var alpha = (1 - age / 6.5) * 0.24;
      if (alpha <= 0.01) { continue; }
      ctx.save();
      ctx.translate(track.x, track.y);
      ctx.rotate(track.angle);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#241f17";
      ctx.fillRect(-8, -23, 16, 7);
      ctx.fillRect(-8, 16, 16, 7);
      ctx.globalAlpha = alpha * 0.55;
      ctx.fillStyle = "#8a7b5e";
      ctx.fillRect(-7, -22, 14, 1.5);
      ctx.fillRect(-7, 17, 14, 1.5);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
    ctx.restore();
    B.tracks = alive;
  };

  B.drawTankEffects = function (ctx, tank) {
    if (!ensure(ctx) || !tank || tank.wreck) { return; }
    var scale = tank.visualScale || 1;
    var leap = tank.leapHeight || 0;
    var shadowAlpha = 0.46 * Math.max(0.18, 1 - leap / 180);
    ctx.save();
    ctx.globalAlpha = shadowAlpha;
    ctx.drawImage(B.sprites.tankShadow,
      tank.x - 41 * scale, tank.y - 17 * scale,
      82 * scale, 36 * scale);
    ctx.globalAlpha = 1;
    ctx.restore();

    noteTankTrack(tank);

    // 扬尘：按位移触发，不依赖游戏逻辑里的速度字段
    var now = B.now || nowSeconds();
    var lastX = tank._bfDustX;
    var lastY = tank._bfDustY;
    var lastAt = tank._bfDustAt || now;
    var dt = Math.max(0.001, Math.min(0.08, now - lastAt));
    tank._bfDustAt = now;
    if (typeof lastX !== "number" || typeof lastY !== "number") {
      tank._bfDustX = tank.x;
      tank._bfDustY = tank.y;
      lastX = tank.x;
      lastY = tank.y;
    }
    var moved = Math.hypot(tank.x - lastX, tank.y - lastY);
    var puffs = tank._bfDust || (tank._bfDust = []);
    var puffAt = tank._bfLastPuff || 0;
    if (moved > 0.9 && leap < 2 && puffs.length < 10 && now - puffAt > 0.075) {
      tank._bfLastPuff = now;
      var side = (Math.random() - 0.5) * 26 * scale;
      var backX = tank.x - Math.cos(tank.bodyAngle) * 24 * scale + Math.cos(tank.bodyAngle + Math.PI / 2) * side;
      var backY = tank.y - Math.sin(tank.bodyAngle) * 24 * scale + Math.sin(tank.bodyAngle + Math.PI / 2) * side;
      puffs.push({ x: backX, y: backY, vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 8, size: 8 + Math.random() * 8, life: 0.8 + Math.random() * 0.5, maxLife: 1.3 });
    }
    tank._bfDustX = tank.x;
    tank._bfDustY = tank.y;

    for (var index = puffs.length - 1; index >= 0; index -= 1) {
      var puff = puffs[index];
      puff.life -= dt;
      if (puff.life <= 0) { puffs.splice(index, 1); continue; }
      puff.x += puff.vx * dt;
      puff.y += puff.vy * dt;
      puff.size += 14 * dt;
      var fade = Math.min(1, puff.life / puff.maxLife);
      ctx.save();
      ctx.globalAlpha = fade * 0.24;
      ctx.drawImage(B.sprites.dust, puff.x - puff.size, puff.y - puff.size * 0.55, puff.size * 2, puff.size * 1.1);
      ctx.restore();
    }
  };

  // ---------------------------------------------------------------- 屏幕空间气氛

  B.drawAtmosphere = function (ctx, width, height, renderScale) {
    if (!ensure(ctx)) { return; }
    var now = B.now || nowSeconds();
    var scale = renderScale || 1;
    ctx.save();
    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    // 静态的雾/夕照/暗角由 CSS 合成层负责；这里只画会动的尘埃。
    for (var index = 0; index < 26; index += 1) {
      var speed = 6 + hash(index, 1, 301) * 16;
      var x = (hash(index, 2, 302) * width + now * speed) % (width + 80) - 40;
      var y = hash(index, 3, 303) * height + Math.sin(now * 0.35 + index) * 22;
      var alpha = 0.035 + hash(index, 4, 304) * 0.08;
      ctx.fillStyle = "rgba(226, 212, 176, " + alpha.toFixed(3) + ")";
      ctx.fillRect(x, y, 1 + (index % 2), 1 + (index % 2));
    }

    ctx.restore();
  };

  // ---------------------------------------------------------------- 装饰物立牌（2.5D）
  //
  // 2D 平铺仍走 js/map.js 的旧矢量装饰（一行不改）。2.5D 换这套「有体积、有材质」的立牌：
  //   · 打光方向和地面/墙体一致：西北受光，南侧与东南落暗；
  //   · 调色板取自地面/墙体（橄榄、枯黄、土褐、灰石），不用高饱和绿；
  //   · 脚底锚在同一个地面点，纵向 1/k 反拉伸，不会被相机俯仰压扁；
  //   · 每类 2–3 个变体，按坐标哈希选，地图上不会一眼看到同一个贴图。
  // 所有贴图首次使用时生成一次（2× 超采样后缩小），之后每帧只有一次 drawImage。

  var DECOR_SS = 2;
  var DECOR_PAD = 7;
  var DECOR_CACHE_LIMIT = 64;
  var DECOR_ART = {
    rock: { width: 46, height: 32, variants: 3, paint: paintRock, foot: 0 },
    bush: { width: 52, height: 32, variants: 3, paint: paintBush, foot: 0 },
    deadGrass: { width: 36, height: 30, variants: 3, paint: paintDeadGrass, foot: 0 },
    scorchedRoot: { width: 40, height: 30, variants: 2, paint: paintScorchedRoot, foot: 0 },
    crate: { width: 40, height: 34, variants: 2, paint: paintCrate, foot: 0 },
    sandbag: { width: 50, height: 24, variants: 2, paint: paintSandbag, foot: 0 },
    ammoBox: { width: 38, height: 26, variants: 2, paint: paintAmmoBox, foot: 0 },
    drum: { width: 32, height: 40, variants: 2, paint: paintDrum, foot: 0 },
    barrel: { width: 32, height: 40, variants: 2, paint: paintDrum, foot: 0 },
    tire: { width: 40, height: 20, variants: 2, paint: paintTire, foot: 0 },
    barbedWire: { width: 54, height: 20, variants: 2, paint: paintBarbedWire, foot: 0 },
    rubble: { width: 46, height: 18, variants: 2, paint: paintRubble, foot: 0 }
  };

  function decorVShade(g, top, bottom, from, to) {
    var gradient = g.createLinearGradient(0, top, 0, bottom);
    gradient.addColorStop(0, from);
    gradient.addColorStop(1, to);
    return gradient;
  }

  function decorPath(g, points) {
    g.beginPath();
    g.moveTo(points[0][0], points[0][1]);
    for (var index = 1; index < points.length; index += 1) {
      g.lineTo(points[index][0], points[index][1]);
    }
    g.closePath();
  }

  function decorStipple(g, random, count, spreadX, spreadY, centerY, colors) {
    for (var index = 0; index < count; index += 1) {
      var x = (random() - 0.5) * spreadX;
      var y = centerY + (random() - 0.5) * spreadY;
      g.fillStyle = colors[Math.floor(random() * colors.length) % colors.length];
      var size = 0.7 + random() * 1.4;
      g.fillRect(x, y, size, size);
    }
  }

  function paintRock(g, random, w, h) {
    var half = w / 2;
    var shoulder = h * (0.44 + random() * 0.14);
    var points = [
      [-half * 0.94, 0],
      [-half * 0.99, -shoulder * 0.52],
      [-half * 0.66, -shoulder],
      [-half * 0.2, -h * (0.88 + random() * 0.1)],
      [half * 0.32, -h * (0.84 + random() * 0.12)],
      [half * 0.78, -shoulder * 0.94],
      [half * 0.97, -shoulder * 0.38],
      [half * 0.86, 0]
    ];
    decorPath(g, points);
    g.fillStyle = decorVShade(g, -h, 0, "#7f7d6a", "#3d4036");
    g.fill();

    g.save();
    decorPath(g, points);
    g.clip();
    // 面向镜头的受光面（西北）
    g.fillStyle = "rgba(224, 220, 192, 0.11)";
    decorPath(g, [
      [-half * 0.7, -shoulder * 0.94],
      [-half * 0.08, -h * 0.92],
      [-half * 0.18, -h * 0.34],
      [-half * 0.76, -shoulder * 0.3]
    ]);
    g.fill();
    // 右下暗面
    g.fillStyle = "rgba(16, 20, 16, 0.26)";
    decorPath(g, [
      [half * 0.04, -h * 0.88],
      [half * 0.92, -shoulder * 0.5],
      [half * 0.86, 0],
      [half * 0.08, 0]
    ]);
    g.fill();
    // 裂缝
    var crackX = (random() - 0.5) * w * 0.4;
    g.strokeStyle = "rgba(22, 25, 21, 0.52)";
    g.lineWidth = 1.1;
    g.beginPath();
    g.moveTo(crackX, -h * 0.74);
    g.lineTo(crackX + (random() - 0.5) * 9, -h * 0.46);
    g.lineTo(crackX + (random() - 0.5) * 13, -h * 0.14);
    g.stroke();
    // 顶部苔藓
    g.fillStyle = "rgba(74, 88, 48, 0.4)";
    for (var moss = 0; moss < 3; moss += 1) {
      g.beginPath();
      g.ellipse(-half * 0.52 + random() * w * 0.62, -h * (0.7 + random() * 0.2),
        3.5 + random() * 6, 1.6 + random() * 3, 0, 0, Math.PI * 2);
      g.fill();
    }
    decorStipple(g, random, 64, w, h * 0.78, -h * 0.44,
      ["rgba(220, 218, 196, 0.12)", "rgba(18, 22, 18, 0.18)", "rgba(120, 124, 104, 0.14)"]);
    g.fillStyle = decorVShade(g, -h * 0.24, 0, "rgba(10, 12, 10, 0)", "rgba(10, 12, 10, 0.46)");
    g.fillRect(-w, -h * 0.24, w * 2, h * 0.26);
    g.restore();

    // 左上边缘受光
    g.save();
    decorPath(g, points);
    g.clip();
    g.strokeStyle = "rgba(226, 222, 194, 0.32)";
    g.lineWidth = 1.3;
    g.beginPath();
    g.moveTo(-half * 0.95, -shoulder * 0.48);
    g.lineTo(-half * 0.64, -shoulder * 0.95);
    g.lineTo(-half * 0.18, -h * 0.85);
    g.stroke();
    g.restore();
  }

  function paintBush(g, random, w, h) {
    var half = w / 2;
    var clusters = [];
    var count = 7;
    for (var index = 0; index < count; index += 1) {
      var angle = Math.PI + (index / Math.max(1, count - 1)) * Math.PI;
      var radius = h * (0.18 + random() * 0.10);
      // 簇心/半径都压在画布内（含 DECOR_PAD 的余量），否则边缘会被裁成一条直线
      var y = -h * (0.26 + Math.sin(angle) * 0.26 + random() * 0.16);
      if (y > -(radius + 1.5)) { y = -(radius + 1.5); }
      clusters.push({
        x: Math.cos(angle) * half * (0.24 + random() * 0.22),
        y: y,
        r: radius
      });
    }
    clusters.forEach(function (cluster) {
      var gradient = g.createRadialGradient(
        cluster.x - cluster.r * 0.34, cluster.y - cluster.r * 0.42, cluster.r * 0.1,
        cluster.x, cluster.y, cluster.r);
      gradient.addColorStop(0, "#4f5c39");
      gradient.addColorStop(0.6, "#38422a");
      gradient.addColorStop(1, "rgba(18, 26, 13, 0)");
      g.fillStyle = gradient;
      g.beginPath();
      g.arc(cluster.x, cluster.y, cluster.r, 0, Math.PI * 2);
      g.fill();
    });

    g.lineCap = "round";
    for (var leaf = 0; leaf < 54; leaf += 1) {
      var cluster = clusters[Math.floor(random() * clusters.length) % clusters.length];
      var angle = random() * Math.PI * 2;
      var distance = random() * cluster.r * 0.92;
      var x = cluster.x + Math.cos(angle) * distance;
      var y = cluster.y + Math.sin(angle) * distance;
      var length = 3 + random() * 4.6;
      var direction = -Math.PI / 2 + (random() - 0.5) * 2.1;
      var tone = random();
      g.strokeStyle = tone > 0.74 ? "rgba(140, 146, 96, 0.5)" :
        (tone > 0.42 ? "rgba(96, 106, 60, 0.52)" : "rgba(48, 58, 32, 0.56)");
      g.lineWidth = 0.9 + random() * 0.9;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(
        x + Math.cos(direction) * length * 0.42, y + Math.sin(direction) * length * 0.68,
        x + Math.cos(direction) * length, y + Math.sin(direction) * length);
      g.stroke();
    }

    // 几根枯枝：别让灌木看起来像一团绿棉花
    g.strokeStyle = "rgba(62, 50, 34, 0.72)";
    g.lineWidth = 1.2;
    for (var twig = 0; twig < 3; twig += 1) {
      var twigX = (random() - 0.5) * w * 0.5;
      g.beginPath();
      g.moveTo(twigX, -h * 0.1);
      g.lineTo(twigX + (random() - 0.5) * 8, -h * (0.72 + random() * 0.22));
      g.stroke();
    }

    // 根部压暗（横向也要收在贴图内，否则会被画布边缘裁成一条直线）
    var rootShade = g.createRadialGradient(0, -h * 0.02, w * 0.05, 0, -h * 0.02, w * 0.48);
    rootShade.addColorStop(0, "rgba(9, 14, 8, 0.5)");
    rootShade.addColorStop(1, "rgba(9, 14, 8, 0)");
    g.fillStyle = rootShade;
    g.beginPath();
    g.ellipse(0, -h * 0.02, w * 0.46, h * 0.12, 0, 0, Math.PI * 2);
    g.fill();
  }

  function paintDeadGrass(g, random, w, h) {
    g.lineCap = "round";
    for (var index = 0; index < 13; index += 1) {
      var baseX = (random() - 0.5) * w * 0.72;
      var length = h * (0.52 + random() * 0.44);
      var lean = (random() - 0.5) * w * 0.72;
      g.strokeStyle = "rgba(56, 52, 37, 0.82)";
      g.lineWidth = 1.4 + random() * 1.1;
      g.beginPath();
      g.moveTo(baseX, 0);
      g.quadraticCurveTo(baseX + lean * 0.24, -length * 0.62, baseX + lean, -length);
      g.stroke();
      g.strokeStyle = random() > 0.48 ? "rgba(160, 144, 94, 0.78)" : "rgba(124, 116, 72, 0.78)";
      g.lineWidth = 0.8 + random() * 0.7;
      g.beginPath();
      g.moveTo(baseX + lean * 0.18, -length * 0.34);
      g.quadraticCurveTo(baseX + lean * 0.54, -length * 0.76, baseX + lean, -length);
      g.stroke();
      if (random() > 0.72) {
        g.fillStyle = "rgba(168, 152, 98, 0.7)";
        g.beginPath();
        g.ellipse(baseX + lean, -length, 1.3, 2.2, 0, 0, Math.PI * 2);
        g.fill();
      }
    }
    g.fillStyle = "rgba(50, 42, 28, 0.4)";
    g.beginPath();
    g.ellipse(0, 0, w * 0.3, h * 0.09, 0, 0, Math.PI * 2);
    g.fill();
  }

  function paintScorchedRoot(g, random, w, h) {
    var half = w / 2;
    g.lineCap = "round";
    g.strokeStyle = "#231b16";
    g.lineWidth = 3.6;
    [[-0.86, 0.02], [0.8, 0.04], [-0.44, 0.01]].forEach(function (direction) {
      g.beginPath();
      g.moveTo(0, -h * 0.18);
      g.quadraticCurveTo(direction[0] * half * 0.5, -h * 0.12, direction[0] * half * 0.94, direction[1] * h);
      g.stroke();
    });

    var trunk = [
      [-w * 0.17, 0],
      [-w * 0.14, -h * 0.58],
      [-w * 0.06, -h * 0.86],
      [w * 0.07, -h * 0.8],
      [w * 0.12, -h * 0.46],
      [w * 0.16, 0]
    ];
    decorPath(g, trunk);
    g.fillStyle = decorVShade(g, -h, 0, "#3b2d23", "#1b1613");
    g.fill();

    g.save();
    decorPath(g, trunk);
    g.clip();
    g.strokeStyle = "rgba(198, 96, 46, 0.42)";
    g.lineWidth = 1.2;
    g.beginPath();
    g.moveTo(-w * 0.05, -h * 0.78);
    g.lineTo(-w * 0.02, -h * 0.54);
    g.lineTo(-w * 0.07, -h * 0.3);
    g.stroke();
    g.strokeStyle = "rgba(232, 168, 96, 0.5)";
    g.lineWidth = 1.5;
    g.beginPath();
    g.moveTo(-w * 0.14, -h * 0.6);
    g.lineTo(-w * 0.1, -h * 0.7);
    g.stroke();
    g.fillStyle = decorVShade(g, -h * 0.3, 0, "rgba(8, 6, 5, 0)", "rgba(8, 6, 5, 0.5)");
    g.fillRect(-w, -h * 0.3, w * 2, h * 0.32);
    g.restore();

    g.fillStyle = "rgba(138, 134, 122, 0.22)";
    g.beginPath();
    g.ellipse(0, 0, w * 0.4, h * 0.1, 0, 0, Math.PI * 2);
    g.fill();
  }

  function paintCrate(g, random, w, h) {
    var board = w * 0.88;
    var faceHeight = h * 0.62;
    var topDepth = h * 0.3;
    // 顶面（受光）
    g.fillStyle = decorVShade(g, -faceHeight - topDepth, -faceHeight, "#8f7047", "#7a5c37");
    g.fillRect(-board / 2, -faceHeight - topDepth, board, topDepth);
    g.strokeStyle = "rgba(46, 32, 21, 0.5)";
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(-board / 2, -faceHeight - topDepth * 0.55);
    g.lineTo(board / 2, -faceHeight - topDepth * 0.55);
    g.stroke();
    // 正面
    g.fillStyle = decorVShade(g, -faceHeight, 0, "#7b5c37", "#4b3720");
    g.fillRect(-board / 2, -faceHeight, board, faceHeight);
    // 板缝
    g.strokeStyle = "rgba(40, 28, 18, 0.62)";
    g.lineWidth = 1.1;
    [-0.18, 0.18].forEach(function (ratio) {
      g.beginPath();
      g.moveTo(-board / 2, -faceHeight * (0.5 + ratio));
      g.lineTo(board / 2, -faceHeight * (0.5 + ratio));
      g.stroke();
    });
    // 角铁
    g.strokeStyle = "rgba(96, 100, 86, 0.8)";
    g.lineWidth = 2.2;
    g.beginPath();
    g.moveTo(-board / 2 + 1, -faceHeight + 1);
    g.lineTo(board / 2 - 1, -faceHeight + 1);
    g.moveTo(-board / 2 + 1, -faceHeight + 1);
    g.lineTo(-board / 2 + 1, -2);
    g.moveTo(board / 2 - 1, -faceHeight + 1);
    g.lineTo(board / 2 - 1, -2);
    g.stroke();
    // 钉子
    g.fillStyle = "rgba(206, 202, 176, 0.4)";
    for (var nail = 0; nail < 4; nail += 1) {
      g.fillRect(-board / 2 + 3 + (nail % 2) * (board - 7), -faceHeight + 3 + Math.floor(nail / 2) * (faceHeight - 6), 1.6, 1.6);
    }
    // 受光边 + 右下暗角
    g.strokeStyle = "rgba(236, 220, 178, 0.32)";
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(-board / 2, -faceHeight);
    g.lineTo(board / 2, -faceHeight);
    g.moveTo(-board / 2, -faceHeight);
    g.lineTo(-board / 2, 0);
    g.stroke();
    g.fillStyle = decorVShade(g, -faceHeight * 0.3, 0, "rgba(12, 10, 6, 0)", "rgba(12, 10, 6, 0.42)");
    g.fillRect(-board / 2, -faceHeight * 0.3, board, faceHeight * 0.3 + 1);
    // 泥点
    decorStipple(g, random, 16, board, faceHeight * 0.7, -faceHeight * 0.4,
      ["rgba(48, 40, 26, 0.4)", "rgba(120, 104, 70, 0.26)"]);
  }

  function paintSandbag(g, random, w, h) {
    var bags = [
      { x: -w * 0.23, y: 0, w: w * 0.5, h: h * 0.46, tilt: -0.05 },
      { x: w * 0.23, y: 0, w: w * 0.5, h: h * 0.46, tilt: 0.05 },
      { x: 0, y: -h * 0.42, w: w * 0.54, h: h * 0.46, tilt: 0.02 }
    ];
    bags.forEach(function (bag, bagIndex) {
      g.save();
      g.translate(bag.x, bag.y);
      g.rotate(bag.tilt);
      var halfW = bag.w / 2;
      var height = bag.h;
      g.beginPath();
      g.moveTo(-halfW, -height * 0.62);
      g.quadraticCurveTo(-halfW * 0.94, -height * 1.02, 0, -height);
      g.quadraticCurveTo(halfW * 0.94, -height * 1.02, halfW, -height * 0.62);
      g.quadraticCurveTo(halfW * 0.98, 0, 0, 0);
      g.quadraticCurveTo(-halfW * 0.98, 0, -halfW, -height * 0.62);
      g.closePath();
      g.fillStyle = decorVShade(g, -height, 0, bagIndex === 2 ? "#94824f" : "#82713f", "#463c22");
      g.fill();
      g.strokeStyle = "rgba(38, 33, 20, 0.6)";
      g.lineWidth = 1;
      g.stroke();
      // 麻布质感
      g.save();
      g.clip();
      decorStipple(g, random, 26, bag.w, height, -height * 0.5,
        ["rgba(214, 200, 152, 0.2)", "rgba(52, 44, 26, 0.26)", "rgba(150, 136, 92, 0.18)"]);
      g.strokeStyle = "rgba(46, 39, 23, 0.4)";
      g.lineWidth = 0.8;
      g.beginPath();
      g.moveTo(-halfW, -height * 0.82);
      g.quadraticCurveTo(0, -height * 0.96, halfW, -height * 0.8);
      g.stroke();
      g.restore();
      g.restore();
    });
  }

  function paintAmmoBox(g, random, w, h) {
    var board = w * 0.9;
    var faceHeight = h * 0.6;
    var topDepth = h * 0.28;
    g.fillStyle = decorVShade(g, -faceHeight - topDepth, -faceHeight, "#767c56", "#5c6242");
    g.fillRect(-board / 2, -faceHeight - topDepth, board, topDepth);
    g.fillStyle = decorVShade(g, -faceHeight, 0, "#5f6547", "#3c412b");
    g.fillRect(-board / 2, -faceHeight, board, faceHeight);
    // 盖缝
    g.strokeStyle = "rgba(24, 28, 18, 0.7)";
    g.lineWidth = 1.2;
    g.beginPath();
    g.moveTo(-board / 2, -faceHeight);
    g.lineTo(board / 2, -faceHeight);
    g.stroke();
    // 卡扣
    g.fillStyle = "rgba(120, 126, 98, 0.9)";
    g.fillRect(-board * 0.34, -faceHeight - 1.5, 4, 4);
    g.fillRect(board * 0.28, -faceHeight - 1.5, 4, 4);
    // 提手
    g.strokeStyle = "rgba(34, 38, 26, 0.85)";
    g.lineWidth = 2.4;
    g.beginPath();
    g.moveTo(-board * 0.16, -faceHeight - topDepth * 0.5);
    g.lineTo(board * 0.16, -faceHeight - topDepth * 0.5);
    g.stroke();
    // 印字条（不用文字，避免字体差异）
    g.fillStyle = "rgba(214, 206, 168, 0.32)";
    g.fillRect(-board * 0.28, -faceHeight * 0.62, board * 0.34, 2.4);
    g.fillRect(-board * 0.28, -faceHeight * 0.42, board * 0.22, 1.8);
    // 受光边 + 底部压暗
    g.strokeStyle = "rgba(226, 228, 190, 0.26)";
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(-board / 2, -faceHeight - topDepth);
    g.lineTo(board / 2, -faceHeight - topDepth);
    g.stroke();
    g.fillStyle = decorVShade(g, -faceHeight * 0.28, 0, "rgba(10, 12, 8, 0)", "rgba(10, 12, 8, 0.4)");
    g.fillRect(-board / 2, -faceHeight * 0.28, board, faceHeight * 0.28 + 1);
    decorStipple(g, random, 12, board, faceHeight * 0.6, -faceHeight * 0.4,
      ["rgba(150, 108, 66, 0.34)", "rgba(24, 26, 18, 0.34)"]);
  }

  function paintDrum(g, random, w, h) {
    var half = w * 0.4;
    var top = -h * 0.86;
    var rust = random() > 0.5;
    var bodyTop = rust ? "#7a5a42" : "#5b6553";
    var bodyBottom = rust ? "#3d2c22" : "#2c332a";
    // 桶身
    g.beginPath();
    g.moveTo(-half, top + 3);
    g.lineTo(-half, -3);
    g.quadraticCurveTo(-half, 0, -half * 0.7, 0);
    g.lineTo(half * 0.7, 0);
    g.quadraticCurveTo(half, 0, half, -3);
    g.lineTo(half, top + 3);
    g.closePath();
    g.fillStyle = decorVShade(g, top, 0, bodyTop, bodyBottom);
    g.fill();
    // 顶盖
    g.beginPath();
    g.ellipse(0, top + 3, half, h * 0.1, 0, 0, Math.PI * 2);
    g.fillStyle = rust ? "#8d6a4d" : "#6b7561";
    g.fill();
    g.strokeStyle = "rgba(20, 22, 18, 0.55)";
    g.lineWidth = 1;
    g.stroke();
    g.beginPath();
    g.ellipse(0, top + 3, half * 0.62, h * 0.06, 0, 0, Math.PI * 2);
    g.strokeStyle = "rgba(28, 30, 24, 0.4)";
    g.stroke();
    // 箍
    g.strokeStyle = "rgba(24, 26, 22, 0.6)";
    g.lineWidth = 2;
    [-0.64, -0.3].forEach(function (ratio) {
      g.beginPath();
      g.moveTo(-half, h * ratio);
      g.lineTo(half, h * ratio);
      g.stroke();
    });
    // 左侧受光
    g.fillStyle = "rgba(226, 220, 186, 0.16)";
    g.fillRect(-half * 0.74, top + 4, half * 0.3, -top - 6);
    // 锈迹
    g.fillStyle = "rgba(122, 68, 34, 0.34)";
    for (var streak = 0; streak < 5; streak += 1) {
      var x = -half * 0.5 + random() * half;
      g.fillRect(x, top + 6 + random() * 4, 1.6 + random() * 1.6, h * (0.3 + random() * 0.5));
    }
    g.fillStyle = decorVShade(g, -h * 0.2, 0, "rgba(8, 8, 6, 0)", "rgba(8, 8, 6, 0.44)");
    g.fillRect(-half, -h * 0.2, half * 2, h * 0.22);
  }

  function paintTire(g, random, w, h) {
    var halfW = w * 0.48;
    var halfH = h * 0.46;
    g.save();
    g.translate(0, -halfH * 0.9);
    g.fillStyle = "#22241f";
    g.beginPath();
    g.ellipse(0, 0, halfW, halfH, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "#2f322b";
    g.beginPath();
    g.ellipse(0, -1, halfW * 0.86, halfH * 0.82, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "#15170f";
    g.beginPath();
    g.ellipse(0, -1, halfW * 0.44, halfH * 0.42, 0, 0, Math.PI * 2);
    g.fill();
    // 胎纹
    g.strokeStyle = "rgba(88, 92, 78, 0.5)";
    g.lineWidth = 1;
    for (var tread = 0; tread < 16; tread += 1) {
      var angle = (tread / 16) * Math.PI * 2;
      g.beginPath();
      g.moveTo(Math.cos(angle) * halfW * 0.6, Math.sin(angle) * halfH * 0.58);
      g.lineTo(Math.cos(angle) * halfW * 0.94, Math.sin(angle) * halfH * 0.9);
      g.stroke();
    }
    // 左上受光
    g.strokeStyle = "rgba(196, 198, 172, 0.24)";
    g.lineWidth = 1.6;
    g.beginPath();
    g.ellipse(0, -1, halfW * 0.95, halfH * 0.92, 0, Math.PI * 1.02, Math.PI * 1.72);
    g.stroke();
    g.restore();
  }

  function paintBarbedWire(g, random, w, h) {
    var half = w * 0.46;
    // 木桩
    [-1, 1].forEach(function (side) {
      g.fillStyle = decorVShade(g, -h, 0, "#6a5336", "#3b2d1c");
      g.fillRect(side * half - 1.8, -h, 3.6, h);
      g.fillStyle = "rgba(216, 202, 160, 0.2)";
      g.fillRect(side * half - 1.8, -h, 1.1, h);
    });
    // 铁丝
    g.strokeStyle = "rgba(58, 60, 52, 0.9)";
    g.lineWidth = 1;
    [-0.78, -0.5, -0.22].forEach(function (ratio, wireIndex) {
      g.beginPath();
      g.moveTo(-half, h * ratio);
      g.quadraticCurveTo(0, h * ratio + (wireIndex === 1 ? 4.5 : 3), half, h * ratio);
      g.stroke();
      // 倒刺
      for (var barb = 0; barb < 7; barb += 1) {
        var t = (barb + 0.5) / 7;
        var x = -half + w * 0.92 * t;
        var sag = Math.sin(Math.PI * t) * (wireIndex === 1 ? 4.5 : 3);
        var y = h * ratio + sag;
        g.beginPath();
        g.moveTo(x - 1.8, y - 1.8);
        g.lineTo(x + 1.8, y + 1.8);
        g.moveTo(x + 1.8, y - 1.8);
        g.lineTo(x - 1.8, y + 1.8);
        g.stroke();
      }
    });
    g.strokeStyle = "rgba(176, 178, 152, 0.22)";
    g.lineWidth = 0.8;
    g.beginPath();
    g.moveTo(-half, -h * 0.5);
    g.quadraticCurveTo(0, -h * 0.5 + 3, half, -h * 0.5);
    g.stroke();
  }

  function paintRubble(g, random, w, h) {
    var stones = 7;
    for (var index = 0; index < stones; index += 1) {
      var x = (random() - 0.5) * w * 0.86;
      var y = -random() * h * 0.66;
      var size = 2.4 + random() * 4.4;
      g.fillStyle = decorVShade(g, y - size, y + size, "#6f7160", "#3b3e34");
      g.beginPath();
      g.moveTo(x - size, y + size * 0.5);
      g.lineTo(x - size * 0.6, y - size * 0.8);
      g.lineTo(x + size * 0.5, y - size);
      g.lineTo(x + size, y + size * 0.3);
      g.lineTo(x + size * 0.2, y + size * 0.7);
      g.closePath();
      g.fill();
      g.fillStyle = "rgba(214, 212, 184, 0.12)";
      g.fillRect(x - size * 0.5, y - size * 0.8, size * 0.7, 1);
    }
    g.fillStyle = "rgba(58, 50, 36, 0.3)";
    g.beginPath();
    g.ellipse(0, -1, w * 0.42, h * 0.28, 0, 0, Math.PI * 2);
    g.fill();
  }

  function getDecorSprite(kind, variant) {
    var art = DECOR_ART[kind] || DECOR_ART.rock;
    var safeVariant = Math.max(0, Math.min(art.variants - 1, variant | 0));
    var key = kind + "|" + safeVariant;
    var cache = B.decorSprites || (B.decorSprites = Object.create(null));
    if (cache[key]) { return cache[key]; }
    if (typeof document === "undefined" || !document.createElement) { return null; }

    var drawWidth = art.width + DECOR_PAD * 2;
    var drawHeight = art.height + DECOR_PAD * 2;
    var canvas = makeCanvas(Math.ceil(drawWidth * DECOR_SS), Math.ceil(drawHeight * DECOR_SS));
    var g = canvas.getContext("2d");
    if (!g) { return null; }
    g.scale(DECOR_SS, DECOR_SS);
    g.translate(DECOR_PAD + art.width / 2, DECOR_PAD + art.height);
    g.lineJoin = "round";
    var random = rng(0x9E3779B9 ^ (safeVariant * 0x85EBCA6B) ^ (kind.length * 0x27D4EB2D));
    try {
      art.paint(g, random, art.width, art.height);
    } catch (error) {
      /* 单个装饰贴图失败不该拖垮整帧，但记下来方便排查 */
      B.lastDecorationError = { kind: kind, variant: safeVariant, message: String(error && error.message || error) };
    }

    var sprite = {
      canvas: canvas,
      offsetX: DECOR_PAD + art.width / 2,
      offsetY: DECOR_PAD + art.height,
      width: drawWidth,
      height: drawHeight
    };
    var keys = Object.keys(cache);
    if (keys.length >= DECOR_CACHE_LIMIT) {
      cache = B.decorSprites = Object.create(null);
    }
    cache[key] = sprite;
    return sprite;
  }

  function decorVariant(decoration, variants) {
    if (variants <= 1) { return 0; }
    var roll = hash(Math.round(decoration.x * 0.5), Math.round(decoration.y * 0.5), 7717);
    return Math.min(variants - 1, Math.floor(roll * variants));
  }

  B.hasDecorationArt = function (kind) {
    return Boolean(DECOR_ART[kind]);
  };

  // 贴图里脚底线以下留的透明边（给接地阴影/边缘描边溢出用），测试按它换算脚底位置。
  B.decorationPad = DECOR_PAD;

  // 给测试/调试用：所有装饰物种类与变体数量
  B.decorationKinds = function () {
    return Object.keys(DECOR_ART).map(function (kind) {
      return { kind: kind, variants: DECOR_ART[kind].variants };
    });
  };

  B.getDecorationArtSize = function (kind) {
    var art = DECOR_ART[kind] || DECOR_ART.rock;
    return { width: art.width, height: art.height };
  };

  // 2.5D 装饰物：地面阴影按地面空间画（跟着压扁），本体是立牌（纵向 1/k 反拉伸）。
  B.drawDecoration = function (ctx, decoration) {
    if (!decoration) { return false; }
    if (!ensure(ctx)) { return false; }
    var art = DECOR_ART[decoration.kind] || DECOR_ART.rock;
    // decoration.variant 只给预览/测试指定变体用；正常游戏按坐标哈希选。
    var variant = typeof decoration.variant === "number" ? decoration.variant : decorVariant(decoration, art.variants);
    var sprite = getDecorSprite(decoration.kind, variant);
    if (!sprite) { return false; }
    var scale = decoration.scale || 1;
    var k = TankGame.View && TankGame.View.isPitched() ? TankGame.View.k : 1;
    var footY = decoration.y + (art.foot || 0) * scale;

    ctx.save();
    ctx.globalAlpha = 0.32;
    ctx.fillStyle = "#0a0f0a";
    ctx.beginPath();
    ctx.ellipse(decoration.x, footY + 1.5, art.width * 0.4 * scale, art.width * 0.15 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(decoration.x, footY);
    if (k < 0.999) { ctx.scale(1, 1 / k); }
    ctx.scale(scale, scale);
    ctx.drawImage(sprite.canvas, -sprite.offsetX, -sprite.offsetY, sprite.width, sprite.height);
    ctx.restore();
    return true;
  };

  // ---------------------------------------------------------------- 中央石质平台
  //
  // 旧平台是「浅灰瓷砖 + 每格一块混凝土」，和橄榄色战场完全不是一个画风。
  // 2.5D 下改成：程序化石板路 + 一圈压边石 + 朝南的台基立面 + 接地投影，
  // 材质与打光和地面/墙体一致（西北受光、南侧落暗），缝里有土和草、边角有磨损。

  function makeStoneTile(size, ashen) {
    var tile = makeCanvas(size, size);
    var g = tile.getContext("2d");
    var random = rng(ashen ? 0x71C0FFEE : 0x51AB1E77);
    var cell = 4;
    var cells = size / cell;
    // 偏暖的橄榄灰：比纯灰更贴合草地/荒地的环境色，又不至于变成泥地
    var dark = ashen ? [42, 38, 31] : [48, 47, 36];
    var mid = ashen ? [80, 74, 62] : [86, 85, 68];
    var light = ashen ? [112, 104, 88] : [120, 118, 96];
    var image = g.createImageData(size, size);
    var data = image.data;
    for (var cy = 0; cy < cells; cy += 1) {
      for (var cx = 0; cx < cells; cx += 1) {
        var broad = periodicNoise(cx / 16, cy / 16, cells / 16, 41);
        var fine = periodicNoise(cx / 4, cy / 4, cells / 4, 42);
        var grit = periodicNoise(cx / 2, cy / 2, cells / 2, 43);
        var value = broad * 0.5 + fine * 0.36 + grit * 0.14;
        var base = value < 0.5 ? mixColor(dark, mid, value * 2) : mixColor(mid, light, (value - 0.5) * 2);
        for (var py = 0; py < cell; py += 1) {
          var row = ((cy * cell + py) * size + cx * cell) * 4;
          for (var px = 0; px < cell; px += 1) {
            data[row + px * 4] = base[0];
            data[row + px * 4 + 1] = base[1];
            data[row + px * 4 + 2] = base[2];
            data[row + px * 4 + 3] = 255;
          }
        }
      }
    }
    g.putImageData(image, 0, 0);

    // 石板缝：128 一行，隔行错 64；缝比石板暗，缝下方一条受光倒角
    var slab = 128;
    var rows = size / slab;
    for (var row = 0; row < rows; row += 1) {
      var top = row * slab;
      g.fillStyle = "rgba(22, 24, 19, 0.58)";
      g.fillRect(0, top, size, 3);
      g.fillStyle = "rgba(198, 194, 166, 0.13)";
      g.fillRect(0, top + 3, size, 1.6);
      var offset = row % 2 ? slab / 2 : 0;
      for (var column = 0; column < size / slab; column += 1) {
        var jointX = column * slab + offset;
        g.fillStyle = "rgba(22, 24, 19, 0.54)";
        g.fillRect(jointX, top, 2.6, slab);
        g.fillStyle = "rgba(198, 194, 166, 0.11)";
        g.fillRect(jointX + 2.6, top, 1.2, slab);
      }
    }

    // 缝里的草和积土
    for (var patch = 0; patch < 26; patch += 1) {
      var patchX = random() * size;
      var patchY = Math.floor(random() * rows) * slab;
      var radius = 10 + random() * 22;
      wrapped(size, patchX, patchY, radius + 4, function (offsetX, offsetY) {
        var gradient = g.createRadialGradient(patchX + offsetX, patchY + offsetY, radius * 0.1,
          patchX + offsetX, patchY + offsetY, radius);
        gradient.addColorStop(0, "rgba(52, 44, 30, 0.34)");
        gradient.addColorStop(1, "rgba(52, 44, 30, 0)");
        g.fillStyle = gradient;
        g.fillRect(patchX + offsetX - radius, patchY + offsetY - radius, radius * 2, radius * 2);
      });
    }
    for (var tuft = 0; tuft < 34; tuft += 1) {
      var tuftX = random() * size;
      var tuftY = Math.floor(random() * rows) * slab + (random() > 0.5 ? 0 : slab);
      var blades = 3 + Math.floor(random() * 3);
      var seedValue = Math.floor(random() * 100000);
      wrapped(size, tuftX, tuftY, 12, function (offsetX, offsetY) {
        g.lineCap = "round";
        for (var blade = 0; blade < blades; blade += 1) {
          var lean = (hash(seedValue, blade, 51) - 0.5) * 9;
          var length = 5 + hash(seedValue, blade, 52) * 8;
          g.strokeStyle = hash(seedValue, blade, 53) > 0.55 ? "rgba(104, 116, 62, 0.5)" : "rgba(60, 70, 40, 0.46)";
          g.lineWidth = 0.8 + hash(seedValue, blade, 54) * 0.7;
          g.beginPath();
          g.moveTo(tuftX + offsetX, tuftY + offsetY);
          g.quadraticCurveTo(tuftX + offsetX + lean * 0.3, tuftY + offsetY - length * 0.6,
            tuftX + offsetX + lean, tuftY + offsetY - length);
          g.stroke();
        }
      });
    }

    // 磨损与碎石
    for (var scuff = 0; scuff < 90; scuff += 1) {
      var scuffX = random() * size;
      var scuffY = random() * size;
      var scuffLength = 3 + random() * 9;
      var scuffAngle = random() * Math.PI;
      wrapped(size, scuffX, scuffY, scuffLength + 3, function (offsetX, offsetY) {
        g.strokeStyle = random() > 0.5 ? "rgba(206, 202, 172, 0.16)" : "rgba(26, 28, 22, 0.2)";
        g.lineWidth = 0.9;
        g.beginPath();
        g.moveTo(scuffX + offsetX, scuffY + offsetY);
        g.lineTo(scuffX + offsetX + Math.cos(scuffAngle) * scuffLength,
          scuffY + offsetY + Math.sin(scuffAngle) * scuffLength);
        g.stroke();
      });
    }
    for (var pebble = 0; pebble < 70; pebble += 1) {
      var pebbleX = random() * size;
      var pebbleY = random() * size;
      var pebbleRadius = 0.7 + random() * 1.7;
      wrapped(size, pebbleX, pebbleY, 6, function (offsetX, offsetY) {
        g.fillStyle = "rgba(20, 22, 17, 0.3)";
        g.beginPath();
        g.ellipse(pebbleX + offsetX + 0.6, pebbleY + offsetY + 0.8, pebbleRadius, pebbleRadius * 0.66, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = "rgba(148, 146, 124, 0.42)";
        g.beginPath();
        g.ellipse(pebbleX + offsetX, pebbleY + offsetY, pebbleRadius, pebbleRadius * 0.62, 0, 0, Math.PI * 2);
        g.fill();
      });
    }
    return tile;
  }

  B.drawStonePlatform = function (ctx, worldMap) {
    var arena = worldMap && worldMap.bossArena;
    if (!arena || !(arena.width > 0) || !(arena.height > 0)) { return false; }
    if (!ensure(ctx)) { return false; }
    var k = TankGame.View && TankGame.View.isPitched() ? TankGame.View.k : 1;
    var boss = Boolean(worldMap.isBossMap);
    var pattern = boss ? B.patterns.stoneBoss : B.patterns.stone;
    var x = arena.x;
    var y = arena.y;
    var width = arena.width;
    var height = arena.height;
    var face = Math.max(8, Math.round(13 / Math.max(0.3, k)));
    var kerb = 22;

    // 1) 朝南的接地投影
    ctx.save();
    var shadow = ctx.createLinearGradient(0, y + height - 2, 0, y + height + face + 30);
    shadow.addColorStop(0, "rgba(4, 6, 5, 0.46)");
    shadow.addColorStop(0.5, "rgba(4, 6, 5, 0.2)");
    shadow.addColorStop(1, "rgba(4, 6, 5, 0)");
    ctx.fillStyle = shadow;
    ctx.fillRect(x - 16, y + height - 2, width + 32, face + 32);
    ctx.restore();

    // 2) 台基立面
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y + height, width, face);
    ctx.clip();
    ctx.fillStyle = boss ? "#3b332c" : "#4a4c42";
    ctx.fillRect(x, y + height, width, face);
    if (pattern) {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = pattern;
      ctx.fillRect(x, y + height, width, face);
      ctx.globalAlpha = 1;
    }
    var faceShade = ctx.createLinearGradient(0, y + height, 0, y + height + face);
    faceShade.addColorStop(0, "rgba(255, 246, 214, 0.1)");
    faceShade.addColorStop(0.35, "rgba(0, 0, 0, 0.08)");
    faceShade.addColorStop(1, "rgba(0, 0, 0, 0.46)");
    ctx.fillStyle = faceShade;
    ctx.fillRect(x, y + height, width, face);
    // 立面上的竖缝
    ctx.strokeStyle = "rgba(20, 22, 17, 0.34)";
    ctx.lineWidth = 1.4;
    for (var faceJoint = 0; faceJoint <= width; faceJoint += 128) {
      ctx.beginPath();
      ctx.moveTo(x + faceJoint, y + height);
      ctx.lineTo(x + faceJoint, y + height + face);
      ctx.stroke();
    }
    // 压顶高光 + 底部积土
    ctx.fillStyle = "rgba(226, 222, 194, 0.26)";
    ctx.fillRect(x, y + height, width, 1.6);
    ctx.fillStyle = "rgba(14, 16, 12, 0.42)";
    ctx.fillRect(x, y + height + face - 3, width, 3);
    ctx.restore();

    // 3) 石板顶面
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.clip();
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fillRect(x, y, width, height);
    } else {
      ctx.fillStyle = boss ? "#5a5248" : "#666a5c";
      ctx.fillRect(x, y, width, height);
    }
    // 大块脏污 / 苔痕
    var blobs = B.sprites.blobs;
    if (blobs) {
      var patchCell = 210;
      for (var gy = Math.floor(y / patchCell); gy <= Math.ceil((y + height) / patchCell); gy += 1) {
        for (var gx = Math.floor(x / patchCell); gx <= Math.ceil((x + width) / patchCell); gx += 1) {
          var roll = hash(gx, gy, 907);
          var sprite = roll > 0.72 ? blobs.mud : (roll > 0.44 ? blobs.dark : blobs.light);
          var centerX = (gx + 0.5 + (hash(gx, gy, 908) - 0.5) * 0.6) * patchCell;
          var centerY = (gy + 0.5 + (hash(gx, gy, 909) - 0.5) * 0.6) * patchCell;
          var radius = patchCell * (0.3 + hash(gx, gy, 910) * 0.34);
          ctx.globalAlpha = 0.22 + hash(gx, gy, 911) * 0.22;
          ctx.drawImage(sprite, centerX - radius, centerY - radius, radius * 2, radius * 2);
        }
      }
      ctx.globalAlpha = 1;
    }
    // 4) 压边石：内圈一圈颜色略深的石带，靠内一侧有倒角明暗
    ctx.fillStyle = boss ? "rgba(34, 28, 23, 0.42)" : "rgba(30, 32, 26, 0.36)";
    ctx.fillRect(x, y, width, kerb);
    ctx.fillRect(x, y + height - kerb, width, kerb);
    ctx.fillRect(x, y + kerb, kerb, height - kerb * 2);
    ctx.fillRect(x + width - kerb, y + kerb, kerb, height - kerb * 2);
    ctx.strokeStyle = boss ? "rgba(226, 196, 152, 0.2)" : "rgba(230, 228, 198, 0.26)";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(x, y + kerb);
    ctx.lineTo(x + width, y + kerb);
    ctx.moveTo(x + kerb, y + kerb);
    ctx.lineTo(x + kerb, y + height - kerb);
    ctx.stroke();
    ctx.strokeStyle = "rgba(12, 14, 10, 0.34)";
    ctx.beginPath();
    ctx.moveTo(x, y + height - kerb);
    ctx.lineTo(x + width, y + height - kerb);
    ctx.moveTo(x + width - kerb, y + kerb);
    ctx.lineTo(x + width - kerb, y + height - kerb);
    ctx.stroke();
    // 压边石的接缝
    ctx.strokeStyle = "rgba(16, 18, 13, 0.3)";
    ctx.lineWidth = 1.2;
    for (var kerbX = x + 64; kerbX < x + width; kerbX += 128) {
      ctx.beginPath();
      ctx.moveTo(kerbX, y);
      ctx.lineTo(kerbX, y + kerb);
      ctx.moveTo(kerbX, y + height - kerb);
      ctx.lineTo(kerbX, y + height);
      ctx.stroke();
    }
    for (var kerbY = y + 64; kerbY < y + height; kerbY += 128) {
      ctx.beginPath();
      ctx.moveTo(x, kerbY);
      ctx.lineTo(x + kerb, kerbY);
      ctx.moveTo(x + width - kerb, kerbY);
      ctx.lineTo(x + width, kerbY);
      ctx.stroke();
    }
    // 内圈环境光遮蔽：南/东侧压暗，让平台坐进地面
    var innerShade = ctx.createLinearGradient(0, y + height - kerb, 0, y + height);
    innerShade.addColorStop(0, "rgba(6, 8, 6, 0)");
    innerShade.addColorStop(1, "rgba(6, 8, 6, 0.34)");
    ctx.fillStyle = innerShade;
    ctx.fillRect(x + kerb, y + height - kerb, width - kerb * 2, kerb);
    var sideShade = ctx.createLinearGradient(x + width - kerb, 0, x + width, 0);
    sideShade.addColorStop(0, "rgba(6, 8, 6, 0)");
    sideShade.addColorStop(1, "rgba(6, 8, 6, 0.3)");
    ctx.fillStyle = sideShade;
    ctx.fillRect(x + width - kerb, y + kerb, kerb, height - kerb * 2);
    // 西北受光
    var litShade = ctx.createLinearGradient(0, y, 0, y + kerb * 1.6);
    litShade.addColorStop(0, "rgba(255, 248, 214, 0.12)");
    litShade.addColorStop(1, "rgba(255, 248, 214, 0)");
    ctx.fillStyle = litShade;
    ctx.fillRect(x, y, width, kerb * 1.6);
    ctx.restore();

    return true;
  };

  // ---------------------------------------------------------------- 坦克遗骸与固定炮台
  //
  // 这两样旧版都是「几个 fillRect + 硬描边」的贴纸：遗骸是深灰矩形加两道交叉线，
  // 炮台是比地面亮一倍的灰方块，既没有接地投影也没有厚度，2.5D 下尤其像贴上去的。
  // 现在统一成和坦克同规格的 512×512 程序化顶视图贴图（2D / 2.5D 共用一张），
  // 打光规则跟地面、墙体、装饰物一致（西北受光、南侧落暗），
  // 2.5D 下再叠一层侧壁挤出，让它们有厚度而不是一张纸。

  var HARDWARE_SCALE = 0.34;        // 512 贴图 → 174px，和坦克贴图同一套缩放
  var WRECK_VARIANTS = 3;
  var TURRET_BASE_RADIUS = 118;     // 炮台基座外接圆半径（贴图像素）
  var TURRET_BARREL_TIP = 182;      // 炮管口位置（贴图像素）→ 62px，和 getMuzzleDistance 对齐
  var wreckSprites = Object.create(null);
  var turretWreckSprite = null;
  var turretSprites = null;

  // 侧壁挤出用的纯色剪影：只取贴图 alpha，整块填成近黑。
  function hardwareSide(target, canvas) {
    if (target.side) { return target.side; }
    if (typeof document === "undefined" || !document.createElement) { return null; }
    var side = makeCanvas(512, 512);
    var g = side.getContext ? side.getContext("2d") : null;
    if (!g) { return null; }
    g.drawImage(canvas, 0, 0);
    g.globalCompositeOperation = "source-in";
    g.fillStyle = "#0a0c0a";
    g.fillRect(0, 0, 512, 512);
    target.side = side;
    return side;
  }

  function makeHardwareSprite(paint, seed) {
    if (typeof document === "undefined" || !document.createElement) { return null; }
    var canvas = makeCanvas(512, 512);
    var g = canvas.getContext ? canvas.getContext("2d") : null;
    if (!g) { return null; }
    g.translate(256, 256);
    g.lineJoin = "round";
    var sprite = { canvas: canvas };
    try {
      paint(g, rng(seed), sprite);
    } catch (error) {
      /* 贴图生成失败不该拖垮整帧，记下来方便排查 */
      B.lastHardwareError = { message: String(error && error.message || error) };
    }
    return sprite;
  }

  // 受击闪白 / 燃烧：和坦克贴图用同一套滤镜，避免另外维护一套配色
  function hardwareFilter(context, tank) {
    if (tank.hitFlash > 0) {
      context.filter = "brightness(1.7) saturate(0.45)";
    } else if (tank.burning) {
      context.filter = "brightness(1.22) saturate(2.8) hue-rotate(-16deg)";
    }
  }

  // ---- 遗骸：坦克车体（顶视图，+x 朝车头）。刻意保持「矩形车体 + 两条履带」的
  // 坦克轮廓 —— 原来那圈圆滚滚的多边形看着像块石头，不像被炸毁的坦克。
  var WRECK_HULL = [
    [-92, -40], [64, -40], [92, -20], [92, 20], [64, 40], [-86, 40], [-92, 26]
  ];
  var WRECK_TRACK_LEFT = [[-92, -58], [86, -58], [86, -40], [-92, -40]];
  // 右侧履带被撕掉一截：只剩后半段，断口是锯齿
  var WRECK_TRACK_RIGHT = [
    [-92, 40], [40, 40], [36, 46], [42, 52], [30, 58], [-92, 58]
  ];

  function paintWreck(g, random, sprite) {
    // 车体自带的焦黑（跟着车体一起转，所以画成椭圆而不是正圆）
    var soot = g.createRadialGradient(0, 2, 24, 0, 2, 118);
    soot.addColorStop(0, "rgba(8, 8, 7, 0.66)");
    soot.addColorStop(0.62, "rgba(10, 9, 7, 0.3)");
    soot.addColorStop(1, "rgba(10, 9, 7, 0)");
    g.fillStyle = soot;
    g.beginPath();
    g.ellipse(0, 2, 118, 80, 0, 0, Math.PI * 2);
    g.fill();

    // ---- 两条履带：坦克最好认的特征，先画在车体下面
    [WRECK_TRACK_LEFT, WRECK_TRACK_RIGHT].forEach(function (track, index) {
      decorPath(g, track);
      g.fillStyle = decorVShade(g, -58, 58, "#23251f", "#0e100e");
      g.fill();
      g.strokeStyle = "rgba(6, 8, 7, 0.6)";
      g.lineWidth = 2;
      g.stroke();
      // 链节：横着一道道压过去，断掉的那条只画到断口
      g.save();
      decorPath(g, track);
      g.clip();
      g.strokeStyle = index === 0 ? "rgba(126, 124, 108, 0.26)" : "rgba(126, 124, 108, 0.2)";
      g.lineWidth = 1.4;
      for (var link = 0; link < 15; link += 1) {
        var linkX = -88 + link * 12;
        g.beginPath();
        g.moveTo(linkX, -58);
        g.lineTo(linkX + (random() - 0.5) * 2, 58);
        g.stroke();
      }
      g.restore();
    });

    // ---- 车体本体
    decorPath(g, WRECK_HULL);
    g.fillStyle = decorVShade(g, -40, 40, "#4b4b3f", "#191b19");
    g.fill();

    g.save();
    decorPath(g, WRECK_HULL);
    g.clip();
    // 西北受光面
    g.fillStyle = "rgba(198, 196, 168, 0.1)";
    decorPath(g, [[-92, -40], [62, -40], [86, -22], [80, -6], [-90, -12]]);
    g.fill();
    // 南侧落暗
    g.fillStyle = "rgba(4, 6, 6, 0.42)";
    decorPath(g, [[-92, 22], [-40, 26], [40, 26], [78, 20], [80, 44], [-90, 44]]);
    g.fill();
    // 装甲板缝：炸裂后错位的三块板
    g.strokeStyle = "rgba(8, 10, 9, 0.72)";
    g.lineWidth = 2.6;
    g.beginPath();
    g.moveTo(-52, -40); g.lineTo(-44, 2); g.lineTo(-52, 40);
    g.moveTo(46, -40); g.lineTo(38, 0); g.lineTo(44, 40);
    g.moveTo(-44, 2); g.lineTo(38, 0);
    g.stroke();
    g.strokeStyle = "rgba(152, 150, 130, 0.13)";
    g.lineWidth = 1.2;
    g.beginPath();
    g.moveTo(-52, -38); g.lineTo(-44, 4); g.lineTo(-52, 38);
    g.moveTo(46, -38); g.lineTo(38, 2); g.lineTo(44, 38);
    g.stroke();

    // 烧穿的破洞（洞底近黑，洞沿有一圈余烬红）
    [[-64, -22, 16, 11, 0.5], [44, -20, 12, 9, -0.3], [26, 26, 14, 10, 0.9]].forEach(function (hole) {
      g.beginPath();
      g.ellipse(hole[0], hole[1], hole[2], hole[3], hole[4], 0, Math.PI * 2);
      g.fillStyle = "#07090a";
      g.fill();
      g.strokeStyle = "rgba(255, 122, 44, 0.34)";
      g.lineWidth = 2;
      g.stroke();
    });

    // 后部发动机舱：散热格栅被烧塌
    g.fillStyle = "#15171a";
    g.fillRect(-88, -26, 32, 52);
    g.strokeStyle = "rgba(120, 118, 104, 0.24)";
    g.lineWidth = 1.6;
    for (var grill = 0; grill < 5; grill += 1) {
      var grillY = -22 + grill * 10;
      g.beginPath();
      g.moveTo(-85, grillY);
      g.lineTo(-58, grillY + (random() - 0.5) * 3);
      g.stroke();
    }

    // ---- 炮塔：被打歪，卡在座圈上，炮管折断下垂
    g.save();
    g.translate(2, -4);
    g.rotate(0.42);
    g.beginPath();
    g.moveTo(-44, -34); g.lineTo(10, -42); g.lineTo(42, -18); g.lineTo(40, 16);
    g.lineTo(6, 38); g.lineTo(-42, 32); g.closePath();
    g.fillStyle = decorVShade(g, -44, 40, "#484a3c", "#1d1f1c");
    g.fill();
    g.strokeStyle = "rgba(6, 8, 8, 0.8)";
    g.lineWidth = 2.4;
    g.stroke();
    // 炮塔顶盖受光
    g.fillStyle = "rgba(196, 194, 166, 0.12)";
    g.beginPath();
    g.moveTo(-38, -30); g.lineTo(8, -37); g.lineTo(24, -20); g.lineTo(-34, -12);
    g.closePath();
    g.fill();
    // 折断的炮管：前半截歪下去
    g.beginPath();
    g.moveTo(38, -10); g.lineTo(96, -9); g.lineTo(124, 4); g.lineTo(120, 21);
    g.lineTo(94, 10); g.lineTo(38, 9); g.closePath();
    g.fillStyle = decorVShade(g, -12, 22, "#2e2f29", "#101210");
    g.fill();
    g.strokeStyle = "rgba(6, 8, 8, 0.75)";
    g.lineWidth = 2;
    g.stroke();
    // 断口
    g.strokeStyle = "rgba(206, 202, 176, 0.3)";
    g.lineWidth = 2.4;
    g.beginPath();
    g.moveTo(96, -9); g.lineTo(120, 4); g.lineTo(118, 18);
    g.stroke();
    // 炮塔侧面的编号与铆钉
    g.fillStyle = "rgba(206, 198, 168, 0.26)";
    g.font = "700 16px Consolas, monospace";
    g.fillText("07", -26, 6);
    for (var bolt = 0; bolt < 6; bolt += 1) {
      var boltAngle = -1.1 + bolt * 0.42;
      g.fillStyle = "#0d0f0d";
      g.beginPath();
      g.arc(-30 + Math.cos(boltAngle) * 14, Math.sin(boltAngle) * 20, 2.2, 0, Math.PI * 2);
      g.fill();
    }
    g.restore();

    // ---- 座圈：炮塔被掀开，露出一个破口
    g.beginPath();
    g.ellipse(6, 2, 40, 34, 0.42, 0, Math.PI * 2);
    g.strokeStyle = "rgba(8, 10, 9, 0.85)";
    g.lineWidth = 6;
    g.stroke();
    g.strokeStyle = "rgba(150, 146, 124, 0.16)";
    g.lineWidth = 1.6;
    g.stroke();

    // ---- 被撕掉的右履带：断口外面散着几节链节
    [[36, 64, -0.35], [58, 70, 0.42], [78, 60, -0.15], [-30, 66, 0.2]].forEach(function (loose) {
      g.save();
      g.translate(loose[0], loose[1]);
      g.rotate(loose[2]);
      g.fillStyle = "#191b19";
      g.fillRect(-9, -4, 18, 8);
      g.strokeStyle = "rgba(126, 124, 108, 0.2)";
      g.lineWidth = 1.2;
      g.strokeRect(-9, -4, 18, 8);
      g.restore();
    });

    // ---- 崩出来的碎钢板
    for (var plate = 0; plate < 7; plate += 1) {
      var plateX = (random() - 0.5) * 206;
      var plateY = (random() - 0.5) * 138;
      var plateSize = 5 + random() * 7;
      g.save();
      g.translate(plateX, plateY);
      g.rotate(random() * Math.PI);
      g.fillStyle = decorVShade(g, -plateSize, plateSize, "#33342d", "#151714");
      g.fillRect(-plateSize, -plateSize * 0.55, plateSize * 2, plateSize * 1.1);
      g.restore();
    }

    // ---- 灰烬（烧完的浅灰颗粒）
    for (var ash = 0; ash < 26; ash += 1) {
      var ashX = (random() - 0.5) * 196;
      var ashY = (random() - 0.5) * 140;
      g.fillStyle = "rgba(196, 190, 170, " + (0.06 + random() * 0.14).toFixed(3) + ")";
      g.fillRect(ashX, ashY, 1.4 + random() * 2, 1.4 + random() * 2);
    }
    g.restore();

    // 车体轮廓的暗描边：压在贴图最外层，避免边缘糊进背景
    decorPath(g, WRECK_HULL);
    g.strokeStyle = "rgba(6, 8, 7, 0.55)";
    g.lineWidth = 2;
    g.stroke();

    // 余烬位置（同一坐标系），发光层单独烘一张，绘制时整体脉动
    sprite.embers = [
      { x: -6, y: -2, r: 24 },
      { x: 46, y: 12, r: 15 },
      { x: -58, y: 4, r: 14 },
      { x: 4, y: 28, r: 11 }
    ];
    sprite.glow = buildEmberGlow(sprite.embers);
    // 火焰底部的落点（贴图坐标）：沿着车体的椭圆分布，别都挤在正中
    sprite.fireSpots = [
      { x: -12, y: -6, r: 1 },
      { x: 40, y: 14, r: 0.66 },
      { x: -54, y: 6, r: 0.58 }
    ];
  }

  function buildEmberGlow(embers) {
    if (typeof document === "undefined" || !document.createElement) { return null; }
    var glow = makeCanvas(512, 512);
    var g = glow.getContext ? glow.getContext("2d") : null;
    if (!g) { return null; }
    g.translate(256, 256);
    g.globalCompositeOperation = "lighter";
    embers.forEach(function (ember) {
      var gradient = g.createRadialGradient(ember.x, ember.y, 0, ember.x, ember.y, ember.r);
      gradient.addColorStop(0, "rgba(255, 194, 104, 0.8)");
      gradient.addColorStop(0.42, "rgba(255, 116, 42, 0.38)");
      gradient.addColorStop(1, "rgba(255, 60, 16, 0)");
      g.fillStyle = gradient;
      g.beginPath();
      g.arc(ember.x, ember.y, ember.r, 0, Math.PI * 2);
      g.fill();
    });
    return glow;
  }

  function getWreckSprite(variant) {
    var safe = Math.max(0, Math.min(WRECK_VARIANTS - 1, variant | 0));
    if (wreckSprites[safe]) { return wreckSprites[safe]; }
    var sprite = makeHardwareSprite(paintWreck, 0x51ED270B ^ (safe * 0x9E3779B1));
    if (!sprite) { return null; }
    wreckSprites[safe] = sprite;
    return sprite;
  }

  // ---- 炮台遗骸：八边形基座还钉在地上（被啃掉一个角），炮楼被掀翻在一边，
  // 炮管断成两截。刻意不留履带、不留长条车体 —— 轮廓要和坦克遗骸一眼分开。
  function paintTurretWreck(g, random, sprite) {
    var R = 105;
    function octagon(radius, squash) {
      g.beginPath();
      for (var corner = 0; corner < 8; corner += 1) {
        var angle = Math.PI / 8 + corner * Math.PI / 4;
        var px = Math.cos(angle) * radius;
        var py = Math.sin(angle) * radius * (squash || 1);
        if (corner === 0) { g.moveTo(px, py); } else { g.lineTo(px, py); }
      }
      g.closePath();
    }

    // 地面焦黑
    var soot = g.createRadialGradient(0, 6, 28, 0, 6, 172);
    soot.addColorStop(0, "rgba(8, 8, 7, 0.62)");
    soot.addColorStop(0.6, "rgba(10, 9, 7, 0.28)");
    soot.addColorStop(1, "rgba(10, 9, 7, 0)");
    g.fillStyle = soot;
    g.beginPath();
    g.ellipse(0, 6, 168, 140, 0, 0, Math.PI * 2);
    g.fill();

    // ---- 基座：烧塌的八边形，比完好的炮台暗一档
    octagon(R, 0.94);
    g.fillStyle = decorVShade(g, -R, R, "#4a4d3f", "#191c16");
    g.fill();
    g.strokeStyle = "rgba(6, 8, 6, 0.8)";
    g.lineWidth = 3;
    g.stroke();

    g.save();
    octagon(R, 0.94);
    g.clip();
    // 外圈受光 / 内侧落暗
    g.fillStyle = "rgba(198, 194, 166, 0.12)";
    octagon(R * 0.97, 0.94);
    g.fill();
    g.fillStyle = "rgba(6, 8, 6, 0.5)";
    octagon(R * 0.74, 0.94);
    g.fill();
    // 裂缝：从座圈往外裂到边缘
    g.strokeStyle = "rgba(6, 8, 6, 0.72)";
    g.lineWidth = 2.4;
    for (var crack = 0; crack < 5; crack += 1) {
      var crackAngle = 0.4 + crack * 1.21 + (random() - 0.5) * 0.3;
      g.beginPath();
      g.moveTo(Math.cos(crackAngle) * R * 0.4, Math.sin(crackAngle) * R * 0.38);
      g.lineTo(Math.cos(crackAngle + 0.12) * R * 0.72, Math.sin(crackAngle + 0.12) * R * 0.68);
      g.lineTo(Math.cos(crackAngle - 0.06) * R, Math.sin(crackAngle - 0.06) * R * 0.94);
      g.stroke();
    }
    g.restore();

    // ---- 座圈：炮楼被掀走，剩一个黑洞
    octagon(R * 0.62, 0.94);
    g.fillStyle = "#0b0d0a";
    g.fill();
    g.strokeStyle = "rgba(150, 146, 124, 0.16)";
    g.lineWidth = 2.4;
    g.stroke();
    // 洞里还剩几块烧红的渣
    for (var emberSpot = 0; emberSpot < 5; emberSpot += 1) {
      var emberAngle = random() * Math.PI * 2;
      var emberRadius = R * 0.6 * random();
      g.fillStyle = "rgba(255, 118, 40, " + (0.2 + random() * 0.3).toFixed(3) + ")";
      g.beginPath();
      g.arc(Math.cos(emberAngle) * emberRadius, Math.sin(emberAngle) * emberRadius * 0.94,
        3 + random() * 5, 0, Math.PI * 2);
      g.fill();
    }

    // ---- 被炸掉的一个角：边缘啃出一个豁口
    g.beginPath();
    g.moveTo(R * 0.42, -R * 0.5);
    g.lineTo(R * 0.86, -R * 0.42);
    g.lineTo(R * 0.66, -R * 0.16);
    g.lineTo(R * 0.9, R * 0.02);
    g.lineTo(R * 0.5, R * 0.24);
    g.lineTo(R * 0.36, -R * 0.1);
    g.closePath();
    g.fillStyle = "#0a0c09";
    g.fill();
    g.strokeStyle = "rgba(186, 182, 154, 0.18)";
    g.lineWidth = 2;
    g.stroke();

    // ---- 掀翻的炮楼：躺在右前方，底面朝上
    g.save();
    g.translate(112, 70);
    g.rotate(0.62);
    g.beginPath();
    g.moveTo(-38, -28); g.lineTo(16, -34); g.lineTo(40, -14); g.lineTo(38, 18);
    g.lineTo(10, 32); g.lineTo(-36, 26); g.closePath();
    g.fillStyle = decorVShade(g, -34, 32, "#4e5044", "#1e211a");
    g.fill();
    g.strokeStyle = "rgba(6, 8, 6, 0.82)";
    g.lineWidth = 2.6;
    g.stroke();
    // 掀翻后露出的底框与铆钉
    g.fillStyle = "rgba(8, 10, 8, 0.55)";
    g.beginPath();
    g.moveTo(-30, -20); g.lineTo(10, -26); g.lineTo(28, -10); g.lineTo(-26, 14);
    g.closePath();
    g.fill();
    for (var rivet = 0; rivet < 5; rivet += 1) {
      g.fillStyle = "#0d0f0c";
      g.beginPath();
      g.arc(-26 + rivet * 14, 20 - rivet * 3, 2.4, 0, Math.PI * 2);
      g.fill();
    }
    // 连着炮楼的半截炮管，歪着插进土里
    g.beginPath();
    g.moveTo(34, -12); g.lineTo(88, -6); g.lineTo(92, 8); g.lineTo(34, 10);
    g.closePath();
    g.fillStyle = decorVShade(g, -12, 10, "#2b2d26", "#101210");
    g.fill();
    g.strokeStyle = "rgba(6, 8, 6, 0.75)";
    g.lineWidth = 2;
    g.stroke();
    g.restore();

    // ---- 另一截断炮管：掉在左后方
    g.save();
    g.translate(-58, 118);
    g.rotate(-0.36);
    g.beginPath();
    g.moveTo(-46, -11); g.lineTo(30, -13); g.lineTo(52, -6); g.lineTo(50, 9); g.lineTo(28, 13); g.lineTo(-46, 11);
    g.closePath();
    g.fillStyle = decorVShade(g, -13, 13, "#2e302a", "#121412");
    g.fill();
    g.strokeStyle = "rgba(6, 8, 6, 0.7)";
    g.lineWidth = 2;
    g.stroke();
    // 炮口制退器
    g.fillStyle = "#1b1d18";
    g.fillRect(-56, -14, 14, 28);
    g.strokeStyle = "rgba(150, 146, 124, 0.2)";
    g.lineWidth = 1.6;
    g.strokeRect(-56, -14, 14, 28);
    // 断口
    g.strokeStyle = "rgba(206, 202, 176, 0.28)";
    g.lineWidth = 2.2;
    g.beginPath();
    g.moveTo(30, -13); g.lineTo(46, -8); g.lineTo(48, 6); g.lineTo(30, 13);
    g.stroke();
    g.restore();

    // ---- 崩出来的碎块
    for (var chunk = 0; chunk < 9; chunk += 1) {
      var chunkAngle = random() * Math.PI * 2;
      var chunkRadius = R * (0.75 + random() * 0.55);
      var chunkSize = 4 + random() * 7;
      g.save();
      g.translate(Math.cos(chunkAngle) * chunkRadius, Math.sin(chunkAngle) * chunkRadius * 0.95);
      g.rotate(random() * Math.PI);
      g.fillStyle = decorVShade(g, -chunkSize, chunkSize, "#35372e", "#161813");
      g.fillRect(-chunkSize, -chunkSize * 0.55, chunkSize * 2, chunkSize * 1.1);
      g.restore();
    }

    // ---- 灰烬
    for (var ash = 0; ash < 30; ash += 1) {
      var ashAngle = random() * Math.PI * 2;
      var ashRadius = R * (0.2 + random() * 1.1);
      g.fillStyle = "rgba(196, 190, 170, " + (0.06 + random() * 0.14).toFixed(3) + ")";
      g.fillRect(Math.cos(ashAngle) * ashRadius, Math.sin(ashAngle) * ashRadius * 0.95,
        1.4 + random() * 2, 1.4 + random() * 2);
    }

    // ---- 外圈螺栓：炸掉了几颗
    for (var bolt = 0; bolt < 16; bolt += 1) {
      if (bolt % 5 === 2) { continue; }
      var boltAngle = Math.PI / 8 + bolt * Math.PI / 8;
      g.fillStyle = "#0c0e0b";
      g.beginPath();
      g.arc(Math.cos(boltAngle) * R * 0.87, Math.sin(boltAngle) * R * 0.87 * 0.94, 3.2, 0, Math.PI * 2);
      g.fill();
    }

    sprite.embers = [
      { x: 0, y: 2, r: 34 },
      { x: 112, y: 70, r: 16 },
      { x: -58, y: 118, r: 12 }
    ];
    sprite.glow = buildEmberGlow(sprite.embers);
    // 火焰落点：座圈洞里 + 掀翻的炮楼，别从基座正中冒一股
    sprite.fireSpots = [
      { x: 4, y: 0, r: 1 },
      { x: 108, y: 66, r: 0.7 }
    ];
  }

  function getTurretWreckSprite() {
    if (turretWreckSprite) { return turretWreckSprite; }
    var sprite = makeHardwareSprite(paintTurretWreck, 0x2C1B7F45);
    if (!sprite) { return null; }
    turretWreckSprite = sprite;
    return sprite;
  }

  // ---- 固定炮台：八边形装甲基座 + 可旋转炮塔（+x 是炮口方向）
  function paintTurretBase(g, random) {
    var radius = TURRET_BASE_RADIUS;
    function octagon(grow) {
      g.beginPath();
      for (var corner = 0; corner < 8; corner += 1) {
        var angle = Math.PI / 8 + corner * Math.PI / 4;
        var r = radius + (grow || 0);
        var px = Math.cos(angle) * r;
        var py = Math.sin(angle) * r;
        if (corner === 0) { g.moveTo(px, py); } else { g.lineTo(px, py); }
      }
      g.closePath();
    }

    // 座圈外的一圈焦土/阴影，让基座「坐」进地面
    var rim = g.createRadialGradient(0, 4, radius * 0.7, 0, 4, radius + 34);
    rim.addColorStop(0, "rgba(8, 10, 8, 0.5)");
    rim.addColorStop(1, "rgba(8, 10, 8, 0)");
    g.fillStyle = rim;
    g.beginPath();
    g.arc(0, 4, radius + 34, 0, Math.PI * 2);
    g.fill();

    octagon(10);
    g.fillStyle = "#0d0f0c";
    g.fill();

    octagon(0);
    g.fillStyle = decorVShade(g, -radius, radius, "#7d7f65", "#3c4033");
    g.fill();

    g.save();
    octagon(0);
    g.clip();
    // 西北受光
    g.fillStyle = "rgba(214, 210, 178, 0.12)";
    g.beginPath();
    g.moveTo(-radius, -radius * 0.5);
    g.lineTo(-radius * 0.2, -radius);
    g.lineTo(radius * 0.7, -radius * 0.55);
    g.lineTo(-radius * 0.1, -radius * 0.1);
    g.closePath();
    g.fill();
    // 南侧落暗
    g.fillStyle = "rgba(6, 8, 6, 0.34)";
    g.beginPath();
    g.moveTo(-radius, radius * 0.4);
    g.lineTo(0, radius);
    g.lineTo(radius, radius * 0.45);
    g.lineTo(radius, radius);
    g.lineTo(-radius, radius);
    g.closePath();
    g.fill();
    // 锈迹：从铆钉往下淌
    for (var streak = 0; streak < 5; streak += 1) {
      var streakX = (random() - 0.5) * radius * 1.5;
      var streakTop = radius * (0.1 + random() * 0.5);
      var rust = g.createLinearGradient(0, streakTop, 0, streakTop + 34 + random() * 26);
      rust.addColorStop(0, "rgba(104, 66, 38, 0.3)");
      rust.addColorStop(1, "rgba(104, 66, 38, 0)");
      g.fillStyle = rust;
      g.fillRect(streakX, streakTop, 2 + random() * 3, 60);
    }
    // 顶面被踩踏/熏黑的痕迹
    g.fillStyle = "rgba(10, 12, 10, 0.2)";
    g.beginPath();
    g.ellipse(radius * 0.34, radius * 0.18, radius * 0.5, radius * 0.36, 0.6, 0, Math.PI * 2);
    g.fill();
    g.restore();

    // 内圈斜角：上沿提亮、下沿压暗，做出厚度
    octagon(-16);
    g.strokeStyle = "rgba(222, 218, 184, 0.16)";
    g.lineWidth = 3;
    g.stroke();
    octagon(-19);
    g.strokeStyle = "rgba(6, 8, 6, 0.4)";
    g.lineWidth = 2.4;
    g.stroke();

    // 座圈（炮塔转盘）
    g.beginPath();
    g.arc(0, 0, radius * 0.56, 0, Math.PI * 2);
    g.fillStyle = decorVShade(g, -radius * 0.56, radius * 0.56, "#575945", "#2b2f26");
    g.fill();
    g.strokeStyle = "rgba(8, 10, 8, 0.6)";
    g.lineWidth = 3;
    g.stroke();
    g.beginPath();
    g.arc(0, 0, radius * 0.48, 0, Math.PI * 2);
    g.strokeStyle = "rgba(214, 210, 178, 0.1)";
    g.lineWidth = 1.6;
    g.stroke();

    // 外圈铆钉
    for (var bolt = 0; bolt < 16; bolt += 1) {
      var boltAngle = bolt * Math.PI / 8;
      var boltRadius = radius * 0.86;
      var bx = Math.cos(boltAngle) * boltRadius;
      var by = Math.sin(boltAngle) * boltRadius;
      g.fillStyle = "#0e100e";
      g.beginPath();
      g.arc(bx, by, 3.4, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = "rgba(222, 218, 184, 0.22)";
      g.beginPath();
      g.arc(bx - 0.8, by - 0.9, 1.5, 0, Math.PI * 2);
      g.fill();
    }
    // 螺栓连成的加强筋
    g.strokeStyle = "rgba(10, 12, 10, 0.3)";
    g.lineWidth = 1.4;
    g.beginPath();
    g.arc(0, 0, radius * 0.86, 0, Math.PI * 2);
    g.stroke();
    g.strokeStyle = "rgba(206, 202, 172, 0.08)";
    g.beginPath();
    g.arc(0, 0, radius * 0.86 - 3, 0, Math.PI * 2);
    g.stroke();

    // 侧面的检修门 + 一段线缆
    g.save();
    g.translate(-radius * 0.62, radius * 0.28);
    g.rotate(-0.3);
    g.fillStyle = "#3c3e33";
    g.fillRect(-13, -9, 26, 18);
    g.strokeStyle = "rgba(8, 10, 8, 0.7)";
    g.lineWidth = 1.8;
    g.strokeRect(-13, -9, 26, 18);
    g.fillStyle = "rgba(214, 210, 178, 0.16)";
    g.fillRect(-11, -7, 22, 2);
    g.restore();
    g.strokeStyle = "rgba(12, 14, 12, 0.55)";
    g.lineWidth = 2.2;
    g.beginPath();
    g.moveTo(-radius * 0.55, radius * 0.42);
    g.quadraticCurveTo(-radius * 0.3, radius * 0.62, -radius * 0.02, radius * 0.5);
    g.stroke();

    // 灰土
    for (var speck = 0; speck < 40; speck += 1) {
      var speckAngle = random() * Math.PI * 2;
      var speckRadius = radius * (0.35 + random() * 0.62);
      g.fillStyle = "rgba(198, 192, 166, " + (0.04 + random() * 0.1).toFixed(3) + ")";
      g.fillRect(Math.cos(speckAngle) * speckRadius, Math.sin(speckAngle) * speckRadius, 1.4 + random() * 2, 1.4 + random() * 2);
    }
  }

  function paintTurretGun(g, random) {
    // 炮塔本体（后方圆角、前方接防盾）
    g.beginPath();
    g.moveTo(-74, -30); g.lineTo(-52, -46); g.lineTo(24, -44); g.lineTo(54, -26);
    g.lineTo(58, 26); g.lineTo(24, 44); g.lineTo(-52, 44); g.lineTo(-74, 28);
    g.closePath();
    g.fillStyle = decorVShade(g, -46, 46, "#71735b", "#33362b");
    g.fill();
    g.strokeStyle = "rgba(8, 10, 8, 0.72)";
    g.lineWidth = 2.6;
    g.stroke();

    g.save();
    g.beginPath();
    g.moveTo(-74, -30); g.lineTo(-52, -46); g.lineTo(24, -44); g.lineTo(54, -26);
    g.lineTo(58, 26); g.lineTo(24, 44); g.lineTo(-52, 44); g.lineTo(-74, 28);
    g.closePath();
    g.clip();
    // 顶面受光
    g.fillStyle = "rgba(216, 212, 180, 0.14)";
    g.beginPath();
    g.moveTo(-70, -30); g.lineTo(-50, -43); g.lineTo(20, -41); g.lineTo(10, -6); g.lineTo(-68, -4);
    g.closePath();
    g.fill();
    // 南侧落暗
    g.fillStyle = "rgba(6, 8, 6, 0.3)";
    g.beginPath();
    g.moveTo(-70, 16); g.lineTo(50, 14); g.lineTo(56, 26); g.lineTo(24, 44); g.lineTo(-52, 44); g.lineTo(-74, 28);
    g.closePath();
    g.fill();
    g.restore();

    // 炮塔顶盖 + 舱盖
    g.fillStyle = "#43463a";
    g.beginPath();
    g.ellipse(-24, -2, 26, 22, 0, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = "rgba(8, 10, 8, 0.6)";
    g.lineWidth = 2;
    g.stroke();
    g.fillStyle = "rgba(216, 212, 180, 0.14)";
    g.beginPath();
    g.ellipse(-26, -6, 18, 14, 0, 0, Math.PI * 2);
    g.fill();
    // 观察窗
    g.fillStyle = "#0b0d0b";
    g.fillRect(12, -22, 26, 7);
    g.fillStyle = "rgba(96, 190, 210, 0.22)";
    g.fillRect(13, -21, 24, 3);

    // 防盾
    g.beginPath();
    g.moveTo(52, -30); g.lineTo(70, -22); g.lineTo(70, 22); g.lineTo(52, 30);
    g.closePath();
    g.fillStyle = decorVShade(g, -30, 30, "#5c5e4a", "#2b2e25");
    g.fill();
    g.strokeStyle = "rgba(8, 10, 8, 0.7)";
    g.lineWidth = 2.2;
    g.stroke();

    // 炮管：圆柱受光 + 炮口制退器
    var barrel = g.createLinearGradient(0, -12, 0, 12);
    barrel.addColorStop(0, "#7d7f66");
    barrel.addColorStop(0.42, "#5a5c49");
    barrel.addColorStop(1, "#232620");
    g.fillStyle = barrel;
    g.fillRect(66, -11, TURRET_BARREL_TIP - 96, 22);
    g.strokeStyle = "rgba(8, 10, 8, 0.72)";
    g.lineWidth = 2;
    g.strokeRect(66, -11, TURRET_BARREL_TIP - 96, 22);
    g.fillStyle = "#20231d";
    g.fillRect(TURRET_BARREL_TIP - 26, -15, 20, 30);
    g.strokeRect(TURRET_BARREL_TIP - 26, -15, 20, 30);
    g.fillStyle = "#07090a";
    g.beginPath();
    g.ellipse(TURRET_BARREL_TIP - 7, 0, 5, 9, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(216, 212, 180, 0.16)";
    g.fillRect(68, -9, TURRET_BARREL_TIP - 100, 2.4);

    // 铆钉与编号
    for (var bolt = 0; bolt < 7; bolt += 1) {
      var boltX = -60 + bolt * 17;
      g.fillStyle = "#0d0f0d";
      g.beginPath();
      g.arc(boltX, 34, 2.6, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = "rgba(216, 212, 180, 0.2)";
      g.beginPath();
      g.arc(boltX - 0.7, 33.2, 1.1, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = "rgba(206, 198, 168, 0.3)";
    g.font = "700 18px Consolas, monospace";
    g.fillText("07", -56, 6);

    // 锈斑
    for (var patch = 0; patch < 6; patch += 1) {
      g.fillStyle = "rgba(112, 72, 40, " + (0.08 + random() * 0.12).toFixed(3) + ")";
      g.beginPath();
      g.ellipse(-40 + random() * 90, -30 + random() * 60, 5 + random() * 9, 3 + random() * 6, random() * 3, 0, Math.PI * 2);
      g.fill();
    }
  }

  function getTurretSprites() {
    if (turretSprites) { return turretSprites; }
    var base = makeHardwareSprite(paintTurretBase, 0x2F8A11C3);
    var gun = makeHardwareSprite(paintTurretGun, 0x7B1D4E55);
    if (!base || !gun) { return null; }
    turretSprites = { base: base, gun: gun };
    return turretSprites;
  }

  B.wreckVariantCount = WRECK_VARIANTS;
  B.turretArt = { scale: HARDWARE_SCALE, baseRadius: TURRET_BASE_RADIUS, barrelTip: TURRET_BARREL_TIP };
  // 给预览/测试用：已经生成过的遗骸与炮台贴图
  B.hardwareSprites = function () {
    return { wrecks: wreckSprites, turret: turretSprites, turretWreck: turretWreckSprite };
  };

  // ---------------------------------------------------------------- 火焰
  // 分层火舌 + 炽光底焰 + 烟柱 + 飞散火星，全部在**屏幕像素**空间里画。
  // 火是竖直物体，2.5D 下必须抵消相机压扁，这一步由 B.drawFire 负责。
  // options: { size, intensity, seed, alpha, smoke, time }
  function paintFire(context, options) {
    var opts = options || {};
    var size = opts.size || 34;
    var intensity = opts.intensity === undefined ? 1 : opts.intensity;
    var seed = opts.seed || 0;
    var alpha = opts.alpha === undefined ? 1 : opts.alpha;
    var smoke = opts.smoke === undefined ? 1 : opts.smoke;
    if (intensity <= 0.02 || alpha <= 0.01 || size <= 1) { return; }
    var time = opts.time === undefined ? nowSeconds() : opts.time;

    // 抖动：两组不同周期的正弦叠加，才不会像在「呼吸」
    var jitter = 1 + Math.sin(time * 11.3 + seed) * 0.055 + Math.sin(time * 6.1 + seed * 1.7) * 0.045;
    // 偶尔窜一下：大部分时间平稳，隔一两秒突然旺一把
    var flareWave = Math.sin(time * 1.9 + seed * 2.3);
    var flare = flareWave > 0.7 ? Math.pow((flareWave - 0.7) / 0.3, 2) : 0;
    var boost = jitter * (0.35 + intensity * 0.78) * (1 + flare * 0.5);
    var baseWidth = size * boost;
    var baseHeight = size * 2.6 * boost;

    context.save();
    context.globalAlpha = alpha;

    // 1) 烟柱：画在火后面，越往上越大越淡
    if (smoke > 0) {
      context.globalCompositeOperation = "source-over";
      for (var puff = 0; puff < 3; puff += 1) {
        var puffPhase = fract(time * 0.24 + puff * 0.31 + seed * 0.17);
        var puffY = -baseHeight * (0.55 + puffPhase * 1.35);
        var puffX = Math.sin(time * 0.8 + puff * 2.1 + seed) * baseWidth * (0.3 + puffPhase * 0.45);
        var puffRadius = baseWidth * (0.5 + puffPhase * 0.9);
        context.globalAlpha = alpha * smoke * 0.24 * (1 - puffPhase) * Math.min(1, puffPhase * 5);
        var puffGradient = context.createRadialGradient(puffX, puffY, puffRadius * 0.15, puffX, puffY, puffRadius);
        puffGradient.addColorStop(0, "rgba(38, 32, 27, 0.9)");
        puffGradient.addColorStop(1, "rgba(26, 22, 19, 0)");
        context.fillStyle = puffGradient;
        context.beginPath();
        context.arc(puffX, puffY, puffRadius, 0, Math.PI * 2);
        context.fill();
      }
    }

    // 2) 炽光底焰：把火根和残骸焊在一起，否则火像浮在空中。
    // 压扁成椭圆（不是正圆），因为火根贴着的是一块躺在地上的车体。
    context.globalAlpha = alpha;
    context.globalCompositeOperation = "lighter";
    var bedRadius = baseWidth * 1.02;
    context.save();
    context.translate(0, -baseWidth * 0.06);
    context.scale(1, 0.62);
    var bed = context.createRadialGradient(0, 0, 0, 0, 0, bedRadius);
    bed.addColorStop(0, "rgba(255, 226, 150, 0.76)");
    bed.addColorStop(0.42, "rgba(255, 128, 34, 0.32)");
    bed.addColorStop(1, "rgba(255, 96, 20, 0)");
    context.fillStyle = bed;
    context.beginPath();
    context.arc(0, 0, bedRadius, 0, Math.PI * 2);
    context.fill();
    context.restore();

    // 3) 三层火舌：外层暗红给体积、中层橙黄、内层近白。
    // 每条火舌的**根部高度沿椭圆分布**（中间最低、两侧往上收），底部再补一段圆弧，
    // 所以火底是圆润的一圈，而不是一条笔直的水平线。
    var layers = [
      { bottom: "rgba(196, 34, 8, 0.72)", top: "rgba(255, 78, 12, 0)", height: 1, width: 1, composite: "source-over" },
      { bottom: "rgba(255, 122, 20, 0.85)", top: "rgba(255, 168, 46, 0)", height: 0.78, width: 0.74, composite: "lighter" },
      { bottom: "rgba(255, 236, 170, 0.9)", top: "rgba(255, 248, 214, 0)", height: 0.46, width: 0.44, composite: "lighter" }
    ];
    var spread = opts.spread === undefined ? baseWidth * 0.34 : opts.spread;
    var offsets = [-0.62, -0.33, -0.04, 0.27, 0.6];
    for (var layer = 0; layer < layers.length; layer += 1) {
      var spec = layers[layer];
      var layerHeight = baseHeight * spec.height;
      context.globalCompositeOperation = spec.composite;
      for (var tongue = 0; tongue < offsets.length; tongue += 1) {
        var offset = offsets[tongue] * baseWidth * 0.68;
        var sway = Math.sin(time * (3.1 + tongue * 0.73) + seed + tongue * 1.9) * baseWidth * 0.15;
        var variance = fract(Math.sin((seed + tongue * 3.7 + layer * 11.3) * 127.1) * 43758.5453);
        var height = layerHeight * (0.58 + variance * 0.52) *
          (0.9 + Math.sin(time * 13.7 + tongue * 2.3 + seed) * 0.12);
        var width = baseWidth * spec.width * (0.44 + variance * 0.2);
        // 根部沿椭圆抬升：中间的火舌最低（火从残骸正中冒出来），越靠边上的起点越高，
        // 火底于是收成一道弧形，而不是一条笔直的水平线。
        var edge = offsets[tongue] / 0.62;   // 归一化到最外侧那条，两端正好到 ±1
        var baseY = -spread * (1 - Math.sqrt(Math.max(0, 1 - edge * edge))) -
          variance * baseWidth * 0.06;
        var gradient = context.createLinearGradient(0, baseY, 0, baseY - height);
        gradient.addColorStop(0, spec.bottom);
        gradient.addColorStop(1, spec.top);
        context.fillStyle = gradient;
        context.beginPath();
        context.moveTo(offset - width * 0.5, baseY);
        context.quadraticCurveTo(offset - width * 0.58, baseY - height * 0.46, offset + sway, baseY - height);
        context.quadraticCurveTo(offset + width * 0.56, baseY - height * 0.52, offset + width * 0.5, baseY);
        // 圆底：向下兜一个浅弧，盖掉「一刀切」的直边
        context.quadraticCurveTo(offset, baseY + width * 0.34, offset - width * 0.5, baseY);
        context.closePath();
        context.fill();
      }
    }

    // 4) 飘离火体的火舌：火「往上窜」的观感主要来自这一层
    context.globalCompositeOperation = "lighter";
    for (var lick = 0; lick < 4; lick += 1) {
      var lickPhase = fract(time * (0.75 + lick * 0.11) + lick * 0.41 + seed * 0.29);
      var lickY = -baseHeight * (0.72 + lickPhase * 0.9);
      var lickX = Math.sin(lickPhase * 4.4 + lick * 2.3 + seed) * baseWidth * 0.52;
      var lickHeight = baseHeight * 0.3 * (1 - lickPhase * 0.55);
      var lickWidth = baseWidth * 0.21 * (1 - lickPhase * 0.4);
      context.globalAlpha = alpha * (1 - lickPhase) * 0.8;
      var lickGradient = context.createLinearGradient(0, lickY, 0, lickY - lickHeight);
      lickGradient.addColorStop(0, "rgba(255, 186, 72, 0.92)");
      lickGradient.addColorStop(1, "rgba(255, 92, 20, 0)");
      context.fillStyle = lickGradient;
      context.beginPath();
      context.moveTo(lickX - lickWidth, lickY);
      context.quadraticCurveTo(lickX - lickWidth * 0.8, lickY - lickHeight * 0.5, lickX, lickY - lickHeight);
      context.quadraticCurveTo(lickX + lickWidth * 0.8, lickY - lickHeight * 0.5, lickX + lickWidth, lickY);
      context.closePath();
      context.fill();
    }

    // 5) 火星：向上飞、越飞越淡
    context.globalCompositeOperation = "lighter";
    for (var spark = 0; spark < 10; spark += 1) {
      var phase = fract(time * (0.6 + (spark % 3) * 0.16) + spark * 0.29 + seed * 0.63);
      var sparkY = -baseHeight * (0.3 + phase * 1.45);
      var sparkX = Math.sin(phase * 5.2 + spark * 1.7 + seed) * baseWidth * (0.18 + phase * 0.6);
      context.globalAlpha = alpha * (1 - phase) * 0.9;
      context.fillStyle = phase < 0.4 ? "#fff3c0" : "#ff9a2e";
      context.beginPath();
      context.arc(sparkX, sparkY, Math.max(0.9, baseWidth * 0.05) * (1 - phase * 0.55), 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }

  // 世界坐标里的火焰入口：自己抵消 2.5D 的纵向压扁
  B.drawFire = function (context, x, y, options) {
    if (!context) { return false; }
    var view = TankGame.View;
    var pitched = Boolean(view && view.isPitched());
    context.save();
    context.translate(x, y);
    if (pitched) { context.scale(1, 1 / view.k); }
    paintFire(context, options);
    context.restore();
    return true;
  };
  B.paintFire = paintFire;

  // 遗骸：地面焦土跟着地面压扁，车体是立牌（2.5D 下反拉伸 + 侧壁挤出）。
  // options: { life, fadeTime, alpha, scale, variant, particles, burn }
  B.drawWreck = function (context, wreck, options) {
    if (!wreck || !context) { return false; }
    if (!ensure(context)) { return false; }
    var opts = options || {};
    var view = TankGame.View;
    var pitched = Boolean(view && view.isPitched());
    var k = pitched ? view.k : 1;
    var lift = view && view.lift ? view.lift : 0;
    var isTurretWreck = opts.kind === "turret" || Boolean(wreck.isTurret);
    var scale = opts.scale || (wreck.visualScale || 1) * HARDWARE_SCALE;
    var life = typeof opts.life === "number" ? opts.life : 3;
    var fadeTime = typeof opts.fadeTime === "number" ? opts.fadeTime : 0.6;
    var alpha = (typeof opts.alpha === "number" ? opts.alpha : 1) *
      Math.min(1, Math.max(0, life / Math.max(0.05, fadeTime)));
    if (alpha <= 0.004) { return true; }
    var angle = typeof wreck.bodyAngle === "number" ? wreck.bodyAngle :
      (isTurretWreck ? 0 : (wreck.angle || 0));
    var variant = typeof opts.variant === "number" ? opts.variant :
      Math.abs(Math.floor(wreck.x * 0.037 + wreck.y * 0.019)) % WRECK_VARIANTS;
    var sprite = isTurretWreck ? getTurretWreckSprite() : getWreckSprite(variant);
    if (!sprite) { return false; }
    var groundY = wreck.y;
    var anchorY = groundY - lift;
    var sizeRatio = scale / HARDWARE_SCALE;
    var now = nowSeconds() * 1000;

    // 1) 地面焦土：世界坐标里画圆，投影后自然就是椭圆
    context.save();
    context.globalAlpha = alpha * 0.92;
    var scorchRadius = (isTurretWreck ? 84 : 64) * sizeRatio;
    var scorch = context.createRadialGradient(wreck.x, groundY, scorchRadius * 0.15, wreck.x, groundY, scorchRadius);
    scorch.addColorStop(0, "rgba(9, 8, 6, 0.7)");
    scorch.addColorStop(0.55, "rgba(11, 10, 8, 0.32)");
    scorch.addColorStop(1, "rgba(11, 10, 8, 0)");
    context.fillStyle = scorch;
    context.beginPath();
    context.arc(wreck.x, groundY, scorchRadius, 0, Math.PI * 2);
    context.fill();
    context.restore();

    // 2) 侧壁：在旋转之前加屏幕 y 偏移，厚度才不会跟着车体转
    var side = pitched ? hardwareSide(sprite, sprite.canvas) : null;
    if (side) {
      for (var step = 3; step >= 0; step -= 1) {
        context.save();
        context.globalAlpha = alpha;
        context.translate(wreck.x, anchorY + (step + 1) * 2.4 * sizeRatio);
        context.scale(1, 1 / k);
        context.rotate(angle);
        context.scale(scale, scale);
        context.drawImage(side, -256, -256);
        context.restore();
      }
    }

    // 3) 车体 + 余烬 + 火星
    context.save();
    context.globalAlpha = alpha;
    context.translate(wreck.x, anchorY);
    if (pitched) { context.scale(1, 1 / k); }
    context.rotate(angle);
    context.scale(scale, scale);
    context.drawImage(sprite.canvas, -256, -256);
    if (sprite.glow) {
      var pulse = 0.5 + Math.sin(now / 260) * 0.22 + Math.sin(now / 97) * 0.08;
      context.globalCompositeOperation = "lighter";
      context.globalAlpha = alpha * Math.max(0, pulse);
      context.drawImage(sprite.glow, -256, -256);
      context.globalCompositeOperation = "source-over";
      context.globalAlpha = alpha;
    }
    var particles = opts.particles || wreck.wreckParticles;
    if (particles && particles.length) {
      context.globalCompositeOperation = "lighter";
      for (var index = 0; index < particles.length; index += 1) {
        var particle = particles[index];
        var time = now * particle.speed;
        var flicker = 0.5 + Math.sin(particle.phase + time / 90) * 0.42;
        var rise = Math.abs(Math.sin(particle.phase + time / 160)) * particle.rise;
        var sway = Math.sin(particle.phase * 1.7 + time / 120) * particle.sway;
        var size = particle.size * (0.78 + Math.abs(Math.sin(particle.phase + time / 110)) * 0.42);
        context.globalAlpha = alpha * Math.max(0, flicker) * 0.85;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x + sway, particle.y - rise, size * 0.5, 0, Math.PI * 2);
        context.fill();
      }
    }
    context.restore();

    // 4) 火：刚炸毁时最猛，之后一路衰到只剩焦壳。
    // 火苗从贴图里预设的几个落点冒出来（车体中部 + 侧后方），不是一根火柱插在正中，
    // 这样火底能贴着残骸的轮廓，不会出现一条平直的底边。
    var burn = typeof opts.burn === "number" ? opts.burn : Math.min(1, Math.max(0, life / 2.2));
    if (burn > 0.04) {
      var spots = sprite.fireSpots || [{ x: 0, y: 0, r: 1 }];
      var cosAngle = Math.cos(angle);
      var sinAngle = Math.sin(angle);
      var mainSize = (isTurretWreck ? 40 : 30) * sizeRatio;
      for (var spotIndex = 0; spotIndex < spots.length; spotIndex += 1) {
        var spot = spots[spotIndex];
        var spotX = (spot.x * cosAngle - spot.y * sinAngle) * scale;
        var spotY = (spot.x * sinAngle + spot.y * cosAngle) * scale / k;
        B.drawFire(context, wreck.x + spotX, anchorY + spotY, {
          size: mainSize * spot.r,
          intensity: burn * (spotIndex === 0 ? 1 : 0.85),
          seed: variant * 5.7 + spotIndex * 2.3 + (wreck.x * 0.013 + wreck.y * 0.007) % 6.28,
          alpha: alpha * Math.min(1, burn * 3),
          smoke: spotIndex === 0 ? 0.9 : 0.3,
          spread: mainSize * spot.r * 0.32
        });
      }
    }
    return true;
  };

  // 固定炮台：基座坐进地面（2.5D 抬到基座底沿贴地），炮塔单独按 turretAngle 转。
  B.drawFixedTurret = function (context, tank, drawY) {
    if (!tank || !context) { return false; }
    if (!ensure(context)) { return false; }
    var sprites = getTurretSprites();
    if (!sprites) { return false; }
    var view = TankGame.View;
    var pitched = Boolean(view && view.isPitched());
    var k = pitched ? view.k : 1;
    var lift = view && view.lift ? view.lift : 0;
    var scale = (tank.visualScale || 1) * HARDWARE_SCALE;
    var groundY = drawY + (pitched ? lift : 0);
    var half = TURRET_BASE_RADIUS * scale;
    var anchorY = pitched ? groundY - (half - 2) : groundY;

    // 接地投影（跟着地面压扁）
    context.save();
    context.globalAlpha = 0.4;
    context.fillStyle = "#070907";
    context.beginPath();
    context.ellipse(tank.x + 3, groundY + 2, half * 1.1, half * 1.1, 0, 0, Math.PI * 2);
    context.fill();
    context.restore();

    var side = pitched ? hardwareSide(sprites.base, sprites.base.canvas) : null;
    if (side) {
      for (var step = 3; step >= 0; step -= 1) {
        context.save();
        context.translate(tank.x, anchorY + (step + 1) * 2.6);
        context.scale(1, 1 / k);
        context.scale(scale, scale);
        context.drawImage(side, -256, -256);
        context.restore();
      }
    }

    context.save();
    context.translate(tank.x, anchorY);
    if (pitched) { context.scale(1, 1 / k); }
    context.scale(scale, scale);
    hardwareFilter(context, tank);
    context.drawImage(sprites.base.canvas, -256, -256);
    context.restore();

    context.save();
    context.translate(tank.x, anchorY);
    if (pitched) { context.scale(1, 1 / k); }
    // 炮塔坐在座圈上，稍微抬一点做出高度
    context.translate(0, -6);
    context.rotate(tank.turretAngle || 0);
    context.scale(scale, scale);
    hardwareFilter(context, tank);
    context.drawImage(sprites.gun.canvas, -256, -256);
    context.restore();
    return true;
  };

  TankGame.Battlefield = B;
}());
