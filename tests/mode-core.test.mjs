import test from 'node:test';
import assert from 'node:assert/strict';
import { createApplication, MemoryRepository, newProfile, createStarterBlueprint, evaluateTank, TYPES, transitionRun, resultActions, damageAfterDefense, ModelLibrary, suggestPlacement, nearestAttachment, snapValue, validateBlueprint, PARTS } from '../js/mode/index.mjs';

test('all five starter types have a valid and reproducible assessment', () => {
  for (const type of Object.keys(TYPES)) {
    const blueprint = createStarterBlueprint(type);
    const result = evaluateTank(blueprint);
    assert.equal(result.valid, true, JSON.stringify(result.errors));
    assert.ok(Object.values(result.stats).filter(v => typeof v === 'number').every(Number.isFinite));
    assert.deepEqual(evaluateTank({ ...blueprint, parts: [...blueprint.parts].reverse() }), result);
    if (type === 'artillery') assert.equal(result.stats.kind, 'mortar');
  }
  const stats = type => evaluateTank(createStarterBlueprint(type)).stats;
  assert.ok(stats('heavy').moveSpeed < stats('infantry').moveSpeed);
  assert.ok(stats('heavy').defense > stats('infantry').defense);
  assert.ok(stats('assassin').fireRate > stats('infantry').fireRate);
});
test('invalid blueprints cannot create numerical stats', () => {
  const mutations = [
    b => { b.parts[0].position[0] = NaN; },
    b => { b.parts[1].id = 'hull'; },
    b => { b.parts[1].parentId = 'engine'; b.parts[2].parentId = 'tracks'; },
    b => { b.parts[2].position[0] = 15; },
    b => { b.parts[2].position = [...b.parts[3].position]; },
    b => { b.parts[2].scale = 10; },
    b => { b.type = 'artillery'; },
    b => { b.parts[3].partId = '__proto__'; },
    b => { b.parts[0].position[1] = -10; },
    b => { b.primaryWeaponId = 'engine'; }
  ];
  for (const mutate of mutations) { const b = createStarterBlueprint(); mutate(b); assert.equal(evaluateTank(b).valid, false); }
});
test('armor adds weight and protection; duplicate unlocked spending is prevented', async () => {
  const profile = newProfile(); profile.currency.parts = 50;
  const app = createApplication(new MemoryRepository(profile));
  const b = createStarterBlueprint('heavy');
  b.parts.push({ id: 'armor', partId: 'armor', parentId: 'hull', position: [0, 1.75, 0], yaw: 0 });
  // This plate intersects the turret/hull, so location matters as well as unlocks.
  assert.equal((await app.evaluate(b)).valid, false);
  b.parts[5].position = [0, 1.75, -3];
  assert.equal((await app.evaluate(b)).valid, false);
  const results = await Promise.all([app.unlockPart('armor'), app.unlockPart('armor')]);
  assert.equal(results.reduce((sum, r) => sum + r.charged, 0), 30);
  assert.equal((await app.profile()).currency.parts, 20);
  b.parts[5].position = [0, 1.3, 3.42];
  const armored = await app.evaluate(b), baseline = evaluateTank(createStarterBlueprint('heavy'));
  assert.equal(armored.valid, true, JSON.stringify(armored.errors));
  assert.ok(armored.metrics.mass > baseline.metrics.mass);
  assert.ok(armored.stats.defense > baseline.stats.defense);
  assert.ok(armored.stats.moveSpeed < baseline.stats.moveSpeed);
  await assert.rejects(app.unlockPart('bomb'), /不足/);
  assert.equal((await app.profile()).currency.parts, 20);
});
test('turret is optional, unique, and owns turret speed plus turret-mounted weapons', () => {
  const starter = createStarterBlueprint('infantry');
  const armed = evaluateTank(starter);
  assert.equal(armed.valid, true, JSON.stringify(armed.errors));
  assert.equal(armed.metrics.hasTurret, true);
  assert.ok(armed.stats.turretSpeed > 0);
  assert.equal(armed.weapons.find(weapon => weapon.instanceId === 'weapon').onTurret, true);
  const turretless = structuredClone(starter);
  turretless.parts = turretless.parts.filter(item => item.partId !== 'turret');
  turretless.parts.find(item => item.id === 'weapon').parentId = 'hull';
  turretless.parts.find(item => item.id === 'weapon').position = [0, 2.4, 4.25];
  const fixed = evaluateTank(turretless);
  assert.equal(fixed.valid, true, JSON.stringify(fixed.errors));
  assert.equal(fixed.metrics.hasTurret, false);
  assert.equal(fixed.stats.turretSpeed, undefined);
  assert.equal(fixed.weapons[0].onTurret, false);
  assert.ok(fixed.warnings.some(text => text.includes('无炮塔')));
  const double = structuredClone(starter);
  double.parts.push({ id: 'turret-2', partId: 'turret', parentId: 'hull', position: [0, 2.45, -2.4], yaw: 0 });
  assert.equal(evaluateTank(double).valid, false);
});
test('placement suggestions and snapping keep new parts attached and inside limits', () => {
  for (const type of Object.keys(TYPES)) {
    for (const partId of ['armor']) {
      const blueprint = createStarterBlueprint(type);
      const id = `added-${partId}`;
      const suggestion = suggestPlacement(blueprint, partId, id);
      blueprint.parts.push({ id, partId, parentId: suggestion.parentId, position: suggestion.position, yaw: suggestion.yaw });
      assert.equal(validateBlueprint(blueprint, Object.keys(PARTS)).length, 0, `${type} ${partId}: ${JSON.stringify(evaluateTank(blueprint).errors)}`);
    }
  }
  for (const [type, partId] of [['infantry', 'cannon'], ['exotic', 'bomb'], ['artillery', 'mortar']]) {
    const blueprint = createStarterBlueprint(type);
    const suggestion = suggestPlacement(blueprint, partId, 'extra-weapon');
    blueprint.parts.push({ id: 'extra-weapon', partId, parentId: suggestion.parentId, position: suggestion.position, yaw: suggestion.yaw });
    assert.equal(validateBlueprint(blueprint, Object.keys(PARTS)).length, 0, `${type} ${partId}: ${JSON.stringify(evaluateTank(blueprint).errors)}`);
  }
  const blueprint = createStarterBlueprint();
  assert.equal(snapValue(2.44), 2.4);
  assert.equal(snapValue(-1.26), -1.3);
  const weapon = blueprint.parts.find(item => item.id === 'weapon');
  assert.equal(nearestAttachment(blueprint, 'weapon', weapon.position).id, 'turret');
  assert.equal(nearestAttachment(blueprint, 'weapon', [0, 2.4, 12]), null);
});
test('workshop -> evaluated tank snapshot -> first level -> victory', async () => {
  const app = createApplication(new MemoryRepository());
  const blueprint = createStarterBlueprint();
  await app.saveDraft(blueprint);
  const tank = await app.manufacture({ blueprintId: blueprint.id, tankId: 'tank-1' });
  assert.equal(tank.assessment.valid, true);
  await assert.rejects(app.manufacture({ blueprintId: blueprint.id, tankId: 'tank-1' }), /已存在/);
  await assert.rejects(app.saveDraft(blueprint), /版本冲突/);
  blueprint.revision++; blueprint.name = '新草稿'; await app.saveDraft(blueprint);
  assert.notEqual((await app.profile()).tanks[0].blueprint.name, '新草稿');
  const ready = await app.prepareFirstLevel('tank-1');
  assert.equal(ready.level.enemies.length, 4); assert.equal(ready.level.map.segments.length, 9);
  assert.equal(ready.status, 'ready');
  let run = transitionRun(ready, { type: 'start' });
  run = transitionRun(run, { type: 'base-destroyed' }); assert.equal(run.status, 'running');
  for (const enemy of run.level.enemies) run = transitionRun(run, { type: 'enemy-destroyed', id: enemy.id });
  assert.equal(run.status, 'victory'); assert.equal(ready.status, 'ready');
  assert.equal(resultActions(run).find(a => a.id === 'next').enabled, false);
  assert.throws(() => transitionRun(run, { type: 'player-destroyed' }), /运行中/);
});
test('enemy kills alone cannot win; duplicate events do not inflate kills', async () => {
  const app = createApplication(new MemoryRepository()); await app.saveDraft(createStarterBlueprint());
  await app.manufacture({ blueprintId: 'starter', tankId: 't' });
  let run = transitionRun(await app.prepareFirstLevel('t'), { type: 'start' });
  assert.throws(() => transitionRun(run, { type: 'enemy-destroyed', id: 'fake' }), /未知/);
  for (const enemy of run.level.enemies) {
    run = transitionRun(run, { type: 'enemy-destroyed', id: enemy.id });
    run = transitionRun(run, { type: 'enemy-destroyed', id: enemy.id });
  }
  assert.equal(run.defeatedEnemies.length, 4); assert.equal(run.status, 'running');
  assert.equal(transitionRun(run, { type: 'player-destroyed' }).status, 'defeat');
  assert.equal(transitionRun(run, { type: 'base-destroyed' }).status, 'victory');
});
test('saved scores are recalculated, and invalid drafts cannot manufacture', async () => {
  const repo = new MemoryRepository(), app = createApplication(repo);
  await app.saveDraft(createStarterBlueprint()); await app.manufacture({ blueprintId: 'starter', tankId: 't' });
  repo.profile.tanks[0].assessment.stats.attack = 999999;
  assert.notEqual((await app.prepareFirstLevel('t')).tank.assessment.stats.attack, 999999);
  const incomplete = createStarterBlueprint('infantry', 'bad'); incomplete.parts = [];
  await app.saveDraft(incomplete);
  await assert.rejects(app.manufacture({ blueprintId: 'bad', tankId: 'bad' }), /制造失败/);
});
test('repository rollback and unknown versions preserve the original profile', async () => {
  const repo = new MemoryRepository();
  await assert.rejects(repo.updateProfile(p => { p.currency.parts = -1; }), /损坏/);
  assert.equal((await repo.readProfile()).currency.parts, 0);
  const future = newProfile(); future.schemaVersion = 99;
  await assert.rejects(new MemoryRepository(future).readProfile(), /版本/);
});
test('model categories, GLB structure and immutable model IDs', async () => {
  const models = new ModelLibrary(new MemoryRepository());
  const text = JSON.stringify({ asset: { version: '2.0' }, scenes: [{}] });
  const json = new TextEncoder().encode(text.padEnd(Math.ceil(text.length / 4) * 4, ' '));
  const bytes = new ArrayBuffer(20 + json.length), view = new DataView(bytes);
  [0x46546c67, 2, bytes.byteLength, json.length, 0x4e4f534a].forEach((v, i) => view.setUint32(i * 4, v, true));
  new Uint8Array(bytes, 20).set(json);
  for (const category of ['terrain', 'enemy-tank', 'player-tank']) await models.save({ id: category, category, name: category, blob: new Blob([bytes]) });
  assert.equal((await models.list('terrain')).length, 1);
  assert.equal('blob' in (await models.list())[0], false);
  assert.ok((await models.get('terrain')).blob instanceof Blob);
  await assert.rejects(models.save({ id: 'terrain', category: 'terrain', name: 'duplicate', blob: new Blob([bytes]) }));
  await assert.rejects(models.save({ id: 'invalid', category: 'terrain', name: 'invalid', blob: new Blob(['bad']) }));
});
test('interaction contract: defense, friendly fire and malformed damage', () => {
  assert.equal(damageAfterDefense(100, 100), 50);
  assert.equal(damageAfterDefense(100, 100, { sameTeam: true }), 0);
  assert.equal(damageAfterDefense(100, 100, { sameTeam: true, friendlyFire: true }), 50);
  assert.throws(() => damageAfterDefense(Infinity, 10));
});
