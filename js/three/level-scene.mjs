import * as THREE from 'three';
import { buildTankModel } from './tank-model.mjs';

// Deterministic battlefield proxy for level 01. Everything is procedural: no external assets.
const ROAD_WIDTH = 13;
const CORRIDOR_START = -10;
const CORRIDOR_END = 190;

function random(seed) {
  let state = seed >>> 0;
  return () => { state = (state * 1664525 + 1013904223) >>> 0; return state / 4294967296; };
}
function canvasTexture(size, draw, repeat = [1, 1]) {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return null;
  draw(context, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(...repeat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
function noiseFill(context, size, base, flecks, seed) {
  const next = random(seed);
  context.fillStyle = base;
  context.fillRect(0, 0, size, size);
  for (const [color, count, min, max] of flecks) {
    context.fillStyle = color;
    for (let index = 0; index < count; index++) {
      const x = next() * size, y = next() * size, radius = min + next() * (max - min);
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
  }
}
function groundTexture() {
  return canvasTexture(256, (context, size) => {
    noiseFill(context, size, '#5f5a41', [['#6b6549', 160, 3, 12], ['#514c38', 140, 2, 10], ['#736a4d', 90, 1, 5]], 11);
    const next = random(23);
    context.strokeStyle = '#4c4834';
    context.lineWidth = 1;
    for (let index = 0; index < 26; index++) {
      context.beginPath();
      let x = next() * size, y = next() * size;
      context.moveTo(x, y);
      for (let step = 0; step < 5; step++) { x += (next() - .5) * 26; y += (next() - .5) * 26; context.lineTo(x, y); }
      context.stroke();
    }
  }, [48, 55]);
}
function asphaltTexture() {
  return canvasTexture(256, (context, size) => {
    noiseFill(context, size, '#343735', [['#3d413c', 200, 1, 5], ['#292c29', 180, 1, 6], ['#484c45', 60, 1, 3]], 41);
    const next = random(53);
    context.strokeStyle = '#242723';
    context.lineWidth = 1.4;
    for (let index = 0; index < 10; index++) {
      context.beginPath();
      let x = next() * size, y = next() * size;
      context.moveTo(x, y);
      for (let step = 0; step < 4; step++) { x += (next() - .5) * 40; y += next() * 24; context.lineTo(x, y); }
      context.stroke();
    }
  }, [2, 26]);
}
function skyTexture() {
  return canvasTexture(256, (context, size) => {
    const gradient = context.createLinearGradient(0, 0, 0, size);
    gradient.addColorStop(0, '#4b6f86');
    gradient.addColorStop(.42, '#8aa6ad');
    gradient.addColorStop(.68, '#c4c9b6');
    gradient.addColorStop(1, '#e0c9a2');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
  });
}
export function smokeTexture() {
  return canvasTexture(128, (context, size) => {
    const gradient = context.createRadialGradient(size / 2, size / 2, 2, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(230,230,225,.9)');
    gradient.addColorStop(.45, 'rgba(150,150,145,.35)');
    gradient.addColorStop(1, 'rgba(90,90,90,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
  });
}
function labelSprite(text, color = '#d9e6c8', sub = '') {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 128;
  const context = canvas.getContext('2d');
  context.fillStyle = 'rgba(10,18,20,.72)';
  context.strokeStyle = color;
  context.lineWidth = 4;
  context.beginPath();
  context.roundRect(6, 24, 500, 80, 16);
  context.fill(); context.stroke();
  context.fillStyle = color;
  context.font = 'bold 40px system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 256, sub ? 54 : 64);
  if (sub) { context.font = '24px system-ui, sans-serif'; context.fillStyle = '#a9bdb4'; context.fillText(sub, 256, 86); }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: true }));
  sprite.scale.set(6, 1.5, 1);
  return sprite;
}
function instanced(group, geometry, material, transforms) {
  const mesh = new THREE.InstancedMesh(geometry, material, transforms.length);
  const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion(), position = new THREE.Vector3(), scale = new THREE.Vector3();
  transforms.forEach((transform, index) => {
    position.set(...transform.position);
    quaternion.setFromEuler(new THREE.Euler(...(transform.rotation || [0, 0, 0])));
    scale.set(...(transform.scale || [1, 1, 1]));
    mesh.setMatrixAt(index, matrix.compose(position, quaternion, scale));
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  group.add(mesh);
  return mesh;
}
function ring(group, position, radius, color, opacity = .45) {
  const geometry = new THREE.RingGeometry(radius * .82, radius, 40);
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(position[0], .035, position[2]);
  group.add(mesh);
  return mesh;
}

function addSky(group) {
  const texture = skyTexture();
  const geometry = new THREE.SphereGeometry(420, 24, 16);
  const material = texture
    ? new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide, fog: false, depthWrite: false })
    : new THREE.MeshBasicMaterial({ color: '#9fb4b4', side: THREE.BackSide, fog: false, depthWrite: false });
  const sky = new THREE.Mesh(geometry, material);
  sky.name = 'sky';
  group.add(sky);
  // Distant ridge line for depth.
  const ridgeMaterial = new THREE.MeshStandardMaterial({ color: '#6a746c', roughness: 1, flatShading: true });
  const next = random(7);
  const ridge = [];
  for (let index = 0; index < 22; index++) {
    const angle = (index / 22) * Math.PI * 2;
    const radius = 250 + next() * 40;
    const height = 12 + next() * 22;
    ridge.push({
      position: [Math.cos(angle) * radius, height / 2 - 4, 85 + Math.sin(angle) * radius],
      rotation: [0, next() * Math.PI, 0],
      scale: [18 + next() * 16, height, 18 + next() * 16]
    });
  }
  instanced(group, new THREE.ConeGeometry(1, 1, 5), ridgeMaterial, ridge);
}

function addGround(group) {
  const groundMap = groundTexture();
  const groundMaterial = new THREE.MeshStandardMaterial({ map: groundMap || null, color: groundMap ? '#d8d2bc' : '#5f5a41', roughness: .96, metalness: 0 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(560, 640), groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -.02, 85);
  ground.receiveShadow = true;
  ground.name = 'ground';
  group.add(ground);
  // Road with shoulders, edge lines and centre dashes.
  const asphalt = asphaltTexture();
  const roadMaterial = new THREE.MeshStandardMaterial({ map: asphalt || null, color: asphalt ? '#ffffff' : '#3c3f3c', roughness: .92, metalness: .05 });
  const road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_WIDTH, CORRIDOR_END - CORRIDOR_START), roadMaterial);
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, .01, (CORRIDOR_END + CORRIDOR_START) / 2);
  road.receiveShadow = true;
  road.name = 'road';
  group.add(road);
  const shoulderMaterial = new THREE.MeshStandardMaterial({ color: '#6a6148', roughness: 1 });
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Mesh(new THREE.PlaneGeometry(2.4, CORRIDOR_END - CORRIDOR_START), shoulderMaterial);
    shoulder.rotation.x = -Math.PI / 2;
    shoulder.position.set(side * (ROAD_WIDTH / 2 + 1.2), .005, (CORRIDOR_END + CORRIDOR_START) / 2);
    shoulder.receiveShadow = true;
    group.add(shoulder);
    // Edge line.
    const line = new THREE.Mesh(new THREE.BoxGeometry(.16, .02, CORRIDOR_END - CORRIDOR_START - 6), new THREE.MeshStandardMaterial({ color: '#cfc9a8', roughness: .8 }));
    line.position.set(side * (ROAD_WIDTH / 2 - .5), .03, (CORRIDOR_END + CORRIDOR_START) / 2);
    line.receiveShadow = true;
    group.add(line);
    // Tyre ruts.
    const rut = new THREE.Mesh(new THREE.PlaneGeometry(.7, CORRIDOR_END - CORRIDOR_START - 8), new THREE.MeshBasicMaterial({ color: '#2c2f2c', transparent: true, opacity: .18, depthWrite: false }));
    rut.rotation.x = -Math.PI / 2;
    rut.position.set(side * 1.7, .02, (CORRIDOR_END + CORRIDOR_START) / 2);
    group.add(rut);
  }
  const dashMaterial = new THREE.MeshStandardMaterial({ color: '#d8d2b2', roughness: .8 });
  for (let z = CORRIDOR_START + 6; z < CORRIDOR_END - 4; z += 7) {
    const dash = new THREE.Mesh(new THREE.BoxGeometry(.2, .02, 3), dashMaterial);
    dash.position.set(0, .03, z);
    dash.receiveShadow = true;
    group.add(dash);
  }
}

