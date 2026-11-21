import * as THREE from 'three';
import { createApplication, openRepository, createStarterBlueprint, evaluateTank, PARTS, TYPES, transitionRun, suggestPlacement, moveCandidate, snapPlacement, validateBlueprint, BALANCE } from '../mode/index.mjs';
import { blueprintScene, missionScene } from './workbench-scene.mjs';
import { loadLocalModel } from './assets.mjs';
import { disposeObject } from './resources.mjs';
import { createBuildInteraction } from './build-interaction.mjs';
import { createCombat } from './combat.mjs';

const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const uid = prefix => `${prefix}-${crypto.randomUUID()}`;
const option = (value, label, selected) => `<option value="${escape(value)}" ${value === selected ? 'selected' : ''}>${escape(label)}</option>`;
const button = (action, label, extra = '') => `<button type="button" data-action="${action}" ${extra}>${label}</button>`;
const categories = { terrain: '场地模型', 'enemy-tank': '敌方坦克', 'player-tank': '玩家坦克' };
const roleLabels = { hull: '车体', mobility: '机动', engine: '动力', turret: '炮塔', weapon: '武器', armor: '防护' };
const uniqueRoles = new Set(['hull', 'mobility', 'engine', 'turret']);
const icons = {
  hull: '<path d="M3 14h18l-2 4H5z"/><rect x="7" y="9" width="8" height="5" rx="1"/><path d="M15 11h5"/>',
  mobility: '<rect x="2.5" y="9" width="19" height="8" rx="4"/><circle cx="7" cy="13" r="2"/><circle cx="12" cy="13" r="2"/><circle cx="17" cy="13" r="2"/>',
  engine: '<rect x="4" y="7" width="11" height="10" rx="1"/><path d="M15 10h4v4h-4"/><path d="M7 7V4M12 7V4M7 20v-3M12 20v-3"/>',
  turret: '<path d="M6 17a6 6 0 0 1 12 0z"/><path d="M18 14h4"/><path d="M3 19h18"/>',
  weapon: '<path d="M3 12h12"/><path d="M15 9h6v6h-6z"/><path d="M5 12v5M9 12v5"/>',
  armor: '<path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"/><path d="M12 8v7"/>'
};
const isEditable = target => {
  if (!target) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
};
const partIcon = role => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[role] || icons.hull}</svg>`;

export async function mountWorkbench(runtime) {
  const workspace = document.querySelector('#workspace'), report = document.querySelector('#report');
  const message = document.querySelector('#message'), caption = document.querySelector('#sceneCaption');
  const hud = document.querySelector('#sceneHud'), dock = document.querySelector('#buildDock');
  const cameraTools = [...document.querySelectorAll('[data-camera]')];
  let repo, app, profile, assets = [], tab = 'workshop', busy = false, disposed = false, generation = 0;
  let blueprint = createStarterBlueprint('infantry', uid('draft')), selected = 'weapon', dirty = true;
  let run = null, selectedTank = null, pendingFile = null, modelCategory = 'player-tank', modelFilter = '', boundModel = null;
  let playerPose = null;
  let history = [], future = [], snap = BALANCE.snapGrid, interaction = null, levelScene = null, levelSystem = null;
  let combat = null, combatHud = null;
  let sceneKind = null, sceneKey = '', garageKey = '', saveTimer = 0, saving = false, saveQueued = false, dragSnapshot = false, focusEnemyCursor = -1;
  const notify = (text, error = false) => { message.textContent = text; message.classList.toggle('error', error); };
  const assessment = () => evaluateTank(blueprint, profile.unlockedParts);
  const refresh = async () => { profile = await app.profile(); assets = await app.models.list(); };

  // ---------------------------------------------------------------- scenes
  function clearLevelSystem() {
    combat?.stop(); combat = null; combatHud = null;
    levelSystem?.(); levelSystem = null; levelScene = null;
  }
  function showTankScene(value, kind, { reset = false, pickable = true, hudValue = null } = {}) {
    sceneKind = kind;
    sceneKey = `${kind}:${value.id}:${value.revision}`;
    clearLevelSystem();
    const root = blueprintScene(value, pickable ? selected : null);
    if (runtime && !runtime.disposed) {
      const changed = runtime.setEnvironment('workshop');
      runtime.replaceContent(root);
      interaction?.setEnabled(pickable);
      interaction?.setRoot(pickable ? root : null);
      interaction?.setSelected(selected);
      if (reset || changed) runtime.resetCamera();
    } else disposeObject(root);
    caption.textContent = kind === 'garage' ? '成品坦克 · 写实代理模型 · 单位：米' : '部件结构预览';
    updateHud(hudValue);
  }
  function showLevelScene({ reset = false, combatMode = false, pose = playerPose } = {}) {
    if (!run) return null;
    sceneKind = 'level';
    clearLevelSystem();
    const scene = missionScene(run, { combat: combatMode, playerPose: combatMode ? null : pose });
    levelScene = scene;
    if (runtime && !runtime.disposed) {
      const changed = runtime.setEnvironment('level');
      runtime.replaceContent(scene.group);
      interaction?.setEnabled(false);
      interaction?.setRoot(null);
      levelSystem = runtime.addSystem({ update: delta => scene.update(delta) });
      if (!combatMode && (changed || reset)) focusCamera('player', { duration: reset ? 0.001 : 0.9 });
    } else disposeObject(scene.group);
    sceneKey = levelStateKey();
    caption.textContent = combatMode
      ? '第一关 · W/A/S/D 驾驶 · 鼠标瞄准 · 左键或空格开火'
      : '第一关 · 36 × 180 米 · 拖动旋转，右键平移，滚轮缩放';
    updateHud();
    return scene;
  }
  function levelStateKey() {
    if (!run) return '';
    return [run.status, run.baseDestroyed, run.playerDestroyed, run.defeatedEnemies.join(',')].join('|');
  }
  function syncLevelScene(force = false) {
    if (!run) return;
    // Never rebuild the scene mid-battle: it would reset the live simulation.
    if (combat?.state.active) { updateHud(); return; }
    if (!force && sceneKind === 'level' && sceneKey === levelStateKey()) { updateHud(); return; }
    showLevelScene({ reset: force });
  }
  function focusCamera(id, options = {}) {
    if (!runtime || !levelScene) return false;
    const ok = runtime.focusPointById(levelScene.focus, id, { duration: 0.8, ...options });
    if (ok) runtime.setAutoRotate(false);
    return ok;
  }
  function focusEnemy() {
    if (!run) return;
    const alive = run.level.enemies.filter(enemy => !run.defeatedEnemies.includes(enemy.id));
    if (!alive.length) { notify('没有存活的敌坦。'); return; }
    focusEnemyCursor = (focusEnemyCursor + 1) % alive.length;
    const target = alive[focusEnemyCursor];
    focusCamera(target.id);
    notify(`视角对准：${target.behavior === 'guard' ? '终点守卫' : '途中敌坦'}`);
  }
  function updateHud(hudValue = null) {
    if (!hud) return;
    hud.classList.toggle('battle', Boolean(combatHud));
    if (tab === 'mission' && run) {
      if (combatHud) { renderCombatHud(); return; }
      const labels = { ready: '准备就绪', running: '检验进行中', victory: '胜利条件达成', defeat: '失败条件达成' };
      hud.innerHTML = `<strong>${escape(run.tank.blueprint.name)}</strong> · ${labels[run.status]} · 敌坦 ${run.defeatedEnemies.length}/${run.level.enemies.length} · 基地${run.baseDestroyed ? '已摧毁' : '存活'}`;
      return;
    }
    const result = hudValue?.value || assessment();
    const name = hudValue?.name || blueprint.name;
    const partCount = hudValue?.parts ?? blueprint.parts.length;
    if (!result.valid) { hud.innerHTML = `<strong>结构待修正</strong> · 3D 拖动仍可使用`; return; }
    const size = result.metrics.size.map(v => v.toFixed(1)).join(' × ');
    hud.innerHTML = `<strong>${escape(name)}</strong> · 质量 ${result.metrics.mass} t · 尺寸 ${size} m · ${partCount} 部件 · ${result.weapons.length} 武器${result.metrics.hasTurret ? ' · 炮塔' : ''}`;
  }

  // ---------------------------------------------------------------- combat
  function renderCombatHud() {
    if (!hud || !combatHud || !run) return;
    const state = combatHud;
    const health = Math.max(0, Math.round(state.health));
    const reload = state.reloadMax ? Math.min(1, Math.max(0, 1 - state.reload / state.reloadMax)) : 1;
    hud.innerHTML = `<strong>${escape(run.tank.blueprint.name)}</strong> · 生命 <b>${health}</b>/${Math.round(state.maxHealth)} · 装填 ${Math.round(reload * 100)}% · 敌坦 ${state.enemies}/${state.totalEnemies} · 基地 ${Math.max(0, Math.round(state.baseHealth))}/${Math.round(state.baseMax)}`;
  }
  function startCombat() {
    if (!run || run.status !== 'ready' || !runtime || runtime.disposed) return false;
    run = transitionRun(run, { type: 'start' });
    const scene = showLevelScene({ combatMode: true });
    if (!scene) return false;
    runtime.cancelCameraTween?.();
    combat = createCombat({
      runtime, run, scene,
      onEvent: handleCombatEvent,
      onHud: snapshot => { combatHud = snapshot; if (tab === 'mission') renderCombatHud(); }
    });
    render();
    notify('战斗开始：W/A/S/D 驾驶，鼠标瞄准，左键或空格开火。');
    return true;
  }
  function endCombat() {
    // Keep the tank where the battle ended before the live simulation is torn down, so
    // the rebuilt static scene and the camera stay in the same place.
    const player = combat?.state?.player;
    const pose = player ? { x: player.position.x, z: player.position.z, yaw: player.yaw, turretYaw: player.turretYaw, pitch: player.pitch } : null;
    combat?.stop(); combat = null; combatHud = null;
    if (!run) return;
    playerPose = pose;
    showLevelScene({ reset: false });
    // Settle the free camera on the tank after the chase camera lets go, so orbiting
    // afterwards pivots around something the player recognises.
    focusCamera('player', { duration: .8 });
    render();
  }
  // Single entry point for every rule event, so manual dev buttons and the simulation
  // cannot disagree about when a level ends.
  function applyRunEvent(event) {
    if (!run || run.status !== 'running') return false;
    try { run = transitionRun(run, event); } catch (error) { notify(error.message, true); return false; }
    if (run.status === 'running') render();
    else endCombat();
    return true;
  }
  function handleCombatEvent(event) {
    if (event.type === 'combat-end') {
      // The rule events arrive first and may already have torn the battle down.
      if (combat && run && run.status !== 'running') endCombat();
      return;
    }
    applyRunEvent(event);
  }
  // Read-only battle snapshot for the browser probes and manual debugging.
  function publishBattleState() {
    if (!window.__steel3d) return;
    window.__steel3d.battle = () => {
      if (!combat) return null;
      const sim = combat.state;
      return {
        active: sim.active, outcome: sim.outcome,
        health: Math.round(sim.player.health), maxHealth: sim.player.maxHealth,
        position: [Number(sim.player.position.x.toFixed(2)), Number(sim.player.position.z.toFixed(2))],
        yaw: Number(sim.player.yaw.toFixed(3)),
        turretYaw: Number(sim.player.turretYaw.toFixed(3)),
        aim: [Number(sim.playerAim.x.toFixed(2)), Number(sim.playerAim.z.toFixed(2))],
        pitch: Number(sim.player.pitch.toFixed(3)),
        enemies: sim.aliveEnemies, total: sim.totalEnemies,
        enemyHealth: sim.enemies.map(enemy => Math.round(enemy.health)),
        base: Math.round(sim.base.health), projectiles: sim.projectiles.length,
        shots: sim.shots, hits: sim.hits, status: run?.status || null
      };
    };
    // Normalised screen position of an enemy, so probes can aim at what the player sees.
    window.__steel3d.enemyScreen = index => {
      if (!runtime || runtime.disposed || !levelScene?.units) return null;
      const enemy = run?.level.enemies?.[index];
      const object = enemy ? levelScene.units.enemies.get(enemy.id) : null;
      if (!object || !object.visible) return null;
      const point = new THREE.Vector3(object.position.x, 1.4, object.position.z).project(runtime.camera);
      return { x: (point.x + 1) / 2, y: (1 - point.y) / 2, depth: Number(point.z.toFixed(3)) };
    };
  }

  // ---------------------------------------------------------------- report（验收单）
  function renderReport(value = assessment(), source = blueprint) {
    const manufacture = document.querySelector('[data-action="manufacture"]');
    if (manufacture) manufacture.disabled = !value.valid;
    if (!value.valid) {
      report.innerHTML = `<h2>需要调整</h2><p class="subtle">解决以下问题后才能制造；3D 中仍可点选和拖动。</p><ul class="issues">${value.errors.map(e => `<li>${escape(e)}</li>`).join('')}</ul>`;
      return;
    }
    const s = value.stats, m = value.metrics;
    const size = m.size.map(v => v.toFixed(2));
    const linked = source.parts.filter(p => p.parentId || PARTS[p.partId]?.role === 'hull').length;
    const rows = [
      ['结构校验', '<b class="ok">通过 ✓</b>'],
      ['连接完整性', `<b>${linked} / ${source.parts.length}</b>`],
      ['整车质量', `<b>${m.mass}<em>t</em></b>`],
      ['最大外形', `<b>${size[2]}<em>m</em></b>`],
      ['武器挂载', `<b>${value.weapons.length}<em>/ ${BALANCE.maxWeapons}</em></b>`],
      ['稳定性', `<span class="circled"><b class="warn">${Math.round(m.stability * 100)}<em>%</em></b>
        <svg viewBox="0 0 76 44"><g fill="none" stroke="#a5332a" stroke-width="1.8" stroke-linecap="round" opacity=".85" filter="url(#roughRing)">
        <path d="M8 24 C 6 12, 26 5, 44 7 C 62 9, 72 18, 68 28 C 64 38, 40 41, 24 37 C 12 34, 9 30, 8 24"/>
        <path d="M10 20 C 12 9, 30 6, 48 8"/></g></svg></span>`],
      ['类型适配', `<b>${Math.round(m.typeFit * 100)}<em>%</em></b>`],
      ['生命 / 移速', `<b>${s.maxHealth}<em>· ${Math.round(s.moveSpeed * 3.6)} km/h</em></b>`]
    ];
    const detail = [
      ['攻击力', s.attack], ['攻速', `${s.fireRate} <small>次/s</small>`], ['防御力', s.defense],
      ['车体转向', `${s.turnSpeed} <small>${Math.round(s.turnSpeed * 180 / Math.PI)}°/s</small>`],
      ...(s.turretSpeed ? [['炮塔转向', `${s.turretSpeed} <small>${Math.round(s.turretSpeed * 180 / Math.PI)}°/s</small>`]] : []),
      ['子弹初速', `${s.launchSpeed} <small>m/s</small>`], ['爆炸半径', `${s.blastRadius} <small>m</small>`],
      ...(s.impactDelay ? [['命中延迟', `${s.impactDelay} <small>s</small>`]] : [])
    ];
    report.innerHTML = `<h2>验收单 <em>GT-03-0117</em></h2>
      <span class="pill">结构通过 · 原型数值</span>
      ${rows.map(([k, v]) => `<div class="vrow"><span>${k}</span>${v}</div>`).join('')}
      <p class="review">${m.hasTurret ? '炮塔独立瞄准' : '无炮塔 · 武器随车体'}，武器 ${value.weapons.length} 件。<br>结构可交付，稳定性与适配随下一次复校一并复核。</p>
      <div class="seal-wrap"><div class="seal">结构合格<small>三 车 间</small></div></div>
      <p class="doc-sign"><span>复核 <i></i></span><span>日期 ${new Date().getMonth() + 1}.${new Date().getDate()}</span></p>
      <details class="dev-tools"><summary>全部数值与计算依据</summary>
        <dl class="metrics">${detail.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        <p class="subtle">尺寸 ${size.join(' × ')} m</p>
        ${Object.values(value.explanation).map(v => `<p class="subtle">${escape(v)}</p>`).join('')}
        <p class="subtle">${escape(value.warnings.join(' '))}</p>
      </details>
      <svg width="0" height="0" aria-hidden="true"><defs><filter id="roughRing"><feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="2"/><feDisplacementMap in="SourceGraphic" scale="2"/></filter></defs></svg>`;
  }

  // ---------------------------------------------------------------- 平面布置图（手绘）
  function renderSketch(value = assessment()) {
    const host = document.querySelector('#sketch');
    if (!host) return;
    if (!value.valid || tab !== 'workshop') { host.innerHTML = ''; return; }
    const m = value.metrics;
    const width = Math.max(.1, m.size[0]), length = Math.max(.1, m.size[2]);
    const scale = Math.min(330 / length, 128 / width);
    const cx = 300, cy = 74;
    const L = length * scale, W = width * scale;
    const halfL = L / 2, halfW = W / 2;
    const trackW = Math.max(9, W * .2);
    const hullW = Math.max(12, W - trackW * 2 - 7);
    const turret = blueprint.parts.find(p => PARTS[p.partId]?.role === 'turret');
    const weapon = blueprint.parts.find(p => p.id === blueprint.primaryWeaponId) || blueprint.parts.find(p => PARTS[p.partId]?.role === 'weapon');
    const tSize = turret ? PARTS[turret.partId].size : null;
    const tx = turret ? cx + (turret.position[2] || 0) * scale : cx;
    const ty = turret ? cy + (turret.position[0] || 0) * scale : cy;
    const trx = tSize ? tSize[2] * scale / 2 : 0;
    const trY = tSize ? tSize[0] * scale / 2 : 0;
    const barrel = weapon ? (PARTS[weapon.partId].size[2] || 2) * scale * 1.8 : 0;
    const dimY = cy + halfW + 22, dimX = cx - halfL - 24;
    let teeth = '';
    for (let x = cx - halfL + 9; x < cx + halfL - 6; x += 19) {
      teeth += `M${x.toFixed(1)} ${(cy - halfW + 3).toFixed(1)} L ${x.toFixed(1)} ${(cy - halfW + trackW - 3).toFixed(1)} `;
      teeth += `M${x.toFixed(1)} ${(cy + halfW - trackW + 3).toFixed(1)} L ${x.toFixed(1)} ${(cy + halfW - 3).toFixed(1)} `;
    }
    host.innerHTML = `<svg viewBox="0 0 600 176">
      <defs><filter id="roughPlan" x="-12%" y="-12%" width="124%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="4"/>
        <feDisplacementMap in="SourceGraphic" scale="2.6"/>
      </filter></defs>
      <g filter="url(#roughPlan)" fill="none" stroke="#3a3226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="${(cx - halfL).toFixed(1)}" y="${(cy - halfW).toFixed(1)}" width="${L.toFixed(1)}" height="${trackW.toFixed(1)}" rx="4"/>
        <rect x="${(cx - halfL).toFixed(1)}" y="${(cy + halfW - trackW).toFixed(1)}" width="${L.toFixed(1)}" height="${trackW.toFixed(1)}" rx="4"/>
        <rect x="${(cx - halfL * .94).toFixed(1)}" y="${(cy - hullW / 2).toFixed(1)}" width="${(L * .94).toFixed(1)}" height="${hullW.toFixed(1)}" rx="5"/>
        ${turret ? `<ellipse cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" rx="${trx.toFixed(1)}" ry="${trY.toFixed(1)}"/>` : ''}
        ${barrel ? `<path d="M${(tx + trx * .4).toFixed(1)} ${(ty - 1.6).toFixed(1)} L ${(tx + trx * .4 + barrel).toFixed(1)} ${(ty - 1.6).toFixed(1)} M ${(tx + trx * .4).toFixed(1)} ${(ty + 1.6).toFixed(1)} L ${(tx + trx * .4 + barrel).toFixed(1)} ${(ty + 1.6).toFixed(1)}"/>` : ''}
        <path d="${teeth}"/>
      </g>
      <g fill="none" stroke="#2f4f7a" stroke-width="1.1" stroke-linecap="round" opacity=".9">
        <path d="M${(cx - halfL).toFixed(1)} ${dimY} L ${(cx + halfL).toFixed(1)} ${dimY}"/>
        <path d="M${(cx - halfL).toFixed(1)} ${dimY - 5} L ${(cx - halfL).toFixed(1)} ${dimY + 5} M ${(cx + halfL).toFixed(1)} ${dimY - 5} L ${(cx + halfL).toFixed(1)} ${dimY + 5}"/>
        <path d="M${dimX} ${(cy - halfW).toFixed(1)} L ${dimX} ${(cy + halfW).toFixed(1)}"/>
        <path d="M${dimX - 5} ${(cy - halfW).toFixed(1)} L ${dimX + 5} ${(cy - halfW).toFixed(1)} M ${dimX - 5} ${(cy + halfW).toFixed(1)} L ${dimX + 5} ${(cy + halfW).toFixed(1)}"/>
      </g>
      <text x="${cx}" y="${dimY + 15}" text-anchor="middle" fill="#2f4f7a" font-family="KaiTi, serif" font-size="13">${length.toFixed(2)} m</text>
      <text x="${dimX - 7}" y="${cy}" text-anchor="middle" fill="#2f4f7a" font-family="KaiTi, serif" font-size="13" transform="rotate(-90 ${dimX - 7} ${cy})">${width.toFixed(2)} m</text>
      <text x="8" y="16" fill="#8a7c63" font-family="KaiTi, serif" font-size="12" letter-spacing="1">图 3-3　平面布置</text>
    </svg>`;
  }

  // ---------------------------------------------------------------- workshop
  function partCard(id, part) {
    const installed = blueprint.parts.some(item => item.partId === id);
    const locked = !profile.unlockedParts.includes(id);
    const unique = uniqueRoles.has(part.role);
    const weaponCount = blueprint.parts.filter(item => PARTS[item.partId].role === 'weapon').length;
    const weaponsFull = part.role === 'weapon' && weaponCount >= BALANCE.maxWeapons;
    const disabled = (unique && installed) || weaponsFull;
    const meta = `${roleLabels[part.role]} · ${part.mass} t${locked ? ` · 解锁 ${part.cost}` : ''}${weaponsFull ? ' · 武器已满' : ''}`;
    return `<button type="button" class="part-card ${unique && installed ? 'installed' : ''}" data-action="addPart" data-part="${id}" ${disabled ? 'disabled' : ''} title="${escape(part.name)}：${roleLabels[part.role]}${locked ? ` · 解锁 ${part.cost} 零件` : ''}">
      <span class="part-icon">${partIcon(part.role)}</span>
      <span class="part-name">${escape(part.name)}</span>
      <span class="part-meta">${meta}</span>
    </button>`;
  }

  function renderWorkshopPanel() {
    const item = blueprint.parts.find(p => p.id === selected);
    const all = Object.entries(PARTS).filter(([, p]) => p.types.includes(blueprint.type));
    // 已装的唯一部件不再列出；武器可多装，继续显示。
    const available = all.filter(([id, p]) => !(uniqueRoles.has(p.role) && blueprint.parts.some(part => part.partId === id)));
    const status = dirty ? '有未保存修改' : '草稿已保存';
    const value = assessment();
    const totalMass = blueprint.parts.reduce((sum, p) => sum + (PARTS[p.partId]?.mass || 0), 0);
    const title = document.querySelector('#docTitle');
    if (title) title.textContent = `${blueprint.name}　改装方案`;
    const sub = document.querySelector('#docSub');
    if (sub) sub.textContent = `${TYPES[blueprint.type].name} · 第 ${blueprint.revision || 1} 稿`;

    const rows = blueprint.parts.map((part, index) => {
      const def = PARTS[part.partId];
      const size = def.size.map(v => Number(v).toFixed(1)).join('×');
      return `<tr><td class="idx">${String(index + 1).padStart(2, '0')}</td>
        <td class="nm">${escape(def.name)}</td><td class="sp">${size}</td>
        <td class="wt">${def.mass} t</td>
        <td class="st${part.id === selected ? ' wait' : ''}">${part.id === selected ? '选中' : '已装'}</td></tr>`;
    }).join('');

    workspace.innerHTML = `<h2>部件清单 <em>${String(blueprint.parts.length).padStart(2, '0')} 件 / ${totalMass} t</em></h2>
      <p class="subtle" id="draftState">${status} · ${blueprint.parts.length} 部件</p>
      <table class="ledger">
        <thead><tr><th class="idx"></th><th>名 称</th><th>规 格</th><th class="wt">重量</th><th class="st">状态</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="total"><span>合计　${blueprint.parts.length} 件</span><span><b>${totalMass} t</b></span></div>

      <h3>可装部件 <span class="subtle" style="font-family:'Ink Free',serif">零件：${profile.currency.parts}</span></h3>
      <div class="palette">${available.map(([id, p]) => partCard(id, p)).join('') || '<p class="subtle">该类型的部件都已装上。</p>'}</div>
      ${!profile.inspectionGrantClaimed ? `<div class="row">${button('grant', '领取 100 测试零件')}</div>` : '<p class="subtle">测试零件已领取 · 与旧模式钱包独立</p>'}

      <h3>当前部件</h3>
      <div class="selection-card">
        <div class="title"><strong>${item ? escape(PARTS[item.partId].name) : '未选中'}</strong><span class="pill">${item ? roleLabels[PARTS[item.partId].role] : '点击 3D 部件'}</span></div>
        ${item ? `
          <div class="row">${button('duplicate', '复制')}${button('remove', '移除')}${PARTS[item.partId].role === 'weapon' ? button('primary', blueprint.primaryWeaponId === item.id ? '当前主武器' : '设为主武器', blueprint.primaryWeaponId === item.id ? 'disabled' : '') : ''}</div>
          <details class="dev-tools"><summary>精确调整（坐标 / 朝向 / 连接）</summary>
            <label class="field">选择部件<select id="selectedPart">${blueprint.parts.map(p => option(p.id, `${PARTS[p.partId].name} · ${p.id.slice(0, 8)}`, selected)).join('')}</select></label>
            <div class="coordinates">${['X', 'Y', 'Z'].map((axis, i) => `<label>${axis}<input type="number" step="0.1" min="-30" max="30" data-coordinate="${i}" value="${item.position[i]}"></label>`).join('')}</div>
            <div class="field"><span>朝向</span><div class="yaw-row"><input id="partYaw" type="range" min="-180" max="180" step="5" value="${Math.round(item.yaw * 180 / Math.PI)}"><output id="yawOutput">${Math.round(item.yaw * 180 / Math.PI)}°</output></div></div>
            <label class="field">连接到<select id="partParent">${option('', '无（车体根节点）', item.parentId || '')}${blueprint.parts.filter(p => p.id !== item.id).map(p => option(p.id, PARTS[p.partId].name + ' · ' + p.id.slice(0, 8), item.parentId)).join('')}</select></label>
          </details>
        ` : '<p class="subtle">在 3D 里点一个部件，或在上面目录里装一个。</p>'}
      </div>

      <h3>备注</h3>
      <div class="memo">
        <p>① 座圈沿用旧件，转速偏高，出厂前复校。</p>
        <p>② 硬基装甲待装，重心后移约 0.12 m。</p>
        <p>③ 履带张力按 500 mm 标准，勿再上调。</p>
      </div>

      <details class="dev-tools"><summary>附页：蓝图 / 外观 / 草稿 / 模型仓库</summary>
        <label class="field">蓝图名称<input id="blueprintName" maxlength="60" value="${escape(blueprint.name)}"></label>
        <div class="row"><select id="tankType" aria-label="新建坦克类型">${Object.entries(TYPES).map(([id, t]) => option(id, t.name, blueprint.type)).join('')}</select>${button('new', '新建蓝图')}</div>
        <label class="field">成品外观模型（可选）<select id="boundModel">${option('', '使用部件结构预览', boundModel || '')}${assets.filter(a => a.category === 'player-tank').map(a => option(a.id, a.name, boundModel)).join('')}</select></label>
        <h3>已保存草稿</h3>${profile.blueprints.length ? `<div class="row"><select id="savedDraft" aria-label="已保存草稿">${profile.blueprints.map(b => option(b.id, `${b.name} · ${b.parts.length} 部件`, blueprint.id)).join('')}</select>${button('load', '载入')}</div>` : '<p class="subtle">尚无草稿，点击“保存草稿”保留当前搭建。</p>'}
        <div class="row">${button('openModels', '打开模型仓库')}</div>
      </details>`;

    const foot = document.querySelector('#docFoot');
    if (foot) foot.innerHTML = `<div class="mint-row">${button('save', '保存草稿')}${button('manufacture', '制造并入库', `class="primary" ${value.valid ? '' : 'disabled'}`)}</div>
      <div class="doc-sign"><span>记录人 <i></i></span><span>GT-03-0117 · 第 12 页</span></div>`;

    renderReport();
    renderSketch(value);
    updateHud();
  }
  function updateDock() {
    if (!dock) return;
    dock.hidden = tab !== 'workshop';
    const ops = dock.closest('.ops');
    if (ops) ops.hidden = tab !== 'workshop';
    const undo = dock.querySelector('[data-action="undo"]'), redo = dock.querySelector('[data-action="redo"]');
    if (undo) undo.disabled = !history.length;
    if (redo) redo.disabled = !future.length;
    const snapButton = dock.querySelector('[data-action="snap"]');
    if (snapButton) {
      snapButton.textContent = snap ? `吸附 ${snap} m` : '自由移动';
      snapButton.classList.toggle('active', Boolean(snap));
    }
  }
  function updateDraftState() {
    const status = document.querySelector('#draftState');
    if (status) status.textContent = `${dirty ? '有未保存修改' : '草稿已保存'} · ${blueprint.parts.length} 部件`;
    updateDock();
  }

  // ---------------------------------------------------------------- first-run guide
  const GUIDE_KEY = 'steel3d.guide.v1';
  const GUIDE_STEPS = [
    '点一下左侧的部件，它就会装到车上。',
    '在 3D 里拖动它。松手会自动吸附到最近的连接点。',
    '数值合格后点「制造并入库」，然后就能开战。'
  ];
  let guideIndex = 0;
  function guideDone() { try { return localStorage.getItem(GUIDE_KEY) === 'done'; } catch { return true; } }
  function showGuide(step = 0) {
    const box = document.querySelector('#guide');
    if (!box) return;
    guideIndex = step;
    const label = document.querySelector('#guideStep'), text = document.querySelector('#guideText');
    if (label) label.textContent = `第 ${step + 1} 步 / 共 3 步`;
    if (text) text.textContent = GUIDE_STEPS[step];
    box.hidden = false;
  }
  function hideGuide(persist = true) {
    const box = document.querySelector('#guide');
    if (box) box.hidden = true;
    if (persist) { try { localStorage.setItem(GUIDE_KEY, 'done'); } catch { /* storage unavailable */ } }
  }

  // ---------------------------------------------------------------- models / garage
  function renderModels() {
    workspace.innerHTML = `<div class="row">${button('backWorkshop', '← 返回车间')}</div><p class="eyebrow">LOCAL ASSET LIBRARY</p><h1>模型仓库</h1><p class="subtle">内嵌贴图的 GLB，最大 64 MB。先预览，再分类入库；文件仅保存在本机。</p>
      <label class="field">导入分类<select id="modelCategory">${Object.entries(categories).map(([id, n]) => option(id, n, modelCategory)).join('')}</select></label>
      <label class="field">选择 GLB<input id="modelFile" type="file" accept=".glb"></label>
      <p id="pendingName" class="subtle">${pendingFile ? escape(pendingFile.name) : '尚未选择文件'}</p>
      <div class="row">${button('storeModel', '保存到模型仓库', `id="storeModel" class="primary" ${pendingFile ? '' : 'disabled'}`)}${button('clearModel', '恢复部件预览', 'id="clearModel"')}</div>
      <label class="field">浏览分类<select id="modelFilter">${option('', '全部分类', modelFilter)}${Object.entries(categories).map(([id, n]) => option(id, n, modelFilter)).join('')}</select></label>
      ${assets.filter(a => !modelFilter || a.category === modelFilter).map(a => `<article class="card"><strong>${escape(a.name)}</strong><small>${categories[a.category]} · ${(a.byteLength / 1024).toFixed(1)} KB</small><div class="row">${button('previewAsset', '预览', `data-id="${escape(a.id)}"`)}</div></article>`).join('') || '<p class="subtle">此分类暂无模型。</p>'}`;
    report.innerHTML = '<p class="eyebrow">ASSET WORKFLOW</p><h2>外观与能力</h2><p>模型提供外观，部件蓝图决定能力。</p><p class="subtle">玩家模型入库后，可在车间的“成品外观模型”中绑定。场地与敌方模型目前支持分类存储和预览，地图绑定将在后续接入。</p><p class="subtle">刷新后仓库仍会保留。不同浏览器或站点地址的存储独立。</p>';
  }
  function renderGarage() {
    workspace.innerHTML = `<p class="eyebrow">YOUR TANKS</p><h1>坦克仓库</h1><p class="subtle">成品保留制造时的蓝图；入场时重新评估。</p>${profile.tanks.map(t => `<article class="card ${t.id === selectedTank ? 'active' : ''}"><strong>${escape(t.blueprint.name)}</strong><small>${TYPES[t.blueprint.type].name} · ${t.blueprint.parts.length} 部件${t.modelId ? ' · 已绑定模型' : ''}</small><div class="row">${button('inspectTank', '检验', `data-id="${escape(t.id)}"`)}${button('prepare', '准备第一关', `class="primary" data-id="${escape(t.id)}"`)}</div></article>`).join('') || '<div class="card">还没有成品坦克。<p class="subtle">先在车间通过评估，再点击“制造并入库”。</p></div>'}`;
    const tank = profile.tanks.find(t => t.id === selectedTank);
    if (tank) {
      renderReport(evaluateTank(tank.blueprint, profile.unlockedParts), tank.blueprint);
      const key = `garage:${tank.id}:${tank.modelId || 'blueprint'}`;
      if (sceneKind !== 'garage' || garageKey !== key) {
        garageKey = key;
        showTankScene(tank.blueprint, 'garage', { pickable: false, reset: true, hudValue: { value: evaluateTank(tank.blueprint, profile.unlockedParts), name: tank.blueprint.name, parts: tank.blueprint.parts.length } });
        if (tank.modelId) previewModelId(tank.modelId, false, { kind: 'garage' });
      }
    } else report.innerHTML = '<h2>检验成品</h2><p class="subtle">选择一辆坦克，查看其数值与外观。</p>';
  }

  // ---------------------------------------------------------------- mission
  function renderMission() {
    if (!run) {
      workspace.innerHTML = '<p class="eyebrow">STEEL JOURNEY / 01</p><h1>第一关</h1><p>36 × 180 米三段式走廊：接敌区、侧翼区、基地攻坚。</p><p class="subtle">先在坦克仓库选择成品，准备第一关。</p>' + button('goGarage', '选择坦克', 'class="primary"');
      report.innerHTML = '<h2>胜利条件</h2><p>摧毁基地，并消灭全部 4 辆敌坦。</p><p class="subtle">进入第一关后点「开战」即可驾驶坦克；规则自检按钮收在「规则自检（开发者）」里。</p><div class="legend"><span style="--dot:#b9d38f">玩家坦克</span><span style="--dot:#b4543a">途中敌坦</span><span style="--dot:#c24a32">终点守卫</span><span style="--dot:#c9a873">敌方基地</span></div>';
      return;
    }
    const labels = { ready: '准备就绪', running: '检验进行中', victory: '胜利条件达成', defeat: '失败条件达成' };
    const running = run.status === 'running';
    const inCombat = Boolean(combat?.state.active);
    workspace.innerHTML = `<p class="eyebrow">STEEL JOURNEY / 01</p><h1>第一关 · 突破走廊</h1>
      <p class="subtle">${inCombat ? 'W/A/S/D 驾驶 · 鼠标瞄准 · 左键或空格开火。' : '三段式场地：接敌区 → 侧翼区 → 基地攻坚。点「开战」直接驾驶坦克。'}</p>
      <div class="level-status"><span class="pill">${labels[run.status]}</span><span class="subtle">出战：${escape(run.tank.blueprint.name)}</span></div>
      ${run.status === 'ready' ? button('startTest', '开战', 'class="primary" id="startBattle"') : ''}
      <div class="row">${button('resetTest', '重新准备')}${button('goGarage', '返回坦克仓库')}</div>
      ${run.status === 'victory' ? button('next', '后续关卡待开发', 'disabled') : ''}
      <details class="dev-tools"><summary>规则自检（开发者）</summary>
        <p class="subtle">直接向状态机发送事件，不经过战斗模拟。</p>
        ${run.level.enemies.map((enemy, i) => `<article class="card"><strong>${i === 3 ? '终点守卫' : `途中敌坦 ${i + 1}`}</strong><small>${['正面对抗', '左侧偷袭', '右侧偷袭', '基地守卫'][i]} · Z = ${enemy.position[2]} m · 触发 ${enemy.triggerZ} m</small><div class="row">${button('destroyEnemy', run.defeatedEnemies.includes(enemy.id) ? '已消灭' : '模拟消灭', `data-id="${enemy.id}" ${!running || run.defeatedEnemies.includes(enemy.id) ? 'disabled' : ''}`)}</div></article>`).join('')}
        <div class="row">${button('destroyBase', run.baseDestroyed ? '基地已摧毁' : '模拟摧毁基地', !running || run.baseDestroyed ? 'disabled' : '')}${button('destroyPlayer', '模拟玩家阵亡', !running ? 'disabled' : '')}</div>
      </details>`;
    report.innerHTML = `<p class="eyebrow">MISSION VALIDATION</p><h2>${labels[run.status]}</h2><dl class="metrics"><div><dt>敌坦消灭</dt><dd>${run.defeatedEnemies.length} / 4</dd></div><div><dt>敌方基地</dt><dd>${run.baseDestroyed ? '已摧毁' : '存活'}</dd></div></dl><p>${run.status === 'victory' ? '两个胜利条件均已满足。' : run.status === 'defeat' ? '玩家阵亡，关卡失败。' : '消灭全部敌坦且摧毁基地后才能胜利。'}</p><div class="legend"><span style="--dot:#b9d38f">玩家坦克</span><span style="--dot:#b4543a">途中敌坦</span><span style="--dot:#c24a32">终点守卫</span><span style="--dot:#c9a873">敌方基地</span></div><p class="subtle">${inCombat ? '战斗进行中：驾驶、瞄准与开火由 combat.mjs 实时模拟。' : '场景包含三段式场地、可碰撞掩体、泥地/碎石区与 5 辆坦克；点「开战」运行真实战斗。'}</p>`;
    syncLevelScene();
  }
  function render() {
    if (disposed) return;
    document.querySelectorAll('[data-tab]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.tab === tab)));
    if (tab !== 'workshop') {
      const foot = document.querySelector('#docFoot'); if (foot) foot.innerHTML = '';
      const plan = document.querySelector('#sketch'); if (plan) plan.innerHTML = '';
      const guide = document.querySelector('#guide'); if (guide) guide.hidden = true;
    }
    const capsule = document.querySelector('#cameraCapsule');
    if (capsule) capsule.hidden = !(tab === 'mission' && run && !combat?.state.active);
    const crosshair = document.querySelector('#crosshair');
    if (crosshair) crosshair.hidden = !(tab === 'mission' && combat?.state.active);
    if (tab === 'workshop') {
      renderWorkshopPanel();
      if (sceneKind !== 'workshop') showTankScene(blueprint, 'workshop', { reset: true });
      else { interaction?.setSelected(selected); interaction?.refresh(); updateHud(); }
    } else if (tab === 'models') renderModels();
    else if (tab === 'garage') renderGarage();
    else renderMission();
    runtime?.setKeyboardPan(tab === 'mission' && !combat?.state.active);
    interaction?.setEnabled(tab === 'workshop' && sceneKind === 'workshop');
    updateDock();
  }

  // ---------------------------------------------------------------- history and saving
  const snapshot = () => JSON.stringify({ parts: blueprint.parts, primaryWeaponId: blueprint.primaryWeaponId, name: blueprint.name, type: blueprint.type });
  function pushHistory() {
    history.push(snapshot());
    if (history.length > 60) history.shift();
    future.length = 0;
    updateDock();
  }
  function restore(state) {
    const data = JSON.parse(state);
    blueprint = { ...blueprint, ...data };
    if (!blueprint.parts.some(item => item.id === selected)) selected = blueprint.parts[0]?.id || null;
    dirty = true;
    showTankScene(blueprint, 'workshop');
    renderWorkshopPanel();
    updateDraftState();
    scheduleSave();
  }
  function undo() { if (!history.length) return; future.push(snapshot()); restore(history.pop()); notify('已撤销上一步搭建。'); }
  function redo() { if (!future.length) return; history.push(snapshot()); restore(future.pop()); notify('已重做。'); }
  function scheduleSave() {
    dirty = true;
    updateDraftState();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { save(true).catch(error => notify(`自动保存失败：${error.message}`, true)); }, 900);
  }
  async function save(silent = false) {
    if (saving) { saveQueued = true; return; }
    saving = true;
    try {
      const copy = structuredClone(blueprint);
      if (profile.blueprints.some(item => item.id === copy.id)) copy.revision++;
      await app.saveDraft(copy);
      blueprint = copy;
      dirty = false;
      await refresh();
      updateDraftState();
      if (!silent) notify('草稿已保存，刷新后可重新载入。');
    } finally {
      saving = false;
      if (saveQueued) { saveQueued = false; scheduleSave(); }
    }
  }

  // ---------------------------------------------------------------- blueprint mutations
  function commit(messageText) {
    dirty = true;
    showTankScene(blueprint, 'workshop');
    renderWorkshopPanel();
    updateDraftState();
    scheduleSave();
    if (messageText) notify(messageText);
  }
  function addPart(partId) {
    const part = PARTS[partId];
    if (!part) return;
    if (uniqueRoles.has(part.role) && blueprint.parts.some(item => PARTS[item.partId].role === part.role)) {
      notify(`${part.name} 只能安装一个。`, true); return;
    }
    if (!profile.unlockedParts.includes(partId)) {
      const result = app.unlockPart(partId);
      return result.then(async () => { await refresh(); installPart(partId); }).catch(error => notify(error.message, true));
    }
    installPart(partId);
  }
  function installPart(partId) {
    const id = uid('part');
    const placement = suggestPlacement(blueprint, partId, id);
    pushHistory();
    blueprint.parts.push({ id, partId, parentId: placement.parentId, position: placement.position, yaw: placement.yaw });
    selected = id;
    commit(`已安装 ${PARTS[partId].name}，可在 3D 中拖动调整。`);
  }
  function removeSelected() {
    const item = blueprint.parts.find(p => p.id === selected);
    if (!item) return;
    if (PARTS[item.partId].role === 'hull') { notify('车体是根节点，不能移除。', true); return; }
    pushHistory();
    const parentId = item.parentId;
    blueprint.parts = blueprint.parts.filter(p => p.id !== selected);
    for (const child of blueprint.parts) if (child.parentId === item.id) child.parentId = parentId;
    if (blueprint.primaryWeaponId === item.id) {
      const weapon = blueprint.parts.find(p => PARTS[p.partId].role === 'weapon');
      blueprint.primaryWeaponId = weapon?.id || null;
    }
    selected = blueprint.parts[0]?.id || null;
    commit(`已移除 ${PARTS[item.partId].name}。`);
  }
  function duplicateSelected() {
    const item = blueprint.parts.find(p => p.id === selected);
    if (!item) return;
    const role = PARTS[item.partId].role;
    if (uniqueRoles.has(role)) { notify('车体、履带、引擎与炮塔不能复制。', true); return; }
    if (blueprint.parts.length >= BALANCE.maxParts) { notify('部件数量已达上限。', true); return; }
    const id = uid('part');
    const placement = suggestPlacement(blueprint, item.partId, id);
    pushHistory();
    blueprint.parts.push({ id, partId: item.partId, parentId: placement.parentId, position: placement.position, yaw: placement.yaw });
    selected = id;
    commit(`已复制 ${PARTS[item.partId].name}。`);
  }
  function rotateSelected(degrees) {
    const item = blueprint.parts.find(p => p.id === selected);
    if (!item) return;
    pushHistory();
    item.yaw = Math.round((item.yaw + degrees * Math.PI / 180) * 1000) / 1000;
    commit(`朝向已调整为 ${Math.round(item.yaw * 180 / Math.PI)}°。`);
  }
  function nudgeSelected(axis, amount) {
    const item = blueprint.parts.find(p => p.id === selected);
    if (!item) return;
    pushHistory();
    item.position[axis] = Math.max(-BALANCE.maxExtent, Math.min(BALANCE.maxExtent, Number((item.position[axis] + amount).toFixed(3))));
    commit();
  }
  function applyDrag(id, position, yaw) {
    const item = blueprint.parts.find(p => p.id === id);
    if (!item) return;
    const snapped = snapPlacement(blueprint, id, position, snap) || position;
    const result = moveCandidate(blueprint, id, snapped, { grid: null });
    if (!result) return;
    item.position = result.position;
    if (Number.isFinite(yaw)) item.yaw = yaw;
    if (result.parentId && result.parentId !== item.parentId) item.parentId = result.parentId;
    dirty = true;
    showTankScene(blueprint, 'workshop');
    renderWorkshopPanel();
    updateDraftState();
    scheduleSave();
    const attached = result.gap !== null && result.gap !== undefined ? ` · 已连接 ${PARTS[blueprint.parts.find(p => p.id === item.parentId)?.partId]?.name || ''}` : '';
    notify(`${PARTS[item.partId].name} 移动到 ${result.position.map(v => v.toFixed(2)).join(' / ')}${attached}`);
  }
  // Live placement feedback while dragging: where it would land and whether that is legal.
  function previewDrag(id, position, yaw) {
    const item = blueprint.parts.find(p => p.id === id);
    if (!item) return null;
    const result = moveCandidate(blueprint, id, position, { grid: null });
    if (!result) return null;
    const probe = { ...blueprint, parts: blueprint.parts.map(part => part.id === id ? { ...part, position: result.position, yaw } : part) };
    const errors = validateBlueprint(probe, profile.unlockedParts);
    const status = errors.length === 0 ? 'ok' : errors.some(text => text.includes('重叠')) ? 'overlap' : 'invalid';
    return { position: result.position, parentId: result.parentId, status };
  }

  // ---------------------------------------------------------------- model preview
  async function previewModelId(id, notifyUser = true, options = {}) {
    const asset = await app.models.get(id);
    if (!asset) return false;
    const file = new File([asset.blob], `${asset.name}.glb`);
    await previewFile(file, options);
    if (notifyUser) notify(`正在预览：${asset.name}`);
    return true;
  }
  async function previewFile(file, { kind = 'model' } = {}) {
    const version = ++generation;
    const model = await loadLocalModel(file);
    if (disposed || version !== generation) { disposeObject(model); return; }
    if (runtime && !runtime.disposed) {
      runtime.setEnvironment('workshop');
      runtime.replaceContent(model);
      interaction?.setEnabled(false);
      interaction?.setRoot(null);
      runtime.resetCamera();
      sceneKind = kind; sceneKey = `${kind}:${file.name}:${version}`;
    } else disposeObject(model);
    caption.textContent = `模型预览 · ${file.name}`;
    hud.innerHTML = `<strong>${escape(file.name)}</strong> · 外观预览 · 能力仍由部件蓝图决定`;
  }

  // ---------------------------------------------------------------- actions
  const actions = {
    async new() {
      const type = document.querySelector('#tankType').value;
      if (dirty) await save(true);
      blueprint = createStarterBlueprint(type, uid('draft')); selected = 'weapon'; boundModel = null; history = []; future = [];
      dirty = true; sceneKind = null; garageKey = ''; render();
      notify('已新建蓝图，之前的修改已保存为草稿。');
    },
    async save() { await save(false); renderWorkshopPanel(); },
    async load() {
      const id = document.querySelector('#savedDraft').value;
      if (dirty) await save(true);
      blueprint = structuredClone(profile.blueprints.find(b => b.id === id));
      selected = blueprint.parts[0]?.id || null; dirty = false; boundModel = null; history = []; future = [];
      sceneKind = null; garageKey = ''; render();
      notify('已载入保存的蓝图。');
    },
    async grant() {
      await repo.updateProfile(p => { if (!p.inspectionGrantClaimed) { p.currency.parts += 100; p.inspectionGrantClaimed = true; } });
      await refresh(); render(); notify('已领取 100 测试零件，仅用于新模式原型检验。');
    },
    addPart(target) { return addPart(target.dataset.part); },
    remove() { removeSelected(); },
    duplicate() { duplicateSelected(); },
    rotateLeft() { rotateSelected(-15); },
    rotateRight() { rotateSelected(15); },
    raise() { nudgeSelected(1, snap || 0.1); },
    lower() { nudgeSelected(1, -(snap || 0.1)); },
    snap() {
      snap = snap === BALANCE.snapGrid ? 0.25 : snap === 0.25 ? 0 : BALANCE.snapGrid;
      updateDock(); notify(snap ? `吸附网格：${snap} 米` : '自由移动：不吸附网格，仍会自动连接最近部件。');
    },
    undo() { undo(); },
    redo() { redo(); },
    primary() { pushHistory(); blueprint.primaryWeaponId = selected; dirty = true; commit('已设为主武器。'); },
    async manufacture() {
      await save(true);
      const tank = await app.manufacture({ blueprintId: blueprint.id, tankId: uid('tank'), modelId: boundModel });
      await refresh(); tab = 'garage'; selectedTank = tank.id; sceneKind = null; render(); notify('坦克制造完成并已存入仓库，可以准备第一关。');
    },
    async storeModel() {
      if (!pendingFile) throw new Error('请先选择 GLB');
      await app.models.save({ id: uid('model'), name: pendingFile.name.replace(/\.glb$/i, ''), category: modelCategory, blob: pendingFile });
      pendingFile = null; await refresh(); renderModels(); notify('模型已保存到本机仓库。');
    },
    clearModel() { pendingFile = null; renderModels(); showTankScene(blueprint, 'workshop', { reset: true }); notify('已恢复部件预览。'); },
    openModels() { tab = 'models'; sceneKind = null; render(); notify('模型仓库：选择 GLB 预览，再按分类保存到本机。'); },
    backWorkshop() { tab = 'workshop'; sceneKind = null; render(); notify('已返回车间。'); },
    async previewAsset(target) { await previewModelId(target.dataset.id); },
    inspectTank(target) { selectedTank = target.dataset.id; sceneKind = null; render(); },
    async prepare(target) {
      playerPose = null;
      run = await app.prepareFirstLevel(target.dataset.id);
      tab = 'mission'; sceneKind = null; garageKey = ''; render();
      notify('第一关已准备。镜头可自由旋转，下方可对准目标。');
    },
    startTest() { playerPose = null; startCombat(); },
    destroyEnemy(target) { applyRunEvent({ type: 'enemy-destroyed', id: target.dataset.id }); },
    destroyBase() { applyRunEvent({ type: 'base-destroyed' }); },
    destroyPlayer() { applyRunEvent({ type: 'player-destroyed' }); },
    async resetTest() {
      combat?.stop(); combat = null; combatHud = null;
      playerPose = null;
      run = await app.prepareFirstLevel(run.tank.id); render();
    },
    goGarage() { combat?.stop(); combat = null; combatHud = null; tab = 'garage'; sceneKind = null; garageKey = ''; render(); },
    camPlayer() { if (combat?.state.active) return notify('战斗中镜头跟随车体。'); focusCamera('player'); },
    camOverview() { if (combat?.state.active) return notify('战斗中镜头跟随车体。'); focusCamera('overview', { duration: 1 }); },
    camBase() { if (combat?.state.active) return notify('战斗中镜头跟随车体。'); focusCamera('base'); },
    camEnemy() { if (combat?.state.active) return notify('战斗中镜头跟随车体。'); focusEnemy(); },
    camEnemyId(target) { if (combat?.state.active) return; focusCamera(target.dataset.id); }
  };
  const setCameraPressed = name => {
    for (const buttonElement of cameraTools) {
      if (['orbit', 'auto'].includes(buttonElement.dataset.camera)) buttonElement.setAttribute('aria-pressed', String(buttonElement.dataset.camera === name));
    }
  };
  const cameraActions = {
    orbit() { runtime?.setAutoRotate(false); setCameraPressed('orbit'); notify('自由视角：左键拖动旋转，右键平移，滚轮缩放；关卡内可用 W/A/S/D 平移。'); },
    auto() { runtime?.setAutoRotate(true); setCameraPressed('auto'); notify('自动环绕：镜头会缓慢绕当前目标旋转，再次点击“自由视角”停止。'); },
    player() { if (!focusCamera('player')) notify('准备第一关后可用。'); },
    overview() { if (!focusCamera('overview', { duration: 1 })) notify('准备第一关后可用。'); },
    base() { if (!focusCamera('base')) notify('准备第一关后可用。'); },
    enemy() { focusEnemy(); }
  };

  // ---------------------------------------------------------------- input plumbing
  function lock(value) {
    busy = value;
    for (const container of [workspace, document.querySelector('.mode-tabs')]) container.inert = value;
    workspace.setAttribute('aria-busy', String(value));
  }
  async function safely(task) {
    if (busy || disposed) return;
    lock(true);
    try { await task(); } catch (error) { notify(error.message, true); }
    finally { lock(false); }
  }
  const onClick = event => {
    const target = event.target.closest('button');
    if (!target || target.disabled) return;
    if (target.id === 'guideNext') { if (guideIndex >= GUIDE_STEPS.length - 1) hideGuide(); else showGuide(guideIndex + 1); return; }
    if (target.id === 'guideSkip') { hideGuide(); return; }
    if (target.dataset.camera) {
      const action = cameraActions[target.dataset.camera];
      if (action) safely(() => action());
      return;
    }
    if (target.dataset.tab) {
      safely(async () => {
        generation++; tab = target.dataset.tab; sceneKind = tab === 'workshop' ? sceneKind : null; render();
        notify({ workshop: '点选 3D 部件，拖动摆位；松开后自动吸附并重新连接。', models: '选择 GLB 预览，再按分类保存到本机仓库。', garage: '选择成品查看评估，或准备第一关。', mission: '拖动旋转视角，可对准玩家、敌坦或基地；手动事件只检验胜负规则。' }[tab]);
      });
      return;
    }
    if (target.dataset.action && actions[target.dataset.action]) safely(() => actions[target.dataset.action](target));
  };
  const onChange = event => safely(async () => {
    const input = event.target;
    if (input.id === 'modelFile') {
      const file = input.files[0]; if (!file) return;
      pendingFile = null;
      try { await previewFile(file); pendingFile = file; notify('已加载模型，确认分类后保存入库。'); }
      catch (error) { notify(`导入失败：${error.message}`, true); }
      finally { renderModels(); }
      return;
    }
    if (input.id === 'modelCategory') { modelCategory = input.value; return; }
    if (input.id === 'modelFilter') { modelFilter = input.value; renderModels(); return; }
    if (input.id === 'boundModel') { boundModel = input.value || null; return; }
    if (input.id === 'selectedPart') { selected = input.value; interaction?.setSelected(selected); renderWorkshopPanel(); return; }
    if (input.id === 'blueprintName') { blueprint.name = input.value; dirty = true; updateHud(); updateDraftState(); scheduleSave(); return; }
    const item = blueprint.parts.find(p => p.id === selected); if (!item) return;
    if (input.dataset.coordinate !== undefined) {
      const value = input.valueAsNumber;
      if (!Number.isFinite(value) || Math.abs(value) > BALANCE.maxExtent) { renderWorkshopPanel(); throw new Error('请输入有效坐标（-30～30）'); }
      pushHistory();
      item.position[Number(input.dataset.coordinate)] = value;
      dirty = true; showTankScene(blueprint, 'workshop'); renderReport(); updateHud(); updateDraftState(); scheduleSave();
    }
    if (input.id === 'partYaw') {
      pushHistory();
      item.yaw = Number(input.value) * Math.PI / 180;
      const output = document.querySelector('#yawOutput');
      if (output) output.textContent = `${input.value}°`;
      dirty = true; showTankScene(blueprint, 'workshop'); renderReport(); updateDraftState(); scheduleSave();
    }
    if (input.id === 'partParent') { pushHistory(); item.parentId = input.value || null; dirty = true; commit('已修改连接关系。'); }
  });
  const onInput = event => {
    if (event.target.id === 'partYaw') {
      const output = document.querySelector('#yawOutput');
      if (output) output.textContent = `${event.target.value}°`;
      // Live rotation feedback without rebuilding the whole proxy.
      const group = interaction?.getPart(selected);
      if (group) { group.rotation.y = Number(event.target.value) * Math.PI / 180; interaction.refresh(); runtime?.invalidate(); }
    }
  };
  const onKeyDown = event => {
    if (tab !== 'workshop' || busy || disposed || isEditable(event.target)) return;
    const mod = event.ctrlKey || event.metaKey;
    if (mod && event.code === 'KeyZ') { event.preventDefault(); if (event.shiftKey) redo(); else undo(); return; }
    if (mod && event.code === 'KeyY') { event.preventDefault(); redo(); return; }
    if (mod && event.code === 'KeyD') { event.preventDefault(); duplicateSelected(); return; }
    if (event.code === 'Delete' || event.code === 'Backspace') { event.preventDefault(); removeSelected(); return; }
    if (event.code === 'KeyQ') { event.preventDefault(); rotateSelected(-15); return; }
    if (event.code === 'KeyE') { event.preventDefault(); rotateSelected(15); return; }
    if (event.code.startsWith('Arrow')) {
      event.preventDefault();
      const step = event.shiftKey ? 0.5 : (snap || 0.1);
      if (event.code === 'ArrowLeft') nudgeSelected(0, -step);
      if (event.code === 'ArrowRight') nudgeSelected(0, step);
      if (event.code === 'ArrowUp') nudgeSelected(2, step);
      if (event.code === 'ArrowDown') nudgeSelected(2, -step);
      return;
    }
    if (event.code === 'Escape') { selected = null; interaction?.setSelected(null); renderWorkshopPanel(); }
  };

  try {
    repo = await openRepository(); app = createApplication(repo); await refresh();
    document.querySelector('#storageStatus').textContent = '本机存档已连接';
    const dateBox = document.querySelector('#docDate');
    if (dateBox) { const now = new Date(); dateBox.textContent = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`; }
    if (runtime && !runtime.disposed) {
      interaction = createBuildInteraction({
        runtime,
        getGrid: () => snap,
        onSelect: id => { selected = id; interaction.setSelected(id); renderWorkshopPanel(); },
        onDragMove: () => { if (!dragSnapshot) { pushHistory(); dragSnapshot = true; } },
        onDragEnd: (id, position, yaw) => { dragSnapshot = false; applyDrag(id, position, yaw); },
        onPreview: (id, position, yaw) => previewDrag(id, position, yaw),
        onHover: id => {
          const hint = document.querySelector('#controlHint');
          if (!hint) return;
          const item = id ? blueprint.parts.find(p => p.id === id) : null;
          hint.innerHTML = item
            ? `悬停：<strong>${escape(PARTS[item.partId].name)}</strong> · 拖动移动 · Shift+拖动调整高度<br>拖动中滚轮旋转 15°（Shift 5°） · Q/E 旋转 · Delete 删除 · Ctrl+Z 撤销`
            : '拖动旋转 · 右键平移 · 滚轮缩放<br>点击部件选中并拖动摆位';
        }
      });
    }
    document.addEventListener('click', onClick);
    workspace.addEventListener('change', onChange);
    workspace.addEventListener('input', onInput);
    window.addEventListener('keydown', onKeyDown);
    render();
    publishBattleState();
    notify('从车间开始：安装部件 → 拖动摆位 → 查看评估 → 制造入库 → 第一关开战。');
    if (tab === 'workshop' && !guideDone() && !location.search.includes('noguide')) showGuide(0);
  } catch (error) {
    repo?.close(); document.querySelector('#storageStatus').textContent = '存储不可用';
    workspace.innerHTML = '<h2>无法打开本机仓库</h2><p>请检查浏览器存储权限，或通过本地 HTTP 服务打开后刷新重试。</p>';
    notify(error.message, true);
  }
  return () => {
    disposed = true; generation++;
    clearTimeout(saveTimer);
    document.removeEventListener('click', onClick);
    workspace.removeEventListener('change', onChange);
    workspace.removeEventListener('input', onInput);
    window.removeEventListener('keydown', onKeyDown);
    clearLevelSystem();
    interaction?.dispose(); interaction = null;
    repo?.close();
  };
}
