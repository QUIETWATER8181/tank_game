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
  stopAllBurning: function () {},
  stopCinematicAudio: function () {},
  setMusicTrack: function () {}
};
require(path.join(root, "js", "game.js"));
require(path.join(root, "js", "field-skills.js"));

function createGame() {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, inside: false, pressed: false },
    isDown: function () { return false; },
    reset: function () {},
    setCamera: function () {}
  };
  var game = new TankGame.Game(canvas, input);
  game.setMode("endless");
  return game;
}

assert.strictEqual(TankGame.Config.fieldSkills.length, 6);
assert.deepStrictEqual(TankGame.Config.fieldSkills.map(function (skill) { return skill.label; }), [
  "机械飞升", "不死图腾", "密命王牌", "巫毒子弹", "天堂制造", "凛冽寒冬"
]);

var roll = createGame();
roll.start();
assert.strictEqual(roll.state, TankGame.Config.states.FIELD_ROLL);
assert.strictEqual(roll.fieldSkillRollMode, "initial");
assert.strictEqual(roll.completeFieldSkillRoll("mechanicalAscension"), true);
assert.strictEqual(roll.endlessFieldSkill, "mechanicalAscension");
assert.strictEqual(roll.endlessFieldSkillLevel, 1);
assert.ok(roll.fieldSite);
assert.strictEqual(roll.fieldSite.width, TankGame.Config.tileSize * 3);
assert.strictEqual(roll.fieldSite.height, TankGame.Config.tileSize * 3);
assert.strictEqual(roll.worldMap.obstacles.filter(function (obstacle) { return roll.isFieldSiteObstacle(obstacle); }).length, 8);
var radarCalls = { fillText: 0, arc: 0 };
var radarContext = {
  save: function () {}, restore: function () {}, translate: function () {}, beginPath: function () {}, fill: function () {}, stroke: function () {},
  arc: function () { radarCalls.arc += 1; }, fillText: function () { radarCalls.fillText += 1; }, fillRect: function () {}, strokeRect: function () {}
};
roll.drawFieldSkillRadarMarker(radarContext, 10, 20, 0.02, 0.02);
assert.strictEqual(radarCalls.fillText, 1, "endless radar should draw the selected field skill icon");
assert.ok(radarCalls.arc >= 1);
var normalRadar = createGame();
normalRadar.selectedMode = "normal";
normalRadar.drawFieldSkillRadarMarker(radarContext, 10, 20, 0.02, 0.02);
assert.strictEqual(radarCalls.fillText, 1, "non-endless radar should not draw field skill icons");


var originalRandom = Math.random;
Math.random = function () { return 0.5; };
var brick = roll.worldMap.obstacles.find(function (obstacle) { return obstacle.kind === "B"; });
roll.onFieldWallBroken(brick);
Math.random = originalRandom;
assert.strictEqual(roll.fieldCrystals.length, 1);
roll.player.x = roll.fieldCrystals[0].x;
roll.player.y = roll.fieldCrystals[0].y;
roll.state = TankGame.Config.states.PLAYING;
roll.updateFieldSkills(0.01);
assert.strictEqual(roll.fieldCrystalCount, 1);
assert.strictEqual(roll.fieldCrystals.length, 0);
var magnet = createGame();
magnet.endlessFieldSkill = "mechanicalAscension";
magnet.resetWorld(true);
magnet.worldMap.obstacles = [];
magnet.worldMap.obstacleGrid = null;
magnet.fieldCrystals.push({ x: magnet.player.x - 240, y: magnet.player.y, life: 30, pulse: 0, magnetSpeed: 0 });
var magnetStartX = magnet.fieldCrystals[0].x;
magnet.updateFieldSkills(0.1);
assert.ok(magnet.fieldCrystals[0].x > magnetStartX, "Energy can moves toward the player");
magnet.updateFieldSkills(1);
assert.strictEqual(magnet.fieldCrystalCount, 1, "Magnetized energy can is collected by the player");
assert.strictEqual(magnet.fieldCrystals.length, 0);

