import * as THREE from 'three';
import { damageAfterDefense } from '../mode/campaign.mjs';
import { smokeColumn, smokeTexture } from './level-scene.mjs';

// Combat is split in two: `CombatSim` is pure math (no Three.js objects) so it can be unit
// tested in Node, and `createCombat` wires it to the scene, camera, input and HUD.
// Win/lose is still decided by `transitionRun` in js/mode/campaign.mjs — the simulation only
// emits the four events that state machine understands.

export const COMBAT = Object.freeze({
  tick: 1 / 60,
  hitRadius: .35,
  groundY: .12,
  aimPlaneY: 1.2,
  maxProjectiles: 48,
  tankHalf: [2, 1.3, 4.4],
  baseHalf: [17, 3, 11],
  // Barrel elevation limits. The upper end has to clear a mortar's high arc; straight
  // shots only use the small part of this range that points at the crosshair.
  minPitch: -.2,
  maxPitch: 1.15,
  arenaX: 17.4,
  arenaZ: [-2, 178],
  camera: Object.freeze({
    distance: 13.2, height: 6.1, lookAhead: 14, lookHeight: 2,
    yawLambda: 6.5, positionLambda: 10, targetLambda: 12, entryTime: .6
  })
});

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const wrap = angle => Math.atan2(Math.sin(angle), Math.cos(angle));
const damp = (from, to, lambda, dt) => from + (to - from) * (1 - Math.exp(-lambda * dt));

// Low-angle ballistic solution. `height` is target y minus muzzle y.
export function solveLaunchPitch(distance, speed, gravity = 9.8, height = 0) {
  const d = Math.max(0, Number(distance) || 0);
  const v2 = speed * speed;
  if (d < 1e-4) return height > 0 ? Math.PI / 2 : 0;
  const discriminant = v2 * v2 - gravity * (gravity * d * d + 2 * height * v2);
  if (discriminant < 0) return Math.PI / 4; // out of range: best effort, caller clamps
  return Math.atan2(v2 - Math.sqrt(discriminant), gravity * d);
}
// Chase-camera heading: a damped follow, not a rigid lock. The camera trails the hull by a
// few degrees while turning (which reads as weight) and re-centres as soon as the turn
// stops. Keeping this pure makes the camera feel testable in Node.
export function followYaw(current, target, dt, { lambda = COMBAT.camera.yawLambda } = {}) {
  const error = wrap(target - current);
  return wrap(current + error * (1 - Math.exp(-lambda * Math.max(0, dt))));
}
// Straight weapons point at the aim point; ballistic ones need the low-angle solution so
// the shell still lands on the crosshair.
function aimPitchFor(weapon, origin, point) {
  const distance = Math.hypot(point.x - origin.x, point.z - origin.z);
  const height = point.y - origin.y;
  const pitch = weapon.straight
    ? Math.atan2(height, Math.max(distance, .001))
    : solveLaunchPitch(distance, weapon.launchSpeed, weapon.gravity, height);
  return clamp(pitch, COMBAT.minPitch, COMBAT.maxPitch);
}
// Distance from a point to an axis-aligned footprint in the XZ plane.
function footprintDistance(x, z, box) {
  return Math.hypot(Math.max(Math.abs(x - box.x) - box.half[0], 0), Math.max(Math.abs(z - box.z) - box.half[2], 0));
}
function insideTank(point, unit, radius) {
  const half = unit.half;
  const cos = Math.cos(unit.yaw), sin = Math.sin(unit.yaw);
  const dx = point.x - unit.position.x, dz = point.z - unit.position.z;
  const lx = dx * cos - dz * sin;
  const lz = dx * sin + dz * cos;
  return Math.abs(lx) <= half[0] + radius && Math.abs(lz) <= half[2] + radius
    && point.y >= -radius && point.y <= half[1] * 2 + radius;
}
function insideBase(point, unit, radius) {
  return Math.abs(point.x - unit.position.x) <= unit.half[0] + radius
    && Math.abs(point.z - unit.position.z) <= unit.half[2] + radius
    && point.y >= unit.position.y - unit.half[1] - radius
    && point.y <= unit.position.y + unit.half[1] + radius;
}
function muzzleOf(unit) {
  const angle = unit.yaw + (unit.turretYaw || 0);
  return { x: unit.position.x + Math.sin(angle) * 3.5, y: 2.35, z: unit.position.z + Math.cos(angle) * 3.5 };
}
function weaponFrom(stats) {
  return { kind: stats.kind, launchSpeed: stats.launchSpeed, gravity: stats.gravity, blastRadius: stats.blastRadius, lifetime: stats.lifetime, straight: Boolean(stats.straight) };
}

