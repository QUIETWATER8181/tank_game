(function () {
  "use strict";

  window.TankGame = window.TankGame || {};
  window.TankGame.Collision = {
    clamp: function (value, minimum, maximum) {
      return Math.max(minimum, Math.min(maximum, value));
    },

    circleIntersectsRectangle: function (circle, rectangle) {
      var x = this.clamp(circle.x, rectangle.x, rectangle.x + rectangle.width);
      var y = this.clamp(circle.y, rectangle.y, rectangle.y + rectangle.height);
      var dx = circle.x - x;
      var dy = circle.y - y;
      return dx * dx + dy * dy <= circle.radius * circle.radius;
    },

    segmentIntersectsRectangle: function (x1, y1, x2, y2, rectangle, padding) {
      var minX = rectangle.x - padding;
      var minY = rectangle.y - padding;
      var maxX = rectangle.x + rectangle.width + padding;
      var maxY = rectangle.y + rectangle.height + padding;
      var dx = x2 - x1;
      var dy = y2 - y1;
      var t0 = 0;
      var t1 = 1;
      var edges = [[-dx, x1 - minX], [dx, maxX - x1], [-dy, y1 - minY], [dy, maxY - y1]];

      for (var i = 0; i < edges.length; i += 1) {
        var p = edges[i][0];
        var q = edges[i][1];
        if (p === 0 && q < 0) { return false; }
        if (p !== 0) {
          var ratio = q / p;
          if (p < 0) {
            if (ratio > t1) { return false; }
            if (ratio > t0) { t0 = ratio; }
          } else {
            if (ratio < t0) { return false; }
            if (ratio < t1) { t1 = ratio; }
          }
        }
      }
      return true;
    },

    segmentIntersectsCircle: function (x1, y1, x2, y2, circle, padding) {
      var dx = x2 - x1;
      var dy = y2 - y1;
      var lengthSquared = dx * dx + dy * dy;
      var t = lengthSquared === 0 ? 0 : ((circle.x - x1) * dx + (circle.y - y1) * dy) / lengthSquared;
      t = this.clamp(t, 0, 1);
      var closestX = x1 + dx * t;
      var closestY = y1 + dy * t;
      var distanceX = circle.x - closestX;
      var distanceY = circle.y - closestY;
      var radius = circle.radius + padding;
      return distanceX * distanceX + distanceY * distanceY <= radius * radius;
    },

    tankCollidesWithWreck: function (tank, wrecks) {
      return (wrecks || []).some(function (wreck) {
        if (!wreck.wreck) { return false; }
        var dx = tank.x - wreck.x;
        var dy = tank.y - wreck.y;
        var minimumDistance = tank.radius + wreck.radius;
        return dx * dx + dy * dy < minimumDistance * minimumDistance;
      });
    }
  };
}());