Math.random = function () { return 0; };
roll.fieldCrystalCount = 10;
assert.strictEqual(roll.activateFieldSkill(), true);
Math.random = originalRandom;
assert.strictEqual(roll.fieldAttackMultiplier, 1.1);
assert.strictEqual(roll.fieldCrystalCount, 0);
roll.fieldCrystalCount = 3;
roll.resetWorld(true);
assert.strictEqual(roll.fieldCrystalCount, 0, "Crystals reset every level");
roll.endlessFieldSkill = "undyingTotem";
roll.endlessFieldSkillLevel = 1;
roll.resetWorld(true);
roll.player.x = roll.fieldSite.centerX;
roll.player.y = roll.fieldSite.centerY;
roll.updateFieldSkills(0.01);
assert.strictEqual(roll.fieldSkillUsed, false, "Insufficient crystals do not consume the field skill");
roll.fieldCrystalCount = 40;
roll.updateFieldSkills(0.9);
assert.strictEqual(roll.endlessFieldRevives, 1, "Entering field retries after crystals are collected");

var repeatParadise = createGame();
repeatParadise.endlessFieldSkill = "paradiseMade";
repeatParadise.endlessFieldSkillLevel = 1;
repeatParadise.resetWorld(true);
repeatParadise.fieldCrystalCount = 60;
repeatParadise.player.x = repeatParadise.fieldSite.centerX;
repeatParadise.player.y = repeatParadise.fieldSite.centerY;
repeatParadise.updateFieldSkills(0.01);
assert.strictEqual(repeatParadise.fieldCrystalCount, 30);
assert.strictEqual(repeatParadise.fieldSkillUsed, true);
repeatParadise.player.x = repeatParadise.fieldSite.left - 50;
repeatParadise.updateFieldSkills(0.01);
assert.strictEqual(repeatParadise.fieldSkillUsed, false, "Leaving the field unlocks the next activation");
repeatParadise.fieldParadiseTimer = 0;
repeatParadise.player.x = repeatParadise.fieldSite.centerX;
repeatParadise.updateFieldSkills(1);
assert.strictEqual(repeatParadise.fieldCrystalCount, 0, "Paradise Made can activate again after re-entry");
assert.strictEqual(repeatParadise.fieldSkillUsed, true);

var combat = createGame();
combat.endlessFieldSkill = "mechanicalAscension";
combat.endlessFieldSkillLevel = 2;
combat.resetWorld(true);
combat.worldMap.obstacles = [];
combat.worldMap.obstacleGrid = null;
combat.fieldAttackMultiplier = 1.2;
combat.fieldArmorShots = 4;
combat.fieldPierceLevel = 2;
combat.player.turretAngle = 0;
combat.fire(combat.player);
assert.strictEqual(combat.bullets[0].damage, combat.player.bulletDamage * 1.2 * 2);
assert.strictEqual(combat.bullets[0].fieldArmor, true);
assert.strictEqual(combat.bullets[0].fieldPierceRemaining, 2);
assert.strictEqual(combat.fieldArmorShots, 3);

var pierce = createGame();
pierce.endlessFieldSkill = "mechanicalAscension";
pierce.endlessFieldSkillLevel = 1;
pierce.resetWorld(true);
var solidWall = pierce.worldMap.obstacles.find(function (obstacle) { return obstacle.kind === "#" && obstacle.column > 0 && obstacle.row > 0; });
if (!solidWall) { solidWall = pierce.worldMap.obstacles[0]; }
var piercingBullet = TankGame.Entities.createBullet(solidWall.x - 10, solidWall.y + solidWall.height / 2, 0, "player");
piercingBullet.fieldPierceRemaining = 1;
piercingBullet.previousX = solidWall.x - 10;
piercingBullet.x = solidWall.x + 10;
pierce.updateBullet(piercingBullet, 0);
assert.strictEqual(piercingBullet.alive, true);
assert.strictEqual(piercingBullet.fieldPierceRemaining, 0);

var tankPierce = createGame();
tankPierce.endlessFieldSkill = "mechanicalAscension";
tankPierce.resetWorld(true);
tankPierce.worldMap.obstacles = [];
tankPierce.worldMap.obstacleGrid = null;
var firstTank = tankPierce.enemies[0];
var secondTank = tankPierce.enemies[1];
firstTank.x = 220; firstTank.y = 300;
secondTank.x = 300; secondTank.y = 300;
var tankBullet = TankGame.Entities.createBullet(180, 300, 0, "player");
tankBullet.fieldPierceRemaining = 2;
tankPierce.updateBullet(tankBullet, 0.1);
assert.strictEqual(tankBullet.alive, true);
assert.strictEqual(tankBullet.fieldPierceRemaining, 1);
assert.ok(tankBullet.fieldPiercedObjects.indexOf(firstTank) !== -1);
assert.strictEqual(firstTank.health, firstTank.maxHealth - tankBullet.damage);
tankPierce.updateBullet(tankBullet, 0.1);
assert.strictEqual(tankBullet.alive, true);
assert.strictEqual(tankBullet.fieldPierceRemaining, 0);
assert.ok(tankBullet.fieldPiercedObjects.indexOf(secondTank) !== -1);

