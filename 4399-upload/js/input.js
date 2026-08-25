(function () {
  "use strict";

  window.TankGame = window.TankGame || {};

  function InputManager(canvas) {
    this.canvas = canvas;
    this.keys = Object.create(null);
    this.pointer = { x: 0, y: 0, down: false, pressed: false, inside: false };
    this.camera = { x: 0, y: 0 };
    this.bindEvents();
  }

  InputManager.prototype.bindEvents = function () {
    var self = this;

    window.addEventListener("keydown", function (event) {
      self.keys[event.code] = true;
      if (["KeyW", "KeyA", "KeyS", "KeyD", "Space"].indexOf(event.code) !== -1) {
        event.preventDefault();
      }
    });

    window.addEventListener("keyup", function (event) {
      self.keys[event.code] = false;
    });

    this.canvas.addEventListener("pointermove", function (event) {
      var point = self.toWorldPoint(event.clientX, event.clientY);
      self.pointer.x = point.x;
      self.pointer.y = point.y;
      self.pointer.inside = true;
    });

    this.canvas.addEventListener("pointerdown", function (event) {
      var point;
      if (event.button === 0) {
        point = self.toWorldPoint(event.clientX, event.clientY);
        self.pointer.x = point.x;
        self.pointer.y = point.y;
        self.pointer.inside = true;
        self.pointer.down = true;
        self.pointer.pressed = true;
      }
      self.canvas.focus();
    });

    window.addEventListener("pointerup", function () {
      self.pointer.down = false;
    });

    this.canvas.addEventListener("pointerleave", function () {
      self.pointer.inside = false;
    });
  };

  InputManager.prototype.toWorldPoint = function (clientX, clientY) {
    var bounds = this.canvas.getBoundingClientRect();
    if (!bounds.width || !bounds.height) {
      return { x: this.camera.x + this.canvas.width / 2, y: this.camera.y + this.canvas.height / 2 };
    }
    return {
      x: this.camera.x + Math.max(0, Math.min(this.canvas.width, (clientX - bounds.left) * (this.canvas.width / bounds.width))),
      y: this.camera.y + Math.max(0, Math.min(this.canvas.height, (clientY - bounds.top) * (this.canvas.height / bounds.height)))
    };
  };

  InputManager.prototype.setCamera = function (x, y) {
    this.camera.x = Number.isFinite(x) ? x : 0;
    this.camera.y = Number.isFinite(y) ? y : 0;
  };

  InputManager.prototype.isDown = function (code) {
    return Boolean(this.keys[code]);
  };

  InputManager.prototype.reset = function () {
    this.keys = Object.create(null);
    this.pointer.down = false;
    this.pointer.pressed = false;
  };

  window.TankGame.InputManager = InputManager;
}());
