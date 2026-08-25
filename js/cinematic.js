(function () {
  "use strict";

  var TankGame = window.TankGame = window.TankGame || {};

  function clamp01(value) {
    return Math.max(0, Math.min(1, value));
  }

  function mix(start, end, progress) {
    return start + (end - start) * progress;
  }

  function smooth(progress) {
    progress = clamp01(progress);
    return progress * progress * progress * (progress * (progress * 6 - 15) + 10);
  }

  function segment(time, start, end) {
    return smooth((time - start) / (end - start));
  }

  // Coordinates are kept on the old 640x320 leader canvas so the cinematic
  // camera and drop anchor remain unchanged after the vector redraw.
  var LEADER_SPRITE = {
    mainRotorX: 286,
    mainRotorY: 152,
    tailRotorX: 543,
    tailRotorY: 158
  };

  function BossCinematic(game, boss) {
    this.game = game;
    this.boss = boss;
    this.time = 0;
    this.duration = 16.9;
    this.helicopterImage = new Image();
    this.helicopterImage.src = "assets/images/cinematic/helicopter-body.png";
    this.leaderImage = new Image();
    this.leaderImage.src = "assets/images/cinematic/helicopter-leader-body-symmetric.png";
  }

  BossCinematic.prototype.update = function (deltaTime) {
    this.time = Math.min(this.duration, this.time + Math.max(0, deltaTime || 0));
    return this.time >= this.duration;
  };

  BossCinematic.prototype.getDisplayTime = function () {
    return Math.min(this.duration, this.time + Math.max(0, this.renderOffset || 0));
  };

  BossCinematic.prototype.getLeaderPosition = function () {
    var time = this.getDisplayTime();
    var worldWidth = TankGame.Config.worldWidth;
    var arena = this.game.worldMap.bossArena;
    var centerX = arena.centerX;
    var centerY = arena.centerY;
    var x;
    var hover = Math.sin(time * 3.4) * 7;
    if (time < 2.7) {
      x = worldWidth + 520;
    } else if (time < 8.3) {
      x = mix(worldWidth + 520, centerX, segment(time, 2.7, 8.3));
    } else if (time < 9.9) {
      x = centerX;
    } else if (time < 13.1) {
      x = mix(centerX, -540, segment(time, 9.9, 13.1));
    } else {
      x = -540;
    }
    return { x: x, y: centerY + hover };
  };

  BossCinematic.prototype.getAltitudeScale = function () {
    var time = this.getDisplayTime();
    if (time < 7) { return 0.9; }
    if (time < 8.3) { return mix(0.9, 0.78, segment(time, 7, 8.3)); }
    if (time < 9.9) { return 0.78; }
    if (time < 10.9) { return mix(0.78, 0.9, segment(time, 9.9, 10.9)); }
    return 0.9;
  };

  BossCinematic.prototype.getCameraView = function () {
    var time = this.getDisplayTime();
    var Config = TankGame.Config;
    var leader = this.getLeaderPosition();
    var arena = this.game.worldMap.bossArena;
    var player = this.game.player;
    var mapCenter = { x: Config.worldWidth / 2, y: Config.worldHeight / 2 };
    var overviewZoom = Math.min(Config.viewportWidth / Config.worldWidth, Config.viewportHeight / Config.worldHeight) * 0.96;
    var focusX;
    var focusY;
    var zoom;
    var progress;
    if (time < 0.35) {
      focusX = player.x;
      focusY = player.y;
      zoom = 1.7;
    } else if (time < 2.5) {
      progress = segment(time, 0.35, 2.5);
      focusX = mix(player.x, mapCenter.x, progress);
      focusY = mix(player.y, mapCenter.y, progress);
      zoom = mix(1.7, overviewZoom, progress);
    } else if (time < 2.7) {
      focusX = mapCenter.x;
      focusY = mapCenter.y;
      zoom = overviewZoom;
    } else if (time < 4) {
      progress = segment(time, 2.7, 4);
      focusX = mix(mapCenter.x, leader.x, progress);
      focusY = mix(mapCenter.y, leader.y, progress);
      zoom = mix(overviewZoom, 1.05, progress);
    } else if (time < 13.1) {
      focusX = leader.x;
      focusY = leader.y;
      zoom = 1.05;
    } else if (time < 15.7) {
      focusX = arena.centerX;
      focusY = arena.centerY;
      zoom = 1.05;
    } else {
      progress = segment(time, 15.7, this.duration);
      focusX = mix(arena.centerX, player.x, progress);
      focusY = mix(arena.centerY, player.y, progress);
      zoom = mix(1.05, 1, progress);
    }
    return { focusX: focusX, focusY: focusY, zoom: zoom };
  };

  BossCinematic.prototype.getBounds = function (margin) {
    var Config = TankGame.Config;
    var view = this.getCameraView();
    var halfWidth = Config.viewportWidth / (2 * view.zoom);
    var halfHeight = Config.viewportHeight / (2 * view.zoom);
    margin = margin || 0;
    return {
      left: view.focusX - halfWidth - margin,
      top: view.focusY - halfHeight - margin,
      right: view.focusX + halfWidth + margin,
      bottom: view.focusY + halfHeight + margin
    };
  };

  BossCinematic.prototype.getBossDrop = function () {
    var time = this.getDisplayTime();
    var arena = this.game.worldMap.bossArena;
    var progress;
    if (time < 8.3) { return null; }
    if (time >= 9.9) {
      return { x: arena.centerX, y: arena.centerY, scale: 1, alpha: 1, progress: 1 };
    }
    progress = segment(time, 8.3, 9.9);
    return {
      x: arena.centerX,
      y: arena.centerY + mix(82, 0, progress),
      scale: mix(0.72, 1, progress),
      alpha: clamp01(progress * 1.7),
      progress: progress
    };
  };

  BossCinematic.prototype.drawBoss = function (context) {
    var drop = this.getBossDrop();
    var boss = this.boss;
    var originalX;
    var originalY;
    var originalScale;
    if (!drop || !boss || !boss.alive) { return; }
    originalX = boss.x;
    originalY = boss.y;
    originalScale = boss.visualScale || 1;
    context.save();
    context.globalAlpha = drop.alpha;
    context.fillStyle = "rgba(0, 0, 0, " + (0.12 + drop.progress * 0.34) + ")";
    context.beginPath();
    context.ellipse(drop.x + mix(54, 8, drop.progress), drop.y + mix(42, 18, drop.progress), mix(50, 34, drop.progress), mix(21, 14, drop.progress), 0, 0, Math.PI * 2);
    context.fill();
    boss.x = drop.x;
    boss.y = drop.y;
    boss.visualScale = originalScale * drop.scale;
    TankGame.Entities.drawTank(context, boss);
    boss.x = originalX;
    boss.y = originalY;
    boss.visualScale = originalScale;
    context.restore();
  };

  BossCinematic.prototype.drawRotor = function (context, radius, width, angle, opacity) {
    context.save();
    context.rotate(angle);
    for (var blade = 0; blade < 4; blade += 1) {
      context.save();
      context.rotate(blade * Math.PI / 2);
      context.fillStyle = "rgba(22, 28, 29, " + opacity + ")";
      context.strokeStyle = "rgba(159, 176, 173, " + opacity * 0.58 + ")";
      context.lineWidth = 2;
      context.beginPath();
      context.roundRect(22, -width / 2, radius - 22, width, width / 2);
      context.fill();
      context.stroke();
      context.restore();
    }
    context.restore();
  };

  BossCinematic.prototype.drawTailRotor = function (context, angle, centerX, centerY) {
    context.save();
    context.translate(typeof centerX === "number" ? centerX : 378, typeof centerY === "number" ? centerY : 0);
    context.fillStyle = "#202829";
    context.beginPath();
    context.arc(0, 0, 12, 0, Math.PI * 2);
    context.fill();
    // The Apache tail rotor turns in a vertical plane; from above it is a narrow disk.
    context.scale(1, 0.18);
    this.drawRotor(context, 68, 10, angle, 0.82);
    context.restore();
  };

  BossCinematic.prototype.drawLeaderBody = function (context) {
    var bodyGradient;
    var glassGradient;
    if (this.leaderImage.complete && this.leaderImage.naturalWidth > 0) {
      context.save();
      context.globalAlpha = 0.98;
      context.drawImage(this.leaderImage, -LEADER_SPRITE.mainRotorX, -LEADER_SPRITE.mainRotorY, 640, 320);
      context.restore();
      return true;
    }
    context.save();
    context.translate(10, 6);
    context.fillStyle = "rgba(4, 8, 8, 0.3)";
    context.beginPath();
    context.ellipse(-54, 8, 142, 43, -0.03, 0, Math.PI * 2);
    context.fill();

    bodyGradient = context.createLinearGradient(-155, -30, 110, 35);
    bodyGradient.addColorStop(0, "#4a5551");
    bodyGradient.addColorStop(0.48, "#273230");
    bodyGradient.addColorStop(1, "#121a19");
    context.fillStyle = bodyGradient;
    context.strokeStyle = "#9aa9a2";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(-176, 0);
    context.lineTo(-142, -31);
    context.lineTo(-78, -42);
    context.lineTo(-18, -34);
    context.lineTo(48, -17);
    context.lineTo(112, -9);
    context.lineTo(190, -5);
    context.lineTo(245, -2);
    context.lineTo(245, 12);
    context.lineTo(180, 15);
    context.lineTo(106, 18);
    context.lineTo(45, 34);
    context.lineTo(-22, 42);
    context.lineTo(-86, 37);
    context.lineTo(-142, 27);
    context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = "#151e1c";
    context.beginPath();
    context.moveTo(-169, 0);
    context.lineTo(-139, -22);
    context.lineTo(-86, -28);
    context.lineTo(-65, 0);
    context.lineTo(-86, 28);
    context.lineTo(-139, 22);
    context.closePath();
    context.fill();
    context.strokeStyle = "#6e7e77";
    context.lineWidth = 2;
    context.stroke();

    glassGradient = context.createLinearGradient(-126, -23, -73, 22);
    glassGradient.addColorStop(0, "#bfd3cb");
    glassGradient.addColorStop(0.42, "#6d817b");
    glassGradient.addColorStop(1, "#263734");
    context.fillStyle = glassGradient;
    context.beginPath();
    context.moveTo(-128, -17);
    context.lineTo(-103, -26);
    context.lineTo(-79, -20);
    context.lineTo(-72, 0);
    context.lineTo(-80, 20);
    context.lineTo(-104, 26);
    context.lineTo(-128, 16);
    context.closePath();
    context.fill();
    context.strokeStyle = "#d5e1db";
    context.lineWidth = 2;
    context.stroke();

    context.strokeStyle = "rgba(203, 219, 211, 0.7)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(-101, -25); context.lineTo(-101, 25);
    context.moveTo(-128, 0); context.lineTo(-73, 0);
    context.stroke();

    context.fillStyle = "#5f6e68";
    context.strokeStyle = "#a7b5ae";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(-54, -38); context.lineTo(23, -35); context.lineTo(48, -17);
    context.lineTo(42, 17); context.lineTo(18, 35); context.lineTo(-55, 38);
    context.lineTo(-71, 0); context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = "#1b2724";
    context.fillRect(-24, -39, 16, 78);
    context.fillRect(26, -25, 8, 50);
    context.fillStyle = "#8d9d95";
    context.fillRect(-18, -34, 5, 68);

    context.fillStyle = "#46534e";
    context.strokeStyle = "#a7b5ae";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(-25, -52); context.lineTo(34, -52); context.lineTo(48, -43);
    context.lineTo(40, -33); context.lineTo(-33, -33); context.closePath();
    context.moveTo(-25, 52); context.lineTo(34, 52); context.lineTo(48, 43);
    context.lineTo(40, 33); context.lineTo(-33, 33); context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = "#202b28";
    context.strokeStyle = "#788881";
    context.lineWidth = 2;
    [[-6, -59], [-6, 51]].forEach(function (pod) {
      context.beginPath();
      context.roundRect(pod[0], pod[1], 82, 8, 4);
      context.fill();
      context.stroke();
    });

    context.strokeStyle = "#121918";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(56, -13); context.lineTo(193, 0); context.lineTo(244, 5);
    context.moveTo(56, 13); context.lineTo(193, 6); context.lineTo(244, 5);
    context.stroke();
    context.fillStyle = "#7f8e87";
    context.fillRect(151, -11, 58, 22);
    context.fillStyle = "#1b2422";
    context.fillRect(168, -8, 37, 16);

    context.fillStyle = "#ff4438";
    context.shadowColor = "#ff4438";
    context.shadowBlur = 12;
    [[-160, 0], [83, -21], [83, 21]].forEach(function (light) {
      context.beginPath();
      context.arc(light[0], light[1], 5, 0, Math.PI * 2);
      context.fill();
    });
    context.shadowBlur = 0;
    context.fillStyle = "#d9e6dd";
    context.beginPath();
    context.arc(-151, 0, 3, 0, Math.PI * 2);
    context.fill();
    context.restore();
    return false;
  };

  BossCinematic.prototype.drawLeaderSurfaceDetails = function (context) {
    var goldGradient;
    context.save();
    context.translate(10, 6);
    // Painted armor accents stay clipped to the leader silhouette.
    context.beginPath();
    context.moveTo(-176, 0);
    context.lineTo(-142, -31);
    context.lineTo(-78, -42);
    context.lineTo(-18, -34);
    context.lineTo(48, -17);
    context.lineTo(112, -9);
    context.lineTo(190, -5);
    context.lineTo(245, -2);
    context.lineTo(245, 12);
    context.lineTo(180, 15);
    context.lineTo(106, 18);
    context.lineTo(45, 34);
    context.lineTo(-22, 42);
    context.lineTo(-86, 37);
    context.lineTo(-142, 27);
    context.closePath();
    context.clip();
    goldGradient = context.createLinearGradient(-120, -48, 120, 48);
    goldGradient.addColorStop(0, "rgba(112, 77, 27, 0.22)");
    goldGradient.addColorStop(0.48, "rgba(216, 164, 67, 0.82)");
    goldGradient.addColorStop(0.57, "rgba(95, 63, 23, 0.58)");
    goldGradient.addColorStop(1, "rgba(128, 87, 29, 0.2)");
    context.strokeStyle = goldGradient;
    context.lineWidth = 7;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(-159, -21); context.lineTo(-94, -34); context.lineTo(-33, -28);
    context.moveTo(-157, 21); context.lineTo(-95, 34); context.lineTo(-32, 28);
    context.moveTo(43, -22); context.lineTo(117, -12); context.lineTo(208, -7);
    context.moveTo(43, 22); context.lineTo(117, 12); context.lineTo(208, 8);
    context.stroke();
    context.strokeStyle = "rgba(247, 204, 106, 0.86)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(-157, -24); context.lineTo(-94, -37); context.lineTo(-30, -31);
    context.moveTo(-157, 24); context.lineTo(-94, 37); context.lineTo(-30, 31);
    context.moveTo(48, -25); context.lineTo(119, -15); context.lineTo(211, -10);
    context.moveTo(48, 25); context.lineTo(119, 15); context.lineTo(211, 11);
    context.stroke();
    context.strokeStyle = "rgba(190, 205, 196, 0.35)";
    context.lineWidth = 2;
    [-118, -83, 61, 92, 127, 164, 201].forEach(function (x, detailIndex) {
      context.beginPath();
      context.moveTo(x, -18 - (detailIndex % 2) * 3);
      context.lineTo(x + 2, 18 + (detailIndex % 2) * 3);
      context.stroke();
    });
    context.fillStyle = "rgba(5, 10, 10, 0.7)";
    [[61, -8, 16, 5], [87, -6, 9, 4], [116, -4, 14, 4], [139, -3, 8, 3]].forEach(function (vent) {
      context.fillRect(vent[0], vent[1], vent[2], vent[3]);
    });
    context.restore();
  };

  BossCinematic.prototype.drawLeaderRotorHub = function (context) {
    var hubGradient = context.createRadialGradient(0, 0, 2, 0, 0, 18);
    hubGradient.addColorStop(0, "#d4b46c");
    hubGradient.addColorStop(0.3, "#7e6b43");
    hubGradient.addColorStop(0.7, "#252d2b");
    hubGradient.addColorStop(1, "#0b1110");
    context.fillStyle = hubGradient;
    context.strokeStyle = "#c9a75a";
    context.lineWidth = 2;
    context.beginPath();
    context.arc(0, 0, 16, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.fillStyle = "#e6c879";
    context.beginPath();
    context.arc(0, 0, 4, 0, Math.PI * 2);
    context.fill();
  };
  BossCinematic.prototype.drawLeaderRotor = function (context, angle) {
    context.save();
    context.rotate(angle);
    this.drawRotor(context, 250, 15, 0, 0.68);
    context.restore();
  };

  BossCinematic.prototype.drawHelicopter = function (context, helicopter, leader) {
    var time = this.getDisplayTime();
    var baseScale = helicopter.scale * (helicopter.leader ? this.getAltitudeScale() : 0.9);
    var shadowOffset = helicopter.leader && time >= 7 && time < 9.9 ? 24 : 58;
    var rotorAngle = time * (helicopter.leader ? 18.5 : 17.2) + helicopter.phase;
    var pulse = 0.55 + Math.sin(time * 8 + helicopter.phase) * 0.35;
    context.save();
    context.translate(helicopter.x + shadowOffset, helicopter.y + shadowOffset * 0.62);
    context.scale(baseScale, baseScale);
    var bodyImage = helicopter.leader ? null : this.helicopterImage;
    context.globalAlpha = 0.18;
    context.fillStyle = "#050807";
    context.beginPath();
    context.ellipse(78, 0, 300, 96, 0, 0, Math.PI * 2);
    context.fill();
    context.globalAlpha = 0.08;
    context.beginPath();
    context.ellipse(78, 0, 330, 112, 0, 0, Math.PI * 2);
    context.fill();
    context.restore();

    if (helicopter.leader && time >= 8.3 && time < 9.9) {
      var drop = this.getBossDrop();
      context.save();
      context.strokeStyle = "rgba(208, 216, 203, 0.72)";
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(leader.x - 34, leader.y + 16);
      context.lineTo(drop.x - 26, drop.y - 14);
      context.moveTo(leader.x + 34, leader.y + 16);
      context.lineTo(drop.x + 26, drop.y - 14);
      context.stroke();
      context.restore();
    }

    context.save();
    context.translate(helicopter.x, helicopter.y);
    context.scale(baseScale, baseScale);
    var leaderImageReady = false;
    if (helicopter.leader) {
      leaderImageReady = this.drawLeaderBody(context);
      if (!leaderImageReady) { this.drawLeaderSurfaceDetails(context); }
    } else if (bodyImage.complete && bodyImage.naturalWidth > 0) {
      context.drawImage(bodyImage, -220, -160);
    } else {
      context.fillStyle = "#303738";
      context.fillRect(-230, -68, 450, 136);
    }
    if (helicopter.leader) {
      this.drawLeaderRotor(context, rotorAngle);
      this.drawLeaderRotorHub(context);
    } else {
      this.drawRotor(context, 252, 18, rotorAngle, 0.66);
    }
    this.drawTailRotor(
      context,
      -rotorAngle * 1.7,
      helicopter.leader ? LEADER_SPRITE.tailRotorX - LEADER_SPRITE.mainRotorX : 378,
      helicopter.leader ? LEADER_SPRITE.tailRotorY - LEADER_SPRITE.mainRotorY : 0
    );
    if (helicopter.leader) {
      context.save();
      context.translate(LEADER_SPRITE.tailRotorX - LEADER_SPRITE.mainRotorX, LEADER_SPRITE.tailRotorY - LEADER_SPRITE.mainRotorY);
      this.drawLeaderRotorHub(context);
      context.restore();
    }
    context.fillStyle = "rgba(255, 54, 45, " + pulse + ")";
    context.shadowColor = "#ff382e";
    context.shadowBlur = 22;
    context.beginPath();
    context.arc(4, -84, 8, 0, Math.PI * 2);
    if (helicopter.leader) {
      context.moveTo(12, 84);
      context.arc(4, 84, 8, 0, Math.PI * 2);
    }
    context.fill();
    context.restore();
  };

  BossCinematic.prototype.drawAircraft = function (context) {
    var time = this.getDisplayTime();
    var leader;
    var aircraft;
    if (time < 2.7 || time >= 13.1) { return; }
    leader = this.getLeaderPosition();
    aircraft = [
      { x: leader.x + 280, y: leader.y - 190, scale: 0.39, phase: 0.8, leader: false },
      { x: leader.x + 280, y: leader.y + 190, scale: 0.39, phase: 1.7, leader: false },
      { x: leader.x, y: leader.y, scale: 0.46, phase: 0, leader: true }
    ];
    aircraft.forEach(function (helicopter) {
      this.drawHelicopter(context, helicopter, leader);
    }, this);
  };

  BossCinematic.prototype.getRotorWashState = function () {
    var time = this.getDisplayTime();
    var intensity;
    var position;
    if (time < 7 || time >= 10.9) { return null; }
    if (time < 8.3) {
      intensity = segment(time, 7, 8.3);
    } else if (time < 9.9) {
      intensity = 1;
    } else {
      intensity = 1 - segment(time, 9.9, 10.9);
    }
    position = time < 9.9 ? this.getLeaderPosition() : this.game.worldMap.bossArena;
    return { x: position.x || position.centerX, y: position.y || position.centerY, intensity: intensity };
  };

  BossCinematic.prototype.drawRotorWash = function (context) {
    var time = this.getDisplayTime();
    var wash = this.getRotorWashState();
    var phase;
    var side;
    var spread;
    var drift;
    var y;
    var alpha;
    var gradient;
    var seed;
    var seedY;
    if (!wash) { return; }
    context.save();
    context.translate(wash.x, wash.y + 30);

    context.save();
    context.scale(1, 0.38);
    gradient = context.createRadialGradient(0, 0, 18, 0, 0, 230);
    gradient.addColorStop(0, "rgba(177, 159, 125, " + (0.12 * wash.intensity) + ")");
    gradient.addColorStop(0.48, "rgba(142, 123, 91, " + (0.16 * wash.intensity) + ")");
    gradient.addColorStop(1, "rgba(109, 94, 70, 0)");
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(0, 0, 230, 0, Math.PI * 2);
    context.fill();
    context.restore();

    for (var cloud = 0; cloud < 6; cloud += 1) {
      seed = (Math.sin((cloud + 1) * 91.73) * 43758.5453) % 1;
      seedY = (Math.sin((cloud + 1) * 47.11) * 24634.6345) % 1;
      context.save();
      context.translate(seed * 155, seedY * 46);
      context.scale(1.2 + (cloud % 3) * 0.22, 0.34 + (cloud % 2) * 0.09);
      gradient = context.createRadialGradient(0, 0, 4, 0, 0, 76 + (cloud % 3) * 17);
      gradient.addColorStop(0, "rgba(184, 162, 122, " + (0.11 * wash.intensity) + ")");
      gradient.addColorStop(0.5, "rgba(139, 119, 86, " + (0.085 * wash.intensity) + ")");
      gradient.addColorStop(1, "rgba(104, 90, 68, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(0, 0, 110, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    for (var wisp = 0; wisp < 5; wisp += 1) {
      side = wisp % 2 === 0 ? -1 : 1;
      phase = (time * 0.19 + wisp * 0.173) % 1;
      spread = 78 + phase * 146;
      alpha = Math.sin(Math.PI * phase) * 0.075 * wash.intensity;
      context.globalAlpha = alpha;
      context.strokeStyle = wisp % 3 === 0 ? "#d2bc91" : "#9f8968";
      context.lineWidth = 7 + phase * 11;
      context.beginPath();
      context.moveTo(side * spread * 0.35, (wisp - 4) * 7);
      context.quadraticCurveTo(side * spread * 0.72, -30 + wisp * 5, side * spread, -8 + wisp * 3);
      context.stroke();
    }

    for (var particle = 0; particle < 32; particle += 1) {
      phase = (time * (0.42 + (particle % 5) * 0.014) + particle * 0.61803398875) % 1;
      seed = (Math.sin((particle + 1) * 12.9898) * 43758.5453) % 1;
      seedY = (Math.sin((particle + 1) * 78.233) * 24634.6345) % 1;
      side = seed < 0 ? -1 : 1;
      spread = 32 + phase * (145 + Math.abs(seed) * 92);
      drift = seed * 38;
      y = seedY * (24 + phase * 38) + Math.sin(particle + time * 1.4) * 7;
      alpha = Math.sin(Math.PI * phase) * 0.22 * wash.intensity;
      context.globalAlpha = alpha;
      context.strokeStyle = particle % 4 === 0 ? "#ceb68a" : "#9b8462";
      context.lineWidth = 1.2 + phase * 2.6;
      context.beginPath();
      context.moveTo(side * (spread - 10 - phase * 14), y + 3);
      context.lineTo(side * spread, y);
      context.stroke();
    }
    context.restore();
  };

  BossCinematic.prototype.drawScreenOverlay = function (context) {
    var time = this.getDisplayTime();
    var Config = TankGame.Config;
    var fade = 0;
    if (time >= 12.88 && time < 13.12) {
      fade = segment(time, 12.88, 13.12);
    } else if (time >= 13.12 && time < 13.42) {
      fade = 1 - segment(time, 13.12, 13.42);
    }
    context.save();
    context.fillStyle = "#020403";
    context.globalAlpha = fade;
    context.fillRect(0, 0, Config.viewportWidth, Config.viewportHeight);
    context.globalAlpha = 0.78;
    context.fillRect(0, 0, Config.viewportWidth, 30);
    context.fillRect(0, Config.viewportHeight - 30, Config.viewportWidth, 30);
    context.restore();
  };

  TankGame.BossCinematic = BossCinematic;
}());