function addProps(group) {
  const next = random(97);
  const rocks = [], shrubs = [], crates = [];
  for (let index = 0; index < 70; index++) {
    const side = next() < .5 ? -1 : 1;
    const x = side * (8 + next() * 22), z = CORRIDOR_START + next() * (CORRIDOR_END - CORRIDOR_START);
    const scale = .35 + next() * 1.5;
    rocks.push({ position: [x, scale * .35, z], rotation: [next() * 3, next() * 3, next() * 3], scale: [scale, scale * (.5 + next() * .6), scale * (.7 + next() * .6)] });
  }
  for (let index = 0; index < 44; index++) {
    const side = next() < .5 ? -1 : 1;
    shrubs.push({ position: [side * (7.6 + next() * 12), .3, CORRIDOR_START + next() * (CORRIDOR_END - CORRIDOR_START)], rotation: [0, next() * 3, 0], scale: [.5 + next(), .6 + next() * .8, .5 + next()] });
  }
  // Cover is authored in campaign.mjs (`map.cover`) so scenery and collision agree.
  for (let index = 0; index < 26; index++) {
    const side = next() < .5 ? -1 : 1;
    crates.push({ position: [side * (7.5 + next() * 2.5), .35, 120 + next() * 55], rotation: [0, next() * 1.6, 0], scale: [.8 + next() * .5, .7 + next() * .5, .8 + next() * .5] });
  }
  instanced(group, new THREE.DodecahedronGeometry(.5, 0), new THREE.MeshStandardMaterial({ color: '#6b6656', roughness: .95, flatShading: true }), rocks);
  instanced(group, new THREE.IcosahedronGeometry(.45, 0), new THREE.MeshStandardMaterial({ color: '#4f5b3c', roughness: 1, flatShading: true }), shrubs);
  instanced(group, new THREE.BoxGeometry(.9, .7, .9), new THREE.MeshStandardMaterial({ color: '#7c6a45', roughness: .9 }), crates);
  // Segment posts with reflective caps.
  const posts = [], caps = [];
  for (let z = CORRIDOR_START + 10; z < CORRIDOR_END; z += 20) for (const side of [-1, 1]) {
    posts.push({ position: [side * (ROAD_WIDTH / 2 + .9), .5, z] });
    caps.push({ position: [side * (ROAD_WIDTH / 2 + .9), 1.04, z] });
  }
  instanced(group, new THREE.BoxGeometry(.12, 1, .12), new THREE.MeshStandardMaterial({ color: '#4a4a42', roughness: .8 }), posts);
  instanced(group, new THREE.BoxGeometry(.16, .16, .16), new THREE.MeshStandardMaterial({ color: '#e8d58a', emissive: '#8a6a1e', emissiveIntensity: .5, roughness: .5 }), caps);
  // Two watchtowers.
  for (const [x, z] of [[-10.5, 92], [10.5, 146]]) {
    const tower = new THREE.Group();
    const legMaterial = new THREE.MeshStandardMaterial({ color: '#5b5a4d', roughness: .85, metalness: .2 });
    for (const dx of [-1.1, 1.1]) for (const dz of [-1.1, 1.1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(.18, 6.4, .18), legMaterial);
      leg.position.set(dx, 3.2, dz);
      leg.castShadow = true;
      tower.add(leg);
    }
    const platform = new THREE.Mesh(new THREE.BoxGeometry(2.8, .2, 2.8), legMaterial);
    platform.position.y = 6.3; platform.castShadow = true; tower.add(platform);
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 2.4), new THREE.MeshStandardMaterial({ color: '#4c5147', roughness: .9 }));
    cabin.position.y = 7.2; cabin.castShadow = true; tower.add(cabin);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.1, .8, 4), new THREE.MeshStandardMaterial({ color: '#3f463d', roughness: .9, flatShading: true }));
    roof.position.y = 8.4; roof.rotation.y = Math.PI / 4; roof.castShadow = true; tower.add(roof);
    const slit = new THREE.Mesh(new THREE.BoxGeometry(1.6, .3, .06), new THREE.MeshStandardMaterial({ color: '#161d1c' }));
    slit.position.set(0, 7.35, 1.22); tower.add(slit);
    tower.position.set(x, 0, z);
    group.add(tower);
  }
}

