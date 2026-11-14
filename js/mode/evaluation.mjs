import { PARTS, TYPES, PROJECTILES, BALANCE, RULES_VERSION, SCHEMA_VERSION } from './catalog.mjs';
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const round = value => Math.round(value * 1000) / 1000;
const owns = (object, key) => typeof key === 'string' && Object.hasOwn(object, key);
export function boundsOf(instance) {
  const size = PARTS[instance.partId].size;
  const c = Math.abs(Math.cos(instance.yaw)), s = Math.abs(Math.sin(instance.yaw));
  const half = [(size[0] * c + size[2] * s) / 2, size[1] / 2, (size[0] * s + size[2] * c) / 2];
  return { min: instance.position.map((v, i) => v - half[i]), max: instance.position.map((v, i) => v + half[i]) };
}
export function validateBlueprint(blueprint, unlocked = Object.keys(PARTS)) {
  const errors = [];
  if (!blueprint || blueprint.schemaVersion !== SCHEMA_VERSION || !owns(TYPES, blueprint.type) || typeof blueprint.id !== 'string' || !blueprint.id || typeof blueprint.name !== 'string' || !blueprint.name.trim() || !Number.isInteger(blueprint.revision) || blueprint.revision < 1) return ['蓝图头信息或版本无效'];
  if (!Array.isArray(blueprint.parts) || !blueprint.parts.length || blueprint.parts.length > BALANCE.maxParts) return ['部件数量超出范围'];
  const ids = new Set();
  for (const item of blueprint.parts) {
    if (!item || typeof item.id !== 'string' || !item.id || ids.has(item.id) || !owns(PARTS, item.partId) || !Array.isArray(item.position) || item.position.length !== 3 || !item.position.every(v => Number.isFinite(v) && Math.abs(v) <= BALANCE.maxExtent) || !Number.isFinite(item.yaw) || (item.parentId !== null && typeof item.parentId !== 'string') || (item.scale !== undefined)) {
      errors.push('部件 ID、坐标或变换无效（暂不支持缩放）'); continue;
    }
    ids.add(item.id);
    if (!unlocked.includes(item.partId)) errors.push(`${item.id}：部件未解锁`);
    if (!PARTS[item.partId].types.includes(blueprint.type)) errors.push(`${item.id}：不适用于当前坦克类型`);
  }
  if (errors.length) return errors;
  const map = new Map(blueprint.parts.map(item => [item.id, item]));
  const roots = blueprint.parts.filter(item => item.parentId === null);
  if (roots.length !== 1 || PARTS[roots[0]?.partId]?.role !== 'hull') errors.push('需要唯一的车体根节点');
  const counts = role => blueprint.parts.filter(item => PARTS[item.partId].role === role).length;
  if (counts('hull') !== 1 || counts('engine') !== 1 || counts('mobility') !== 1) errors.push('需要且只能有一个车体、一个引擎和一组履带');
  if (counts('weapon') < 1 || counts('weapon') > BALANCE.maxWeapons) errors.push('武器数量必须为 1～4');
  if (counts('turret') > BALANCE.maxTurrets) errors.push('最多只能安装一个炮塔');
  const primary = map.get(blueprint.primaryWeaponId);
  if (!primary || PARTS[primary.partId].role !== 'weapon') errors.push('需要指定有效主武器');
  if (blueprint.type === 'artillery' && primary?.partId !== 'mortar') errors.push('高坦主武器必须为迫击炮');
  for (const item of blueprint.parts) {
    const seen = new Set([item.id]); let parent = item.parentId;
    while (parent !== null) {
      if (!map.has(parent) || seen.has(parent)) { errors.push(`${item.id}：连接缺失或存在循环`); break; }
      seen.add(parent); parent = map.get(parent).parentId;
    }
    const bounds = boundsOf(item);
    if (bounds.min[1] < -.01) errors.push(`${item.id}：部件穿过地面`);
    if (item.parentId && map.has(item.parentId)) {
      const other = boundsOf(map.get(item.parentId));
      const gap = Math.max(...bounds.min.map((v, i) => Math.max(v - other.max[i], other.min[i] - bounds.max[i])));
      if (gap > BALANCE.contactTolerance) errors.push(`${item.id}：未接触所连接的部件`);
    }
  }
  // Conservative rotated AABBs; exact mesh/socket collision comes in the editor phase.
  for (let i = 0; i < blueprint.parts.length; i++) for (let j = i + 1; j < blueprint.parts.length; j++) {
    const a = boundsOf(blueprint.parts[i]), b = boundsOf(blueprint.parts[j]);
    if (a.min.every((v, axis) => Math.min(a.max[axis], b.max[axis]) - Math.max(v, b.min[axis]) > .05)) errors.push(`${blueprint.parts[i].id}/${blueprint.parts[j].id}：部件实体重叠`);
  }
  return [...new Set(errors)];
}

