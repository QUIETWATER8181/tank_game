(function () {
  "use strict";

  window.TankGame = window.TankGame || {};

  var MAX_PARTICLES = 900;
  var GLOW_SIZE = 64;
  var glowCache = {};

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function parseColor(color) {
    if (typeof color !== "string") { return { r: 255, g: 255, b: 255 }; }
    var text = color.trim();
    if (text.charAt(0) === "#") {
      var hex = text.slice(1);
      if (hex.length === 3) {
        return {
          r: parseInt(hex.charAt(0) + hex.charAt(0), 16),
          g: parseInt(hex.charAt(1) + hex.charAt(1), 16),
          b: parseInt(hex.charAt(2) + hex.charAt(2), 16)
        };
      }
      return {
        r: parseInt(hex.slice(0, 2), 16) || 0,
        g: parseInt(hex.slice(2, 4), 16) || 0,
        b: parseInt(hex.slice(4, 6), 16) || 0
      };
    }
    var match = /rgba?\(([^)]+)\)/.exec(text);
    if (match) {
      var parts = match[1].split(",");
      return {
        r: parseFloat(parts[0]) || 0,
        g: parseFloat(parts[1]) || 0,
        b: parseFloat(parts[2]) || 0
      };
    }
    return { r: 255, g: 255, b: 255 };
  }

  function rgbaOf(rgb, alpha) {
    return "rgba(" + Math.round(rgb.r) + "," + Math.round(rgb.g) + "," + Math.round(rgb.b) + "," + alpha + ")";
  }

  // 软光斑贴图：同一颜色只画一次，之后所有粒子复用，避免每帧建渐变
  function getGlow(color, soft) {
    var key = color + (soft ? "|soft" : "|core");
    if (Object.prototype.hasOwnProperty.call(glowCache, key)) {
      return glowCache[key];
    }
    var canvas = document.createElement("canvas");
    canvas.width = GLOW_SIZE;
    canvas.height = GLOW_SIZE;
    var context = canvas.getContext ? canvas.getContext("2d") : null;
    if (!context) {
      glowCache[key] = null;
      return null;
    }
    var rgb = parseColor(color);
    var center = GLOW_SIZE / 2;
    var gradient = context.createRadialGradient(center, center, 0, center, center, center);
    if (soft) {
      gradient.addColorStop(0, rgbaOf(rgb, 0.5));
      gradient.addColorStop(0.42, rgbaOf(rgb, 0.26));
      gradient.addColorStop(1, rgbaOf(rgb, 0));
    } else {
      gradient.addColorStop(0, rgbaOf(rgb, 1));
      gradient.addColorStop(0.32, rgbaOf(rgb, 0.82));
      gradient.addColorStop(0.7, rgbaOf(rgb, 0.22));
      gradient.addColorStop(1, rgbaOf(rgb, 0));
    }
    context.fillStyle = gradient;
    context.fillRect(0, 0, GLOW_SIZE, GLOW_SIZE);
    glowCache[key] = canvas;
    return canvas;
  }

  // 按颜色判断这团东西该是火、能量还是尘
  function classify(rgb) {
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var saturation = max === 0 ? 0 : (max - min) / max;
    var warm = rgb.r >= rgb.b + 24;
    if (max < 120) { return "dust"; }
    if (warm && saturation > 0.14) { return "fire"; }
    if (!warm && saturation > 0.14) { return "energy"; }
    return "dust";
  }

  function clampParticleCount(list) {
    if (list.length > MAX_PARTICLES) {
      list.splice(0, list.length - MAX_PARTICLES);
    }
  }

  window.TankGame.Effects = {
    particles: [],

    reset: function () {
      this.particles.length = 0;
    },

    // 兼容旧签名：burst(x, y, 颜色, 数量, 速度)
    // 颜色决定形态——暖色出火与余烬，冷色出能量火星，灰暗色出尘土。
    burst: function (x, y, color, count, speed, options) {
      var total = Math.max(1, Math.round(count || 1));
      var velocity = speed || 140;
      var rgb = parseColor(color);
      var kind = classify(rgb);
      var scale = (options && options.scale) || 1;

      if (kind === "fire") {
        this.emitFire(x, y, color, total, velocity, scale);
      } else if (kind === "energy") {
        this.emitEnergy(x, y, color, total, velocity, scale);
      } else {
        this.emitDust(x, y, color, total, velocity, scale);
      }
      clampParticleCount(this.particles);
    },

    emitFire: function (x, y, color, total, velocity, scale) {
      var fireCount = Math.max(1, Math.round(total * 0.62));
      var sparkCount = Math.max(0, Math.round(total * 0.24));
      var smokeCount = Math.max(0, Math.round(total * 0.14));
      var index;

      for (index = 0; index < fireCount; index += 1) {
        var angle = Math.random() * Math.PI * 2;
        var power = velocity * randomRange(0.2, 0.85);
        this.particles.push({
          kind: "fire",
          x: x + Math.cos(angle) * randomRange(0, 6 * scale),
          y: y + Math.sin(angle) * randomRange(0, 6 * scale),
          vx: Math.cos(angle) * power,
          vy: Math.sin(angle) * power - randomRange(4, 26),
          life: randomRange(0.18, 0.42) * (0.7 + scale * 0.3),
          maxLife: 0.42,
          size: randomRange(5, 11) * scale,
          sizeEnd: randomRange(13, 26) * scale,
          color: color,
          drag: 0.9,
          gravity: -22
        });
      }

      for (index = 0; index < sparkCount; index += 1) {
        var sparkAngle = Math.random() * Math.PI * 2;
        var sparkPower = velocity * randomRange(0.8, 1.7);
        this.particles.push({
          kind: "spark",
          x: x,
          y: y,
          vx: Math.cos(sparkAngle) * sparkPower,
          vy: Math.sin(sparkAngle) * sparkPower,
          life: randomRange(0.22, 0.55),
          maxLife: 0.55,
          size: randomRange(1.6, 3.4) * scale,
          sizeEnd: 0.6,
          color: "#ffd9a0",
          drag: 0.94,
          gravity: 240
        });
      }

      for (index = 0; index < smokeCount; index += 1) {
        this.particles.push({
          kind: "smoke",
          x: x + randomRange(-8, 8) * scale,
          y: y + randomRange(-8, 8) * scale,
          vx: randomRange(-26, 26),
          vy: randomRange(-34, -8),
          life: randomRange(0.6, 1.15),
          maxLife: 1.15,
          size: randomRange(10, 18) * scale,
          sizeEnd: randomRange(30, 52) * scale,
          color: "#3c3a38",
          drag: 0.9,
          gravity: -16
        });
      }
    },

    emitEnergy: function (x, y, color, total, velocity, scale) {
      var sparkCount = Math.max(1, Math.round(total * 0.55));
      var coreCount = Math.max(1, total - sparkCount);
      var index;

      for (index = 0; index < sparkCount; index += 1) {
        var angle = Math.random() * Math.PI * 2;
        var power = velocity * randomRange(0.6, 1.5);
        this.particles.push({
          kind: "spark",
          x: x,
          y: y,
          vx: Math.cos(angle) * power,
          vy: Math.sin(angle) * power,
          life: randomRange(0.18, 0.46),
          maxLife: 0.46,
          size: randomRange(1.4, 3) * scale,
          sizeEnd: 0.5,
          color: color,
          drag: 0.92,
          gravity: 90
        });
      }

      for (index = 0; index < coreCount; index += 1) {
        var coreAngle = Math.random() * Math.PI * 2;
        var corePower = velocity * randomRange(0.1, 0.5);
        this.particles.push({
          kind: "fire",
          x: x,
          y: y,
          vx: Math.cos(coreAngle) * corePower,
          vy: Math.sin(coreAngle) * corePower,
          life: randomRange(0.14, 0.34),
          maxLife: 0.34,
          size: randomRange(6, 12) * scale,
          sizeEnd: randomRange(14, 26) * scale,
          color: color,
          drag: 0.88,
          gravity: 0
        });
      }
    },

    emitDust: function (x, y, color, total, velocity, scale) {
      for (var index = 0; index < total; index += 1) {
        var angle = Math.random() * Math.PI * 2;
        var power = velocity * randomRange(0.15, 0.7);
        this.particles.push({
          kind: "smoke",
          x: x + Math.cos(angle) * randomRange(0, 5),
          y: y + Math.sin(angle) * randomRange(0, 5),
          vx: Math.cos(angle) * power,
          vy: Math.sin(angle) * power - randomRange(0, 14),
          life: randomRange(0.3, 0.7),
          maxLife: 0.7,
          size: randomRange(5, 11) * scale,
          sizeEnd: randomRange(16, 30) * scale,
          color: color,
          drag: 0.9,
          gravity: -8
        });
      }
    },

    // 炮口焰：一小团亮光 + 沿炮管方向喷出的锥形火星 + 一缕淡烟
    muzzle: function (x, y, angle, color, scale) {
      var size = scale || 1;
      var index;
      this.particles.push({
        kind: "fire",
        x: x,
        y: y,
        vx: Math.cos(angle) * 30,
        vy: Math.sin(angle) * 30,
        life: 0.13,
        maxLife: 0.13,
        size: 10 * size,
        sizeEnd: 24 * size,
        color: color,
        drag: 0.8,
        gravity: 0
      });
      for (index = 0; index < 10; index += 1) {
        var spread = randomRange(-0.34, 0.34);
        var speed = randomRange(170, 330) * size;
        this.particles.push({
          kind: "spark",
          x: x,
          y: y,
          vx: Math.cos(angle + spread) * speed,
          vy: Math.sin(angle + spread) * speed,
          life: randomRange(0.08, 0.2),
          maxLife: 0.2,
          size: randomRange(1.2, 2.4),
          sizeEnd: 0.4,
          color: color,
          drag: 0.9,
          gravity: 40
        });
      }
      this.particles.push({
        kind: "smoke",
        x: x,
        y: y,
        vx: Math.cos(angle) * 60,
        vy: Math.sin(angle) * 60,
        life: 0.32,
        maxLife: 0.32,
        size: 4 * size,
        sizeEnd: 16 * size,
        color: "#6a635a",
        drag: 0.88,
        gravity: -14
      });
      clampParticleCount(this.particles);
    },

    // 冲击波圆环
    ring: function (x, y, color, radius, life) {
      this.particles.push({
        kind: "ring",
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        life: life || 0.32,
        maxLife: life || 0.32,
        size: radius || 12,
        sizeEnd: (radius || 12) * 3.2,
        color: color || "#ffd9a0",
        drag: 1,
        gravity: 0
      });
      clampParticleCount(this.particles);
    },

    // 碎块：带旋转和重力，落地前会翻滚
    debris: function (x, y, count, scale) {
      var total = Math.max(1, Math.round(count || 5));
      for (var index = 0; index < total; index += 1) {
        var angle = Math.random() * Math.PI * 2;
        var power = randomRange(70, 230) * (scale || 1);
        this.particles.push({
          kind: "debris",
          x: x,
          y: y,
          vx: Math.cos(angle) * power,
          vy: Math.sin(angle) * power,
          life: randomRange(0.5, 0.95),
          maxLife: 0.95,
          size: randomRange(2.5, 5.5) * (scale || 1),
          sizeEnd: randomRange(1.5, 3) * (scale || 1),
          color: "#4a443c",
          drag: 0.93,
          gravity: 520,
          angle: Math.random() * Math.PI,
          spin: randomRange(-14, 14)
        });
      }
      clampParticleCount(this.particles);
    },

    update: function (deltaTime) {
      var particles = this.particles;
      for (var index = particles.length - 1; index >= 0; index -= 1) {
        var particle = particles[index];
        particle.life -= deltaTime;
        if (particle.life <= 0) {
          particles.splice(index, 1);
          continue;
        }
        particle.x += particle.vx * deltaTime;
        particle.y += particle.vy * deltaTime;
        particle.vy += particle.gravity * deltaTime;
        var damping = Math.pow(particle.drag, deltaTime * 60);
        particle.vx *= damping;
        particle.vy *= damping;
        particle.size += (particle.sizeEnd - particle.size) * Math.min(1, deltaTime * 7);
        if (particle.spin) {
          particle.angle = (particle.angle || 0) + particle.spin * deltaTime;
        }
      }
    },

    draw: function (context) {
      var particles = this.particles;
      if (!particles.length) { return; }
      var index;
      var particle;

      // 第一遍：加色混合的火光、火星、冲击波
      context.save();
      context.globalCompositeOperation = "lighter";
      for (index = 0; index < particles.length; index += 1) {
        particle = particles[index];
        var progress = particle.life / particle.maxLife;
        if (particle.kind === "spark") {
          context.globalAlpha = Math.min(1, progress * 2.2);
          context.strokeStyle = particle.color;
          context.lineWidth = Math.max(1.5, particle.size * 0.85);
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(particle.x - particle.vx * 0.03, particle.y - particle.vy * 0.03);
          context.stroke();
        } else if (particle.kind === "ring") {
          context.globalAlpha = progress * 0.45;
          context.strokeStyle = particle.color;
          context.lineWidth = 1.5 + 7 * (1 - progress);
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.stroke();
        } else if (particle.kind === "fire") {
          var core = getGlow(particle.color, false);
          if (!core) { continue; }
          context.globalAlpha = Math.min(1, progress * 1.7);
          context.drawImage(core, particle.x - particle.size, particle.y - particle.size,
            particle.size * 2, particle.size * 2);
        }
      }
      context.restore();

      // 第二遍：正常混合的烟尘与碎块
      context.save();
      for (index = 0; index < particles.length; index += 1) {
        particle = particles[index];
        var smokeProgress = particle.life / particle.maxLife;
        if (particle.kind === "smoke") {
          var puff = getGlow(particle.color, true);
          if (!puff) { continue; }
          context.globalAlpha = Math.min(0.85, smokeProgress * 0.75);
          context.drawImage(puff, particle.x - particle.size, particle.y - particle.size,
            particle.size * 2, particle.size * 2);
        } else if (particle.kind === "debris") {
          context.globalAlpha = Math.min(1, smokeProgress * 2);
          context.fillStyle = particle.color;
          context.save();
          context.translate(particle.x, particle.y);
          context.rotate(particle.angle || 0);
          context.fillRect(-particle.size, -particle.size * 0.6, particle.size * 2, particle.size * 1.2);
          context.restore();
        }
      }
      context.restore();
    }
  };
}());
