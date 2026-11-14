import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PARTS } from '../mode/catalog.mjs';

// Procedural tank proxy. Every dimension is derived from the catalog part boxes so the
// model always matches the blueprint that is being evaluated; only the silhouette is art.
const PALETTES = {
  player: { hull: '#65714c', hullDark: '#4d5839', accent: '#b0b871', metal: '#3a4038', rubber: '#1b201e', track: '#474d44', glass: '#16242b' },
  enemy: { hull: '#8b7550', hullDark: '#6e5c3e', accent: '#b4543a', metal: '#443f34', rubber: '#221f1a', track: '#514a3c', glass: '#1d2a2e' },
  guard: { hull: '#715d48', hullDark: '#5a4937', accent: '#c24a32', metal: '#403a31', rubber: '#211e1a', track: '#4a4237', glass: '#1b272b' },
  wreck: { hull: '#3b3833', hullDark: '#2c2a26', accent: '#4a3a2c', metal: '#2b2925', rubber: '#171614', track: '#2e2c27', glass: '#121718' }
};

function createMaterials(faction = 'player', variant = 0) {
  const palette = PALETTES[faction] || PALETTES.player;
  const tint = (hex, lightness = 0) => new THREE.Color(hex).offsetHSL(variant * 0.014, 0, lightness + variant * 0.012);
  const standard = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness: 0.32, roughness: 0.62, flatShading: true, ...extra });
  return {
    hull: standard(tint(palette.hull)),
    hullDark: standard(tint(palette.hullDark, -0.02)),
    accent: standard(tint(palette.accent)),
    metal: standard(tint(palette.metal), { metalness: 0.66, roughness: 0.44 }),
    barrel: new THREE.MeshStandardMaterial({ color: tint(palette.metal).offsetHSL(0, 0, -0.03), metalness: 0.72, roughness: 0.36 }),
    rubber: new THREE.MeshStandardMaterial({ color: palette.rubber, metalness: 0.06, roughness: 0.92 }),
    track: standard(tint(palette.track), { metalness: 0.58, roughness: 0.5 }),
    glass: new THREE.MeshStandardMaterial({ color: palette.glass, metalness: 0.82, roughness: 0.16 }),
    lamp: new THREE.MeshStandardMaterial({ color: '#ffe8bd', emissive: '#ffc46e', emissiveIntensity: 0.9, roughness: 0.3 }),
    soot: new THREE.MeshStandardMaterial({ color: '#151515', metalness: 0.2, roughness: 1 }),
    rust: new THREE.MeshStandardMaterial({ color: '#6b3f2a', metalness: 0.25, roughness: 0.9 })
  };
}

