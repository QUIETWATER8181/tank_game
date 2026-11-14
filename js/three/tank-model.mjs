import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PARTS } from '../mode/catalog.mjs';

// Procedural tank proxy. Every dimension is derived from the catalog part boxes so the
// model always matches the blueprint that is being evaluated; only the silhouette is art.
// Units are metres, +Y up, +Z forward, origin at the part box centre.
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
// Extrudes a side profile (z, y) across the part width; used for the sloped hull and the
// stepped cast turret. `bevel` expands the profile slightly, so stacked shells overlap.
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
// Flat cable / hose / rope run; cheaper than a chain of boxes and reads as a real line.
function tube(group, material, points, radius, segments = 16, radial = 5) {
  const curve = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
  return mesh(group, new THREE.TubeGeometry(curve, segments, radius, radial, false), material);
}
function bolt(group, material, position, rotation = [0, 0, 0], radius = 0.035, height = 0.03) {
  return cylinder(group, material, radius, radius, height, 6, position, rotation);
}
// Frame of a sloped plate: `at(x, up, along)` places details on the plate surface, where
// `up` runs along the outward normal and `along` towards `to`.
function slopeFrame(from, to) {
  const dz = to[0] - from[0], dy = to[1] - from[1];
  const length = Math.hypot(dz, dy);
  const normal = [dy / length, -dz / length];
  const angle = Math.atan2(normal[1], normal[0]);
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2];
  return {
    length, angle,
    at: (x, up, along) => [x, mid[1] + normal[1] * up - Math.sin(angle) * along, mid[0] + normal[0] * up + Math.cos(angle) * along]
  };
}
// Louvred cooling grille: slats run across X and are distributed along Z.
function grille(group, material, count, width, depth, position, rotation) {
  for (let index = 0; index < count; index++) {
    const z = position[2] + ((index + 0.5) / count - 0.5) * depth;
    box(group, material, [width, 0.03, (depth / count) * 0.62], [position[0], position[1], z], rotation);
  }
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
  const hh = height / 2, hd = depth / 2;
  // Side profile: raked glacis (~65° from horizontal), flat roof, slightly raked rear plate.
  const glacis = [hd, -hh + 0.30];
  const glacisTop = [hd - 0.42, hh];
  profile(group, mats.hull, [
    [-hd, -hh], [hd, -hh], glacis, glacisTop, [-hd + 0.54, hh], [-hd + 0.06, hh - 0.30], [-hd, -0.05]
  ], width, { bevel: 0.03 });

  const front = slopeFrame(glacis, glacisTop);
  const at = (x, up, along) => front.at(x, up, along);
  const tilt = [front.angle, 0, 0];

  // Applique plate bolted onto the glacis, with a standoff shadow line at the edges.
  mesh(group, new THREE.BoxGeometry(width - 0.46, 0.055, front.length - 0.10), mats.hullDark, at(0, 0.032, 0), tilt);
  for (const along of [front.length / 2 - 0.22, -front.length / 2 + 0.22]) {
    for (const x of [-1.16, -0.7, -0.24, 0.24, 0.7, 1.16]) bolt(group, mats.metal, at(x, 0.072, along), tilt);
  }
  // Driver's hatch, periscopes and a wiper arm. Negative `along` runs towards the roof.
  cylinder(group, mats.hullDark, 0.29, 0.29, 0.055, 14, at(-0.64, 0.068, -0.10), tilt);
  for (const x of [-0.82, -0.64, -0.46]) box(group, mats.glass, [0.13, 0.055, 0.09], at(x, 0.10, -0.46), tilt);
  box(group, mats.metal, [0.2, 0.03, 0.03], at(-0.64, 0.11, 0.10), tilt);
  // Spare track links stowed on the right of the plate.
  for (const along of [0.22, -0.22]) box(group, mats.track, [0.26, 0.05, 0.4], at(0.86, 0.075, along), tilt);
  // Hinges on the nose-side edge of the driver's hatch.
  for (const x of [-0.86, -0.42]) box(group, mats.metal, [0.16, 0.05, 0.07], at(x, 0.10, 0.16), tilt);
  // Headlights with brush guards on the fender tips, ahead of the hull side.
  for (const x of [-1.52, 1.52]) {
    box(group, mats.hullDark, [0.22, 0.24, 0.26], [x, -hh + 0.20, 2.42]);
    cylinder(group, mats.lamp, 0.085, 0.085, 0.08, 12, [x, -hh + 0.22, 2.56], [Math.PI / 2, 0, 0]);
    for (const offset of [-0.12, 0.12]) box(group, mats.metal, [0.02, 0.24, 0.02], [x + offset, -hh + 0.24, 2.56]);
    box(group, mats.metal, [0.26, 0.02, 0.02], [x, -hh + 0.37, 2.56]);
  }
  // Tow shackles and the lower front plate with a splash guard.
  for (const x of [-1.24, 1.24]) {
    cylinder(group, mats.metal, 0.07, 0.07, 0.08, 8, [x, -hh + 0.12, hd - 0.02], [Math.PI / 2, 0, 0]);
    box(group, mats.metal, [0.22, 0.05, 0.14], [x, -hh + 0.20, hd + 0.02]);
  }
  box(group, mats.hullDark, [width - 0.34, 0.34, 0.07], [0, -hh + 0.16, hd - 0.01]);
  box(group, mats.hull, [width - 0.5, 0.06, 0.16], [0, -hh + 0.35, hd + 0.03]);
  for (const x of [-0.9, 0.9]) box(group, mats.metal, [0.18, 0.12, 0.16], [x, -hh + 0.10, hd + 0.04]);
  // Belly between the track runs, so the front and rear views are not hollow.
  box(group, mats.hullDark, [2.56, 0.6, 5.3], [0, -hh - 0.22, 0.1]);

  // Fenders in three panels per side with expansion gaps, plus rubber mud flaps.
  for (const side of [-1, 1]) {
    const x = side * 1.72;
    for (const [center, length] of [[2.05, 1.5], [0.35, 1.7], [-1.5, 1.6]]) {
      box(group, mats.hullDark, [0.62, 0.055, length], [x, -hh + 0.075, center]);
    }
    // Rubber mud flaps hanging from the fender ends.
    box(group, mats.rubber, [0.6, 0.38, 0.045], [x, -hh - 0.11, -2.74]);
    box(group, mats.rubber, [0.6, 0.24, 0.045], [x, -hh - 0.04, 2.74]);
    // Stowage: a tool box and a pioneer tool set, mirrored on both sides.
    box(group, mats.hullDark, [0.34, 0.32, 1.3], [side * 1.78, -hh + 0.28, -1.55]);
    box(group, mats.metal, [0.26, 0.035, 0.42], [side * 1.78, -hh + 0.45, -1.55]);
    box(group, mats.metal, [0.03, 0.12, 0.1], [side * 1.76, -hh + 0.30, -1.05]);
    cylinder(group, mats.rust, 0.04, 0.04, 1.15, 6, [side * 1.80, -hh + 0.16, 1.45], [Math.PI / 2, 0, 0]);
    box(group, mats.metal, [0.1, 0.2, 0.22], [side * 1.80, -hh + 0.22, 1.05]);
    cylinder(group, mats.rust, 0.09, 0.09, 1.1, 8, [side * 1.80, -hh + 0.20, -0.1], [Math.PI / 2, 0, 0]);
    // Lifting eyes along the roof edge.
    for (const z of [-2.5, 2.6]) box(group, mats.metal, [0.1, 0.12, 0.16], [side * 1.42, hh + 0.02, z]);
    // Weld bead where the roof meets the side plate, plus a step under the sponson.
    box(group, mats.hullDark, [0.06, 0.03, 5.4], [side * 1.73, hh + 0.005, 0]);
    box(group, mats.metal, [0.16, 0.04, 0.5], [side * 1.78, -hh + 0.24, 2.1]);
  }
  // Weld bead across the glacis / roof joint.
  box(group, mats.hullDark, [width - 0.5, 0.03, 0.05], [0, hh + 0.005, 2.76]);
  // Spare track links bolted along the right side plate, above the fender line.
  for (const z of [-0.5, -0.05, 0.4]) box(group, mats.track, [0.05, 0.24, 0.44], [1.74, -0.18, z]);
  box(group, mats.metal, [0.03, 0.05, 1.2], [1.76, -0.02, -0.05]);
  // Grab handles welded to both side plates, above the sponson.
  for (const side of [-1, 1]) {
    for (const z of [-2.2, -1.1, 1.2, 2.3]) {
      tube(group, mats.metal, [
        [side * 1.73, 0.06, z - 0.13], [side * 1.79, 0.16, z], [side * 1.73, 0.06, z + 0.13]
      ], 0.022, 8, 4);
    }
  }
  // Tow cable run flat along the left sponson, clear of the turret ring.
  tube(group, mats.rust, [
    [-1.62, hh + 0.04, 2.3], [-1.72, hh + 0.04, 1.5], [-1.62, hh + 0.04, 0.6],
    [-1.7, hh + 0.04, -0.4], [-1.6, hh + 0.04, -1.2]
  ], 0.032, 20, 4);
  for (const z of [1.9, 0.2, -1.0]) box(group, mats.metal, [0.14, 0.05, 0.12], [-1.64, hh + 0.02, z]);

  // Rear plate: door, taillights, tow hooks and a louvred cooling grille.
  box(group, mats.hullDark, [width - 0.62, 0.42, 0.06], [0, -0.04, -hd - 0.02]);
  for (const x of [-1.16, 1.16]) {
    box(group, mats.hullDark, [0.16, 0.12, 0.05], [x, 0.16, -hd - 0.05]);
    box(group, mats.lamp, [0.09, 0.07, 0.03], [x, 0.16, -hd - 0.08]);
  }
  for (const x of [-0.72, 0.72]) box(group, mats.metal, [0.16, 0.1, 0.14], [x, -0.30, -hd - 0.05]);
  for (let index = 0; index < 5; index++) {
    box(group, mats.metal, [0.86, 0.025, 0.05], [0, 0.30 + (index - 2) * 0.07, -hd - 0.03]);
  }
  // Roof grab handles on the exposed rear deck strip.
  for (const x of [-1.3, 1.3]) box(group, mats.metal, [0.05, 0.05, 0.7], [x, hh + 0.03, 0.9]);
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
  // The link thickness sits half below the band centre, so the tank rests exactly on y = 0.
  const bandCenter = -0.025;
  const radius = 0.3;
  const links = trackLinkTransforms(bandLength, bandHeight, radius, 64);
  for (const side of [-1, 1]) {
    const x = side * sideOffset;
    // Track band: 64 links merged into one geometry per side.
    const geometries = links.map(link => {
      const geometry = new THREE.BoxGeometry(0.52, 0.07, 0.17);
      geometry.rotateX(link.angle);
      geometry.translate(x, link.y + bandCenter, link.z);
      return geometry;
    });
    const band = mergeGeometries(geometries, false);
    geometries.forEach(geometry => geometry.dispose());
    if (band) mesh(group, band, mats.track);
    // Dual road wheels with steel hubs, cap and rim bolts.
    for (const z of [-1.9, -0.95, 0, 0.95, 1.9]) {
      const y = -halfHeight + 0.32;
      for (const offset of [-0.13, 0.13]) cylinder(group, mats.rubber, 0.25, 0.25, 0.1, 12, [x + offset, y, z], [0, 0, Math.PI / 2]);
      cylinder(group, mats.metal, 0.13, 0.13, 0.3, 10, [x, y, z], [0, 0, Math.PI / 2]);
      cylinder(group, mats.hullDark, 0.055, 0.055, 0.34, 8, [x, y, z], [0, 0, Math.PI / 2]);
      for (let index = 0; index < 5; index++) {
        const angle = (index / 5) * Math.PI * 2;
        bolt(group, mats.metal, [x, y + Math.cos(angle) * 0.085, z + Math.sin(angle) * 0.085], [0, 0, Math.PI / 2], 0.018, 0.32);
      }
      // Swing arm and damper behind the wheel.
      box(group, mats.hullDark, [0.1, 0.12, 0.5], [x - side * 0.14, -halfHeight + 0.36, z]);
      cylinder(group, mats.metal, 0.05, 0.05, 0.34, 8, [x - side * 0.05, -halfHeight + 0.48, z - 0.24], [0.5, 0, 0]);
    }
    // Drive sprocket (rear) with teeth, idler (front) with a tension arm.
    const sprocketZ = bandLength / 2 - radius;
    cylinder(group, mats.metal, 0.3, 0.3, 0.2, 14, [x, -0.02, sprocketZ], [0, 0, Math.PI / 2]);
    cylinder(group, mats.hullDark, 0.14, 0.14, 0.24, 10, [x, -0.02, sprocketZ], [0, 0, Math.PI / 2]);
    for (let index = 0; index < 10; index++) {
      const angle = (index / 10) * Math.PI * 2;
      box(group, mats.metal, [0.24, 0.11, 0.075], [x, -0.02 + Math.cos(angle) * 0.31, sprocketZ + Math.sin(angle) * 0.31], [angle, 0, 0]);
    }
    cylinder(group, mats.metal, 0.26, 0.26, 0.2, 14, [x, -0.02, -sprocketZ], [0, 0, Math.PI / 2]);
    cylinder(group, mats.hullDark, 0.13, 0.13, 0.24, 10, [x, -0.02, -sprocketZ], [0, 0, Math.PI / 2]);
    box(group, mats.metal, [0.14, 0.09, 0.5], [x, -0.12, -sprocketZ - 0.24], [0.16, 0, 0]);
    // Return rollers riding on the inner face of the top run.
    for (const z of [-1.5, 0, 1.5]) cylinder(group, mats.rubber, 0.1, 0.1, 0.2, 10, [x, bandCenter + bandHeight / 2 - 0.135, z], [0, 0, Math.PI / 2]);
    // Fender rail, segmented side skirt and track guards. The skirt stops above the
    // wheel hubs so the running gear stays readable from the side.
    box(group, mats.hullDark, [0.56, 0.05, depth - 0.3], [x, halfHeight - 0.03, 0]);
    for (const [center, length] of [[2.0, 1.42], [0.42, 1.6], [-1.32, 1.5]]) {
      box(group, mats.hull, [0.05, 0.34, length], [x + side * 0.33, halfHeight - 0.20, center]);
      box(group, mats.metal, [0.06, 0.05, length * 0.94], [x + side * 0.325, halfHeight - 0.05, center]);
    }
    box(group, mats.hullDark, [0.6, 0.1, 0.4], [x, -0.10, depth / 2 - 0.14]);
    box(group, mats.hullDark, [0.6, 0.1, 0.3], [x, -0.10, -depth / 2 + 0.14]);
    // Towing eye at the rear of each track run.
    cylinder(group, mats.metal, 0.07, 0.07, 0.09, 8, [x, -0.12, -depth / 2 + 0.02], [0, 0, Math.PI / 2]);
  }
}

