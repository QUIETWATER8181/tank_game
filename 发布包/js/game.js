(function () {
  "use strict";

  var TankGame = window.TankGame = window.TankGame || {};
  var Config = TankGame.Config;

  function Game(canvas, input) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.input = input;
    this.state = Config.states.MENU;
    this.elapsed = 0;
    this.camera = { x: 0, y: 0 };
    this.cinematic = null;
    this.mapRunSeed = (Date.now() ^ Math.floor(Math.random() * 0xFFFFFFFF)) >>> 0;
    this.worldMap = null;
    this.player = null;
    this.enemies = [];
    this.bullets = [];
    this.mortarWarnings = [];
    this.bossMeteors = [];
    this.bossMeteorTimer = 0;
    this.bossEmbers = [];
    this.bossWarParticles = [];
    this.bossWarParticleDelay = 0;
    this.bossWarParticleFade = 0;
    this.bossFirePits = [];
    this.muzzleFlashes = [];
    this.frontStepTrails = [];
    this.bossCloneTrails = [];
    this.rearGuards = [];
    this.rearGuardCooldown = 0;
    this.supportAircraft = [];
    this.supportTimer = 30;
    this.supportAircraftImage = new Image();
    this.supportAircraftImage.src = "assets/images/cinematic/helicopter-body.png";
    this.bossLasers = [];
    this.markedTarget = null;
    this.score = 0;
    this.parts = this.loadParts();
    this.partsReward = 0;
    this.partsTotalReward = 0;
    this.partsGrantedTotal = 0;
    this.shopData = this.loadShopData();
    this.runShop = { healing: false, frenzy: false, instantKill: false, mudTruck: false, bomb: false, mortar: false, redBullet: false };
    this.shopHealingTimer = 10;
    this.comboCount = 0;
    this.comboTimer = 0;
    this.maxCombo = 0;
    this.completionHandled = false;
    this.bossMeteors = [];
    this.bossMeteorTimer = 0;
    this.bossEmbers = [];
    this.bossWarParticles = [];
    this.bossFirePits = [];
    this.selectedMode = "normal";
    this.mode = Config.modes.normal;
    this.challengeLevel = 1;
    this.maxChallengeLevel = Config.modes.challenge.levels.length;
    this.lastCompletedLevel = 0;
    this.resultLevel = 1;
    this.endlessLevel = 1;
    this.braveLevel = 1;
    this.braveRevives = 0;
    this.braveLevelDamaged = false;
    this.braveReviveParticles = [];
    this.endlessBaseStats = { maxHealth: 100, attack: Config.bulletDamage, fireRate: 1 };
    this.endlessPermanent = {};
    this.endlessTemp = { repair: false, shield: false, rapid: false, perspective: false };
    this.endlessNextTemp = { repair: false, shield: false, rapid: false, perspective: false };
    this.rewardOptions = [];
    this.rewardStage = null;
    this.rewardLevel = 0;
    this.levelElapsed = 0;
    this.lives = this.mode.lives;
    this.respawnTimer = 0;
    this.playerDeathHandled = false;
    this.countdown = 0;
    this.countdownTick = 0;
    this.supplies = [];
    this.supplyTimer = 8;
    this.tracks = [];
    this.trackTimer = 0;
    this.wrecks = [];
    this.shake = 0;
    this.stats = { shots: 0, hits: 0, kills: 0 };
    this.records = this.loadRecords();
    this.resetWorld();
  }

  Game.prototype.setState = function (nextState) {
    this.state = nextState;
  };

  Game.prototype.resetEndlessRun = function () {
    this.endlessLevel = 1;
    this.endlessBaseStats = { maxHealth: 125, attack: 30, fireRate: 1 };
    this.endlessPermanent = {};
    this.endlessTemp = { repair: false, shield: false, rapid: false, perspective: false };
    this.endlessNextTemp = { repair: false, shield: false, rapid: false, perspective: false };
    this.rewardOptions = [];
    this.rewardStage = null;
    this.rewardLevel = 0;
  };

  Game.prototype.setMode = function (modeId) {
    if (Config.modes[modeId]) {
      this.selectedMode = modeId;
      this.mode = Config.modes[modeId];
      this.challengeLevel = 1;
      this.braveLevel = 1;
      this.braveRevives = 0;
      this.braveLevelDamaged = false;
      this.braveReviveParticles = [];
      this.resetEndlessRun();
      this.lastCompletedLevel = 0;
      this.markedTarget = null;
    }
  };

  Game.prototype.loadShopData = function () {
    var parsed;
    var data = { upgrades: { health: 0, attack: 0, speed: 0 }, boosts: { healing: 0, frenzy: 0, instantKill: 0 }, items: { mudTruck: 0, bomb: 0, mortar: 0, redBullet: 0 }, skins: { default: true }, equippedSkin: "default" };
    try {
      parsed = JSON.parse(window.localStorage.getItem("xpz-tank-shop")) || {};
      ["upgrades", "boosts", "items"].forEach(function (category) {
        Object.keys(data[category]).forEach(function (id) {
          var value = Number(parsed[category] && parsed[category][id]);
          if (Number.isFinite(value) && value >= 0) { data[category][id] = Math.floor(value); }
        });
      });
      if (parsed.skins) { Object.keys(parsed.skins).forEach(function (id) { if (parsed.skins[id] === true) { data.skins[id] = true; } }); }
      if (parsed.equippedSkin && data.skins[parsed.equippedSkin]) { data.equippedSkin = parsed.equippedSkin; }
    } catch (error) { }
    data.upgrades.speed = Math.min(20, data.upgrades.speed);
    return data;
  };

  Game.prototype.saveShopData = function () {
    try { window.localStorage.setItem("xpz-tank-shop", JSON.stringify(this.shopData)); } catch (error) { }
  };

  Game.prototype.getShopItem = function (category, id) {
    var list = Config.shop[category] || [];
    return list.find(function (item) { return item.id === id; }) || null;
  };

  Game.prototype.getShopLevel = function (category, id) {
    if (category === "skins") { return this.shopData.skins[id] ? 1 : 0; }
    return this.shopData[category] && this.shopData[category][id] || 0;
  };

  Game.prototype.getShopCost = function (category, id) {
    var item = this.getShopItem(category, id);
    var level = this.getShopLevel(category, id);
    return item && item.baseCost !== undefined ? item.baseCost + level * item.costStep : (item ? item.price : 0);
  };

  Game.prototype.isShopItemAvailable = function (category, id, modeId) {
    var item = this.getShopItem(category, id);
    return Boolean(item && (!item.allowedModes || item.allowedModes.indexOf(modeId || this.selectedMode) !== -1));
  };

  Game.prototype.purchaseShopItem = function (category, id) {
    var item = this.getShopItem(category, id);
    var level = this.getShopLevel(category, id);
    var cost;
    if (!item || level >= item.maxLevel || (category === "skins" && this.shopData.skins[id])) { return { ok: false, reason: "max" }; }
    cost = this.getShopCost(category, id);
    if (this.parts < cost) { return { ok: false, reason: "parts", cost: cost }; }
    this.parts -= cost;
    if (category === "skins") { this.shopData.skins[id] = true; this.shopData.equippedSkin = id; }
    else { this.shopData[category][id] = level + 1; }
    this.saveParts();
    this.saveShopData();
    return { ok: true, cost: cost };
  };

  Game.prototype.equipSkin = function (id) {
    if (this.shopData.skins[id]) { this.shopData.equippedSkin = id; this.saveShopData(); return true; }
    return false;
  };

  Game.prototype.openShop = function () { if (this.state === Config.states.MENU) { this.setState(Config.states.SHOP); } };
  Game.prototype.closeShop = function () { if (this.state === Config.states.SHOP) { this.setState(Config.states.MENU); } };

  Game.prototype.activateRunShop = function () {
    var allowed = ["endless", "brave"].indexOf(this.selectedMode) !== -1;
    this.runShop = { healing: false, frenzy: false, instantKill: false, mudTruck: false, bomb: false, mortar: false, redBullet: false };
    if (!allowed) { return; }
    ["healing", "frenzy", "instantKill"].forEach(function (id) {
      if (this.shopData.boosts[id] > 0) { this.shopData.boosts[id] -= 1; this.runShop[id] = true; }
    }, this);
    ["mudTruck", "bomb", "mortar", "redBullet"].forEach(function (id) {
      if (this.shopData.items[id] > 0 && (id !== "mudTruck" || this.selectedMode === "endless")) { this.shopData.items[id] -= 1; this.runShop[id] = true; }
    }, this);
    this.shopHealingTimer = 10;
    this.saveShopData();
  };

  Game.prototype.getChallengeLevelConfig = function () {
    return Config.modes.challenge.levels[this.challengeLevel - 1];
  };

  Game.prototype.getEndlessLevelConfig = function (levelOverride) {
    var level = levelOverride || this.endlessLevel;
    var enemyCount;
    var baseHealth;
    var baseDamage;
    var multiplier = 1;
    if (level <= 2) {
      enemyCount = 3;
      baseHealth = 45 + (level - 1) * 5;
      baseDamage = 12 + (level - 1) * 2;
    } else if (level <= 4) {
      enemyCount = 4;
      baseHealth = 45 + (level - 1) * 5;
      baseDamage = 12 + (level - 1) * 2;
    } else if (level <= 10) {
      enemyCount = 5;
      baseHealth = level <= 9 ? 45 + (level - 1) * 5 : Config.modes.endless.enemyHealth + (level - 1) * (5 + Math.floor(level / 3));
      baseDamage = level <= 9 ? 12 + (level - 1) * 2 : Config.modes.endless.enemyDamage + (level - 1) * (3 + Math.floor(level / 5));
    } else {
      enemyCount = level >= 20 ? 8 : (level >= 15 ? 7 : 6);
      baseHealth = Config.modes.endless.enemyHealth + (level - 1) * (5 + Math.floor(level / 3));
      baseDamage = Config.modes.endless.enemyDamage + (level - 1) * (3 + Math.floor(level / 5));
    }
    for (var k = 1; k <= Math.floor(level / 10); k += 1) {
      multiplier *= 1 + (10 * k) / 100;
    }
    var early = level <= 2 ? { speed: 0.85, reaction: 1.45, fire: 1.45, aim: 1.6, strafe: 0.2 } :
      (level <= 5 ? { speed: 0.9, reaction: 1.3, fire: 1.3, aim: 1.35, strafe: 0.35 } :
        (level <= 8 ? { speed: 0.95, reaction: 1.15, fire: 1.15, aim: 1.15, strafe: 0.5 } :
          { speed: 1, reaction: 1, fire: 1, aim: 1, strafe: Config.modes.endless.strafeChance }));
    return {
      level: level,
      enemyCount: enemyCount,
      enemyHealth: Math.floor(baseHealth * multiplier),
      enemyDamage: Math.floor(baseDamage * multiplier),
      speedScale: early.speed,
      reactionScale: early.reaction,
      fireScale: early.fire,
      aimScale: early.aim,
      strafeChance: early.strafe
    };
  };

  Game.prototype.isEnemyInCameraView = function (enemy) {
    var width = Config.viewportWidth || this.canvas.width;
    var height = Config.viewportHeight || this.canvas.height;
    return enemy.x >= this.camera.x && enemy.x <= this.camera.x + width &&
      enemy.y >= this.camera.y && enemy.y <= this.camera.y + height;
  };

  Game.prototype.canEnemyFire = function (enemy) {
    var level = this.endlessLevel;
    var limit;
    var enemyIndex;
    var activeAttackers;
    var self = this;
    if (!enemy.isTurret && !enemy.isElite && !enemy.isBoss && !enemy.isBossClone && !this.isEnemyInCameraView(enemy)) { return false; }
    if (this.selectedMode !== "endless" || level >= 9) { return true; }
    limit = level <= 3 ? 2 : (level <= 6 ? 3 : 4);
    enemyIndex = this.enemies.indexOf(enemy);
    activeAttackers = this.enemies.filter(function (candidate, index) {
      var canUseViewport = candidate.isTurret || candidate.isElite || candidate.isBoss || candidate.isBossClone || self.isEnemyInCameraView(candidate);
      return index < enemyIndex && candidate.alive && canUseViewport &&
        candidate.aiState === TankGame.AI.states.ATTACK && candidate.fireCooldown <= 0;
    }).length;
    return activeAttackers < limit;
  };

  Game.prototype.getBossSkillLevel = function () {
    if (this.selectedMode === "brave") { return this.braveLevel; }
    return this.selectedMode === "endless" ? Math.max(1, Math.floor(this.endlessLevel / 10)) : 0;
  };

  Game.prototype.getBossSkillConfig = function (skill) {
    var base = Config.bossTank[skill];
    var level = this.getBossSkillLevel();
    var upgrades = Math.max(0, level - 1);
    if (!base) { return null; }
    if (skill === "gatling") {
      return Object.assign({}, base, { cooldown: Math.max(base.minimumCooldown, base.cooldown - upgrades * base.cooldownStep) });
    }
    if (skill === "bomb" || skill === "mortar") {
      return Object.assign({}, base, {
        radius: Math.min(base.maximumRadius, base.radius + upgrades * base.radiusStep),
        range: Math.min(Config.modes.endless.attackRange, base.range + upgrades * base.rangeStep)
      });
    }
    if (skill === "leap") {
      var leapDistance = Math.min(base.maximumDistanceLimit, base.maximumDistance + upgrades * base.distanceStep);
      return Object.assign({}, base, { maximumDistance: leapDistance });
    }
    if (skill === "laser") {
      return Object.assign({}, base, { damageMultiplier: base.damageMultiplier + upgrades * base.damageStep });
    }
    if (skill === "clone") {
      return Object.assign({}, base, { duration: base.duration + upgrades * base.durationStep });
    }
    return base;
  };

  Game.prototype.getBossSkillPool = function () {
    var pool = ["gatling", "bomb", "leap", "laser", "clone"];
    if (this.getMapLevel() >= 40) { pool.push("mortar"); }
    return pool;
  };

  Game.prototype.getEndlessRewardAmount = function (rewardId, level) {
    if (rewardId === "maxHealth") { return 15 + 3 * level; }
    if (rewardId === "attack") { return 7 + level; }
    return 0;
  };

  Game.prototype.getActiveLevelConfig = function () {
    if (this.selectedMode === "challenge") { return this.getChallengeLevelConfig(); }
    if (this.selectedMode === "endless") { return this.getEndlessLevelConfig(); }
    if (this.selectedMode === "brave") {
      return Object.assign({}, this.getEndlessLevelConfig(this.braveLevel * 10), { enemyCount: 1 });
    }
    return null;
  };

  Game.prototype.getMapLevel = function () {
    if (this.selectedMode === "endless") { return this.endlessLevel; }
    if (this.selectedMode === "brave") { return this.braveLevel * 10; }
    if (this.selectedMode === "challenge") { return this.challengeLevel; }
    return 1;
  };

  Game.prototype.getMapSeed = function () {
    var modeSalt = this.selectedMode === "endless" ? 0x51ED270B :
      (this.selectedMode === "brave" ? 0xB24A6E19 : (this.selectedMode === "challenge" ? 0x31A53F85 : 0x17C8A6D3));
    return (this.mapRunSeed ^ modeSalt ^ Math.imul(this.getMapLevel(), 0x45D9F3B)) >>> 0;
  };

  Game.prototype.updateCamera = function (deltaTime, force) {
    var viewportWidth = Config.viewportWidth || this.canvas.width;
    var viewportHeight = Config.viewportHeight || this.canvas.height;
    var targetX;
    var targetY;
    if (this.state === Config.states.MENU && this.worldMap && this.worldMap.bossArena) {
      targetX = this.worldMap.bossArena.centerX - viewportWidth / 2;
      targetY = this.worldMap.bossArena.centerY - viewportHeight / 2;
    } else {
      targetX = (this.player ? this.player.x : viewportWidth / 2) - viewportWidth / 2;
      targetY = (this.player ? this.player.y : viewportHeight / 2) - viewportHeight / 2;
    }
    targetX = Math.max(0, Math.min(Config.worldWidth - viewportWidth, targetX));
    targetY = Math.max(0, Math.min(Config.worldHeight - viewportHeight, targetY));
    if (force) {
      this.camera.x = targetX;
      this.camera.y = targetY;
    } else {
      var blend = 1 - Math.exp(-8 * Math.max(0, deltaTime || 0));
      this.camera.x += (targetX - this.camera.x) * blend;
      this.camera.y += (targetY - this.camera.y) * blend;
    }
    if (this.input && this.input.setCamera) { this.input.setCamera(this.camera.x, this.camera.y); }
  };

  Game.prototype.getCameraBounds = function (margin) {
    margin = margin || 0;
    return {
      left: Math.max(0, this.camera.x - margin),
      top: Math.max(0, this.camera.y - margin),
      right: Math.min(Config.worldWidth, this.camera.x + Config.viewportWidth + margin),
      bottom: Math.min(Config.worldHeight, this.camera.y + Config.viewportHeight + margin)
    };
  };

  Game.prototype.createRewardOptions = function (pool, count) {
    var available = pool.filter(function (reward) {
      var level = this.endlessPermanent[reward.id] || 0;
      return !reward.maxLevel || level < reward.maxLevel;
    }, this);
    var shuffled = available.slice();
    for (var i = shuffled.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = swap;
    }
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  Game.prototype.ensureEarlySurvivalReward = function (options) {
    var survivalIds = ["maxHealth", "repair"];
    var hasSurvival = options.some(function (reward) { return survivalIds.indexOf(reward.id) !== -1; });
    var replacement;
    if (this.selectedMode !== "endless" || this.rewardLevel !== 1 || hasSurvival) { return options; }
    replacement = Config.endlessRewards.base.find(function (reward) { return reward.id === "maxHealth"; });
    if (replacement && options.length) { options[options.length - 1] = replacement; }
    return options;
  };

  Game.prototype.applyEndlessReward = function (reward) {
    var level = this.endlessLevel;
    if (["maxHealth", "attack", "fireRate"].indexOf(reward.id) !== -1) {
      if (reward.id === "maxHealth") { this.endlessBaseStats.maxHealth += this.getEndlessRewardAmount(reward.id, level); }
      if (reward.id === "attack") { this.endlessBaseStats.attack += this.getEndlessRewardAmount(reward.id, level); }
      if (reward.id === "fireRate") { this.endlessBaseStats.fireRate *= 0.9; }
    } else if (reward.id === "repair") {
      this.endlessNextTemp.repair = true;
    } else if (reward.id === "shield") {
      this.endlessNextTemp.shield = true;
    } else if (reward.id === "rapid") {
      this.endlessNextTemp.rapid = true;
    } else if (reward.id === "perspective") {
      this.endlessNextTemp.perspective = true;
    } else {
      this.endlessPermanent[reward.id] = (this.endlessPermanent[reward.id] || 0) + 1;
    }
  };

  Game.prototype.chooseEndlessReward = function (index) {
    var reward = this.rewardOptions[index];
    if (this.selectedMode !== "endless" || this.state !== Config.states.REWARD || !reward) { return; }
    this.applyEndlessReward(reward);
    if (this.rewardStage === "primary" && this.rewardLevel % 2 === 0) {
      this.rewardStage = "permanent";
      this.rewardOptions = this.createRewardOptions(Config.endlessRewards.permanent, 3);
      return;
    }
    this.startNextEndlessLevel();
  };

  Game.prototype.getEnemyMode = function (levelConfig) {
    var mode = this.mode;
    if (!levelConfig) { return mode; }
    return {
      id: mode.id,
      enemySpeed: mode.enemySpeed * levelConfig.speedScale,
      enemyTurnSpeed: mode.enemyTurnSpeed * (0.9 + levelConfig.speedScale * 0.1),
      detectionRange: mode.detectionRange,
      attackRange: mode.attackRange,
      reactionTime: mode.reactionTime * levelConfig.reactionScale,
      pathInterval: mode.pathInterval * levelConfig.reactionScale,
      fireCooldown: mode.fireCooldown * levelConfig.fireScale,
      aimError: mode.aimError * levelConfig.aimScale,
      strafeChance: levelConfig.strafeChance,
      preferredRange: levelConfig.preferredRange || (310 + levelConfig.level * 35)
    };
  };

  Game.prototype.loadRecords = function () {
    var parsed;
    try {
      parsed = JSON.parse(window.localStorage.getItem("xpz-tank-records")) || {};
      return this.sanitizeRecords(parsed);
    } catch (error) {
      return {};
    }
  };

  Game.prototype.loadParts = function () {
    var stored;
    try {
      stored = Number(window.localStorage.getItem("xpz-tank-parts"));
      return Number.isFinite(stored) && stored >= 0 ? Math.floor(stored) : 0;
    } catch (error) {
      return 0;
    }
  };

  Game.prototype.saveParts = function () {
    try { window.localStorage.setItem("xpz-tank-parts", String(this.parts)); } catch (error) { }
  };

  Game.prototype.redeemGiftCode = function (code) {
    var normalized = String(code || "").trim().toUpperCase();
    if (normalized !== "QUIETWATER") { return { ok: false, reason: "invalid" }; }
    this.parts += 10000;
    this.saveParts();
    return { ok: true, amount: 10000 };
  };

  Game.prototype.getPartsReward = function (modeId, score, isVictory) {
    var settlement = Config.partsSettlement[modeId];
    var adjustedScore = Math.max(0, Math.floor(Number(score) || 0));
    var reward;
    if (!settlement) { return 0; }
    reward = Math.floor(adjustedScore / settlement.scorePerParts) * settlement.partsPerStep;
    if (modeId === "normal" && isVictory) { reward += settlement.victoryBonus; }
    if (modeId === "challenge" && isVictory) { reward *= settlement.victoryMultiplier; }
    return reward;
  };

  Game.prototype.settleParts = function (isVictory) {
    var totalReward = this.getPartsReward(this.selectedMode, this.score, isVictory);
    this.partsTotalReward = totalReward;
    this.partsReward = Math.max(0, totalReward - this.partsGrantedTotal);
    this.partsGrantedTotal = Math.max(this.partsGrantedTotal, totalReward);
    if (this.partsReward > 0) {
      this.parts += this.partsReward;
      this.saveParts();
    }
    return this.partsReward;
  };

  Game.prototype.settleFinalParts = function () {
    // Final defeat still settles the accumulated score; only the ungranted
    // difference is added because earlier level clears may have paid already.
    return this.settleParts(false);
  };
  Game.prototype.sanitizeRecords = function (records) {
    var clean = {};
    ["normal", "challenge", "endless", "brave"].forEach(function (modeId) {
      var source = records && records[modeId];
      if (!source || typeof source !== "object") { return; }
      clean[modeId] = {
        highScore: Number.isFinite(Number(source.highScore)) && Number(source.highScore) >= 0 ? Math.floor(Number(source.highScore)) : 0,
        bestTime: source.bestTime !== null && source.bestTime !== "" && Number.isFinite(Number(source.bestTime)) && Number(source.bestTime) >= 0 ? Number(source.bestTime) : null
      };
    });
    return clean;
  };

  Game.prototype.saveRecord = function () {
    var record = this.records[this.selectedMode] || { highScore: 0, bestTime: null };
    record.highScore = Math.max(record.highScore || 0, this.score);
    if (this.state === Config.states.VICTORY && (!record.bestTime || this.elapsed < record.bestTime)) {
      record.bestTime = this.elapsed;
    }
    this.records[this.selectedMode] = record;
    try { window.localStorage.setItem("xpz-tank-records", JSON.stringify(this.records)); } catch (error) { }
  };

  Game.prototype.resetWorld = function (preserveRun) {
    var self = this;
    if (TankGame.Audio.stopAllBurning) { TankGame.Audio.stopAllBurning(); }
    if (TankGame.Audio.stopCinematicAudio) { TankGame.Audio.stopCinematicAudio(); }
    this.cinematic = null;
    var levelConfig = this.getActiveLevelConfig();
    var enemyMode = this.getEnemyMode(levelConfig);
    var enemyCount;
    var eliteIndex = -1;
    var bossIndex = -1;
    this.worldMap = TankGame.Map.create({ seed: this.getMapSeed(), level: this.getMapLevel(), mode: this.selectedMode });
    this.player = TankGame.Entities.createTank(this.worldMap.playerSpawn.x, this.worldMap.playerSpawn.y, "player");
    this.player.bodyAngle = -Math.PI / 2;
    this.player.turretAngle = -Math.PI / 2;
    this.player.invulnerable = 0;
    this.player.maxHealth = ["endless", "brave"].indexOf(this.selectedMode) !== -1 ? this.endlessBaseStats.maxHealth + this.shopData.upgrades.health * 25 : 100;
    this.player.health = this.player.maxHealth;
    this.player.bulletDamage = ["endless", "brave"].indexOf(this.selectedMode) !== -1 ? this.endlessBaseStats.attack + this.shopData.upgrades.attack : Config.bulletDamage;
    this.player.fireRateMultiplier = this.selectedMode === "endless" ? this.endlessBaseStats.fireRate : 1;
    var speedLevel = this.selectedMode === "endless" ? Math.min(5, this.endlessPermanent.speed || 0) : 0;
    this.player.moveSpeedMultiplier = speedLevel ? Math.round((1.4 + (speedLevel - 1) * 0.05) * 100) / 100 : 1;
    if (["endless", "brave"].indexOf(this.selectedMode) !== -1) { this.player.moveSpeedMultiplier += this.shopData.upgrades.speed / 100 + (this.runShop.frenzy ? 0.05 : 0); }
    if (this.runShop.frenzy) { this.player.bulletDamage = Math.round(this.player.bulletDamage * 1.15); }
    this.player.skin = this.shopData.equippedSkin;
    this.player.trackingTime = this.selectedMode === "endless" ? Math.min(5, this.endlessPermanent.tracking ? 2 + (this.endlessPermanent.tracking - 1) * 0.5 : 0) : 0;
    this.player.levelRepair = this.selectedMode === "endless" && this.endlessTemp.repair;
    this.player.levelShield = this.selectedMode === "endless" && this.endlessTemp.shield;
    this.player.levelRapid = this.selectedMode === "endless" && this.endlessTemp.rapid;
    this.player.levelPerspective = this.selectedMode === "endless" && this.endlessTemp.perspective;
    this.player.shieldTimer = 0;
    this.player.shieldCharges = this.player.levelShield ? 3 : 0;
    this.player.rapidTimer = 0;
    this.player.perspectiveTimer = 0;
    this.player.reviveShieldTimer = 0;
    this.player.frontShieldCharges = this.selectedMode === "endless" && this.endlessPermanent.braveShield ? this.endlessPermanent.braveShield : 0;
    this.player.voidWalker = this.selectedMode === "endless" && this.endlessPermanent.voidWalker > 0;
    this.player.wallTimeLimit = this.player.voidWalker ? 5 + (this.endlessPermanent.voidWalker - 1) * 0.1 : 0;
    this.player.wallTime = 0;
    this.player.wallLocked = false;
    this.lives = this.mode.lives;
    if (this.selectedMode === "endless") { this.lives = 1; }
    this.respawnTimer = 0;
    this.playerDeathHandled = false;
    this.levelElapsed = 0;
    this.braveLevelDamaged = false;
    this.braveReviveParticles = [];
    this.supplies = [];
    this.supplyTimer = this.selectedMode === "endless" && this.endlessLevel <= 4 ? 4 :
      (this.selectedMode === "endless" && this.endlessLevel <= 9 ? 6 : 7);
    this.earlyRepairSupplyPending = this.selectedMode === "endless" && this.endlessLevel <= 4;
    this.jammerTimer = this.selectedMode === "endless" && this.endlessPermanent.jammer ? this.getJammerCooldown() : 10;
    this.jammerFlash = 0;
    this.supportTimer = this.getSupportCooldown();
    this.tracks = [];
    this.trackTimer = 0;
    this.wrecks = [];
    this.shake = 0;
    this.comboCount = 0;
    this.comboTimer = 0;
    this.completionHandled = false;
    if (!preserveRun) {
      this.stats = { shots: 0, hits: 0, kills: 0 };
      this.score = 0;
      this.maxCombo = 0;
    }
    this.markedTarget = null;
    enemyCount = levelConfig ? levelConfig.enemyCount : (this.mode.enemyCount || this.worldMap.enemySpawns.slice(0, 3).length);
    if (this.selectedMode === "brave") {
      bossIndex = 0;
    } else if (this.selectedMode === "endless" && this.endlessLevel % 10 === 0) {
      bossIndex = Math.floor(Math.random() * enemyCount);
    } else if (this.selectedMode === "endless" && this.endlessLevel % 10 === 5) {
      eliteIndex = Math.floor(Math.random() * enemyCount);
    }
    this.enemies = this.worldMap.enemySpawns.slice(0, enemyCount).map(function (spawn, index) {
      var activeSpawn = index === bossIndex ? self.worldMap.bossSpawn : spawn;
      var isFixedTurret = index !== bossIndex && index !== eliteIndex && Math.random() < Config.fixedTurret.spawnChance;
      var enemy = index === bossIndex ? new TankGame.Entities.BossEnemy(activeSpawn.x, activeSpawn.y, self.getBossSkillPool()) :
        (isFixedTurret ? TankGame.Entities.createTurret(activeSpawn.x, activeSpawn.y, "enemy") : TankGame.Entities.createTank(activeSpawn.x, activeSpawn.y, "enemy"));
      enemy.health = levelConfig ? levelConfig.enemyHealth : self.mode.enemyHealth;
      enemy.maxHealth = enemy.health;
      enemy.bulletDamage = levelConfig && levelConfig.enemyDamage ? levelConfig.enemyDamage : (self.mode.enemyDamage || Config.bulletDamage);
      enemy.jammedTimer = 0;
      enemy.bodyAngle = index === 0 ? Math.PI / 2 : Math.PI;
      enemy.turretAngle = enemy.bodyAngle;
      enemy.fireCooldown = 0.85 + index * 0.35;
      TankGame.AI.initialize(enemy, index, Object.assign({}, enemyMode));
      if (isFixedTurret) { self.makeFixedTurret(enemy); }
      if (index === eliteIndex) { self.makeEliteEnemy(enemy); }
      if (index === bossIndex) { self.makeBossEnemy(enemy); }
      return enemy;
    });
    this.enemies.forEach(function (enemy) {
      enemy.turretAngle = Math.atan2(self.player.y - enemy.y, self.player.x - enemy.x);
    });
    var hasBoss = this.enemies.some(function (enemy) { return enemy.isBoss; });
    if (hasBoss) {
      this.bossMeteorTimer = Config.bossMeteor.minimumInterval +
        Math.random() * (Config.bossMeteor.maximumInterval - Config.bossMeteor.minimumInterval);
      this.bossEmbers = this.createBossEmbers();
      this.bossWarParticles = this.createBossWarParticles();
      this.bossWarParticleDelay = 1.25;
      this.bossWarParticleFade = 0;
      this.bossFirePits = [];
    }
    this.bullets = [];
    this.mortarWarnings = [];
    this.bossMeteors = [];
    if (!hasBoss) {
      this.bossMeteorTimer = 0;
      this.bossEmbers = [];
      this.bossWarParticles = [];
      this.bossWarParticleDelay = 0;
      this.bossWarParticleFade = 0;
      this.bossFirePits = [];
    }
    this.muzzleFlashes = [];
    this.frontStepTrails = [];
    this.bossCloneTrails = [];
    this.rearGuards = [];
    this.rearGuardCooldown = 0;
    this.supportAircraft = [];
    this.bossLasers = [];
    TankGame.Effects.reset();
    this.updateCamera(0, true);
  };

  Game.prototype.updateLevelMusic = function () {
    var bossMusicActive = this.selectedMode === "brave" || (this.selectedMode === "endless" && this.endlessLevel > 10);
    if (TankGame.Audio.setMusicTrack) {
      TankGame.Audio.setMusicTrack(bossMusicActive ? Config.bossBackgroundMusic : Config.backgroundMusic, false);
    }
  };

  Game.prototype.findLevelBoss = function () {
    return this.enemies.find(function (enemy) { return enemy.isBoss && enemy.alive; }) || null;
  };

  Game.prototype.beginLevel = function () {
    var boss = this.findLevelBoss();
    this.input.reset();
    if (boss && TankGame.BossCinematic) {
      this.countdown = 0;
      this.countdownTick = 0;
      this.cinematic = new TankGame.BossCinematic(this, boss);
      boss.fireCooldown = Math.max(boss.fireCooldown || 0, 1.25);
      if (TankGame.Audio.setMusicTrack) {
        TankGame.Audio.setMusicTrack(Config.bossBackgroundMusic, false);
      }
      this.setState(Config.states.CINEMATIC);
      if (TankGame.Audio.startCinematicAudio) { TankGame.Audio.startCinematicAudio(); }
      return;
    }
    this.countdown = 3;
    this.countdownTick = 4;
    this.setState(Config.states.COUNTDOWN);
    TankGame.Audio.play("begin");
  };

  Game.prototype.finishBossCinematic = function () {
    var boss = this.cinematic && this.cinematic.boss;
    if (boss && this.worldMap && this.worldMap.bossArena) {
      boss.x = this.worldMap.bossArena.centerX;
      boss.y = this.worldMap.bossArena.centerY;
      boss.fireCooldown = Math.max(boss.fireCooldown || 0, 1.25);
    }
    if (TankGame.Audio.stopCinematicAudio) { TankGame.Audio.stopCinematicAudio(); }
    this.cinematic = null;
    this.input.reset();
    this.setState(Config.states.PLAYING);
    this.updateCamera(0, true);
    TankGame.Audio.play("go");
  };

  Game.prototype.start = function () {
    this.elapsed = 0;
    this.mapRunSeed = (Date.now() ^ Math.floor(Math.random() * 0xFFFFFFFF)) >>> 0;
    this.challengeLevel = 1;
    this.braveLevel = 1;
    if (this.selectedMode === "brave") {
      this.braveRevives = 0;
      this.braveLevelDamaged = false;
      this.braveReviveParticles = [];
    }
    if (this.selectedMode === "endless") { this.resetEndlessRun(); }
    this.lastCompletedLevel = 0;
    this.resultLevel = 1;
    this.partsReward = 0;
    this.partsTotalReward = 0;
    this.partsGrantedTotal = 0;
    this.activateRunShop();
    this.input.reset();
    this.resetWorld(false);
    this.updateLevelMusic();
    this.beginLevel();
  };

  Game.prototype.startNextEndlessLevel = function () {
    if (this.selectedMode !== "endless" || this.state !== Config.states.REWARD) { return; }
    this.endlessLevel += 1;
    this.endlessTemp = {
      repair: this.endlessNextTemp.repair,
      shield: this.endlessNextTemp.shield,
      rapid: this.endlessNextTemp.rapid,
      perspective: this.endlessNextTemp.perspective
    };
    this.endlessNextTemp = { repair: false, shield: false, rapid: false, perspective: false };
    this.input.reset();
    this.resetWorld(true);
    this.updateLevelMusic();
    this.beginLevel();
  };

  Game.prototype.startNextChallengeLevel = function () {
    if (this.state !== Config.states.LEVEL_CLEAR || this.challengeLevel >= this.maxChallengeLevel) { return; }
    this.challengeLevel += 1;
    this.input.reset();
    this.resetWorld(true);
    this.updateLevelMusic();
    this.beginLevel();
  };

  Game.prototype.startNextBraveLevel = function () {
    if (this.selectedMode !== "brave" || this.state !== Config.states.LEVEL_CLEAR) { return; }
    this.braveLevel += 1;
    this.input.reset();
    this.resetWorld(true);
    this.updateLevelMusic();
    this.beginLevel();
  };

  Game.prototype.pause = function () {
    if (this.state === Config.states.PLAYING) { this.setState(Config.states.PAUSED); }
  };

  Game.prototype.resume = function () {
    if (this.state === Config.states.PAUSED) { this.setState(Config.states.PLAYING); }
  };

  Game.prototype.reset = function () {
    this.elapsed = 0;
    this.challengeLevel = 1;
    this.braveLevel = 1;
    if (this.selectedMode === "brave") {
      this.braveRevives = 0;
      this.braveLevelDamaged = false;
      this.braveReviveParticles = [];
    }
    if (this.selectedMode === "endless") { this.resetEndlessRun(); }
    this.endlessLevel = 1;
    this.lastCompletedLevel = 0;
    this.input.reset();
    this.resetWorld(false);
    this.updateLevelMusic();
    this.setState(Config.states.MENU);
  };

  Game.prototype.update = function (deltaTime) {
    var self = this;
    if (this.state === Config.states.CINEMATIC) {
      if (!this.cinematic || this.cinematic.update(deltaTime)) { this.finishBossCinematic(); }
      return;
    }
    this.updateTargetMark();
    if (this.state === Config.states.COUNTDOWN) {
      this.updateCountdown(deltaTime);
      this.updateCamera(deltaTime, false);
      TankGame.Effects.update(deltaTime);
      return;
    }
    if (this.state !== Config.states.PLAYING) {
      this.updateCamera(deltaTime, false);
      return;
    }
    this.elapsed += deltaTime;
    this.levelElapsed += deltaTime;
    if (this.comboTimer > 0) {
      this.comboTimer = Math.max(0, this.comboTimer - deltaTime);
      if (this.comboTimer === 0) { this.comboCount = 0; }
    }
    this.updateWrecks(deltaTime);
    if (this.runShop.healing && this.player.alive) {
      this.shopHealingTimer -= deltaTime;
      if (this.shopHealingTimer <= 0) { this.shopHealingTimer += 10; this.player.health = Math.min(this.player.maxHealth, this.player.health + 100); }
    }
    this.updateFrontStepTrails(deltaTime);
    this.updateBossCloneTrails(deltaTime);
    this.updateRearGuards(deltaTime);
    this.updateSupportAircraft(deltaTime);
    if (this.player.alive) {
      TankGame.Entities.updatePlayer(this.player, this.input, this.worldMap, deltaTime, this.enemies, function (obstacle) {
        if (!self.player.paradiseMade || !obstacle || obstacle.kind === undefined) { return; }
        if (self.onFieldWallBroken) { self.onFieldWallBroken(obstacle); }
        TankGame.Map.removeObstacle(self.worldMap, obstacle);
      });
      this.updateVoidWalker(deltaTime);
      this.player.invulnerable = Math.max(0, this.player.invulnerable - deltaTime);
      this.player.reviveShieldTimer = Math.max(0, (this.player.reviveShieldTimer || 0) - deltaTime);
      if (this.player.reviveShieldTimer <= 0) { this.braveReviveParticles = []; }
      if (!this.player.levelShield) {
        this.player.shieldTimer = Math.max(0, (this.player.shieldTimer || 0) - deltaTime);
        if (this.player.shieldTimer <= 0) { this.player.shieldCharges = 0; }
      }
      if (!this.player.levelRapid) { this.player.rapidTimer = Math.max(0, (this.player.rapidTimer || 0) - deltaTime); }
      if (!this.player.levelPerspective) { this.player.perspectiveTimer = Math.max(0, (this.player.perspectiveTimer || 0) - deltaTime); }
      this.updateTracks(deltaTime);
    }
    this.updateSupplies(deltaTime);
    this.updateJammer(deltaTime);
    this.jammerFlash = Math.max(0, (this.jammerFlash || 0) - deltaTime);
    this.updateBossEnemies(deltaTime);
    this.updateEliteEnemies(deltaTime);
    this.updateBossBattleEffects(deltaTime);
    this.updateFireHazards(deltaTime);
    this.updateCombat(deltaTime);
    this.updateMortarWarnings(deltaTime);
    TankGame.AI.update(this, deltaTime);
    TankGame.Effects.update(deltaTime);
    this.updatePlayerLifeCycle(deltaTime);
    this.updateCamera(deltaTime, false);
    if (this.enemies.length === 0 && this.state === Config.states.PLAYING) {
      this.completeLevel();
    }
  };

  Game.prototype.completeLevel = function () {
    if (this.completionHandled) { return; }
    this.completionHandled = true;
    this.score += Math.max(100, 500 - Math.floor(this.levelElapsed * 5));
    this.resultLevel = this.selectedMode === "endless" ? this.endlessLevel :
      (this.selectedMode === "brave" ? this.braveLevel : this.challengeLevel);
    if (this.selectedMode === "endless") {
      if (this.endlessLevel % Config.partsSettlement.endless.scoreMultiplierInterval === 0) {
        this.score = Math.floor(this.score * Config.partsSettlement.endless.scoreMultiplier);
      }
      this.settleParts(true);
      this.rewardLevel = this.endlessLevel;
      this.rewardStage = "primary";
      this.rewardOptions = this.ensureEarlySurvivalReward(this.createRewardOptions(Config.endlessRewards.base, 3));
      this.setState(Config.states.REWARD);
      return;
    }
    if (this.selectedMode === "challenge" && this.challengeLevel < this.maxChallengeLevel) {
      this.lastCompletedLevel = this.challengeLevel;
      this.setState(Config.states.LEVEL_CLEAR);
      TankGame.Audio.play("levelClear");
      return;
    }
    if (this.selectedMode === "brave") {
      if (!this.braveLevelDamaged) { this.braveRevives += 1; }
      this.score = Math.floor(this.score * Config.partsSettlement.brave.scoreMultiplier);
      this.settleParts(true);
      this.lastCompletedLevel = this.braveLevel;
      this.setState(Config.states.LEVEL_CLEAR);
      TankGame.Audio.play("levelClear");
      return;
    }
    if (this.selectedMode === "challenge") {
      this.lastCompletedLevel = this.maxChallengeLevel;
    }
    this.settleParts(true);
    this.setState(Config.states.VICTORY);
    this.saveRecord();
    TankGame.Audio.play("victory");
  };

  Game.prototype.updateCountdown = function (deltaTime) {
    this.countdown -= deltaTime;
    var tick = Math.ceil(this.countdown);
    if (tick !== this.countdownTick && tick > 0) {
      this.countdownTick = tick;
      TankGame.Audio.play("count");
    }
    if (this.countdown <= 0) {
      this.countdown = 0;
      this.setState(Config.states.PLAYING);
      TankGame.Audio.play("go");
    }
  };

  Game.prototype.getCountdownDisplay = function () {
    return this.countdown > 0.3 ? String(Math.ceil(Math.max(0, this.countdown))) : "GO";
  };

  Game.prototype.updatePlayerLifeCycle = function (deltaTime) {
    if (this.player.alive) { return; }
    if (this.selectedMode === "brave" && this.braveRevives > 0) {
      this.braveRevives -= 1;
      this.reviveBravePlayer();
      return;
    }
    if (!this.playerDeathHandled) {
      this.lives -= 1;
      this.playerDeathHandled = true;
      if (this.lives <= 0) {
        this.comboCount = 0;
        this.comboTimer = 0;
        this.resultLevel = this.selectedMode === "endless" ? this.endlessLevel :
      (this.selectedMode === "brave" ? this.braveLevel : this.challengeLevel);
        this.settleFinalParts();
        this.setState(Config.states.DEFEAT);
        this.saveRecord();
        TankGame.Audio.play("defeat");
        return;
      }
      this.respawnTimer = 1.15;
      this.bullets = this.bullets.filter(function (bullet) { return bullet.team === "player"; });
    }
    this.respawnTimer -= deltaTime;
    if (this.respawnTimer <= 0 && this.state === Config.states.PLAYING) {
      this.respawnPlayer();
    }
  };

  Game.prototype.registerPlayerDamage = function () {
    if (this.selectedMode === "brave") { this.braveLevelDamaged = true; }
  };

  Game.prototype.damageEnemy = function (enemy, damage, effectX, effectY) {
    if (!enemy || !enemy.alive) { return false; }
    enemy.health = Math.max(0, enemy.health - damage);
    enemy.hitFlash = 0.12;
    TankGame.Effects.burst(effectX || enemy.x, effectY || enemy.y, "#ff8e71", 10, 130);
    if (enemy.health > 0) { return true; }
    enemy.alive = false;
    enemy.wreck = true;
    enemy.wreckLife = 3;
    enemy.wreckParticles = enemy.wreckParticles || [];
    if (enemy.isBoss || enemy.isBossClone || enemy.isElite) { this.deactivateBossThreats(enemy); }
    TankGame.Effects.burst(enemy.x, enemy.y, "#ffb15c", 30, 230);
    TankGame.Audio.play("explode");
    enemy.burnSound = TankGame.Audio.playBurning();
    this.registerEnemyKill();
    return true;
  };

  Game.prototype.createBraveReviveParticles = function () {
    return Array.from({ length: 15 }, function (_, index) {
      return {
        angle: Math.PI * 2 * index / 15 + Math.random() * 0.18,
        radius: 43 + Math.random() * 8,
        size: 2.5 + Math.random() * 2.5,
        speed: 0.45 + Math.random() * 0.65,
        drift: 2 + Math.random() * 5,
        phase: Math.random() * Math.PI * 2
      };
    });
  };

  Game.prototype.reviveBravePlayer = function () {
    var player = this.player;
    var spawn = this.worldMap.playerSpawn;
    player.x = spawn.x;
    player.y = spawn.y;
    player.bodyAngle = -Math.PI / 2;
    player.turretAngle = -Math.PI / 2;
    player.health = player.maxHealth;
    player.alive = true;
    player.wreck = false;
    player.hitFlash = 0;
    player.fireCooldown = 0;
    player.invulnerable = 3;
    player.reviveShieldTimer = 3;
    player.wallTime = 0;
    player.wallLocked = false;
    this.playerDeathHandled = false;
    this.respawnTimer = 0;
    this.wrecks = this.wrecks.filter(function (wreck) { return !wreck.playerDeathWreck; });
    this.braveReviveParticles = this.createBraveReviveParticles();
    TankGame.Effects.burst(spawn.x, spawn.y, "#42a5ff", 30, 190);
    TankGame.Audio.play("again");
    this.updateCamera(0, true);
  };

  Game.prototype.respawnPlayer = function () {
    var spawn = this.worldMap.playerSpawn;
    this.player = TankGame.Entities.createTank(spawn.x, spawn.y, "player");
    this.player.bodyAngle = -Math.PI / 2;
    this.player.turretAngle = -Math.PI / 2;
    this.player.invulnerable = 2.2;
    this.player.shieldTimer = 0;
    this.player.rapidTimer = this.player.levelRapid ? 999 : 0;
    this.player.shieldTimer = this.player.levelShield ? 999 : 0;
    this.playerDeathHandled = false;
    TankGame.Effects.burst(spawn.x, spawn.y, "#8cf6c3", 24, 170);
    if (this.selectedMode === "normal") { TankGame.Audio.play("again"); }
  };

  Game.prototype.updateCombat = function (deltaTime) {
    var self = this;

    if (this.player.alive && (this.input.pointer.down || this.input.isDown("Space")) && this.player.fireCooldown <= 0) {
      this.fire(this.player);
      this.player.fireCooldown = Config.playerFireCooldown * (this.player.fireRateMultiplier || 1) * (this.player.levelRapid || this.player.rapidTimer > 0 ? 0.48 : 1);
    }

    this.bullets.forEach(function (bullet) { self.updateBullet(bullet, deltaTime); });
    this.bullets = this.bullets.filter(function (bullet) { return bullet.alive; });
    this.enemies = this.enemies.filter(function (enemy) { return enemy.alive || enemy.wreck; });
    this.muzzleFlashes.forEach(function (flash) { flash.life -= deltaTime; });
    this.muzzleFlashes = this.muzzleFlashes.filter(function (flash) { return flash.life > 0; });
  };

  Game.prototype.updateTargetMark = function () {
    if (this.selectedMode !== "endless" || this.state !== Config.states.PLAYING) {
      this.input.pointer.pressed = false;
      return;
    }
    if (this.markedTarget && !this.markedTarget.alive) { this.markedTarget = null; }
    if (!this.input.pointer.pressed) { return; }
    this.input.pointer.pressed = false;
    if (!this.endlessPermanent.tracking) { return; }
    this.markTargetAt(this.input.pointer.x, this.input.pointer.y);
  };

  Game.prototype.markTargetAt = function (x, y) {
    if (this.selectedMode !== "endless" || this.state !== Config.states.PLAYING || !this.endlessPermanent.tracking) {
      return null;
    }
    var target = this.enemies.slice().reverse().find(function (enemy) {
      var scale = enemy.visualScale || 1;
      var halfWidth = 28 * scale;
      var halfHeight = 25 * scale;
      var drawY = enemy.y - (enemy.leapHeight || 0);
      return enemy.alive && x >= enemy.x - halfWidth && x <= enemy.x + halfWidth &&
        y >= drawY - halfHeight && y <= drawY + halfHeight;
    });
    if (target) { this.markedTarget = target === this.markedTarget ? null : target; }
    return this.markedTarget;
  };

  Game.prototype.deactivateBossThreats = function (enemy) {
    this.bullets.forEach(function (bullet) {
      if (bullet.sourceEnemy === enemy || (bullet.sourceEnemy && bullet.sourceEnemy.bossOwner === enemy)) {
        bullet.alive = false;
      }
    });
    this.bossLasers = this.bossLasers.filter(function (laser) {
      return laser.sourceEnemy !== enemy && (!laser.sourceEnemy || laser.sourceEnemy.bossOwner !== enemy);
    });
    this.enemies.forEach(function (other) {
      if (other.bossOwner === enemy) { other.alive = false; }
    });
    enemy.active_skill = null;
  };

  Game.prototype.fire = function (tank) {
    if (tank.team === "enemy" && tank.isTurret && tank.turretWeapon === "mortar") {
      this.queueTurretMortar(tank);
      return;
    }
    var muzzleDistance = TankGame.Entities.getMuzzleDistance(tank);
    var x = tank.x + Math.cos(tank.turretAngle) * muzzleDistance;
    var y = tank.y + Math.sin(tank.turretAngle) * muzzleDistance;
    var splitLevel = tank.team === "player" && this.selectedMode === "endless" ? Math.min(4, this.endlessPermanent.splitBullet || 0) : 0;
    var bulletCount = 1 + splitLevel;
    var spread = Math.min(Math.PI / 12, splitLevel * 5 * Math.PI / 180);
    var trackingActive = tank.team === "player" && this.selectedMode === "endless" &&
      this.endlessPermanent.tracking && this.markedTarget && this.markedTarget.alive;
    var self = this;
    for (var bulletIndex = 0; bulletIndex < bulletCount; bulletIndex += 1) {
      var offset = bulletCount === 1 ? 0 : -spread + (spread * 2 * bulletIndex / (bulletCount - 1));
      var bullet = TankGame.Entities.createBullet(x, y, tank.turretAngle + offset, tank.team);
      bullet.damage = (tank.bulletDamage || Config.bulletDamage) * (splitLevel ? 0.7 : 1);
      if (tank.team === "player" && this.runShop.redBullet) { bullet.redBullet = true; bullet.damage *= 2; }
      if (tank.team === "player" && ["endless", "brave"].indexOf(this.selectedMode) !== -1 && this.runShop.bomb && Math.random() < 0.1) {
        bullet.bossBomb = true;
        bullet.playerBomb = true;
        bullet.radius = 9;
        bullet.speed = Config.bulletSpeed * 0.68;
        bullet.explosionRadius = 80;
      } else if (tank.team === "player" && ["endless", "brave"].indexOf(this.selectedMode) !== -1 && this.runShop.mortar && Math.random() < 0.01) {
        bullet.playerMortar = true;
        bullet.fixedTurretMortar = true;
        bullet.mortar = true;
        bullet.bossBomb = true;
        bullet.radius = 9;
        bullet.startX = x;
        bullet.startY = y;
        bullet.targetX = this.input.pointer.x;
        bullet.targetY = this.input.pointer.y;
        bullet.flightDuration = 0.72;
        bullet.flightTimer = bullet.flightDuration;
        bullet.explosionRadius = 92;
        bullet.lifetime = bullet.flightDuration;
      }
      bullet.trackingRemaining = trackingActive ? (tank.trackingTime || 0) : 0;
      if (tank.isBoss || tank.isBossClone || tank.isElite) { bullet.sourceEnemy = tank; }
      if ((tank.isBoss || tank.isBossClone || tank.isElite) && (tank.active_skill === "bomb" || tank.active_skill === "mortar") && tank.skill_states[tank.active_skill].phase === "effect") {
        bullet.bossBomb = true;
        bullet.mortar = tank.active_skill === "mortar";
        bullet.damage = Math.max(1, Math.round((tank.bulletDamage || Config.bulletDamage) * 1.25));
        bullet.radius = 9;
        bullet.speed = Config.bulletSpeed * 0.58;
        bullet.angle = tank.active_skill === "mortar" && this.player.alive ? Math.atan2(this.player.y - tank.y, this.player.x - tank.x) : bullet.angle;
        bullet.lifetime = this.getBossSkillConfig(tank.active_skill).range / bullet.speed;
      }
      if (tank.team === "enemy" && tank.isTurret && tank.turretWeapon !== "bullet") {
        bullet.bossBomb = true;
        bullet.sourceEnemy = tank;
        bullet.turretWeapon = tank.turretWeapon;
        bullet.mortar = tank.turretWeapon === "mortar";
        bullet.damage = Math.max(1, Math.round((tank.bulletDamage || Config.bulletDamage) * 1.25));
        bullet.radius = 9;
        bullet.speed = Config.bulletSpeed * Config.fixedTurret.projectileSpeedMultiplier;
        bullet.explosionRadius = tank.turretWeapon === "mortar" ? Config.fixedTurret.mortarRadius : Config.fixedTurret.bombRadius;
        bullet.angle = tank.turretWeapon === "mortar" && this.player.alive ? Math.atan2(this.player.y - tank.y, this.player.x - tank.x) : bullet.angle;
        bullet.lifetime = this.getEnemyAttackRange(tank, tank.mode || this.mode) / bullet.speed;
      }
      self.bullets.push(bullet);
    }
    if (tank.team === "player" && this.selectedMode === "endless" && this.endlessPermanent.rearShot && this.rearGuardCooldown <= 0) {
      this.spawnRearGuard(tank, muzzleDistance);
      this.rearGuardCooldown = 2;
    }
    if (tank.team === "player" && this.selectedMode === "endless" && (this.endlessPermanent.frontStep || this.runShop.mudTruck)) {
      var startX = tank.x;
      var startY = tank.y;
      var teleportPath = this.movePlayerSafely(tank, tank.turretAngle, 48, startX, startY);
      this.spawnFrontStepTrails(teleportPath, tank.bodyAngle, tank.turretAngle);
    }
    this.muzzleFlashes.push({ x: x, y: y, life: 0.09, color: tank.team === "player" ? "#c8ffe5" : "#ff9a78" });
    if (tank.team === "player") {
      this.stats.shots += 1;
      TankGame.Audio.play("shoot");
    } else {
      TankGame.Audio.play("enemyShoot");
    }
  };

  Game.prototype.queueTurretMortar = function (tank) {
    var config = Config.fixedTurret;
    if (!this.player.alive) { return; }
    this.mortarWarnings.push({
      x: this.player.x,
      y: this.player.y,
      radius: config.mortarWarningRadius,
      timer: config.mortarWarningDuration,
      maxTimer: config.mortarWarningDuration,
      sourceEnemy: tank,
      damage: Math.max(1, Math.round((tank.bulletDamage || Config.bulletDamage) * 1.25)),
      explosionRadius: config.mortarRadius,
      alive: true
    });
    TankGame.Audio.play("enemyShoot");
  };

  Game.prototype.updateMortarWarnings = function (deltaTime) {
    var self = this;
    this.mortarWarnings.forEach(function (warning) {
      if (!warning.sourceEnemy || !warning.sourceEnemy.alive) {
        warning.alive = false;
        return;
      }
      warning.timer -= deltaTime;
      if (warning.timer > 0) { return; }
      warning.alive = false;
      if (!warning.sourceEnemy || !warning.sourceEnemy.alive) { return; }
      self.launchTurretMortar(warning);
    });
    this.mortarWarnings = this.mortarWarnings.filter(function (warning) { return warning.alive; });
  };

  Game.prototype.launchTurretMortar = function (warning) {
    var source = warning.sourceEnemy;
    var muzzleDistance = TankGame.Entities.getMuzzleDistance(source);
    var bullet = TankGame.Entities.createBullet(
      source.x + Math.cos(source.turretAngle) * muzzleDistance,
      source.y + Math.sin(source.turretAngle) * muzzleDistance,
      source.turretAngle,
      "enemy"
    );
    bullet.fixedTurretMortar = true;
    bullet.mortar = true;
    bullet.bossBomb = true;
    bullet.sourceEnemy = source;
    bullet.startX = bullet.x;
    bullet.startY = bullet.y;
    bullet.targetX = warning.x;
    bullet.targetY = warning.y;
    bullet.flightDuration = Config.fixedTurret.mortarFlightDuration;
    bullet.flightTimer = bullet.flightDuration;
    bullet.damage = warning.damage;
    bullet.explosionRadius = warning.explosionRadius;
    bullet.radius = 9;
    bullet.lifetime = bullet.flightDuration;
    this.bullets.push(bullet);
    this.muzzleFlashes.push({ x: bullet.x, y: bullet.y, life: 0.12, color: "#ff765e" });
  };

  Game.prototype.getEnemyAttackRange = function (enemy, mode) {
    mode = mode || this.mode;
    if ((enemy.isBoss || enemy.isBossClone || enemy.isElite) && (enemy.active_skill === "bomb" || enemy.active_skill === "mortar") && enemy.skill_states[enemy.active_skill].phase === "effect") {
      return this.getBossSkillConfig(enemy.active_skill).range;
    }
    if (enemy.isTurret) { return mode.attackRange * Config.fixedTurret.attackRangeMultiplier; }
    return mode.attackRange;
  };

  Game.prototype.makeFixedTurret = function (enemy) {
    enemy.isTurret = true;
    enemy.canMove = false;
    enemy.attackRangeMultiplier = Config.fixedTurret.attackRangeMultiplier;
    enemy.health = Math.round(enemy.health * Config.fixedTurret.healthMultiplier);
    enemy.maxHealth = enemy.health;
  };

  Game.prototype.getEnemyFireCooldown = function (enemy, mode) {
    if (enemy.isTurret) { return mode.fireCooldown * Config.fixedTurret.fireCooldownMultiplier; }
    if ((enemy.isBoss || enemy.isBossClone) && enemy.active_skill === "gatling" && enemy.skill_states.gatling.phase === "effect") {
      return mode.fireCooldown * Config.bossTank.gatling.fireScale;
    }
    return mode.fireCooldown;
  };

  Game.prototype.makeBossEnemy = function (enemy) {
    var boss = Config.bossTank;
    enemy.visualScale = boss.scale;
    enemy.radius *= boss.scale;
    enemy.health = Math.round(enemy.health * boss.healthMultiplier);
    enemy.maxHealth = enemy.health;
    enemy.bulletDamage = Math.round(enemy.bulletDamage * boss.damageMultiplier);
    enemy.bossShieldCharges = 1;
    enemy.bossState = "idle";
    enemy.bossBurstTimer = boss.burstInterval;
    enemy.bossChargeCooldown = boss.chargeCooldown;
    enemy.bossChargePrepareTimer = 0;
    enemy.bossChargeAngle = enemy.bodyAngle;
    enemy.bossChargeRemaining = 0;
    enemy.bossChargeHitPlayer = false;
    enemy.skillDecisionTimer = boss.skillDecisionDelay;
    enemy.bossSkillLevel = this.getBossSkillLevel();
    enemy.boss_skill_level = enemy.bossSkillLevel;
    enemy.bossLeapIntent = "chase";
    enemy.bossLeapEvaluatedBullet = null;
    enemy.bossLeapRepositionTimer = this.getBossSkillConfig("leap").repositionCheckInterval;
    enemy.skillCursor = 0;
    enemy.specialMovementLocked = false;
  };

  Game.prototype.updateBossEnemies = function (deltaTime) {
    var self = this;
    if (this.selectedMode !== "endless" && this.selectedMode !== "brave") { return; }
    this.enemies.slice().forEach(function (enemy) {
      if (enemy.isBossClone) {
        if (enemy.bossOwner && !enemy.bossOwner.alive) {
          self.deactivateBossThreats(enemy);
          enemy.alive = false;
          return;
        }
        enemy.cloneLifetime -= deltaTime;
        if (enemy.cloneLifetime <= 0) {
          self.deactivateBossThreats(enemy);
          enemy.alive = false;
          return;
        }
      }
      if ((!enemy.isBoss && !enemy.isBossClone) || !enemy.alive) { return; }
      self.updateBossSmartLeap(enemy, deltaTime);
      self.updateBossBurst(enemy, deltaTime);
      self.updateBossSkillScheduler(enemy, deltaTime);
      self.updateBossCharge(enemy, deltaTime);
      enemy.specialMovementLocked = self.isBossMovementLocked(enemy);
    });
    this.bossLasers.forEach(function (laser) { laser.life -= deltaTime; });
    this.bossLasers = this.bossLasers.filter(function (laser) { return laser.life > 0; });
  };

  Game.prototype.updateBossBurst = function (enemy, deltaTime) {
    enemy.bossBurstTimer -= deltaTime;
    if (enemy.bossBurstTimer > 0) { return; }
    enemy.bossBurstTimer += Config.bossTank.burstInterval;
    if (enemy.bossBurstTimer <= 0) { enemy.bossBurstTimer = Config.bossTank.burstInterval; }
    this.spawnBossBurst(enemy);
  };

  Game.prototype.updateBossSmartLeap = function (enemy, deltaTime) {
    var state = enemy.skill_states.leap;
    var config = this.getBossSkillConfig("leap");
    if (!state || state.state !== "ready" || enemy.active_skill || !this.player.alive) { return; }
    enemy.bossLeapRepositionTimer = Math.max(0, (enemy.bossLeapRepositionTimer || 0) - deltaTime);
    var distanceToPlayer = Math.hypot(this.player.x - enemy.x, this.player.y - enemy.y);
    var wall = distanceToPlayer <= this.getEnemyAttackRange(enemy, enemy.mode) ?
      TankGame.Map.findBreakableWallBetween(this.worldMap, enemy.x, enemy.y, this.player.x, this.player.y, 3) : null;
    if (enemy.isBoss && wall && (enemy.skillDecisionTimer || 0) <= 0) {
      enemy.bossLeapIntent = "chase";
      this.startBossSkill(enemy, "leap");
      return;
    }
    if (distanceToPlayer > config.distantTriggerRange) {
      enemy.bossLeapIntent = "pursuit";
      this.startBossSkill(enemy, "leap");
      return;
    }
    if (this.isBossChaseBlocked(enemy)) {
      enemy.bossLeapIntent = "chase";
      this.startBossSkill(enemy, "leap");
      return;
    }
    var threat = this.findBossBulletThreat(enemy, 0.3);
    if (threat && threat !== enemy.bossLeapEvaluatedBullet) {
      enemy.bossLeapEvaluatedBullet = threat;
      if (Math.random() < config.dodgeChance) {
        enemy.bossLeapIntent = "dodge";
        enemy.bossLeapDodgeAngle = threat.angle;
        this.startBossSkill(enemy, "leap");
        return;
      }
    }
    if (enemy.health < enemy.maxHealth && enemy.bossLeapRepositionTimer <= 0) {
      enemy.bossLeapRepositionTimer = config.repositionCheckInterval;
      if (Math.random() < config.repositionChance) {
        enemy.bossLeapIntent = "reposition";
        this.startBossSkill(enemy, "leap");
      }
    }
  };

  Game.prototype.isBossChaseBlocked = function (enemy) {
    if (!this.player.alive || enemy.aiState !== TankGame.AI.states.CHASE) { return false; }
    var angle = Math.atan2(this.player.y - enemy.y, this.player.x - enemy.x);
    var distance = Math.min(Config.bossTank.chargeDistance, Math.hypot(this.player.x - enemy.x, this.player.y - enemy.y));
    var hasWall = !this.isChargePathClear(enemy, angle, distance);
    var hasDetour = enemy.path && enemy.path.length > enemy.pathIndex;
    return hasWall && !hasDetour;
  };

  Game.prototype.findBossBulletThreat = function (enemy, horizon) {
    var threat = null;
    this.bullets.some(function (bullet) {
      if (!bullet.alive || bullet.team !== "player") { return false; }
      var speed = bullet.speed || Config.bulletSpeed;
      var travel = Math.min(horizon, Math.max(0, Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y) / speed));
      var endX = bullet.x + Math.cos(bullet.angle) * speed * travel;
      var endY = bullet.y + Math.sin(bullet.angle) * speed * travel;
      var blocked = this.worldMap.obstacles.some(function (obstacle) {
        if (obstacle.kind === "W") { return false; }
        return TankGame.Collision.segmentIntersectsRectangle(bullet.x, bullet.y, endX, endY, obstacle, bullet.radius);
      });
      if (blocked) { return false; }
      if (TankGame.Collision.segmentIntersectsCircle(bullet.x, bullet.y, endX, endY, enemy, bullet.radius)) {
        threat = bullet;
        return true;
      }
      return false;
    }, this);
    return threat;
  };

  Game.prototype.spawnBossBurst = function (enemy) {
    var boss = Config.bossTank;
    var activeCount = this.bullets.filter(function (bullet) { return bullet.alive && bullet.bossBurst; }).length;
    if (activeCount + boss.burstBulletCount > boss.maxActiveBurstBullets) { return; }
    for (var i = 0; i < boss.burstBulletCount; i += 1) {
      var angle = Math.PI * 2 * i / boss.burstBulletCount;
      var distance = enemy.radius + Config.bulletRadius + 3;
      var bullet = TankGame.Entities.createBullet(
        enemy.x + Math.cos(angle) * distance,
        enemy.y + Math.sin(angle) * distance,
        angle,
        "enemy"
      );
      bullet.damage = Math.max(1, Math.round(enemy.bulletDamage * boss.burstDamageMultiplier));
      bullet.speed = Config.bulletSpeed * boss.burstSpeedMultiplier;
      bullet.bossBurst = true;
      bullet.sourceEnemy = enemy;
      this.bullets.push(bullet);
    }
    TankGame.Effects.burst(enemy.x, enemy.y, "#ffd700", 24, 190);
    this.shake = Math.max(this.shake, 5);
  };

  Game.prototype.updateBossCharge = function (enemy, deltaTime) {
    var boss = Config.bossTank;
    if (enemy.active_skill === "leap") { return; }
    if (enemy.bossState === "idle") {
      enemy.bossChargeCooldown = Math.max(0, enemy.bossChargeCooldown - deltaTime);
      if (enemy.bossChargeCooldown <= 0 && this.player.alive) {
        enemy.bossState = "charging_prepare";
        enemy.bossChargePrepareTimer = boss.chargePrepareTime;
        enemy.bossChargeHitPlayer = false;
      }
      return;
    }
    if (enemy.bossState === "charging_prepare") {
      if (!this.player.alive) { this.finishBossCharge(enemy); return; }
      enemy.bossChargeAngle = Math.atan2(this.player.y - enemy.y, this.player.x - enemy.x);
      enemy.bodyAngle = enemy.bossChargeAngle;
      enemy.turretAngle = enemy.bossChargeAngle;
      enemy.bossChargePrepareTimer -= deltaTime;
      if (enemy.bossChargePrepareTimer <= 0) {
        enemy.bossState = "charging";
        enemy.bossChargeRemaining = boss.chargeDistance;
      }
      return;
    }
    if (enemy.bossState === "charging") { this.moveBossCharge(enemy, deltaTime); return; }
    if (enemy.bossState === "cooldown") {
      enemy.bossChargeCooldown = Math.max(0, enemy.bossChargeCooldown - deltaTime);
      if (enemy.bossChargeCooldown <= 0) { enemy.bossState = "idle"; }
    }
  };

  Game.prototype.moveBossCharge = function (enemy, deltaTime) {
    var boss = Config.bossTank;
    var movement = Math.min(enemy.bossChargeRemaining, enemy.mode.enemySpeed * boss.chargeSpeedMultiplier * deltaTime);
    var steps = Math.max(1, Math.ceil(movement / Math.max(8, enemy.radius * 0.45)));
    var stepDistance = movement / steps;
    for (var i = 0; i < steps; i += 1) {
      var startX = enemy.x;
      var startY = enemy.y;
      var nextX = startX + Math.cos(enemy.bossChargeAngle) * stepDistance;
      var nextY = startY + Math.sin(enemy.bossChargeAngle) * stepDistance;
      if (TankGame.Map.circleCollides(this.worldMap, { x: nextX, y: nextY, radius: enemy.radius })) {
        this.finishBossCharge(enemy);
        return;
      }
      enemy.x = nextX;
      enemy.y = nextY;
      enemy.bossChargeRemaining -= stepDistance;
      if (!enemy.bossChargeHitPlayer && this.player.alive && this.player.invulnerable <= 0 &&
          TankGame.Collision.segmentIntersectsCircle(startX, startY, nextX, nextY, this.player, enemy.radius)) {
        enemy.bossChargeHitPlayer = true;
        this.damagePlayerFromCharge(enemy, startX, startY);
      }
    }
    if (enemy.bossChargeRemaining <= 0) { this.finishBossCharge(enemy); }
  };

  Game.prototype.finishBossCharge = function (enemy) {
    enemy.bossState = "cooldown";
    enemy.bossChargeCooldown = Config.bossTank.chargeCooldown;
    enemy.bossChargePrepareTimer = 0;
    enemy.bossChargeRemaining = 0;
    enemy.bossChargeHitPlayer = false;
  };

  Game.prototype.isChargePathClear = function (enemy, angle, distance) {
    var endX = enemy.x + Math.cos(angle) * distance;
    var endY = enemy.y + Math.sin(angle) * distance;
    if (endX < enemy.radius || endY < enemy.radius ||
        endX > Config.worldWidth - enemy.radius || endY > Config.worldHeight - enemy.radius) {
      return false;
    }
    return !this.worldMap.obstacles.some(function (obstacle) {
      if (obstacle.kind === "W") { return false; }
      return TankGame.Collision.segmentIntersectsRectangle(
        enemy.x, enemy.y, endX, endY, obstacle, enemy.radius
      );
    });
  };

  Game.prototype.updateBossSkillScheduler = function (enemy, deltaTime) {
    var self = this;
    enemy.boss_skills.forEach(function (skill) {
      var state = enemy.skill_states[skill];
      if (state.state !== "cooldown") { return; }
      state.timer = Math.max(0, state.timer - deltaTime);
      if (state.timer === 0) { state.state = "ready"; state.phase = "ready"; }
    });
    if (enemy.active_skill) {
      this.updateActiveBossSkill(enemy, deltaTime);
      return;
    }
    enemy.skillDecisionTimer = Math.max(0, enemy.skillDecisionTimer - deltaTime);
    if (enemy.skillDecisionTimer > 0 || !this.player.alive) { return; }
    var ready = enemy.boss_skills.filter(function (skill) {
      return skill !== "leap" && enemy.skill_states[skill].state === "ready";
    });
    if (!ready.length) { enemy.skillDecisionTimer = 0.5; return; }
    var selected = ready[enemy.skillCursor % ready.length];
    enemy.skillCursor += 1;
    self.startBossSkill(enemy, selected);
  };

  Game.prototype.startBossSkill = function (enemy, skill) {
    var state = enemy.skill_states[skill];
    if (!enemy.alive || !state || state.state !== "ready" || enemy.active_skill ||
        (enemy.isBossClone && skill === "clone")) { return false; }
    enemy.active_skill = skill;
    state.state = "casting";
    state.phase = "charge";
    if (skill === "gatling") { state.timer = this.getBossSkillConfig("gatling").charge; }
    if (skill === "bomb" || skill === "mortar") { state.timer = this.getBossSkillConfig(skill).charge; }
    if (skill === "leap") {
      state.phase = "effect";
      state.timer = this.getBossSkillConfig("leap").duration;
      state.elapsed = 0;
      state.startX = enemy.x;
      state.startY = enemy.y;
      var target = this.findBossLanding(enemy, this.getBossSkillConfig("leap"), enemy.bossLeapIntent, enemy.bossLeapDodgeAngle);
      state.targetX = target.x;
      state.targetY = target.y;
    }
    if (skill === "laser") {
      state.timer = this.getBossSkillConfig("laser").charge;
      state.aimAngle = Math.atan2(this.player.y - enemy.y, this.player.x - enemy.x);
    }
    if (skill === "clone") {
      state.phase = "effect";
      state.timer = this.getBossSkillConfig("clone").duration;
      this.spawnBossClone(enemy);
    }
    return true;
  };

  Game.prototype.updateActiveBossSkill = function (enemy, deltaTime) {
    var skill = enemy.active_skill;
    var state = enemy.skill_states[skill];
    state.timer -= deltaTime;
    if (skill === "laser" && state.phase === "charge" && this.player.alive) {
      state.aimAngle = Math.atan2(this.player.y - enemy.y, this.player.x - enemy.x);
      enemy.turretAngle = state.aimAngle;
    }
    if (skill === "leap" && state.phase === "effect") {
      state.elapsed += deltaTime;
      var progress = Math.min(1, state.elapsed / this.getBossSkillConfig("leap").duration);
      var arc = Math.sin(progress * Math.PI);
      enemy.x = state.startX + (state.targetX - state.startX) * progress;
      enemy.y = state.startY + (state.targetY - state.startY) * progress;
      enemy.leapHeight = arc * 34;
    }
    if (state.timer > 0) { return; }
    if (skill === "gatling" && state.phase === "charge") {
      state.phase = "effect"; state.timer = this.getBossSkillConfig("gatling").duration; return;
    }
    if ((skill === "bomb" || skill === "mortar") && state.phase === "charge") {
      state.phase = "effect"; state.timer = this.getBossSkillConfig(skill).duration; return;
    }
    if (skill === "laser" && state.phase === "charge") {
      state.phase = "fire_delay"; state.timer = this.getBossSkillConfig("laser").fireDelay; return;
    }
    if (skill === "laser" && state.phase === "fire_delay") { this.fireBossLaser(enemy, state.aimAngle); }
    if (skill === "leap") { enemy.x = state.targetX; enemy.y = state.targetY; enemy.leapHeight = 0; }
    this.finishBossSkill(enemy, skill);
  };

  Game.prototype.finishBossSkill = function (enemy, skill) {
    var config = skill === "leap" || skill === "clone" || skill === "bomb" || skill === "mortar" || skill === "gatling" || skill === "laser" ?
      this.getBossSkillConfig(skill) : Config.bossTank[skill];
    var state = enemy.skill_states[skill];
    state.state = "cooldown";
    state.phase = "cooldown";
    state.timer = config.cooldown;
    enemy.active_skill = null;
    enemy.skillDecisionTimer = 0.75;
    if (skill === "leap") { enemy.bossLeapIntent = "chase"; }
  };

  Game.prototype.isBossMovementLocked = function (enemy) {
    if (enemy.bossState === "charging_prepare" || enemy.bossState === "charging") { return true; }
    if (!enemy.active_skill) { return false; }
    var state = enemy.skill_states[enemy.active_skill];
    return enemy.active_skill === "leap" || enemy.active_skill === "laser" ||
      ((enemy.active_skill === "gatling" || enemy.active_skill === "bomb" || enemy.active_skill === "mortar") && state.phase === "charge");
  };

  Game.prototype.findBossLanding = function (enemy, config, intent, dodgeAngle) {
    var anchorX = enemy.x;
    var anchorY = enemy.y;
    var minimumDistance = intent === "pursuit" ? Math.max(config.minimumDistance, config.maximumDistance * 0.75) :
      config.minimumDistance;
    var maximumDistance = config.maximumDistance;
    var preferredAngle = intent === "dodge" && typeof dodgeAngle === "number" ? dodgeAngle + Math.PI :
      Math.atan2(this.player.y - enemy.y, this.player.x - enemy.x);
    for (var attempt = 0; attempt < 40; attempt += 1) {
      var angle = intent !== "reposition" && attempt < 8 ? preferredAngle + (attempt - 3.5) * 0.22 : Math.random() * Math.PI * 2;
      var distance = minimumDistance + Math.random() * (maximumDistance - minimumDistance);
      var x = Math.max(enemy.radius, Math.min(Config.worldWidth - enemy.radius, anchorX + Math.cos(angle) * distance));
      var y = Math.max(enemy.radius, Math.min(Config.worldHeight - enemy.radius, anchorY + Math.sin(angle) * distance));
      if (!TankGame.Map.circleCollides(this.worldMap, { x: x, y: y, radius: enemy.radius }) &&
          !TankGame.Collision.tankCollidesWithWreck({ x: x, y: y, radius: enemy.radius }, this.enemies)) {
        return { x: x, y: y };
      }
    }
    return { x: enemy.x, y: enemy.y };
  };

  Game.prototype.spawnBossClone = function (enemy) {
    var target = this.findBossLanding(enemy, Config.bossTank.clone);
    var clone = TankGame.Entities.createTank(target.x, target.y, "enemy");
    var points = [];
    for (var pointIndex = 0; pointIndex < 14; pointIndex += 1) {
      var pointProgress = pointIndex / 13;
      points.push({
        x: enemy.x + (target.x - enemy.x) * pointProgress,
        y: enemy.y + (target.y - enemy.y) * pointProgress,
        progress: pointProgress
      });
    }
    this.bossCloneTrails.push({
      x1: enemy.x,
      y1: enemy.y,
      x2: target.x,
      y2: target.y,
      points: points,
      life: 0.6,
      maxLife: 0.6,
      startColor: "#ffd700",
      endColor: "#c77dff"
    });
    var cloneSkills = enemy.boss_skills.filter(function (skill) { return skill !== "clone"; });
    clone.isBossClone = true;
    clone.isShadow = true;
    clone.health = 1;
    clone.maxHealth = 1;
    var cloneDamage = Math.max(1, Math.round(enemy.bulletDamage * 0.5));
    clone.bulletDamage = cloneDamage;
    clone.bodyAngle = enemy.bodyAngle;
    clone.turretAngle = Math.atan2(this.player.y - clone.y, this.player.x - clone.x);
    clone.cloneLifetime = this.getBossSkillConfig("clone").duration;
    clone.bossOwner = enemy;
    clone.mode = enemy.mode;
    TankGame.AI.initialize(clone, this.enemies.length, enemy.mode);
    clone.boss_skills = cloneSkills;
    clone.skill_states = {};
    cloneSkills.forEach(function (skill) {
      clone.skill_states[skill] = { state: "ready", timer: 0, phase: "ready" };
    });
    clone.active_skill = null;
    this.makeBossEnemy(clone);
    clone.visualScale = 1;
    clone.radius = 23;
    clone.health = 1;
    clone.maxHealth = 1;
    clone.bulletDamage = cloneDamage;
    clone.bossShieldCharges = 0;
    this.enemies.push(clone);
    TankGame.Effects.burst(clone.x, clone.y, "#c77dff", 22, 165);
  };

  Game.prototype.fireBossLaser = function (enemy, angle) {
    var length = Math.hypot(Config.worldWidth, Config.worldHeight);
    var endX = enemy.x + Math.cos(angle) * length;
    var endY = enemy.y + Math.sin(angle) * length;
    this.bossLasers.push({ x1: enemy.x, y1: enemy.y, x2: endX, y2: endY, life: 0.24, maxLife: 0.24, sourceEnemy: enemy });
    if (this.player.alive && this.player.invulnerable <= 0 &&
        TankGame.Collision.segmentIntersectsCircle(enemy.x, enemy.y, endX, endY, this.player, 10)) {
      this.damagePlayerFromSpecial(
        Math.max(1, Math.round(enemy.bulletDamage * this.getBossSkillConfig("laser").damageMultiplier)), enemy.x, enemy.y
      );
    }
    TankGame.Effects.burst(enemy.x, enemy.y, "#ffd700", 28, 230);
    this.shake = Math.max(this.shake, 11);
  };

  Game.prototype.makeEliteEnemy = function (enemy) {
    var elite = Config.eliteTank;
    enemy.isElite = true;
    enemy.visualScale = elite.scale;
    enemy.radius *= elite.scale;
    enemy.health = Math.round(enemy.health * elite.healthMultiplier);
    enemy.maxHealth = enemy.health;
    enemy.bulletDamage = Math.round(enemy.bulletDamage * elite.damageMultiplier);
    enemy.eliteState = "idle";
    enemy.burstTimer = elite.burstInterval;
    enemy.chargeCooldown = elite.chargeCooldown;
    enemy.chargePrepareTimer = 0;
    enemy.chargeAngle = enemy.bodyAngle;
    enemy.chargeRemaining = 0;
    enemy.chargeHitPlayer = false;
    enemy.eliteSkill = null;
    enemy.eliteSkillDecisionTimer = 0;
    enemy.eliteSkillState = null;
    if (this.getMapLevel() > 30 && Math.random() < 0.5) {
      enemy.eliteSkill = Math.random() < 0.5 ? "bomb" : "mortar";
      enemy.boss_skills = [enemy.eliteSkill];
      enemy.skill_states = {};
      enemy.skill_states[enemy.eliteSkill] = { state: "ready", timer: 0, phase: "ready" };
      enemy.active_skill = null;
      enemy.skillDecisionTimer = 2.5;
    }
  };

  Game.prototype.updateEliteEnemies = function (deltaTime) {
    var self = this;
    if (this.selectedMode !== "endless") { return; }
    this.enemies.forEach(function (enemy) {
      if (!enemy.isElite || !enemy.alive) { return; }
      self.updateEliteSkill(enemy, deltaTime);
      self.updateEliteBurst(enemy, deltaTime);
      self.updateEliteCharge(enemy, deltaTime);
      enemy.specialMovementLocked = Boolean(enemy.active_skill && enemy.skill_states[enemy.active_skill] && enemy.skill_states[enemy.active_skill].phase === "charge");
    });
  };

  Game.prototype.updateEliteSkill = function (enemy, deltaTime) {
    var skill = enemy.eliteSkill;
    var state;
    if (!skill || !enemy.skill_states || !enemy.skill_states[skill]) { return; }
    state = enemy.skill_states[skill];
    if (state.state === "cooldown") {
      state.timer = Math.max(0, state.timer - deltaTime);
      if (state.timer === 0) { state.state = "ready"; state.phase = "ready"; }
    }
    if (enemy.active_skill) {
      this.updateActiveBossSkill(enemy, deltaTime);
      return;
    }
    enemy.skillDecisionTimer = Math.max(0, (enemy.skillDecisionTimer || 0) - deltaTime);
    if (enemy.skillDecisionTimer <= 0 && this.player.alive && state.state === "ready") {
      this.startBossSkill(enemy, skill);
    }
  };

  Game.prototype.updateEliteBurst = function (enemy, deltaTime) {
    enemy.burstTimer -= deltaTime;
    if (enemy.burstTimer > 0) { return; }
    enemy.burstTimer += Config.eliteTank.burstInterval;
    if (enemy.burstTimer <= 0) { enemy.burstTimer = Config.eliteTank.burstInterval; }
    this.spawnEliteBurst(enemy);
  };

  Game.prototype.spawnEliteBurst = function (enemy) {
    var elite = Config.eliteTank;
    var activeCount = this.bullets.filter(function (bullet) { return bullet.alive && bullet.eliteBurst; }).length;
    if (activeCount + elite.burstBulletCount > elite.maxActiveBurstBullets) { return; }
    for (var i = 0; i < elite.burstBulletCount; i += 1) {
      var angle = Math.PI * 2 * i / elite.burstBulletCount;
      var distance = enemy.radius + Config.bulletRadius + 3;
      var bullet = TankGame.Entities.createBullet(
        enemy.x + Math.cos(angle) * distance,
        enemy.y + Math.sin(angle) * distance,
        angle,
        "enemy"
      );
      bullet.damage = Math.max(1, Math.round(enemy.bulletDamage * elite.burstDamageMultiplier));
      bullet.speed = Config.bulletSpeed * elite.burstSpeedMultiplier;
      bullet.eliteBurst = true;
      this.bullets.push(bullet);
    }
    TankGame.Effects.burst(enemy.x, enemy.y, "#e3b957", 20, 180);
    this.shake = Math.max(this.shake, 4);
  };

  Game.prototype.updateEliteCharge = function (enemy, deltaTime) {
    var elite = Config.eliteTank;
    if (enemy.active_skill) { return; }
    if (enemy.eliteState === "idle") {
      enemy.chargeCooldown = Math.max(0, enemy.chargeCooldown - deltaTime);
      if (enemy.chargeCooldown <= 0 && this.player.alive) {
        enemy.eliteState = "charging_prepare";
        enemy.chargePrepareTimer = elite.chargePrepareTime;
        enemy.chargeHitPlayer = false;
      }
      return;
    }
    if (enemy.eliteState === "charging_prepare") {
      if (!this.player.alive) {
        this.finishEliteCharge(enemy);
        return;
      }
      enemy.chargeAngle = Math.atan2(this.player.y - enemy.y, this.player.x - enemy.x);
      enemy.bodyAngle = enemy.chargeAngle;
      enemy.turretAngle = enemy.chargeAngle;
      enemy.chargePrepareTimer -= deltaTime;
      if (enemy.chargePrepareTimer <= 0) {
        enemy.eliteState = "charging";
        enemy.chargeRemaining = elite.chargeDistance;
      }
      return;
    }
    if (enemy.eliteState === "charging") {
      this.moveEliteCharge(enemy, deltaTime);
      return;
    }
    if (enemy.eliteState === "cooldown") {
      enemy.chargeCooldown = Math.max(0, enemy.chargeCooldown - deltaTime);
      if (enemy.chargeCooldown <= 0) { enemy.eliteState = "idle"; }
    }
  };

  Game.prototype.moveEliteCharge = function (enemy, deltaTime) {
    var elite = Config.eliteTank;
    var movement = Math.min(enemy.chargeRemaining, enemy.mode.enemySpeed * elite.chargeSpeedMultiplier * deltaTime);
    var steps = Math.max(1, Math.ceil(movement / Math.max(8, enemy.radius * 0.45)));
    var stepDistance = movement / steps;
    for (var i = 0; i < steps; i += 1) {
      var startX = enemy.x;
      var startY = enemy.y;
      var nextX = startX + Math.cos(enemy.chargeAngle) * stepDistance;
      var nextY = startY + Math.sin(enemy.chargeAngle) * stepDistance;
      if (TankGame.Map.circleCollides(this.worldMap, { x: nextX, y: nextY, radius: enemy.radius })) {
        this.finishEliteCharge(enemy);
        return;
      }
      enemy.x = nextX;
      enemy.y = nextY;
      enemy.chargeRemaining -= stepDistance;
      if (!enemy.chargeHitPlayer && this.player.alive && this.player.invulnerable <= 0 &&
          TankGame.Collision.segmentIntersectsCircle(startX, startY, nextX, nextY, this.player, enemy.radius)) {
        enemy.chargeHitPlayer = true;
        this.damagePlayerFromCharge(enemy, startX, startY);
      }
    }
    if (enemy.chargeRemaining <= 0) { this.finishEliteCharge(enemy); }
  };

  Game.prototype.getRepairAmount = function (player) {
    return Math.round((player.maxHealth || 0) * 0.4);
  };

  Game.prototype.applyRepair = function (player) {
    var amount = this.getRepairAmount(player);
    player.health = Math.min(player.maxHealth, player.health + amount);
    return amount;
  };

  Game.prototype.consumeTemporaryShield = function (player, effectX, effectY) {
    if (!player || player.shieldCharges <= 0 || (!player.levelShield && player.shieldTimer <= 0)) { return false; }
    player.shieldCharges -= 1;
    if (player.shieldCharges <= 0) {
      player.shieldCharges = 0;
      player.shieldTimer = 0;
    }
    TankGame.Effects.burst(effectX, effectY, "#72cfff", 16, 175);
    return true;
  };
  Game.prototype.damagePlayerFromCharge = function (enemy, impactX, impactY) {
    var player = this.player;
    if (!player.alive || player.invulnerable > 0) { return; }
    if (player.frontShieldCharges > 0 && this.isFrontShieldHit(player, { previousX: impactX, previousY: impactY })) {
      player.frontShieldCharges -= 1;
      TankGame.Effects.burst(player.x, player.y, "#72cfff", 12, 150);
      return;
    }
    if (this.consumeTemporaryShield(player, player.x, player.y)) { return; }
    player.health -= enemy.bulletDamage;
    this.registerPlayerDamage();
    player.hitFlash = 0.16;
    if (player.levelRepair) {
      this.applyRepair(player);
      player.levelRepair = false;
      TankGame.Effects.burst(player.x, player.y, "#79e394", 18, 135);
    }
    TankGame.Effects.burst(player.x, player.y, "#ff5b4f", 24, 210);
    TankGame.Audio.play("hit");
    this.shake = Math.max(this.shake, 12);
    if (player.health <= 0) {
      player.health = 0;
      player.alive = false;
      this.wrecks.push({ x: player.x, y: player.y, angle: player.bodyAngle, life: 9, playerDeathWreck: true });
    }
  };

  Game.prototype.finishEliteCharge = function (enemy) {
    enemy.eliteState = "cooldown";
    enemy.chargeCooldown = Config.eliteTank.chargeCooldown;
    enemy.chargePrepareTimer = 0;
    enemy.chargeRemaining = 0;
    enemy.chargeHitPlayer = false;
  };

  Game.prototype.movePlayerSafely = function (tank, angle, distance, startX, startY) {
    var nextX = tank.x + Math.cos(angle) * distance;
    var nextY = tank.y + Math.sin(angle) * distance;
    var canCrossWalls = tank.voidWalker && !tank.wallLocked;
    var pathStart = { x: startX === undefined ? tank.x : startX, y: startY === undefined ? tank.y : startY };
    if ((canCrossWalls || !TankGame.Map.circleCollides(this.worldMap, { x: nextX, y: tank.y, radius: tank.radius })) &&
        !TankGame.Collision.tankCollidesWithWreck({ x: nextX, y: tank.y, radius: tank.radius }, this.enemies)) {
      tank.x = nextX;
    }
    if ((canCrossWalls || !TankGame.Map.circleCollides(this.worldMap, { x: tank.x, y: nextY, radius: tank.radius })) &&
        !TankGame.Collision.tankCollidesWithWreck({ x: tank.x, y: nextY, radius: tank.radius }, this.enemies)) {
      tank.y = nextY;
    }
    var pathEnd = { x: tank.x, y: tank.y };
    if (tank.team === "player" && this.runShop.mudTruck && Math.hypot(pathEnd.x - pathStart.x, pathEnd.y - pathStart.y) > 1) {
      this.damageEnemiesAlongPath(pathStart, pathEnd, tank.bulletDamage || Config.bulletDamage);
    }
    return [pathStart, pathEnd];
  };

  Game.prototype.damageEnemiesAlongPath = function (start, end, damage) {
    var self = this;
    this.enemies.forEach(function (enemy) {
      if (!enemy.alive || !TankGame.Collision.segmentIntersectsCircle(start.x, start.y, end.x, end.y, enemy, enemy.radius)) { return; }
      self.damageEnemy(enemy, damage, end.x, end.y);
    });
  };

  Game.prototype.spawnFrontStepTrails = function (path, bodyAngle, turretAngle) {
    var count = 5;
    var lengths = [];
    var totalLength = 0;
    var segmentIndex;
    path = path && path.length ? path : [{ x: this.player.x, y: this.player.y }];
    for (segmentIndex = 1; segmentIndex < path.length; segmentIndex += 1) {
      totalLength += Math.hypot(path[segmentIndex].x - path[segmentIndex - 1].x, path[segmentIndex].y - path[segmentIndex - 1].y);
      lengths.push(totalLength);
    }
    for (var i = 0; i < count; i += 1) {
      var targetDistance = totalLength * i / count;
      var previousLength = 0;
      var position = path[0];
      for (segmentIndex = 1; segmentIndex < path.length; segmentIndex += 1) {
        if (targetDistance <= lengths[segmentIndex - 1]) {
          var segmentLength = lengths[segmentIndex - 1] - previousLength;
          var progress = segmentLength ? (targetDistance - previousLength) / segmentLength : 0;
          position = {
            x: path[segmentIndex - 1].x + (path[segmentIndex].x - path[segmentIndex - 1].x) * progress,
            y: path[segmentIndex - 1].y + (path[segmentIndex].y - path[segmentIndex - 1].y) * progress
          };
          break;
        }
        previousLength = lengths[segmentIndex - 1];
      }
      this.frontStepTrails.push({
        x: position.x,
        y: position.y,
        bodyAngle: bodyAngle,
        turretAngle: turretAngle,
        life: 0.34 + i * 0.035,
        maxLife: 0.34 + i * 0.035,
        opacity: 0.2 + (count - i) * 0.045
      });
    }
  };

  Game.prototype.updateFrontStepTrails = function (deltaTime) {
    this.frontStepTrails.forEach(function (trail) { trail.life -= deltaTime; });
    this.frontStepTrails = this.frontStepTrails.filter(function (trail) { return trail.life > 0; });
  };

  Game.prototype.updateBossCloneTrails = function (deltaTime) {
    this.bossCloneTrails.forEach(function (trail) { trail.life -= deltaTime; });
    this.bossCloneTrails = this.bossCloneTrails.filter(function (trail) { return trail.life > 0; });
  };

  Game.prototype.spawnRearGuard = function (tank, muzzleDistance) {
    var angle = tank.turretAngle + Math.PI;
    this.rearGuards.push({
      x: tank.x + Math.cos(angle) * muzzleDistance,
      y: tank.y + Math.sin(angle) * muzzleDistance,
      angle: angle,
      speed: 250,
      distance: 0,
      maxDistance: 100,
      life: 8,
      moving: true,
      size: 34 * Math.SQRT2,
      remaining: Math.min(5, this.endlessPermanent.rearShot || 1),
      alive: true
    });
  };

  Game.prototype.updateRearGuards = function (deltaTime) {
    this.rearGuardCooldown = Math.max(0, this.rearGuardCooldown - deltaTime);
    this.rearGuards.forEach(function (guard) {
      if (!guard.alive) { return; }
      if (guard.moving) {
        var movement = Math.min(guard.speed * deltaTime, guard.maxDistance - guard.distance);
        guard.x += Math.cos(guard.angle) * movement;
        guard.y += Math.sin(guard.angle) * movement;
        guard.distance += movement;
        if (guard.distance >= guard.maxDistance) { guard.moving = false; }
      } else {
        guard.life -= deltaTime;
      }
      if (guard.life <= 0 || guard.x < 0 || guard.y < 0 || guard.x > Config.worldWidth || guard.y > Config.worldHeight) {
        guard.alive = false;
      }
    });
    this.rearGuards = this.rearGuards.filter(function (guard) { return guard.alive; });
  };

  Game.prototype.updateBullet = function (bullet, deltaTime) {
    var self = this;
    if (!bullet.alive) { return; }
    if (bullet.fixedTurretMortar) {
      bullet.previousX = bullet.x;
      bullet.previousY = bullet.y;
      bullet.flightTimer = Math.max(0, bullet.flightTimer - deltaTime);
      var flightProgress = 1 - bullet.flightTimer / bullet.flightDuration;
      bullet.x = bullet.startX + (bullet.targetX - bullet.startX) * flightProgress;
      bullet.y = bullet.startY + (bullet.targetY - bullet.startY) * flightProgress;
      if (bullet.flightTimer === 0) {
        bullet.alive = false;
        if (bullet.playerMortar) { this.detonatePlayerBomb(bullet); } else { this.detonateBossBomb(bullet); }
      }
      return;
    }
    if (bullet.trackingRemaining > 0 && bullet.team === "player") {
      var target = this.selectedMode === "endless" && this.markedTarget && this.markedTarget.alive ? this.markedTarget : null;
      if (target) {
        var desired = Math.atan2(target.y - bullet.y, target.x - bullet.x);
        var current = bullet.angle;
        var delta = desired - current;
        while (delta > Math.PI) { delta -= Math.PI * 2; }
        while (delta < -Math.PI) { delta += Math.PI * 2; }
        bullet.angle += Math.max(-3.2 * deltaTime, Math.min(3.2 * deltaTime, delta));
      }
      bullet.trackingRemaining -= deltaTime;
    }
    bullet.previousX = bullet.x;
    bullet.previousY = bullet.y;
    bullet.x += Math.cos(bullet.angle) * bullet.speed * deltaTime;
    bullet.y += Math.sin(bullet.angle) * bullet.speed * deltaTime;
    bullet.lifetime -= deltaTime;
    bullet.armingTime = Math.max(0, (bullet.armingTime || 0) - deltaTime);

    if (bullet.lifetime <= 0 || bullet.x < 0 || bullet.y < 0 || bullet.x > Config.worldWidth || bullet.y > Config.worldHeight) {
      bullet.alive = false;
      if (bullet.bossBomb) { if (bullet.playerBomb || bullet.playerMortar) { this.detonatePlayerBomb(bullet); } else { this.detonateBossBomb(bullet); } }
      return;
    }

    if (bullet.armingTime > 0) { return; }

    var wall = TankGame.Map.findSegmentObstacle(this.worldMap, bullet.previousX, bullet.previousY, bullet.x, bullet.y, bullet.radius, bullet.fieldPiercedObjects);
    if (wall) {
      var canPierceWall = this.canFieldPierceBullet(bullet);
      if (!canPierceWall) { bullet.alive = false; }
      if (bullet.bossBomb) { if (bullet.playerBomb || bullet.playerMortar) { this.detonatePlayerBomb(bullet); } else { this.detonateBossBomb(bullet); } }
      TankGame.Effects.burst(bullet.x, bullet.y, wall.kind === "B" ? "#ffad72" : "#d9eee4", 8, 120);
      if (!canPierceWall && bullet.team === "player" && this.endlessPermanent.explosive && !bullet.fragment) { this.spawnFragments(bullet.x, bullet.y, this.player.bulletDamage); }
      if (wall.kind === "B") {
        if (bullet.team === "player" && this.onFieldWallBroken) { this.onFieldWallBroken(wall); }
        TankGame.Map.removeObstacle(this.worldMap, wall);
        if (bullet.team === "player") { this.score += 10; }
      }
      if (canPierceWall) {
        this.consumeFieldPierce(bullet, wall);
        return;
      }
      return;
    }
    if (bullet.team === "enemy") {
      var guard = this.rearGuards.find(function (candidate) {
        var halfSize = candidate.size / 2;
        return candidate.alive && TankGame.Collision.segmentIntersectsRectangle(
          bullet.previousX, bullet.previousY, bullet.x, bullet.y,
          { x: candidate.x - halfSize, y: candidate.y - halfSize, width: candidate.size, height: candidate.size }, bullet.radius
        );
      });
      if (guard) {
        bullet.alive = false;
        guard.remaining -= 1;
        if (guard.remaining <= 0) { guard.alive = false; }
        TankGame.Effects.burst(bullet.x, bullet.y, "#72cfff", 12, 145);
        return;
      }
    }

    var wreck = this.enemies.find(function (enemy) {
      return enemy.wreck && (!bullet.fieldPiercedObjects || bullet.fieldPiercedObjects.indexOf(enemy) === -1) &&
        TankGame.Collision.segmentIntersectsCircle(
          bullet.previousX, bullet.previousY, bullet.x, bullet.y, enemy, bullet.radius
        );
    });
    if (!wreck) {
      wreck = (this.wrecks || []).find(function (candidate) {
        var radius = candidate.radius || 24;
        return (!bullet.fieldPiercedObjects || bullet.fieldPiercedObjects.indexOf(candidate) === -1) &&
          TankGame.Collision.segmentIntersectsCircle(
            bullet.previousX, bullet.previousY, bullet.x, bullet.y,
            { x: candidate.x, y: candidate.y, radius: radius }, bullet.radius
          );
      });
    }
    if (wreck) {
      if (this.canFieldPierceBullet(bullet)) {
        this.consumeFieldPierce(bullet, wreck);
        TankGame.Effects.burst(bullet.x, bullet.y, "#d9c2ff", 6, 110);
        return;
      }
      bullet.alive = false;
      if (bullet.bossBomb) { this.detonateBossBomb(bullet); }
      TankGame.Effects.burst(bullet.x, bullet.y, "#ffad72", 6, 110);
      return;
    }

    var targets = bullet.team === "player" ? this.enemies : [this.player];
    var target = targets.find(function (tank) {
      return tank.alive && (!bullet.fieldPiercedObjects || bullet.fieldPiercedObjects.indexOf(tank) === -1) &&
        !(tank.team === "player" && tank.invulnerable > 0) &&
        TankGame.Collision.segmentIntersectsCircle(bullet.previousX, bullet.previousY, bullet.x, bullet.y, tank, bullet.radius);
    });
    if (!target) { return; }

    var canPierceTarget = bullet.team === "player" && bullet.fieldPierceRemaining > 0;
    if (!canPierceTarget) { bullet.alive = false; }
    if (bullet.bossBomb) {
      if (bullet.playerBomb || bullet.playerMortar) { this.detonatePlayerBomb(bullet); } else { this.detonateBossBomb(bullet); }
      return;
    }
    if (target.isBoss && target.bossShieldCharges > 0 && this.isFrontShieldHit(target, bullet)) {
      target.bossShieldCharges -= 1;
      if (canPierceTarget) {
        bullet.fieldPierceRemaining -= 1;
        bullet.fieldPiercedObjects = bullet.fieldPiercedObjects || [];
        bullet.fieldPiercedObjects.push(target);
      }
      TankGame.Effects.burst(bullet.x, bullet.y, "#ffd700", 18, 175);
      this.shake = Math.max(this.shake, 5);
      return;
    }
    if (target.team === "player" && target.frontShieldCharges > 0 && this.isFrontShieldHit(target, bullet)) {
      target.frontShieldCharges -= 1;
      TankGame.Effects.burst(bullet.x, bullet.y, "#72cfff", 12, 150);
      return;
    }
    if (target.team === "player" && this.consumeTemporaryShield(target, bullet.x, bullet.y)) { return; }
    if (bullet.team === "player" && this.runShop.instantKill && !target.isBoss && !target.isElite && !target.isBossClone && Math.random() < 0.001) {
      target.health = 0;
    } else {
      target.health -= bullet.damage;
    }
    if (target.team === "player") { this.registerPlayerDamage(); }
    target.hitFlash = 0.12;
    if (target.team === "player" && target.levelRepair) {
      this.applyRepair(target);
      target.levelRepair = false;
      TankGame.Effects.burst(target.x, target.y, "#79e394", 18, 135);
    }
    if (bullet.team === "player" && this.endlessPermanent.explosive && !bullet.fragment) { this.spawnFragments(bullet.x, bullet.y, this.player.bulletDamage); }
    TankGame.Effects.burst(bullet.x, bullet.y, target.team === "player" ? "#fff0b3" : "#ff8e71", 12, 155);
    TankGame.Audio.play("hit");
    if (bullet.team === "player") { this.stats.hits += 1; }
    if (target.health <= 0) {
      target.health = 0;
      if (target.team === "enemy") {
        if (this.markedTarget === target) { this.markedTarget = null; }
        target.wreck = true;
        target.alive = false;
        target.wreckLife = 3;
        target.wreckParticles = Array.from({ length: 48 }, function () {
          return {
            x: (Math.random() - 0.5) * 54,
            y: (Math.random() - 0.5) * 48,
            rise: 8 + Math.random() * 20,
            sway: 3 + Math.random() * 9,
            size: 5 + Math.random() * 5,
            speed: 0.72 + Math.random() * 0.68,
            phase: Math.random() * Math.PI * 2,
            color: ["#ffb347", "#ff4d24", "#ffd166"][Math.floor(Math.random() * 3)]
          };
        });
      } else {
        target.alive = false;
      }
      if (target.isBoss || target.isBossClone || target.isElite) { this.deactivateBossThreats(target); }
      TankGame.Effects.burst(target.x, target.y, "#ffb15c", 30, 230);
      if (target.team !== "enemy") {
        this.wrecks.push({ x: target.x, y: target.y, angle: target.bodyAngle, life: 9, playerDeathWreck: true });
      }
      this.shake = Math.max(this.shake, target.team === "player" ? 12 : 8);
      if (target.team === "enemy") {
        TankGame.Audio.play("explode");
        target.burnSound = TankGame.Audio.playBurning();
        this.registerEnemyKill();
      }
    }
    if (canPierceTarget) {
      this.consumeFieldPierce(bullet, target);
    }
  };

  Game.prototype.canFieldPierceBullet = function (bullet) {
    return bullet.team === "player" && bullet.fieldPierceRemaining > 0;
  };

  Game.prototype.consumeFieldPierce = function (bullet, object) {
    bullet.fieldPierceRemaining -= 1;
    bullet.fieldPiercedObjects = bullet.fieldPiercedObjects || [];
    bullet.fieldPiercedObjects.push(object);
  };

  Game.prototype.damagePlayerFromSpecial = function (damage, sourceX, sourceY) {
    var player = this.player;
    if (!player.alive || player.invulnerable > 0) { return false; }
    if (player.frontShieldCharges > 0 && this.isFrontShieldHit(player, { previousX: sourceX, previousY: sourceY })) {
      player.frontShieldCharges -= 1;
      TankGame.Effects.burst(player.x, player.y, "#72cfff", 12, 150);
      return false;
    }
    if (this.consumeTemporaryShield(player, player.x, player.y)) { return false; }
    player.health -= damage;
    this.registerPlayerDamage();
    player.hitFlash = 0.16;
    if (player.levelRepair) {
      this.applyRepair(player);
      player.levelRepair = false;
      TankGame.Effects.burst(player.x, player.y, "#79e394", 18, 135);
    }
    TankGame.Effects.burst(player.x, player.y, "#ff5b4f", 24, 210);
    TankGame.Audio.play("hit");
    this.shake = Math.max(this.shake, 12);
    if (player.health <= 0) {
      player.health = 0;
      player.alive = false;
      this.wrecks.push({ x: player.x, y: player.y, angle: player.bodyAngle, life: 9, playerDeathWreck: true });
    }
    return true;
  };

  Game.prototype.detonateBossBomb = function (bullet) {
    if (bullet.bossBombDetonated) { return false; }
    bullet.bossBombDetonated = true;
    var skill = bullet.mortar ? "mortar" : "bomb";
    var radius = bullet.explosionRadius || this.getBossSkillConfig(skill).radius;
    var dx = this.player.x - bullet.x;
    var dy = this.player.y - bullet.y;
    if (this.player.alive && dx * dx + dy * dy <= Math.pow(radius + this.player.radius, 2)) {
      this.damagePlayerFromSpecial(bullet.damage, bullet.x, bullet.y);
    }
    var particleScale = (bullet.fixedTurretMortar || bullet.turretWeapon === "bomb" || (bullet.bossBomb && !bullet.mortar)) ? 1.75 : 1;
    TankGame.Effects.burst(bullet.x, bullet.y, "#ffb000", Math.round(72 * particleScale), 300);
    TankGame.Effects.burst(bullet.x, bullet.y, "#ff5b24", Math.round(36 * particleScale), 220);
    TankGame.Effects.burst(bullet.x, bullet.y, "#ffe66d", Math.round(24 * particleScale), 370);
    this.shake = Math.max(this.shake, 9);
    return true;
  };

  Game.prototype.detonatePlayerBomb = function (bullet) {
    var self = this;
    var radius = bullet.explosionRadius || 80;
    if (bullet.bossBombDetonated) { return false; }
    bullet.bossBombDetonated = true;
    this.enemies.forEach(function (enemy) {
      if (!enemy.alive || Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y) > radius + enemy.radius) { return; }
      self.damageEnemy(enemy, bullet.damage, bullet.x, bullet.y);
    });
    TankGame.Effects.burst(bullet.x, bullet.y, bullet.playerMortar ? "#d56bff" : "#ffb000", 72, 300);
    TankGame.Effects.burst(bullet.x, bullet.y, "#ff5b24", 36, 220);
    this.shake = Math.max(this.shake, 9);
    return true;
  };

  Game.prototype.isFrontShieldHit = function (tank, bullet) {
    var incomingAngle = Math.atan2(bullet.previousY - tank.y, bullet.previousX - tank.x);
    var difference = incomingAngle - tank.bodyAngle;
    while (difference > Math.PI) { difference -= Math.PI * 2; }
    while (difference < -Math.PI) { difference += Math.PI * 2; }
    return Math.abs(difference) <= Math.PI / 2;
  };

  Game.prototype.getExplosiveDamageMultiplier = function () {
    var level = Math.min(6, this.endlessPermanent.explosive || 0);
    return level ? 0.25 + (level - 1) * 0.05 : 0;
  };

  Game.prototype.spawnFragments = function (x, y, damage) {
    var multiplier = this.getExplosiveDamageMultiplier();
    for (var i = 0; i < 8; i += 1) {
      var angle = Math.PI * 2 * i / 8 + (Math.random() - 0.5) * 0.35;
      var fragment = TankGame.Entities.createBullet(x, y, angle, "player");
      fragment.damage = damage * multiplier;
      fragment.speed = Config.bulletSpeed;
      fragment.lifetime = Config.bulletLifetime * 0.6;
      fragment.armingTime = 0.1;
      fragment.fragment = true;
      this.bullets.push(fragment);
    }
    TankGame.Effects.burst(x, y, "#ffd166", 10, 180);
  };

  Game.prototype.getJammerCooldown = function () {
    var level = Math.min(21, Math.max(1, this.endlessPermanent.jammer || 1));
    return Math.max(5.4, 10 - (level - 1) * 0.23);
  };

  Game.prototype.updateJammer = function (deltaTime) {
    if (this.selectedMode !== "endless" || !this.endlessPermanent.jammer || !this.player.alive) { return; }
    this.jammerTimer = Math.max(0, this.jammerTimer - deltaTime);
    if (this.jammerTimer > 0) { return; }
    this.jammerTimer = this.getJammerCooldown();
    this.enemies.forEach(function (enemy) {
      if (!enemy.alive) { return; }
      enemy.jammedTimer = 0.95;
      enemy.avoidTimer = Math.max(enemy.avoidTimer, 0.95);
      enemy.avoidDirection = -1;
    });
    this.jammerFlash = 0.45;
  };

  Game.prototype.updateVoidWalker = function (deltaTime) {
    var player = this.player;
    var inside;
    var candidates;
    if (!player.voidWalker || !player.alive) { return; }
    inside = this.worldMap.obstacles.some(function (obstacle) {
      return obstacle.kind !== "W" && TankGame.Collision.circleIntersectsRectangle(player, obstacle);
    });
    if (!inside) { return; }
    player.wallTime += deltaTime;
    if (player.wallTime < player.wallTimeLimit) { return; }
    candidates = [];
    this.worldMap.obstacles.forEach(function (obstacle) {
      if (obstacle.kind === "W") { return; }
      if (!TankGame.Collision.circleIntersectsRectangle(player, obstacle)) { return; }
      candidates.push(
        { x: obstacle.x - player.radius - 2, y: player.y },
        { x: obstacle.x + obstacle.width + player.radius + 2, y: player.y },
        { x: player.x, y: obstacle.y - player.radius - 2 },
        { x: player.x, y: obstacle.y + obstacle.height + player.radius + 2 }
      );
    });
    candidates = candidates.filter(function (candidate) {
      return candidate.x >= player.radius && candidate.x <= Config.worldWidth - player.radius &&
        candidate.y >= player.radius && candidate.y <= Config.worldHeight - player.radius &&
        !TankGame.Map.circleCollides(this.worldMap, { x: candidate.x, y: candidate.y, radius: player.radius }) &&
        !TankGame.Collision.tankCollidesWithWreck({ x: candidate.x, y: candidate.y, radius: player.radius }, this.enemies);
    }, this).sort(function (a, b) {
      return Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y);
    });
    if (candidates[0]) {
      player.x = candidates[0].x;
      player.y = candidates[0].y;
    }
    player.wallTime = 0;
    player.wallLocked = true;
  };

  Game.prototype.registerEnemyKill = function () {
    this.comboCount = this.comboTimer > 0 ? this.comboCount + 1 : 1;
    this.comboTimer = 4.5;
    this.maxCombo = Math.max(this.maxCombo, this.comboCount);
    this.score += 100 + Math.min(150, (this.comboCount - 1) * 30);
    this.stats.kills += 1;
  };

  Game.prototype.updateWrecks = function (deltaTime) {
    this.enemies.forEach(function (enemy) {
      if (enemy.wreck) { enemy.wreckLife = Math.max(0, enemy.wreckLife - deltaTime); }
    });
    this.enemies = this.enemies.filter(function (enemy) { return !enemy.wreck || enemy.wreckLife > 0; });
  };

  Game.prototype.updateTracks = function (deltaTime) {
    this.trackTimer -= deltaTime;
    if (this.trackTimer <= 0 && (this.input.isDown("KeyW") || this.input.isDown("KeyS"))) {
      this.tracks.push({ x: this.player.x, y: this.player.y, angle: this.player.bodyAngle, life: 3.2 });
      this.trackTimer = 0.11;
    }
    this.tracks.forEach(function (track) { track.life -= deltaTime; });
    this.tracks = this.tracks.filter(function (track) { return track.life > 0; }).slice(-90);
    this.wrecks.forEach(function (wreck) { wreck.life -= deltaTime; });
    this.wrecks = this.wrecks.filter(function (wreck) { return wreck.life > 0; });
    this.shake = Math.max(0, this.shake - 28 * deltaTime);
  };

  Game.prototype.updateSupplies = function (deltaTime) {
    var self = this;
    this.supplyTimer -= deltaTime;
    if (this.supplyTimer <= 0 && this.supplies.length < 2) {
      this.spawnSupply();
      this.supplyTimer = (this.selectedMode === "challenge" ? 15 : 11) + Math.random() * 5;
    }
    this.supplies.forEach(function (supply) {
      supply.life -= deltaTime;
      supply.pulse += deltaTime * 4;
      if (supply.airborne) {
        supply.dropHeight = Math.max(0, supply.dropHeight - 170 * deltaTime);
        supply.airborne = supply.dropHeight > 0;
        if (!supply.airborne) { TankGame.Effects.burst(supply.x, supply.y, "#f7d87c", 12, 95); }
        return;
      }
      var dx = supply.x - self.player.x;
      var dy = supply.y - self.player.y;
      if (self.player.alive && dx * dx + dy * dy < 38 * 38) {
        self.collectSupply(supply);
        supply.life = 0;
      }
    });
    this.supplies = this.supplies.filter(function (supply) { return supply.life > 0; });
  };

  Game.prototype.findSupplyLocation = function () {
    var playerColumn = Math.floor(this.player.x / TankGame.Map.tileSize);
    var playerRow = Math.floor(this.player.y / TankGame.Map.tileSize);
    for (var attempts = 0; attempts < 60; attempts += 1) {
      var angle = Math.random() * Math.PI * 2;
      var distance = 4 + Math.floor(Math.random() * 8);
      var column = Math.max(2, Math.min(TankGame.Map.columns - 3, playerColumn + Math.round(Math.cos(angle) * distance)));
      var row = Math.max(2, Math.min(TankGame.Map.rows - 3, playerRow + Math.round(Math.sin(angle) * distance)));
      var x = (column + 0.5) * TankGame.Map.tileSize;
      var y = (row + 0.5) * TankGame.Map.tileSize;
      var enemyTooClose = this.enemies.some(function (enemy) {
        return enemy.alive && Math.hypot(enemy.x - x, enemy.y - y) < 120;
      });
      if (!enemyTooClose && ["#", "B", "I"].indexOf(this.worldMap.cells[row][column]) === -1) {
        return { x: x, y: y };
      }
    }
    return null;
  };

  Game.prototype.spawnSupply = function () {
    var types = ["repair", "shield", "rapid", "perspective"];
    var preferredType = this.earlyRepairSupplyPending && this.player.health <= this.player.maxHealth * 0.6 ? "repair" : null;
    var location = this.findSupplyLocation();
    if (!location) { return false; }
    this.supplies.push({
      x: location.x,
      y: location.y,
      type: preferredType || types[Math.floor(Math.random() * types.length)],
      life: 28, pulse: 0, airborne: false, dropHeight: 0
    });
    this.earlyRepairSupplyPending = false;
    return true;
  };

  Game.prototype.getSupportCooldown = function () {
    var level = Math.min(9, Math.max(1, this.endlessPermanent.supportCall || 1));
    return Math.max(9, 24 - (level - 1) * 3);
  };

  Game.prototype.callSupportAircraft = function () {
    var location = this.findSupplyLocation();
    if (!location) { return false; }
    this.supportAircraft.push({
      x: location.x - 760,
      y: location.y - 130,
      targetX: location.x,
      targetY: location.y,
      endX: location.x + 880,
      speed: 470,
      rotor: 0,
      dropped: false,
      alive: true
    });
    return true;
  };

  Game.prototype.updateSupportAircraft = function (deltaTime) {
    var self = this;
    if (this.selectedMode === "endless" && this.endlessPermanent.supportCall && this.player.alive) {
      this.supportTimer = Math.max(0, this.supportTimer - deltaTime);
      if (this.supportTimer <= 0 && this.supportAircraft.length === 0) {
        if (this.callSupportAircraft()) { this.supportTimer = this.getSupportCooldown(); }
      }
    }
    this.supportAircraft.forEach(function (aircraft) {
      aircraft.x += aircraft.speed * deltaTime;
      aircraft.rotor += deltaTime * 20;
      if (!aircraft.dropped && aircraft.x >= aircraft.targetX) {
        aircraft.dropped = true;
        self.supplies.push({
          x: aircraft.targetX,
          y: aircraft.targetY,
          type: ["repair", "shield", "rapid", "perspective"][Math.floor(Math.random() * 4)],
          life: 28, pulse: 0, airborne: true, dropHeight: 130, support: true
        });
      }
      if (aircraft.x >= aircraft.endX) { aircraft.alive = false; }
    });
    this.supportAircraft = this.supportAircraft.filter(function (aircraft) { return aircraft.alive; });
  };

  Game.prototype.isBossBattleActive = function () {
    return Boolean(this.worldMap && this.worldMap.bossArena && this.findLevelBoss());
  };

  Game.prototype.createBossEmbers = function () {
    var arena = this.worldMap.bossArena;
    return Array.from({ length: 44 }, function () {
      return {
        x: arena.centerX + (Math.random() - 0.5) * 980,
        y: arena.centerY + (Math.random() - 0.5) * 720,
        life: 0.8 + Math.random() * 2.6,
        maxLife: 3.4,
        speed: 8 + Math.random() * 24,
        size: 1.5 + Math.random() * 2.8,
        phase: Math.random() * Math.PI * 2
      };
    });
  };

  Game.prototype.createBossWarParticles = function () {
    var width = Config.viewportWidth || this.canvas.width;
    var height = Config.viewportHeight || this.canvas.height;
    var columns = 8;
    var rows = 7;
    var shades = ["#696969", "#808080", "#989898", "#b0b0b0", "#5b5b5b", "#c4c4c4"];
    return Array.from({ length: columns * rows }, function (_, index) {
      var column = index % columns;
      var row = Math.floor(index / columns);
      var edgeX = column === 0 ? 0 : (column === columns - 1 ? width : column * width / (columns - 1));
      var edgeY = row === 0 ? 0 : (row === rows - 1 ? height : row * height / (rows - 1));
      var jitterX = column === 0 || column === columns - 1 ? 0 : (Math.random() - 0.5) * 90;
      var jitterY = row === 0 || row === rows - 1 ? 0 : (Math.random() - 0.5) * 70;
      var angle = Math.PI / 4 + (Math.random() - 0.5) * 0.32;
      var speed = 72 + Math.random() * 142;
      return {
        x: edgeX + jitterX,
        y: edgeY + jitterY,
        vx: -Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        angle: angle,
        size: 1.4 + Math.random() * 3.8,
        length: 12 + Math.random() * 30,
        alpha: 0.18 + Math.random() * 0.4,
        shade: shades[Math.floor(Math.random() * shades.length)],
        wobble: Math.random() * Math.PI * 2,
        phase: Math.random() * Math.PI * 2
      };
    });
  };

  Game.prototype.updateBossWarParticles = function (deltaTime) {
    var width = Config.viewportWidth || this.canvas.width;
    var height = Config.viewportHeight || this.canvas.height;
    if (this.state === Config.states.CINEMATIC || this.state === Config.states.COUNTDOWN) { return; }
    if (this.bossWarParticleDelay > 0) {
      this.bossWarParticleDelay = Math.max(0, this.bossWarParticleDelay - deltaTime);
      return;
    }
    this.bossWarParticleFade = Math.min(1, this.bossWarParticleFade + deltaTime / 1.2);
    this.bossWarParticles.forEach(function (particle) {
      particle.x += particle.vx * deltaTime;
      particle.y += particle.vy * deltaTime;
      particle.x += Math.sin(this.elapsed * 2.4 + particle.phase) * 3 * deltaTime;
      particle.y += Math.cos(this.elapsed * 1.8 + particle.wobble) * 2 * deltaTime;
      // Wrap each axis independently. Keeping the other coordinate prevents
      // the diagonal stream from collapsing toward a shared reset corner.
      if (particle.x < -particle.length - 12) { particle.x = width + particle.length; }
      if (particle.x > width + particle.length + 12) { particle.x = -particle.length; }
      if (particle.y < -particle.length - 12) { particle.y = height + particle.length; }
      if (particle.y > height + particle.length + 12) { particle.y = -particle.length; }
    }, this);
  };

  Game.prototype.updateFireHazards = function (deltaTime) {
    var self = this;
    var tanks = [this.player].concat(this.enemies || []);
    if (!this.worldMap || !this.worldMap.isBossMap) { return; }
    tanks.forEach(function (tank) {
      if (!tank || !tank.alive) { return; }
      var fireZones = (self.worldMap.firePatches || []).concat(self.bossFirePits || []);
      var inFire = fireZones.some(function (patch) {
        var radius = patch.radius + (tank.radius || 23) * 0.72;
        return Math.hypot(tank.x - patch.x, tank.y - patch.y) <= radius;
      });
      if (inFire && !tank.burning) {
        tank.burning = true;
        tank.burnTickTimer = 0.5;
        tank.burnSound = TankGame.Audio.playBurning ? TankGame.Audio.playBurning() : null;
      }
      if (!tank.burning) { return; }
      tank.burningTimer = inFire ? 3 : Math.max(0, (tank.burningTimer || 0) - deltaTime);
      tank.burnTickTimer -= deltaTime;
      while (tank.burnTickTimer <= 0 && tank.alive) {
        tank.burnTickTimer += 0.5;
        self.applyFireDamage(tank);
      }
      if (tank.burningTimer <= 0.000001 || !tank.alive) {
        tank.burning = false;
        if (TankGame.Audio.stopBurningSound && tank.burnSound) { TankGame.Audio.stopBurningSound(tank.burnSound); }
        tank.burnSound = null;
      }
    });
  };

  Game.prototype.applyFireDamage = function (tank) {
    if (!tank || !tank.alive) { return; }
    tank.health = Math.max(0, (tank.health || 0) - 2);
    tank.hitFlash = 0.08;
    TankGame.Effects.burst(tank.x, tank.y - 14, "#ff8a24", 5, 55);
    if (tank.team === "player") { this.registerPlayerDamage(); }
    if (tank.health > 0) { return; }
    tank.alive = false;
    if (TankGame.Audio.stopBurningSound && tank.burnSound) { TankGame.Audio.stopBurningSound(tank.burnSound); }
    tank.burnSound = null;
    tank.burning = false;
    if (tank.team === "enemy") {
      tank.wreck = true;
      tank.wreckLife = 3;
      tank.wreckParticles = tank.wreckParticles || [];
      this.registerEnemyKill();
    }
  };

  Game.prototype.updateBossBattleEffects = function (deltaTime) {
    var self = this;
    if (!this.isBossBattleActive()) {
      this.bossMeteors = [];
      this.bossFirePits = [];
      return;
    }
    var boss = this.findLevelBoss();
    this.updateBossWarParticles(deltaTime);
    this.bossFirePits.forEach(function (pit) { pit.life -= deltaTime; });
    this.bossFirePits = this.bossFirePits.filter(function (pit) { return pit.life > 0; });
    this.bossEmbers.forEach(function (ember) {
      ember.life -= deltaTime;
      ember.y -= ember.speed * deltaTime;
      ember.x += Math.sin(self.elapsed * 3 + ember.phase) * 5 * deltaTime;
      if (ember.life <= 0) {
        ember.x = self.player.x + (Math.random() - 0.5) * 980;
        ember.y = self.player.y + 360 + Math.random() * 360;
        ember.life = 0.8 + Math.random() * 2.6;
      }
    });
    this.bossMeteors.forEach(function (meteor) {
      meteor.timer -= deltaTime;
      meteor.progress = Math.min(1, 1 - meteor.timer / meteor.duration);
      meteor.x = meteor.startX + (meteor.targetX - meteor.startX) * meteor.progress;
      meteor.y = meteor.startY + (meteor.targetY - meteor.startY) * meteor.progress;
      meteor.rotation += meteor.spin * deltaTime;
      if (meteor.timer <= 0) {
        self.impactBossMeteor(meteor);
        meteor.alive = false;
      }
    });
    this.bossMeteors = this.bossMeteors.filter(function (meteor) { return meteor.alive; });
    this.bossMeteorTimer -= deltaTime;
    if (this.bossMeteorTimer <= 0) {
      var meteorConfig = Config.bossMeteor;
      this.spawnBossMeteors(meteorConfig.minimumCount + Math.floor(Math.random() *
        (meteorConfig.maximumCount - meteorConfig.minimumCount + 1)));
      this.bossMeteorTimer = meteorConfig.minimumInterval +
        Math.random() * (meteorConfig.maximumInterval - meteorConfig.minimumInterval);
    }
    if (boss && !boss.alive) { this.bossMeteors = []; }
  };

  Game.prototype.spawnBossMeteors = function (count, targets) {
    if (!this.isBossBattleActive()) { return []; }
    var created = [];
    var targetList = targets || [];
    var meteorConfig = Config.bossMeteor;
    for (var index = 0; index < count; index += 1) {
      var target = targetList[index] || {
        x: meteorConfig.radius + Math.random() * (Config.worldWidth - meteorConfig.radius * 2),
        y: meteorConfig.radius + Math.random() * (Config.worldHeight - meteorConfig.radius * 2)
      };
      var flightAngle = Math.random() < 0.5 ? Math.PI / 4 : Math.PI * 3 / 4;
      var entryDistance = 900 + Math.random() * 280;
      var startX = target.x - Math.cos(flightAngle) * entryDistance;
      var startY = target.y - Math.sin(flightAngle) * entryDistance;
      var meteor = {
        x: startX,
        y: startY,
        startX: startX,
        startY: startY,
        targetX: target.x,
        targetY: target.y,
        timer: meteorConfig.duration,
        duration: meteorConfig.duration,
        progress: 0,
        radius: meteorConfig.radius,
        damage: meteorConfig.damage,
        flightAngle: flightAngle,
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 8,
        alive: true
      };
      this.bossMeteors.push(meteor);
      created.push(meteor);
    }
    return created;
  };

  Game.prototype.impactBossMeteor = function (meteor) {
    var self = this;
    var impact = { x: meteor.targetX, y: meteor.targetY, radius: meteor.radius };
    var obstacles = TankGame.Map.queryObstacles(this.worldMap,
      impact.x - impact.radius, impact.y - impact.radius,
      impact.x + impact.radius, impact.y + impact.radius).slice();
    obstacles.forEach(function (obstacle) {
      if (obstacle.row === 0 || obstacle.row === TankGame.Map.rows - 1 ||
          obstacle.column === 0 || obstacle.column === TankGame.Map.columns - 1) { return; }
      if (!TankGame.Collision.circleIntersectsRectangle(impact, obstacle)) { return; }
      if (["#", "B", "I"].indexOf(obstacle.kind) !== -1) {
        TankGame.Map.removeObstacle(self.worldMap, obstacle);
      }
    });
    if (this.fieldCrystals) {
      this.fieldCrystals = this.fieldCrystals.filter(function (crystal) {
        return Math.hypot(crystal.x - impact.x, crystal.y - impact.y) > impact.radius;
      });
    }
    if (this.player.alive && Math.hypot(this.player.x - impact.x, this.player.y - impact.y) <= impact.radius + this.player.radius) {
      this.damagePlayerFromSpecial(meteor.damage, impact.x, impact.y);
    }
    TankGame.Effects.burst(impact.x, impact.y, "#ffb000", 100, 340);
    TankGame.Effects.burst(impact.x, impact.y, "#ff5b24", 70, 250);
    TankGame.Effects.burst(impact.x, impact.y, "#ffe66d", 44, 420);
    this.bossFirePits.push({ x: impact.x, y: impact.y, radius: impact.radius, life: 12, maxLife: 12, seed: Math.random() * 100000 });
    TankGame.Effects.burst(impact.x, impact.y - 10, "#655344", 34, 110);
    this.shake = Math.max(this.shake, 14);
  };

  Game.prototype.collectSupply = function (supply) {
    if (supply.type === "repair") { this.applyRepair(this.player); }
    if (supply.type === "shield") {
      this.player.shieldCharges = 3;
      if (!this.player.levelShield) { this.player.shieldTimer = 25; }
    }
    if (supply.type === "rapid") { this.player.rapidTimer = Math.max(this.player.rapidTimer || 0, 10); }
    if (supply.type === "perspective") { this.player.perspectiveTimer = Math.max(this.player.perspectiveTimer || 0, 15); }
    this.score += 25;
    TankGame.Effects.burst(supply.x, supply.y, "#f7d87c", 22, 150);
    TankGame.Audio.play("boostPickup");
  };

  Game.prototype.render = function (interpolation) {
    var context = this.context;
    var viewportWidth = Config.viewportWidth || this.canvas.width;
    var viewportHeight = Config.viewportHeight || this.canvas.height;
    var cinematicActive = this.state === Config.states.CINEMATIC && this.cinematic;
    if (cinematicActive) {
      this.cinematic.renderOffset = Math.max(0, Math.min(1, Number(interpolation) || 0)) * Config.fixedStep;
    }
    var cinematicView = cinematicActive ? this.cinematic.getCameraView() : null;
    var bounds = cinematicActive ? this.cinematic.getBounds(120) : this.getCameraBounds(80);
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.save();
    if (this.shake > 0) {
      context.translate((Math.random() - 0.5) * this.shake, (Math.random() - 0.5) * this.shake);
    }
    if (cinematicActive) {
      context.translate(viewportWidth / 2, viewportHeight / 2);
      context.scale(cinematicView.zoom, cinematicView.zoom);
      context.translate(-cinematicView.focusX, -cinematicView.focusY);
    } else {
      context.translate(-this.camera.x, -this.camera.y);
    }
    this.drawGround(context, bounds);
    this.drawCampusGrid(context, bounds);
    if (this.drawFieldSite) { this.drawFieldSite(context); }
    this.drawTracks(context);
    this.drawWrecks(context);
    TankGame.Map.draw(context, this.worldMap, bounds);
    this.drawBossBattleEffects(context);
    this.drawBossFirePits(context);
    if (cinematicActive) { this.cinematic.drawRotorWash(context); }
    this.drawFrontStepTrails(context);
    this.drawBossCloneTrails(context);
    this.drawSupportAircraft(context);
    this.drawSupplies(context);
    if (this.drawFieldCrystals) { this.drawFieldCrystals(context); }
    if (this.drawFieldPoisonTrails) { this.drawFieldPoisonTrails(context); }
    this.drawSpecialEnemyIndicators(context);
    this.drawEliteChargePaths(context);
    this.enemies.forEach(function (enemy) {
      if (!cinematicActive || enemy !== this.cinematic.boss) { TankGame.Entities.drawTank(context, enemy); }
    }, this);
    this.drawMarkedTarget(context);
    this.drawMortarWarnings(context);
    this.drawRearGuards(context);
    this.drawBraveReviveShield(context);
    if (this.player.alive && (this.player.paradiseMade || this.player.invulnerable <= 0 || Math.floor(this.elapsed * 10) % 2 === 0)) {
      TankGame.Entities.drawTank(context, this.player);
    }
    if (cinematicActive) {
      this.cinematic.drawBoss(context);
      this.cinematic.drawAircraft(context);
    }
    if (this.drawFieldSiteFront) { this.drawFieldSiteFront(context); }
    this.bullets.forEach(function (bullet) { TankGame.Entities.drawBullet(context, bullet); });
    this.drawBossLasers(context);
    this.drawMuzzleFlashes(context);
    if (this.jammerFlash > 0 && this.player.alive) {
      context.save();
      context.globalAlpha = this.jammerFlash / 0.45;
      context.strokeStyle = "#72cfff";
      context.lineWidth = 5;
      context.beginPath();
      context.arc(this.player.x, this.player.y, 80 + (0.45 - this.jammerFlash) * 900, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    }
    TankGame.Effects.draw(context);
    if (!this.player.alive && this.lives > 0 && this.respawnTimer > 0) {
      this.drawRespawnMessage(context);
    }
    context.restore();
    if (this.isBossBattleActive() && [Config.states.CINEMATIC, Config.states.COUNTDOWN].indexOf(this.state) === -1) { this.drawBossWarParticles(context); }
    if (cinematicActive) { this.cinematic.drawScreenOverlay(context); }
    if ([Config.states.COUNTDOWN, Config.states.PLAYING, Config.states.PAUSED].indexOf(this.state) !== -1) {
      this.drawTacticalRadar(context);
      this.drawPerspectiveIndicators(context);
      this.drawLowHealthWarning(context);
    }
  };

  Game.prototype.drawBossBattleEffects = function (context) {
    if (!this.isBossBattleActive()) { return; }
    this.bossEmbers.forEach(function (ember) {
      context.save();
      context.globalAlpha = Math.max(0, Math.min(1, ember.life / ember.maxLife));
      context.fillStyle = ember.size > 3 ? "#ff7a45" : "#ffd166";
      context.shadowColor = "#ff4d24";
      context.shadowBlur = 10;
      context.beginPath();
      context.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
    this.bossMeteors.forEach(function (meteor) {
      var scale = 0.75 + meteor.progress * 0.55;
      var trailLength = 70 + meteor.progress * 70;
      context.save();
      context.translate(meteor.x, meteor.y);
      context.rotate(meteor.flightAngle);
      context.globalAlpha = 0.6;
      context.strokeStyle = "#ff5b24";
      context.lineWidth = 13 * scale;
      context.shadowColor = "#ff3b16";
      context.shadowBlur = 24;
      context.beginPath();
      context.moveTo(-trailLength, 12);
      context.lineTo(-18, 4);
      context.stroke();
      context.strokeStyle = "#ffd166";
      context.lineWidth = 6 * scale;
      context.beginPath();
      context.moveTo(-trailLength + 8, 12);
      context.lineTo(-15, 3);
      context.stroke();
      context.globalAlpha = 1;
      context.rotate(meteor.rotation);
      context.shadowColor = "#ff6b2c";
      context.shadowBlur = 18;
      context.fillStyle = "#403b39";
      context.beginPath();
      context.moveTo(-19 * scale, -10 * scale);
      context.lineTo(-7 * scale, -20 * scale);
      context.lineTo(10 * scale, -15 * scale);
      context.lineTo(19 * scale, -2 * scale);
      context.lineTo(12 * scale, 15 * scale);
      context.lineTo(-5 * scale, 20 * scale);
      context.lineTo(-19 * scale, 10 * scale);
      context.closePath();
      context.fill();
      context.fillStyle = "#7d6b5b";
      context.beginPath();
      context.moveTo(-11 * scale, -8 * scale);
      context.lineTo(-3 * scale, -14 * scale);
      context.lineTo(6 * scale, -10 * scale);
      context.lineTo(10 * scale, -2 * scale);
      context.lineTo(1 * scale, 3 * scale);
      context.lineTo(-9 * scale, 1 * scale);
      context.closePath();
      context.fill();
      context.fillStyle = "#241f1e";
      context.beginPath();
      context.arc(8 * scale, 7 * scale, 4 * scale, 0, Math.PI * 2);
      context.arc(-8 * scale, -4 * scale, 3 * scale, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  Game.prototype.drawBossFirePits = function (context) {
    if (!this.isBossBattleActive()) { return; }
    this.bossFirePits.forEach(function (pit) {
      var pulse = 0.94 + Math.sin(this.elapsed * 7 + pit.seed) * 0.06;
      context.save();
      context.globalAlpha = 0.48;
      context.fillStyle = "#4a211b";
      context.shadowColor = "#ff4d24";
      context.shadowBlur = 25;
      context.beginPath();
      context.arc(pit.x, pit.y, pit.radius * pulse, 0, Math.PI * 2);
      context.fill();
      for (var index = 0; index < 20; index += 1) {
        var angle = index * 0.57 + pit.seed;
        var distance = pit.radius * (0.18 + (index % 5) * 0.14);
        var x = pit.x + Math.cos(angle) * distance;
        var y = pit.y + Math.sin(angle) * distance;
        var height = 12 + (index % 4) * 5 + Math.sin(this.elapsed * 10 + index) * 3;
        context.globalAlpha = 0.5 + (index % 3) * 0.1;
        context.fillStyle = index % 2 ? "#ff8c24" : "#ffd166";
        context.beginPath();
        context.moveTo(x, y + 8);
        context.quadraticCurveTo(x - 7, y - height * 0.12, x - 1, y - height);
        context.quadraticCurveTo(x + 7, y - height * 0.35, x, y + 8);
        context.fill();
      }
      context.restore();
    }, this);
  };

  Game.prototype.drawBossWarParticles = function (context) {
    if (!this.isBossBattleActive() || this.bossWarParticleDelay > 0 || this.state === Config.states.CINEMATIC || this.state === Config.states.COUNTDOWN) { return; }
    var fade = this.bossWarParticleFade * this.bossWarParticleFade * (3 - 2 * this.bossWarParticleFade);
    this.bossWarParticles.forEach(function (particle) {
      context.save();
      context.globalAlpha = particle.alpha * fade;
      context.translate(particle.x, particle.y);
      context.rotate(particle.angle);
      context.strokeStyle = particle.shade;
      context.lineWidth = particle.size;
      context.lineCap = "round";
      context.shadowColor = particle.shade;
      context.shadowBlur = particle.size * 2.5;
      context.beginPath();
      context.moveTo(-particle.length * 0.5, 0);
      context.lineTo(particle.length * 0.5, 0);
      context.stroke();
      context.restore();
    });
  };

  Game.prototype.drawMortarWarnings = function (context) {
    this.mortarWarnings.forEach(function (warning) {
      if (!warning.alive) { return; }
      context.save();
      context.globalAlpha = 0.34;
      context.fillStyle = "#e34336";
      context.shadowColor = "rgba(227, 67, 54, 0.65)";
      context.shadowBlur = 10;
      context.beginPath();
      context.arc(warning.x, warning.y, warning.radius, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 0.86;
      context.strokeStyle = "#ff5b4f";
      context.lineWidth = 3;
      context.beginPath();
      context.arc(warning.x, warning.y, warning.radius, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = "rgba(255, 226, 194, 0.92)";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(warning.x - warning.radius - 9, warning.y);
      context.lineTo(warning.x - warning.radius + 12, warning.y);
      context.moveTo(warning.x + warning.radius - 12, warning.y);
      context.lineTo(warning.x + warning.radius + 9, warning.y);
      context.moveTo(warning.x, warning.y - warning.radius - 9);
      context.lineTo(warning.x, warning.y - warning.radius + 12);
      context.moveTo(warning.x, warning.y + warning.radius - 12);
      context.lineTo(warning.x, warning.y + warning.radius + 9);
      context.stroke();
      context.strokeStyle = "rgba(255, 240, 210, 0.74)";
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(warning.x - warning.radius * 0.7, warning.y - warning.radius * 0.7);
      context.lineTo(warning.x - warning.radius * 0.42, warning.y - warning.radius * 0.7);
      context.lineTo(warning.x - warning.radius * 0.7, warning.y - warning.radius * 0.42);
      context.moveTo(warning.x + warning.radius * 0.7, warning.y - warning.radius * 0.7);
      context.lineTo(warning.x + warning.radius * 0.42, warning.y - warning.radius * 0.7);
      context.lineTo(warning.x + warning.radius * 0.7, warning.y - warning.radius * 0.42);
      context.moveTo(warning.x - warning.radius * 0.7, warning.y + warning.radius * 0.7);
      context.lineTo(warning.x - warning.radius * 0.42, warning.y + warning.radius * 0.7);
      context.lineTo(warning.x - warning.radius * 0.7, warning.y + warning.radius * 0.42);
      context.moveTo(warning.x + warning.radius * 0.7, warning.y + warning.radius * 0.7);
      context.lineTo(warning.x + warning.radius * 0.42, warning.y + warning.radius * 0.7);
      context.lineTo(warning.x + warning.radius * 0.7, warning.y + warning.radius * 0.42);
      context.stroke();
      context.fillStyle = "rgba(255, 242, 218, 0.95)";
      context.beginPath();
      context.arc(warning.x, warning.y, 3, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  Game.prototype.drawMarkedTarget = function (context) {
    var target = this.markedTarget;
    if (this.selectedMode !== "endless" || !this.endlessPermanent.tracking || !target || !target.alive) { return; }
    var scale = target.visualScale || 1;
    var drawY = target.y - (target.leapHeight || 0);
    var width = 56 * scale;
    var height = 50 * scale;
    context.save();
    context.strokeStyle = "rgba(0, 150, 255, 0.98)";
    context.fillStyle = "rgba(0, 150, 255, 0.08)";
    context.lineWidth = 3;
    context.fillRect(target.x - width / 2, drawY - height / 2, width, height);
    context.strokeRect(target.x - width / 2, drawY - height / 2, width, height);
    context.fillStyle = "#ffe66d";
    context.shadowColor = "#ffe66d";
    context.shadowBlur = 10;
    context.font = "700 32px Consolas, monospace";
    context.textAlign = "center";
    context.textBaseline = "bottom";
    context.fillText("+", target.x, drawY - height / 2 - 7);
    context.restore();
  };

  Game.prototype.drawSpecialEnemyIndicators = function (context) {
    var self = this;
    this.enemies.forEach(function (enemy) {
      if (!enemy.alive || (!enemy.isBoss && !enemy.isBossClone)) { return; }
      if (enemy.leapHeight > 0) {
        context.save();
        context.globalAlpha = 0.38 * (1 - enemy.leapHeight / 68);
        context.fillStyle = "#120707";
        context.beginPath();
        context.ellipse(enemy.x, enemy.y + 23, 30, 13, 0, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
      if (enemy.bossState === "charging_prepare") {
        var chargeWidth = 56 * (enemy.visualScale || 1);
        context.save();
        context.translate(enemy.x, enemy.y);
        context.rotate(enemy.bossChargeAngle);
        var chargeFill = context.createLinearGradient(0, 0, Config.bossTank.chargeDistance, 0);
        chargeFill.addColorStop(0, "rgba(190, 20, 28, 0.16)");
        chargeFill.addColorStop(1, "rgba(190, 20, 28, 0)");
        context.fillStyle = chargeFill;
        context.fillRect(0, -chargeWidth / 2, Config.bossTank.chargeDistance, chargeWidth);
        self.drawChargePreviewGradient(context, Config.bossTank.chargeDistance, 5, [255, 55, 45], [18, 11]);
        context.restore();
      }
      if (!enemy.active_skill) { return; }
      var state = enemy.skill_states[enemy.active_skill];
      if ((enemy.active_skill === "gatling" || enemy.active_skill === "bomb" || enemy.active_skill === "mortar") && state.phase === "charge") {
        var chargeConfig = self.getBossSkillConfig(enemy.active_skill);
        var chargeProgress = 1 - Math.max(0, state.timer) / chargeConfig.charge;
        context.save();
        context.strokeStyle = enemy.active_skill === "gatling" ? "#ffd700" : (enemy.active_skill === "mortar" ? "#ff4fc3" : "#ff7a00");
        context.lineWidth = 5;
        context.shadowColor = context.strokeStyle;
        context.shadowBlur = 18;
        context.beginPath();
        context.arc(enemy.x, enemy.y - (enemy.leapHeight || 0), 42, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * chargeProgress);
        context.stroke();
        context.restore();
      }
      if (enemy.active_skill === "laser" && (state.phase === "charge" || state.phase === "fire_delay")) {
        var laserProgress = state.phase === "fire_delay" ? 1 : 1 - Math.max(0, state.timer) / self.getBossSkillConfig("laser").charge;
        var length = Math.hypot(Config.worldWidth, Config.worldHeight);
        var laserPulse = state.phase === "fire_delay" ? 1 : 0.45 + (Math.sin(self.elapsed * 28) + 1) * 0.275;
        context.save();
        context.globalAlpha = (0.25 + laserProgress * 0.7) * laserPulse;
        context.strokeStyle = state.phase === "fire_delay" ? "#fff4a8" : "#ff3b30";
        context.lineWidth = 2 + laserProgress * 5 + laserPulse * 2;
        context.shadowColor = state.phase === "fire_delay" ? "#fff4a8" : "#ff3b30";
        context.shadowBlur = 8 + laserPulse * 18;
        context.setLineDash(state.phase === "fire_delay" ? [] : [13, 9]);
        context.beginPath();
        context.moveTo(enemy.x, enemy.y);
        context.lineTo(enemy.x + Math.cos(state.aimAngle) * length, enemy.y + Math.sin(state.aimAngle) * length);
        context.stroke();
        context.restore();
      }
    });
  };

  Game.prototype.drawBossLasers = function (context) {
    this.bossLasers.forEach(function (laser) {
      var alpha = Math.max(0, laser.life / laser.maxLife);
      context.save();
      context.globalAlpha = alpha;
      context.strokeStyle = "#fff5b8";
      context.lineWidth = 15;
      context.shadowColor = "#ff2d20";
      context.shadowBlur = 28;
      context.beginPath();
      context.moveTo(laser.x1, laser.y1);
      context.lineTo(laser.x2, laser.y2);
      context.stroke();
      context.strokeStyle = "#ffffff";
      context.lineWidth = 4;
      context.stroke();
      context.restore();
    });
  };

  Game.prototype.drawEliteChargePaths = function (context) {
    var self = this;
    this.enemies.forEach(function (enemy) {
      if (!enemy.alive || !enemy.isElite || enemy.eliteState !== "charging_prepare") { return; }
      var length = Config.eliteTank.chargeDistance;
      var width = 56 * (enemy.visualScale || 1);
      context.save();
      context.translate(enemy.x, enemy.y);
      context.rotate(enemy.chargeAngle);
      var chargeFill = context.createLinearGradient(0, 0, length, 0);
      chargeFill.addColorStop(0, "rgba(190, 20, 28, 0.18)");
      chargeFill.addColorStop(1, "rgba(190, 20, 28, 0)");
      context.fillStyle = chargeFill;
      context.fillRect(0, -width / 2, length, width);
      self.drawChargePreviewGradient(context, length, 4, [255, 63, 54], [18, 12]);
      context.restore();
    });
  };

  Game.prototype.drawChargePreviewGradient = function (context, length, lineWidth, color, dash) {
    var gradient = context.createLinearGradient(0, 0, length, 0);
    gradient.addColorStop(0, "rgba(" + color.join(",") + ",1)");
    gradient.addColorStop(1, "rgba(" + color.join(",") + ",0)");
    context.strokeStyle = gradient;
    context.lineWidth = lineWidth;
    context.setLineDash(dash);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(length, 0);
    context.stroke();
    context.setLineDash([]);
  };

  Game.prototype.drawTacticalRadar = function (context) {
    var x = (Config.viewportWidth || this.canvas.width) - 205;
    var y = (Config.viewportHeight || this.canvas.height) - 140;
    var width = 180;
    var height = 112.5;
    var scaleX = width / Config.worldWidth;
    var scaleY = height / Config.worldHeight;
    context.save();
    context.fillStyle = "rgba(3, 9, 7, 0.84)";
    context.fillRect(x, y, width, height);
    context.strokeStyle = "rgba(140, 246, 195, 0.65)";
    context.lineWidth = 2;
    context.strokeRect(x, y, width, height);
    context.fillStyle = "rgba(210, 224, 217, 0.23)";
    this.worldMap.obstacles.forEach(function (obstacle) {
      context.fillRect(x + obstacle.x * scaleX, y + obstacle.y * scaleY,
        Math.max(1, obstacle.width * scaleX), Math.max(1, obstacle.height * scaleY));
    });
    this.drawFieldSkillRadarMarker(context, x, y, scaleX, scaleY);
    context.fillStyle = "#f7d87c";
    this.supplies.forEach(function (supply) {
      context.fillRect(x + supply.x * scaleX - 2, y + supply.y * scaleY - 2, 4, 4);
    });
    context.fillStyle = "#ff715c";
    this.enemies.filter(function (enemy) { return enemy.alive; }).forEach(function (enemy) {
      var radarX = x + enemy.x * scaleX;
      var radarY = y + enemy.y * scaleY;
      if (enemy.isTurret) {
        context.fillStyle = "#ff715c";
        context.fillRect(radarX - 3.5, radarY - 3.5, 7, 7);
        context.strokeStyle = "#b9fffa";
        context.lineWidth = 1;
        context.strokeRect(radarX - 3.5, radarY - 3.5, 7, 7);
      } else {
        context.fillStyle = "#ff715c";
        context.beginPath();
        context.arc(radarX, radarY, 3.2, 0, Math.PI * 2);
        context.fill();
      }
    });
    if (this.player.alive) {
      context.fillStyle = "#8cf6c3";
      context.beginPath();
      context.arc(x + this.player.x * scaleX, y + this.player.y * scaleY, 4, 0, Math.PI * 2);
      context.fill();
    }
    context.fillStyle = "rgba(235, 246, 240, 0.8)";
    context.font = "700 11px Consolas, monospace";
    context.textAlign = "left";
    context.fillText("TACTICAL", x + 7, y + 14);
    context.restore();
  };


  Game.prototype.drawFieldSkillRadarMarker = function (context, radarX, radarY, scaleX, scaleY) {
    if (this.selectedMode !== "endless" || !this.fieldSite || !this.getFieldSkill) { return; }
    var skill = this.getFieldSkill();
    if (!skill) { return; }
    var centerX = radarX + this.fieldSite.centerX * scaleX;
    var centerY = radarY + this.fieldSite.centerY * scaleY;
    var symbols = {
      mechanicalAscension: "⚙",
      undyingTotem: "†",
      trumpCard: "★",
      voodooBullet: "☣",
      bitterWinter: "❄"
    };
    context.save();
    context.translate(centerX, centerY);
    context.fillStyle = "rgba(3, 9, 7, 0.92)";
    context.strokeStyle = skill.color || "#f7d87c";
    context.lineWidth = 2;
    context.shadowColor = skill.color || "#f7d87c";
    context.shadowBlur = 12;
    context.beginPath();
    context.arc(0, 0, 11, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    if (skill.id === "paradiseMade") {
      context.fillStyle = skill.color || "#f7d87c";
      context.fillRect(-8, -5, 12, 9);
      context.fillRect(4, -2, 6, 6);
      context.fillStyle = "#0b1712";
      context.fillRect(5, -1, 4, 3);
      context.beginPath();
      context.arc(-4, 5, 2.5, 0, Math.PI * 2);
      context.arc(8, 5, 2.5, 0, Math.PI * 2);
      context.fill();
    } else {
      context.fillStyle = skill.color || "#f7d87c";
      context.font = "900 17px Segoe UI Symbol, sans-serif";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(symbols[skill.id] || "◆", 0, 1);
    }
    context.restore();
  };

  Game.prototype.getPerspectiveIndicators = function () {
    var player = this.player;
    var width = Config.viewportWidth || this.canvas.width;
    var height = Config.viewportHeight || this.canvas.height;
    var centerX = width / 2;
    var centerY = height / 2;
    var margin = 28;
    if (!player || (!player.levelPerspective && player.perspectiveTimer <= 0)) { return []; }
    return this.enemies.filter(function (enemy) {
      var screenX = enemy.x - this.camera.x;
      var screenY = enemy.y - this.camera.y;
      return enemy.alive && (screenX < 0 || screenX > width || screenY < 0 || screenY > height);
    }, this).map(function (enemy) {
      var screenX = enemy.x - this.camera.x;
      var screenY = enemy.y - this.camera.y;
      var dx = screenX - centerX;
      var dy = screenY - centerY;
      var scaleX = dx === 0 ? Infinity : (centerX - margin) / Math.abs(dx);
      var scaleY = dy === 0 ? Infinity : (centerY - margin) / Math.abs(dy);
      var scale = Math.min(scaleX, scaleY);
      var x = centerX + dx * scale;
      var y = centerY + dy * scale;
      return {
        enemy: enemy,
        x: Math.max(margin, Math.min(width - margin, x)),
        y: Math.max(margin, Math.min(height - margin, y)),
        angle: Math.atan2(centerY - y, centerX - x)
      };
    }, this);
  };

  Game.prototype.drawPerspectiveIndicators = function (context) {
    this.getPerspectiveIndicators().forEach(function (indicator) {
      context.save();
      context.translate(indicator.x, indicator.y);
      context.rotate(indicator.angle);
      context.fillStyle = "rgb(0, 255, 0)";
      context.shadowColor = "rgb(0, 255, 0)";
      context.shadowBlur = 10;
      context.beginPath();
      context.moveTo(20, 0);
      context.lineTo(-20, -16);
      context.lineTo(-20, 16);
      context.closePath();
      context.fill();
      context.restore();
    });
  };
  Game.prototype.drawBraveReviveShield = function (context) {
    var player = this.player;
    if (["brave", "endless"].indexOf(this.selectedMode) === -1 || !player || !player.alive || player.reviveShieldTimer <= 0) { return; }
    var remaining = Math.min(1, player.reviveShieldTimer / 3);
    var pulse = Math.sin(this.elapsed * 11) * 2;
    context.save();
    context.fillStyle = "rgba(66, 165, 255, " + (0.1 + remaining * 0.08) + ")";
    context.strokeStyle = "rgba(80, 180, 255, " + (0.55 + remaining * 0.35) + ")";
    context.lineWidth = 4;
    context.shadowColor = "#42a5ff";
    context.shadowBlur = 22;
    context.beginPath();
    context.arc(player.x, player.y, 43 + pulse, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    this.braveReviveParticles.forEach(function (particle, index) {
      var angle = particle.angle + this.elapsed * particle.speed;
      var radius = particle.radius + Math.sin(this.elapsed * 2.8 + particle.phase) * particle.drift;
      var alpha = (0.35 + Math.sin(this.elapsed * 7 + particle.phase + index) * 0.2) * remaining;
      context.globalAlpha = Math.max(0.12, alpha);
      context.fillStyle = "#7cc7ff";
      context.beginPath();
      context.arc(player.x + Math.cos(angle) * radius, player.y + Math.sin(angle) * radius, particle.size, 0, Math.PI * 2);
      context.fill();
    }, this);
    context.restore();
  };

  Game.prototype.drawLowHealthWarning = function (context) {
    if (!this.player.alive || this.player.health > 30 || this.state !== Config.states.PLAYING) { return; }
    context.save();
    context.globalAlpha = 0.28 + (Math.sin(this.elapsed * 7) + 1) * 0.12;
    context.strokeStyle = "#ff5b4f";
    context.lineWidth = 18;
    context.strokeRect(9, 9, (Config.viewportWidth || this.canvas.width) - 18, (Config.viewportHeight || this.canvas.height) - 18);
    context.restore();
  };

  Game.prototype.drawTracks = function (context) {
    this.tracks.forEach(function (track) {
      context.save();
      context.globalAlpha = Math.min(0.28, track.life / 8);
      context.translate(track.x, track.y);
      context.rotate(track.angle);
      context.fillStyle = "#78817d";
      context.fillRect(-24, -23, 10, 5);
      context.fillRect(-24, 18, 10, 5);
      context.restore();
    });
  };

  Game.prototype.drawFrontStepTrails = function (context) {
    this.frontStepTrails.forEach(function (trail) {
      var fade = Math.max(0, trail.life / trail.maxLife);
      context.save();
      context.globalAlpha = fade * trail.opacity;
      context.translate(trail.x, trail.y);
      context.rotate(trail.bodyAngle);
      context.fillStyle = "#5ed6a6";
      context.shadowColor = "#8cf6c3";
      context.shadowBlur = 18;
      context.fillRect(-21, -22, 42, 44);
      context.fillStyle = "#8cf6c3";
      context.fillRect(-28, -25, 9, 50);
      context.fillRect(19, -25, 9, 50);
      context.restore();

      context.save();
      context.globalAlpha = fade * trail.opacity;
      context.translate(trail.x, trail.y);
      context.rotate(trail.turretAngle);
      context.fillStyle = "#d9eee4";
      context.fillRect(0, -5, 42, 10);
      context.fillStyle = "#5ed6a6";
      context.beginPath();
      context.arc(0, 0, 17, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  Game.prototype.drawWrecks = function (context) {
    this.wrecks.forEach(function (wreck) {
      context.save();
      context.globalAlpha = Math.min(0.55, wreck.life / 3);
      context.translate(wreck.x, wreck.y);
      context.rotate(wreck.angle);
      context.fillStyle = "#292f2c";
      context.fillRect(-24, -19, 48, 38);
      context.strokeStyle = "#755247";
      context.lineWidth = 4;
      context.beginPath();
      context.moveTo(-18, -14); context.lineTo(19, 14);
      context.moveTo(18, -14); context.lineTo(-19, 14);
      context.stroke();
      context.restore();
    });
  };

  Game.prototype.drawBossCloneTrails = function (context) {
    this.bossCloneTrails.forEach(function (trail) {
      var alpha = Math.max(0, trail.life / trail.maxLife);
      trail.points.forEach(function (point, index) {
        var progress = point.progress;
        var red = Math.round(255 + (199 - 255) * progress);
        var green = Math.round(215 + (125 - 215) * progress);
        var blue = Math.round(0 + (255 - 0) * progress);
        context.save();
        context.globalAlpha = alpha * (0.18 + (1 - Math.abs(progress - 0.5) * 1.4) * 0.42);
        context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
        context.shadowColor = context.fillStyle;
        context.shadowBlur = 18;
        context.beginPath();
        context.arc(point.x, point.y, 9 + Math.sin(this.elapsed * 18 + index) * 2, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }, this);
      context.save();
      context.globalAlpha = alpha * 0.32;
      context.lineWidth = 12;
      var gradient = context.createLinearGradient(trail.x1, trail.y1, trail.x2, trail.y2);
      gradient.addColorStop(0, trail.startColor);
      gradient.addColorStop(1, trail.endColor);
      context.strokeStyle = gradient;
      context.shadowColor = trail.endColor;
      context.shadowBlur = 22;
      context.beginPath();
      context.moveTo(trail.x1, trail.y1);
      context.lineTo(trail.x2, trail.y2);
      context.stroke();
      context.restore();
    }, this);
  };
  Game.prototype.drawSupportAircraft = function (context) {
    this.supportAircraft.forEach(function (aircraft) {
      context.save();
      context.translate(aircraft.x, aircraft.y);
      context.globalAlpha = 0.82;
      if (this.supportAircraftImage.complete && this.supportAircraftImage.naturalWidth > 0) {
        context.drawImage(this.supportAircraftImage, -110, -80, 220, 160);
      } else {
        context.fillStyle = "#303738";
        context.fillRect(-105, -30, 210, 60);
      }
      context.strokeStyle = "rgba(195, 241, 255, 0.85)";
      context.lineWidth = 4;
      context.beginPath();
      context.moveTo(-125, -50); context.lineTo(125, -50);
      context.stroke();
      context.save();
      context.rotate(aircraft.rotor);
      context.strokeStyle = "rgba(212, 244, 255, 0.65)";
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(-145, 0); context.lineTo(145, 0);
      context.moveTo(0, -145); context.lineTo(0, 145);
      context.stroke();
      context.restore();
      context.restore();
    }, this);
  };

  Game.prototype.drawRearGuards = function (context) {
    this.rearGuards.forEach(function (guard) {
      context.save();
      context.translate(guard.x, guard.y);
      context.rotate(guard.angle);
      context.globalAlpha = guard.moving ? 0.82 : 0.65;
      context.shadowColor = "#72cfff";
      context.shadowBlur = 18;
      context.fillStyle = "rgba(38, 119, 151, 0.72)";
      context.fillRect(-guard.size / 2, -guard.size / 2, guard.size, guard.size);
      context.strokeStyle = "#a8ecff";
      context.lineWidth = 3;
      context.strokeRect(-guard.size / 2, -guard.size / 2, guard.size, guard.size);
      context.fillStyle = "#e8fbff";
      context.font = "900 15px Consolas, monospace";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(String(guard.remaining), 0, 1);
      context.restore();
    });
  };

  Game.prototype.drawSupplies = function (context) {
    var colors = { repair: "#79e394", shield: "#72cfff", rapid: "#f7d87c", perspective: "rgb(0, 255, 0)" };
    var labels = { repair: "+", shield: "S", rapid: "R", perspective: "➤" };
    this.supplies.forEach(function (supply) {
      var scale = 1 + Math.sin(supply.pulse) * 0.08;
      var drawY = supply.y - (supply.dropHeight || 0);
      context.save();
      if (supply.airborne) {
        context.strokeStyle = "rgba(235, 246, 240, 0.75)";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(supply.x - 18, drawY - 18); context.lineTo(supply.x - 28, drawY - 48);
        context.moveTo(supply.x + 18, drawY - 18); context.lineTo(supply.x + 28, drawY - 48);
        context.stroke();
        context.strokeStyle = "#d9eee4";
        context.beginPath();
        context.arc(supply.x, drawY - 50, 30, Math.PI, Math.PI * 2);
        context.stroke();
      }
      context.translate(supply.x, drawY);
      context.scale(scale, scale);
      context.shadowColor = colors[supply.type];
      context.shadowBlur = 18;
      context.fillStyle = "rgba(7, 14, 11, 0.9)";
      context.fillRect(-19, -19, 38, 38);
      context.strokeStyle = colors[supply.type];
      context.lineWidth = 3;
      context.strokeRect(-18, -18, 36, 36);
      context.fillStyle = colors[supply.type];
      context.font = "900 23px Consolas, monospace";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(labels[supply.type], 0, 1);
      context.restore();
    });
  };

  Game.prototype.drawGround = function (context, bounds) {
    if (this.worldMap && this.worldMap.isBossMap) {
      this.drawWastelandGround(context, bounds);
      return;
    }
    var left = bounds ? bounds.left : 0;
    var top = bounds ? bounds.top : 0;
    var right = bounds ? bounds.right : Config.worldWidth;
    var bottom = bounds ? bounds.bottom : Config.worldHeight;
    context.fillStyle = "#315f31";
    context.fillRect(left, top, right - left, bottom - top);
    context.save();
    var hash = function (x, y, salt) {
      var value = Math.imul((x | 0) ^ 0x45D9F3B, 0x27D4EB2D);
      value = Math.imul(value ^ (y | 0), 0x165667B1);
      value = Math.imul(value ^ (salt | 0), 0x9E3779B1);
      value ^= value >>> 15;
      return (value >>> 0) / 4294967296;
    };
    var patchLeft = Math.floor(left / 36) * 36;
    var patchRight = Math.ceil(right / 36) * 36;
    var patchTop = Math.floor(top / 36) * 36;
    var patchBottom = Math.ceil(bottom / 36) * 36;
    for (var y = patchTop; y <= patchBottom; y += 36) {
      for (var x = patchLeft; x <= patchRight; x += 36) {
        var cellX = Math.floor(x / 36);
        var cellY = Math.floor(y / 36);
        var patch = hash(cellX, cellY, 13);
        var shade = hash(cellX, cellY, 29);
        context.fillStyle = patch > 0.78 ? "rgba(125, 157, 67, 0.12)" : "rgba(13, 51, 27, 0.12)";
        context.fillRect(x + 2, y + 3, 30 + Math.floor(patch * 5), 24 + Math.floor(shade * 9));
        if (patch > 0.42) {
          context.fillStyle = "rgba(26, 75, 33, 0.22)";
          context.fillRect(x + 5 + Math.floor(patch * 16), y + 8, 3, 5 + Math.floor(shade * 5));
          context.fillRect(x + 24, y + 20 + Math.floor(shade * 8), 2, 4);
        }
        if (patch < 0.28) {
          context.fillStyle = "rgba(176, 183, 91, 0.24)";
          context.fillRect(x + 10, y + 11, 2, 5);
          context.fillRect(x + 14, y + 8, 2, 7);
          context.fillRect(x + 18, y + 12, 2, 4);
        }
        if (shade > 0.7) {
          context.fillStyle = "rgba(222, 204, 109, 0.45)";
          context.fillRect(x + 27, y + 7, 2, 2);
          context.fillRect(x + 31, y + 9, 2, 2);
        }
      }
    }
    var detailLeft = Math.floor(left / 18) * 18;
    var detailRight = Math.ceil(right / 18) * 18;
    var detailTop = Math.floor(top / 18) * 18;
    var detailBottom = Math.ceil(bottom / 18) * 18;
    for (var detailY = detailTop; detailY <= detailBottom; detailY += 18) {
      for (var detailX = detailLeft; detailX <= detailRight; detailX += 18) {
        var detail = hash(Math.floor(detailX / 18), Math.floor(detailY / 18), 97);
        if (detail < 0.34) {
          context.fillStyle = "rgba(12, 44, 24, 0.42)";
          context.fillRect(detailX + 2 + Math.floor(detail * 8), detailY + 5, 2, 3);
          context.fillRect(detailX + 5, detailY + 8, 2, 4);
        } else if (detail > 0.82) {
          context.fillStyle = "rgba(195, 193, 91, 0.5)";
          context.fillRect(detailX + 7, detailY + 6, 2, 3);
          context.fillRect(detailX + 10, detailY + 4, 2, 5);
        }
      }
    }
    context.restore();
  };
  Game.prototype.drawWastelandGround = function (context, bounds) {
    var left = bounds ? bounds.left : 0;
    var top = bounds ? bounds.top : 0;
    var right = bounds ? bounds.right : Config.worldWidth;
    var bottom = bounds ? bounds.bottom : Config.worldHeight;
    var hash = function (x, y, salt) { var v = Math.imul((x | 0) ^ 0x45D9F3B, 0x27D4EB2D); v = Math.imul(v ^ (y | 0), 0x165667B1); v = Math.imul(v ^ (salt | 0), 0x9E3779B1); v ^= v >>> 15; return (v >>> 0) / 4294967296; };
    context.fillStyle = "#2d2926"; context.fillRect(left, top, right - left, bottom - top);
    context.save();
    for (var y = Math.floor(top / 42) * 42; y < bottom + 42; y += 42) {
      for (var x = Math.floor(left / 42) * 42; x < right + 42; x += 42) {
        var tone = hash(Math.floor(x / 42), Math.floor(y / 42), 31);
        context.fillStyle = tone > 0.55 ? "rgba(119, 94, 69, 0.19)" : "rgba(12, 12, 12, 0.2)";
        context.fillRect(x + 3, y + 4, 32 + Math.floor(tone * 8), 25);
        if (tone < 0.42) { context.strokeStyle = "rgba(9, 8, 8, 0.46)"; context.lineWidth = 2; context.beginPath(); context.moveTo(x + 8, y + 13); context.lineTo(x + 19, y + 22); context.lineTo(x + 14, y + 32); context.stroke(); }
        if (tone > 0.72) { context.fillStyle = "rgba(204, 157, 96, 0.38)"; context.fillRect(x + 22, y + 9, 3, 3); context.fillRect(x + 28, y + 15, 2, 2); }
      }
    }
    context.restore();
  };

  Game.prototype.drawCampusGrid = function (context, bounds) {
    if (this.worldMap && this.worldMap.isBossMap) { return; }
    var spacing = Config.tileSize;
    var left = bounds ? Math.floor(bounds.left / spacing) * spacing : 0;
    var right = bounds ? Math.ceil(bounds.right / spacing) * spacing : Config.worldWidth;
    var top = bounds ? Math.floor(bounds.top / spacing) * spacing : 0;
    var bottom = bounds ? Math.ceil(bounds.bottom / spacing) * spacing : Config.worldHeight;
    context.save();
    context.strokeStyle = "rgba(223, 255, 239, 0.06)";
    context.lineWidth = 1;
    for (var x = left; x <= right; x += spacing) {
      context.beginPath(); context.moveTo(x, top); context.lineTo(x, bottom); context.stroke();
    }
    for (var y = top; y <= bottom; y += spacing) {
      context.beginPath(); context.moveTo(left, y); context.lineTo(right, y); context.stroke();
    }
    context.restore();
  };

  Game.prototype.drawMuzzleFlashes = function (context) {
    this.muzzleFlashes.forEach(function (flash) {
      context.save();
      context.globalAlpha = Math.min(1, flash.life / 0.06);
      context.shadowColor = flash.color;
      context.shadowBlur = 24;
      context.fillStyle = flash.color;
      context.beginPath();
      context.arc(flash.x, flash.y, 12, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  Game.prototype.drawRespawnMessage = function (context) {
    var centerX = this.camera.x + (Config.viewportWidth || this.canvas.width) / 2;
    var centerY = this.camera.y + (Config.viewportHeight || this.canvas.height) / 2;
    context.save();
    context.fillStyle = "rgba(3, 8, 6, 0.82)";
    context.fillRect(centerX - 190, centerY - 48, 380, 96);
    context.strokeStyle = "#8cf6c3";
    context.lineWidth = 2;
    context.strokeRect(centerX - 190, centerY - 48, 380, 96);
    context.fillStyle = "#f4f7f2";
    context.font = "800 28px Microsoft YaHei, sans-serif";
    context.textAlign = "center";
    context.fillText("增援即将抵达", centerX, centerY - 5);
    context.fillStyle = "#8cf6c3";
    context.font = "700 18px Consolas, monospace";
    context.fillText(this.respawnTimer.toFixed(1) + " s", centerX, centerY + 28);
    context.restore();
  };

  TankGame.Game = Game;
}());