function mesh(group, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0]) {
  const object = new THREE.Mesh(geometry, material);
  object.position.set(...position);
  object.rotation.set(...rotation);
  object.castShadow = true;
  object.receiveShadow = true;
  group.add(object);
  return object;
}
function box(group, material, size, position, rotation) {
  return mesh(group, new THREE.BoxGeometry(...size), material, position, rotation);
}
function cylinder(group, material, radiusTop, radiusBottom, height, segments, position, rotation) {
  return mesh(group, new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material, position, rotation);
}
// Extrudes a side profile (z, y) across the part width; used for sloped hull and turret shells.
function profile(group, material, points, width, { bevel = 0.03, position = [0, 0, 0], rotation = [0, 0, 0] } = {}) {
  const shapePoints = points.map(([z, y]) => new THREE.Vector2(-z, y));
  let area = 0;
  for (let index = 0; index < shapePoints.length; index++) {
    const a = shapePoints[index], b = shapePoints[(index + 1) % shapePoints.length];
    area += a.x * b.y - b.x * a.y;
  }
  if (area < 0) shapePoints.reverse();
  const geometry = new THREE.ExtrudeGeometry(new THREE.Shape(shapePoints), {
    depth: width, bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 1, steps: 1, curveSegments: 1
  });
  geometry.rotateY(Math.PI / 2);
  geometry.translate(-width / 2, 0, 0);
  geometry.computeVertexNormals();
  return mesh(group, geometry, material, position, rotation);
}
function collectMerged(root) {
  root.updateMatrixWorld(true);
  const inverse = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const meshes = [];
  root.traverse(object => { if (object.isMesh && !object.isInstancedMesh) meshes.push(object); });
  const buckets = new Map();
  for (const object of meshes) {
    let geometry = object.geometry.clone();
    if (geometry.index) geometry = geometry.toNonIndexed();
    for (const name of Object.keys(geometry.attributes)) if (!['position', 'normal', 'uv'].includes(name)) geometry.deleteAttribute(name);
    if (!geometry.attributes.normal) geometry.computeVertexNormals();
    geometry.clearGroups();
    geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, object.matrixWorld));
    const list = buckets.get(object.material) || [];
    list.push(geometry);
    buckets.set(object.material, list);
  }
  for (const object of meshes) { object.removeFromParent(); object.geometry.dispose(); }
  return buckets;
}
function addMerged(root, buckets, partId) {
  for (const [material, geometries] of buckets) {
    const merged = mergeGeometries(geometries, false);
    geometries.forEach(geometry => geometry.dispose());
    if (!merged) continue;
    const object = new THREE.Mesh(merged, material);
    object.castShadow = true;
    object.receiveShadow = true;
    object.userData.partId = partId || null;
    root.add(object);
  }
}
function mergePart(partGroup) {
  addMerged(partGroup, collectMerged(partGroup), partGroup.userData.partId);
}
function mergeWhole(tankGroup) {
  addMerged(tankGroup, collectMerged(tankGroup), null);
  for (const child of [...tankGroup.children]) if (child.isGroup && child.children.length === 0) child.removeFromParent();
}