export class CombatSim {
  constructor({ run, random = Math.random }) {
    this.level = run.level;
    this.random = random;
    this.events = [];
    this.projectiles = [];
    this.elapsed = 0;
    this.active = true;
    this.outcome = null;
    this.shots = 0;
    this.hits = 0;
    const stats = run.tank.assessment.stats;
    this.player = {
      id: 'player', levelId: null, team: 'player', kind: 'tank',
      position: { x: run.level.playerSpawn[0], y: 0, z: run.level.playerSpawn[2] },
      yaw: 0, turretYaw: 0, pitch: 0, pitchTarget: 0,
      health: stats.maxHealth, maxHealth: stats.maxHealth, defense: stats.defense,
      attack: stats.attack, fireRate: stats.fireRate, moveSpeed: stats.moveSpeed, turnSpeed: stats.turnSpeed,
      turretSpeed: stats.turretSpeed ?? null, weapon: weaponFrom(stats),
      reload: 0, alive: true, speed: 0, engaged: true, behavior: 'player', triggerZ: -1, half: COMBAT.tankHalf
    };
    const templates = run.level.enemyTemplates || {};
    this.enemies = run.level.enemies.map(enemy => {
      const enemyStats = templates[enemy.templateId]?.assessment?.stats || stats;
      return {
        id: enemy.id, levelId: enemy.id, team: 'enemy', kind: 'tank',
        position: { x: enemy.position[0], y: 0, z: enemy.position[2] },
        yaw: Math.PI, turretYaw: 0, pitch: 0, pitchTarget: 0,
        health: enemyStats.maxHealth, maxHealth: enemyStats.maxHealth, defense: enemyStats.defense,
        attack: enemyStats.attack, fireRate: enemyStats.fireRate, moveSpeed: enemyStats.moveSpeed,
        turnSpeed: enemyStats.turnSpeed, turretSpeed: null, weapon: weaponFrom(enemyStats),
        reload: 0, alive: true, speed: 0, engaged: false,
        behavior: enemy.behavior, triggerZ: enemy.triggerZ, half: COMBAT.tankHalf
      };
    });
    this.base = {
      id: 'base', levelId: run.level.base.id, team: 'enemy', kind: 'base',
      position: { x: run.level.base.position[0], y: COMBAT.baseHalf[1], z: run.level.base.position[2] + 1 },
      yaw: 0, turretYaw: 0, health: run.level.base.maxHealth, maxHealth: run.level.base.maxHealth,
      defense: 12, attack: 0, fireRate: 0, moveSpeed: 0, turnSpeed: 0, turretSpeed: null,
      weapon: null, reload: 0, alive: true, speed: 0, behavior: 'base', triggerZ: 0, half: COMBAT.baseHalf
    };
    this.units = [this.player, ...this.enemies, this.base];
    this.cover = (run.level.map?.cover || []).filter(entry => entry.solid !== false).map(entry => ({
      id: entry.id, kind: entry.kind, x: entry.position[0], z: entry.position[2],
      half: [entry.size[0] / 2, entry.size[1] / 2, entry.size[2] / 2],
      top: entry.position[1] + entry.size[1] / 2,
      explosive: entry.explosive || null, health: entry.explosive ? 40 : Infinity, alive: true
    }));
    this.zones = run.level.map?.zones || [];
    this.playerAim = { x: this.player.position.x, z: this.player.position.z + 60 };
  }
  get aliveEnemies() { return this.enemies.filter(enemy => enemy.alive).length; }
  get totalEnemies() { return this.enemies.length; }
  zoneFactorAt(x, z) {
    for (const zone of this.zones) {
      const [zx, , zz] = zone.position, [w, d] = zone.size;
      if (Math.abs(x - zx) <= w / 2 && Math.abs(z - zz) <= d / 2) return zone.speedFactor ?? 1;
    }
    return 1;
  }
  moveUnit(unit, dx, dz) {
    let x = clamp(unit.position.x + dx, -COMBAT.arenaX, COMBAT.arenaX);
    let z = clamp(unit.position.z + dz, COMBAT.arenaZ[0], COMBAT.arenaZ[1]);
    const radius = unit.half[0];
    for (let pass = 0; pass < 2; pass++) {
      for (const cover of this.cover) {
        if (!cover.alive) continue;
        const ox = x - cover.x, oz = z - cover.z;
        const px = Math.max(Math.abs(ox) - cover.half[0], 0), pz = Math.max(Math.abs(oz) - cover.half[2], 0);
        const distance = Math.hypot(px, pz);
        if (distance >= radius) continue;
        if (distance > 1e-4) {
          const nx = (Math.sign(ox) * px) / distance, nz = (Math.sign(oz) * pz) / distance;
          x += nx * (radius - distance); z += nz * (radius - distance);
        } else {
          const overlapX = cover.half[0] + radius - Math.abs(ox);
          const overlapZ = cover.half[2] + radius - Math.abs(oz);
          if (overlapX < overlapZ) x += Math.sign(ox || 1) * overlapX;
          else z += Math.sign(oz || 1) * overlapZ;
        }
      }
    }
    unit.position.x = clamp(x, -COMBAT.arenaX, COMBAT.arenaX);
    unit.position.z = clamp(z, COMBAT.arenaZ[0], COMBAT.arenaZ[1]);
  }
  updatePlayer(dt, input) {
    const player = this.player;
    if (!player.alive) return;
    const throttle = clamp(input.throttle || 0, -1, 1);
    const steer = clamp(input.steer || 0, -1, 1);
    const factor = this.zoneFactorAt(player.position.x, player.position.z);
    // Arcade driving: reach top speed quickly, stop quickly, and keep most of the turn
    // rate at a standstill so the hull does not feel like a barge.
    player.speed = damp(player.speed, throttle * player.moveSpeed * factor, throttle ? 4.4 : 5.2, dt);
    if (Math.abs(player.speed) < .01) player.speed = 0;
    const grip = clamp(Math.abs(player.speed) / (player.moveSpeed * .4), 0, 1);
    player.yaw = wrap(player.yaw + steer * player.turnSpeed * factor * (Math.sign(player.speed) || 1) * (.62 + .38 * grip) * dt);
    this.moveUnit(player, Math.sin(player.yaw) * player.speed * dt, Math.cos(player.yaw) * player.speed * dt);
    if (input.aim) this.playerAim = { x: input.aim.x, y: input.aim.y, z: input.aim.z, kind: input.aim.kind };
    const aim = this.playerAim;
    const aimPoint = { x: aim.x, y: Number.isFinite(aim.y) ? aim.y : COMBAT.aimPlaneY, z: aim.z };
    const desired = Math.atan2(aimPoint.x - player.position.x, aimPoint.z - player.position.z);
    if (player.turretSpeed) {
      const delta = wrap(desired - player.yaw - player.turretYaw);
      const limit = player.turretSpeed * dt;
      player.turretYaw = wrap(player.turretYaw + clamp(delta, -limit, limit));
    } else {
      const delta = wrap(desired - player.yaw);
      player.yaw = wrap(player.yaw + clamp(delta, -player.turnSpeed * dt, player.turnSpeed * dt));
    }
    const muzzle = muzzleOf(player);
    // Aim exactly where the crosshair is. A straight shell then flies down that line;
    // an explosive one is solved so its arc still lands on the same point.
    player.pitchTarget = aimPitchFor(player.weapon, muzzle, aimPoint);
    player.pitch = damp(player.pitch, player.pitchTarget, 14, dt);
    player.reload = Math.max(0, player.reload - dt);
    if (input.fire && player.reload <= 0) {
      // Snap the barrel to the aim so the tracer leaves along the visible gun line.
      player.pitch = player.pitchTarget;
      this.spawnProjectile(player, muzzle, player.yaw + player.turretYaw, player.pitchTarget);
      player.reload = 1 / Math.max(player.fireRate, .2);
      this.shots++;
    }
  }
  updateEnemies(dt) {
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      const dx = this.player.position.x - enemy.position.x, dz = this.player.position.z - enemy.position.z;
      const distance = Math.hypot(dx, dz);
      if (!enemy.engaged) {
        if (this.player.position.z >= enemy.triggerZ || distance <= 26) enemy.engaged = true;
        else { enemy.reload = Math.max(0, enemy.reload - dt); continue; }
      }
      const desired = Math.atan2(dx, dz);
      const delta = wrap(desired - enemy.yaw);
      const turn = enemy.turnSpeed * 1.35 * dt;
      enemy.yaw = wrap(enemy.yaw + clamp(delta, -turn, turn));
      if (enemy.behavior !== 'guard' && distance > 22 && Math.abs(delta) < .6 && this.player.alive) {
        const factor = this.zoneFactorAt(enemy.position.x, enemy.position.z);
        this.moveUnit(enemy, Math.sin(enemy.yaw) * enemy.moveSpeed * .55 * factor * dt, Math.cos(enemy.yaw) * enemy.moveSpeed * .55 * factor * dt);
      }
      enemy.reload = Math.max(0, enemy.reload - dt);
      if (Math.abs(delta) < .16 && distance < 62 && enemy.reload <= 0 && this.player.alive) {
        const muzzle = muzzleOf(enemy);
        const targetPoint = { x: this.player.position.x, y: COMBAT.aimPlaneY, z: this.player.position.z };
        const pitch = aimPitchFor(enemy.weapon, muzzle, targetPoint);
        // Enemies aim at the hull centre with a little human error; without it a stationary
        // player is hit by every single shell and the four-enemy level is unwinnable. A
        // straight shot needs a wider lateral spread than the old lobbed shell did, or it
        // would hit every time at close range.
        const jitter = () => this.random() - .5;
        const spread = enemy.weapon.straight ? .42 : .14;
        this.spawnProjectile(enemy, muzzle, enemy.yaw + jitter() * spread, clamp(pitch + jitter() * (enemy.weapon.straight ? .02 : .05), COMBAT.minPitch, COMBAT.maxPitch));
        enemy.reload = 1 / Math.max(enemy.fireRate, .2) + .35 + this.random() * .5;
      }
    }
  }
  spawnProjectile(owner, origin, angle, pitch) {
    const weapon = owner.weapon;
    const speed = weapon.launchSpeed;
    const horizontal = Math.cos(pitch) * speed;
    const straight = Boolean(weapon.straight);
    this.projectiles.push({
      owner: owner.id, team: owner.team,
      position: { x: origin.x, y: origin.y, z: origin.z },
      velocity: { x: Math.sin(angle) * horizontal, y: Math.sin(pitch) * speed, z: Math.cos(angle) * horizontal },
      gravity: straight ? 0 : weapon.gravity, straight, speed,
      life: weapon.lifetime,
      damage: owner.attack, blastRadius: weapon.blastRadius, kind: weapon.kind
    });
    if (this.projectiles.length > COMBAT.maxProjectiles) this.projectiles.shift();
    this.events.push({ type: 'fired', owner: owner.id, position: { ...origin }, angle, pitch });
  }
  hitTest(shot) {
    const point = shot.position;
    // Explosive stores sit inside the base footprint, so they are tested before the base
    // box; otherwise the courtyard would swallow every shell aimed at an ammo pile.
    for (const cover of this.cover) {
      if (!cover.alive || !cover.explosive) continue;
      if (point.y > cover.top || point.y < 0) continue;
      if (Math.abs(point.x - cover.x) <= cover.half[0] + COMBAT.hitRadius && Math.abs(point.z - cover.z) <= cover.half[2] + COMBAT.hitRadius) return { kind: 'cover', cover };
    }
    for (const unit of this.units) {
      if (!unit.alive || unit.team === shot.team) continue;
      if (unit.kind === 'base') { if (insideBase(point, unit, COMBAT.hitRadius)) return { kind: 'base', unit }; continue; }
      if (insideTank(point, unit, COMBAT.hitRadius)) return { kind: 'unit', unit };
    }
    for (const cover of this.cover) {
      if (!cover.alive || cover.explosive) continue;
      if (point.y > cover.top || point.y < 0) continue;
      if (Math.abs(point.x - cover.x) <= cover.half[0] + COMBAT.hitRadius && Math.abs(point.z - cover.z) <= cover.half[2] + COMBAT.hitRadius) return { kind: 'cover', cover };
    }
    return null;
  }
  updateProjectiles(dt) {
    const alive = [];
    for (const shot of this.projectiles) {
      shot.life -= dt;
      if (!shot.straight) shot.velocity.y -= shot.gravity * dt;
      const speed = Math.hypot(shot.velocity.x, shot.velocity.y, shot.velocity.z);
      const steps = Math.max(1, Math.min(10, Math.ceil((speed * dt) / .4)));
      const step = dt / steps;
      let dead = false;
      for (let index = 0; index < steps && !dead; index++) {
        shot.position.x += shot.velocity.x * step;
        shot.position.y += shot.velocity.y * step;
        shot.position.z += shot.velocity.z * step;
        const hit = this.hitTest(shot);
        if (hit) { this.impact(shot, hit); dead = true; }
        else if (shot.position.y <= COMBAT.groundY) { this.impact(shot, { kind: 'ground' }); dead = true; }
      }
      if (!dead && shot.life > 0) alive.push(shot);
    }
    this.projectiles = alive;
  }
  impact(shot, hit) {
    const point = { x: shot.position.x, y: Math.max(shot.position.y, 0), z: shot.position.z };
    if (hit.kind === 'unit' || hit.kind === 'base') {
      if (shot.team === 'player') this.hits++;
      this.damageUnit(hit.unit, shot.damage);
    } else if (hit.kind === 'cover' && hit.cover.explosive) {
      this.explodeCover(hit.cover);
    }
    if (shot.blastRadius > .6) this.blast(point, shot.blastRadius, shot.team, shot.damage * .32, hit.unit || null);
    this.events.push({ type: 'impact', position: point, radius: Math.max(shot.blastRadius, .45), kind: hit.kind });
  }
  blast(point, radius, team, damage, exclude) {
    for (const unit of this.units) {
      if (!unit.alive || unit.team === team || unit === exclude) continue;
      const distance = unit.kind === 'base' ? footprintDistance(point.x, point.z, unit) : Math.hypot(unit.position.x - point.x, unit.position.z - point.z);
      if (distance > radius) continue;
      this.damageUnit(unit, damage * clamp(1 - distance / (radius + 1), .25, 1));
    }
  }
  explodeCover(cover) {
    if (!cover.alive || !cover.explosive) return;
    cover.alive = false;
    this.events.push({ type: 'impact', position: { x: cover.x, y: cover.top, z: cover.z }, radius: cover.explosive.radius * 1.6, kind: 'cover' });
    for (const unit of this.units) {
      if (!unit.alive) continue;
      const distance = Math.hypot(unit.position.x - cover.x, unit.position.z - cover.z);
      if (distance > cover.explosive.radius) continue;
      this.damageUnit(unit, cover.explosive.damage * clamp(1 - distance / cover.explosive.radius, .3, 1));
    }
    for (const other of this.cover) {
      if (other === cover || !other.alive || !other.explosive) continue;
      if (Math.hypot(other.x - cover.x, other.z - cover.z) > cover.explosive.radius + 2) continue;
      other.health -= 40;
      if (other.health <= 0) this.explodeCover(other);
    }
  }
  damageUnit(unit, raw) {
    if (!unit.alive || !(raw > 0)) return;
    const damage = damageAfterDefense(raw, unit.defense);
    unit.health = Math.max(0, unit.health - damage);
    this.events.push({ type: 'hit', unit: unit.id, damage });
    if (unit.health > 0) return;
    unit.alive = false;
    this.events.push({ type: 'destroyed', unit: unit.id, team: unit.team });
    if (unit.kind === 'base') this.events.push({ type: 'base-destroyed' });
    else if (unit.team === 'player') this.events.push({ type: 'player-destroyed' });
    else this.events.push({ type: 'enemy-destroyed', id: unit.levelId });
  }
  checkOutcome() {
    if (!this.active) return;
    if (!this.player.alive) { this.finish('defeat'); return; }
    if (!this.base.alive && this.enemies.every(enemy => !enemy.alive)) this.finish('victory');
  }
  finish(outcome) {
    if (!this.active) return;
    this.active = false;
    this.outcome = outcome;
    this.events.push({ type: 'combat-end', outcome });
  }
  fixedUpdate(dt, input = {}) {
    if (!this.active) return;
    const step = Math.min(Math.max(Number(dt) || 0, 0), .05);
    if (!step) return;
    this.elapsed += step;
    this.updatePlayer(step, input);
    this.updateEnemies(step);
    this.updateProjectiles(step);
    this.checkOutcome();
  }
  takeEvents() {
    const list = this.events;
    this.events = [];
    return list;
  }
}

