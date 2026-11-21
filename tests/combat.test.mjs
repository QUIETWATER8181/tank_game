import test from 'node:test';
import assert from 'node:assert/strict';
import { createApplication, MemoryRepository, createStarterBlueprint, evaluateTank, generateLevel } from '../js/mode/index.mjs';
import { CombatSim, COMBAT, solveLaunchPitch, followYaw } from '../js/three/combat.mjs';

// A flat, cover-free slice of level 01 so ballistics can be asserted without scenery.
async function bareRun({ enemies, spawn = [0, 0, 0], cover = [], zones = [] } = {}) {
  const app = createApplication(new MemoryRepository());
  await app.saveDraft(createStarterBlueprint());
  await app.manufacture({ blueprintId: 'starter', tankId: 't' });
  const ready = await app.prepareFirstLevel('t');
  const level = structuredClone(ready.level);
  level.playerSpawn = spawn;
  level.map.cover = cover;
  level.map.zones = zones;
  if (enemies) level.enemies = enemies;
  return { ...ready, level };
}
const enemyAt = (id, position, extra = {}) => ({ id, templateId: 'basic-infantry', modelId: null, position, behavior: 'frontal', triggerZ: 0, ...extra });
const settle = (sim, ticks, input = {}) => { for (let index = 0; index < ticks && sim.active; index++) sim.fixedUpdate(1 / 60, input); };

test('launch pitch matches the documented low-angle solution', () => {
  const angle = solveLaunchPitch(60, 35, 9.8, 0);
  assert.ok(Math.abs(angle - 0.2499) < 0.01, `60 m pitch ${angle}`);
  assert.equal(solveLaunchPitch(0, 35, 9.8, 0), 0);
  assert.ok(solveLaunchPitch(400, 35, 9.8, 0) > 0, 'out-of-range shots still return an angle');
});