// ---------------------------------------------------------------- hull
function buildHull(group, mats) {
  const [width, height, depth] = PARTS.hull.size;
  const hw = width / 2, hh = height / 2, hd = depth / 2;
  profile(group, mats.hull, [
    [-hd, -hh], [hd, -hh], [hd, -hh + 0.34], [hd - 0.62, hh], [-hd + 0.38, hh], [-hd, hh - 0.26]
  ], width, { bevel: 0.035 });
  // Glacis applique plate, aligned with the front slope.
  const slopeLength = Math.hypot(0.62, hh - (-hh + 0.34));
  const angle = Math.atan2(0.62, hh - (-hh + 0.34));
  const normal = new THREE.Vector3(0, Math.cos(angle), Math.sin(angle));
  const tangent = new THREE.Vector3(0, -Math.sin(angle), Math.cos(angle));
  const origin = new THREE.Vector3(0, (-hh + 0.34 + hh) / 2, hd - 0.31);
  const at = (x, up, along) => [origin.x + x, origin.y + normal.y * up + tangent.y * along, origin.z + normal.z * up + tangent.z * along];
  mesh(group, new THREE.BoxGeometry(width - 0.34, 0.06, slopeLength - 0.04), mats.hullDark, at(0, 0.045, 0), [angle, 0, 0]);
  for (const x of [-1.1, -0.55, 0, 0.55, 1.1]) {
    cylinder(group, mats.metal, 0.045, 0.045, 0.06, 6, at(x, 0.085, slopeLength / 2 - 0.12), [angle + Math.PI / 2, 0, 0]);
    cylinder(group, mats.metal, 0.045, 0.045, 0.06, 6, at(x, 0.085, -slopeLength / 2 + 0.12), [angle + Math.PI / 2, 0, 0]);
  }
  // Lower front plate, tow hooks and headlights.
  box(group, mats.hullDark, [width - 0.3, 0.4, 0.08], [0, -hh + 0.2, hd - 0.02]);
  for (const x of [-0.95, 0.95]) {
    box(group, mats.metal, [0.2, 0.14, 0.18], [x, -hh + 0.12, hd + 0.04]);
    box(group, mats.hullDark, [0.3, 0.26, 0.14], [x, -0.02, hd + 0.01]);
    cylinder(group, mats.lamp, 0.095, 0.095, 0.1, 10, [x, -0.02, hd + 0.09], [Math.PI / 2, 0, 0]);
    box(group, mats.metal, [0.26, 0.03, 0.12], [x, 0.12, hd + 0.1]);
  }
  // Driver hatch, periscopes, spare track links.
  cylinder(group, mats.hullDark, 0.29, 0.29, 0.07, 12, at(-0.62, 0.075, 0.35), [angle, 0, 0]);
  box(group, mats.glass, [0.2, 0.07, 0.1], at(-0.62, 0.14, 0.58), [angle, 0, 0]);
  for (let index = 0; index < 3; index++) {
    box(group, mats.track, [0.24, 0.05, 0.42], at(0.75, 0.1, 0.5 - index * 0.44), [angle, 0, 0]);
  }
  // Fenders and side stowage over the tracks.
  for (const side of [-1, 1]) {
    box(group, mats.hullDark, [0.7, 0.06, 5.3], [side * 1.68, -hh + 0.08, -0.05]);
    box(group, mats.hull, [0.05, 0.26, 4.9], [side * 2.0, -hh + 0.22, -0.05]);
    box(group, mats.hullDark, [0.3, 0.34, 1.5], [side * 1.78, -hh + 0.3, -1.7]);
    box(group, mats.metal, [0.22, 0.04, 0.5], [side * 1.78, -hh + 0.48, -1.7]);
    // Pioneer tools lie along the fender.
    cylinder(group, mats.rust, 0.035, 0.035, 1.1, 6, [side * 1.82, -hh + 0.2, 1.5], [Math.PI / 2, 0, 0]);
    box(group, mats.metal, [0.12, 0.24, 0.2], [side * 1.82, -hh + 0.24, 1.05]);
    // Rear mud flap.
    box(group, mats.rubber, [0.62, 0.4, 0.05], [side * 1.72, -hh - 0.02, -2.7]);
  }
  // Rear plate details and roof deck.
  box(group, mats.hullDark, [width - 0.6, 0.5, 0.06], [0, -0.06, -hd - 0.02]);
  box(group, mats.metal, [0.5, 0.16, 0.12], [0, -0.32, -hd - 0.06]);
  box(group, mats.hullDark, [width - 0.5, 0.06, 1.1], [0, hh - 0.02, 2.2]);
  for (const x of [-0.85, 0.85]) box(group, mats.metal, [0.12, 0.1, 0.12], [x, hh + 0.04, 2.5]);
  // Grab handles and a stowed tow cable along the rear deck.
  for (const x of [-1.35, 1.35]) box(group, mats.metal, [0.05, 0.05, 0.8], [x, hh + 0.05, 0.6]);
  mesh(group, new THREE.TorusGeometry(0.5, 0.045, 6, 18, Math.PI), mats.rust, [0, hh + 0.06, -1.2], [0, 0, 0]);
}

