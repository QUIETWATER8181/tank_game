(function () {
  "use strict";

  // 渲染质量与内部分辨率。
  //
  // 逻辑坐标始终是 Config.viewportWidth × Config.viewportHeight（1440×900）；
  // 需要降分辨率时只改 canvas 的 backing store，再由 CSS 拉伸回 1440×900。
  // 所有游戏内绘制仍然按 1440×900 写，Game.render 会在最外层套一个 renderScale。
  var TankGame = window.TankGame = window.TankGame || {};
  var Config = TankGame.Config || {};

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function readQuery() {
    var query = {};
    try {
      var search = String(window.location.search || "").replace(/^\?/, "");
      search.split("&").forEach(function (pair) {
        if (!pair) { return; }
        var index = pair.indexOf("=");
        var key = index === -1 ? pair : pair.slice(0, index);
        var value = index === -1 ? "" : pair.slice(index + 1);
        query[decodeURIComponent(key)] = decodeURIComponent(value);
      });
    } catch (error) {
      return query;
    }
    return query;
  }

  var params = readQuery();
  var initialScale = 1;
  if (params.scale) {
    var requested = parseFloat(params.scale);
    if (isFinite(requested)) { initialScale = clamp(requested, 0.6, 1); }
  }
  var lowQuality = params.quality === "low";
  if (lowQuality) { initialScale = Math.min(initialScale, 0.8); }

  var Quality = {
    renderScale: initialScale,
    minScale: 0.65,
    maxScale: 1,
    low: lowQuality,
    dynamic: params.dynamic === "1",
    canvas: null,
    lastAdjust: 0,
    sampleStart: 0,
    sampleFrames: 0,
    sampleCost: 0,
    warmupUntil: 0,

    init: function (canvas) {
      this.canvas = canvas;
      this.warmupUntil = (typeof performance !== "undefined" ? performance.now() : Date.now()) + 2500;
      this.apply();
    },

    apply: function () {
      if (!this.canvas) { return; }
      var width = Config.viewportWidth || 1440;
      var height = Config.viewportHeight || 900;
      var targetWidth = Math.max(1, Math.round(width * this.renderScale));
      var targetHeight = Math.max(1, Math.round(height * this.renderScale));
      if (this.canvas.width !== targetWidth || this.canvas.height !== targetHeight) {
        this.canvas.width = targetWidth;
        this.canvas.height = targetHeight;
      }
    },

    setScale: function (scale) {
      var next = Math.round(clamp(Number(scale) || 1, this.minScale, this.maxScale) * 100) / 100;
      if (Math.abs(next - this.renderScale) < 0.001) { return; }
      this.renderScale = next;
      this.apply();
    },

    // 只在 ?dynamic=1 时启用：连续 1 秒平均超过 20ms 降一档，低于 12ms 再慢慢升回去。
    sample: function (frameCost, now) {
      if (!this.dynamic) { return; }
      var stamp = Number(now) || 0;
      if (stamp < this.warmupUntil) { return; }
      if (!this.sampleStart) {
        this.sampleStart = stamp;
        this.sampleFrames = 0;
        this.sampleCost = 0;
      }
      this.sampleFrames += 1;
      this.sampleCost += Number(frameCost) || 0;
      if (stamp - this.sampleStart < 1000) { return; }

      var average = this.sampleCost / Math.max(1, this.sampleFrames);
      this.sampleStart = stamp;
      this.sampleFrames = 0;
      this.sampleCost = 0;
      if (stamp - this.lastAdjust < 1800) { return; }

      if (average > 20 && this.renderScale > this.minScale) {
        this.setScale(this.renderScale - 0.1);
        this.lastAdjust = stamp;
      } else if (average < 12 && this.renderScale < this.maxScale) {
        this.setScale(this.renderScale + 0.05);
        this.lastAdjust = stamp;
      }
    }
  };

  TankGame.Quality = Quality;
}());
