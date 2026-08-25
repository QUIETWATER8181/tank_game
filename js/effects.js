(function () {
  "use strict";

  window.TankGame = window.TankGame || {};
  window.TankGame.Effects = {
    particles: [],

    reset: function () {
      this.particles.length = 0;
    },

    burst: function (x, y, color, count, speed) {
      for (var i = 0; i < count; i += 1) {
        var angle = Math.random() * Math.PI * 2;
        var velocity = speed * (0.45 + Math.random() * 0.7);
        this.particles.push({
          x: x, y: y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 0.24 + Math.random() * 0.3,
          maxLife: 0.54,
          radius: 2 + Math.random() * 3,
          color: color
        });
      }
    },

    update: function (deltaTime) {
      this.particles.forEach(function (particle) {
        particle.life -= deltaTime;
        particle.x += particle.vx * deltaTime;
        particle.y += particle.vy * deltaTime;
        particle.vx *= 0.94;
        particle.vy *= 0.94;
      });
      this.particles = this.particles.filter(function (particle) { return particle.life > 0; });
    },

    draw: function (context) {
      this.particles.forEach(function (particle) {
        context.save();
        context.globalAlpha = Math.max(0, particle.life / particle.maxLife);
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
      });
    }
  };
}());
