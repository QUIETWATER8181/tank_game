export const FIRST_LEVEL = {
  schemaVersion: 1, id: 'steel-journey-01', name: '钢铁征途 · 第一关', nextLevelId: null,
  map: { generator: 'corridor-v1', width: 24, length: 180, forwardAxis: '+Z', terrainModelId: null },
  playerSpawn: [0, 0, 8],
  enemies: [
    { id: 'road-1', templateId: 'basic-infantry', modelId: null, position: [0, 0, 42], behavior: 'frontal', triggerZ: 25 },
    { id: 'road-2', templateId: 'basic-infantry', modelId: null, position: [-8, 0, 82], behavior: 'flank-left', triggerZ: 65 },
    { id: 'road-3', templateId: 'basic-infantry', modelId: null, position: [8, 0, 120], behavior: 'flank-right', triggerZ: 100 },
    { id: 'guard', templateId: 'base-guard', modelId: null, position: [0, 0, 150], behavior: 'guard', triggerZ: 135 }
  ],
  base: { id: 'enemy-base', position: [0, 0, 170], maxHealth: 150, effects: [] },
  victory: { allEnemiesDestroyed: true, baseDestroyed: true }, reward: { parts: 0 }
};

export function generateLevel() {
  const level = structuredClone(FIRST_LEVEL);
  // Deterministic, data-only map plan. A future scene adapter creates terrain meshes.
  level.map.segments = Array.from({ length: 9 }, (_, index) => ({ id: `segment-${index}`, center: [0, 0, index * 20 + 10], size: [24, 20], terrainModelId: null }));
  return level;
}
export function createRun(tank, level = generateLevel()) {
  if (!tank?.assessment?.valid) throw new Error('坦克未通过评估');
  return { schemaVersion: 1, status: 'ready', tick: 0, tank: structuredClone(tank), level: structuredClone(level),
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