// ---------------------------------------------------------------- running gear
function trackLinkTransforms(length, height, radius, count) {
  const straight = length - radius * 2;
  const arc = Math.PI * radius;
  const perimeter = straight * 2 + arc * 2;
  const transforms = [];
  for (let index = 0; index < count; index++) {
    let distance = (index / count) * perimeter;
    let z, y, angle;
    if (distance < straight) { z = -straight / 2 + distance; y = -height / 2; angle = 0; }
    else if ((distance -= straight) < arc) { const t = distance / radius; z = straight / 2 + Math.sin(t) * radius; y = -height / 2 + radius - Math.cos(t) * radius; angle = t; }
    else if ((distance -= arc) < straight) { z = straight / 2 - distance; y = height / 2; angle = Math.PI; }
    else { distance -= straight; const t = distance / radius; z = -straight / 2 - Math.sin(t) * radius; y = height / 2 - radius + Math.cos(t) * radius; angle = Math.PI + t; }
    transforms.push({ z, y, angle });
  }
  return transforms;
}
function buildTracks(group, mats) {
  const [width, height, depth] = PARTS.tracks.size;
  const halfHeight = height / 2;
  const sideOffset = width / 2 - 0.32;
  const bandLength = depth - 0.5;
  const bandHeight = height - 0.12;
  const bandCenter = -0.06;
  const radius = 0.3;
  const links = trackLinkTransforms(bandLength, bandHeight, radius, 54);
  for (const side of [-1, 1]) {
    const x = side * sideOffset;
    // Track band: merged links, one mesh per side.
    const geometries = links.map(link => {
      const geometry = new THREE.BoxGeometry(0.52, 0.07, 0.17);
      geometry.rotateX(link.angle);
      geometry.translate(x, link.y + bandCenter, link.z);
      return geometry;
    });
    const band = mergeGeometries(geometries, false);
    geometries.forEach(geometry => geometry.dispose());
    if (band) mesh(group, band, mats.track);
    // Road wheels.
    for (const z of [-1.9, -0.95, 0, 0.95, 1.9]) {
      cylinder(group, mats.rubber, 0.24, 0.24, 0.2, 14, [x, -halfHeight + 0.24, z], [0, 0, Math.PI / 2]);
      cylinder(group, mats.metal, 0.12, 0.12, 0.24, 10, [x, -halfHeight + 0.24, z], [0, 0, Math.PI / 2]);
      box(group, mats.hullDark, [0.12, 0.1, 0.5], [x - side * 0.12, -halfHeight + 0.3, z]);
    }
    // Drive sprocket with teeth, idler and return rollers.
    const sprocketZ = bandLength / 2 - radius;
    cylinder(group, mats.metal, 0.3, 0.3, 0.2, 12, [x, -0.02, sprocketZ], [0, 0, Math.PI / 2]);
    cylinder(group, mats.hullDark, 0.13, 0.13, 0.26, 8, [x, -0.02, sprocketZ], [0, 0, Math.PI / 2]);
    for (let index = 0; index < 8; index++) {
      const angle = (index / 8) * Math.PI * 2;
      box(group, mats.metal, [0.22, 0.1, 0.09], [x, -0.02 + Math.cos(angle) * 0.31, sprocketZ + Math.sin(angle) * 0.31], [angle, 0, 0]);
    }
    cylinder(group, mats.metal, 0.27, 0.27, 0.2, 12, [x, -0.02, -sprocketZ], [0, 0, Math.PI / 2]);
    cylinder(group, mats.hullDark, 0.12, 0.12, 0.24, 8, [x, -0.02, -sprocketZ], [0, 0, Math.PI / 2]);
    for (const z of [-1.5, 0, 1.5]) cylinder(group, mats.rubber, 0.1, 0.1, 0.18, 8, [x, bandCenter + bandHeight / 2 - 0.07, z], [0, 0, Math.PI / 2]);
    // Top fender rail and side skirt.
    box(group, mats.hullDark, [0.56, 0.05, depth - 0.3], [x, halfHeight - 0.03, 0]);
    box(group, mats.hull, [0.05, 0.18, depth - 0.8], [x + side * 0.27, halfHeight - 0.16, 0]);
    // Front and rear track guards.
    box(group, mats.hullDark, [0.6, 0.12, 0.4], [x, -0.06, depth / 2 - 0.12]);
    box(group, mats.hullDark, [0.6, 0.12, 0.3], [x, -0.06, -depth / 2 + 0.12]);
  }
}

// ---------------------------------------------------------------- engine
function buildEngine(group, mats) {
  const [width, height, depth] = PARTS.engine.size;
  const hh = height / 2;
  box(group, mats.hullDark, [width, height * 0.55, depth], [0, -hh + height * 0.28, 0]);
  for (let index = 0; index < 6; index++) {
    box(group, mats.metal, [width - 0.24, 0.035, 0.09], [0, -hh + height * 0.57, -depth / 2 + 0.18 + index * 0.24]);
  }
  box(group, mats.hull, [width - 0.2, 0.3, 0.28], [0, -hh + height * 0.72, -depth / 2 + 0.2]);
  for (const x of [-0.48, 0.48]) {
    cylinder(group, mats.metal, 0.075, 0.075, 0.72, 8, [x, -hh + height * 0.78, -depth / 2 + 0.2], [0.22, 0, 0]);
    cylinder(group, mats.soot, 0.085, 0.07, 0.12, 8, [x, -hh + height * 0.78 + 0.34, -depth / 2 + 0.28], [0.22, 0, 0]);
  }
  cylinder(group, mats.metal, 0.24, 0.24, 0.07, 14, [0, -hh + height * 0.6, 0.2]);
  for (let index = 0; index < 8; index++) {
    const angle = (index / 8) * Math.PI * 2;
    box(group, mats.metal, [0.05, 0.05, 0.2], [Math.cos(angle) * 0.15, -hh + height * 0.62, 0.2 + Math.sin(angle) * 0.15], [0, angle, 0]);
  }
  for (const x of [-0.5, 0.5]) cylinder(group, mats.hull, 0.1, 0.1, 0.05, 8, [x, -hh + height * 0.58, depth / 2 - 0.2]);
  box(group, mats.hull, [0.36, 0.16, 0.5], [width / 2 - 0.05, -hh + height * 0.45, -0.2]);
}

