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

var audioEvents = [];
TankGame.Audio = {
  play: function (name) { audioEvents.push(["play", name]); },
  playBurning: function () { return {}; },
  stopAllBurning: function () {},
  setMusicTrack: function (track) { audioEvents.push(["music", track]); },
  startCinematicAudio: function () { audioEvents.push(["cinematic", "start"]); },
  stopCinematicAudio: function () { audioEvents.push(["cinematic", "stop"]); }
};
require(path.join(root, "js", "game.js"));

function createGame() {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, pressed: false, inside: false },
    isDown: function () { return false; },
    reset: function () {},
    setCamera: function () {}
  };
  var game = new TankGame.Game(canvas, input);
  game.setMode("endless");
  return game;
}

function prepareLevel(game, level) {
  audioEvents.length = 0;
  game.endlessLevel = level;
  game.resetWorld(true);
  game.updateLevelMusic();
  game.beginLevel();
}

var game = createGame();

[10, 20, 30].forEach(function (level) {
  prepareLevel(game, level);
  assert.strictEqual(game.state, TankGame.Config.states.CINEMATIC, "Boss level " + level + " must start cinematic");
  assert.strictEqual(game.countdown, 0);
  assert.ok(game.cinematic);
  assert.ok(game.findLevelBoss());
  assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "music"; }).slice(-1)[0], ["music", TankGame.Config.bossBackgroundMusic]);
  assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "cinematic"; }).slice(-1)[0], ["cinematic", "start"]);
  assert.ok(audioEvents.findIndex(function (event) {
    return event[0] === "music" && event[1] === TankGame.Config.bossBackgroundMusic;
  }) < audioEvents.findIndex(function (event) {
    return event[0] === "cinematic" && event[1] === "start";
  }), "Boss theme must begin before cinematic sound effects");
});

prepareLevel(game, 11);
assert.strictEqual(game.state, TankGame.Config.states.COUNTDOWN);
assert.strictEqual(game.countdown, 3);
assert.strictEqual(game.cinematic, null);
assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "music"; }).slice(-1)[0], ["music", TankGame.Config.bossBackgroundMusic]);

prepareLevel(game, 9);
assert.strictEqual(game.state, TankGame.Config.states.COUNTDOWN);
assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "music"; }).slice(-1)[0], ["music", TankGame.Config.backgroundMusic]);

prepareLevel(game, 10);
var boss = game.findLevelBoss();
var bossFireCooldown = boss.fireCooldown;
var initialView = game.cinematic.getCameraView();
assert.ok(initialView.zoom >= 1.69, "Cinematic should open close above the player");
assert.strictEqual(initialView.focusX, game.player.x);
assert.strictEqual(initialView.focusY, game.player.y);
assert.strictEqual(game.cinematic.getBossDrop(), null);

game.cinematic.time = 2.5;
var overviewView = game.cinematic.getCameraView();
var expectedOverviewZoom = Math.min(TankGame.Config.viewportWidth / TankGame.Config.worldWidth, TankGame.Config.viewportHeight / TankGame.Config.worldHeight) * 0.96;
assert.ok(Math.abs(overviewView.zoom - expectedOverviewZoom) < 0.001, "Opening crane shot should reveal the whole battlefield");
assert.strictEqual(overviewView.focusX, TankGame.Config.worldWidth / 2);
assert.strictEqual(overviewView.focusY, TankGame.Config.worldHeight / 2);
assert.strictEqual(game.cinematic.getLeaderPosition().x, TankGame.Config.worldWidth + 520);
game.cinematic.time = 8;
assert.ok(game.cinematic.getLeaderPosition().x < TankGame.Config.worldWidth && game.cinematic.getLeaderPosition().x > game.worldMap.bossArena.centerX);
game.cinematic.time = 13.1;
assert.strictEqual(game.cinematic.getLeaderPosition().x, -540);game.cinematic.time = 4;
assert.ok(game.cinematic.getCameraView().zoom >= 1.04, "Aircraft follow camera should be close enough");
game.cinematic.time = 7;
var cruiseScale = game.cinematic.getAltitudeScale();
game.cinematic.time = 6.98;
var beforeBoundary = game.cinematic.getLeaderPosition().x;
game.cinematic.time = 7;
var atBoundary = game.cinematic.getLeaderPosition().x;
game.cinematic.time = 7.02;
var afterBoundary = game.cinematic.getLeaderPosition().x;
assert.ok(beforeBoundary > afterBoundary, "Aircraft must keep moving across the drop-zone boundary");
var speedBeforeBoundary = beforeBoundary - atBoundary;
var speedAfterBoundary = atBoundary - afterBoundary;
assert.ok(speedAfterBoundary / speedBeforeBoundary > 0.9 && speedAfterBoundary / speedBeforeBoundary < 1.1,
  "Aircraft speed must stay continuous at the drop-zone boundary");
game.cinematic.time = 8.3;
var loweredScale = game.cinematic.getAltitudeScale();
assert.ok(loweredScale < cruiseScale, "Descending helicopter should look smaller");
assert.ok(game.cinematic.getRotorWashState().intensity > 0.99, "Rotor wash should peak during the drop");
game.cinematic.time = 0;

game.update(8.4);
assert.strictEqual(game.state, TankGame.Config.states.CINEMATIC);
assert.strictEqual(game.elapsed, 0);
assert.strictEqual(game.levelElapsed, 0);
assert.strictEqual(boss.fireCooldown, bossFireCooldown);
assert.ok(game.cinematic.getBossDrop());

game.update(8.5);
assert.strictEqual(game.state, TankGame.Config.states.PLAYING);
assert.strictEqual(game.countdown, 0);
assert.strictEqual(game.cinematic, null);
assert.strictEqual(boss.x, game.worldMap.bossArena.centerX);
assert.strictEqual(boss.y, game.worldMap.bossArena.centerY);
assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "cinematic"; }).slice(-1)[0], ["cinematic", "stop"]);
assert.deepStrictEqual(audioEvents.filter(function (event) { return event[0] === "play"; }).slice(-1)[0], ["play", "go"]);
assert.strictEqual(game.bossWarParticleFade, 0, "Boss war particles must start fully transparent");
game.updateBossBattleEffects(1.25);
assert.strictEqual(game.bossWarParticleFade, 0, "Boss war particles keep their existing entry delay");
game.updateBossBattleEffects(0.6);
assert.ok(game.bossWarParticleFade > 0 && game.bossWarParticleFade < 1, "Boss war particles must fade in");
game.updateBossBattleEffects(0.6);
assert.strictEqual(game.bossWarParticleFade, 1, "Boss war particle fade-in must complete");

console.log("Boss cinematic tests: PASS");
