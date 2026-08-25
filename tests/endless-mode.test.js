"use strict";

var assert = require("assert");
var path = require("path");

global.window = global;
global.Image = function () { this.onload = null; this.onerror = null; };
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
  stopAllBurning: function () {}
};
require(path.join(root, "js", "game.js"));

function createGame() {
  var canvas = { getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, inside: false },
    isDown: function () { return false; },
    reset: function () {}
  };
  return new TankGame.Game(canvas, input);
}

function reward(id) {
  return TankGame.Config.endlessRewards.base.concat(TankGame.Config.endlessRewards.permanent)
    .find(function (item) { return item.id === id; });
}

var markGame = createGame();
markGame.setMode("endless");
markGame.start();
markGame.state = TankGame.Config.states.PLAYING;
markGame.worldMap.obstacles = [];
var markedNear = TankGame.Entities.createTank(180, 180, "enemy");
var markedFar = TankGame.Entities.createTank(900, 500, "enemy");
markedNear.visualScale = 1;
markedFar.visualScale = 1.1;
markGame.enemies = [markedNear, markedFar];
assert.strictEqual(markGame.markedTarget, null);
markGame.input.pointer.x = markedNear.x;
markGame.input.pointer.y = markedNear.y;
markGame.input.pointer.pressed = true;
markGame.updateTargetMark();
assert.strictEqual(markGame.markedTarget, null);
assert.strictEqual(markGame.input.pointer.pressed, false);
markGame.endlessPermanent.tracking = 1;
markGame.input.pointer.pressed = true;
markGame.updateTargetMark();
assert.strictEqual(markGame.markedTarget, markedNear);
assert.strictEqual(markGame.input.pointer.pressed, false);
markGame.markTargetAt(markedFar.x, markedFar.y);
assert.strictEqual(markGame.markedTarget, markedFar);
markGame.markTargetAt(markedFar.x, markedFar.y);
assert.strictEqual(markGame.markedTarget, null);
markGame.markTargetAt(markedNear.x, markedNear.y);
markGame.markTargetAt(20, 20);
assert.strictEqual(markGame.markedTarget, markedNear);
markGame.markedTarget = markedNear;
markedNear.alive = false;
markGame.updateTargetMark();
assert.strictEqual(markGame.markedTarget, null);

markGame.player.x = 100;
markGame.player.y = 100;
markGame.player.turretAngle = 0;
markGame.player.trackingTime = 2;
markedNear.alive = true;
markedNear.x = 180;
markedNear.y = 100;
markedFar.alive = true;
markedFar.x = 1000;
markedFar.y = 500;
markGame.markedTarget = markedFar;
markGame.bullets = [];
markGame.fire(markGame.player);
var markedTrackingBullet = markGame.bullets[0];
var markedTrackingAngle = markedTrackingBullet.angle;
markGame.updateBullet(markedTrackingBullet, 0.01);
assert.ok(markedTrackingBullet.angle > markedTrackingAngle);
markedFar.alive = false;
markGame.updateTargetMark();
assert.strictEqual(markGame.markedTarget, null);
var unmarkedTrackingBullet = TankGame.Entities.createBullet(100, 100, 0, "player");
unmarkedTrackingBullet.trackingRemaining = 2;
markGame.updateBullet(unmarkedTrackingBullet, 0.01);
assert.strictEqual(unmarkedTrackingBullet.angle, 0);

var splitReward = reward("splitBullet");
assert.ok(splitReward);
assert.strictEqual(splitReward.maxLevel, 4);
assert.strictEqual(reward("explosive").maxLevel, 6);
assert.strictEqual(reward("speed").maxLevel, 5);
assert.strictEqual(reward("rearShot").maxLevel, 5);
assert.strictEqual(reward("supportCall").maxLevel, 9);
markGame.endlessPermanent.splitBullet = 0;
assert.strictEqual(markGame.createRewardOptions([splitReward], 3).length, 1);
markGame.applyEndlessReward(splitReward);
assert.strictEqual(markGame.endlessPermanent.splitBullet, 1);
markGame.player.turretAngle = 0;
markGame.bullets = [];
markGame.fire(markGame.player);
assert.strictEqual(markGame.bullets.length, 2);
assert.ok(markGame.bullets.every(function (splitBullet) { return splitBullet.trackingRemaining === 0; }));
assert.ok(Math.abs(markGame.bullets[0].angle + 5 * Math.PI / 180) < 0.000001);
assert.ok(Math.abs(markGame.bullets[1].angle - 5 * Math.PI / 180) < 0.000001);
assert.strictEqual(markGame.bullets[0].damage, markGame.player.bulletDamage * 0.7);
assert.strictEqual(markGame.bullets[1].speed, markGame.bullets[0].speed);
markGame.endlessPermanent.splitBullet = 4;
assert.strictEqual(markGame.createRewardOptions([splitReward], 3).length, 0);
markedFar.alive = true;
markGame.markedTarget = markedFar;
markGame.bullets = [];
markGame.fire(markGame.player);
assert.strictEqual(markGame.bullets.length, 5);
assert.ok(Math.abs(markGame.bullets[0].angle + 15 * Math.PI / 180) < 0.000001);
assert.ok(Math.abs(markGame.bullets[4].angle - 15 * Math.PI / 180) < 0.000001);
var splitAnglesBeforeTracking = markGame.bullets.map(function (splitBullet) { return splitBullet.angle; });
markGame.bullets.forEach(function (splitBullet) { markGame.updateBullet(splitBullet, 0.01); });
assert.ok(markGame.bullets.every(function (splitBullet, index) {
  return splitBullet.angle > splitAnglesBeforeTracking[index] && splitBullet.trackingRemaining < 2;
}));