// ---------------------------------------------------------------- turret
function buildTurret(group, mats) {
  const [width, height, depth] = PARTS.turret.size;
  const hh = height / 2, hd = depth / 2;
  cylinder(group, mats.hullDark, 1.06, 1.12, 0.14, 16, [0, -hh + 0.05, 0]);
  profile(group, mats.hull, [
    [-hd + 0.45, -hh], [hd - 0.35, -hh], [hd - 0.35, -hh + 0.2], [hd - 0.8, hh], [-hd + 0.65, hh], [-hd + 0.45, hh - 0.24]
  ], width, { bevel: 0.05 });
  // Bustle over the engine deck.
  box(group, mats.hullDark, [width * 0.78, height * 0.52, 0.72], [0, hh * 0.42, -hd - 0.02]);
  box(group, mats.hull, [width * 0.78, 0.06, 0.7], [0, hh * 0.42 + height * 0.26, -hd - 0.02]);
  // Mantlet and canvas cover around the gun root.
  box(group, mats.hullDark, [1.0, 0.6, 0.55], [0, -0.02, hd - 0.42]);
  cylinder(group, mats.rubber, 0.27, 0.24, 0.34, 12, [0, -0.02, hd - 0.12], [Math.PI / 2, 0, 0]);
  // Commander cupola, hatch, periscopes and AA machine gun.
  cylinder(group, mats.hull, 0.34, 0.37, 0.24, 12, [-0.5, hh + 0.1, -0.2]);
  cylinder(group, mats.hullDark, 0.3, 0.3, 0.06, 12, [-0.5, hh + 0.24, -0.2]);
  for (let index = 0; index < 4; index++) {
    const angle = (index / 4) * Math.PI * 2 + Math.PI / 4;
    box(group, mats.glass, [0.16, 0.09, 0.06], [-0.5 + Math.cos(angle) * 0.3, hh + 0.16, -0.2 + Math.sin(angle) * 0.3], [0, -angle, 0]);
  }
  cylinder(group, mats.metal, 0.035, 0.035, 0.5, 6, [-0.5, hh + 0.45, -0.28], [0, 0, Math.PI / 2]);
  box(group, mats.metal, [0.22, 0.14, 0.26], [-0.68, hh + 0.4, -0.2]);
  box(group, mats.metal, [0.06, 0.06, 0.5], [-0.42, hh + 0.47, 0.02]);
  // Loader hatch, gunner sight, lifting eyes.
  cylinder(group, mats.hullDark, 0.28, 0.28, 0.06, 12, [0.55, hh + 0.03, -0.55]);
  box(group, mats.hullDark, [0.3, 0.2, 0.42], [0.36, hh + 0.12, 0.5]);
  box(group, mats.glass, [0.22, 0.1, 0.06], [0.36, hh + 0.14, 0.71]);
  for (const x of [-0.9, 0.9]) box(group, mats.metal, [0.1, 0.1, 0.16], [x, hh + 0.02, -0.9]);
  // Smoke launchers.
  for (const side of [-1, 1]) for (let index = 0; index < 2; index++) {
    cylinder(group, mats.metal, 0.055, 0.055, 0.3, 8, [side * (0.86 + index * 0.13), 0.06, hd - 0.62], [Math.PI / 2 - 0.35, 0, 0]);
  }
  // Antenna and rear stowage.
  cylinder(group, mats.metal, 0.05, 0.06, 0.16, 6, [-1.02, hh + 0.02, -hd + 0.55]);
  cylinder(group, mats.metal, 0.012, 0.012, 1.7, 4, [-1.04, hh + 0.85, -hd + 0.55], [0.05, 0, 0.04]);
  box(group, mats.hullDark, [width * 0.72, 0.05, 0.06], [0, hh * 0.1, -hd - 0.36]);
  for (const x of [-0.85, 0.85]) box(group, mats.hullDark, [0.05, 0.3, 0.05], [x, hh * 0.2, -hd - 0.36]);
  cylinder(group, mats.rubber, 0.11, 0.11, 1.3, 8, [0.55, hh * 0.2, -hd - 0.32], [0, 0, Math.PI / 2]);
  // Spare track links and a stencilled side plate.
  for (let index = 0; index < 3; index++) box(group, mats.track, [0.06, 0.2, 0.44], [width / 2 - 0.02, -0.05, -0.6 + index * 0.5]);
  box(group, mats.accent, [0.02, 0.22, 0.34], [width / 2 - 0.04, 0.12, 0.4]);
}

