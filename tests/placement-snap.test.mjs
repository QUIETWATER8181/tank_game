import test from 'node:test';
import assert from 'node:assert/strict';
import { createStarterBlueprint, snapPlacement, moveCandidate, validateBlueprint, PARTS, boundsOf, BALANCE } from '../js/mode/index.mjs';

const gapTo = (blueprint, id, position) => {
  const item = blueprint.parts.find(part => part.id === id);
  const parent = blueprint.parts.find(part => part.id === item.parentId);
  const a = boundsOf({ ...item, position }), b = boundsOf(parent);
  return Math.max(...a.min.map((value, axis) => Math.max(value - b.max[axis], b.min[axis] - a.max[axis])));
};

test('dropping a part snaps it onto the grid and onto its neighbour', () => {
  const blueprint = createStarterBlueprint();
  const target = [0.37, 2.44, 3.62];
  const snapped = snapPlacement(blueprint, 'weapon', target);
  for (const value of snapped) assert.ok(Math.abs(value * 10 - Math.round(value * 10)) < 1e-6, `${value} is off the grid`);
  const moved = moveCandidate(blueprint, 'weapon', snapped, { grid: null });
  const probe = { ...blueprint, parts: blueprint.parts.map(part => part.id === 'weapon' ? { ...part, position: moved.position, parentId: moved.parentId } : part) };
  assert.deepEqual(validateBlueprint(probe, Object.keys(PARTS)), []);
  assert.equal(moved.parentId, 'turret', 'the gun must stay on its turret');
  assert.ok(gapTo({ ...blueprint, parts: probe.parts }, 'weapon', snapped) <= BALANCE.contactTolerance + 1e-6, 'drop did not close the gap');
});

test('a part dropped in open air keeps its grid position instead of teleporting', () => {
  const blueprint = createStarterBlueprint();
  const target = [12.04, 0.06, -8.02];
  const snapped = snapPlacement(blueprint, 'weapon', target);
  assert.deepEqual(snapped, [12, 0.1, -8]);
});

test('free dragging is not quantised, dropping is', () => {
  const blueprint = createStarterBlueprint();
  const free = moveCandidate(blueprint, 'weapon', [1.234, 2.345, 3.456], { grid: null });
  assert.deepEqual(free.position, [1.234, 2.345, 3.456]);
  const snapped = snapPlacement(blueprint, 'weapon', [1.234, 2.345, 3.456]);
  assert.notDeepEqual(snapped, free.position);
});
