"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () { this.complete = false; this.naturalWidth = 0; };
global.localStorage = {
  getItem: function () { return null; },
  setItem: function () {}
};

var root = path.resolve(__dirname, "..");
["config", "collision", "entities", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});

TankGame.Audio = {
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {},
  setMusicTrack: function () {}
};
require(path.join(root, "js", "game.js"));

function createGame() {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, pressed: false, inside: false, x: 0, y: 0 },
    isDown: function () { return false; },
    reset: function () {},
    setCamera: function () {}
  };
  return new TankGame.Game(canvas, input);
}

var game = createGame();

assert.strictEqual(game.redeemGiftCode("quietwater").ok, true);
assert.strictEqual(game.redeemGiftCode(" QUIETWATER ").amount, 10000);
assert.strictEqual(game.parts, 20000);
assert.strictEqual(game.redeemGiftCode("wrong-code").reason, "invalid");

assert.strictEqual(game.getPartsReward("normal", 500, false), 50);
assert.strictEqual(game.getPartsReward("normal", 500, true), 80);
assert.strictEqual(game.getPartsReward("challenge", 600, false), 60);
assert.strictEqual(game.getPartsReward("challenge", 600, true), 120);
assert.strictEqual(game.getPartsReward("endless", 1000, false), 20);
assert.strictEqual(game.getPartsReward("brave", 150, false), 10);

game.setMode("normal");
game.parts = 0;
game.score = 500;
assert.strictEqual(game.settleParts(false), 50, "失败也应发放普通模式零件");
assert.strictEqual(game.parts, 50);
assert.strictEqual(game.settleParts(false), 0, "同一局重复结算不能重复发放");

game.parts = 10000;
game.shopData = game.loadShopData();
assert.strictEqual(game.getShopCost("upgrades", "health"), 100);
assert.strictEqual(game.purchaseShopItem("upgrades", "health").ok, true);
assert.strictEqual(game.getShopCost("upgrades", "health"), 125);
assert.strictEqual(game.getShopCost("upgrades", "attack"), 300);
assert.strictEqual(game.getShopCost("upgrades", "speed"), 1000);
assert.strictEqual(game.purchaseShopItem("upgrades", "speed").ok, true);
assert.strictEqual(game.getShopCost("upgrades", "speed"), 2000);
assert.strictEqual(game.getShopItem("skins", "futureTech").price, 100000, "未来科技皮肤售价应为 100000 零件");
assert.strictEqual(game.getShopItem("items", "airSupport").price, 100000, "空中支援售价应为 100000 零件");
assert.strictEqual(game.getShopItem("items", "airSupport").maxLevel, 30, "空中支援上限应为 30 次");

var airSupportGame = createGame();
airSupportGame.parts = 3000000;
airSupportGame.setMode("normal");
assert.strictEqual(airSupportGame.purchaseShopItemMax("items", "airSupport").purchased, 30, "空中支援应可一次购买至 30 次上限");
assert.strictEqual(airSupportGame.shopData.items.airSupport, 30);
airSupportGame.start();
assert.strictEqual(airSupportGame.getAirSupportCooldown(), 15, "30 次空中支援应将局内冷却降至 15 秒");
assert.strictEqual(airSupportGame.airSupportTimer, 15, "空中支援应在开局初始化冷却");
airSupportGame.airSupportTimer = 0;
airSupportGame.supportAircraft = [];
airSupportGame.updateSupportAircraft(0.016);
assert.strictEqual(airSupportGame.supportAircraft.length, 0, "空中支援自动增益不应生成飞机");
assert.ok(["repair", "shield", "rapid", "perspective"].indexOf(airSupportGame.grantRandomAirSupport()) !== -1, "空中支援应直接获得随机增益");

var blueShieldGame = createGame();
blueShieldGame.setMode("endless");
blueShieldGame.parts = 1000000;
assert.strictEqual(blueShieldGame.purchaseShopItem("boosts", "blueShield").ok, true, "蓝盾应可购买");
blueShieldGame.start();
blueShieldGame.player.health = blueShieldGame.player.maxHealth;
blueShieldGame.damagePlayerFromSpecial(blueShieldGame.player.maxHealth, blueShieldGame.player.x, blueShieldGame.player.y);
assert.strictEqual(blueShieldGame.player.health, blueShieldGame.player.maxHealth * 0.8, "蓝盾应将单次高额伤害限制为生命上限 20%");
blueShieldGame.player.health = blueShieldGame.player.maxHealth;
blueShieldGame.damagePlayerFromSpecial(10, blueShieldGame.player.x, blueShieldGame.player.y);
assert.strictEqual(blueShieldGame.player.health, blueShieldGame.player.maxHealth - 10, "蓝盾不应削弱低于 20% 上限的伤害");

