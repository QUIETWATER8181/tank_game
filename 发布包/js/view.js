(function () {
  "use strict";

  window.TankGame = window.TankGame || {};

  // 视角：0 = 平铺（原版），>0 = 斜俯视（相机俯仰，地面按 cos(pitch) 压扁）。
  // 开关走 URL 参数 ?pitch=50，并记进 localStorage，刷新后保持。
  var STORAGE_KEY = "tankGameViewPitch";
  var MAX_PITCH = 65;
  // 默认 2.5D 斜俯视；?pitch=off 或点右上角 ◈ 可切回原版平铺。
  var DEFAULT_PITCH = 48;
  // 坦克在斜视下的屏幕抬升量（像素）；地面接触点保持在原位置，抬起来的部分就是车身高度。
  var TANK_LIFT_PX = 16;

  function readParam(name) {
    try {
      var search = String(window.location.search || "").replace(/^\?/, "");
      var pairs = search.split("&");
      for (var i = 0; i < pairs.length; i += 1) {
        if (!pairs[i]) { continue; }
        var eq = pairs[i].indexOf("=");
        var key = decodeURIComponent(eq < 0 ? pairs[i] : pairs[i].slice(0, eq));
        if (key !== name) { continue; }
        return decodeURIComponent(eq < 0 ? "" : pairs[i].slice(eq + 1));
      }
    } catch (error) {
      return null;
    }
    return null;
  }

  function readStored() {
    try {
      var raw = window.localStorage ? window.localStorage.getItem(STORAGE_KEY) : null;
      return raw === null || raw === "" ? null : Number(raw);
    } catch (error) {
      return null;
    }
  }

  function writeStored(value) {
    try {
      if (window.localStorage) { window.localStorage.setItem(STORAGE_KEY, String(value)); }
    } catch (error) {
      /* 隐私模式下写不进去就算了 */
    }
  }

  var View = {
    pitchDeg: 0,
    k: 1,
    lift: 0,
    tankLiftPx: TANK_LIFT_PX,
    // 过场动画自带镜头，渲染期间临时压制俯仰，避免两套投影叠加
    suppressPitch: false,

    setPitch: function (degrees, persist) {
      var value = Number(degrees);
      if (!isFinite(value) || value < 0) { value = 0; }
      if (value > MAX_PITCH) { value = MAX_PITCH; }
      this.pitchDeg = value;
      this.k = value > 0.5 ? Math.cos(value * Math.PI / 180) : 1;
      this.lift = value > 0.5 ? TANK_LIFT_PX / this.k : 0;
      if (persist !== false) { writeStored(value); }
      return this;
    },

    isPitched: function () {
      return !this.suppressPitch && this.k < 0.999;
    },

    // 在 2.5D 与原版平铺之间切换；返回切换后是否处于 2.5D。
    toggle: function () {
      this.setPitch(this.k < 0.999 ? 0 : DEFAULT_PITCH);
      return this.isPitched();
    },

    defaultPitch: DEFAULT_PITCH,

    // 世界 y 偏移 → 屏幕 y 偏移
    toScreenY: function (worldDelta) {
      return worldDelta * this.k;
    },

    // 屏幕 y 偏移 → 世界 y 偏移（逆投影，给鼠标瞄准用）
    toWorldY: function (screenDelta) {
      return this.k > 0 ? screenDelta / this.k : screenDelta;
    },

    // 斜视下可见的世界高度（比视口高，用来算相机夹紧和绘制范围）
    visibleWorldHeight: function (viewportHeight) {
      return viewportHeight / (this.k > 0 ? this.k : 1);
    }
  };

  var paramPitch = readParam("pitch");
  if (paramPitch === null || paramPitch === "") {
    var stored = readStored();
    View.setPitch(stored === null ? DEFAULT_PITCH : stored, false);
  } else if (paramPitch === "off" || paramPitch === "0") {
    View.setPitch(0);
  } else {
    View.setPitch(paramPitch);
  }

  TankGame.View = View;
}());
