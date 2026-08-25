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

function createGame(modeId) {
  var canvas = { width: 1440, height: 900, getContext: function () { return {}; } };
  var input = {
    pointer: { down: false, pressed: false, inside: false },
    isDown: function () { return false; },
    reset: function () {}
  };
  var game = new TankGame.Game(canvas, input);
  game.setMode(modeId);
  game.start();
  game.state = TankGame.Config.states.PLAYING;
  return game;
}

function makeMap(obstacles) {
  var cells = Array.from({ length: TankGame.Map.rows }, function () {
    return Array.from({ length: TankGame.Map.columns }, function () { return "."; });
  });
  obstacles.forEach(function (obstacle) {
    cells[obstacle.row][obstacle.column] = obstacle.kind;
  });
  var worldMap = {
    cells: cells,
    obstacles: [],
    obstacleGrid: [],
    navigationRevision: 0,
    isLargeWorld: true
  };
  TankGame.Map.rebuildObstacles(worldMap);
  return worldMap;
}

function prepareEnemyScenario(modeId, obstacle) {
  var game = createGame(modeId);
  game.worldMap = makeMap(obstacle ? [obstacle] : []);
  game.player = TankGame.Entities.createTank(400, 100, "player");
  game.camera = { x: 0, y: 0 };
  var enemy = TankGame.Entities.createTank(100, 100, "enemy");
  enemy.mode = game.getEnemyMode(game.getActiveLevelConfig());
  TankGame.AI.initialize(enemy, 0, enemy.mode);
  enemy.reactionTimer = -1;
  enemy.endlessReactionAdjusted = true;
  enemy.fireCooldown = 0;
  enemy.turretAngle = Math.atan2(90 - enemy.y, 210 - enemy.x);
  game.enemies = [enemy];
  return { game: game, enemy: enemy };
}

["normal", "challenge", "endless", "brave"].forEach(function (modeId) {
  var scenario = prepareEnemyScenario(modeId, { column: 3, row: 1, kind: "B" });
  TankGame.AI.updateEnemy(scenario.game, scenario.enemy, 0.016);
  assert.strictEqual(scenario.enemy.aiState, TankGame.AI.states.ATTACK, modeId + " should attack a breakable wall");
  assert.strictEqual(scenario.enemy.fireTarget.type, "breakableWall", modeId + " should target the wall");
  assert.strictEqual(scenario.game.bullets.length, 1, modeId + " should fire at the wall");
});

var solid = prepareEnemyScenario("normal", { column: 3, row: 1, kind: "#" });
TankGame.AI.updateEnemy(solid.game, solid.enemy, 0.016);
assert.notStrictEqual(solid.enemy.fireTarget && solid.enemy.fireTarget.type, "breakableWall");
assert.strictEqual(solid.game.bullets.length, 0, "indestructible walls must not be fire targets");

var water = prepareEnemyScenario("normal", { column: 3, row: 1, kind: "W" });
TankGame.AI.updateEnemy(water.game, water.enemy, 0.016);
assert.strictEqual(water.enemy.fireTarget.type, "player", "water must remain transparent to bullets");
assert.strictEqual(water.game.bullets.length, 1);

var diagonal = makeMap([{ column: 3, row: 3, kind: "B" }]);
assert.strictEqual(
  TankGame.Map.findBreakableWallBetween(diagonal, 100, 100, 400, 400, 3).kind,
  "B",
  "diagonal brick walls must be detected"
);

var cooldown = prepareEnemyScenario("normal", { column: 3, row: 1, kind: "B" });
cooldown.enemy.fireCooldown = 0.5;
TankGame.AI.updateEnemy(cooldown.game, cooldown.enemy, 0.016);
assert.strictEqual(cooldown.game.bullets.length, 0, "wall fire must respect cooldown");

var friendly = prepareEnemyScenario("normal", { column: 3, row: 1, kind: "B" });
var ally = TankGame.Entities.createTank(160, 100, "enemy");
friendly.game.enemies.push(ally);
TankGame.AI.updateEnemy(friendly.game, friendly.enemy, 0.016);
assert.strictEqual(friendly.game.bullets.length, 0, "wall fire must respect friendly-fire blocking");

var breakGame = prepareEnemyScenario("endless", { column: 3, row: 1, kind: "B" });
var brokenWall = breakGame.game.worldMap.obstacles[0];
var breakScore = breakGame.game.score;
var fieldCallbackCount = 0;
breakGame.game.onFieldWallBroken = function () { fieldCallbackCount += 1; };
breakGame.game.fire(breakGame.enemy);
breakGame.game.updateBullet(breakGame.game.bullets[0], 0.1);
assert.strictEqual(breakGame.game.worldMap.obstacles.length, 0, "enemy bullets must destroy brick walls");
assert.strictEqual(breakGame.game.worldMap.cells[brokenWall.row][brokenWall.column], ".");
assert.strictEqual(breakGame.game.score, breakScore, "enemy wall breaking must not award score");
assert.strictEqual(fieldCallbackCount, 0, "enemy wall breaking must not spawn field energy");

function prepareBossScenario(modeId) {
  var game = createGame(modeId);
  game.worldMap = makeMap([
    { column: 3, row: 1, kind: "B" },
    { column: 4, row: 1, kind: "#" },
    { column: 5, row: 1, kind: "W" }
  ]);
  game.player = TankGame.Entities.createTank(400, 100, "player");
  var boss = new TankGame.Entities.BossEnemy(100, 100, ["leap"]);
  boss.mode = game.getEnemyMode(game.getActiveLevelConfig());
  boss.health = 100;
  boss.maxHealth = 100;
  TankGame.AI.initialize(boss, 0, boss.mode);
  game.makeBossEnemy(boss);
  boss.aiState = TankGame.AI.states.CHASE;
  boss.path = [];
  boss.pathIndex = 0;
  boss.active_skill = null;
  boss.skillDecisionTimer = 0;
  boss.skill_states.leap.state = "ready";
  boss.skill_states.leap.phase = "ready";
  game.enemies = [boss];
  return { game: game, boss: boss };
}

["endless", "brave"].forEach(function (modeId) {
  var scenario = prepareBossScenario(modeId);
  scenario.game.updateBossSmartLeap(scenario.boss, 0.01);
  assert.strictEqual(scenario.boss.active_skill, "leap", modeId + " boss should prioritize leap at a brick wall");
  assert.strictEqual(scenario.boss.bossLeapIntent, "chase");
});

console.log("Enemy wall fire tests: PASS");
