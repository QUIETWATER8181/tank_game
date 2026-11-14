import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { buildTankModel } from '../js/three/tank-model.mjs';
import { disposeObject } from '../js/three/resources.mjs';
import { createStarterBlueprint, TYPES, PARTS } from '../js/mode/index.mjs';

function measure(model) {
  let meshes = 0, triangles = 0;
  model.traverse(object => {
    if (!object.isMesh) return;
    meshes++;
    const geometry = object.geometry;
    triangles += (geometry.index ? geometry.index.count : geometry.attributes.position.count) / 3;
  });
  const box = new THREE.Box3().setFromObject(model);
  return { meshes, triangles, box, size: box.getSize(new THREE.Vector3()) };
}

test('every starter type builds a tank-sized proxy with one group per part', () => {
  for (const type of Object.keys(TYPES)) {
    const blueprint = createStarterBlueprint(type);
    const model = buildTankModel(blueprint, { merged: true });
    assert.equal(model.userData.parts.size, blueprint.parts.length);
    for (const item of blueprint.parts) assert.ok(model.userData.parts.has(item.id), `${type}: missing ${item.id}`);
    const { meshes, triangles, box, size } = measure(model);
    assert.ok(size.x > 3.4 && size.x < 5.5, `${type} width ${size.x}`);
    assert.ok(size.z > 7 && size.z < 10, `${type} length ${size.z}`);
    assert.ok(size.y > 2.5 && size.y < 5.2, `${type} height ${size.y}`);
    assert.ok(box.min.y > -0.1 && box.min.y < 0.15, `${type} ground contact ${box.min.y}`);
    assert.ok(meshes > 15 && meshes < 60, `${type} merged meshes ${meshes}`);
    assert.ok(triangles > 3000 && triangles < 20000, `${type} triangles ${triangles}`);
  }
});

test('silhouette landmarks: turret above hull, barrel overhang, tracks below', () => {
  const blueprint = createStarterBlueprint('infantry');
  const model = buildTankModel(blueprint, { merged: true });
  const box = role => new THREE.Box3().setFromObject(model.userData.byRole.get(role));
  const hull = box('hull'), turret = box('turret'), weapon = box('weapon'), tracks = box('mobility');
  const hullPart = blueprint.parts.find(item => item.partId === 'hull');
  const deck = hullPart.position[1] + PARTS.hull.size[1] / 2;
  assert.ok(turret.min.y >= deck - 0.12, `turret should sit on the hull deck (${turret.min.y} vs ${deck})`);
  assert.ok(turret.max.y > deck + 0.5, 'turret should be a raised structure');
  assert.ok(weapon.max.z > hull.max.z + 1.6, 'gun should overhang the glacis');
  assert.ok(weapon.min.z < hull.max.z, 'gun root should reach into the turret');
  assert.ok(tracks.min.y <= hull.min.y + 0.05, 'running gear should carry the hull');
  assert.ok(tracks.max.x > PARTS.hull.size[0] / 2, 'tracks should be wider than the hull');
});

test('whole merge keeps the level proxy cheap and resources owned once', () => {
  const model = buildTankModel(createStarterBlueprint('heavy'), { whole: true, merged: true });
  const { meshes } = measure(model);
  assert.ok(meshes >= 6 && meshes <= 16, `whole merged meshes ${meshes}`);
  const geometries = new Set(), materials = new Set();
  model.traverse(object => {
    if (!object.isMesh) return;
    geometries.add(object.geometry);
    materials.add(object.material);
  });
  assert.equal(geometries.size, meshes, 'merged meshes must not share geometry');
  assert.ok(materials.size <= 12, `material count ${materials.size}`);
  let disposed = 0;
  for (const geometry of geometries) { const original = geometry.dispose.bind(geometry); geometry.dispose = () => { disposed++; original(); }; }
  disposeObject(model);
  assert.equal(disposed, geometries.size, 'each geometry should be disposed exactly once');
});