var wreckPierce = createGame();
wreckPierce.endlessFieldSkill = "mechanicalAscension";
wreckPierce.resetWorld(true);
wreckPierce.worldMap.obstacles = [];
wreckPierce.worldMap.obstacleGrid = null;
var wreck = wreckPierce.enemies[0];
wreck.x = 240; wreck.y = 300; wreck.alive = false; wreck.wreck = true;
var wreckBullet = TankGame.Entities.createBullet(180, 300, 0, "player");
wreckBullet.fieldPierceRemaining = 1;
wreckPierce.updateBullet(wreckBullet, 0.1);
assert.strictEqual(wreckBullet.alive, true);
assert.strictEqual(wreckBullet.fieldPierceRemaining, 0);
assert.ok(wreckBullet.fieldPiercedObjects.indexOf(wreck) !== -1);

var mixedPierce = createGame();
mixedPierce.endlessFieldSkill = "mechanicalAscension";
mixedPierce.resetWorld(true);
mixedPierce.worldMap.obstacles = [{ x: 220, y: 284, width: 32, height: 32, kind: "#", column: 0, row: 0 }];
mixedPierce.worldMap.obstacleGrid = null;
var mixedTank = TankGame.Entities.createTank(320, 300, "enemy");
mixedTank.maxHealth = mixedTank.health;
var mixedWreck = TankGame.Entities.createTank(420, 300, "enemy");
mixedWreck.alive = false;
mixedWreck.wreck = true;
var playerWreck = { x: 520, y: 300, radius: 23, wreck: true, life: 9 };
mixedPierce.enemies = [mixedTank, mixedWreck];
mixedPierce.wrecks = [playerWreck];
var mixedBullet = TankGame.Entities.createBullet(180, 300, 0, "player");
mixedBullet.fieldPierceRemaining = 4;
for (var mixedStep = 0; mixedStep < 12 && mixedBullet.alive; mixedStep += 1) {
  mixedPierce.updateBullet(mixedBullet, 0.1);
}
assert.strictEqual(mixedBullet.alive, true, "Tunnel shells pass through mixed solid targets");
assert.strictEqual(mixedBullet.fieldPierceRemaining, 0);
assert.ok(mixedBullet.fieldPiercedObjects.indexOf(mixedPierce.worldMap.obstacles[0]) !== -1);
assert.ok(mixedBullet.fieldPiercedObjects.indexOf(mixedTank) !== -1);
assert.ok(mixedBullet.fieldPiercedObjects.indexOf(mixedWreck) !== -1);
assert.ok(mixedBullet.fieldPiercedObjects.indexOf(playerWreck) !== -1);
assert.strictEqual(mixedTank.health, mixedTank.maxHealth - mixedBullet.damage);

var totem = createGame();
totem.endlessFieldSkill = "undyingTotem";
totem.endlessFieldSkillLevel = 2;
totem.resetWorld(true);
totem.fieldCrystalCount = 40;
assert.strictEqual(totem.activateFieldSkill(), true);
assert.strictEqual(totem.endlessFieldRevives, 1);
assert.strictEqual(totem.endlessFieldReviveDurations[0], 8);
totem.endlessFieldSkill = "trumpCard";
totem.player.alive = false;
totem.updatePlayerLifeCycle(0.01);
assert.strictEqual(totem.player.alive, true);
assert.strictEqual(totem.endlessFieldRevives, 0);
assert.strictEqual(totem.player.invulnerable, 3);
assert.strictEqual(totem.fieldTotemAttackTimer, 8, "Totem revive survives later field skill changes");