// ---------------------------------------------------------------- engine
function buildEngine(group, mats) {
  const [width, height, depth] = PARTS.engine.size;
  const hh = height / 2, hd = depth / 2;
  // Armoured engine deck with a raised intake and a louvred cooling grille.
  box(group, mats.hullDark, [width, height * 0.55, depth], [0, -hh + height * 0.28, 0]);
  box(group, mats.hull, [width - 0.1, 0.06, depth - 0.12], [0, -hh + height * 0.56, 0]);
  grille(group, mats.metal, 6, width - 0.3, depth * 0.5, [0, -hh + height * 0.60, -depth * 0.22]);
  box(group, mats.hull, [width - 0.24, 0.12, 0.34], [0, -hh + height * 0.62, -hd + 0.26]);
  box(group, mats.metal, [width - 0.34, 0.03, 0.1], [0, -hh + height * 0.69, -hd + 0.26]);
  // Twin exhaust stacks with heat shields, angled up and back.
  for (const x of [-0.46, 0.46]) {
    cylinder(group, mats.metal, 0.075, 0.085, 0.62, 8, [x, -hh + height * 0.80, -hd + 0.24], [0.22, 0, 0]);
    cylinder(group, mats.soot, 0.088, 0.072, 0.12, 8, [x, -hh + height * 0.80 + 0.30, -hd + 0.30], [0.22, 0, 0]);
    box(group, mats.hullDark, [0.22, 0.3, 0.06], [x, -hh + height * 0.80, -hd + 0.40], [0.22, 0, 0]);
  }
  // Cooling fan and its guard.
  cylinder(group, mats.metal, 0.24, 0.24, 0.07, 14, [0, -hh + height * 0.6, 0.24]);
  for (let index = 0; index < 8; index++) {
    const angle = (index / 8) * Math.PI * 2;
    box(group, mats.metal, [0.05, 0.05, 0.2], [Math.cos(angle) * 0.15, -hh + height * 0.62, 0.24 + Math.sin(angle) * 0.15], [0, angle, 0]);
  }
  for (const x of [-0.5, 0.5]) cylinder(group, mats.hull, 0.1, 0.1, 0.05, 8, [x, -hh + height * 0.58, hd - 0.2]);
  // Side stowage box and two lifting eyes.
  box(group, mats.hull, [0.36, 0.16, 0.5], [width / 2 - 0.05, -hh + height * 0.45, -0.2]);
  for (const x of [-width / 2 + 0.16, width / 2 - 0.16]) box(group, mats.metal, [0.09, 0.1, 0.13], [x, -hh + height * 0.6, hd - 0.16]);
}

