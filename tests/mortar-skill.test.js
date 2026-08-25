"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () { this.onload = null; this.onerror = null; };
global.localStorage = { getItem: function () { return null; }, setItem: function () {} };

var root = path.resolve(__dirname, "..");
["config", "collision", "entities", "map", "ai", "effects"].forEach(function (name) {
  require(path.join(root, "js", name + ".js"));
});
TankGame.Audio = {
  play: function () {},
  playBurning: function () { return {}; },
  stopAllBurning: function () {}
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
  game.setMode(mode || "endless");
  game.start();
  if (game.state === TankGame.Config.states.CINEMATIC) { game.finishBossCinematic(); }
  return game;
}

var game = createGame("endless");
game.endlessLevel = 39;
assert.strictEqual(game.getBossSkillPool().indexOf("mortar"), -1);
game.endlessLevel = 40;
assert.notStrictEqual(game.getBossSkillPool().indexOf("mortar"), -1);
game.resetWorld(true);
assert.strictEqual(game.getBossSkillConfig("mortar").charge, 3);
assert.strictEqual(game.getBossSkillConfig("mortar").duration, 10);
assert.strictEqual(game.getBossSkillConfig("mortar").radius, game.getBossSkillConfig("bomb").radius);
assert.strictEqual(game.getBossSkillConfig("mortar").range, game.getBossSkillConfig("bomb").range);

var brave = createGame("brave");
brave.braveLevel = 3;
assert.strictEqual(brave.getMapLevel(), 30);
assert.strictEqual(brave.getBossSkillPool().indexOf("mortar"), -1);
brave.braveLevel = 4;
assert.strictEqual(brave.getMapLevel(), 40);
assert.notStrictEqual(brave.getBossSkillPool().indexOf("mortar"), -1);

var boss = game.enemies.find(function (enemy) { return enemy.isBoss; });
assert.ok(boss);
boss.boss_skills = ["mortar"];
boss.skill_states = { mortar: { state: "ready", timer: 0, phase: "ready" } };
boss.active_skill = null;
boss.skillDecisionTimer = 0;
assert.strictEqual(game.startBossSkill(boss, "mortar"), true);
assert.strictEqual(boss.skill_states.mortar.timer, 3);
game.updateActiveBossSkill(boss, 3);
assert.strictEqual(boss.skill_states.mortar.phase, "effect");
assert.strictEqual(boss.skill_states.mortar.timer, 10);
game.player.x = boss.x + 300;
game.player.y = boss.y + 160;
boss.turretAngle = 0;
game.bullets = [];
game.fire(boss);
var mortarBullet = game.bullets[0];
assert.strictEqual(mortarBullet.bossBomb, true);
assert.strictEqual(mortarBullet.mortar, true);
assert.strictEqual(mortarBullet.damage, Math.max(1, Math.round(boss.bulletDamage * 1.25)));
assert.ok(Math.abs(mortarBullet.angle - Math.atan2(game.player.y - boss.y, game.player.x - boss.x)) < 0.000001);
assert.strictEqual(mortarBullet.lifetime, game.getBossSkillConfig("mortar").range / mortarBullet.speed);

function makeEliteAtLevel(level, firstRandom, secondRandom) {
  var oldRandom = Math.random;
  Math.random = function () {
    return Math.random.sequence.shift();
  };
  Math.random.sequence = [firstRandom, secondRandom];
  try {
    game.endlessLevel = level;
    var elite = TankGame.Entities.createTank(500, 450, "enemy");
    elite.health = 100;
    elite.maxHealth = 100;
    elite.bulletDamage = 40;
    game.makeEliteEnemy(elite);
    return elite;
  } finally {
    Math.random = oldRandom;
  }
}

var eliteAt30 = makeEliteAtLevel(30, 0.1, 0.1);
assert.strictEqual(eliteAt30.eliteSkill, null);
var eliteBomb = makeEliteAtLevel(31, 0.1, 0.1);
assert.strictEqual(eliteBomb.eliteSkill, "bomb");
assert.deepStrictEqual(eliteBomb.boss_skills, ["bomb"]);
var eliteMortar = makeEliteAtLevel(31, 0.1, 0.9);
assert.strictEqual(eliteMortar.eliteSkill, "mortar");
assert.deepStrictEqual(eliteMortar.boss_skills, ["mortar"]);

eliteMortar.skillDecisionTimer = 0;
eliteMortar.active_skill = null;
eliteMortar.skill_states.mortar.state = "ready";
eliteMortar.skill_states.mortar.phase = "ready";
game.player.alive = true;
game.player.x = eliteMortar.x + 200;
game.player.y = eliteMortar.y + 80;
game.updateEliteSkill(eliteMortar, 0);
assert.strictEqual(eliteMortar.active_skill, "mortar");
assert.strictEqual(eliteMortar.skill_states.mortar.timer, 3);
game.updateActiveBossSkill(eliteMortar, 3);
assert.strictEqual(eliteMortar.skill_states.mortar.phase, "effect");
game.bullets = [];
eliteMortar.turretAngle = 0;
game.fire(eliteMortar);
var eliteMortarBullet = game.bullets[0];
assert.strictEqual(eliteMortarBullet.mortar, true);
assert.strictEqual(eliteMortarBullet.sourceEnemy, eliteMortar);
assert.strictEqual(eliteMortarBullet.damage, Math.max(1, Math.round(eliteMortar.bulletDamage * 1.25)));

var challenge = createGame("challenge");
challenge.endlessLevel = 31;
var challengeElite = TankGame.Entities.createTank(500, 450, "enemy");
challengeElite.health = 100;
challengeElite.maxHealth = 100;
challengeElite.bulletDamage = 40;
var originalRandom = Math.random;
Math.random = function () { return 0.1; };
try {
  challenge.makeEliteEnemy(challengeElite);
} finally {
  Math.random = originalRandom;
}
assert.strictEqual(challengeElite.eliteSkill, null, "Elite mortar/bomb skills are endless-only");

console.log("Mortar and elite skill tests: PASS");
