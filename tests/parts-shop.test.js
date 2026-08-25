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