// ---------------------------------------------------------------- cover & terrain zones
// Cover comes from `level.map.cover`, so the mesh the player sees is exactly the shape
// the combat layer collides against. One InstancedMesh per kind keeps the draw count low.
const COVER_COLORS = { wreck: '#5a5044', sandbag: '#8b7f5c', berm: '#6d6247', ammo: '#6b5a3a', crate: '#7c6a45', rock: '#6b6656' };
function coverTransforms(cover) {
  const [w, h, d] = cover.size, [x, y, z] = cover.position;
  const list = [];
  const push = (position, scale, rotation = [0, 0, 0]) => list.push({ position, scale, rotation });
  if (cover.kind === 'sandbag') {
    const columns = Math.max(2, Math.round(w / .66));
    const rows = Math.max(1, Math.round(h / .3));
    const layers = Math.max(1, Math.round(d / .4));
    const cw = w / columns, ch = h / rows, cd = d / layers;
    for (let row = 0; row < rows; row++) for (let column = 0; column < columns; column++) for (let layer = 0; layer < layers; layer++) {
      push([x - w / 2 + cw * (column + .5) + (row % 2 ? cw * .16 : 0), y - h / 2 + ch * (row + .5), z - d / 2 + cd * (layer + .5)],
        [cw * .92, ch * .86, cd * .9], [0, (row + column) % 2 ? .16 : -.12, 0]);
    }
  } else if (cover.kind === 'berm') {
    push([x, y - h * .12, z], [w, h * .76, d]);
    push([x, y + h * .34, z], [w * .98, h * .3, d * .66], [.05, 0, 0]);
    const lumps = Math.max(3, Math.round(w / 1.6));
    for (let index = 0; index < lumps; index++) {
      push([x - w / 2 + (index + .5) * (w / lumps), y + h * .46, z + (index % 2 ? .45 : -.45)], [(w / lumps) * .9, h * .16, d * .3], [0, index * .6, 0]);
    }
  } else if (cover.kind === 'wreck') {
    push([x, y, z], [w * .72, h, d * .8], [.04, .12, .05]);
    push([x + w * .22, y * .55, z + d * .18], [w * .5, h * .9, d * .55], [0, -.5, .12]);
    push([x - w * .24, y * .5, z - d * .2], [w * .4, h * .85, d * .5], [0, .4, -.08]);
  } else if (cover.kind === 'ammo') {
    for (let index = 0; index < 3; index++) push([x - .5 + index * .5, y - h * .28, z], [.62, .34, .62], [0, index * .3, 0]);
    push([x, y + h * .18, z], [w * .8, h * .3, d * .8], [0, .2, 0]);
  } else {
    push([x, y, z], [w, h, d], [0, .08, 0]);
  }
  return list;
}
function addCover(group, level) {
  const buckets = new Map();
  for (const cover of level.map?.cover || []) {
    if (!Array.isArray(cover.size) || !Array.isArray(cover.position)) continue;
    const list = buckets.get(cover.kind) || [];
    list.push(...coverTransforms(cover));
    buckets.set(cover.kind, list);
  }
  for (const [kind, transforms] of buckets) {
    if (!transforms.length) continue;
    const material = new THREE.MeshStandardMaterial({ color: COVER_COLORS[kind] || '#6b6656', roughness: .96, metalness: .05, flatShading: true });
    instanced(group, new THREE.BoxGeometry(1, 1, 1), material, transforms).name = `cover-${kind}`;
  }
}
function addZones(group, level) {
  const colors = { mud: '#463b28', rubble: '#7b776b' };
  for (const zone of level.map?.zones || []) {
    const [x, y, z] = zone.position, [w, d] = zone.size;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ color: colors[zone.kind] || '#5f5a41', roughness: 1, transparent: true, opacity: .72 }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, y + .025, z);
    mesh.receiveShadow = true;
    mesh.name = `zone-${zone.id}`;
    group.add(mesh);
  }
}