var normalMarkGame = createGame();
normalMarkGame.start();
normalMarkGame.state = TankGame.Config.states.PLAYING;
var normalTarget = TankGame.Entities.createTank(200, 200, "enemy");
normalMarkGame.enemies = [normalTarget];
assert.strictEqual(normalMarkGame.markTargetAt(200, 200), null);
assert.strictEqual(normalMarkGame.markedTarget, null);
normalMarkGame.endlessPermanent.splitBullet = 4;
normalMarkGame.player.turretAngle = 0;
normalMarkGame.bullets = [];
normalMarkGame.fire(normalMarkGame.player);
assert.strictEqual(normalMarkGame.bullets.length, 1);

var challengeSplitGame = createGame();
challengeSplitGame.setMode("challenge");
challengeSplitGame.start();
challengeSplitGame.state = TankGame.Config.states.PLAYING;
challengeSplitGame.endlessPermanent.splitBullet = 4;
challengeSplitGame.player.turretAngle = 0;
challengeSplitGame.bullets = [];
challengeSplitGame.fire(challengeSplitGame.player);
assert.strictEqual(challengeSplitGame.bullets.length, 1);

var game = createGame();
game.setMode("endless");
game.start();
assert.strictEqual(game.selectedMode, "endless");
assert.strictEqual(game.lives, 1);
assert.strictEqual(game.enemies.length, 3);
assert.strictEqual(game.player.maxHealth, 125);
assert.strictEqual(game.player.health, 125);
assert.strictEqual(game.player.bulletDamage, 30);
assert.ok(game.enemies.every(function (enemy) {
  return enemy.health === Math.round(45 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.bulletDamage === 12;
}));
assert.strictEqual(game.enemies[0].mode.reactionTime, 0.261);
assert.strictEqual(game.getEndlessRewardAmount("maxHealth", 1), 18);
assert.strictEqual(game.getEndlessRewardAmount("attack", 1), 8);

game.completeLevel();
assert.strictEqual(game.state, TankGame.Config.states.REWARD);
assert.strictEqual(game.rewardLevel, 1);
assert.ok(game.rewardOptions.some(function (option) { return option.id === "maxHealth" || option.id === "repair"; }));
game.rewardOptions = [reward("maxHealth")];
game.chooseEndlessReward(0);
assert.strictEqual(game.state, TankGame.Config.states.COUNTDOWN);
assert.strictEqual(game.endlessLevel, 2);
assert.strictEqual(game.player.maxHealth, 143);
assert.strictEqual(game.player.health, 143);
assert.strictEqual(game.enemies.length, 3);
assert.ok(game.enemies.every(function (enemy) {
  return enemy.health === Math.round(50 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.bulletDamage === 14;
}));

game.state = TankGame.Config.states.REWARD;
game.rewardLevel = 2;
game.rewardOptions = [reward("attack")];
game.chooseEndlessReward(0);
assert.strictEqual(game.endlessBaseStats.attack, 39);

game.endlessTemp.shield = true;
game.endlessTemp.rapid = true;
game.endlessTemp.perspective = true;
game.resetWorld(true);
assert.strictEqual(game.player.levelShield, true);
assert.strictEqual(game.player.levelRapid, true);
assert.strictEqual(game.player.levelPerspective, true);
assert.strictEqual(game.player.shieldTimer, 0);
assert.strictEqual(game.player.shieldCharges, 3);
assert.strictEqual(game.player.rapidTimer, 0);
assert.strictEqual(game.player.perspectiveTimer, 0);
game.player.health = 40;
game.player.alive = true;
var shieldBullet = TankGame.Entities.createBullet(game.player.x - 40, game.player.y, 0, "enemy");
shieldBullet.previousX = game.player.x - 40;
shieldBullet.previousY = game.player.y;
shieldBullet.x = game.player.x;
shieldBullet.y = game.player.y;
game.updateBullet(shieldBullet, 0.01);
assert.strictEqual(game.player.health, 40);
assert.strictEqual(game.player.shieldCharges, 2);

game.endlessTemp = { repair: true, shield: false, rapid: false, perspective: false };
game.resetWorld(true);
game.player.health = 50;
var repairBullet = TankGame.Entities.createBullet(game.player.x - 40, game.player.y, 0, "enemy");
repairBullet.previousX = game.player.x - 40;
repairBullet.previousY = game.player.y;
repairBullet.x = game.player.x;
repairBullet.y = game.player.y;
game.updateBullet(repairBullet, 0.01);
assert.strictEqual(game.player.health, 82);
assert.strictEqual(game.player.levelRepair, false);

game.applyEndlessReward(reward("perspective"));
assert.strictEqual(game.endlessNextTemp.perspective, true);

game.state = TankGame.Config.states.PLAYING;
game.completeLevel();
assert.strictEqual(game.rewardLevel, 2);
assert.strictEqual(game.rewardStage, "primary");
game.rewardOptions = [reward("fireRate")];
game.chooseEndlessReward(0);
assert.strictEqual(game.state, TankGame.Config.states.REWARD);
assert.strictEqual(game.rewardStage, "permanent");
assert.strictEqual(game.rewardOptions.length, 3);
game.rewardOptions = [reward("tracking")];
game.chooseEndlessReward(0);
assert.strictEqual(game.endlessPermanent.tracking, 1);
assert.strictEqual(game.player.trackingTime, 2);
assert.strictEqual(game.endlessLevel, 3);

game.state = TankGame.Config.states.PLAYING;
game.endlessPermanent.tracking = 7;
game.resetWorld(true);
assert.strictEqual(game.player.trackingTime, 5);
assert.strictEqual(game.createRewardOptions([reward("explosive")], 3).length, 1);
game.endlessPermanent.explosive = 1;
assert.strictEqual(game.getExplosiveDamageMultiplier(), 0.25);
assert.strictEqual(game.createRewardOptions([reward("explosive")], 3).length, 1);
game.endlessPermanent.explosive = 6;
assert.strictEqual(game.getExplosiveDamageMultiplier(), 0.5);
assert.strictEqual(game.createRewardOptions([reward("explosive")], 3).length, 0);
game.endlessPermanent.jammer = 21;
assert.strictEqual(game.getJammerCooldown(), 5.4);
game.jammerTimer = 0;
game.updateJammer(0);
assert.ok(game.enemies.every(function (enemy) { return enemy.jammedTimer === 0.8; }));
assert.strictEqual(game.createRewardOptions([reward("jammer")], 3).length, 0);

game.endlessPermanent.voidWalker = 3;
game.resetWorld(true);
assert.strictEqual(game.player.wallTimeLimit, 5.2);
game.player.wallTime = 2.4;
game.updateVoidWalker(0.5);
assert.strictEqual(game.player.wallTime, 2.4);

game.endlessPermanent.speed = 1;
game.resetWorld(true);
assert.strictEqual(game.player.moveSpeedMultiplier, 1.4);
game.endlessPermanent.speed = 5;
game.resetWorld(true);
assert.strictEqual(game.player.moveSpeedMultiplier, 1.6);

game.endlessPermanent.frontStep = 1;
game.player.turretAngle = 0;
game.bullets = [];
game.frontStepTrails = [];
var trailStartX = game.player.x;
game.fire(game.player);
assert.strictEqual(game.frontStepTrails.length, 5);
assert.strictEqual(game.player.x, trailStartX + 48);
assert.ok(game.frontStepTrails.every(function (trail) {
  return trail.x >= trailStartX && trail.x < game.player.x && trail.y === game.player.y && trail.life > 0;
}));
game.updateFrontStepTrails(1);
assert.strictEqual(game.frontStepTrails.length, 0);
game.frontStepTrails = [];
game.spawnFrontStepTrails([{ x: 100, y: 100 }, { x: 148, y: 148 }], 0, Math.PI / 4);
assert.ok(game.frontStepTrails.every(function (trail) {
  return Math.abs((trail.x - 100) - (trail.y - 100)) < 0.000001;
}));

game.endlessPermanent.rearShot = 5;
game.resetWorld(true);
game.worldMap.obstacles = [];
game.bullets = [];
game.rearGuards = [];
game.rearGuardCooldown = 0;
game.player.turretAngle = 0;
game.fire(game.player);
assert.strictEqual(game.rearGuards.length, 1);
assert.strictEqual(game.rearGuards[0].remaining, 5);
assert.strictEqual(game.rearGuards[0].maxDistance, 100);
assert.ok(Math.abs(game.rearGuards[0].size * game.rearGuards[0].size - 34 * 34 * 2) < 0.000001);
game.updateRearGuards(1);
var guard = game.rearGuards[0];
var guardBullet = TankGame.Entities.createBullet(guard.x - 20, guard.y, 0, "enemy");
guardBullet.previousX = guard.x - 20;
guardBullet.previousY = guard.y;
game.updateBullet(guardBullet, 0.05);
assert.strictEqual(guardBullet.alive, false);
assert.strictEqual(guard.remaining, 4);

game.endlessPermanent.supportCall = 1;
game.resetWorld(true);
game.supportTimer = 0;
game.supportAircraft = [];
game.updateSupportAircraft(1 / 60);
assert.strictEqual(game.supportAircraft.length, 1);
assert.strictEqual(game.getSupportCooldown(), 24);
game.endlessPermanent.supportCall = 9;
assert.strictEqual(game.getSupportCooldown(), 9);
for (var supportFrame = 0; supportFrame < 240; supportFrame += 1) { game.updateSupportAircraft(1 / 60); }
assert.ok(game.supplies.some(function (supply) { return supply.support && supply.airborne; }));

game.endlessLevel = 11;
game.resetWorld(true);
assert.ok(game.enemies.every(function (enemy) {
  return enemy.health === Math.round(154 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.bulletDamage === 77;
}));
assert.strictEqual(game.enemies[0].mode.reactionTime, 0.18);

game.endlessLevel = 4;
game.resetWorld(true);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isElite; }).length, 0);

