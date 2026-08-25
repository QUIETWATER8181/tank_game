(function () {
  "use strict";

  var TankGame = window.TankGame;
  var Config = TankGame.Config;
  var Game = TankGame.Game;
  var states = Config.states;
  var tileSize = Config.tileSize;

  function skillById(id) {
    return Config.fieldSkills.find(function (skill) { return skill.id === id; }) || null;
  }

  var fieldSkillIconCache = {};

  function getFieldSkillIcon(skill) {
    if (!skill || !skill.icon || typeof Image === "undefined") { return null; }
    if (!fieldSkillIconCache[skill.id]) {
      fieldSkillIconCache[skill.id] = new Image();
      fieldSkillIconCache[skill.id].src = skill.icon;
    }
    return fieldSkillIconCache[skill.id];
  }

  function getFieldSkillFrontIcon(skill) {
    if (!skill || !skill.iconFront || typeof Image === "undefined") { return null; }
    var cacheKey = skill.id + "Front";
    if (!fieldSkillIconCache[cacheKey]) {
      fieldSkillIconCache[cacheKey] = new Image();
      fieldSkillIconCache[cacheKey].src = skill.iconFront;
    }
    return fieldSkillIconCache[cacheKey];
  }

  function ensure(game) {
    if (game._fieldSkillStateReady) { return; }
    game._fieldSkillStateReady = true;
    game.endlessFieldSkill = game.endlessFieldSkill || null;
    game.endlessFieldSkillLevel = game.endlessFieldSkillLevel || 0;
    game.fieldSkillRollMode = game.fieldSkillRollMode || null;
    game.fieldSkillRollLevel = game.fieldSkillRollLevel || 0;
    game.endlessFieldRevives = game.endlessFieldRevives || 0;
    game.endlessFieldReviveDurations = game.endlessFieldReviveDurations || [];
    game.fieldSite = null;
    game.fieldCrystals = [];
    game.fieldCrystalCount = 0;
    game.fieldSkillUsed = false;
    game.fieldSiteInside = false;
    game.fieldActivationCooldown = 0;
    game.fieldAttackMultiplier = 1;
    game.fieldPierceLevel = 0;
    game.fieldArmorShots = 0;
    game.fieldWinterTimer = 0;
    game.fieldParadiseTimer = 0;
    game.fieldParadiseHitTimer = 0;
    game.fieldTotemAttackTimer = 0;
    game.fieldPoisonTrails = [];
    game.fieldVoodooActive = false;
    game.fieldPopup = null;
    game.trumpCardAttack = null;
  }

  Game.prototype.ensureFieldSkillState = function () { ensure(this); };

  Game.prototype.getFieldSkill = function () {
    ensure(this);
    return skillById(this.endlessFieldSkill);
  };

  Game.prototype.getFieldSkillLabel = function () {
    var skill = this.getFieldSkill();
    return skill ? skill.label + " Lv." + this.endlessFieldSkillLevel : "--";
  };

  Game.prototype.resetEndlessFieldRun = function () {
    ensure(this);
    this.endlessFieldSkill = null;
    this.endlessFieldSkillLevel = 0;
    this.fieldSkillRollMode = null;
    this.fieldSkillRollLevel = 0;
    this.endlessFieldRevives = 0;
    this.endlessFieldReviveDurations = [];
  };

  Game.prototype.setupFieldSite = function () {
    var self = this;
    var map = this.worldMap;
    var skill = this.getFieldSkill();
    var candidates = [];
    var playerSpawn = map.playerSpawn;
    if (this.selectedMode !== "endless" || !skill || !map || !map.cells) {
      this.fieldSite = null;
      return;
    }
    var breakableCount = map.obstacles.filter(function (obstacle) { return obstacle.kind === "B"; }).length;
    if (breakableCount < 160) {
      map.obstacles.some(function (obstacle) {
        if (breakableCount >= 160) { return true; }
        if (obstacle.kind === "#" && obstacle.row > 0 && obstacle.row < TankGame.Map.rows - 1 &&
            obstacle.column > 0 && obstacle.column < TankGame.Map.columns - 1) {
          map.cells[obstacle.row][obstacle.column] = "B";
          breakableCount += 1;
        }
        return false;
      });
      TankGame.Map.rebuildObstacles(map);
    }
    for (var row = 3; row < TankGame.Map.rows - 4; row += 1) {
      for (var column = 3; column < TankGame.Map.columns - 4; column += 1) {
        var clear = true;
        for (var localRow = 0; localRow < 3; localRow += 1) {
          for (var localColumn = 0; localColumn < 3; localColumn += 1) {
            if (map.cells[row + localRow][column + localColumn] !== ".") { clear = false; }
          }
        }
        var centerX = (column + 1.5) * tileSize;
        var centerY = (row + 1.5) * tileSize;
        if (clear && Math.hypot(centerX - playerSpawn.x, centerY - playerSpawn.y) > 300 &&
            map.enemySpawns.every(function (spawn) { return Math.hypot(centerX - spawn.x, centerY - spawn.y) > 180; })) {
          candidates.push({ column: column, row: row });
        }
      }
    }
    var selected = candidates.length ? candidates[(this.getMapLevel() * 17 + this.endlessFieldSkillLevel * 13) % candidates.length] : { column: 3, row: 3 };
    if (!candidates.length) {
      for (var clearRow = 0; clearRow < 3; clearRow += 1) {
        for (var clearColumn = 0; clearColumn < 3; clearColumn += 1) {
          map.cells[selected.row + clearRow][selected.column + clearColumn] = ".";
        }
      }
    }
    for (var wallRow = 0; wallRow < 3; wallRow += 1) {
      for (var wallColumn = 0; wallColumn < 3; wallColumn += 1) {
        if (wallRow === 1 && wallColumn === 1) { continue; }
        map.cells[selected.row + wallRow][selected.column + wallColumn] = "B";
      }
    }
    TankGame.Map.rebuildObstacles(map);
    this.fieldSite = {
      left: selected.column * tileSize,
      top: selected.row * tileSize,
      width: tileSize * 3,
      height: tileSize * 3,
      theme: skill.id,
      centerX: (selected.column + 1.5) * tileSize,
      centerY: (selected.row + 1.5) * tileSize
    };
  };

  Game.prototype.resetFieldLevel = function () {
    ensure(this);
    this.fieldCrystals = [];
    this.fieldCrystalCount = 0;
    this.fieldSkillUsed = false;
    this.fieldSiteInside = false;
    this.fieldActivationCooldown = 0;
    this.fieldAttackMultiplier = 1;
    this.fieldPierceLevel = 0;
    this.fieldArmorShots = 0;
    this.fieldWinterTimer = 0;
    this.fieldParadiseTimer = 0;
    this.fieldParadiseHitTimer = 0;
    this.fieldTotemAttackTimer = 0;
    this.fieldPoisonTrails = [];
    this.fieldVoodooActive = false;
    this.fieldPopup = null;
    this.trumpCardAttack = null;
    this.setupFieldSite();
    if (this.player) {
      this.player.paradiseMade = false;
      this.player.visualScale = this.player.baseVisualScale || 1;
      this.player.radius = this.player.baseRadius || 23;
      this.player.fieldBaseMoveSpeedMultiplier = this.player.moveSpeedMultiplier || 1;
      this.player.fieldAttackMultiplier = 1;
      this.player.fieldPierceLevel = 0;
    }
    this.enemies.forEach(function (enemy) {
      enemy.fieldBaseSpeed = enemy.mode && enemy.mode.enemySpeed;
      enemy.poisonTimer = 0;
      enemy.poisonTick = 3;
    });
  };

  Game.prototype.isInsideFieldSite = function (x, y) {
    var site = this.fieldSite;
    return Boolean(site && x >= site.left && x <= site.left + site.width && y >= site.top && y <= site.top + site.height);
  };

  Game.prototype.isFieldSiteObstacle = function (obstacle) {
    var site = this.fieldSite;
    return Boolean(site && obstacle && obstacle.kind === "B" && obstacle.x >= site.left && obstacle.x < site.left + site.width &&
      obstacle.y >= site.top && obstacle.y < site.top + site.height);
  };

  Game.prototype.onFieldWallBroken = function (obstacle) {
    ensure(this);
    if (this.selectedMode !== "endless" || !obstacle || obstacle.kind !== "B" || Math.random() > 0.75) { return; }
    this.fieldCrystals.push({ x: obstacle.x + obstacle.width / 2, y: obstacle.y + obstacle.height / 2, life: 30, pulse: 0, magnetSpeed: 0 });
    TankGame.Effects.burst(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2, "#43bfff", 16, 150);
  };

  Game.prototype.collectFieldCrystal = function (crystal) {
    this.fieldCrystalCount += 1;
    this.score += 12;
    TankGame.Effects.burst(crystal.x, crystal.y, "#55c9ff", 14, 140);
    TankGame.Audio.play("pickup");
  };

  Game.prototype.consumeFieldCrystals = function (count) {
    if (this.fieldCrystalCount < count) { return false; }
    this.fieldCrystalCount -= count;
    return true;
  };

  Game.prototype.fieldPopupMessage = function (message) {
    this.fieldPopup = { text: message, life: 2.4, maxLife: 2.4 };
  };

  Game.prototype.getFieldSkillCost = function (id) {
    var level = Math.max(1, this.endlessFieldSkillLevel);
    if (id === "undyingTotem") { return 40; }
    if (id === "trumpCard") { return Math.min(50, 15 + (level - 1) * 5); }
    if (id === "voodooBullet") { return 25; }
    if (id === "paradiseMade") { return 30; }
    if (id === "bitterWinter") { return 18; }
    return 1;
  };

  Game.prototype.getFieldDamageMultiplier = function (tank, armorActive) {
    var multiplier = tank && tank.team === "player" ? this.fieldAttackMultiplier : 1;
    if (armorActive) { multiplier *= 2; }
    if (this.fieldTotemAttackTimer > 0) { multiplier *= 1.5; }
    return multiplier;
  };

  Game.prototype.activateMechanicalAscension = function () {
    var count = this.fieldCrystalCount;
    var level = Math.max(1, this.endlessFieldSkillLevel);
    var choices = ["firepower"];
    if (count >= 5 && count <= 10) { choices.push("pierce"); }
    if (count >= 3 && count <= 9) { choices.push("healer"); }
    if (count >= 10 && count <= 20) { choices.push("armor"); }
    if (count >= 20) { choices.push("greed"); }
    var effect = choices[Math.floor(Math.random() * choices.length)];
    this.fieldCrystalCount = 0;
    if (effect === "firepower") {
      this.fieldAttackMultiplier += count * 0.01 * level;
      this.fieldPopupMessage("灭世火力 +" + Math.round(count * level) + "%");
    } else if (effect === "pierce") {
      this.fieldPierceLevel += level;
      this.fieldPopupMessage("隧穿炮弹 · 穿透 " + this.fieldPierceLevel + " 次");
    } else if (effect === "healer") {
      this.player.health = this.player.maxHealth * (1 + (level - 1) * 0.1);
      this.fieldPopupMessage("神医在世 · 回复生命");
    } else if (effect === "armor") {
      this.fieldArmorShots += 3 + (level - 1);
      this.player.shieldCharges = (this.player.shieldCharges || 0) + level;
      this.player.shieldTimer = 999;
      this.fieldPopupMessage("装甲武备 · 红色火力");
    } else {
      var scale = Math.pow(2, level - 1);
      var healthGain = count * 10 * scale;
      var attackGain = count * scale;
      this.endlessBaseStats.maxHealth += healthGain;
      this.endlessBaseStats.attack += attackGain;
      this.player.maxHealth += healthGain;
      this.player.health += healthGain;
      this.player.bulletDamage += attackGain;
      this.fieldPopupMessage("无尽贪婪 +" + healthGain + "生命 +" + attackGain + "攻击");
    }
    this.fieldActivationCooldown = 0.8;
  };

  Game.prototype.markFieldEnemyDefeated = function (enemy) {
    if (!enemy || !enemy.alive) { return; }
    enemy.health = 0;
    enemy.alive = false;
    enemy.wreck = true;
    enemy.wreckLife = 3;
    enemy.wreckParticles = [];
    if (this.markedTarget === enemy) { this.markedTarget = null; }
    this.registerEnemyKill();
    TankGame.Effects.burst(enemy.x, enemy.y, "#d88cff", 24, 190);
  };

  Game.prototype.startTrumpCardAttack = function (enemy, damage) {
    if (!enemy || !enemy.alive) { return; }
    this.trumpCardAttack = {
      target: enemy,
      damage: damage,
      elapsed: 0,
      duration: 0.38,
      hitAt: 0.2,
      applied: false
    };
    TankGame.Audio.play("trumpCardSlash");
  };

  Game.prototype.updateTrumpCardAttack = function (deltaTime) {
    var attack = this.trumpCardAttack;
    var target;
    if (!attack) { return; }
    attack.elapsed += deltaTime;
    target = attack.target;
    if (!attack.applied && attack.elapsed >= attack.hitAt) {
      attack.applied = true;
      if (target && target.alive) {
        target.health -= attack.damage;
        if (target.health <= 0) {
          this.markFieldEnemyDefeated(target);
          this.score = Math.floor(this.score * 1.1);
        }
        TankGame.Effects.burst(target.x, target.y, "#ff304f", target.alive ? 18 : 30, 220);
      }
    }
    if (attack.elapsed >= attack.duration) { this.trumpCardAttack = null; }
  };

  Game.prototype.activateFieldSkill = function () {
    var id = this.endlessFieldSkill;
    var level = Math.max(1, this.endlessFieldSkillLevel);
    var cost = this.getFieldSkillCost(id);
    var target;
    if (this.fieldActivationCooldown > 0 || !this.player.alive) { return false; }
    if (id === "mechanicalAscension") {
      if (this.fieldCrystalCount < 1 || this.fieldSkillUsed) { return false; }
      this.activateMechanicalAscension();
      this.fieldSkillUsed = true;
      return true;
    }
    if (this.fieldSkillUsed) { return false; }
    if (id === "trumpCard") {
      if (!this.consumeFieldCrystals(cost)) { return false; }
      target = this.enemies.filter(function (enemy) { return enemy.alive; })[Math.floor(Math.random() * Math.max(1, this.enemies.filter(function (enemy) { return enemy.alive; }).length))];
      if (target) {
        this.startTrumpCardAttack(target, target.maxHealth * Math.min(1, 0.3 + (level - 1) * 0.1));
      }
      this.fieldPopupMessage("密命王牌 · 最大生命伤害");
    } else if (id === "undyingTotem") {
      if (!this.consumeFieldCrystals(cost)) { return false; }
      this.endlessFieldRevives += 1;
      this.endlessFieldReviveDurations.push(3 + (level - 1) * 5);
      this.fieldPopupMessage("不死图腾 · 复活机会 +1");
    } else if (id === "voodooBullet") {
      if (!this.consumeFieldCrystals(cost)) { return false; }
      this.fieldVoodooActive = true;
      this.fieldPopupMessage("巫毒子弹 · 毒痕已启动");
    } else if (id === "paradiseMade") {
      if (!this.consumeFieldCrystals(cost)) { return false; }
      this.fieldParadiseTimer = 3;
      this.fieldParadiseHitTimer = 0;
      this.player.paradiseMade = true;
      this.player.visualScale = 3;
      this.player.radius = 69;
      this.player.invulnerable = 3;
      this.fieldPopupMessage("天堂制造 · 高速无敌");
    } else if (id === "bitterWinter") {
      if (!this.consumeFieldCrystals(cost)) { return false; }
      this.fieldWinterTimer = 24 + (level - 1) * 4;
      this.enemies.forEach(function (enemy) {
        enemy.fieldBaseSpeed = enemy.mode.enemySpeed;
        enemy.mode.enemySpeed *= 0.5;
        if (enemy.isBoss || enemy.isBossClone || enemy.isElite) {
          if (this.deactivateBossThreats) { this.deactivateBossThreats(enemy); }
          enemy.active_skill = null;
        }
      }, this);
      this.bullets.forEach(function (bullet) {
        if (bullet.team === "enemy") {
          bullet.fieldWinterBaseSpeed = bullet.fieldWinterBaseSpeed || bullet.speed;
          bullet.speed = bullet.fieldWinterBaseSpeed * 0.3;
        }
      });
      this.fieldPopupMessage("凛冽寒冬 · 全场冻结");
    }
    this.fieldSkillUsed = true;
    this.fieldActivationCooldown = 1;
    return true;
  };

  Game.prototype.updateFieldSkills = function (deltaTime) {
    var self = this;
    ensure(this);
    if (this.selectedMode !== "endless") { return; }
    this.fieldActivationCooldown = Math.max(0, this.fieldActivationCooldown - deltaTime);
    this.updateTrumpCardAttack(deltaTime);
    if (this.fieldPopup) {
      this.fieldPopup.life -= deltaTime;
      if (this.fieldPopup.life <= 0) { this.fieldPopup = null; }
    }
    this.fieldCrystals.forEach(function (crystal) {
      crystal.life -= deltaTime;
      crystal.pulse += deltaTime * 5;
      if (self.player.alive) {
        var deltaX = self.player.x - crystal.x;
        var deltaY = self.player.y - crystal.y;
        var distance = Math.hypot(deltaX, deltaY);
        if (distance > 38) {
          crystal.magnetSpeed = Math.min(900, (crystal.magnetSpeed || 0) + deltaTime * 1800);
          var travel = Math.min(distance - 30, crystal.magnetSpeed * deltaTime);
          crystal.x += deltaX / distance * travel;
          crystal.y += deltaY / distance * travel;
        }
        if (Math.hypot(crystal.x - self.player.x, crystal.y - self.player.y) < 38) {
          self.collectFieldCrystal(crystal);
          crystal.life = 0;
        }
      }
    });
    this.fieldCrystals = this.fieldCrystals.filter(function (crystal) { return crystal.life > 0; });
    if (this.fieldSite && this.player.alive) {
      var inside = this.isInsideFieldSite(this.player.x, this.player.y);
      if (inside && (!this.fieldSiteInside || !this.fieldSkillUsed)) { this.activateFieldSkill(); }
      if (!inside) { this.fieldSkillUsed = false; }
      this.fieldSiteInside = inside;
    }
    if (this.fieldParadiseTimer > 0) {
      this.fieldParadiseTimer = Math.max(0, this.fieldParadiseTimer - deltaTime);
      this.player.moveSpeedMultiplier = (this.player.fieldBaseMoveSpeedMultiplier || 1) * 5;
      this.player.paradiseMade = true;
      this.player.visualScale = 3;
      this.player.radius = 69;
      this.player.invulnerable = Math.max(this.player.invulnerable, this.fieldParadiseTimer);
    } else {
      this.player.moveSpeedMultiplier = this.player.fieldBaseMoveSpeedMultiplier || this.player.moveSpeedMultiplier;
      this.player.paradiseMade = false;
      this.player.visualScale = this.player.baseVisualScale || 1;
      this.player.radius = this.player.baseRadius || 23;
    }
    this.fieldParadiseHitTimer = Math.max(0, this.fieldParadiseHitTimer - deltaTime);
    this.fieldTotemAttackTimer = Math.max(0, this.fieldTotemAttackTimer - deltaTime);
    if (this.fieldWinterTimer > 0) { this.fieldWinterTimer = Math.max(0, this.fieldWinterTimer - deltaTime); }
    if (this.fieldWinterTimer > 0) {
      this.enemies.forEach(function (enemy) {
        if (enemy.mode && enemy.fieldBaseSpeed) { enemy.mode.enemySpeed = enemy.fieldBaseSpeed * 0.5; }
      });
      this.bullets.forEach(function (bullet) {
        if (bullet.team === "enemy") {
          bullet.fieldWinterBaseSpeed = bullet.fieldWinterBaseSpeed || bullet.speed;
          bullet.speed = Math.max(1, bullet.fieldWinterBaseSpeed * 0.3);
        }
      });
    } else {
      this.enemies.forEach(function (enemy) { if (enemy.mode && enemy.fieldBaseSpeed) { enemy.mode.enemySpeed = enemy.fieldBaseSpeed; } });
      this.bullets.forEach(function (bullet) {
        if (bullet.team === "enemy" && bullet.fieldWinterBaseSpeed) {
          bullet.speed = bullet.fieldWinterBaseSpeed;
          bullet.fieldWinterBaseSpeed = 0;
        }
      });
    }
    this.fieldPoisonTrails.forEach(function (trail) {
      trail.life -= deltaTime;
      this.enemies.forEach(function (enemy) {
        if (!enemy.alive || Math.hypot(enemy.x - trail.x, enemy.y - trail.y) > 22) { return; }
        enemy.poisonTimer = Math.max(enemy.poisonTimer || 0, 5 + (self.endlessFieldSkillLevel - 1) * 3);
        enemy.poisonTick = Math.min(enemy.poisonTick || 3, 3);
      });
    }, this);
    this.fieldPoisonTrails = this.fieldPoisonTrails.filter(function (trail) { return trail.life > 0; });
    this.enemies.forEach(function (enemy) {
      if (!enemy.alive || !(enemy.poisonTimer > 0)) { return; }
      enemy.poisonTimer -= deltaTime;
      enemy.poisonTick -= deltaTime;
      if (enemy.poisonTick <= 0) {
        enemy.poisonTick += 3;
        enemy.health -= enemy.maxHealth * 0.03;
        if (enemy.health <= 0) { self.markFieldEnemyDefeated(enemy); }
      }
    });
    if (this.fieldParadiseTimer > 0 && this.fieldParadiseHitTimer <= 0 && this.player.alive) {
      var collision = this.enemies.find(function (enemy) { return enemy.alive && Math.hypot(enemy.x - self.player.x, enemy.y - self.player.y) < enemy.radius + self.player.radius + 10; });
      if (collision) {
        var angle = Math.atan2(collision.y - this.player.y, collision.x - this.player.x);
        collision.x = Math.max(collision.radius, Math.min(Config.worldWidth - collision.radius, collision.x + Math.cos(angle) * 100));
        collision.y = Math.max(collision.radius, Math.min(Config.worldHeight - collision.radius, collision.y + Math.sin(angle) * 100));
        collision.health -= this.player.bulletDamage * this.fieldAttackMultiplier * 3;
        if (collision.health <= 0) { this.markFieldEnemyDefeated(collision); }
        this.fieldParadiseHitTimer = 0.25;
        this.fieldParadiseTimer = 3;
        this.player.invulnerable = 3;
        TankGame.Effects.burst(this.player.x, this.player.y, "#fff0a8", 28, 220);
      }
    }
  };

  Game.prototype.reviveFromFieldTotem = function () {
    var spawn = this.worldMap.playerSpawn;
    var player = this.player;
    this.endlessFieldRevives -= 1;
    var attackDuration = this.endlessFieldReviveDurations.length ? this.endlessFieldReviveDurations.shift() : 3;
    player.x = spawn.x;
    player.y = spawn.y;
    player.health = player.maxHealth;
    player.alive = true;
    player.wreck = false;
    player.invulnerable = 3;
    player.reviveShieldTimer = 3;
    this.fieldTotemAttackTimer = attackDuration;
    this.playerDeathHandled = false;
    this.respawnTimer = 0;
    this.wrecks = this.wrecks.filter(function (wreck) { return !wreck.playerDeathWreck; });
    this.braveReviveParticles = this.createBraveReviveParticles();
    TankGame.Effects.burst(spawn.x, spawn.y, "#72cfff", 30, 190);
    TankGame.Audio.play("again");
  };

  Game.prototype.getFieldSkillRollOptions = function () {
    return Config.fieldSkills.slice();
  };

  Game.prototype.completeFieldSkillRoll = function (skillId) {
    ensure(this);
    if (this.selectedMode !== "endless" || this.state !== states.FIELD_ROLL) { return false; }
    var skill = skillById(skillId) || Config.fieldSkills[Math.floor(Math.random() * Config.fieldSkills.length)];
    this.endlessFieldSkill = skill.id;
    this.endlessFieldSkillLevel = Math.max(1, Math.ceil((this.fieldSkillRollMode === "boss" ? this.endlessLevel + 1 : this.endlessLevel) / 10));
    var mode = this.fieldSkillRollMode;
    this.fieldSkillRollMode = null;
    this.fieldSkillRollLevel = 0;
    if (mode === "boss") {
      this.setState(states.REWARD);
      originalStartNextEndlessLevel.call(this);
    } else {
      this.resetWorld(true);
      this.updateLevelMusic();
      this.beginLevel();
    }
    return true;
  };

  Game.prototype.drawFieldSite = function (context) {
    var site = this.fieldSite;
    var skill = this.getFieldSkill();
    if (!site || !skill) { return; }
    context.save();
    context.fillStyle = "rgba(2, 7, 11, 0.58)";
    context.shadowColor = "rgba(0, 0, 0, 0.72)";
    context.shadowBlur = 20;
    context.fillRect(site.left + 7, site.top + 11, site.width, site.height);
    context.shadowBlur = 0;
    context.fillStyle = "rgba(5, 11, 16, 0.88)";
    context.fillRect(site.left - 6, site.top + site.height, site.width + 12, 10);
    context.fillStyle = "rgba(255, 255, 255, 0.14)";
    context.fillRect(site.left - 3, site.top - 3, site.width + 6, 5);
    var icon = getFieldSkillIcon(skill);
    if (icon && icon.complete && icon.naturalWidth > 0 && context.drawImage) {
      context.globalAlpha = 0.94;
      context.drawImage(icon, site.left, site.top, site.width, site.height);
      context.globalAlpha = 1;
    } else {
      context.fillStyle = "rgba(18, 25, 37, 0.72)";
      context.fillRect(site.left - 6, site.top - 6, site.width + 12, site.height + 12);
    }
    context.fillStyle = "rgba(6, 12, 18, 0.22)";
    context.fillRect(site.left, site.top, site.width, site.height);
    context.strokeStyle = skill.color;
    context.lineWidth = 4;
    context.shadowColor = skill.color;
    context.shadowBlur = 18;
    context.strokeRect(site.left - 5, site.top - 5, site.width + 10, site.height + 10);
    context.shadowBlur = 0;
    context.strokeStyle = "rgba(255, 255, 255, 0.34)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(site.left - 3, site.top - 3);
    context.lineTo(site.left + site.width + 3, site.top - 3);
    context.moveTo(site.left - 3, site.top - 3);
    context.lineTo(site.left - 3, site.top + site.height + 3);
    context.stroke();
    context.fillStyle = skill.color;
    context.font = "900 18px Microsoft YaHei, sans-serif";
    context.textAlign = "center";
    context.fillText(skill.label, site.centerX, site.top - 14);
    context.globalAlpha = icon && icon.complete && icon.naturalWidth > 0 ? 0.9 : 0.42;
    context.font = "900 66px Segoe UI Symbol, sans-serif";
    context.textBaseline = "middle";
    if (!(icon && icon.complete && icon.naturalWidth > 0)) {
      var symbols = { mechanicalAscension: "⚙", undyingTotem: "†", trumpCard: "★", voodooBullet: "☣", bitterWinter: "❄" };
      if (skill.id === "paradiseMade") {
        drawParadiseTruckIcon(context, site.centerX, site.centerY + 2, skill.color);
      } else {
        context.fillText(symbols[skill.id] || "◆", site.centerX, site.centerY + 2);
      }
    }
    context.restore();
  };

  Game.prototype.drawFieldSiteFront = function (context) {
    var site = this.fieldSite;
    var skill = this.getFieldSkill();
    var icon = getFieldSkillFrontIcon(skill);
    if (!site || !skill || !icon || !icon.complete || icon.naturalWidth <= 0 || !context.drawImage) { return; }
    context.save();
    context.globalAlpha = 0.98;
    context.drawImage(icon, site.left, site.top, site.width, site.height);
    context.restore();
  };

  function drawParadiseTruckIcon(context, centerX, centerY, color) {
    context.save();
    context.globalAlpha = 0.42;
    context.translate(centerX - 10, centerY);
    context.fillStyle = color;
    context.strokeStyle = color;
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(-42, -24);
    context.lineTo(25, -24);
    context.lineTo(25, -8);
    context.lineTo(50, -8);
    context.lineTo(62, 6);
    context.lineTo(62, 24);
    context.lineTo(-42, 24);
    context.closePath();
    context.fill();
    context.stroke();
    context.fillStyle = "rgba(18, 25, 37, 0.82)";
    context.fillRect(31, -3, 21, 13);
    context.beginPath();
    context.arc(-18, 25, 10, 0, Math.PI * 2);
    context.arc(40, 25, 10, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();
  }

  function roundedRectPath(context, x, y, width, height, radius) {
    if (context.roundRect) {
      context.roundRect(x, y, width, height, radius);
      return;
    }
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }

  Game.prototype.drawFieldCrystals = function (context) {
    this.fieldCrystals.forEach(function (crystal) {
      var pulse = 1 + Math.sin(crystal.pulse) * 0.08;
      var silver = context.createLinearGradient(-11, 0, 11, 0);
      var energy = context.createLinearGradient(0, -8, 0, 10);
      context.save();
      context.translate(crystal.x, crystal.y);
      context.scale(pulse, pulse);
      context.shadowColor = "rgba(67, 191, 255, 0.9)";
      context.shadowBlur = 18;

      context.fillStyle = silver;
      context.beginPath();
      roundedRectPath(context, -10, -10, 20, 21, 4);
      context.fill();
      context.strokeStyle = "#f2f6fa";
      context.lineWidth = 1.5;
      context.stroke();

      energy.addColorStop(0, "#bff5ff");
      energy.addColorStop(0.3, "#35c6ff");
      energy.addColorStop(1, "#087bd5");
      context.fillStyle = energy;
      context.beginPath();
      roundedRectPath(context, -6, -6, 12, 14, 2);
      context.fill();
      context.fillStyle = "rgba(255, 255, 255, 0.72)";
      context.fillRect(-4, -4, 2, 9);

      context.fillStyle = "#dce4ec";
      context.fillRect(-8, -13, 16, 4);
      context.strokeStyle = "#ffffff";
      context.lineWidth = 1;
      context.strokeRect(-7, -12, 14, 2);
      context.fillStyle = "#8d99a6";
      context.fillRect(-9, 9, 18, 3);
      context.restore();
    });
  };
  Game.prototype.drawFieldPoisonTrails = function (context) {
    this.fieldPoisonTrails.forEach(function (trail) {
      context.save();
      context.globalAlpha = Math.min(0.7, trail.life / 10);
      context.fillStyle = "#ba70d9";
      context.shadowColor = "#d88cff";
      context.shadowBlur = 12;
      context.beginPath();
      context.arc(trail.x, trail.y, 9, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  Game.prototype.drawFieldPopup = function (context) {
    var site = this.fieldSite;
    if (!this.fieldPopup || !site) { return; }
    var alpha = Math.min(1, this.fieldPopup.life / 0.35, (this.fieldPopup.maxLife - this.fieldPopup.life) / 0.35);
    context.save();
    context.globalAlpha = Math.max(0, alpha);
    context.fillStyle = "#79e394";
    context.shadowColor = "#79e394";
    context.shadowBlur = 12;
    context.font = "900 22px Microsoft YaHei, sans-serif";
    context.textAlign = "center";
    context.fillText(this.fieldPopup.text, site.centerX - this.camera.x, site.top - this.camera.y - 30 - (1 - this.fieldPopup.life / this.fieldPopup.maxLife) * 24);
    context.restore();
  };

  Game.prototype.drawTrumpCardAttack = function (context) {
    var attack = this.trumpCardAttack;
    var target = attack && attack.target;
    var progress;
    var alpha;
    var travel;
    var length;
    var x;
    var y;
    if (!attack || !target) { return; }
    progress = Math.min(1, attack.elapsed / attack.duration);
    alpha = progress < 0.72 ? 1 : Math.max(0, 1 - (progress - 0.72) / 0.28);
    travel = Math.min(1, progress / 0.42);
    length = target.radius * (1.4 + travel * 1.8);
    x = target.x - this.camera.x;
    y = target.y - this.camera.y;
    context.save();
    context.translate(x, y);
    context.globalAlpha = alpha;
    context.strokeStyle = "#ff304f";
    context.shadowColor = "#ff1538";
    context.shadowBlur = 18;
    context.lineCap = "round";
    context.lineWidth = 4 + (1 - progress) * 4;
    context.beginPath();
    context.moveTo(-length, -length);
    context.lineTo(-length + length * travel * 2, -length + length * travel * 2);
    context.moveTo(length, -length);
    context.lineTo(length - length * travel * 2, -length + length * travel * 2);
    context.stroke();
    if (progress >= 0.2 && progress < 0.62) {
      context.globalAlpha = Math.min(1, (progress - 0.2) / 0.1);
      context.fillStyle = "#fff2f4";
      context.beginPath();
      context.arc(0, 0, target.radius * 0.8, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  };

  Game.prototype.drawFieldOverlay = function (context) {
    if (this.fieldWinterTimer <= 0) { return; }
    context.save();
    context.fillStyle = "rgba(55, 128, 190, 0.18)";
    context.fillRect(0, 0, Config.viewportWidth || this.canvas.width, Config.viewportHeight || this.canvas.height);
    context.fillStyle = "#b9e7ff";
    context.font = "800 16px Microsoft YaHei, sans-serif";
    context.textAlign = "right";
    context.fillText("凛冽寒冬 " + this.fieldWinterTimer.toFixed(1) + "s", (Config.viewportWidth || this.canvas.width) - 24, 38);
    context.restore();
  };

  var originalResetEndlessRun = Game.prototype.resetEndlessRun;
  var originalResetWorld = Game.prototype.resetWorld;
  var originalStart = Game.prototype.start;
  var originalStartNextEndlessLevel = Game.prototype.startNextEndlessLevel;
  var originalUpdate = Game.prototype.update;
  var originalUpdateBullet = Game.prototype.updateBullet;
  var originalRender = Game.prototype.render;
  var originalFire = Game.prototype.fire;
  var originalUpdatePlayerLifeCycle = Game.prototype.updatePlayerLifeCycle;
  var originalUpdateBossEnemies = Game.prototype.updateBossEnemies;
  var originalUpdateEliteEnemies = Game.prototype.updateEliteEnemies;

  Game.prototype.resetEndlessRun = function () {
    originalResetEndlessRun.apply(this, arguments);
    this.resetEndlessFieldRun();
  };

  Game.prototype.resetWorld = function () {
    originalResetWorld.apply(this, arguments);
    ensure(this);
    this.resetFieldLevel();
  };

  Game.prototype.start = function () {
    originalStart.apply(this, arguments);
    ensure(this);
    if (this.selectedMode === "endless") {
      this.fieldSkillRollMode = "initial";
      this.fieldSkillRollLevel = 1;
      this.setState(states.FIELD_ROLL);
    }
  };

  Game.prototype.startNextEndlessLevel = function () {
    ensure(this);
    if (this.selectedMode === "endless" && this.endlessLevel % 10 === 0 && !this.fieldSkillRollMode) {
      this.fieldSkillRollMode = "boss";
      this.fieldSkillRollLevel = this.endlessLevel + 1;
      this.setState(states.FIELD_ROLL);
      return;
    }
    originalStartNextEndlessLevel.apply(this, arguments);
  };

  Game.prototype.update = function (deltaTime) {
    originalUpdate.apply(this, arguments);
    ensure(this);
    if (this.state === states.PLAYING) { this.updateFieldSkills(deltaTime); }
  };

  Game.prototype.updateBullet = function (bullet, deltaTime) {
    originalUpdateBullet.apply(this, arguments);
    if (bullet.fieldVoodoo && bullet.alive) {
      bullet.fieldTrailTimer = Math.max(0, (bullet.fieldTrailTimer || 0) - deltaTime);
      if (bullet.fieldTrailTimer <= 0) {
        this.fieldPoisonTrails.push({ x: bullet.x, y: bullet.y, life: 10 });
        bullet.fieldTrailTimer = 0.05;
      }
    }
  };

  Game.prototype.fire = function (tank) {
    var before = this.bullets.length;
    var armorActive = Boolean(tank && tank.team === "player" && this.fieldArmorShots > 0);
    originalFire.apply(this, arguments);
    for (var index = before; index < this.bullets.length; index += 1) {
      var bullet = this.bullets[index];
      if (tank && tank.team === "player") {
        bullet.damage *= this.getFieldDamageMultiplier(tank, armorActive);
        bullet.fieldPierceRemaining = this.fieldPierceLevel;
        bullet.fieldArmor = armorActive;
        bullet.fieldVoodoo = this.endlessFieldSkill === "voodooBullet" && this.fieldVoodooActive;
      } else if (this.fieldWinterTimer > 0 && bullet.team === "enemy") {
        bullet.fieldWinterBaseSpeed = bullet.speed;
        bullet.speed *= 0.3;
      }
    }
    if (armorActive) { this.fieldArmorShots -= 1; }
  };

  Game.prototype.updatePlayerLifeCycle = function (deltaTime) {
    ensure(this);
    if (this.selectedMode === "endless" && !this.player.alive && this.endlessFieldRevives > 0) {
      this.reviveFromFieldTotem();
      return;
    }
    originalUpdatePlayerLifeCycle.apply(this, arguments);
  };

  Game.prototype.updateBossEnemies = function () {
    if (this.fieldWinterTimer > 0) { return; }
    originalUpdateBossEnemies.apply(this, arguments);
  };

  Game.prototype.updateEliteEnemies = function () {
    if (this.fieldWinterTimer > 0) { return; }
    originalUpdateEliteEnemies.apply(this, arguments);
  };

  Game.prototype.render = function () {
    originalRender.apply(this, arguments);
    if (!this.worldMap) { return; }
    this.drawFieldPopup(this.context);
    this.drawFieldOverlay(this.context);
    this.drawTrumpCardAttack(this.context);
  };
}());
