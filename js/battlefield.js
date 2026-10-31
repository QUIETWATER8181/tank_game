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
    var cells = worldMap && worldMap.cells;
    var line = cells && cells[row];
    if (!line) { return false; }
    return Boolean(line[column] && SOLID[line[column]]);
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

  B.drawObstacle = function (ctx, obstacle, worldMap) {
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
    var facade = screenHeight / Math.max(0.25, k);
    var x = obstacle.x;
    var y = obstacle.y;
    var size = TILE;
    var pattern = B.patterns.wall[obstacle.kind] || B.patterns.wall["#"];

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
    if (!solidAt(worldMap, obstacle.column, obstacle.row + 1)) {
      ctx.moveTo(x, y + size);
      ctx.lineTo(x + size, y + size);
    }
    if (!solidAt(worldMap, obstacle.column - 1, obstacle.row)) {
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + size);
    }
    if (!solidAt(worldMap, obstacle.column + 1, obstacle.row)) {
      ctx.moveTo(x + size, y);
      ctx.lineTo(x + size, y + size);
    }
    ctx.stroke();
    ctx.restore();

    // 朝南立面
    if (!solidAt(worldMap, obstacle.column, obstacle.row + 1)) {
      var faceY = y + size - facade;
      ctx.save();
      ctx.beginPath();
      ctx.rect(x, faceY, size + 0.6, facade);
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
      // 暴露的左右边缘压暗
      ctx.fillStyle = "rgba(12, 14, 12, 0.26)";
      if (!solidAt(worldMap, obstacle.column - 1, obstacle.row)) { ctx.fillRect(x, faceY, 2, facade); }
      if (!solidAt(worldMap, obstacle.column + 1, obstacle.row)) { ctx.fillRect(x + size - 2, faceY, 2, facade); }
      ctx.restore();

      // 墙脚草：压在墙面上，墙就不会像一块浮在草地上的贴纸
      var fringe = B.sprites.fringe[(obstacle.column * 7 + obstacle.row * 13) % B.sprites.fringe.length];
      if (fringe) {
        ctx.globalAlpha = 0.78;
        ctx.drawImage(fringe, x - 10, y + size - 16, size + 20, 30);
        ctx.globalAlpha = 1;
      }
    }
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

  B.drawAtmosphere = function (ctx, width, height) {
    if (!ensure(ctx)) { return; }
    var now = B.now || nowSeconds();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);

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

  TankGame.Battlefield = B;
}());