game.endlessLevel = 5;
game.resetWorld(true);
var elite = game.enemies.find(function (enemy) { return enemy.isElite; });
var normalEnemies = game.enemies.filter(function (enemy) { return !enemy.isElite; });
assert.ok(elite);
assert.strictEqual(game.enemies.length, 5);
assert.strictEqual(normalEnemies.length, 4);
assert.ok(normalEnemies.every(function (enemy) {
  return enemy.health === Math.round(65 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.maxHealth === Math.round(65 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.bulletDamage === 20 && enemy.radius === 23;
}));
assert.strictEqual(elite.health, 130);
assert.strictEqual(elite.maxHealth, 130);
assert.strictEqual(elite.bulletDamage, 25);
assert.strictEqual(elite.radius, 23 * 1.1);
assert.strictEqual(elite.visualScale, 1.1);
assert.strictEqual(elite.mode.enemySpeed, normalEnemies[0].mode.enemySpeed);
assert.strictEqual(elite.mode.fireCooldown, normalEnemies[0].mode.fireCooldown);
assert.strictEqual(elite.eliteState, "idle");

game.bullets = [];
game.updateEliteBurst(elite, 8);
assert.strictEqual(game.bullets.length, 16);
assert.ok(game.bullets.every(function (bullet) {
  return bullet.eliteBurst && bullet.team === "enemy" && bullet.damage === 6 &&
    bullet.speed === TankGame.Config.bulletSpeed * 0.8;
}));
for (var burstIndex = 0; burstIndex < game.bullets.length; burstIndex += 1) {
  assert.ok(Math.abs(game.bullets[burstIndex].angle - Math.PI * 2 * burstIndex / 16) < 0.000001);
}
game.bullets = Array.from({ length: 28 }, function () {
  var bullet = TankGame.Entities.createBullet(0, 0, 0, "enemy");
  bullet.eliteBurst = true;
  return bullet;
});
game.spawnEliteBurst(elite);
assert.strictEqual(game.bullets.length, 28);

elite.chargeCooldown = 0;
elite.x = 300;
elite.y = 450;
game.player.x = 500;
game.player.y = 450;
game.worldMap.obstacles = [{ x: 400, y: 390, width: 60, height: 120, kind: "#" }];
game.updateEliteCharge(elite, 0);
assert.strictEqual(elite.eliteState, "charging_prepare");
game.updateEliteCharge(elite, 1.8);
assert.strictEqual(elite.eliteState, "charging");
game.moveEliteCharge(elite, 1);
assert.strictEqual(elite.eliteState, "cooldown");
assert.ok(elite.x > 300 && elite.x < 400);
elite.eliteState = "idle";
elite.chargeCooldown = 0;
game.worldMap.obstacles = [];
game.updateEliteCharge(elite, 0);
assert.strictEqual(elite.eliteState, "charging_prepare");
var preparingX = elite.x;
var preparingY = elite.y;
game.bullets = [];
TankGame.AI.updateEnemy(game, elite, 0.5);
assert.strictEqual(elite.x, preparingX);
assert.strictEqual(elite.y, preparingY);
assert.strictEqual(game.bullets.length, 0);
game.player.x = elite.x + 200;
game.player.y = elite.y;
game.updateEliteCharge(elite, 1);
assert.strictEqual(elite.eliteState, "charging_prepare");
assert.strictEqual(elite.chargeAngle, 0);
game.updateEliteCharge(elite, 0.8);
assert.strictEqual(elite.eliteState, "charging");

game.player.x = 500;
game.player.y = 450;
game.player.health = game.player.maxHealth;
game.player.invulnerable = 0;
game.player.levelShield = false;
game.player.shieldTimer = 0;
elite.x = 300;
elite.y = 450;
elite.chargeAngle = 0;
elite.chargeRemaining = 420;
elite.chargeHitPlayer = false;
normalEnemies[0].x = 400;
normalEnemies[0].y = 450;
game.moveEliteCharge(elite, 1);
assert.ok(Math.abs(elite.x - 720) < 0.000001);
assert.strictEqual(game.player.health, game.player.maxHealth - elite.bulletDamage);
assert.strictEqual(elite.eliteState, "cooldown");
assert.strictEqual(elite.chargeCooldown, 10);
game.updateEliteCharge(elite, 9.9);
assert.strictEqual(elite.eliteState, "cooldown");
game.updateEliteCharge(elite, 0.1);
assert.strictEqual(elite.eliteState, "idle");

game.endlessLevel = 15;
game.resetWorld(true);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isElite; }).length, 1);