// ---------------------------------------------------------------- turret
function buildTurret(group, mats) {
  const [width, height, depth] = PARTS.turret.size;
  const hh = height / 2, hd = depth / 2;
  cylinder(group, mats.hullDark, 1.08, 1.14, 0.12, 18, [0, -hh + 0.04, 0]);
  // Cast turret as three stacked shells: the outline tapers towards the roof so the
  // silhouette is a wedge instead of a slab, and each step reads as a chamfer.
  const band = (points, bandWidth, bevel) => profile(group, mats.hull, points, bandWidth, { bevel });
  band([[-1.62, -0.45], [1.62, -0.45], [1.602, -0.15], [-1.58, -0.15]], width, 0.02);
  band([[-1.58, -0.15], [1.602, -0.15], [1.402, 0.15], [-1.313, 0.15]], width - 0.08, 0.02);
  band([[-1.313, 0.15], [1.402, 0.15], [1.16, 0.34], [0.72, 0.45], [-0.60, 0.45], [-1.06, 0.34]], width - 0.28, 0.02);
  // Mantlet: a wedge matching the turret front slope, with a canvas dust cover.
  const mantlet = slopeFrame([1.42, -0.22], [1.16, 0.30]);
  mesh(group, new THREE.BoxGeometry(1.12, 0.62, 0.52), mats.hullDark, [0, 0.0, 1.62], [0.16, 0, 0]);
  mesh(group, new THREE.BoxGeometry(0.92, 0.5, 0.1), mats.hullDark, mantlet.at(0, 0.06, 0.02), [mantlet.angle, 0, 0]);
  cylinder(group, mats.rust, 0.26, 0.22, 0.36, 14, [0, 0.02, 1.88], [Math.PI / 2, 0, 0]);
  cylinder(group, mats.metal, 0.2, 0.2, 0.08, 12, [0, 0.02, 2.02], [Math.PI / 2, 0, 0]);
  // Commander cupola offset to the left, with hatch, four periscopes and an AA machine gun.
  const cupolaX = -0.52, cupolaZ = -0.18;
  cylinder(group, mats.hull, 0.35, 0.38, 0.26, 14, [cupolaX, hh + 0.09, cupolaZ]);
  cylinder(group, mats.hullDark, 0.31, 0.31, 0.06, 14, [cupolaX, hh + 0.24, cupolaZ]);
  for (let index = 0; index < 4; index++) {
    const angle = (index / 4) * Math.PI * 2 + Math.PI / 4;
    box(group, mats.glass, [0.16, 0.09, 0.06], [cupolaX + Math.cos(angle) * 0.31, hh + 0.15, cupolaZ + Math.sin(angle) * 0.31], [0, -angle, 0]);
  }
  box(group, mats.metal, [0.16, 0.12, 0.3], [cupolaX - 0.42, hh + 0.22, cupolaZ - 0.16]);
  cylinder(group, mats.metal, 0.032, 0.032, 0.62, 6, [cupolaX - 0.42, hh + 0.30, cupolaZ + 0.06], [Math.PI / 2 - 0.12, 0, 0]);
  box(group, mats.metal, [0.18, 0.14, 0.22], [cupolaX - 0.42, hh + 0.24, cupolaZ - 0.30]);
  // Loader hatch and gunner sight on the right.
  cylinder(group, mats.hullDark, 0.27, 0.27, 0.06, 12, [0.52, hh + 0.02, -0.42]);
  box(group, mats.metal, [0.04, 0.05, 0.26], [0.52, hh + 0.06, -0.22]);
  box(group, mats.hullDark, [0.3, 0.22, 0.44], [0.44, hh + 0.10, 0.34]);
  box(group, mats.glass, [0.22, 0.11, 0.05], [0.44, hh + 0.13, 0.57]);
  // Hatch hinges so the roof reads as hardware rather than a plain plate.
  for (const x of [-0.68, -0.36]) box(group, mats.metal, [0.13, 0.05, 0.08], [x, hh + 0.28, -0.47]);
  for (const x of [0.36, 0.68]) box(group, mats.metal, [0.13, 0.05, 0.08], [x, hh + 0.06, -0.68]);
  // Smoke launchers: a two-by-two bank per side, angled forward and up.
  for (const side of [-1, 1]) {
    box(group, mats.hullDark, [0.06, 0.3, 0.5], [side * 1.24, 0.13, 0.86]);
    for (const row of [0, 1]) for (const column of [0, 1]) {
      cylinder(group, mats.metal, 0.05, 0.05, 0.26, 8,
        [side * 1.3, 0.06 + row * 0.13, 0.72 + column * 0.16], [Math.PI / 2 - 0.55, 0, side * 0.16]);
    }
  }
  // Antenna base and whip.
  cylinder(group, mats.metal, 0.055, 0.065, 0.16, 8, [-1.04, hh + 0.02, -1.18]);
  cylinder(group, mats.metal, 0.012, 0.012, 1.7, 4, [-1.04, hh + 0.88, -1.18], [0.05, 0, 0.04]);
  // Bustle basket behind the turret, clear of the engine deck.
  box(group, mats.hullDark, [width * 0.66, 0.05, 0.2], [0, 0.10, -1.68]);
  for (const x of [-0.8, 0.8]) box(group, mats.hullDark, [0.05, 0.32, 0.05], [x, -0.05, -1.76]);
  box(group, mats.hullDark, [width * 0.66, 0.04, 0.05], [0, -0.20, -1.76]);
  box(group, mats.hull, [0.66, 0.22, 0.16], [0.14, 0.02, -1.72]);
  cylinder(group, mats.rust, 0.1, 0.1, 1.2, 8, [0.42, -0.02, -1.72], [0, 0, Math.PI / 2]);
  // Spare track links and a stencilled side plate.
  for (let index = 0; index < 3; index++) box(group, mats.track, [0.06, 0.2, 0.44], [width / 2 + 0.04, -0.05, -0.6 + index * 0.5]);
  box(group, mats.accent, [0.02, 0.22, 0.34], [width / 2 - 0.005, 0.12, 0.4]);
  for (const x of [-0.86, 0.86]) box(group, mats.metal, [0.1, 0.1, 0.16], [x, hh + 0.02, -0.86]);
}

