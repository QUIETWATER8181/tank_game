// Level 01 is a data-only plan: the 3D adapter reads `map.cover` / `map.zones` so the
// scenery, the collision list and the combat simulation can never disagree.
// 1 unit = 1 metre, +Z is forward, y is the centre height of a cover box.
const MAP_PLAN = {
  // ① 接敌区（z 25–60）：半埋残骸逼玩家先绕再打，两侧沙袋可以只露炮塔。
  // ② 侧翼区（z 60–125）：z=95 的土堤挡死直线视线，x=±6 留两个 6 m 缺口。
  // ③ 基地攻坚（z 125–175）：门前 15 m 开阔地，院内两个可连锁引爆的弹药堆。
  cover: [
    { id: 'wreck-a', kind: 'wreck', position: [-2.6, .6, 38], size: [4.4, 1.2, 2.8], solid: true },
    { id: 'wreck-b', kind: 'wreck', position: [1.9, .6, 39.2], size: [3.6, 1.2, 2.4], solid: true },
    { id: 'wreck-c', kind: 'wreck', position: [0, .6, 41.6], size: [3, 1.2, 2.2], solid: true },
    { id: 'sandbag-l1', kind: 'sandbag', position: [-9.5, .45, 30], size: [8, .9, 1.4], solid: true },
    { id: 'sandbag-r1', kind: 'sandbag', position: [9.5, .45, 30], size: [8, .9, 1.4], solid: true },
    { id: 'sandbag-l2', kind: 'sandbag', position: [-11, .45, 54], size: [7, .9, 1.4], solid: true },
    { id: 'sandbag-r2', kind: 'sandbag', position: [11, .45, 54], size: [7, .9, 1.4], solid: true },
    { id: 'berm-left', kind: 'berm', position: [-13.5, 1.3, 95], size: [9, 2.6, 3.2], solid: true },
    { id: 'berm-mid', kind: 'berm', position: [0, 1.3, 95], size: [6, 2.6, 3.2], solid: true },
    { id: 'berm-right', kind: 'berm', position: [13.5, 1.3, 95], size: [9, 2.6, 3.2], solid: true },
    { id: 'ammo-west', kind: 'ammo', position: [-7, .5, 170], size: [2.2, 1, 2.2], solid: true, explosive: { radius: 3, damage: 60 } },
    { id: 'ammo-east', kind: 'ammo', position: [7, .5, 170], size: [2.2, 1, 2.2], solid: true, explosive: { radius: 3, damage: 60 } },
    { id: 'crate-gate', kind: 'crate', position: [-14.5, .4, 150], size: [1.8, .8, 1.8], solid: true },
    { id: 'crate-gate-b', kind: 'crate', position: [14.5, .4, 146], size: [1.8, .8, 1.8], solid: true }
  ],
  // speedFactor replaces the WoT resistance triple: only acceleration and reachable
  // speed change, `stats.moveSpeed` stays the value the assessment panel shows.
  zones: [
    { id: 'mud-left', kind: 'mud', position: [-12.5, .01, 110], size: [11, 30], speedFactor: .45 },
    { id: 'rubble-right', kind: 'rubble', position: [12.5, .01, 110], size: [11, 30], speedFactor: .71 }
  ]
};

export const FIRST_LEVEL = {
  schemaVersion: 1, id: 'steel-journey-01', name: '钢铁征途 · 第一关', nextLevelId: null,
  map: { generator: 'corridor-v2', width: 36, length: 180, forwardAxis: '+Z', terrainModelId: null },
  playerSpawn: [0, 0, 8],
  enemies: [
    { id: 'road-1', templateId: 'basic-infantry', modelId: null, position: [0, 0, 42], behavior: 'frontal', triggerZ: 25 },
    { id: 'road-2', templateId: 'basic-infantry', modelId: null, position: [-11, 0, 120], behavior: 'flank-left', triggerZ: 78 },
    { id: 'road-3', templateId: 'basic-infantry', modelId: null, position: [11, 0, 120], behavior: 'flank-right', triggerZ: 78 },
    { id: 'guard', templateId: 'base-guard', modelId: null, position: [0, 0, 150], behavior: 'guard', triggerZ: 132 }
  ],
  base: { id: 'enemy-base', position: [0, 0, 170], maxHealth: 150, effects: [] },
  victory: { allEnemiesDestroyed: true, baseDestroyed: true }, reward: { parts: 0 }
};

