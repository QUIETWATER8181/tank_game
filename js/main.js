(function () {
  "use strict";

  var TankGame = window.TankGame;
  var Config = TankGame.Config;
  var canvas = document.getElementById("gameCanvas");
  var mobileControls = document.getElementById("mobileControls");
  var input = new TankGame.InputManager(canvas);
  var game = new TankGame.Game(canvas, input);
  var menuPanel = document.getElementById("menuPanel");
  var pausePanel = document.getElementById("pausePanel");
  var countdownPanel = document.getElementById("countdownPanel");
  var countdownValue = document.getElementById("countdownValue");
  var countdownLabel = document.getElementById("countdownLabel");
  var levelClearPanel = document.getElementById("levelClearPanel");
  var levelClearEyebrow = levelClearPanel.querySelector(".eyebrow");
  var levelClearWarning = levelClearPanel.querySelector(".level-warning");
  var rewardPanel = document.getElementById("rewardPanel");
  var fieldSkillRollPanel = document.getElementById("fieldSkillRollPanel");
  var fieldSkillWheelDisc = document.getElementById("fieldSkillWheelDisc");
  var fieldSkillRollButton = document.getElementById("fieldSkillRollButton");
  var fieldSkillRollStatus = document.getElementById("fieldSkillRollStatus");
  var rewardEyebrow = document.getElementById("rewardEyebrow");
  var rewardTitle = document.getElementById("rewardTitle");
  var rewardSummary = document.getElementById("rewardSummary");
  var rewardOptions = document.getElementById("rewardOptions");
  var levelClearSummary = document.getElementById("levelClearSummary");
  var levelProgress = document.getElementById("levelProgress");
  var nextLevelButton = document.getElementById("nextLevelButton");
  var levelHud = document.getElementById("levelHud");
  var levelValue = document.getElementById("levelValue");
  var fieldSkillHud = document.getElementById("fieldSkillHud");
  var fieldSkillValue = document.getElementById("fieldSkillValue");
  var crystalHud = document.getElementById("crystalHud");
  var crystalValue = document.getElementById("crystalValue");
  var victoryPanel = document.getElementById("victoryPanel");
  var defeatPanel = document.getElementById("defeatPanel");
  var startButton = document.getElementById("startButton");
  var partsValue = document.getElementById("partsValue");
  var shopButton = document.getElementById("shopButton");
  var musicButton = document.getElementById("musicButton");
  var musicVolumePanel = document.getElementById("musicVolumePanel");
  var musicVolumeSlider = document.getElementById("musicVolumeSlider");
  var musicVolumeValue = document.getElementById("musicVolumeValue");
  var muteButton = document.getElementById("muteButton");
  var fullscreenButton = document.getElementById("fullscreenButton");
  var modeOptions = document.querySelectorAll(".mode-option");
  var pauseButton = document.getElementById("pauseButton");
  var pauseGiftButton = document.getElementById("pauseGiftButton");
  var resetButton = document.getElementById("resetButton");
  var helpButton = document.getElementById("helpButton");
  var helpPanel = document.getElementById("helpPanel");
  var helpCloseButton = document.getElementById("helpCloseButton");
  var helpPreviousButton = document.getElementById("helpPreviousButton");
  var helpNextButton = document.getElementById("helpNextButton");
  var helpPageIndicator = document.getElementById("helpPageIndicator");
  var helpPages = document.querySelectorAll(".help-page");
  var helpPageIndex = 0;
  var shopPanel = document.getElementById("shopPanel");
  var shopCloseButton = document.getElementById("shopCloseButton");
  var shopTabs = document.getElementById("shopTabs");
  var shopItems = document.getElementById("shopItems");
  var shopStatus = document.getElementById("shopStatus");
  var shopPartsValue = document.getElementById("shopPartsValue");
  var shopCategory = "upgrades";
  var resumeButton = document.getElementById("resumeButton");
  var pauseRestartButton = document.getElementById("pauseRestartButton");
  var pauseMenuButton = document.getElementById("pauseMenuButton");
  var giftPanel = document.getElementById("giftPanel");
  var giftForm = document.getElementById("giftForm");
  var giftCodeInput = document.getElementById("giftCodeInput");
  var giftCloseButton = document.getElementById("giftCloseButton");
  var giftStatus = document.getElementById("giftStatus");
  var giftPanelOpen = false;
  var statusText = document.getElementById("statusText");
  var healthValue = document.getElementById("healthValue");
  var healthHud = healthValue.parentElement;
  var modeValue = document.getElementById("modeValue");
  var livesValue = document.getElementById("livesValue");
  var enemyValue = document.getElementById("enemyValue");
  var scoreValue = document.getElementById("scoreValue");
  var comboValue = document.getElementById("comboValue");
  var comboHud = comboValue.parentElement;
  var cooldownValue = document.getElementById("cooldownValue");
  var powerValue = document.getElementById("powerValue");
  var victoryScore = document.getElementById("victoryScore");
  var defeatScore = document.getElementById("defeatScore");
  var victoryMode = document.getElementById("victoryMode");
  var defeatMode = document.getElementById("defeatMode");
  var victoryStats = document.getElementById("victoryStats");
  var defeatStats = document.getElementById("defeatStats");
  var recordSummary = document.getElementById("recordSummary");
  var retryButtons = document.querySelectorAll(".retry-button");
  var menuButtons = document.querySelectorAll(".menu-button");
  var accumulator = 0;
  var previousTime = performance.now();
  var lastCountdownDisplay = null;
  var mobileDevice = Boolean((navigator && navigator.maxTouchPoints > 0) ||
    (window.matchMedia && window.matchMedia("(max-width: 640px)").matches));
  updateMusicVolumeInterface(TankGame.Audio.getMusicVolume());

  function syncInterface() {
    var state = game.state;
    document.getElementById("gameStage").classList.toggle("is-cinematic", state === Config.states.CINEMATIC);
    mobileControls.classList.toggle("is-active", mobileDevice &&
      [Config.states.PLAYING, Config.states.COUNTDOWN].indexOf(state) !== -1);
    menuPanel.hidden = state !== Config.states.MENU;
    shopPanel.hidden = state !== Config.states.SHOP;
    pausePanel.hidden = state !== Config.states.PAUSED;
    giftPanel.hidden = !giftPanelOpen || state !== Config.states.PAUSED;
    countdownPanel.hidden = state !== Config.states.COUNTDOWN;
    levelClearPanel.hidden = state !== Config.states.LEVEL_CLEAR;
    rewardPanel.hidden = state !== Config.states.REWARD;
    fieldSkillRollPanel.hidden = state !== Config.states.FIELD_ROLL;
    victoryPanel.hidden = state !== Config.states.VICTORY;
    defeatPanel.hidden = state !== Config.states.DEFEAT;
    levelHud.hidden = ["challenge", "endless", "brave"].indexOf(game.selectedMode) === -1;
    fieldSkillHud.hidden = game.selectedMode !== "endless";
    crystalHud.hidden = game.selectedMode !== "endless";
    fieldSkillValue.textContent = game.getFieldSkillLabel ? game.getFieldSkillLabel() : "--";
    crystalValue.textContent = String(game.fieldCrystalCount || 0);
    levelValue.textContent = game.selectedMode === "endless" ? "第 " + game.endlessLevel + " 关" :
      (game.selectedMode === "brave" ? "第 " + game.braveLevel + " 关" : game.challengeLevel + " / " + game.maxChallengeLevel);
    countdownLabel.textContent = game.selectedMode === "challenge" ? "第 " + game.challengeLevel + " 关 · 准备战斗" :
      (game.selectedMode === "endless" ? "无尽模式 · 第 " + game.endlessLevel + " 关" :
        (game.selectedMode === "brave" ? "勇者行动 · 第 " + game.braveLevel + " 关" : "准备战斗"));
    pauseButton.disabled = state !== Config.states.PLAYING && state !== Config.states.PAUSED;
    pauseButton.textContent = state === Config.states.PAUSED ? "▶" : "Ⅱ";
    pauseButton.title = state === Config.states.PAUSED ? "继续" : "暂停";
    pauseButton.setAttribute("aria-label", pauseButton.title);

    if (state === Config.states.MENU) {
      statusText.textContent = "准备就绪";
    } else if (state === Config.states.FIELD_ROLL) {
      statusText.textContent = "抽取场地技能";
    } else if (state === Config.states.COUNTDOWN) {
      statusText.textContent = "战斗准备";
    } else if (state === Config.states.CINEMATIC) {
      statusText.textContent = "BOSS 投放中";
    } else if (state === Config.states.PAUSED) {
      statusText.textContent = "战斗暂停";
    } else if (state === Config.states.LEVEL_CLEAR) {
      statusText.textContent = "关卡完成";
    } else if (state === Config.states.REWARD) {
      statusText.textContent = "选择强化";
    } else if (state === Config.states.VICTORY) {
      statusText.textContent = "战斗胜利";
    } else if (state === Config.states.DEFEAT) {
      statusText.textContent = "战斗失败";
    } else {
      statusText.textContent = "战场运行中";
    }
    partsValue.textContent = String(game.parts);
    shopPartsValue.textContent = String(game.parts);
    victoryScore.textContent = String(game.score).padStart(4, "0");
    defeatScore.textContent = String(game.score).padStart(4, "0");
    victoryMode.textContent = game.selectedMode === "challenge" ? "挑战模式 · 三关通关" : game.mode.label;
    defeatMode.textContent = game.selectedMode === "challenge" ? "挑战模式 · 第 " + game.resultLevel + " 关" :
      (game.selectedMode === "endless" ? "无尽模式 · 第 " + game.resultLevel + " 关" :
        (game.selectedMode === "brave" ? "勇者行动 · 第 " + game.resultLevel + " 关" : game.mode.label));
    renderStats(victoryStats);
    renderStats(defeatStats);
    renderShop();
    updateRecordSummary();
    if (state === Config.states.REWARD) {
      rewardEyebrow.textContent = game.rewardStage === "permanent" ? "每两关一次 · 永久效果" : "每关一次 · 基础数值或临时增益";
      rewardTitle.textContent = game.rewardStage === "permanent" ? "选择一项永久效果" : "选择一项强化";
        rewardSummary.textContent = "第 " + game.rewardLevel + " 关完成 · 获得零件 +" + (game.partsReward || 0) + " · 随机三选一";
      rewardOptions.innerHTML = game.rewardOptions.map(function (reward, index) {
        var level = game.endlessPermanent[reward.id] || 0;
        var detail = reward.id === "maxHealth" ? "+" + game.getEndlessRewardAmount(reward.id, game.rewardLevel) + " 生命上限" : reward.id === "attack" ? "+" + game.getEndlessRewardAmount(reward.id, game.rewardLevel) + " 攻击力" : reward.id === "splitBullet" ? "选择后发射 " + (level + 2) + " 颗子弹，每颗 70% 伤害" : reward.id === "explosive" ? "碎片伤害 " + Math.round((0.25 + level * 0.05) * 100) + "%" : reward.id === "speed" ? "移速提升 " + (40 + level * 5) + "%" : reward.id === "supportCall" ? "支援冷却 " + Math.max(9, 24 - level * 3).toFixed(1) + " 秒" : reward.description;
        return "<button class=\"reward-option\" type=\"button\" data-reward-index=\"" + index + "\"><strong>" + reward.label + "</strong><span>" + detail + "</span>" + (level ? "<em>Lv." + level + "</em>" : "") + "</button>";
      }).join("");
    }
    if (state === Config.states.LEVEL_CLEAR) {
      if (game.selectedMode === "brave") {
        levelClearEyebrow.textContent = "勇者行动 · BOSS 已击破";
        levelClearSummary.textContent = "第 " + game.resultLevel + " 关已突破 · 获得零件 +" + (game.partsReward || 0) + " · 下一关对应无尽第 " + ((game.braveLevel + 1) * 10) + " 关";
        nextLevelButton.textContent = "挑战第 " + (game.braveLevel + 1) + " 关";
        levelClearWarning.textContent = "下一关重新补满生命，失败后从第一关重新开始";
        levelProgress.innerHTML = "<span class=\"level-step is-complete\">" + game.braveLevel + "</span><i></i><span class=\"level-step is-next\">" + (game.braveLevel + 1) + "</span>";
      } else {
        levelClearEyebrow.textContent = "挑战进度";
        levelClearWarning.textContent = "下一关重新补满生命，失败将从第一关重来";
        levelClearSummary.textContent = "第 " + game.resultLevel + " 关已突破 · 获得零件 +" + (game.partsReward || 0) + " · 下一关敌军将更强";
        nextLevelButton.textContent = "进入第 " + (game.challengeLevel + 1) + " 关";
        levelProgress.innerHTML = game.mode.levels.map(function (level) {
          var className = level.level <= game.lastCompletedLevel ? "is-complete" : (level.level === game.challengeLevel + 1 ? "is-next" : "");
          return "<span class=\"level-step " + className + "\">" + level.level + "</span>";
        }).join("<i></i>");
      }
    }
  }

  function formatTime(seconds) {
    if (!seconds && seconds !== 0) { return "--"; }
    var minutes = Math.floor(seconds / 60);
    var remaining = Math.floor(seconds % 60);
    return minutes + ":" + String(remaining).padStart(2, "0");
  }

  function renderStats(container) {
    var accuracy = game.stats.shots > 0 ? Math.round(game.stats.hits / game.stats.shots * 100) : 0;
    var record = game.records[game.selectedMode] || {};
    var displayedPartsReward = container === defeatStats ? (game.partsTotalReward || game.partsReward || 0) : (game.partsReward || 0);
    var values = [
      ["战斗用时", formatTime(game.elapsed)],
      ["命中率", accuracy + "%"],
      ["击毁敌军", String(game.stats.kills)],
      game.selectedMode === "challenge" ? ["到达关卡", game.resultLevel + " / " + game.maxChallengeLevel] :
        (["endless", "brave"].indexOf(game.selectedMode) !== -1 ? ["到达关卡", "第 " + game.resultLevel + " 关"] : ["剩余命数", String(game.lives)]),
      ["最高得分", String(record.highScore || game.score).padStart(4, "0")],
      ["最佳时间", formatTime(record.bestTime)],
      [container === defeatStats ? "本局累计零件" : "本次零件", "+" + String(displayedPartsReward)]
    ];
    container.innerHTML = values.map(function (value) {
      return '<div class="result-stat"><span>' + value[0] + '</span><strong>' + value[1] + '</strong></div>';
    }).join("");
  }

  function updateRecordSummary() {
    var record = game.records[game.selectedMode] || {};
    recordSummary.textContent = "本机纪录：最高 " + String(record.highScore || 0).padStart(4, "0") + " · 最快 " + formatTime(record.bestTime);
  }

  function renderShop() {
    var categories = Config.shop.categories;
    var items = Config.shop[shopCategory] || [];
    shopTabs.innerHTML = categories.map(function (category) {
      return '<button class="shop-tab ' + (category.id === shopCategory ? "is-active" : "") + '" type="button" data-shop-category="' + category.id + '">' + category.label + '</button>';
    }).join("");
    shopItems.innerHTML = items.map(function (item) {
      var level = game.getShopLevel(shopCategory, item.id);
      var owned = shopCategory === "skins" ? Boolean(game.shopData.skins[item.id]) : level > 0;
      var equipped = shopCategory === "skins" && game.shopData.equippedSkin === item.id;
      var capped = shopCategory === "skins" ? owned : level >= item.maxLevel;
      var available = ["boosts", "items"].indexOf(shopCategory) === -1 || game.isShopItemAvailable(shopCategory, item.id);
      var action = shopCategory === "skins" ? (equipped ? "已装备" : (owned ? "装备" : (item.price + " 零件"))) : (!available ? "切换模式" : (capped ? "已满级" : (game.getShopCost(shopCategory, item.id) + " 零件")));
      var image = item.image ? '<img src="' + item.image + '" alt="" aria-hidden="true">' : '<span class="shop-item-glyph">◆</span>';
      var modeText = item.allowedModes ? "适用：" + item.allowedModes.map(function (modeId) { return Config.modes[modeId].label.replace("模式", ""); }).join(" / ") : "适用：所有模式";
      var disabled = !available || (shopCategory !== "skins" && capped) || (shopCategory === "skins" && equipped);
      return '<article class="shop-item ' + (equipped ? "is-equipped" : "") + '">' + image + '<div class="shop-item-copy"><h3>' + item.label + '</h3><p>' + item.description + '</p><span>' + (shopCategory === "skins" ? (owned ? "已解锁" : "未解锁") : (level ? "持有 " + level + " / " + item.maxLevel : "未购买")) + '</span><small>' + modeText + '</small></div><button class="shop-buy-button" type="button" data-shop-id="' + item.id + '" ' + (disabled ? "disabled" : "") + '>' + action + '</button></article>';
    }).join("");
  }

  function getVolumeColor(volume) {
    var ratio;
    var red;
    var green;
    if (volume <= 50) {
      ratio = volume / 50;
      red = 255;
      green = Math.round(255 * ratio);
    } else {
      ratio = (volume - 50) / 50;
      red = Math.round(255 * (1 - ratio));
      green = 255;
    }
    return "rgb(" + red + ", " + green + ", 0)";
  }

  function updateMusicVolumeInterface(volume) {
    var color = getVolumeColor(volume);
    musicVolumeSlider.value = String(volume);
    musicVolumeValue.value = String(volume);
    musicVolumeValue.textContent = String(volume);
    musicVolumeSlider.style.accentColor = color;
    musicButton.textContent = volume === 0 ? "×" : "♫";
    musicButton.style.color = color;
    musicButton.style.borderColor = color;
    musicButton.title = "音乐音量 " + volume + "%";
    musicButton.setAttribute("aria-label", "调节音乐音量，当前 " + volume + "%");
  }

  function setMusicVolumePanel(open) {
    musicVolumePanel.hidden = !open;
    musicButton.setAttribute("aria-expanded", String(open));
    if (open) { musicVolumeSlider.focus(); }
  }

  function setHelpPanel(open) {
    if (open) {
      TankGame.Audio.initialize();
      setHelpPage(0, false);
    }
    helpPanel.hidden = !open;
    helpButton.setAttribute("aria-expanded", String(open));
    if (open) { helpCloseButton.focus(); } else { helpButton.focus(); }
  }

  function setHelpPage(nextIndex, playSound) {
    var previousIndex = helpPageIndex;
    helpPageIndex = Math.max(0, Math.min(helpPages.length - 1, nextIndex));
    if (playSound && helpPageIndex !== previousIndex) {
      if (TankGame.Audio.playPageTurn) { TankGame.Audio.playPageTurn(); } else { TankGame.Audio.play("pageTurn"); }
    }
    helpPages.forEach(function (page, index) {
      page.classList.toggle("is-active", index === helpPageIndex);
      page.hidden = index !== helpPageIndex;
    });
    helpPreviousButton.disabled = helpPageIndex === 0;
    helpNextButton.disabled = helpPageIndex === helpPages.length - 1;
    helpPageIndicator.textContent = "第 " + (helpPageIndex + 1) + " / " + helpPages.length + " 页";
    var content = helpPanel.querySelector(".help-content");
    if (content) { content.scrollTop = 0; }
  }

  function togglePause() {
    if (game.state === Config.states.PLAYING) {
      game.pause();
    } else if (game.state === Config.states.PAUSED) {
      game.resume();
    }
    syncInterface();
  }

  shopButton.addEventListener("click", function () {
    game.openShop();
    shopStatus.textContent = "选择一项商品";
    syncInterface();
    shopCloseButton.focus();
  });

  shopCloseButton.addEventListener("click", function () { game.closeShop(); syncInterface(); shopButton.focus(); });
  shopTabs.addEventListener("click", function (event) {
    var tab = event.target.closest("[data-shop-category]");
    if (!tab) { return; }
    shopCategory = tab.dataset.shopCategory;
    shopStatus.textContent = "选择一项商品";
    renderShop();
  });
  shopItems.addEventListener("click", function (event) {
    var button = event.target.closest("[data-shop-id]");
    var item;
    var result;
    if (!button) { return; }
    item = game.getShopItem(shopCategory, button.dataset.shopId);
    if (shopCategory === "skins" && game.shopData.skins[button.dataset.shopId]) {
      game.equipSkin(button.dataset.shopId);
      shopStatus.textContent = "已装备 " + item.label;
    } else {
      result = game.purchaseShopItem(shopCategory, button.dataset.shopId);
      shopStatus.textContent = result.ok ? "已获得 " + item.label : (result.reason === "parts" ? "零件不足，还需要 " + (result.cost - game.parts) + " 零件" : (result.reason === "exclusive" ? "炸弹、迫击炮、红色子弹只能三选一" : (result.reason === "mode" ? "当前模式不可使用该商品" : "该商品已达到上限")));
    }
    renderShop();
    syncInterface();
  });

  startButton.addEventListener("click", function () {
    if (TankGame.Audio.startMusicFromGesture) { TankGame.Audio.startMusicFromGesture(); }
    else { TankGame.Audio.initialize(); }
    game.start();
    syncInterface();
    canvas.focus();
  });


  fieldSkillRollButton.addEventListener("click", function () {
    if (game.state !== Config.states.FIELD_ROLL || fieldSkillRollButton.disabled) { return; }
    var skills = game.getFieldSkillRollOptions();
    var selectedIndex = Math.floor(Math.random() * skills.length);
    var turns = 5 + Math.floor(Math.random() * 3);
    var segmentAngle = 360 / skills.length;
    var targetRotation = turns * 360 - selectedIndex * segmentAngle;
    fieldSkillRollButton.disabled = true;
    fieldSkillRollButton.textContent = "抽取中";
    fieldSkillRollStatus.textContent = "轮盘转动中";
    fieldSkillWheelDisc.classList.add("is-spinning");
    fieldSkillWheelDisc.style.transform = "rotate(" + targetRotation + "deg)";
    window.setTimeout(function () {
      if (game.state !== Config.states.FIELD_ROLL) {
        fieldSkillRollButton.disabled = false;
        fieldSkillRollButton.textContent = "开始";
        fieldSkillWheelDisc.classList.remove("is-spinning");
        fieldSkillWheelDisc.style.transform = "rotate(0deg)";
        fieldSkillRollStatus.textContent = "每十关重新抽取一次";
        return;
      }
      var selected = skills[selectedIndex];
      fieldSkillRollStatus.textContent = "获得 " + selected.label + " · Lv." + Math.max(1, Math.ceil(game.fieldSkillRollLevel / 10));
      fieldSkillWheelDisc.classList.remove("is-spinning");
      window.setTimeout(function () {
        game.completeFieldSkillRoll(selected.id);
        fieldSkillRollButton.disabled = false;
        fieldSkillRollButton.textContent = "开始";
        fieldSkillWheelDisc.style.transform = "rotate(0deg)";
        fieldSkillRollStatus.textContent = "每十关重新抽取一次";
        syncInterface();
        canvas.focus();
      }, 850);
    }, 3200);
  });
  rewardOptions.addEventListener("click", function (event) {
    var button = event.target.closest("[data-reward-index]");
    if (!button) { return; }
    game.chooseEndlessReward(Number(button.dataset.rewardIndex));
    syncInterface();
    canvas.focus();
  });

  nextLevelButton.addEventListener("click", function () {
    if (game.selectedMode === "brave") { game.startNextBraveLevel(); } else { game.startNextChallengeLevel(); }
    syncInterface();
    canvas.focus();
  });

  muteButton.addEventListener("click", function () {
    var muted = TankGame.Audio.toggleMuted();
    muteButton.textContent = muted ? "×" : "♪";
    muteButton.title = muted ? "开启音效" : "关闭音效";
    muteButton.setAttribute("aria-label", muteButton.title);
    muteButton.setAttribute("aria-pressed", String(!muted));
  });

  musicButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (TankGame.Audio.startMusicFromGesture) { TankGame.Audio.startMusicFromGesture(); }
    else { TankGame.Audio.initialize(); }
    setMusicVolumePanel(musicVolumePanel.hidden);
  });

  musicVolumePanel.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  musicVolumeSlider.addEventListener("input", function () {
    TankGame.Audio.initialize();
    updateMusicVolumeInterface(TankGame.Audio.setMusicVolume(musicVolumeSlider.value));
  });

  document.addEventListener("click", function () {
    setMusicVolumePanel(false);
  });

  fullscreenButton.addEventListener("click", function () {
    var target = document.getElementById("gameStage");
    if (!document.fullscreenElement) {
      if (target.requestFullscreen) {
        var fullscreenPromise = target.requestFullscreen();
        if (fullscreenPromise && fullscreenPromise.catch) { fullscreenPromise.catch(function () {}); }
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  });

  document.addEventListener("fullscreenchange", function () {
    var active = Boolean(document.fullscreenElement);
    fullscreenButton.textContent = active ? "×" : "⛶";
    fullscreenButton.title = active ? "退出全屏" : "全屏";
    fullscreenButton.setAttribute("aria-label", fullscreenButton.title);
  });

  modeOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      game.setMode(option.dataset.mode);
      modeOptions.forEach(function (candidate) {
        var selected = candidate === option;
        candidate.classList.toggle("is-selected", selected);
        candidate.setAttribute("aria-checked", String(selected));
      });
      syncInterface();
    });
  });

  pauseButton.addEventListener("click", togglePause);

  pauseGiftButton.addEventListener("click", function () {
    giftPanelOpen = true;
    giftStatus.textContent = "输入兑换码后兑换礼包";
    syncInterface();
    giftCodeInput.focus();
  });

  function closeGiftPanel() {
    giftPanelOpen = false;
    syncInterface();
    pauseGiftButton.focus();
  }

  giftCloseButton.addEventListener("click", closeGiftPanel);
  giftPanel.addEventListener("click", function (event) {
    if (event.target === giftPanel) { closeGiftPanel(); }
  });
  giftForm.addEventListener("submit", function (event) {
    var result;
    event.preventDefault();
    if (game.state !== Config.states.PAUSED) { return; }
    result = game.redeemGiftCode(giftCodeInput.value);
    if (result.ok) {
      giftStatus.textContent = "兑换成功，获得 " + result.amount + " 零件";
      giftCodeInput.value = "";
    } else {
      giftStatus.textContent = "兑换码无效";
      giftCodeInput.select();
    }
    syncInterface();
    giftCodeInput.focus();
  });

  resumeButton.addEventListener("click", function () {
    game.resume();
    syncInterface();
  });

  pauseRestartButton.addEventListener("click", function () {
    game.start();
    syncInterface();
    canvas.focus();
  });

  pauseMenuButton.addEventListener("click", function () {
    game.reset();
    syncInterface();
  });

  resetButton.addEventListener("click", function () {
    game.reset();
    syncInterface();
  });

  document.addEventListener("pointerdown", function () {
    TankGame.Audio.initialize();
  }, { capture: true });
  document.addEventListener("click", function () {
    if (TankGame.Audio.startMusicFromGesture) { TankGame.Audio.startMusicFromGesture(); }
  }, { capture: true });
  helpButton.addEventListener("click", function (event) {
    event.stopPropagation();
    setHelpPanel(helpPanel.hidden);
  });

  helpCloseButton.addEventListener("click", function () {
    setHelpPanel(false);
  });

  helpPanel.addEventListener("click", function (event) {
    if (event.target === helpPanel) { setHelpPanel(false); }
  });

  helpPreviousButton.addEventListener("click", function () {
    TankGame.Audio.initialize();
    setHelpPage(helpPageIndex - 1, true);
  });

  helpNextButton.addEventListener("click", function () {
    TankGame.Audio.initialize();
    setHelpPage(helpPageIndex + 1, true);
  });

  retryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      game.start();
      TankGame.Audio.initialize();
      syncInterface();
      canvas.focus();
    });
  });

  menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      game.reset();
      syncInterface();
    });
  });

  window.addEventListener("keydown", function (event) {
    if (event.code === "Escape" && !helpPanel.hidden) {
      setHelpPanel(false);
      event.preventDefault();
      return;
    }
    if (!helpPanel.hidden && (event.code === "ArrowLeft" || event.code === "ArrowRight")) {
      TankGame.Audio.initialize();
      setHelpPage(helpPageIndex + (event.code === "ArrowRight" ? 1 : -1), true);
      event.preventDefault();
      return;
    }
    if (event.code === "Escape" && !musicVolumePanel.hidden) {
      setMusicVolumePanel(false);
      musicButton.focus();
      event.preventDefault();
      return;
    }
    if (event.code === "Escape" && game.state === Config.states.SHOP) {
      game.closeShop();
      syncInterface();
      shopButton.focus();
      event.preventDefault();
      return;
    }
    if (event.code === "Escape" && giftPanelOpen) {
      closeGiftPanel();
      event.preventDefault();
      return;
    }
    if ((event.code === "Escape" || event.code === "KeyP") && game.state !== Config.states.MENU) {
      event.preventDefault();
      togglePause();
    }

    if (event.code === "KeyR" && game.state !== Config.states.MENU) {
      game.reset();
      syncInterface();
    }
  });

  window.addEventListener("blur", function () {
    if (game.state === Config.states.PLAYING) {
      game.pause();
      syncInterface();
    }
  });

  function frame(currentTime) {
    var frameTime = Math.min((currentTime - previousTime) / 1000, Config.maxFrameTime);
    previousTime = currentTime;
    accumulator += frameTime;

    while (accumulator >= Config.fixedStep) {
      var stateBeforeUpdate = game.state;
      game.update(Config.fixedStep);
      if (game.state !== stateBeforeUpdate) { syncInterface(); }
      accumulator -= Config.fixedStep;
    }

    game.render(accumulator / Config.fixedStep);
    var countdownDisplay = game.getCountdownDisplay ? game.getCountdownDisplay() :
      (game.countdown > 0.3 ? String(Math.ceil(Math.max(0, game.countdown))) : "GO");
    if (countdownDisplay !== lastCountdownDisplay) {
      countdownValue.textContent = countdownDisplay;
      countdownValue.classList.remove("is-changing");
      void countdownValue.offsetWidth;
      countdownValue.classList.add("is-changing");
      lastCountdownDisplay = countdownDisplay;
    }
    countdownLabel.textContent = game.selectedMode === "challenge" ? "第 " + game.challengeLevel + " 关 · 准备战斗" :
      (game.selectedMode === "endless" ? "无尽模式 · 第 " + game.endlessLevel + " 关" :
        (game.selectedMode === "brave" ? "勇者行动 · 第 " + game.braveLevel + " 关" : "准备战斗"));
    levelValue.textContent = game.selectedMode === "endless" ? "第 " + game.endlessLevel + " 关" :
      (game.selectedMode === "brave" ? "第 " + game.braveLevel + " 关" : game.challengeLevel + " / " + game.maxChallengeLevel);
    modeValue.textContent = game.selectedMode === "challenge" ? "挑战" :
      (game.selectedMode === "endless" ? "无尽" : (game.selectedMode === "brave" ? "勇者" : "普通"));
    var displayedLives = game.selectedMode === "brave" ? game.braveRevives : game.lives;
    if (game.selectedMode === "endless") { displayedLives += game.endlessFieldRevives || 0; }
    livesValue.textContent = String(displayedLives);
    fieldSkillValue.textContent = game.getFieldSkillLabel ? game.getFieldSkillLabel() : "--";
    crystalValue.textContent = String(game.fieldCrystalCount || 0);
    healthValue.textContent = String(Math.max(0, game.player.health));
    healthHud.classList.toggle("is-warning", game.player.health > 30 && game.player.health <= 60);
    healthHud.classList.toggle("is-danger", game.player.health <= 30);
    enemyValue.textContent = String(game.enemies.filter(function (enemy) { return enemy.alive; }).length);
    scoreValue.textContent = String(game.score).padStart(4, "0");
    comboValue.textContent = game.comboCount > 1 ? game.comboCount + "x" : "--";
    comboHud.classList.toggle("is-active", game.comboCount > 1);
    cooldownValue.textContent = game.player.fireCooldown <= 0 ? "READY" : (Math.ceil(game.player.fireCooldown * 10) / 10).toFixed(1);
    if (game.player.levelShield && game.player.shieldCharges > 0) {
      powerValue.textContent = "护盾 " + game.player.shieldCharges + "层";
    } else if (game.player.shieldTimer > 0 && game.player.shieldCharges > 0) {
      powerValue.textContent = "护盾 " + game.player.shieldCharges + "层 " + Math.ceil(game.player.shieldTimer);
    } else if (game.player.levelRapid) {
      powerValue.textContent = "速射";
    } else if (game.player.rapidTimer > 0) {
      powerValue.textContent = "速射 " + Math.ceil(game.player.rapidTimer);
    } else if (game.player.levelPerspective) {
      powerValue.textContent = "透视";
    } else if (game.player.perspectiveTimer > 0) {
      powerValue.textContent = "透视 " + Math.ceil(game.player.perspectiveTimer);
    } else if (game.player.levelRepair) {
      powerValue.textContent = "维修待命";
    } else if (game.selectedMode === "endless" && game.endlessPermanent.splitBullet) {
      powerValue.textContent = "分裂弹 " + (game.endlessPermanent.splitBullet + 1) + "发";
    } else {
      powerValue.textContent = "--";
    }
    requestAnimationFrame(frame);
  }

  syncInterface();
  requestAnimationFrame(frame);
}());