var trump = createGame();
trump.endlessFieldSkill = "trumpCard";
trump.endlessFieldSkillLevel = 3;
trump.resetWorld(true);
trump.fieldCrystalCount = 25;
var trumpTarget = trump.enemies[0];
var targetHealth = trumpTarget.health;
Math.random = function () { return 0; };
assert.strictEqual(trump.activateFieldSkill(), true);
Math.random = originalRandom;
assert.strictEqual(trump.fieldCrystalCount, 0);
assert.ok(trump.trumpCardAttack);
assert.strictEqual(trumpTarget.health, targetHealth);
trump.updateFieldSkills(0.2);
assert.strictEqual(trumpTarget.health, targetHealth - trumpTarget.maxHealth * 0.5);
assert.strictEqual(trump.getFieldSkillCost("trumpCard"), 25);
trump.endlessFieldSkillLevel = 20;
assert.strictEqual(trump.getFieldSkillCost("trumpCard"), 50, "Trump Card crystal cost caps at 50");

var trumpKill = createGame();
trumpKill.endlessFieldSkill = "trumpCard";
trumpKill.endlessFieldSkillLevel = 8;
trumpKill.resetWorld(true);
trumpKill.fieldCrystalCount = 50;
trumpKill.score = 1000;
var killTarget = trumpKill.enemies[0];
Math.random = function () { return 0; };
assert.strictEqual(trumpKill.activateFieldSkill(), true);
Math.random = originalRandom;
trumpKill.updateFieldSkills(0.2);
assert.strictEqual(killTarget.alive, false);
assert.strictEqual(trumpKill.score, 1210, "Trump Card kills multiply the post-kill total score by 1.1");

var voodoo = createGame();
voodoo.endlessFieldSkill = "voodooBullet";
voodoo.endlessFieldSkillLevel = 2;
voodoo.resetWorld(true);
voodoo.fieldCrystalCount = 25;
assert.strictEqual(voodoo.activateFieldSkill(), true);
voodoo.worldMap.obstacles = [];
voodoo.worldMap.obstacleGrid = null;
voodoo.player.turretAngle = 0;
voodoo.fire(voodoo.player);
voodoo.updateBullet(voodoo.bullets[0], 0.1);
assert.strictEqual(voodoo.fieldPoisonTrails.length, 1);
voodoo.updateBullet(voodoo.bullets[0], 0.05);
assert.strictEqual(voodoo.fieldPoisonTrails.length, 2, "Voodoo marks are emitted every 0.05 seconds");
var poisonedEnemy = voodoo.enemies[0];
poisonedEnemy.x = voodoo.fieldPoisonTrails[0].x;
poisonedEnemy.y = voodoo.fieldPoisonTrails[0].y;
var poisonHealth = poisonedEnemy.health;
voodoo.updateFieldSkills(3.01);
assert.ok(poisonedEnemy.poisonTimer > 0);
assert.strictEqual(poisonedEnemy.health, poisonHealth - poisonedEnemy.maxHealth * 0.03);

var paradise = createGame();
paradise.endlessFieldSkill = "paradiseMade";
paradise.endlessFieldSkillLevel = 2;
paradise.resetWorld(true);
paradise.fieldCrystalCount = 30;
assert.strictEqual(paradise.activateFieldSkill(), true);
var paradiseEnemy = paradise.enemies[0];
paradiseEnemy.x = paradise.player.x + 20;
paradiseEnemy.y = paradise.player.y;
var collisionHealth = paradiseEnemy.health;
paradise.updateFieldSkills(0.01);
assert.strictEqual(paradise.player.moveSpeedMultiplier, paradise.player.fieldBaseMoveSpeedMultiplier * 5);
assert.ok(paradise.player.invulnerable >= 2.99);
assert.strictEqual(paradiseEnemy.health, Math.max(0, collisionHealth - paradise.player.bulletDamage * 3));
assert.strictEqual(paradiseEnemy.alive, false);
assert.ok(paradiseEnemy.x >= paradise.player.x + 100);
assert.strictEqual(paradise.player.visualScale, 3);
assert.strictEqual(paradise.player.radius, 69);
assert.strictEqual(paradise.fieldParadiseTimer, 3, "Enemy impact resets Paradise Made to 3 seconds");
assert.strictEqual(paradise.player.invulnerable, 3, "Enemy impact resets invulnerability to 3 seconds");