export function evaluateTank(blueprint, unlocked) {
  const errors = validateBlueprint(blueprint, unlocked);
  if (errors.length) return { valid: false, rulesVersion: RULES_VERSION, errors, stats: null };
  const parts = [...blueprint.parts].sort((a, b) => a.id.localeCompare(b.id, 'en'));
  const type = TYPES[blueprint.type];
  const total = property => parts.reduce((sum, item) => sum + (PARTS[item.partId][property] || 0), 0);
  const mass = total('mass'), center = [0, 1, 2].map(axis => parts.reduce((sum, item) => sum + item.position[axis] * PARTS[item.partId].mass, 0) / mass);
  const boxes = parts.map(boundsOf);
  const min = [0, 1, 2].map(axis => Math.min(...boxes.map(b => b.min[axis])));
  const max = [0, 1, 2].map(axis => Math.max(...boxes.map(b => b.max[axis])));
  const size = max.map((v, i) => v - min[i]);
  const tracks = parts.find(item => PARTS[item.partId].role === 'mobility');
  const support = boundsOf(tracks);
  const offset = Math.max(Math.abs(center[0] - tracks.position[0]) / ((support.max[0] - support.min[0]) / 2), Math.abs(center[2] - tracks.position[2]) / ((support.max[2] - support.min[2]) / 2));
  if (offset > 1) return { valid: false, rulesVersion: RULES_VERSION, errors: ['重心投影超出履带支撑范围'], stats: null };
  const stability = clamp(1 - offset * .4 - Math.max(0, center[1] - 1.5) * .12, .25, 1);
  const fit = clamp(1 - Math.abs(mass - type.preferredMass) / (type.preferredMass * 2), .5, 1);
  const fitFactor = .85 + .15 * fit;
  const turret = parts.find(item => PARTS[item.partId].role === 'turret');
  const weapons = parts.filter(item => PARTS[item.partId].role === 'weapon').map(item => {
    const part = PARTS[item.partId];
    return { instanceId: item.id, partId: item.partId, position: [...item.position], yaw: item.yaw, onTurret: Boolean(turret && item.parentId === turret.id), attack: round(part.damage * type.attack * fitFactor), fireRate: round(part.rate * type.rate), projectile: { kind: part.projectile, ...PROJECTILES[part.projectile] } };
  });
  const primary = weapons.find(weapon => weapon.instanceId === blueprint.primaryWeaponId);
  const stats = {
    maxHealth: round(total('health') * type.health),
    moveSpeed: round(clamp(total('power') / mass * type.speed * stability * fitFactor, BALANCE.minSpeed, BALANCE.maxSpeed)),
    turnSpeed: round(clamp(2 * type.turn * stability / (1 + mass * (size[0] ** 2 + size[2] ** 2) / 500), .1, 3)),
    defense: round(total('armor') * type.defense), attack: primary.attack, fireRate: primary.fireRate,
    ...(turret ? { turretSpeed: round(clamp(3.2 * type.turn * stability / (1 + PARTS[turret.partId].mass * .08 + mass * .01), .15, 3)) } : {}),
    ...primary.projectile
  };
  const warnings = ['原型评估：使用部件包围盒近似结构，尚未验证炮口遮挡、承重与真实碰撞。'];
  if (!turret) warnings.push('无炮塔：武器直接固定在车体上，转向时无法独立瞄准。');
  return { valid: true, rulesVersion: RULES_VERSION, blueprintRevision: blueprint.revision, errors: [],
    warnings, stats, weapons,
    metrics: { mass, centerOfMass: center.map(round), size: size.map(round), stability: round(stability), typeFit: round(fit), hasTurret: Boolean(turret) },
    explanation: { moveSpeed: '引擎功率 / 总质量 × 类型系数 × 稳定性 × 适配修正', turnSpeed: '受质量、水平尺寸和重心稳定性影响', defense: '车体与硬装甲评分之和 × 类型系数', attack: '主武器基础伤害 × 类型系数 × 适配修正', health: '车体与装甲生命之和 × 类型系数', turretSpeed: '炮塔质量与总质量越大，炮塔转动越慢；无炮塔时没有独立瞄准' }
  };
}
