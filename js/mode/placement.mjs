import { PARTS, BALANCE } from './catalog.mjs';
import { boundsOf, validateBlueprint } from './evaluation.mjs';

const ALL_PARTS = Object.keys(PARTS);
const roundTo = (value, grid) => Math.round(value / grid) * grid;

export function snapValue(value, grid = BALANCE.snapGrid) {
  return Number(roundTo(value, grid).toFixed(4));
}
export function snapPosition(position, grid = BALANCE.snapGrid) {
  return position.map(value => snapValue(value, grid));
}
// Separating distance between two axis-aligned boxes; 0 means touching or overlapping.
export function boxGap(a, b) {
  return Math.max(...a.min.map((value, axis) => Math.max(value - b.max[axis], b.min[axis] - a.max[axis])));
}
export function findPart(blueprint, id) {
  return blueprint.parts.find(item => item.id === id) || null;
}
export function descendantsOf(blueprint, id) {
  const found = new Set([id]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const item of blueprint.parts) {
      if (item.parentId && found.has(item.parentId) && !found.has(item.id)) { found.add(item.id); changed = true; }
    }
  }
  return found;
}
// Closest part that can own the moved part without creating a cycle.
export function nearestAttachment(blueprint, itemId, position, maxGap = .3) {
  const item = findPart(blueprint, itemId);
  if (!item) return null;
  const box = boundsOf({ ...item, position });
  const blocked = descendantsOf(blueprint, itemId);
  let best = null;
  for (const other of blueprint.parts) {
    if (other.id === itemId || blocked.has(other.id)) continue;
    const gap = boxGap(box, boundsOf(other));
    if (gap <= maxGap && (!best || gap < best.gap)) best = { id: other.id, gap };
  }
  return best;
}

function hullContext(blueprint) {
  const hull = blueprint.parts.find(item => PARTS[item.partId].role === 'hull');
  if (!hull) return null;
  const turret = blueprint.parts.find(item => PARTS[item.partId].role === 'turret');
  return { hull, box: boundsOf(hull), turret, turretBox: turret ? boundsOf(turret) : null };
}
// Ordered candidate placements for a new part, from most conventional to fallbacks.
export function placementCandidates(blueprint, partId) {
  const part = PARTS[partId];
  if (!part) throw new Error('未知部件');
  const context = hullContext(blueprint);
  if (!context) return [{ position: [0, 1.4, 0], yaw: 0, parentId: null }];
  const { hull, box, turret, turretBox } = context;
  const [width, height, depth] = part.size;
  const candidates = [];
  const push = (position, parentId = hull.id, yaw = 0) => candidates.push({ position: position.map(value => Number(value.toFixed(3))), yaw, parentId });
  if (part.role === 'hull') {
    push([0, 1.4, 0], null);
  } else if (part.role === 'mobility') {
    push([0, Math.max(height / 2, box.min[1] - height / 2), 0]);
    push([0, Math.max(height / 2, box.min[1] - height / 2), box.min[2] + depth / 2]);
  } else if (part.role === 'engine') {
    const y = box.max[1] + height / 2;
    push([0, y, box.min[2] + depth / 2], hull.id);
    push([0, y, box.min[2] + depth / 2 + .2], hull.id);
  } else if (part.role === 'turret') {
    const y = box.max[1] + height / 2;
    push([0, y, (box.min[2] + box.max[2]) / 2 + (box.max[2] - box.min[2]) * .06], hull.id);
    push([0, y, (box.min[2] + box.max[2]) / 2], hull.id);
    push([0, y, box.max[2] - depth / 2], hull.id);
  } else if (part.role === 'armor') {
    const y = box.min[1] + height / 2;
    push([0, y, box.max[2] + depth / 2 + .05], hull.id);
    push([box.max[0] + depth / 2 + .05, y, 0], hull.id, Math.PI / 2);
    push([box.min[0] - depth / 2 - .05, y, 0], hull.id, Math.PI / 2);
    push([0, y, box.min[2] - depth / 2 - .05], hull.id);
  } else if (part.role === 'weapon') {
    const mountY = turret ? turretBox.min[1] + height / 2 + .05 : box.max[1] - height / 2;
    const front = turret ? turretBox.max[2] : box.max[2];
    const parent = turret ? turret.id : hull.id;
    for (const offset of [0, 1.05, -1.05]) push([offset, mountY, front + depth / 2 + .05], parent);
    // Fourth weapon: roof mount, clear of the three frontal hardpoints.
    push([0, turret ? turretBox.max[1] + height / 2 + .05 : box.max[1] + height / 2, turret ? (turretBox.min[2] + turretBox.max[2]) / 2 : 0], parent);
    if (!turret) push([0, box.max[1] - height / 2, box.max[2] + depth / 2 + .05], hull.id);
  } else {
    push([0, box.max[1] + height / 2, 0], hull.id);
  }
  return candidates;
}
// First structurally valid candidate, otherwise the first suggestion (shown with errors).
export function suggestPlacement(blueprint, partId, id) {
  const candidates = placementCandidates(blueprint, partId);
  for (const candidate of candidates) {
    const item = { id, partId, parentId: candidate.parentId, position: [...candidate.position], yaw: candidate.yaw };
    const probe = { ...blueprint, parts: [...blueprint.parts, item] };
    if (validateBlueprint(probe, ALL_PARTS).length === 0) return { ...candidate, position: [...candidate.position], parentId: candidate.parentId };
  }
  return candidates[0];
}
// Grid snapping plus automatic re-parenting while dragging in the 3D workshop.
export function moveCandidate(blueprint, itemId, position, { grid = BALANCE.snapGrid, attach = true } = {}) {
  const item = findPart(blueprint, itemId);
  if (!item) return null;
  const snapped = grid ? snapPosition(position, grid) : position.slice(0, 3);
  const limited = snapped.map(value => Math.max(-BALANCE.maxExtent, Math.min(BALANCE.maxExtent, value)));
  const attachment = attach ? nearestAttachment(blueprint, itemId, limited) : null;
  return { position: limited, parentId: attachment ? attachment.id : item.parentId, gap: attachment?.gap ?? null };
}