// ---------------------------------------------------------------- weapons
function buildCannon(group, mats) {
  const z = (local, extra = 0) => [0, extra, local];
  cylinder(group, mats.barrel, 0.08, 0.08, 4.1, 12, z(0.05), [Math.PI / 2, 0, 0]);
  cylinder(group, mats.metal, 0.15, 0.15, 1.05, 12, z(-0.9), [Math.PI / 2, 0, 0]);
  cylinder(group, mats.barrel, 0.125, 0.125, 0.42, 12, z(0.55), [Math.PI / 2, 0, 0]);
  for (const local of [-1.5, -0.35, 1.05]) cylinder(group, mats.metal, 0.1, 0.1, 0.07, 12, z(local), [Math.PI / 2, 0, 0]);
  box(group, mats.metal, [0.34, 0.26, 0.44], [0, 0, 2.06]);
  for (const side of [-1, 1]) box(group, mats.metal, [0.05, 0.14, 0.3], [side * 0.16, 0, 2.06]);
  box(group, mats.hullDark, [0.5, 0.46, 0.7], [0, 0, -1.72]);
  cylinder(group, mats.metal, 0.045, 0.045, 0.9, 8, [0.36, 0.14, 0.1], [Math.PI / 2, 0, 0]);
  box(group, mats.metal, [0.1, 0.1, 0.12], [0.36, 0.14, 0.58]);
}
function buildRapid(group, mats) {
  for (const x of [-0.14, 0.14]) for (const y of [-0.14, 0.14]) {
    cylinder(group, mats.barrel, 0.045, 0.045, 2.7, 10, [x, y, 0.1], [Math.PI / 2, 0, 0]);
    cylinder(group, mats.metal, 0.07, 0.07, 0.22, 10, [x, y, 1.35], [Math.PI / 2, 0, 0]);
  }
  box(group, mats.hullDark, [0.58, 0.54, 0.95], [0, 0, -0.92]);
  cylinder(group, mats.metal, 0.3, 0.3, 0.5, 12, [0, 0.28, -0.9], [0, 0, Math.PI / 2]);
  box(group, mats.metal, [0.3, 0.08, 0.6], [0, -0.3, -0.5]);
  cylinder(group, mats.metal, 0.05, 0.05, 0.7, 8, [0, 0.02, -1.5], [Math.PI / 2, 0, 0]);
}
function buildBomb(group, mats) {
  box(group, mats.hullDark, [1.2, 0.86, 1.5], [0, 0, -0.2]);
  for (const x of [-0.34, 0, 0.34]) for (const y of [-0.22, 0.22]) {
    cylinder(group, mats.metal, 0.13, 0.13, 0.34, 12, [x, y, 0.6], [Math.PI / 2, 0, 0]);
    cylinder(group, mats.soot, 0.1, 0.1, 0.06, 12, [x, y, 0.78], [Math.PI / 2, 0, 0]);
    cylinder(group, mats.rust, 0.09, 0.05, 0.3, 10, [x, y, 0.9], [Math.PI / 2, 0, 0]);
  }
  box(group, mats.metal, [1.24, 0.1, 0.3], [0, 0.42, -0.7]);
  box(group, mats.hull, [0.9, 0.3, 0.4], [0, -0.52, -0.4]);
  box(group, mats.metal, [0.08, 0.7, 0.5], [0.62, -0.1, -0.5]);
}
function buildMortar(group, mats) {
  cylinder(group, mats.metal, 0.5, 0.54, 0.08, 14, [0, -0.44, 0.1]);
  cylinder(group, mats.barrel, 0.11, 0.13, 2.3, 12, [0, 0.32, 0.58], [0.4, 0, 0]);
  cylinder(group, mats.metal, 0.16, 0.16, 0.3, 12, [0, -0.08, 0.34], [0.4, 0, 0]);
  for (const side of [-1, 1]) {
    cylinder(group, mats.metal, 0.035, 0.035, 1.1, 6, [side * 0.34, 0.12, 0.2], [0.15, 0, side * 0.55]);
    box(group, mats.metal, [0.12, 0.06, 0.12], [side * 0.2, -0.4, 0.02]);
  }
  box(group, mats.hullDark, [0.26, 0.2, 0.3], [-0.36, 0.2, 0.28]);
  box(group, mats.glass, [0.06, 0.12, 0.2], [-0.5, 0.26, 0.3]);
  for (const x of [-0.3, -0.1]) {
    cylinder(group, mats.rust, 0.07, 0.07, 0.3, 8, [x, -0.34, -0.55], [Math.PI / 2, 0, 0]);
    cylinder(group, mats.metal, 0.075, 0.075, 0.06, 8, [x, -0.34, -0.4], [Math.PI / 2, 0, 0]);
  }
}