// Saves written before corridor-v2 have no cover/zones; fill them in instead of crashing.
export function normalizeLevel(level) {
  const next = level || {};
  next.map = { ...FIRST_LEVEL.map, ...(next.map || {}) };
  if (!Array.isArray(next.map.segments)) {
    next.map.segments = Array.from({ length: 9 }, (_, index) => ({ id: `segment-${index}`, center: [0, 0, index * 20 + 10], size: [next.map.width, 20], terrainModelId: null }));
  }
  if (!Array.isArray(next.map.cover)) next.map.cover = MAP_PLAN.cover.map(entry => structuredClone(entry));
  if (!Array.isArray(next.map.zones)) next.map.zones = MAP_PLAN.zones.map(entry => structuredClone(entry));
  return next;
}
export function generateLevel() {
  const level = normalizeLevel(structuredClone(FIRST_LEVEL));
  // Deterministic, data-only map plan. The 3D adapter creates terrain meshes.
  level.map.segments = Array.from({ length: 9 }, (_, index) => ({ id: `segment-${index}`, center: [0, 0, index * 20 + 10], size: [level.map.width, 20], terrainModelId: null }));
  return level;
}
export function createRun(tank, level = generateLevel()) {
  if (!tank?.assessment?.valid) throw new Error('坦克未通过评估');
  return { schemaVersion: 1, status: 'ready', tick: 0, tank: structuredClone(tank), level: structuredClone(normalizeLevel(structuredClone(level))),
    defeatedEnemies: [], baseDestroyed: false, playerDestroyed: false };
}
export function transitionRun(state, event) {
  if (!state || !event) throw new Error('关卡状态或事件缺失');
  const next = structuredClone(state);
  if (event.type === 'start') { if (state.status !== 'ready') throw new Error('关卡不能重复启动'); next.status = 'running'; return next; }
  if (state.status !== 'running') throw new Error('只有运行中的关卡可以接收结果事件');
  if (event.type === 'enemy-destroyed') {
    if (!state.level.enemies.some(enemy => enemy.id === event.id)) throw new Error('未知敌方坦克');
    if (!next.defeatedEnemies.includes(event.id)) next.defeatedEnemies.push(event.id);
  } else if (event.type === 'base-destroyed') next.baseDestroyed = true;
  else if (event.type === 'player-destroyed') next.playerDestroyed = true;
  else throw new Error('未知关卡事件');
  if (next.playerDestroyed) next.status = 'defeat';
  else if (next.baseDestroyed && next.level.enemies.every(enemy => next.defeatedEnemies.includes(enemy.id))) next.status = 'victory';
  return next;
}
export function resultActions(run) {
  if (!['victory', 'defeat'].includes(run.status)) return [];
  return [{ id: 'return', label: '返回关卡选择', enabled: true },
    ...(run.status === 'victory' ? [{ id: 'next', label: run.level.nextLevelId ? '下一关' : '后续关卡待开发', enabled: Boolean(run.level.nextLevelId) }] : [{ id: 'retry', label: '重新准备', enabled: true }])];
}
export function damageAfterDefense(raw, defense, { sameTeam = false, friendlyFire = false } = {}) {
  if (![raw, defense].every(value => Number.isFinite(value) && value >= 0)) throw new Error('伤害和防御必须为非负有限数');
  return sameTeam && !friendlyFire ? 0 : raw * 100 / (100 + defense);
}
