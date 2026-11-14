import test from 'node:test';
import assert from 'node:assert/strict';
import { FixedStepper } from '../js/three/stepper.mjs';
import { disposeObject } from '../js/three/resources.mjs';

test('simulation gives the same ticks at 30, 60 and 144 render FPS', () => {
  for (const fps of [30, 60, 144]) {
    const clock = new FixedStepper(); let ticks = 0;
    for (let frame = 0; frame < fps * 10; frame++) clock.advance(1 / fps, dt => { assert.equal(dt, 1 / 60); ticks++; });
    assert.equal(ticks, 600);
  }
});
test('long stalls have bounded catch-up and reset removes leftover time', () => {
  const clock = new FixedStepper(); let ticks = 0;
  clock.advance(120, () => ticks++); assert.equal(ticks, 5);
  clock.advance(0.008, () => ticks++); clock.reset();
  clock.advance(0.009, () => ticks++); assert.equal(ticks, 5);
});
test('shared model resources are released exactly once', () => {
  const counts = { geometry: 0, material: 0, texture: 0, image: 0, removed: 0 };
  const texture = { isTexture: true, source: { data: { close: () => counts.image++ } }, dispose: () => counts.texture++ };
  const mesh = { geometry: { dispose: () => counts.geometry++ }, material: { map: texture, normalMap: texture, dispose: () => counts.material++ } };
  disposeObject({ traverse: fn => { fn(mesh); fn(mesh); }, removeFromParent: () => counts.removed++ });
  assert.deepEqual(counts, { geometry: 1, material: 1, texture: 1, image: 1, removed: 1 });
});