function addBase(group, run) {  const base = run.level.base;
  const destroyed = run.baseDestroyed;
  const [x, , z] = base.position;
  const compound = new THREE.Group();
  compound.name = 'enemy-base';
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(34, 26), new THREE.MeshStandardMaterial({ color: '#5c5b50', roughness: .95 }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.set(0, .02, 2);
  pad.receiveShadow = true;
  compound.add(pad);
  const wallMaterial = new THREE.MeshStandardMaterial({ color: destroyed ? '#4a453c' : '#6c6654', roughness: .92, flatShading: true });
  const trimMaterial = new THREE.MeshStandardMaterial({ color: destroyed ? '#5a3b2c' : '#8a7a4e', roughness: .8, metalness: .25 });
  // Perimeter walls with a front gate gap.
  const wall = (size, position, rotation = [0, 0, 0]) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), wallMaterial);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    mesh.castShadow = true; mesh.receiveShadow = true;
    compound.add(mesh);
    return mesh;
  };
  wall([10, 2.6, .8], [-11, 1.3, -6]);
  wall([10, 2.6, .8], [11, 1.3, -6]);
  wall([.8, 2.6, 20], [-16, 1.3, 4]);
  wall([.8, 2.6, 20], [16, 1.3, 4]);
  wall([33, 2.6, .8], [0, 1.3, 14]);
  for (const side of [-1, 1]) {
    const pillar = wall([1.4, 4.2, 1.4], [side * 6.4, 2.1, -6]);
    pillar.material = trimMaterial;
  }
  // Gate lintel and warning stripes.
  wall([14.2, .7, 1.2], [0, 4.4, -6]).material = trimMaterial;
  for (let index = 0; index < 13; index++) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(.6, .34, .06), new THREE.MeshStandardMaterial({ color: index % 2 ? '#d8c07a' : '#2b2b26', roughness: .7 }));
    stripe.position.set(-6 + index * 1, 3.5, -5.36);
    compound.add(stripe);
  }
  // Command bunker with a sloped roof.
  const bunker = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(10, 3.4, 7), wallMaterial);
  body.position.y = 1.7; body.castShadow = true; body.receiveShadow = true; bunker.add(body);
  const roofShape = new THREE.Shape([new THREE.Vector2(-5.6, 0), new THREE.Vector2(5.6, 0), new THREE.Vector2(4.4, 1.1), new THREE.Vector2(-4.4, 1.1)]);
  const roofGeometry = new THREE.ExtrudeGeometry(roofShape, { depth: 7.6, bevelEnabled: false });
  roofGeometry.translate(0, 0, -3.8);
  const roof = new THREE.Mesh(roofGeometry, wallMaterial);
  roof.position.y = 4.2; roof.castShadow = true; bunker.add(roof);
  const slit = new THREE.Mesh(new THREE.BoxGeometry(6, .5, .08), new THREE.MeshStandardMaterial({ color: '#111716' }));
  slit.position.set(0, 2.2, 3.53); bunker.add(slit);
  bunker.position.set(0, 0, 6);
  compound.add(bunker);
  // Flag pole, radar and fuel drums.
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.08, .1, 8, 8), new THREE.MeshStandardMaterial({ color: '#8c8c80', metalness: .6, roughness: .4 }));
  pole.position.set(-9, 4, 9); pole.castShadow = true; compound.add(pole);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(3, 1.7, 14, 6), new THREE.MeshStandardMaterial({ color: destroyed ? '#4a3a32' : '#a5432f', side: THREE.DoubleSide, roughness: .9 }));
  flag.position.set(-7.4, 7.1, 9);
  compound.add(flag);
  const radar = new THREE.Group();
  const dish = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, .12, 16), new THREE.MeshStandardMaterial({ color: '#9aa39a', metalness: .5, roughness: .5, flatShading: true }));
  dish.rotation.x = Math.PI / 2.4; dish.castShadow = true; radar.add(dish);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(.12, .16, 3.4, 8), new THREE.MeshStandardMaterial({ color: '#5a5f55', metalness: .5, roughness: .5 }));
  mast.position.y = -1.6; radar.add(mast);
  radar.position.set(9, 5.4, 6);
  compound.add(radar);
  for (let index = 0; index < 5; index++) {
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(.4, .4, 1.1, 10), new THREE.MeshStandardMaterial({ color: index % 2 ? '#5f6a4a' : '#7a5c3a', roughness: .85, metalness: .2 }));
    drum.position.set(-12 + (index % 3) * .9, .55, 10 + Math.floor(index / 3) * .9);
    drum.castShadow = true;
    compound.add(drum);
  }
  // Searchlights.
  for (const side of [-1, 1]) {
    const tower = new THREE.Mesh(new THREE.BoxGeometry(.9, 5, .9), wallMaterial);
    tower.position.set(side * 14, 2.5, -2); tower.castShadow = true; compound.add(tower);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(1.4, .8, .8), new THREE.MeshStandardMaterial({ color: '#d9d2a8', emissive: '#ffd27a', emissiveIntensity: destroyed ? 0 : .9, roughness: .5 }));
    lamp.position.set(side * 14, 5.2, -2); compound.add(lamp);
  }
  compound.position.set(x, 0, z - 2);
  group.add(compound);
  return { compound, flag, radar, destroyed };
}

