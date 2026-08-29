(function () {
  "use strict";

  window.TankGame = window.TankGame || {};
  window.TankGame.Config = Object.freeze({
    viewportWidth: 1440,
    viewportHeight: 900,
    // 120 x 80 tiles: a shared battlefield with room for larger encounters.
    worldWidth: 7200,
    worldHeight: 4800,
    fixedStep: 1 / 60,
    maxFrameTime: 0.25,
    title: "钢铁征途 坦克大战",
    identity: "钢铁征途",
    backgroundMusic: "music/MEGALOVANIA-Toby Fox.mp3",
    challengeBackgroundMusic: "music/xkl.mp3",
    shopBackgroundMusic: "music/shop.mp3",
    bossBackgroundMusic: "music/boss-legacy-theme.mp3",
    bossMeteor: Object.freeze({
      damage: 100,
      radius: 100,
      minimumInterval: 2,
      maximumInterval: 30,
      minimumCount: 1,
      maximumCount: 3,
      duration: 2
    }),
    cinematicSoundEffects: Object.freeze({
      rotor: "assets/audio/cinematic/helicopter-rotor.mp3",
      pilot: "assets/audio/cinematic/helicopter-pilot.mp3"
    }),
    soundEffects: Object.freeze({
      begin: "music/begin.mp3",
      again: "music/again.mp3",
      shoot: "music/bullet.mp3",
      defeat: "music/defeat.mp3",
      explode: "music/explosion.mp3",
      pickup: "assets/audio/energy-pickup.wav",
      boostPickup: "music/Get a boost.mp3",
      hit: "music/Got hurt.mp3",
      victory: "music/win.mp3",
      burn: "assets/audio/burn.wav",
      pageTurn: "assets/audio/page-turn.wav",
      trumpCardSlash: "assets/images/kill.mp4"
    }),
    tileSize: 60,
    playerSpeed: 190,
    playerReverseSpeed: 125,
    playerTurnSpeed: 2.65,
    bulletSpeed: 760,
    bulletRadius: 5,
    bulletDamage: 25,
    bulletLifetime: 2.5,
    playerFireCooldown: 0.38,
    enemyFireCooldown: 1.45,
    fixedTurret: Object.freeze({
      spawnChance: 0.15,
      healthMultiplier: 1.3,
      attackRangeMultiplier: 2,
      fireCooldownMultiplier: 0.85,
      bombRadius: 120,
      mortarRadius: 120,
      projectileSpeedMultiplier: 0.58,
      mortarWarningDuration: 0.7,
      mortarFlightDuration: 0.7,
      mortarWarningRadius: 50,
      weaponBreakpoints: Object.freeze({ bullet: 0.1, bomb: 0.6 })
    }),
    eliteTank: Object.freeze({
      scale: 1.1,
      healthMultiplier: 2,
      damageMultiplier: 1.25,
      burstInterval: 8,
      burstBulletCount: 16,
      burstDamageMultiplier: 0.25,
      burstSpeedMultiplier: 0.8,
      maxActiveBurstBullets: 32,
      chargePrepareTime: 1.8,
      chargeCooldown: 10,
      chargeDistance: 420,
      chargeSpeedMultiplier: 6
    }),
    bossTank: Object.freeze({
      scale: 1.1,
      healthMultiplier: 3,
      damageMultiplier: 1.25,
      burstInterval: 7,
      burstBulletCount: 18,
      burstDamageMultiplier: 0.25,
      burstSpeedMultiplier: 0.8,
      maxActiveBurstBullets: 36,
      chargePrepareTime: 1.5,
      chargeCooldown: 10,
      chargeDistance: 420,
      chargeSpeedMultiplier: 6,
      skillDecisionDelay: 2,
      gatling: Object.freeze({ charge: 2, duration: 6, cooldown: 25, cooldownStep: 0.2, minimumCooldown: 16, fireScale: 0.22 }),
      bomb: Object.freeze({ charge: 0.5, duration: 10, cooldown: 18, radius: 80, radiusStep: 5, maximumRadius: 135, range: 420, rangeStep: 60 }),
      mortar: Object.freeze({ charge: 3, duration: 10, cooldown: 18, radius: 80, radiusStep: 5, maximumRadius: 135, range: 420, rangeStep: 60 }),
      leap: Object.freeze({
        duration: 0.45, cooldown: 3, minimumDistance: 30, maximumDistance: 280,
        distanceStep: 40, maximumDistanceLimit: 440, distantTriggerRange: 500,
        dodgeChance: 1, repositionCheckInterval: 1.25, repositionChance: 0.28
      }),
      laser: Object.freeze({ charge: 3, fireDelay: 0.5, cooldown: 32, damageMultiplier: 1.75, damageStep: 0.05 }),
      clone: Object.freeze({ duration: 10, durationStep: 1, cooldown: 22, minimumDistance: 100, maximumDistance: 200 })
    }),
    modes: Object.freeze({
      normal: Object.freeze({
        id: "normal", label: "普通模式", lives: 2,
        enemyCount: 4,
        enemyHealth: 50, enemyDamage: 25, enemySpeed: 66, enemyTurnSpeed: 1.45,
        detectionRange: 720, attackRange: 510, reactionTime: 0.7,
        pathInterval: 1.25, fireCooldown: 1.85, aimError: 0.12
      }),
      challenge: Object.freeze({
        id: "challenge", label: "挑战模式", lives: 1,
        enemyHealth: 75, enemyDamage: 25, enemySpeed: 102, enemyTurnSpeed: 2.3,
        detectionRange: 1120, attackRange: 700, reactionTime: 0.18,
        pathInterval: 0.38, fireCooldown: 1.05, aimError: 0.035,
        levels: Object.freeze([
          Object.freeze({ level: 1, enemyCount: 4, enemyHealth: 75, speedScale: 0.92, reactionScale: 1.15, fireScale: 1.12, aimScale: 1.2, strafeChance: 0.35 }),
          Object.freeze({ level: 2, enemyCount: 6, enemyHealth: 100, speedScale: 1, reactionScale: 0.92, fireScale: 0.94, aimScale: 0.9, strafeChance: 0.62 }),
          Object.freeze({ level: 3, enemyCount: 8, enemyHealth: 125, speedScale: 1.1, reactionScale: 0.72, fireScale: 0.8, aimScale: 0.65, strafeChance: 0.86 })
        ])
      }),
      endless: Object.freeze({
        id: "endless", label: "无尽模式", lives: 1,
        enemyCount: 5, enemyHealth: 60, enemyDamage: 20,
        enemySpeed: 102, enemyTurnSpeed: 2.3,
        detectionRange: 1120, attackRange: 700, reactionTime: 0.18,
        pathInterval: 0.38, fireCooldown: 1.05, aimError: 0.035,
        strafeChance: 0.62, preferredRange: 350
      }),
      brave: Object.freeze({
        id: "brave", label: "勇者行动", lives: 1,
        enemyCount: 1, enemyHealth: 60, enemyDamage: 20,
        enemySpeed: 102, enemyTurnSpeed: 2.3,
        detectionRange: 1120, attackRange: 700, reactionTime: 0.18,
        pathInterval: 0.38, fireCooldown: 1.05, aimError: 0.035,
        strafeChance: 0.62, preferredRange: 350
      }),
      online: Object.freeze({
        id: "online", label: "野战", lives: 1, enemyCount: 4, enemyHealth: 50, enemyDamage: 25,
        enemySpeed: 66, enemyTurnSpeed: 1.45, detectionRange: 720, attackRange: 510,
        reactionTime: 0.7, pathInterval: 1.25, fireCooldown: 1.85, aimError: 0.12
      })
    }),
    partsSettlement: Object.freeze({
      normal: Object.freeze({ scorePerParts: 100, partsPerStep: 10, victoryBonus: 30 }),
      challenge: Object.freeze({ scorePerParts: 100, partsPerStep: 10, victoryMultiplier: 2 }),
      endless: Object.freeze({ scorePerParts: 500, partsPerStep: 10, scoreMultiplierInterval: 5, scoreMultiplier: 1.2 }),
      brave: Object.freeze({ scorePerParts: 100, partsPerStep: 10, scoreMultiplier: 2 }),
      online: Object.freeze({ scorePerParts: 100, partsPerStep: 10, victoryBonus: 0 })
    }),
    shop: Object.freeze({
      categories: Object.freeze([
        Object.freeze({ id: "upgrades", label: "强化" }),
        Object.freeze({ id: "boosts", label: "增益" }),
        Object.freeze({ id: "items", label: "道具" }),
        Object.freeze({ id: "skins", label: "皮肤" })
      ]),
      upgrades: Object.freeze([
        Object.freeze({ id: "health", label: "基础血量", description: "无尽模式和勇者行动中，基础血量 +25。", baseCost: 100, costStep: 25, maxLevel: 9999, allowedModes: ["endless", "brave"], effect: "+25 生命" }),
        Object.freeze({ id: "attack", label: "基础攻击力", description: "无尽模式和勇者行动中，基础攻击力 +1。", baseCost: 300, costStep: 10, maxLevel: 9999, allowedModes: ["endless", "brave"], effect: "+1 攻击" }),
        Object.freeze({ id: "speed", label: "基础移速", description: "无尽模式和勇者行动中，基础移速 +1%，最高 20%。", baseCost: 1000, costStep: 1000, maxLevel: 20, allowedModes: ["endless", "brave"], effect: "+1% 移速" })
      ]),
      boosts: Object.freeze([
        Object.freeze({ id: "healing", label: "治疗", description: "单次无尽模式或勇者行动中，每 10 秒回复 100 生命。", price: 500, maxLevel: 1, allowedModes: ["endless", "brave"], effect: "每 10 秒 +100 生命" }),
        Object.freeze({ id: "frenzy", label: "狂暴", description: "单次无尽模式或勇者行动中，攻击力 +15%，移速 +5%。", price: 5000, maxLevel: 1, allowedModes: ["endless", "brave"], effect: "攻击 +15% · 移速 +5%" }),
        Object.freeze({ id: "instantKill", label: "瞬杀", description: "每次购买使击中普通坦克或炮台时的瞬杀概率提高 0.1%，最高 100%。", price: 10086, maxLevel: 1000, allowedModes: ["endless", "brave"], effect: "每级 +0.1% · 最高 100%" })
      ]),
      items: Object.freeze([
        Object.freeze({ id: "mudTruck", label: "泥头车", description: "无尽模式开局获得前车之鉴；冲撞伤害为当前攻击力 200%，移速和体型各提升 10%，可撞毁可破坏墙壁。", price: 5000, maxLevel: 1, allowedModes: ["endless"], effect: "前车之鉴 · 冲撞强化" }),
        Object.freeze({ id: "bomb", label: "炸弹", description: "每次购买使子弹突变为炸弹的概率提高 10%，最高 100%。", price: 2608, maxLevel: 10, allowedModes: ["endless", "brave"], effect: "每级 +10% · 范围爆炸" }),
        Object.freeze({ id: "mortar", label: "迫击炮", description: "每次购买使子弹突变为迫击炮弹的概率提高 1%，最高 100%。", price: 2604, maxLevel: 100, allowedModes: ["endless", "brave"], effect: "每级 +1% · 范围爆炸" }),
        Object.freeze({ id: "redBullet", label: "红色子弹", description: "无尽模式和勇者行动中，发射的子弹全部变为红色子弹，攻击力翻倍。", price: 9999, maxLevel: 1, allowedModes: ["endless", "brave"], effect: "全部子弹 · 攻击翻倍" })
      ]),
      skins: Object.freeze([
        Object.freeze({ id: "default", label: "原皮", description: "出厂涂装，已解锁。", price: 0, image: "assets/images/tanks/player-hull.png" }),
        Object.freeze({ id: "red", label: "红皮", description: "参考红色涂装。", price: 5000, image: "assets/images/tanks/red.jpg" }),
        Object.freeze({ id: "yellow", label: "黄皮", description: "参考黄色涂装。", price: 5000, image: "assets/images/tanks/yellow.jpg" }),
        Object.freeze({ id: "blue", label: "蓝皮", description: "参考蓝色涂装。", price: 5000, image: "assets/images/tanks/blue.jpg" }),
        Object.freeze({ id: "green", label: "绿皮", description: "参考绿色涂装。", price: 5000, image: "assets/images/tanks/green.jpg" })
      ])
    }),
    endlessRewards: Object.freeze({
      base: Object.freeze([
        Object.freeze({ id: "maxHealth", label: "钢铁意志", description: "生命上限提升，当前层数越高，提升越多。" }),
        Object.freeze({ id: "attack", label: "火力强化", description: "攻击力提升，当前层数越高，提升越多。" }),
        Object.freeze({ id: "fireRate", label: "快速装填", description: "射速提升 10%。可重复选择。" }),
        Object.freeze({ id: "repair", label: "战地维修", description: "本关首次受伤时自动恢复生命上限的 40%。" }),
        Object.freeze({ id: "shield", label: "临时护盾", description: "获得可抵挡 3 次攻击的整关护盾。" }),
        Object.freeze({ id: "rapid", label: "临时速射", description: "速射效果持续整整一关。" }),
        Object.freeze({ id: "perspective", label: "透视", description: "用绿色箭头标记屏幕外敌人，效果持续整整一关。" })
      ]),
      permanent: Object.freeze([
        Object.freeze({ id: "tracking", label: "追踪弹", description: "子弹自动追踪敌人，初始持续 2 秒，最高 5 秒。", maxLevel: 7 }),
        Object.freeze({ id: "splitBullet", label: "分裂弹", description: "同时射出多颗扇形子弹，每颗造成当前攻击力 70% 的伤害，最多 5 颗。", maxLevel: 4 }),
        Object.freeze({ id: "explosive", label: "爆裂弹", description: "命中后发射碎片，初始造成攻击力 25% 的伤害，每级提高 5%，最高 50%。", maxLevel: 6 }),
        Object.freeze({ id: "jammer", label: "信号干扰器", description: "干扰敌人 0.95 秒；升级缩短冷却，满级冷却 5.4 秒。", maxLevel: 21 }),
        Object.freeze({ id: "speed", label: "你跑不过我", description: "初始提升 40% 移速，每级提高 5%，最高 60%。", maxLevel: 5 }),
        Object.freeze({ id: "braveShield", label: "勇者无畏", description: "每关开始获得一次性前方护盾，等级提升抵挡次数。" }),
        Object.freeze({ id: "frontStep", label: "前车之鉴", description: "每次发射时向前冲出一段距离。", maxLevel: 1 }),
        Object.freeze({ id: "rearShot", label: "后顾之忧", description: "每 2 秒向尾部发射消弹方块，方块停止运动在距车尾 100 像素处，最多消除 1～5 颗敌方子弹。", maxLevel: 5 }),
        Object.freeze({ id: "supportCall", label: "呼叫支援", description: "支援飞机定期空投随机临时增益，初始冷却 24 秒，每级降低 3 秒，最低 9 秒。", maxLevel: 9 }),
        Object.freeze({ id: "voidWalker", label: "虚空行者", description: "可以穿墙，但本局最多在墙内停留 5 秒。" })
      ])
    }),
    fieldSkills: Object.freeze([
      Object.freeze({ id: "mechanicalAscension", label: "机械飞升", color: "#8cf6c3", icon: "field-skill-icons/mechanical-ascension.svg", iconFront: "field-skill-icons/mechanical-ascension-front.svg" }),
      Object.freeze({ id: "undyingTotem", label: "不死图腾", color: "#72cfff", icon: "field-skill-icons/undying-totem.svg", iconFront: "field-skill-icons/undying-totem-front.svg" }),
      Object.freeze({ id: "trumpCard", label: "密命王牌", color: "#ffd166", icon: "field-skill-icons/trump-card.svg", iconFront: "field-skill-icons/trump-card-front.svg" }),
      Object.freeze({ id: "voodooBullet", label: "巫毒子弹", color: "#d88cff", icon: "field-skill-icons/voodoo-bullet.svg", iconFront: "field-skill-icons/voodoo-bullet-front.svg" }),
      Object.freeze({ id: "paradiseMade", label: "天堂制造", color: "#fff0a8", icon: "field-skill-icons/paradise-made.svg", iconFront: "field-skill-icons/paradise-made-front.svg" }),
      Object.freeze({ id: "bitterWinter", label: "凛冽寒冬", color: "#9edcff", icon: "field-skill-icons/bitter-winter.svg", iconFront: "field-skill-icons/bitter-winter-front.svg" })
    ]),
    states: Object.freeze({
      MENU: "MENU",
      FIELD_ROLL: "FIELD_ROLL",
      PLAYING: "PLAYING",
      COUNTDOWN: "COUNTDOWN",
      CINEMATIC: "CINEMATIC",
      PAUSED: "PAUSED",
      SHOP: "SHOP",
      LEVEL_CLEAR: "LEVEL_CLEAR",
      REWARD: "REWARD",
      VICTORY: "VICTORY",
      DEFEAT: "DEFEAT"
    })
  });
}());