// ---------------------------------------------------------------- weapons
function buildCannon(group, mats) {
  const z = (local, extra = 0) => [0, extra, local];
  // Breech block and recoil sleeve inside the turret.
  box(group, mats.hullDark, [0.5, 0.46, 0.7], [0, 0, -1.72]);
  cylinder(group, mats.metal, 0.17, 0.14, 1.1, 14, z(-0.9), [Math.PI / 2, 0, 0]);
  // Tapered barrel: 0.105 at the root down to 0.078 at the muzzle.
  cylinder(group, mats.barrel, 0.092, 0.105, 1.9, 14, z(0.6), [Math.PI / 2, 0, 0]);
  cylinder(group, mats.barrel, 0.078, 0.092, 1.5, 14, z(2.3), [Math.PI / 2, 0, 0]);
  // Bore evacuator and thermal sleeve bands.
  cylinder(group, mats.metal, 0.135, 0.135, 0.5, 14, z(1.32), [Math.PI / 2, 0, 0]);
  for (const local of [-0.35, 0.35, 1.0, 2.35]) cylinder(group, mats.metal, 0.104, 0.104, 0.06, 14, z(local), [Math.PI / 2, 0, 0]);
  // Muzzle brake: a two-baffle cage with side ports.
  box(group, mats.metal, [0.26, 0.22, 0.34], [0, 0, 3.09]);
  for (const side of [-1, 1]) box(group, mats.metal, [0.05, 0.16, 0.3], [side * 0.13, 0, 3.09]);
  for (const local of [2.97, 3.21]) box(group, mats.metal, [0.3, 0.2, 0.05], [0, 0, local]);
  // Coaxial machine gun on the right of the mantlet.
  cylinder(group, mats.metal, 0.042, 0.042, 0.9, 8, [0.34, 0.14, 0.2], [Math.PI / 2, 0, 0]);
  box(group, mats.metal, [0.1, 0.1, 0.12], [0.34, 0.14, 0.66]);
  box(group, mats.hullDark, [0.16, 0.2, 0.26], [0.34, 0.12, -0.3]);
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