[
  { level: 1, health: 45, damage: 12, count: 3, speed: 0.85, reaction: 1.45, fire: 1.45, aim: 1.6, strafe: 0.2 },
  { level: 2, health: 50, damage: 14, count: 3, speed: 0.85, reaction: 1.45, fire: 1.45, aim: 1.6, strafe: 0.2 },
  { level: 3, health: 55, damage: 16, count: 4, speed: 0.9, reaction: 1.3, fire: 1.3, aim: 1.35, strafe: 0.35 },
  { level: 4, health: 60, damage: 18, count: 4, speed: 0.9, reaction: 1.3, fire: 1.3, aim: 1.35, strafe: 0.35 },
  { level: 5, health: 65, damage: 20, count: 5, speed: 0.9, reaction: 1.3, fire: 1.3, aim: 1.35, strafe: 0.35 },
  { level: 8, health: 80, damage: 26, count: 5, speed: 0.95, reaction: 1.15, fire: 1.15, aim: 1.15, strafe: 0.5 },
  { level: 9, health: 85, damage: 28, count: 5, speed: 1, reaction: 1, fire: 1, aim: 1, strafe: 0.62 },
  { level: 10, health: 145, damage: 71, count: 5, speed: 1, reaction: 1, fire: 1, aim: 1, strafe: 0.62 },
  { level: 11, health: 154, damage: 77, count: 6, speed: 1, reaction: 1, fire: 1, aim: 1, strafe: 0.62 },
  { level: 20, health: 355, damage: 201 },
  { level: 30, health: 849, damage: 482 }
].forEach(function (expected) {
  game.endlessLevel = expected.level;
  var levelConfig = game.getEndlessLevelConfig();
  assert.strictEqual(levelConfig.enemyHealth, expected.health);
  assert.strictEqual(levelConfig.enemyDamage, expected.damage);
  if (expected.count) {
    assert.strictEqual(levelConfig.enemyCount, expected.count);
    assert.strictEqual(levelConfig.speedScale, expected.speed);
    assert.strictEqual(levelConfig.reactionScale, expected.reaction);
    assert.strictEqual(levelConfig.fireScale, expected.fire);
    assert.strictEqual(levelConfig.aimScale, expected.aim);
    assert.strictEqual(levelConfig.strafeChance, expected.strafe);
  }
});