// ---------------------------------------------------------------- armour
function buildArmor(group, mats) {
  const [width, height, depth] = PARTS.armor.size;
  profile(group, mats.hullDark, [
    [-depth / 2, -height / 2], [depth / 2, -height / 2], [depth / 2, height / 2], [-depth / 2, height / 2]
  ], width, { bevel: 0.02 });
  for (const x of [-width * 0.36, 0, width * 0.36]) for (const y of [-height * 0.3, height * 0.3]) {
    cylinder(group, mats.metal, 0.05, 0.05, 0.08, 6, [x, y, depth / 2 + 0.02], [Math.PI / 2, 0, 0]);
  }
  for (const y of [-height * 0.42, height * 0.42]) box(group, mats.hull, [width * 0.92, 0.06, depth + 0.03], [0, y, 0]);
  box(group, mats.accent, [width * 0.4, 0.02, 0.12], [0, 0, depth / 2 + 0.05]);
}

const BUILDERS = { hull: buildHull, mobility: buildTracks, engine: buildEngine, turret: buildTurret, armor: buildArmor };

export function buildTankModel(blueprint, { faction = 'player', variant = 0, merged = false, whole = false } = {}) {
  const group = new THREE.Group();
  group.name = 'tank';
  const materials = createMaterials(faction, variant);
  const parts = new Map(), byRole = new Map();
  for (const item of blueprint.parts) {
    const part = PARTS[item.partId];
    if (!part) continue;
    const partGroup = new THREE.Group();
    partGroup.name = item.id;
    partGroup.userData.partId = item.id;
    partGroup.userData.partRole = part.role;
    partGroup.userData.partName = part.name;
    partGroup.userData.partSize = part.size;
    partGroup.position.set(...item.position);
    partGroup.rotation.y = item.yaw;
    const builder = BUILDERS[part.role] || (part.role === 'weapon'
      ? { cannon: buildCannon, rapid: buildRapid, bomb: buildBomb, mortar: buildMortar }[item.partId] || buildCannon
      : (group, mats) => box(group, mats.hullDark, part.size, [0, 0, 0]));
    builder(partGroup, materials, { part, item, blueprint });
    if (merged && !whole) mergePart(partGroup);
    group.add(partGroup);
    parts.set(item.id, partGroup);
    byRole.set(part.role, partGroup);
  }
  if (whole) mergeWhole(group);
  group.userData.parts = whole ? new Map() : parts;
  group.userData.byRole = whole ? new Map() : byRole;
  group.userData.materials = materials;
  group.userData.faction = faction;
  return group;
}

export function tankBounds(model) {
  return new THREE.Box3().setFromObject(model);
}
