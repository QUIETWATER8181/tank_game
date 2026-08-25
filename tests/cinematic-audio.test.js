"use strict";

var assert = require("assert");
var fs = require("fs");
var path = require("path");

global.window = global;

function FakeAudio(source) {
  this.src = source;
  this.loop = false;
  this.preload = "";
  this.volume = 1;
  this.currentTime = 0;
  this.paused = true;
}

FakeAudio.prototype.addEventListener = function () {};
FakeAudio.prototype.play = function () {
  this.paused = false;
  return Promise.resolve();
};
FakeAudio.prototype.pause = function () { this.paused = true; };
FakeAudio.prototype.cloneNode = function () {
  var clone = new FakeAudio(this.src);
  clone.volume = this.volume;
  return clone;
};

global.Audio = FakeAudio;

var root = path.resolve(__dirname, "..");
require(path.join(root, "js", "config.js"));
require(path.join(root, "js", "audio.js"));

TankGame.Audio.initializeMusic();
assert.strictEqual(TankGame.Audio.musicPath, TankGame.Config.backgroundMusic);
assert.strictEqual(TankGame.Audio.music.loop, true);

TankGame.Audio.setMusicTrack(TankGame.Config.bossBackgroundMusic, false);
assert.strictEqual(TankGame.Audio.musicPath, TankGame.Config.bossBackgroundMusic);
assert.strictEqual(TankGame.Audio.music.paused, false);

TankGame.Audio.startCinematicAudio();
assert.strictEqual(TankGame.Audio.cinematicSounds.length, 2);
assert.ok(TankGame.Audio.cinematicSounds.every(function (sound) { return sound.loop && !sound.paused; }));

TankGame.Audio.setMuted(true);
assert.ok(TankGame.Audio.cinematicSounds.every(function (sound) { return sound.volume === 0; }));
TankGame.Audio.setMuted(false);
assert.ok(TankGame.Audio.cinematicSounds.every(function (sound) { return sound.volume > 0; }));

TankGame.Audio.startCinematicAudio();
assert.strictEqual(TankGame.Audio.cinematicSounds.length, 2, "Restart must replace, not stack, cinematic loops");
TankGame.Audio.stopCinematicAudio();
assert.strictEqual(TankGame.Audio.cinematicSounds.length, 0);

TankGame.Audio.setMusicTrack(TankGame.Config.backgroundMusic, false);
assert.strictEqual(TankGame.Audio.musicPath, TankGame.Config.backgroundMusic);

assert.strictEqual(TankGame.Audio.playPageTurn(), true);
assert.strictEqual(TankGame.Audio.soundEffects.pageTurn.src, "assets/audio/page-turn.wav");
assert.ok(fs.existsSync(path.join(root, TankGame.Config.soundEffects.pageTurn)), "Page-turn WAV must exist for file:// playback");
assert.ok(fs.statSync(path.join(root, TankGame.Config.soundEffects.pageTurn)).size > 44, "Page-turn WAV must contain audio samples");

var originalContext = TankGame.Audio.context;
var originalMaster = TankGame.Audio.master;
var originalTone = TankGame.Audio.tone;
var originalPageTurn = TankGame.Audio.soundEffects.pageTurn;
var synchronousToneCalls = 0;
TankGame.Audio.context = { state: "running" };
TankGame.Audio.master = {};
TankGame.Audio.tone = function () { synchronousToneCalls += 1; };
delete TankGame.Audio.soundEffects.pageTurn;
TankGame.Audio.failedSoundEffects.pageTurn = true;
assert.strictEqual(TankGame.Audio.playPageTurn(), true);
assert.strictEqual(synchronousToneCalls, 1, "Page-turn audio must start synchronously while the gesture is active");
TankGame.Audio.context = originalContext;
TankGame.Audio.master = originalMaster;
TankGame.Audio.tone = originalTone;
TankGame.Audio.soundEffects.pageTurn = originalPageTurn;
delete TankGame.Audio.failedSoundEffects.pageTurn;
console.log("Cinematic audio tests: PASS");