game.endlessLevel = 1;
game.resetWorld(true);
game.enemies.forEach(function (enemy, index) {
  enemy.x = game.camera.x + 200 + index * 100;
  enemy.y = game.camera.y + 200;
  enemy.aiState = TankGame.AI.states.ATTACK;
  enemy.fireCooldown = 0;
});
assert.strictEqual(game.canEnemyFire(game.enemies[0]), true);
assert.strictEqual(game.canEnemyFire(game.enemies[1]), true);
assert.strictEqual(game.canEnemyFire(game.enemies[2]), false);
game.enemies[0].x = game.camera.x - 1;
assert.strictEqual(game.canEnemyFire(game.enemies[0]), Boolean(game.enemies[0].isTurret));
var activeAttackersBeforeThird = game.enemies.slice(0, 2).filter(function (enemy) {
  return enemy.alive && (enemy.isTurret || game.isEnemyInCameraView(enemy)) &&
    enemy.aiState === TankGame.AI.states.ATTACK && enemy.fireCooldown <= 0;
}).length;
assert.strictEqual(game.canEnemyFire(game.enemies[2]), activeAttackersBeforeThird < 2);
assert.strictEqual(game.supplyTimer, 4);
game.player.health = 60;
game.supplies = [];
game.spawnSupply();
assert.strictEqual(game.supplies.length, 1);
assert.strictEqual(game.supplies[0].type, "repair");
assert.strictEqual(game.earlyRepairSupplyPending, false);

game.endlessLevel = 9;
game.resetWorld(true);
game.enemies.forEach(function (enemy, index) {
  enemy.x = game.camera.x + 200 + index * 100;
  enemy.y = game.camera.y + 200;
  enemy.aiState = TankGame.AI.states.ATTACK;
  enemy.fireCooldown = 0;
});
assert.ok(game.enemies.every(function (enemy) { return game.canEnemyFire(enemy); }));

