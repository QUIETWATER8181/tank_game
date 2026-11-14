import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createApplication, MemoryRepository, createStarterBlueprint, transitionRun } from '../js/mode/index.mjs';
import { buildLevelScene } from '../js/three/level-scene.mjs';
import { disposeObject } from '../js/three/resources.mjs';

async function preparedRun() {
  const app = createApplication(new MemoryRepository());
  await app.saveDraft(createStarterBlueprint());
  await app.manufacture({ blueprintId: 'starter', tankId: 't' });
  return app.prepareFirstLevel('t');
}
function namesOf(group) {
  const names = [];
  group.traverse(object => { if (object.name) names.push(object.name); });
  return names;
}

test('first level scene contains terrain, road, base, player and four enemy tanks', async () => {
  const run = await preparedRun();
  const scene = buildLevelScene(run);
  const names = namesOf(scene.group);
  for (const expected of ['level-01', 'sky', 'ground', 'road', 'enemy-base', 'player-tank']) assert.ok(names.includes(expected), `missing ${expected}`);
  for (const enemy of run.level.enemies) assert.ok(names.includes(`enemy-${enemy.id}`), `missing enemy ${enemy.id}`);
  assert.ok(scene.focus.has('player') && scene.focus.has('base') && scene.focus.has('overview'));
  for (const enemy of run.level.enemies) assert.ok(scene.focus.has(enemy.id));
  assert.equal(scene.focus.get('overview').view.distance > 150, true);
  const box = new THREE.Box3().setFromObject(scene.group);
  assert.ok(box.max.z > 180, 'level should extend past the enemy base');
  assert.ok(box.max.y > 20, 'level should contain tall structures');
  assert.doesNotThrow(() => scene.update(0.016));
  assert.doesNotThrow(() => scene.update(0.016));
});

test('destroyed enemies become wrecks with smoke and a destroyed base loses the flag', async () => {
  const ready = await preparedRun();
  let run = transitionRun(ready, { type: 'start' });
  run = transitionRun(run, { type: 'enemy-destroyed', id: 'road-1' });
  run = transitionRun(run, { type: 'base-destroyed' });
  const scene = buildLevelScene(run);
  const names = namesOf(scene.group);
  assert.equal(names.includes('enemy-road-1'), false, 'destroyed enemy still renders a live tank');
  assert.ok(names.includes('enemy-road-2'), 'surviving enemy missing');
  assert.ok(names.includes('enemy-base'), 'base group missing after destruction');
  let smoke = 0;
  scene.group.traverse(object => { if (object.isPoints) smoke++; });
  assert.ok(smoke >= 2, `expected wreck and base smoke, found ${smoke}`);
  assert.doesNotThrow(() => scene.update(0.05));
});

test('level scene resources are released together', async () => {
  const run = await preparedRun();
  const scene = buildLevelScene(run);
  const geometries = new Set(), materials = new Set();
  scene.group.traverse(object => {
    if (!object.isMesh) return;
    geometries.add(object.geometry);
    materials.add(object.material);
  });
  assert.ok(geometries.size > 30);
  let disposed = 0;
  for (const geometry of geometries) { const original = geometry.dispose.bind(geometry); geometry.dispose = () => { disposed++; original(); }; }
  disposeObject(scene.group);
  assert.equal(disposed, geometries.size);
});