export function smokeColumn(group, position, { color = '#8f8a80', count = 26, size = 3.2, speed = 1.6, map = null } = {}) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3), seeds = new Float32Array(count);
  const next = random(Math.round(position[0] * 13 + position[2] * 7) + 3);
  for (let index = 0; index < count; index++) {
    positions[index * 3] = (next() - .5) * 1.4;
    positions[index * 3 + 1] = next() * 6;
    positions[index * 3 + 2] = (next() - .5) * 1.4;
    seeds[index] = next();
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ map, color, size, transparent: true, opacity: .55, depthWrite: false, sizeAttenuation: true });
  const points = new THREE.Points(geometry, material);
  points.position.set(...position);
  group.add(points);
  return dt => {
    const array = geometry.attributes.position.array;
    for (let index = 0; index < count; index++) {
      array[index * 3 + 1] += dt * speed * (.6 + seeds[index] * .8);
      if (array[index * 3 + 1] > 7) { array[index * 3 + 1] = 0; array[index * 3] = (seeds[index] - .5) * 1.4; }
    }
    geometry.attributes.position.needsUpdate = true;
  };
}

function dustMotes(group) {
  const count = 180, geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const next = random(311);
  for (let index = 0; index < count; index++) {
    positions[index * 3] = (next() - .5) * 80;
    positions[index * 3 + 1] = .4 + next() * 9;
    positions[index * 3 + 2] = CORRIDOR_START + next() * (CORRIDOR_END - CORRIDOR_START);
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: '#e8dcc0', size: .09, transparent: true, opacity: .5, depthWrite: false });
  const points = new THREE.Points(geometry, material);
  group.add(points);
  return dt => {
    const array = geometry.attributes.position.array;
    for (let index = 0; index < count; index++) {
      array[index * 3] += dt * .35;
      if (array[index * 3] > 40) array[index * 3] = -40;
      array[index * 3 + 1] += Math.sin(index + performance.now() * .0002) * dt * .05;
    }
    geometry.attributes.position.needsUpdate = true;
  };
}