test('blueprints with four weapons and no turret still produce a model', () => {
  const blueprint = createStarterBlueprint('exotic');
  blueprint.parts = blueprint.parts.filter(item => item.partId !== 'turret');
  const weapon = blueprint.parts.find(item => item.id === 'weapon');
  weapon.parentId = 'hull'; weapon.position = [0, 2.4, 4.25];
  blueprint.parts.push({ id: 'w2', partId: 'rapid', parentId: 'hull', position: [0, 2.4, 6.3], yaw: 0 });
  blueprint.parts.push({ id: 'w3', partId: 'bomb', parentId: 'hull', position: [1.6, 2.4, 4.25], yaw: 0 });
  const model = buildTankModel(blueprint, { merged: true });
  assert.equal(model.userData.parts.size, blueprint.parts.length);
  const { triangles } = measure(model);
  assert.ok(triangles > 3000);
});

// Every bolt, handle and weld bead must be attached to something. A detail that is
// offset into empty space still renders, so only an AABB contact check catches it.
test('no detail floats free of the part it belongs to', () => {
  const model = buildTankModel(createStarterBlueprint('infantry'), { merged: false });
  model.updateMatrixWorld(true);
  const isolated = [];
  for (const [id, group] of model.userData.parts) {
    const meshes = [];
    group.traverse(object => { if (object.isMesh) meshes.push({ object, box: new THREE.Box3().setFromObject(object) }); });
    if (meshes.length < 2) continue;
    for (const entry of meshes) {
      const touching = meshes.some(other => other !== entry && entry.box.clone().expandByScalar(0.015).intersectsBox(other.box));
      if (!touching) isolated.push(`${id} @ ${entry.box.getCenter(new THREE.Vector3()).toArray().map(value => value.toFixed(2)).join(',')}`);
    }
  }
  assert.deepEqual(isolated, [], `floating detail: ${isolated.join('; ')}`);
});

// Guards the M2 detail pass: the extra bolts, welds and stowage must stay inside the
// near-view triangle budget, must not bury the running gear, and must not push the
// turret bustle into the engine deck when the turret sits in its default pose.
test('detail pass stays inside the near-view budget and keeps parts clear', () => {
  const blueprint = createStarterBlueprint('infantry');
  const model = buildTankModel(blueprint, { merged: true });
  const { triangles, meshes, box } = measure(model);
  assert.ok(triangles > 8000 && triangles < 20000, `detail budget ${triangles}`);
  assert.ok(meshes >= 15 && meshes <= 60, `merged meshes ${meshes}`);
  const role = name => new THREE.Box3().setFromObject(model.userData.byRole.get(name));
  const hull = role('hull'), turret = role('turret'), engine = role('engine'), tracks = role('mobility');
  assert.ok(turret.min.z > engine.max.z + 0.1, `turret bustle must clear the engine deck (${turret.min.z.toFixed(2)} vs ${engine.max.z.toFixed(2)})`);
  assert.ok(turret.min.y <= hull.max.y + 0.02, 'turret ring should meet the hull roof');
  assert.ok(turret.max.y > hull.max.y + 0.5, 'turret should stand above the hull');
  assert.ok(tracks.min.y > -0.02 && tracks.min.y < 0.02, `running gear should rest on y = 0 (${tracks.min.y.toFixed(3)})`);
  assert.ok(tracks.max.x > hull.max.x - 0.15, 'tracks should reach the sponson line');
  assert.ok(box.min.y > -0.1, 'nothing may sink into the ground');
  for (const [id, group] of model.userData.parts) {
    let partTriangles = 0;
    group.traverse(object => { if (object.isMesh) partTriangles += (object.geometry.index ? object.geometry.index.count : object.geometry.attributes.position.count) / 3; });
    assert.ok(partTriangles < 9000, `${id} spends ${Math.round(partTriangles)} triangles`);
  }
});