var paradiseWalls = createGame();
paradiseWalls.endlessFieldSkill = "paradiseMade";
paradiseWalls.endlessFieldSkillLevel = 1;
paradiseWalls.resetWorld(true);
paradiseWalls.fieldCrystalCount = 30;
paradiseWalls.activateFieldSkill();
var wallInput = {
  pointer: { inside: false },
  isDown: function (code) { return code === "KeyW"; }
};
paradiseWalls.worldMap.cells[10][10] = "#";
TankGame.Map.rebuildObstacles(paradiseWalls.worldMap);
var internalWall = paradiseWalls.worldMap.obstacles.find(function (obstacle) {
  return obstacle.kind === "#" && obstacle.column === 10 && obstacle.row === 10;
});
assert.ok(internalWall, "Test map has an internal solid wall");
paradiseWalls.player.bodyAngle = 0;
paradiseWalls.player.x = internalWall.x - paradiseWalls.player.radius - 2;
paradiseWalls.player.y = internalWall.y + internalWall.height / 2;
TankGame.Entities.updatePlayer(paradiseWalls.player, wallInput, paradiseWalls.worldMap, 0.02, [], function (obstacle) {
  TankGame.Map.removeObstacle(paradiseWalls.worldMap, obstacle);
});
assert.strictEqual(paradiseWalls.worldMap.obstacles.indexOf(internalWall), -1, "Paradise Made crushes internal solid walls");

var boundaryWall = paradiseWalls.worldMap.obstacles.find(function (obstacle) {
  return obstacle.kind === "#" && obstacle.column === 0 && obstacle.row === 10;
});
var boundaryStartX = TankGame.Config.tileSize + paradiseWalls.player.radius + 2;
paradiseWalls.player.bodyAngle = Math.PI;
paradiseWalls.player.x = boundaryStartX;
paradiseWalls.player.y = boundaryWall.y + boundaryWall.height / 2;
TankGame.Entities.updatePlayer(paradiseWalls.player, wallInput, paradiseWalls.worldMap, 0.02, [], function (obstacle) {
  TankGame.Map.removeObstacle(paradiseWalls.worldMap, obstacle);
});
assert.ok(paradiseWalls.worldMap.obstacles.indexOf(boundaryWall) !== -1, "Paradise Made cannot crush boundary walls");
assert.strictEqual(paradiseWalls.player.x, boundaryStartX, "Boundary wall still blocks the enlarged player");

var winter = createGame();
winter.endlessLevel = 10;
winter.endlessFieldSkill = "bitterWinter";
winter.endlessFieldSkillLevel = 2;
winter.resetWorld(true);
winter.fieldCrystalCount = 18;
var winterEnemy = winter.enemies.find(function (enemy) { return !enemy.isTurret; });
assert.ok(winterEnemy, "Winter speed test requires an ordinary tank");
var normalEnemySpeed = winterEnemy.mode.enemySpeed;
assert.strictEqual(winter.activateFieldSkill(), true);
assert.strictEqual(winter.fieldWinterTimer, 28);
assert.strictEqual(winterEnemy.mode.enemySpeed, normalEnemySpeed * 0.5);
winterEnemy.turretAngle = 0;
winter.bullets = [];
winter.fire(winterEnemy);
assert.strictEqual(winter.bullets[0].speed, TankGame.Config.bulletSpeed * 0.3);
winter.updateFieldSkills(28.1);
assert.strictEqual(winterEnemy.mode.enemySpeed, normalEnemySpeed);
assert.strictEqual(winter.bullets[0].speed, TankGame.Config.bulletSpeed);

var reroll = createGame();
reroll.endlessLevel = 10;
reroll.endlessFieldSkill = "voodooBullet";
reroll.endlessFieldSkillLevel = 1;
reroll.state = TankGame.Config.states.REWARD;
reroll.startNextEndlessLevel();
assert.strictEqual(reroll.state, TankGame.Config.states.FIELD_ROLL);
assert.strictEqual(reroll.fieldSkillRollLevel, 11);
assert.strictEqual(reroll.completeFieldSkillRoll("bitterWinter"), true);
assert.strictEqual(reroll.endlessLevel, 11);
assert.strictEqual(reroll.endlessFieldSkill, "bitterWinter");
assert.strictEqual(reroll.endlessFieldSkillLevel, 2);
assert.strictEqual(reroll.fieldVoodooActive, false);
assert.strictEqual(reroll.fieldCrystalCount, 0);

console.log("Field skill tests: PASS");
