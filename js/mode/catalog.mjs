// All gameplay values here are provisional game-design units, not real ballistics.
// Sizes follow roughly real proportions (1 unit = 1 metre) so the 3D proxy reads as a tank.
export const RULES_VERSION = 'prototype-2';
export const SCHEMA_VERSION = 1;
export const TYPES = Object.freeze({
  infantry: { name: '步坦', speed: 1, attack: 1, rate: 1, health: 1, defense: 1, turn: 1, preferredMass: 22 },
  heavy: { name: '重坦', speed: .65, attack: 1.35, rate: .65, health: 1.5, defense: 1.5, turn: .7, preferredMass: 36 },
  assassin: { name: '刺坦', speed: 1.4, attack: 1.2, rate: 1.35, health: .75, defense: .7, turn: 1.4, preferredMass: 16 },
  exotic: { name: '奇坦', speed: 1, attack: 1, rate: 1, health: 1, defense: 1, turn: 1, preferredMass: 24 },
  artillery: { name: '高坦', speed: .8, attack: 1.15, rate: .7, health: 1.3, defense: .9, turn: .8, preferredMass: 28 }
});
const all = Object.keys(TYPES);
export const PARTS = Object.freeze({
  hull: { name: '基础车体', role: 'hull', size: [3.4, 1.2, 6.4], mass: 10, armor: 10, health: 100, cost: 0, types: all },
  tracks: { name: '履带组', role: 'mobility', size: [3.9, .8, 6.6], mass: 5, traction: 32, cost: 0, types: all },
  engine: { name: '基础引擎', role: 'engine', size: [1.4, .8, 1.6], mass: 3, power: 120, cost: 0, types: all },
  turret: { name: '炮塔', role: 'turret', size: [2.5, .9, 3.4], mass: 6, armor: 6, health: 40, cost: 0, types: all },
  cannon: { name: '基础火炮', role: 'weapon', size: [1, .8, 2], mass: 4, damage: 25, rate: 1, projectile: 'shell', cost: 0, types: ['infantry', 'heavy', 'assassin', 'exotic'] },
  mortar: { name: '迫击炮', role: 'weapon', size: [1.4, 1, 1.8], mass: 6, damage: 40, rate: .55, projectile: 'mortar', cost: 0, types: ['artillery', 'exotic'] },
  armor: { name: '硬装甲板', role: 'armor', size: [3, 1, .35], mass: 6, armor: 18, health: 35, cost: 30, types: all },
  rapid: { name: '速射炮', role: 'weapon', size: [.8, .8, 2], mass: 3, damage: 15, rate: 2, projectile: 'shell', cost: 40, types: ['assassin', 'exotic'] },
  bomb: { name: '爆破发射器', role: 'weapon', size: [1.2, .8, 2], mass: 5, damage: 32, rate: .8, projectile: 'bomb', cost: 40, types: ['exotic'] }
});
export const PROJECTILES = Object.freeze({
  shell: { launchSpeed: 35, gravity: 9.8, blastRadius: .15, lifetime: 4, impactDelay: null },
  bomb: { launchSpeed: 22, gravity: 12, blastRadius: 3, lifetime: 4, impactDelay: null },
  mortar: { launchSpeed: 28, gravity: 9.8, blastRadius: 5, lifetime: 8, impactDelay: 2.5 }
});
export const STAT_DEFINITIONS = Object.freeze({
  maxHealth: '生命值', moveSpeed: '米/秒', fireRate: '次/秒', attack: '伤害/发',
  defense: '防御评分：实际伤害 = 原始伤害 × 100 / (100 + 防御)',
  turnSpeed: '弧度/秒；车体转向',
  turretSpeed: '弧度/秒；炮塔转向，无炮塔时不适用',
  gravity: '米/秒²；子弹下落加速度，不能单独决定射程',
  launchSpeed: '米/秒；与发射角度、重力、出生高度及寿命共同决定弹道',
  blastRadius: '米', impactDelay: '秒；迫击炮设计命中延迟，后续弹道求解器需要满足此约束'
});
export const BALANCE = Object.freeze({ minSpeed: 1, maxSpeed: 18, maxParts: 128, maxExtent: 30, maxWeapons: 4, contactTolerance: .16, maxTurrets: 1, snapGrid: .1 });

export function createStarterBlueprint(type = 'infantry', id = 'starter') {
  if (!Object.hasOwn(TYPES, type)) throw new Error('未知坦克类型');
  const weapon = type === 'artillery' ? 'mortar' : 'cannon';
  return { schemaVersion: SCHEMA_VERSION, id, name: `${TYPES[type].name}原型`, type, revision: 1, primaryWeaponId: 'weapon',
    parts: [
      { id: 'hull', partId: 'hull', parentId: null, position: [0, 1.4, 0], yaw: 0 },
      { id: 'tracks', partId: 'tracks', parentId: 'hull', position: [0, .4, 0], yaw: 0 },
      { id: 'engine', partId: 'engine', parentId: 'hull', position: [0, 2.4, -2.4], yaw: 0 },
      { id: 'turret', partId: 'turret', parentId: 'hull', position: [0, 2.45, .4], yaw: 0 },
      { id: 'weapon', partId: weapon, parentId: 'turret', position: [0, type === 'artillery' ? 2.5 : 2.45, type === 'artillery' ? 3.1 : 3.15], yaw: 0 }
    ] };
}