// The player keeps one group per part so the turret can rotate independently; the gun is
// re-parented onto a pitch pivot inside the turret so the barrel follows the aim.
function rigPlayerTank(player) {
  const turret = player.userData.byRole.get('turret') || null;
  const weapon = player.userData.byRole.get('weapon') || null;
  const pivot = new THREE.Group();
  pivot.name = 'gun-pivot';
  if (weapon) {
    if (turret) { pivot.position.set(0, .05, 1.45); turret.add(pivot); }
    else { pivot.position.copy(weapon.position); player.add(pivot); }
    player.updateMatrixWorld(true);
    pivot.attach(weapon);
    player.updateMatrixWorld(true);
  }
  return { turret, weapon, pivot, hasTurret: Boolean(turret) };
}

function addTanks(group, run, focus, updates, smokeMap, { combat = false, playerPose = null } = {}) {
  const level = run.level;
  const templates = level.enemyTemplates || {};
  const units = { player: null, enemies: new Map() };
  // After a battle the static scene keeps the tank where it stopped, so the camera does
  // not fly back to the spawn when the result screen rebuilds the level.
  const spawn = playerPose ? { x: playerPose.x, z: playerPose.z } : { x: level.playerSpawn[0], z: level.playerSpawn[2] };
  const spawnYaw = playerPose?.yaw || 0;
  const player = buildTankModel(run.tank.blueprint, { faction: 'player', merged: true, whole: !combat });
  player.position.set(spawn.x, 0, spawn.z);
  player.rotation.y = spawnYaw;
  player.name = 'player-tank';
  group.add(player);
  if (combat) units.player = { object: player, ...rigPlayerTank(player) };
  ring(group, [spawn.x, 0, spawn.z], 2.4, '#b9d38f', .5);
  focus.set('player', { position: new THREE.Vector3(spawn.x, 1.6, spawn.z), radius: 4.2, label: '玩家坦克', view: { distance: 13.5, height: 3.4 } });

  level.enemies.forEach((enemy, index) => {
    const defeated = run.defeatedEnemies.includes(enemy.id);
    const template = templates[enemy.templateId];
    const blueprint = template?.blueprint || run.tank.blueprint;
    const guard = enemy.behavior === 'guard';
    const yaw = Math.PI + (enemy.behavior === 'flank-left' ? -.55 : enemy.behavior === 'flank-right' ? .55 : 0);
    if (defeated) {
      const wreck = buildTankModel(blueprint, { faction: 'wreck', merged: true });
      const turret = wreck.userData.byRole.get('turret');
      const weapon = wreck.userData.byRole.get('weapon');
      if (turret) { turret.position.x += .8; turret.position.y -= .1; turret.rotation.z = .22; turret.rotation.y += .6; }
      if (weapon) weapon.visible = false;
      wreck.rotation.z = .05;
      wreck.position.set(enemy.position[0], 0, enemy.position[2]);
      wreck.rotation.y = yaw;
      group.add(wreck);
      ring(group, enemy.position, 3, '#6b3a2a', .35);
      updates.push(smokeColumn(group, [enemy.position[0], .4, enemy.position[2]], { count: 20, size: 2.8, map: smokeMap }));
      const label = labelSprite('已摧毁 · ' + (index === 3 ? '终点守卫' : `途中敌坦 ${index + 1}`), '#a9846a');
      if (label) { label.scale.set(4.2, 1.05, 1); label.position.set(enemy.position[0], 4.4, enemy.position[2]); group.add(label); }
    } else {
      const tank = buildTankModel(blueprint, { faction: guard ? 'guard' : 'enemy', variant: index % 3, merged: true, whole: true });
      tank.position.set(enemy.position[0], 0, enemy.position[2]);
      tank.rotation.y = yaw;
      tank.name = `enemy-${enemy.id}`;
      group.add(tank);
      if (combat) units.enemies.set(enemy.id, tank);
      ring(group, enemy.position, 3, guard ? '#c24a32' : '#b4543a', .5);
      const roles = ['正面对抗', '左侧偷袭', '右侧偷袭', '基地守卫'];
      const label = labelSprite(index === 3 ? '终点守卫' : `途中敌坦 ${index + 1}`, guard ? '#e0896f' : '#e2a184', roles[index]);
      if (label) { label.scale.set(4.4, 1.1, 1); label.position.set(enemy.position[0], 5.2, enemy.position[2]); group.add(label); }
      // Idle scan: a small, deterministic yaw sway so the static scene is not frozen.
      if (!combat) {
        const baseYaw = tank.rotation.y;
        updates.push(() => { tank.rotation.y = baseYaw + Math.sin(performance.now() * .00035 + index) * .04; });
      }
      focus.set(enemy.id, { position: new THREE.Vector3(enemy.position[0], 1.6, enemy.position[2]), radius: 4.5, label: roles[index], view: { distance: 11, height: 4.2 } });
    }
  });
  focus.set('base', { position: new THREE.Vector3(level.base.position[0], 2.4, level.base.position[2]), radius: 14, label: '敌方基地', view: { distance: 46, height: 22 } });
  focus.set('overview', { position: new THREE.Vector3(0, 6, 82), radius: 105, label: '第一关全景', view: { distance: 215, height: 145, azimuth: -1.0 } });
  const baseLabel = labelSprite('敌方基地', '#e8d08a', '需摧毁');
  if (baseLabel) { baseLabel.scale.set(5, 1.25, 1); baseLabel.position.set(level.base.position[0] + 9, 10, level.base.position[2]); group.add(baseLabel); }
  return units;
}

