var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () {};
global.localStorage = { getItem: function () { return null; }, setItem: function () {} };

var root = path.resolve(__dirname, "..");
["config", "collision", "entities", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});

var tracks = [];
TankGame.Audio = {
  setMusicTrack: function (track) { tracks.push(track); },
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {},
  stopCinematicAudio: function () {}
};
require(path.join(root, "js", "game.js"));

var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
var input = { pointer: { down: false, pressed: false, inside: false }, isDown: function () { return false; }, reset: function () {}, setCamera: function () {} };
var game = new TankGame.Game(canvas, input);

game.setMode("challenge");
assert.strictEqual(tracks[tracks.length - 1], TankGame.Config.challengeBackgroundMusic);

game.setState(TankGame.Config.states.MENU);
game.openShop();
assert.strictEqual(tracks[tracks.length - 1], TankGame.Config.shopBackgroundMusic);
game.closeShop();
assert.strictEqual(tracks[tracks.length - 1], TankGame.Config.challengeBackgroundMusic);

console.log("Music track tests: PASS");