test('cannon shells are straight, fast shots that land on the crosshair', async () => {
  const run = await bareRun({ enemies: [enemyAt('far', [0, 0, 100], { triggerZ: 999 })] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  const aim = { x: 0, z: 100 };
  sim.fixedUpdate(1 / 60, { aim, fire: true });
  const shot = sim.projectiles.find(projectile => projectile.team === 'player');
  assert.ok(shot, 'no shell was spawned');
  assert.equal(shot.gravity, 0, 'straight shell still has gravity');
  assert.equal(shot.straight, true);
  assert.ok(shot.speed >= 100, `shell is too slow (${shot.speed} m/s)`);
  const startZ = shot.position.z;
  for (let index = 0; index < 60 && sim.projectiles.includes(shot); index++) sim.fixedUpdate(1 / 60, { aim });
  assert.ok(sim.hits >= 1, 'straight shell missed a stationary target 100 m away');
  assert.ok(shot.position.z > startZ + 80, `shell only travelled ${(shot.position.z - startZ).toFixed(1)} m`);
});

test('arcade tuning gives the starter tank game speeds', () => {
  const stats = evaluateTank(createStarterBlueprint('infantry')).stats;
  assert.ok(stats.moveSpeed >= 9 && stats.moveSpeed <= 13, `moveSpeed ${stats.moveSpeed} m/s`);
  assert.ok(stats.turnSpeed >= 1.3 && stats.turnSpeed <= 2, `turnSpeed ${stats.turnSpeed} rad/s`);
  assert.ok(stats.turretSpeed >= 2.2 && stats.turretSpeed <= 3, `turretSpeed ${stats.turretSpeed} rad/s`);
  const heavy = evaluateTank(createStarterBlueprint('heavy')).stats;
  assert.ok(heavy.turnSpeed < stats.turnSpeed, 'heavy tank should still turn slower');
  assert.ok(heavy.moveSpeed < stats.moveSpeed, 'heavy tank should still move slower');
});

test('the chase camera eases after the hull instead of snapping to it', () => {
  const eased = followYaw(0, 1.2, .2);
  assert.ok(eased > 0 && eased < 1.2, `camera did not ease (${eased})`);
  let yaw = 0;
  for (let index = 0; index < 120; index++) yaw = followYaw(yaw, 1.2, 1 / 60);
  assert.ok(Math.abs(1.2 - yaw) < .01, `camera did not settle behind the hull (${yaw})`);
  assert.ok(followYaw(0, .1, 1 / 60) > 0, 'camera ignored a small hull turn');
});

test('a shell fired at a 60 m target lands on it', async () => {
  const run = await bareRun({ enemies: [enemyAt('road-1', [0, 0, 60])] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  sim.playerAim = { x: 0, z: 60 };
  const aim = { x: 0, z: 60 };
  settle(sim, 60, { aim, fire: true });
  assert.equal(sim.shots, 1, 'one shot per second of reload');
  settle(sim, 240, { aim });
  assert.ok(sim.hits >= 1, `expected a hit, got ${sim.hits}`);
  assert.ok(sim.enemies[0].health < sim.enemies[0].maxHealth, 'target took no damage');
});

test('damage always goes through damageAfterDefense and never goes negative', async () => {
  const run = await bareRun({ enemies: [enemyAt('road-1', [0, 0, 60])] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  const enemy = sim.enemies[0];
  const expected = 25 * 100 / (100 + enemy.defense);
  const first = enemy.health;
  sim.damageUnit(enemy, 25);
  assert.ok(Math.abs(first - enemy.health - expected) < 1e-6, 'damage did not use the shared formula');
  let previous = enemy.health;
  for (let index = 0; index < 20; index++) {
    sim.damageUnit(enemy, 25);
    assert.ok(enemy.health <= previous && enemy.health >= 0);
    previous = enemy.health;
  }
  assert.equal(enemy.alive, false);
});

test('enemies stay idle until their trigger line, then open fire', async () => {
  const run = await bareRun({ enemies: [enemyAt('road-1', [0, 0, 40], { triggerZ: 30 })] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  settle(sim, 180, {});
  assert.equal(sim.enemies[0].engaged, false, 'enemy engaged before the trigger');
  assert.equal(sim.projectiles.length, 0, 'enemy fired while idle');
  sim.player.position.z = 31;
  settle(sim, 240, {});
  assert.equal(sim.enemies[0].engaged, true);
  assert.ok(sim.projectiles.length > 0 || sim.player.health < sim.player.maxHealth, 'enemy never fired');
});

test('a destroyed unit reports exactly one rule event', async () => {
  const run = await bareRun({ enemies: [enemyAt('road-1', [0, 0, 40])] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  const enemy = sim.enemies[0];
  sim.damageUnit(enemy, 9999);
  sim.damageUnit(enemy, 9999);
  const events = sim.takeEvents().filter(event => event.type === 'enemy-destroyed');
  assert.equal(events.length, 1);
  assert.equal(events[0].id, 'road-1');
});

test('clearing every enemy and the base ends the battle as a victory', async () => {
  const run = await bareRun({ enemies: [enemyAt('road-1', [0, 0, 40]), enemyAt('guard', [0, 0, 150], { behavior: 'guard' })] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  sim.damageUnit(sim.enemies[0], 9999);
  sim.checkOutcome();
  assert.equal(sim.active, true, 'one enemy and the base are still alive');
  sim.damageUnit(sim.enemies[1], 9999);
  sim.checkOutcome();
  assert.equal(sim.active, true, 'base still alive');
  sim.damageUnit(sim.base, 9999);
  sim.checkOutcome();
  assert.equal(sim.active, false);
  assert.equal(sim.outcome, 'victory');
  const types = sim.takeEvents().map(event => event.type);
  assert.ok(types.includes('base-destroyed') && types.includes('combat-end'));
  assert.equal(types.filter(type => type === 'enemy-destroyed').length, 2);
});

test('losing the player ends the battle as a defeat', async () => {
  const run = await bareRun({ enemies: [enemyAt('road-1', [0, 0, 40])] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  sim.damageUnit(sim.player, 9999);
  sim.checkOutcome();
  assert.equal(sim.outcome, 'defeat');
  assert.ok(sim.takeEvents().some(event => event.type === 'player-destroyed'));
});

test('solid cover stops a tank without letting it tunnel through', async () => {
  const run = await bareRun({ cover: [{ id: 'berm-mid', kind: 'berm', position: [0, 1.3, 20], size: [10, 2.6, 3], solid: true }] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  settle(sim, 300, { throttle: 1 });
  assert.ok(sim.player.position.z < 18.6, `tank went through the berm (z=${sim.player.position.z.toFixed(2)})`);
  assert.ok(sim.player.position.z > 12, `tank stopped too early (z=${sim.player.position.z.toFixed(2)})`);
});

test('mud and rubble only change reachable speed, not the displayed stat', async () => {
  const run = await bareRun({ zones: [{ id: 'mud-left', kind: 'mud', position: [0, .01, 10], size: [20, 20], speedFactor: .45 }] });
  const sim = new CombatSim({ run, random: () => 0.5 });
  assert.equal(sim.zoneFactorAt(0, 10), .45);
  assert.equal(sim.zoneFactorAt(0, 60), 1);
  assert.equal(sim.player.moveSpeed, run.tank.assessment.stats.moveSpeed);
  settle(sim, 120, { throttle: 1 });
  assert.ok(sim.player.speed < sim.player.moveSpeed * .6, 'mud did not slow the tank down');
});

test('the shipped level keeps every cover inside the map and off the spawn', () => {
  const level = generateLevel();
  const halfWidth = level.map.width / 2;
  for (const cover of level.map.cover) {
    assert.ok(Math.abs(cover.position[0]) + cover.size[0] / 2 <= halfWidth + .01, `${cover.id} sticks out of the map`);
    assert.ok(cover.position[2] + cover.size[2] / 2 < 180, `${cover.id} is past the level end`);
  }
  for (const zone of level.map.zones) {
    const [x, , z] = zone.position, [w, d] = zone.size;
    const inside = Math.abs(level.playerSpawn[0] - x) <= w / 2 && Math.abs(level.playerSpawn[2] - z) <= d / 2;
    assert.equal(inside, false, `${zone.id} covers the player spawn`);
  }
  assert.ok(level.map.width >= 36);
  assert.equal(level.map.generator, 'corridor-v2');
  assert.equal(COMBAT.baseHalf[0] * 2 >= 30, true);
});

test('enemy shells carry aim error instead of hitting every time', async () => {
  const run = await bareRun({ enemies: [enemyAt('road-1', [0, 0, 40], { triggerZ: 0 })] });
  let seed = .13;
  const random = () => { seed = (seed + .37) % 1; return seed; };
  const sim = new CombatSim({ run, random });
  settle(sim, 900, {});
  const angles = sim.takeEvents().filter(event => event.type === 'fired' && event.owner === 'road-1').map(event => event.angle);
  assert.ok(angles.length >= 2, `expected several enemy shots, got ${angles.length}`);
  assert.ok(Math.max(...angles) - Math.min(...angles) > 1e-4, 'enemy fire is laser-accurate');
});

test('ammo stores inside the base can still be hit before the base box', async () => {
  const app = createApplication(new MemoryRepository());
  await app.saveDraft(createStarterBlueprint());
  await app.manufacture({ blueprintId: 'starter', tankId: 't' });
  const ready = await app.prepareFirstLevel('t');
  const sim = new CombatSim({ run: ready, random: () => 0.5 });
  const ammo = sim.cover.find(cover => cover.explosive);
  assert.ok(ammo, 'level has no explosive cover');
  const hit = sim.hitTest({ position: { x: ammo.x, y: .8, z: ammo.z }, team: 'player' });
  assert.equal(hit?.kind, 'cover', 'the base box swallowed the ammo store');
  assert.equal(hit.cover, ammo);
  const baseHit = sim.hitTest({ position: { x: 0, y: .8, z: sim.base.position.z }, team: 'player' });
  assert.equal(baseHit?.kind, 'base');
});