game.endlessLevel = 10;
game.resetWorld(true);
var boss = game.enemies.find(function (enemy) { return enemy.isBoss; });
var bossNormals = game.enemies.filter(function (enemy) { return !enemy.isBoss; });
assert.ok(boss instanceof TankGame.Entities.BossEnemy);
assert.strictEqual(game.enemies.length, 5);
assert.strictEqual(bossNormals.length, 4);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isElite; }).length, 0);
assert.ok(bossNormals.every(function (enemy) {
  return enemy.health === Math.round(145 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.maxHealth === Math.round(145 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.bulletDamage === 71 && enemy.radius === 23;
}));
assert.strictEqual(boss.health, 435);
assert.strictEqual(boss.maxHealth, 435);
assert.strictEqual(boss.bulletDamage, 89);
assert.strictEqual(boss.radius, 23 * 1.1);
assert.strictEqual(boss.visualScale, 1.1);
assert.strictEqual(boss.bossShieldCharges, 1);
assert.strictEqual(boss.boss_skills.length, 3);
assert.strictEqual(new Set(boss.boss_skills).size, 3);
assert.ok(boss.boss_skills.every(function (skill) {
  return ["gatling", "bomb", "leap", "laser", "clone"].indexOf(skill) !== -1 &&
    boss.skill_states[skill].state === "ready";
}));
assert.strictEqual(boss.active_skill, null);
assert.strictEqual(boss.mode.enemySpeed, bossNormals[0].mode.enemySpeed);
assert.strictEqual(boss.mode.fireCooldown, bossNormals[0].mode.fireCooldown);
assert.strictEqual(game.getBossSkillLevel(), 1);
assert.strictEqual(game.getBossSkillConfig("gatling").cooldown, 25);
assert.strictEqual(game.getBossSkillConfig("bomb").radius, 80);
assert.strictEqual(game.getBossSkillConfig("bomb").range, 420);
assert.strictEqual(game.getBossSkillConfig("leap").maximumDistance, 280);
assert.strictEqual(game.getBossSkillConfig("leap").dodgeChance, 1);
assert.strictEqual(game.getBossSkillConfig("laser").charge, 3);
assert.strictEqual(game.getBossSkillConfig("laser").damageMultiplier, 1.75);
assert.strictEqual(game.getBossSkillConfig("clone").duration, 10);

game.bullets = [];
game.updateBossBurst(boss, 7);
assert.strictEqual(game.bullets.length, 18);
assert.ok(game.bullets.every(function (bullet) {
  return bullet.bossBurst && bullet.team === "enemy" && bullet.damage === 22 &&
    bullet.speed === TankGame.Config.bulletSpeed * 0.8;
}));
for (var bossBurstIndex = 0; bossBurstIndex < game.bullets.length; bossBurstIndex += 1) {
  assert.ok(Math.abs(game.bullets[bossBurstIndex].angle - Math.PI * 2 * bossBurstIndex / 18) < 0.000001);
}

game.fire(boss);
var bossShot = game.bullets[game.bullets.length - 1];
bossShot.bossBurst = false;
game.bossLasers.push({ sourceEnemy: boss, life: 0.24, maxLife: 0.24 });
game.deactivateBossThreats(boss);
assert.strictEqual(game.bullets.filter(function (bullet) { return bullet.sourceEnemy === boss && bullet.alive; }).length, 0);
assert.strictEqual(game.bossLasers.filter(function (laser) { return laser.sourceEnemy === boss; }).length, 0);
boss.alive = false;
assert.strictEqual(game.startBossSkill(boss, boss.boss_skills[0]), false);
boss.alive = true;

game.bullets = [];
game.worldMap.obstacles = [];
boss.bodyAngle = 0;
boss.x = 500;
boss.y = 450;
var bossShieldBullet = TankGame.Entities.createBullet(570, 450, Math.PI, "player");
bossShieldBullet.previousX = 570;
bossShieldBullet.x = 500;
bossShieldBullet.y = 450;
game.updateBullet(bossShieldBullet, 0);
assert.strictEqual(boss.bossShieldCharges, 0);
assert.strictEqual(boss.health, boss.maxHealth);

boss.bossChargeCooldown = 0;
game.player.x = 800;
game.player.y = 450;
game.worldMap.obstacles = [{ x: 650, y: 390, width: 60, height: 120, kind: "#" }];
game.updateBossCharge(boss, 0);
assert.strictEqual(boss.bossState, "charging_prepare");
game.updateBossCharge(boss, 1.5);
assert.strictEqual(boss.bossState, "charging");
game.moveBossCharge(boss, 1);
assert.strictEqual(boss.bossState, "cooldown");
assert.ok(boss.x > 500 && boss.x < 650);
boss.bossState = "idle";
game.worldMap.obstacles = [];
boss.bossChargeCooldown = 0;
game.updateBossCharge(boss, 0);
assert.strictEqual(boss.bossState, "charging_prepare");
game.player.x = boss.x + 250;
game.player.y = boss.y;
game.updateBossCharge(boss, 1.5);
assert.strictEqual(boss.bossState, "charging");
game.worldMap.obstacles = [];
game.player.x = 700;
game.player.y = 450;
game.player.health = game.player.maxHealth;
game.player.invulnerable = 0;
game.player.frontShieldCharges = 0;
game.player.levelShield = false;
game.player.shieldTimer = 0;
boss.x = 500;
boss.y = 450;
boss.bossChargeAngle = 0;
boss.bossChargeRemaining = 420;
boss.bossChargeHitPlayer = false;
game.moveBossCharge(boss, 1);
assert.strictEqual(game.player.health, game.player.maxHealth - boss.bulletDamage);
assert.strictEqual(boss.bossState, "cooldown");
assert.strictEqual(boss.bossChargeCooldown, 10);

function setBossSkills(skills) {
  boss.boss_skills = skills.slice();
  boss.skill_states = {};
  skills.forEach(function (skill) {
    boss.skill_states[skill] = { state: "ready", timer: 0, phase: "ready" };
  });
  boss.active_skill = null;
}

setBossSkills(["gatling", "bomb", "laser"]);
assert.strictEqual(game.startBossSkill(boss, "gatling"), true);
assert.strictEqual(game.startBossSkill(boss, "bomb"), false);
assert.strictEqual(boss.skill_states.gatling.state, "casting");
game.updateActiveBossSkill(boss, 2);
assert.strictEqual(boss.skill_states.gatling.phase, "effect");
assert.strictEqual(game.getEnemyFireCooldown(boss, boss.mode), boss.mode.fireCooldown * 0.22);
game.updateActiveBossSkill(boss, 6);
assert.strictEqual(boss.skill_states.gatling.state, "cooldown");
assert.strictEqual(boss.skill_states.gatling.timer, 25);

assert.strictEqual(game.startBossSkill(boss, "bomb"), true);
game.updateActiveBossSkill(boss, 0.5);
assert.strictEqual(boss.skill_states.bomb.phase, "effect");
game.bullets = [];
game.fire(boss);
assert.strictEqual(game.bullets[0].bossBomb, true);
var bossBombDamage = Math.max(1, Math.round(boss.bulletDamage * 1.25));
assert.strictEqual(game.bullets[0].damage, bossBombDamage);
assert.strictEqual(game.bullets[0].radius, 9);
game.player.x = game.bullets[0].x + 20;
game.player.y = game.bullets[0].y;
game.player.health = game.player.maxHealth;
TankGame.Effects.reset();
game.detonateBossBomb(game.bullets[0]);
assert.strictEqual(game.player.health, game.player.maxHealth - bossBombDamage);
assert.ok(TankGame.Effects.particles.length >= 120);
game.detonateBossBomb(game.bullets[0]);
assert.strictEqual(game.player.health, game.player.maxHealth - bossBombDamage);
game.updateActiveBossSkill(boss, 10);
assert.strictEqual(boss.skill_states.bomb.state, "cooldown");
assert.strictEqual(boss.skill_states.bomb.timer, 18);

boss.active_skill = null;
boss.skill_states.laser.state = "ready";
game.player.x = boss.x + 300;
game.player.y = boss.y;
game.player.health = game.player.maxHealth;
assert.strictEqual(game.startBossSkill(boss, "laser"), true);
game.updateActiveBossSkill(boss, 3);
assert.strictEqual(boss.skill_states.laser.phase, "fire_delay");
game.updateActiveBossSkill(boss, 0.5);
assert.strictEqual(boss.skill_states.laser.state, "cooldown");
assert.strictEqual(boss.skill_states.laser.timer, 32);
assert.strictEqual(game.bossLasers.length, 1);
assert.strictEqual(game.player.health, 0);
assert.strictEqual(game.player.alive, false);
game.player.alive = true;
game.player.health = game.player.maxHealth;

setBossSkills(["leap", "clone", "gatling"]);
game.worldMap.obstacles = [];
var leapStartX = boss.x;
var leapStartY = boss.y;
assert.strictEqual(game.startBossSkill(boss, "leap"), true);
game.updateActiveBossSkill(boss, 0.2);
assert.ok(boss.leapHeight > 0);
game.updateActiveBossSkill(boss, 0.25);
assert.strictEqual(boss.skill_states.leap.state, "cooldown");
assert.strictEqual(boss.skill_states.leap.timer, 3);
assert.ok(Math.hypot(boss.x - leapStartX, boss.y - leapStartY) <= game.getBossSkillConfig("leap").maximumDistance + 0.000001);

boss.x = 500;
boss.y = 450;
boss.aiState = TankGame.AI.states.CHASE;
boss.path = [];
boss.pathIndex = 0;
boss.active_skill = null;
boss.skill_states.leap.state = "ready";
boss.skill_states.leap.phase = "ready";
game.player.x = 900;
game.player.y = 450;
game.worldMap.obstacles = [{ x: 680, y: 390, width: 60, height: 120, kind: "#" }];
assert.strictEqual(game.isBossChaseBlocked(boss), true);
assert.strictEqual(game.startBossSkill(boss, "leap"), true);
assert.strictEqual(boss.bossLeapIntent, "chase");
game.updateActiveBossSkill(boss, 0.45);

boss.active_skill = null;
boss.skill_states.leap.state = "ready";
boss.skill_states.leap.phase = "ready";
game.worldMap.obstacles = [];
var originalRandom = Math.random;
Math.random = function () { return 0.999999; };
var threatBullet = TankGame.Entities.createBullet(boss.x - 100, boss.y, 0, "player");
game.bullets = [threatBullet];
game.updateBossSmartLeap(boss, 0.01);
Math.random = originalRandom;
assert.strictEqual(boss.active_skill, "leap");
assert.strictEqual(boss.bossLeapIntent, "dodge");
game.updateActiveBossSkill(boss, 0.45);

boss.x = 300;
boss.y = 300;
boss.health = boss.maxHealth;
boss.active_skill = null;
boss.skill_states.leap.state = "ready";
boss.skill_states.leap.phase = "ready";
game.player.x = 1000;
game.player.y = 600;
game.worldMap.obstacles = [{ x: 600, y: 350, width: 60, height: 300, kind: "#" }];
game.bullets = [];
game.updateBossSmartLeap(boss, 0.01);
assert.strictEqual(boss.active_skill, "leap");
assert.strictEqual(boss.bossLeapIntent, "pursuit");
var pursuitTargetDistance = Math.hypot(
  boss.skill_states.leap.targetX - boss.x,
  boss.skill_states.leap.targetY - boss.y
);
assert.ok(pursuitTargetDistance >= 210 && pursuitTargetDistance <= 280.000001);
assert.strictEqual(TankGame.Map.circleCollides(game.worldMap, {
  x: boss.skill_states.leap.targetX,
  y: boss.skill_states.leap.targetY,
  radius: boss.radius
}), false);
game.updateActiveBossSkill(boss, 0.45);

boss.x = 700;
boss.y = 450;
boss.health = boss.maxHealth - 1;
boss.active_skill = null;
boss.skill_states.leap.state = "ready";
boss.skill_states.leap.phase = "ready";
boss.bossLeapRepositionTimer = 0;
game.player.x = 850;
game.player.y = 450;
game.worldMap.obstacles = [];
game.bullets = [];
Math.random = function () { return 0.1; };
game.updateBossSmartLeap(boss, 0.01);
Math.random = originalRandom;
assert.strictEqual(boss.active_skill, "leap");
assert.strictEqual(boss.bossLeapIntent, "reposition");
var repositionTargetDistance = Math.hypot(
  boss.skill_states.leap.targetX - boss.x,
  boss.skill_states.leap.targetY - boss.y
);
assert.ok(repositionTargetDistance >= 30 && repositionTargetDistance <= 280.000001);
game.updateActiveBossSkill(boss, 0.45);
assert.strictEqual(boss.skill_states.leap.state, "cooldown");
game.updateBossSmartLeap(boss, 0.01);
assert.strictEqual(boss.active_skill, null);

boss.active_skill = null;
boss.skill_states.clone.state = "ready";
game.bossCloneTrails = [];
var enemyCountBeforeClone = game.enemies.length;
assert.strictEqual(game.startBossSkill(boss, "clone"), true);
var clone = game.enemies.find(function (enemy) { return enemy.isBossClone; });
assert.strictEqual(game.enemies.length, enemyCountBeforeClone + 1);
assert.ok(clone);
assert.strictEqual(clone.health, 1);
assert.strictEqual(clone.bulletDamage, Math.round(boss.bulletDamage * 0.5));
assert.strictEqual(clone.cloneLifetime, 10);
assert.deepStrictEqual(clone.boss_skills, ["leap", "gatling"]);
assert.strictEqual(clone.skill_states.clone, undefined);
assert.strictEqual(game.bossCloneTrails.length, 1);
var cloneTrail = game.bossCloneTrails[0];
assert.strictEqual(cloneTrail.points.length, 14);
assert.strictEqual(cloneTrail.life, 0.6);
assert.strictEqual(cloneTrail.maxLife, 0.6);
assert.strictEqual(cloneTrail.startColor, "#ffd700");
assert.strictEqual(cloneTrail.endColor, "#c77dff");
assert.deepStrictEqual(cloneTrail.points[0], { x: boss.x, y: boss.y, progress: 0 });
assert.ok(Math.abs(cloneTrail.points[13].x - clone.x) < 0.000001);
assert.ok(Math.abs(cloneTrail.points[13].y - clone.y) < 0.000001);
assert.strictEqual(cloneTrail.points[13].progress, 1);
game.updateBossCloneTrails(0.3);
assert.ok(Math.abs(game.bossCloneTrails[0].life - 0.3) < 0.000001);
game.updateBossCloneTrails(0.3);
assert.strictEqual(game.bossCloneTrails.length, 0);
assert.strictEqual(game.startBossSkill(clone, "clone"), false);
assert.strictEqual(game.startBossSkill(clone, "gatling"), true);
game.updateActiveBossSkill(clone, 2);
assert.strictEqual(clone.skill_states.gatling.phase, "effect");
assert.strictEqual(game.getEnemyFireCooldown(clone, clone.mode), clone.mode.fireCooldown * 0.22);
game.fire(clone);
var cloneBullet = game.bullets[game.bullets.length - 1];
assert.strictEqual(cloneBullet.sourceEnemy, clone);
boss.alive = false;
game.updateBossEnemies(0);
assert.strictEqual(clone.alive, false);
assert.strictEqual(cloneBullet.alive, false);
boss.alive = true;
game.updateBossEnemies(10);
assert.strictEqual(clone.alive, false);
assert.strictEqual(boss.skill_states.clone.state, "cooldown");
assert.strictEqual(boss.skill_states.clone.timer, 22);

game.endlessLevel = 20;
game.resetWorld(true);
var levelTwentyBoss = game.enemies.find(function (enemy) { return enemy.isBoss; });
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isBoss; }).length, 1);
assert.strictEqual(game.enemies.filter(function (enemy) { return !enemy.isBoss; }).length, 7);
assert.strictEqual(game.enemies.filter(function (enemy) { return enemy.isElite; }).length, 0);
assert.strictEqual(levelTwentyBoss.health, 1065);
assert.strictEqual(levelTwentyBoss.maxHealth, 1065);
assert.strictEqual(levelTwentyBoss.bulletDamage, 251);
assert.ok(game.enemies.filter(function (enemy) { return !enemy.isBoss; }).every(function (enemy) {
  return enemy.health === Math.round(355 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.maxHealth === Math.round(355 * (enemy.isTurret ? TankGame.Config.fixedTurret.healthMultiplier : 1)) && enemy.bulletDamage === 201;
}));
assert.strictEqual(game.getBossSkillLevel(), 2);
assert.strictEqual(game.getBossSkillConfig("gatling").cooldown, 24.8);
assert.strictEqual(game.getBossSkillConfig("bomb").radius, 85);
assert.strictEqual(game.getBossSkillConfig("bomb").range, 480);
assert.strictEqual(game.getBossSkillConfig("leap").maximumDistance, 320);
assert.strictEqual(game.getBossSkillConfig("laser").damageMultiplier, 1.8);
assert.strictEqual(game.getBossSkillConfig("clone").duration, 11);
game.endlessLevel = 50;
assert.strictEqual(game.getBossSkillConfig("leap").maximumDistance, 440);
game.endlessLevel = 100;
assert.strictEqual(game.getBossSkillConfig("leap").maximumDistance, 440);
game.endlessLevel = 20;

game.bullets = [];
game.endlessPermanent.explosive = 1;
game.player.bulletDamage = 50;
game.spawnFragments(300, 300, 50);
assert.strictEqual(game.bullets.length, 8);
assert.ok(game.bullets.every(function (fragment) {
  return fragment.fragment && fragment.damage === 12.5 && fragment.armingTime === 0.1 &&
    fragment.speed === TankGame.Config.bulletSpeed && fragment.lifetime === TankGame.Config.bulletLifetime * 0.6;
}));

game.start();
assert.strictEqual(game.endlessLevel, 1);
assert.deepStrictEqual(game.endlessPermanent, {});
assert.deepStrictEqual(game.endlessBaseStats, { maxHealth: 125, attack: 30, fireRate: 1 });
assert.strictEqual(game.player.maxHealth, 125);
assert.strictEqual(game.player.bulletDamage, 30);
assert.strictEqual(game.player.trackingTime, 0);

var sanitized = game.sanitizeRecords({ endless: { highScore: "900", bestTime: null } });
assert.deepStrictEqual(sanitized.endless, { highScore: 900, bestTime: null });

console.log("Endless mode tests: PASS");