var normalShieldGame = createGame();
normalShieldGame.setMode("normal");
normalShieldGame.runShop.blueShield = 1;
assert.strictEqual(normalShieldGame.getPlayerDamage(1000, { maxHealth: 100 }), 1000, "蓝盾不应在普通模式生效");

var endlessEffectGame = createGame();
endlessEffectGame.setMode("endless");
endlessEffectGame.endlessPermanent.jammer = 21;
endlessEffectGame.endlessPermanent.supportCall = 9;
assert.strictEqual(endlessEffectGame.getJammerCooldown(), 6, "信号干扰器最低冷却应为 6 秒");
assert.strictEqual(endlessEffectGame.getSupportCooldown(), 2, "呼叫支援最低冷却应为 2 秒");

var bulkGame = createGame();
bulkGame.setMode("endless");
bulkGame.parts = 700;
var bulkResult = bulkGame.purchaseShopItemMax("upgrades", "health");
assert.strictEqual(bulkResult.ok, true);
assert.strictEqual(bulkResult.purchased, 4, "一键购买应按递增价格尽可能购买");
assert.strictEqual(bulkResult.cost, 550);
assert.strictEqual(bulkGame.shopData.upgrades.health, 4);
assert.strictEqual(bulkGame.parts, 150);
bulkResult = bulkGame.purchaseShopItemMax("boosts", "healing");
assert.strictEqual(bulkResult.purchased, 0, "没有足够零件时不能购买");
assert.strictEqual(bulkResult.nextCost, 500, "零件不足时应返回下一次购买价格");

var cappedBulkGame = createGame();
cappedBulkGame.parts = 100000;
cappedBulkGame.shopData.upgrades.speed = 19;
bulkResult = cappedBulkGame.purchaseShopItemMax("upgrades", "speed");
assert.strictEqual(bulkResult.purchased, 1, "一键购买不能超过物品上限");
assert.strictEqual(cappedBulkGame.shopData.upgrades.speed, 20);
assert.strictEqual(cappedBulkGame.purchaseShopItemMax("upgrades", "speed").reason, "max");

var exclusiveBulkGame = createGame();
exclusiveBulkGame.setMode("endless");
exclusiveBulkGame.parts = 100000;
exclusiveBulkGame.shopData.items.bomb = 1;
bulkResult = exclusiveBulkGame.purchaseShopItemMax("items", "mortar");
assert.strictEqual(bulkResult.purchased, 0);
assert.strictEqual(bulkResult.reason, "exclusive");
assert.strictEqual(exclusiveBulkGame.purchaseShopItemMax("items", "missing").reason, "invalid");

var futureTechGame = createGame();
futureTechGame.shopData.skins.futureTech = true;
futureTechGame.shopData.equippedSkin = "futureTech";
futureTechGame.start();
futureTechGame.fire(futureTechGame.player);
assert.strictEqual(futureTechGame.player.skin, "futureTech");
assert.strictEqual(futureTechGame.bullets[0].futureTech, true, "未来科技皮肤发射的子弹应携带专属拖尾标记");

game.shopData.boosts.healing = 1;
game.shopData.items.bomb = 10;
assert.strictEqual(game.purchaseShopItem("boosts", "healing").reason, "max");
assert.strictEqual(game.purchaseShopItem("items", "bomb").reason, "max");
assert.strictEqual(game.isShopItemAvailable("items", "mudTruck", "endless"), true);
assert.strictEqual(game.isShopItemAvailable("items", "mudTruck", "brave"), false);

game.setMode("endless");
game.shopData.boosts.healing = 1;
game.shopData.items.bomb = 1;
game.start();
assert.strictEqual(game.runShop.healing, 1);
assert.strictEqual(game.runShop.bomb, 1);
assert.strictEqual(game.shopData.boosts.healing, 0);
assert.strictEqual(game.shopData.items.bomb, 0);

var endlessFailure = createGame();
endlessFailure.setMode("endless");
endlessFailure.start();
endlessFailure.parts = 0;
endlessFailure.score = 1000;
endlessFailure.player.alive = false;
endlessFailure.updatePlayerLifeCycle(0.016);
assert.strictEqual(endlessFailure.state, TankGame.Config.states.DEFEAT);
assert.strictEqual(endlessFailure.parts, 20, "无尽模式最终失败也应结算零件");

var braveFailure = createGame();
braveFailure.setMode("brave");
braveFailure.start();
braveFailure.parts = 0;
braveFailure.score = 150;
braveFailure.player.alive = false;
braveFailure.updatePlayerLifeCycle(0.016);
assert.strictEqual(braveFailure.state, TankGame.Config.states.DEFEAT);
assert.strictEqual(braveFailure.parts, 10, "勇者行动最终失败也应结算零件");

console.log("Parts and shop tests: PASS");