function addTriggers(group, level) {
  const material = new THREE.MeshBasicMaterial({ color: '#d8b06a', transparent: true, opacity: .3, depthWrite: false });
  for (const enemy of level.enemies) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(ROAD_WIDTH - 1, .02, .3), material);
    strip.position.set(0, .04, enemy.triggerZ);
    group.add(strip);
    const label = labelSprite(`触发 ${enemy.triggerZ} m`, '#d8c58c');
    if (label) { label.scale.set(3.6, .9, 1); label.position.set(7.2, 1.4, enemy.triggerZ); group.add(label); }
  }
}

export function buildLevelScene(run, { showLabels = true, combat = false, playerPose = null } = {}) {
  const group = new THREE.Group();
  group.name = 'level-01';
  const updates = [];
  const focus = new Map();
  const smokeMap = (run.baseDestroyed || run.defeatedEnemies.length) ? smokeTexture() : null;
  addSky(group);
  addGround(group);
  addProps(group);
  addCover(group, run.level);
  addZones(group, run.level);
  const base = addBase(group, run);
  if (!base.destroyed) {
    const baseYaw = base.radar.rotation.y;
    updates.push(() => { base.radar.rotation.y = baseYaw + performance.now() * .0006; });
    if (base.flag) {
      const position = base.flag.geometry.attributes.position;
      updates.push(() => {
        const time = performance.now() * .0022;
        for (let index = 0; index < position.count; index++) {
          const x = position.getX(index);
          position.setZ(index, Math.sin(x * 1.4 + time) * .22 * (x / 3 + .5));
        }
        position.needsUpdate = true;
        base.flag.geometry.computeVertexNormals();
      });
    }
  } else {
    updates.push(smokeColumn(group, [0, 2, 174], { color: '#6b625a', count: 40, size: 5, speed: 2.2, map: smokeMap }));
  }
  const units = addTanks(group, run, focus, updates, smokeMap, { combat, playerPose });
  units.base = base.compound;
  addTriggers(group, run.level);
  updates.push(dustMotes(group));
  if (!showLabels) group.traverse(object => { if (object.isSprite) object.visible = false; });
  group.userData.focus = focus;
  group.userData.units = units;
  return {
    group,
    focus,
    units,
    update(delta) { for (const update of updates) update(delta); }
  };
}
