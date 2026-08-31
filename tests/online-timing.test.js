"use strict";

var assert = require("assert");
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var root = path.resolve(__dirname, "..");

function createMultiplayerClock(initialNow) {
  var now = initialNow;
  var context = {
    window: { TankGame: {}, BroadcastChannel: undefined },
    Math: Math,
    Date: { now: function () { return now; } }
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "js", "multiplayer.js"), "utf8"), context);
  return {
    multiplayer: context.window.TankGame.Multiplayer,
    setNow: function (value) { now = value; }
  };
}

var clock = createMultiplayerClock(1000000);
var multiplayer = clock.multiplayer;
var room = multiplayer.host("Host");
room.names.push("Guest");
assert.strictEqual(multiplayer.start(), true);
assert.strictEqual(room.roundStartedAt, 1000000);
assert.strictEqual(room.combatStartedAt, 1003000);

clock.setNow(1028000);
multiplayer.publish({ name: "Host", alive: true, ghost: false, survivalTime: 25, onlineKills: 2 });
room.remote.guest = { name: "Guest", alive: false, ghost: true, deathAt: 1021000, survivalTime: 999, kills: 1 };
multiplayer.checkEnd();
assert.strictEqual(room.ended, true, "one active player must end the round");
assert.strictEqual(room.result.winner, "Host");
assert.strictEqual(room.result.elapsed, 25, "result time comes from the host absolute timeline");
assert.strictEqual(room.result.standings[0].survivalTime, 25);
assert.strictEqual(room.result.standings[1].survivalTime, 18, "dead-player time is derived from its absolute death timestamp");
var finalResult = room.result;

var guestClock = createMultiplayerClock(5000000);
var guestRoom = guestClock.multiplayer.join("123456", "Guest");
guestRoom.clockOffsetMs = -4000000;
assert.strictEqual(guestClock.multiplayer.now(), 1000000, "client clock skew is normalized to the host timeline");

clock.setNow(2000000);
assert.strictEqual(multiplayer.restart(), true);
assert.strictEqual(room.round, 2);
assert.strictEqual(room.roundStartedAt, 2000000);
assert.strictEqual(room.combatStartedAt, 2003000);
assert.strictEqual(room.ended, false);

clock.setNow(2023000);
multiplayer.publish({ name: "Host", alive: true, ghost: true, deathAt: 2013000, survivalTime: 999, onlineKills: 0 });
room.remote.guest = { name: "Guest", alive: true, ghost: false, survivalTime: 20, kills: 3 };
multiplayer.checkEnd();
assert.strictEqual(room.result.winner, "Guest", "guest victory settles when the host is the eliminated player");
assert.strictEqual(room.result.elapsed, 20);

global.window = global;
global.Image = function () {};
global.localStorage = { getItem: function () { return null; }, setItem: function () {} };
["config", "collision", "entities", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});
TankGame.Audio = { play: function () {}, playBurning: function () { return {}; }, stopAllBurning: function () {} };
TankGame.Multiplayer = { now: function () { return 503000; } };
require(path.join(root, "js", "game.js"));

var game = Object.create(TankGame.Game.prototype);
game.selectedMode = "online";
game.onlineCombatStart = 500000;
game.player = {
  name: "Guest",
  alive: true,
  ghost: false,
  survivalTime: 0,
  shieldCharges: 3,
  shieldTimer: 25,
  shieldExpiresAt: 510000,
  rapidTimer: 10,
  rapidExpiresAt: 508000,
  perspectiveTimer: 15,
  perspectiveExpiresAt: 512000,
  fireCooldown: 1,
  fireReadyAt: 504000
};
game.supplies = [{ life: 28, expiresAt: 509000 }];
game.onlineLastAbsolute = 0;
game.syncOnlineClock();
assert.strictEqual(game.elapsed, 3);
assert.strictEqual(game.player.survivalTime, 3);
assert.strictEqual(game.player.shieldTimer, 7);
assert.strictEqual(game.player.rapidTimer, 5);
assert.strictEqual(game.player.perspectiveTimer, 9);
assert.strictEqual(game.player.fireCooldown, 1);
assert.strictEqual(game.supplies[0].life, 6);

TankGame.Multiplayer.now = function () { return 523000; };
game.syncOnlineClock();
assert.strictEqual(game.elapsed, 23, "background time advances on the absolute clock");
assert.strictEqual(game.player.shieldCharges, 0);
assert.strictEqual(game.player.rapidTimer, 0);
assert.strictEqual(game.player.perspectiveTimer, 0);
assert.strictEqual(game.player.fireCooldown, 0);
assert.strictEqual(game.supplies.length, 0);

var winner = Object.create(TankGame.Game.prototype);
winner.selectedMode = "online";
winner.onlineMatchEnded = false;
winner.player = { name: "Host", alive: true, ghost: false, survivalTime: 0 };
winner.settleParts = function (isVictory) { this.settledAsVictory = isVictory; };
winner.finishOnlineMatch(finalResult);
assert.strictEqual(winner.state, TankGame.Config.states.VICTORY);
assert.strictEqual(winner.settledAsVictory, true);
assert.strictEqual(winner.elapsed, 25);

var loser = Object.create(TankGame.Game.prototype);
loser.selectedMode = "online";
loser.onlineMatchEnded = false;
loser.player = { name: "Guest", alive: true, ghost: false, survivalTime: 0 };
loser.settleParts = function (isVictory) { this.settledAsVictory = isVictory; };
loser.finishOnlineMatch(finalResult);
assert.strictEqual(loser.state, TankGame.Config.states.DEFEAT);
assert.strictEqual(loser.settledAsVictory, false);
assert.strictEqual(loser.player.survivalTime, 18);

console.log("online timing and settlement tests passed");
