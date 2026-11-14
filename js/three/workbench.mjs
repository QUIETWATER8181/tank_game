import { createApplication, openRepository, createStarterBlueprint, evaluateTank, PARTS, TYPES, transitionRun, suggestPlacement, moveCandidate, BALANCE } from '../mode/index.mjs';
import { blueprintScene, missionScene } from './workbench-scene.mjs';
import { loadLocalModel } from './assets.mjs';
import { disposeObject } from './resources.mjs';
import { createBuildInteraction } from './build-interaction.mjs';

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
  let history = [], future = [], snap = BALANCE.snapGrid, interaction = null, levelScene = null, levelSystem = null;
  let sceneKind = null, sceneKey = '', garageKey = '', saveTimer = 0, saving = false, saveQueued = false, dragSnapshot = false, focusEnemyCursor = -1;
  const notify = (text, error = false) => { message.textContent = text; message.classList.toggle('error', error); };
  const assessment = () => evaluateTank(blueprint, profile.unlockedParts);
  const refresh = async () => { profile = await app.profile(); assets = await app.models.list(); };

  // ---------------------------------------------------------------- scenes
  function clearLevelSystem() {
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
    caption.textContent = kind === 'garage' ? '成品坦克 · 写实代理模型 · 单位：米' : '部件代理预览 · 点击选中 · 拖动移动 · 拖动空白旋转视角';
    updateHud(hudValue);
  }
  function showLevelScene({ reset = false } = {}) {
    if (!run) return;
    sceneKind = 'level';
    clearLevelSystem();
    const scene = missionScene(run);
    levelScene = scene;
    if (runtime && !runtime.disposed) {
      const changed = runtime.setEnvironment('level');
      runtime.replaceContent(scene.group);
      interaction?.setEnabled(false);
      interaction?.setRoot(null);
      levelSystem = runtime.addSystem({ update: delta => scene.update(delta) });
      if (changed || reset) focusCamera('player', { duration: reset ? 0.001 : 0.9 });
    } else disposeObject(scene.group);
    sceneKey = levelStateKey();
    caption.textContent = '第一关 · 24 × 180 米 · 拖动旋转，右键平移，滚轮缩放';
    updateHud();
  }
  function levelStateKey() {
    if (!run) return '';
    return [run.status, run.baseDestroyed, run.playerDestroyed, run.defeatedEnemies.join(',')].join('|');
  }
  function syncLevelScene(force = false) {
    if (!run) return;
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
    if (tab === 'mission' && run) {
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

  // ---------------------------------------------------------------- report
  function renderReport(value = assessment()) {
    const manufacture = document.querySelector('[data-action="manufacture"]');
    if (manufacture) manufacture.disabled = !value.valid;
    if (!value.valid) {
      report.innerHTML = `<p class="eyebrow">STRUCTURE CHECK</p><h2>需要调整</h2><p class="subtle">解决以下问题后才能制造；3D 中仍可点选和拖动。</p><ul class="issues">${value.errors.map(e => `<li>${escape(e)}</li>`).join('')}</ul>`;
      return;
    }
    const s = value.stats;
    const metrics = [
      ['生命值', s.maxHealth], ['移速', `${s.moveSpeed} m/s`], ['攻击力', s.attack], ['攻速', `${s.fireRate} 次/s`],
      ['防御力', s.defense], ['车体转向', `${s.turnSpeed} rad/s`],
      ...(s.turretSpeed ? [['炮塔转向', `${s.turretSpeed} rad/s`]] : []),
      ['子弹初速', `${s.launchSpeed} m/s`], ['爆炸半径', `${s.blastRadius} m`],
      ...(s.impactDelay ? [['命中延迟', `${s.impactDelay} s`]] : [])
    ];
    const size = value.metrics.size.map(v => v.toFixed(2)).join(' × ');
    report.innerHTML = `<p class="eyebrow">TANK ASSESSMENT</p><h2>评估报告</h2><span class="pill">结构通过 · 原型数值</span>
      <dl class="metrics">${metrics.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      <p class="subtle">质量 ${value.metrics.mass} t · 尺寸 ${size} m · 稳定性 ${Math.round(value.metrics.stability * 100)}% · 类型适配 ${Math.round(value.metrics.typeFit * 100)}%</p>
      <p class="subtle">${value.metrics.hasTurret ? '炮塔独立瞄准' : '无炮塔 · 武器随车体'} · 武器 ${value.weapons.length} 件</p>
      <details><summary>计算依据与限制</summary>${Object.values(value.explanation).map(v => `<p class="subtle">${escape(v)}</p>`).join('')}<p class="subtle">${escape(value.warnings.join(' '))}</p></details>`;
  }

  // ---------------------------------------------------------------- workshop
  function partCard(id, part) {
    const installed = blueprint.parts.some(item => item.partId === id);
    const locked = !profile.unlockedParts.includes(id);
    const unique = uniqueRoles.has(part.role);
    const weaponCount = blueprint.parts.filter(item => PARTS[item.partId].role === 'weapon').length;
    const weaponsFull = part.role === 'weapon' && weaponCount >= BALANCE.maxWeapons;
    const disabled = (unique && installed) || weaponsFull;
    const state = unique && installed ? ' · 已装' : weaponsFull ? ' · 武器已满' : '';
    return `<button type="button" class="part-card ${installed ? 'installed' : ''}" data-action="addPart" data-part="${id}" ${disabled ? 'disabled' : ''} title="${escape(part.name)}：${roleLabels[part.role]}${locked ? ` · 解锁 ${part.cost} 零件` : ''}${state}">
      <span class="part-icon">${partIcon(part.role)}</span>
      <span class="part-name">${escape(part.name)}</span>
      <span class="part-meta">${roleLabels[part.role]} · ${part.mass} t${locked ? ` · 解锁 ${part.cost}` : ''}${state}</span>
    </button>`;
  }
  function renderWorkshopPanel() {
    const item = blueprint.parts.find(p => p.id === selected);
    const available = Object.entries(PARTS).filter(([, p]) => p.types.includes(blueprint.type));
    const status = dirty ? '有未保存修改' : '草稿已保存';
    workspace.innerHTML = `<p class="eyebrow">BUILD / DRAG / EVALUATE</p><h1>制造你的坦克</h1>
      <p class="subtle">从目录安装部件，在 3D 中拖动摆位。松开鼠标会自动吸附网格并重新连接。</p>
      <div class="row"><select id="tankType" aria-label="新建坦克类型">${Object.entries(TYPES).map(([id, t]) => option(id, t.name, blueprint.type)).join('')}</select>${button('new', '新建蓝图')}</div>
      <label class="field">蓝图名称<input id="blueprintName" maxlength="60" value="${escape(blueprint.name)}"></label>
      <div class="row"><span class="pill">${TYPES[blueprint.type].name}</span><span class="subtle" id="draftState">${status} · ${blueprint.parts.length} 部件</span></div>
      <div class="row">${button('save', '保存草稿')}${button('manufacture', '制造并入库', `class="primary" ${assessment().valid ? '' : 'disabled'}`)}</div>
      <h3>部件目录 <span class="subtle">零件：${profile.currency.parts}</span></h3>
      <div class="palette">${available.map(([id, p]) => partCard(id, p)).join('')}</div>
      ${!profile.inspectionGrantClaimed ? `<div class="row">${button('grant', '领取 100 测试零件')}</div>` : '<p class="subtle">测试零件已领取 · 与旧模式钱包独立</p>'}
      <h3>当前部件</h3>
      <div class="selection-card">
        <div class="title"><strong>${item ? escape(PARTS[item.partId].name) : '未选中'}</strong><span class="pill">${item ? roleLabels[PARTS[item.partId].role] : '点击 3D 部件'}</span></div>
        ${item ? `
          <label class="field">选择部件<select id="selectedPart">${blueprint.parts.map(p => option(p.id, `${PARTS[p.partId].name} · ${p.id.slice(0, 8)}`, selected)).join('')}</select></label>
          <div class="coordinates">${['X', 'Y', 'Z'].map((axis, i) => `<label>${axis}<input type="number" step="0.1" min="-30" max="30" data-coordinate="${i}" value="${item.position[i]}"></label>`).join('')}</div>
          <div class="field"><span>朝向</span><div class="yaw-row"><input id="partYaw" type="range" min="-180" max="180" step="5" value="${Math.round(item.yaw * 180 / Math.PI)}"><output id="yawOutput">${Math.round(item.yaw * 180 / Math.PI)}°</output></div></div>
          <label class="field">连接到<select id="partParent">${option('', '无（车体根节点）', item.parentId || '')}${blueprint.parts.filter(p => p.id !== item.id).map(p => option(p.id, PARTS[p.partId].name + ' · ' + p.id.slice(0, 8), item.parentId)).join('')}</select></label>
          <div class="row">${button('duplicate', '复制')}${button('remove', '移除')}${PARTS[item.partId].role === 'weapon' ? button('primary', blueprint.primaryWeaponId === item.id ? '当前主武器' : '设为主武器', blueprint.primaryWeaponId === item.id ? 'disabled' : '') : ''}</div>
        ` : '<p class="subtle">在左侧目录安装部件，或在 3D 中点击一个部件。</p>'}
      </div>
      <label class="field">成品外观模型（可选）<select id="boundModel">${option('', '使用部件结构预览', boundModel || '')}${assets.filter(a => a.category === 'player-tank').map(a => option(a.id, a.name, boundModel)).join('')}</select></label>
      <h3>已保存草稿</h3>${profile.blueprints.length ? `<div class="row"><select id="savedDraft" aria-label="已保存草稿">${profile.blueprints.map(b => option(b.id, `${b.name} · ${b.parts.length} 部件`, blueprint.id)).join('')}</select>${button('load', '载入')}</div>` : '<p class="subtle">尚无草稿，点击“保存草稿”保留当前搭建。</p>'}`;
    renderReport();
    updateHud();
  }
  function updateDock() {
    if (!dock) return;
    dock.hidden = tab !== 'workshop';
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

  // ---------------------------------------------------------------- models / garage
  function renderModels() {
    workspace.innerHTML = `<p class="eyebrow">LOCAL ASSET LIBRARY</p><h1>模型仓库</h1><p class="subtle">内嵌贴图的 GLB，最大 64 MB。先预览，再分类入库；文件仅保存在本机。</p>
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
      renderReport(evaluateTank(tank.blueprint, profile.unlockedParts));
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
      workspace.innerHTML = '<p class="eyebrow">STEEL JOURNEY / 01</p><h1>第一关</h1><p>24 × 180 米走廊，途中 3 辆敌坦，终点 1 辆守卫和基地。</p><p class="subtle">先在坦克仓库选择成品，准备第一关。</p>' + button('goGarage', '选择坦克', 'class="primary"');
      report.innerHTML = '<h2>胜利条件</h2><p>摧毁基地，并消灭全部 4 辆敌坦。</p><p class="subtle">此处将手动发送测试事件，不运行真实战斗，也不发放奖励。</p><div class="legend"><span style="--dot:#b9d38f">玩家坦克</span><span style="--dot:#b4543a">途中敌坦</span><span style="--dot:#c24a32">终点守卫</span><span style="--dot:#c9a873">敌方基地</span></div>';
      return;
    }
    const labels = { ready: '准备就绪', running: '检验进行中', victory: '胜利条件达成', defeat: '失败条件达成' };
    const running = run.status === 'running';
    workspace.innerHTML = `<p class="eyebrow">STEEL JOURNEY / 01</p><h1>第一关 · 场景检验</h1><p class="subtle">拖动旋转视角，点击下方按钮把镜头对准玩家、敌坦或基地。手动事件只检验胜负规则。</p>
      <div class="level-status"><span class="pill">${labels[run.status]}</span><span class="subtle">出战：${escape(run.tank.blueprint.name)}</span></div>
      <div class="mini-actions">${button('camPlayer', '看玩家')}${button('camOverview', '看全景')}${button('camBase', '看基地')}${button('camEnemy', '看敌坦')}</div>
      ${run.status === 'ready' ? button('startTest', '开始规则测试', 'class="primary"') : ''}
      ${run.level.enemies.map((enemy, i) => `<article class="card"><strong>${i === 3 ? '终点守卫' : `途中敌坦 ${i + 1}`}</strong><small>${['正面对抗', '左侧偷袭', '右侧偷袭', '基地守卫'][i]} · Z = ${enemy.position[2]} m · 触发 ${enemy.triggerZ} m</small><div class="row">${button('destroyEnemy', run.defeatedEnemies.includes(enemy.id) ? '已消灭' : '模拟消灭', `data-id="${enemy.id}" ${!running || run.defeatedEnemies.includes(enemy.id) ? 'disabled' : ''}`)}${button('camEnemyId', '视角', `data-id="${enemy.id}" ${run.defeatedEnemies.includes(enemy.id) ? 'disabled' : ''}`)}</div></article>`).join('')}
      <div class="row">${button('destroyBase', run.baseDestroyed ? '基地已摧毁' : '模拟摧毁基地', !running || run.baseDestroyed ? 'disabled' : '')}${button('destroyPlayer', '模拟玩家阵亡', !running ? 'disabled' : '')}</div>
      <div class="row">${button('resetTest', '重新准备')}${button('goGarage', '返回坦克仓库')}</div>${run.status === 'victory' ? button('next', '后续关卡待开发', 'disabled') : ''}`;
    report.innerHTML = `<p class="eyebrow">MISSION VALIDATION</p><h2>${labels[run.status]}</h2><dl class="metrics"><div><dt>敌坦消灭</dt><dd>${run.defeatedEnemies.length} / 4</dd></div><div><dt>敌方基地</dt><dd>${run.baseDestroyed ? '已摧毁' : '存活'}</dd></div></dl><p>${run.status === 'victory' ? '两个胜利条件均已满足。' : run.status === 'defeat' ? '玩家阵亡，关卡失败。' : '消灭全部敌坦且摧毁基地后才能胜利。'}</p><div class="legend"><span style="--dot:#b9d38f">玩家坦克</span><span style="--dot:#b4543a">途中敌坦</span><span style="--dot:#c24a32">终点守卫</span><span style="--dot:#c9a873">敌方基地</span></div><p class="subtle">场景包含道路、路障、瞭望塔、基地与敌我坦克；被摧毁的目标会变成残骸并冒烟。无 AI、弹道或物理运行。</p>`;
    syncLevelScene();
  }
  function render() {
    if (disposed) return;
    document.querySelectorAll('[data-tab]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.tab === tab)));
    for (const buttonElement of cameraTools) {
      const missionOnly = ['player', 'overview', 'base', 'enemy'].includes(buttonElement.dataset.camera);
      buttonElement.hidden = missionOnly && tab !== 'mission';
    }
    if (tab === 'workshop') {
      renderWorkshopPanel();
      if (sceneKind !== 'workshop') showTankScene(blueprint, 'workshop', { reset: true });
      else { interaction?.setSelected(selected); interaction?.refresh(); updateHud(); }
    } else if (tab === 'models') renderModels();
    else if (tab === 'garage') renderGarage();
    else renderMission();
    runtime?.setKeyboardPan(tab === 'mission');
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
  function applyDrag(id, position) {
    const item = blueprint.parts.find(p => p.id === id);
    if (!item) return;
    const result = moveCandidate(blueprint, id, position, { grid: null });
    if (!result) return;
    item.position = result.position;
    if (result.parentId && result.parentId !== item.parentId) item.parentId = result.parentId;
    dirty = true;
    showTankScene(blueprint, 'workshop');
    renderWorkshopPanel();
    updateDraftState();
    scheduleSave();
    const attached = result.gap !== null && result.gap !== undefined ? ` · 已连接 ${PARTS[blueprint.parts.find(p => p.id === item.parentId)?.partId]?.name || ''}` : '';
    notify(`${PARTS[item.partId].name} 移动到 ${result.position.map(v => v.toFixed(2)).join(' / ')}${attached}`);
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
    async previewAsset(target) { await previewModelId(target.dataset.id); },
    inspectTank(target) { selectedTank = target.dataset.id; sceneKind = null; render(); },
    async prepare(target) {
      run = await app.prepareFirstLevel(target.dataset.id);
      tab = 'mission'; sceneKind = null; garageKey = ''; render();
      notify('第一关已准备。镜头可自由旋转，下方可对准目标。');
    },
    startTest() { run = transitionRun(run, { type: 'start' }); render(); },
    destroyEnemy(target) { run = transitionRun(run, { type: 'enemy-destroyed', id: target.dataset.id }); render(); },
    destroyBase() { run = transitionRun(run, { type: 'base-destroyed' }); render(); },
    destroyPlayer() { run = transitionRun(run, { type: 'player-destroyed' }); render(); },
    async resetTest() { run = await app.prepareFirstLevel(run.tank.id); render(); },
    goGarage() { tab = 'garage'; sceneKind = null; garageKey = ''; render(); },
    camPlayer() { focusCamera('player'); },
    camOverview() { focusCamera('overview', { duration: 1 }); },
    camBase() { focusCamera('base'); },
    camEnemy() { focusEnemy(); },
    camEnemyId(target) { focusCamera(target.dataset.id); }
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
    if (runtime && !runtime.disposed) {
      interaction = createBuildInteraction({
        runtime,
        getGrid: () => snap,
        onSelect: id => { selected = id; interaction.setSelected(id); renderWorkshopPanel(); },
        onDragMove: () => { if (!dragSnapshot) { pushHistory(); dragSnapshot = true; } },
        onDragEnd: (id, position) => { dragSnapshot = false; applyDrag(id, position); },
        onHover: id => {
          const hint = document.querySelector('#controlHint');
          if (!hint) return;
          const item = id ? blueprint.parts.find(p => p.id === id) : null;
          hint.innerHTML = item
            ? `悬停：<strong>${escape(PARTS[item.partId].name)}</strong> · 拖动移动 · Shift+拖动调整高度<br>Q/E 旋转 · Delete 删除 · Ctrl+Z 撤销`
            : '拖动旋转 · 右键平移 · 滚轮缩放<br>点击部件选中并拖动摆位';
        }
      });
    }
    document.addEventListener('click', onClick);
    workspace.addEventListener('change', onChange);
    workspace.addEventListener('input', onInput);
    window.addEventListener('keydown', onKeyDown);
    render();
    notify('从车间开始：安装部件 → 拖动摆位 → 查看评估 → 制造入库 → 第一关场景检验。');
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