// ---------------------------------------------------------------- presentation layer
const RUN_EVENTS = new Set(['enemy-destroyed', 'base-destroyed', 'player-destroyed', 'combat-end']);

export function createCombat({ runtime, run, scene, onEvent, onHud }) {
  const sim = new CombatSim({ run });
  const host = runtime.host;
  const units = scene.units || {};
  const effects = new THREE.Group();
  effects.name = 'combat-effects';
  scene.group.add(effects);
  const smokeMap = smokeTexture();
  const smokeUpdates = [];
  const bursts = [];
  const shells = [];
  const burstGeometry = new THREE.SphereGeometry(1, 10, 7);
  const shellGeometry = new THREE.SphereGeometry(.17, 8, 6);
  const shellMaterial = new THREE.MeshBasicMaterial({ color: '#ffe2a6' });
  for (let index = 0; index < 32; index++) {
    const mesh = new THREE.Mesh(shellGeometry, shellMaterial);
    mesh.visible = false;
    effects.add(mesh);
    shells.push(mesh);
  }
  for (let index = 0; index < 12; index++) {
    const material = new THREE.MeshBasicMaterial({ color: '#ffb457', transparent: true, opacity: 0, depthWrite: false });
    const mesh = new THREE.Mesh(burstGeometry, material);
    mesh.visible = false;
    effects.add(mesh);
    bursts.push({ mesh, life: 0, duration: .45, radius: 2 });
  }
  const keys = new Set();
  let fireHeld = false, disposed = false, hudTimer = 0;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hitPoint = new THREE.Vector3();
  const cameraTarget = new THREE.Vector3(sim.player.position.x, 1.8, sim.player.position.z);
  const shotDirection = new THREE.Vector3();
  const FORWARD = new THREE.Vector3(0, 0, 1);
  const crosshair = document.querySelector('#crosshair');
  // Chase camera state. `cameraYaw` is its own damped heading so a hull turn does not
  // whip the whole view around, and `cameraEntry` eases the jump from the workbench view.
  let cameraYaw = sim.player.yaw, cameraEntry = 0, cameraReady = false;
  let pointerAim = null;

  // Aim at whatever the pointer is actually over: an enemy hull first, then the ground.
  // Pointing at the sky falls back to a far point along the ray so long shots stay possible.
  function aimFromPointer(clientX, clientY) {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    pointer.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, runtime.camera);
    const targets = [];
    for (const object of units.enemies?.values() || []) if (object.visible) targets.push(object);
    if (units.base?.visible) targets.push(units.base);
    if (targets.length) {
      const hits = raycaster.intersectObjects(targets, true);
      if (hits.length) return { x: hits[0].point.x, y: hits[0].point.y, z: hits[0].point.z, kind: 'unit' };
    }
    if (raycaster.ray.intersectPlane(groundPlane, hitPoint)) return { x: hitPoint.x, y: hitPoint.y, z: hitPoint.z, kind: 'ground' };
    const direction = raycaster.ray.direction;
    const length = Math.hypot(direction.x, direction.z) || 1;
    return { x: sim.player.position.x + (direction.x / length) * 120, y: 1.2, z: sim.player.position.z + (direction.z / length) * 120, kind: 'sky' };
  }
  // The reticle follows the pointer instead of sitting at the screen centre: the shell is
  // aimed at the pointer, so a fixed centre reticle would lie about where it goes.
  function placeCrosshair(clientX, clientY) {
    if (!crosshair) return;
    crosshair.style.left = `${clientX}px`;
    crosshair.style.top = `${clientY}px`;
  }
  const onPointerMove = event => { placeCrosshair(event.clientX, event.clientY); pointerAim = aimFromPointer(event.clientX, event.clientY) || pointerAim; };
  const onPointerDown = event => {
    if (event.button !== 0) return;
    placeCrosshair(event.clientX, event.clientY);
    pointerAim = aimFromPointer(event.clientX, event.clientY) || pointerAim;
    fireHeld = true;
  };
  const onPointerUp = () => { fireHeld = false; };
  const isEditable = target => target && (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable);
  const onKeyDown = event => {
    if (isEditable(event.target)) return;
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) { keys.add(event.code); event.preventDefault(); }
    if (event.code === 'Space') { fireHeld = true; event.preventDefault(); }
  };
  const onKeyUp = event => { keys.delete(event.code); if (event.code === 'Space') fireHeld = false; };
  const onBlur = () => { keys.clear(); fireHeld = false; };
  host.addEventListener('pointermove', onPointerMove);
  host.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', onBlur);
  runtime.controls.enabled = false;
  runtime.setKeyboardPan(false);
  // A preset tween or "复位" during the battle would fight the chase camera every frame.
  runtime.setAutoRotate(false);
  runtime.lockCamera(true);
  // Start with the reticle on the viewport centre and the gun already aimed there; the
  // system cursor is hidden over the battlefield so the reticle is the only pointer.
  const startRect = host.getBoundingClientRect();
  const startX = startRect.left + startRect.width / 2, startY = startRect.top + startRect.height / 2;
  placeCrosshair(startX, startY);
  pointerAim = aimFromPointer(startX, startY) || pointerAim;
  host.style.cursor = 'none';

  function spawnBurst(position, radius, color) {
    const burst = bursts.find(entry => entry.life <= 0) || bursts[0];
    burst.life = burst.duration;
    burst.radius = radius;
    burst.mesh.position.set(position.x, Math.max(position.y, .3), position.z);
    burst.mesh.material.color.set(color || '#ffb457');
    burst.mesh.visible = true;
  }
  function hideUnit(id) {
    if (id === 'player') {
      if (units.player?.object) units.player.object.visible = false;
      return;
    }
    if (id === 'base') {
      if (units.base) units.base.visible = false;
      return;
    }
    const object = units.enemies?.get(id);
    if (object) object.visible = false;
    const unit = sim.units.find(entry => entry.id === id);
    if (unit) smokeUpdates.push(smokeColumn(scene.group, [unit.position.x, .4, unit.position.z], { count: 18, size: 2.6, map: smokeMap }));
  }
  function drainEvents() {
    for (const event of sim.takeEvents()) {
      if (event.type === 'impact') spawnBurst(event.position, Math.max(1.2, event.radius * 2.2), event.kind === 'ground' ? '#d9c08a' : '#ffb457');
      else if (event.type === 'fired') spawnBurst(event.position, .9, '#ffe7b8');
      else if (event.type === 'destroyed') { hideUnit(event.unit); spawnBurst(sim.units.find(entry => entry.id === event.unit)?.position || { x: 0, y: 1, z: 0 }, 4, '#ff9a4d'); }
      else if (RUN_EVENTS.has(event.type)) onEvent?.(event);
    }
  }
  function syncVisuals(delta) {
    const player = sim.player;
    const playerObject = units.player?.object;
    if (playerObject) {
      playerObject.position.set(player.position.x, 0, player.position.z);
      playerObject.rotation.y = player.yaw;
      if (units.player.turret) units.player.turret.rotation.y = player.turretYaw;
      if (units.player.pivot) units.player.pivot.rotation.x = -player.pitch;
    }
    for (const enemy of sim.enemies) {
      const object = units.enemies?.get(enemy.id);
      if (!object || !enemy.alive) continue;
      object.position.set(enemy.position.x, 0, enemy.position.z);
      object.rotation.y = enemy.yaw;
    }
    for (let index = 0; index < shells.length; index++) {
      const shot = sim.projectiles[index];
      const mesh = shells[index];
      if (!shot) { mesh.visible = false; continue; }
      mesh.visible = true;
      mesh.position.set(shot.position.x, shot.position.y, shot.position.z);
      // Stretch the sphere along its velocity so a fast straight shot reads as a tracer
      // instead of a dot that teleports between frames.
      shotDirection.set(shot.velocity.x, shot.velocity.y, shot.velocity.z);
      const length = shotDirection.length();
      if (length > 1e-4) {
        shotDirection.multiplyScalar(1 / length);
        mesh.quaternion.setFromUnitVectors(FORWARD, shotDirection);
        mesh.scale.set(1, 1, shot.straight ? 4.2 : 2.2);
      }
    }
    for (const burst of bursts) {
      if (burst.life <= 0) { burst.mesh.visible = false; continue; }
      burst.life -= delta;
      const progress = 1 - Math.max(burst.life, 0) / burst.duration;
      burst.mesh.visible = true;
      burst.mesh.scale.setScalar(burst.radius * (.35 + progress * .9));
      burst.mesh.material.opacity = Math.max(0, .85 * (1 - progress));
    }
    for (let index = smokeUpdates.length - 1; index >= 0; index--) smokeUpdates[index](delta);
  }
  function updateCamera(delta) {
    const player = sim.player;
    const cam = COMBAT.camera;
    if (!cameraReady) {
      // Start from wherever the player left the free camera, so entering the battle eases
      // in instead of snapping to a new angle. If that view is already roughly behind the
      // hull, take the hull heading: it avoids a pointless 180-degree swing on entry.
      const dx = runtime.camera.position.x - player.position.x;
      const dz = runtime.camera.position.z - player.position.z;
      const offsetYaw = Math.hypot(dx, dz) > 2 ? wrap(Math.atan2(-dx, -dz)) : player.yaw;
      cameraYaw = Math.abs(wrap(player.yaw - offsetYaw)) < Math.PI * .5 ? player.yaw : offsetYaw;
      cameraReady = true;
    }
    cameraEntry = Math.min(1, cameraEntry + delta / cam.entryTime);
    const ease = cameraEntry * cameraEntry * (3 - 2 * cameraEntry);
    cameraYaw = followYaw(cameraYaw, player.yaw, delta, { lambda: cam.yawLambda * (.7 + .3 * ease) });
    const desired = new THREE.Vector3(
      player.position.x - Math.sin(cameraYaw) * cam.distance,
      player.position.y + cam.height,
      player.position.z - Math.cos(cameraYaw) * cam.distance
    );
    runtime.camera.position.lerp(desired, 1 - Math.exp(-cam.positionLambda * (.12 + .88 * ease) * delta));
    // Look ahead along the camera's own heading: the tank then stays near the screen
    // centre even while the chase heading trails the hull through a turn.
    const target = new THREE.Vector3(
      player.position.x + Math.sin(cameraYaw) * cam.lookAhead,
      player.position.y + cam.lookHeight,
      player.position.z + Math.cos(cameraYaw) * cam.lookAhead
    );
    cameraTarget.lerp(target, 1 - Math.exp(-cam.targetLambda * delta));
    runtime.controls.target.copy(cameraTarget);
    runtime.camera.lookAt(cameraTarget);
  }
  function hudSnapshot() {
    return {
      active: sim.active,
      health: sim.player.health, maxHealth: sim.player.maxHealth,
      reload: sim.player.reload, reloadMax: 1 / Math.max(sim.player.fireRate, .2),
      enemies: sim.aliveEnemies, totalEnemies: sim.totalEnemies,
      baseHealth: sim.base.health, baseMax: sim.base.maxHealth,
      outcome: sim.outcome
    };
  }
  const system = {
    fixedUpdate(dt) {
      sim.fixedUpdate(dt, {
        throttle: (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0),
        steer: (keys.has('KeyA') ? 1 : 0) - (keys.has('KeyD') ? 1 : 0),
        aim: pointerAim,
        fire: fireHeld
      });
    },
    update(delta) {
      if (disposed) return;
      drainEvents();
      // A run event may have ended the battle and rebuilt the scene from under us.
      if (disposed) return;
      syncVisuals(delta);
      updateCamera(delta);
      hudTimer += delta;
      if (hudTimer > .12) { hudTimer = 0; onHud?.(hudSnapshot()); }
    },
    dispose() { stop(); }
  };
  const detach = runtime.addSystem(system);
  let stopped = false;
  function stop() {
    if (stopped) return;
    stopped = true;
    disposed = true;
    detach?.();
    host.removeEventListener('pointermove', onPointerMove);
    host.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    window.removeEventListener('blur', onBlur);
    host.style.cursor = '';
    if (crosshair) { crosshair.style.left = ''; crosshair.style.top = ''; }
    effects.removeFromParent();
    // Hand the free camera back with the orbit pivot on the hull, not on the point the
    // chase camera was looking at 14 m ahead.
    runtime.lockCamera(false);
    runtime.controls.enabled = true;
    runtime.controls.target.set(sim.player.position.x, 1.6, sim.player.position.z);
    runtime.controls.update();
    runtime.invalidate();
  }
  return { sim, stop, state: sim, hud: hudSnapshot };
}
