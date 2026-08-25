"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () {
  this.complete = false;
  this.naturalWidth = 0;
};
global.localStorage = {
  getItem: function () { return null; },
  setItem: function () {}
};

var root = path.resolve(__dirname, "..");
["config", "collision", "entities", "cinematic", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});

TankGame.Audio = {
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {},
  setMusicTrack: function () {},
  startCinematicAudio: function () {},
  stopCinematicAudio: function () {}
};
require(path.join(root, "js", "game.js"));

function createGame(mode) {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, pressed: false, inside: false },
    isDown: function () { return false; },
    reset: function () {},
    setCamera: function () {}
  };
  var game = new TankGame.Game(canvas, input);
  game.setMode(mode || "brave");
  game.start();
  if (game.state === TankGame.Config.states.CINEMATIC) { game.finishBossCinematic(); }
  game.worldMap.obstacles = [];
  return game;
}

function hitPlayerWithBullet(game, damage) {
  var bullet = TankGame.Entities.createBullet(game.player.x - 40, game.player.y, 0, "enemy");
  bullet.damage = damage;
  game.updateBullet(bullet, 0.1);
  return bullet;
}

var cleanClear = createGame();
cleanClear.enemies = [];
cleanClear.completeLevel();
assert.strictEqual(cleanClear.braveRevives, 1, "A no-hit clear grants one revive");
cleanClear.completeLevel();
assert.strictEqual(cleanClear.braveRevives, 1, "A completed level cannot award twice");
cleanClear.startNextBraveLevel();
assert.strictEqual(cleanClear.braveRevives, 1, "Revives persist into the next brave level");
assert.strictEqual(cleanClear.braveLevelDamaged, false);

var shielded = createGame();
shielded.player.shieldCharges = 1;
shielded.player.shieldTimer = 25;
var shieldedHealth = shielded.player.health;
hitPlayerWithBullet(shielded, 25);
assert.strictEqual(shielded.player.health, shieldedHealth);
assert.strictEqual(shielded.braveLevelDamaged, false, "Absorbed hits do not break a no-hit clear");
hitPlayerWithBullet(shielded, 25);
assert.strictEqual(shielded.player.health, shieldedHealth - 25);
assert.strictEqual(shielded.braveLevelDamaged, true, "Actual bullet damage is recorded");
shielded.braveRevives = 3;
shielded.enemies = [];
shielded.completeLevel();
assert.strictEqual(shielded.braveRevives, 3, "A damaged clear preserves inventory without awarding");

var specialDamage = createGame();
assert.strictEqual(specialDamage.damagePlayerFromSpecial(10, specialDamage.player.x - 100, specialDamage.player.y), true);
assert.strictEqual(specialDamage.braveLevelDamaged, true, "Special damage is recorded");

var chargeDamage = createGame();
var charger = TankGame.Entities.createTank(chargeDamage.player.x - 50, chargeDamage.player.y, "enemy");
charger.bulletDamage = 12;
chargeDamage.damagePlayerFromCharge(charger, charger.x, charger.y);
assert.strictEqual(chargeDamage.braveLevelDamaged, true, "Collision or charge damage is recorded");

var revive = createGame();
revive.braveRevives = 2;
revive.player.health = 10;
revive.player.wallTime = 4;
revive.player.wallLocked = true;
var livesBeforeRevive = revive.lives;
hitPlayerWithBullet(revive, 25);
assert.strictEqual(revive.player.alive, false);
assert.strictEqual(revive.braveLevelDamaged, true);
assert.ok(revive.wrecks.some(function (wreck) { return wreck.playerDeathWreck; }));
revive.updatePlayerLifeCycle(0.016);
assert.strictEqual(revive.braveRevives, 1, "Exactly one revive is consumed");
assert.strictEqual(revive.lives, livesBeforeRevive, "A revive does not consume a normal life");
assert.strictEqual(revive.player.alive, true);
assert.strictEqual(revive.player.x, revive.worldMap.playerSpawn.x);
assert.strictEqual(revive.player.y, revive.worldMap.playerSpawn.y);
assert.strictEqual(revive.player.health, revive.player.maxHealth);
assert.strictEqual(revive.player.invulnerable, 3);
assert.strictEqual(revive.player.reviveShieldTimer, 3);
assert.strictEqual(revive.player.wallTime, 0);
assert.strictEqual(revive.player.wallLocked, false);
assert.strictEqual(revive.braveReviveParticles.length, 15);
assert.ok(revive.wrecks.every(function (wreck) { return !wreck.playerDeathWreck; }));
var revivedHealth = revive.player.health;
hitPlayerWithBullet(revive, 1000);
assert.strictEqual(revive.player.health, revivedHealth, "Revive invulnerability blocks damage");
assert.strictEqual(revive.braveRevives, 1);

var drawCalls = { arcs: 0, strokes: 0 };
var shieldContext = {
  save: function () {},
  restore: function () {},
  beginPath: function () {},
  arc: function () { drawCalls.arcs += 1; },
  fill: function () {},
  stroke: function () { drawCalls.strokes += 1; }
};
revive.drawBraveReviveShield(shieldContext);
assert.strictEqual(drawCalls.arcs, 16, "The revive effect draws one shield and 15 particles");
assert.strictEqual(drawCalls.strokes, 1);

revive.enemies = [];
revive.update(3.01);
assert.strictEqual(revive.player.invulnerable, 0);
assert.strictEqual(revive.player.reviveShieldTimer, 0);
assert.strictEqual(revive.braveReviveParticles.length, 0);

var noRevive = createGame();
noRevive.player.health = 5;
noRevive.damagePlayerFromSpecial(10, noRevive.player.x - 100, noRevive.player.y);
noRevive.updatePlayerLifeCycle(0.016);
assert.strictEqual(noRevive.braveRevives, 0);
assert.strictEqual(noRevive.state, TankGame.Config.states.DEFEAT);
assert.strictEqual(noRevive.lives, 0);

["normal", "challenge", "endless"].forEach(function (mode) {
  var clearIsolation = createGame(mode);
  clearIsolation.braveRevives = 2;
  clearIsolation.enemies = [];
  clearIsolation.completeLevel();
  assert.strictEqual(clearIsolation.braveRevives, 2, mode + " clear must not grant brave revives");

  var deathIsolation = createGame(mode);
  deathIsolation.braveRevives = 2;
  var modeLives = deathIsolation.lives;
  deathIsolation.player.alive = false;
  deathIsolation.updatePlayerLifeCycle(0.016);
  assert.strictEqual(deathIsolation.braveRevives, 2, mode + " death must not consume brave revives");
  assert.strictEqual(deathIsolation.lives, modeLives - 1);
  assert.strictEqual(deathIsolation.player.alive, false, mode + " must not use immediate brave respawn");
  assert.strictEqual(deathIsolation.player.reviveShieldTimer || 0, 0);
});

var resetInventory = createGame();
resetInventory.braveRevives = 4;
resetInventory.start();
assert.strictEqual(resetInventory.braveRevives, 0, "Starting a new brave run clears old inventory");

console.log("Brave revive tests: PASS");
