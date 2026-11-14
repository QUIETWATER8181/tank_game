(async () => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const check = (condition, text) => { if (!condition) throw new Error(text); };
  const settle = async () => {
    for (let index = 0; index < 160; index++) { await wait(30); if (!document.querySelector('#workspace').inert) return; }
    throw new Error('UI operation timeout');
  };
  const click = async selector => {
    const element = document.querySelector(selector);
    check(element && !element.disabled, `missing/disabled: ${selector}`);
    element.click(); await settle();
  };
  const change = async (selector, value) => {
    const element = document.querySelector(selector);
    check(element, `missing input: ${selector}`);
    element.value = value; element.dispatchEvent(new Event('change', { bubbles: true })); await settle();
  };
  const text = selector => document.querySelector(selector)?.textContent || '';
  const checks = [];
  const info = () => window.__steel3d?.info?.() || { available: false };

  check(text('#storageStatus').includes('已连接'), 'storage unavailable');
  check(info().available && info().environment === 'workshop', 'workshop scene missing');
  check(info().calls > 40, 'tank model not rendered');
  checks.push('workshop scene');

  await click('[data-action="grant"]');
  check(text('#workspace').includes('零件：100'), 'grant did not add 100 parts');
  await click('[data-action="addPart"][data-part="armor"]');
  check(text('#workspace').includes('零件：70'), 'armor unlock did not deduct 30');
  check(text('#report').includes('结构通过'), 'armored tank invalid');
  check(text('#workspace').includes('硬装甲板'), 'armor not selected after install');
  checks.push('palette install + unlock');

  const yawBefore = text('#yawOutput');
  await click('[data-action="rotateRight"]');
  check(text('#yawOutput') !== yawBefore, 'rotate button did not change yaw');
  await click('[data-action="undo"]');
  check(text('#message').includes('已撤销'), 'undo missing');
  checks.push('rotate + undo');

  await change('[data-coordinate="0"]', '20');
  check(text('#report').includes('需要调整'), 'detached part accepted');
  check(document.querySelector('[data-action="manufacture"]').disabled, 'invalid manufacture allowed');
  await change('[data-coordinate="0"]', '0');
  check(text('#report').includes('结构通过'), 'restored armor invalid');
  checks.push('coordinate validation');

  const viewport = document.querySelector('#viewport');
  const rect = viewport.getBoundingClientRect();
  const startX = rect.left + rect.width / 2, startY = rect.top + rect.height * 0.52;
  const pointer = (type, x, y) => new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 7, pointerType: 'mouse', button: 0, buttons: type === 'pointerup' ? 0 : 1, clientX: x, clientY: y });
  viewport.dispatchEvent(pointer('pointerdown', startX, startY));
  viewport.dispatchEvent(pointer('pointermove', startX + 60, startY));
  viewport.dispatchEvent(pointer('pointermove', startX + 90, startY));
  viewport.dispatchEvent(pointer('pointerup', startX + 90, startY));
  await wait(250);
  check(text('#message').includes('移动'), '3D drag did not move a part');
  check(!document.querySelector('[data-action="undo"]').disabled, 'drag did not create history');
  await click('[data-action="undo"]');
  check(text('#report').includes('结构通过'), 'undo of drag left invalid build');
  checks.push('3D pick + drag + snap + undo');

  await click('[data-action="snap"]');
  check(text('#snapButton').includes('0.25'), 'snap toggle did not cycle');
  checks.push('snap toggle');

  await click('[data-camera="auto"]');
  check(document.querySelector('[data-camera="auto"]').getAttribute('aria-pressed') === 'true', 'auto rotate not pressed');
  const beforeCamera = info().camera.join(',');
  await wait(700);
  check(info().camera.join(',') !== beforeCamera, 'auto rotate did not move camera');
  await click('[data-camera="orbit"]');
  check(document.querySelector('[data-camera="orbit"]').getAttribute('aria-pressed') === 'true', 'orbit mode not restored');
  checks.push('camera modes');

  await click('[data-action="save"]');
  await click('[data-action="manufacture"]');
  check(text('#workspace').includes('坦克仓库'), 'garage not shown after manufacture');
  await click('[data-action="prepare"]');
  check(info().environment === 'level', 'level environment not activated');
  const focus = window.__steel3d.levelFocus();
  check(focus && focus.player && Object.keys(focus).filter(key => key.startsWith('road-') || key === 'guard').length === 4, 'level focus points missing');
  checks.push('manufacture + level scene');

  await click('[data-action="camOverview"]');
  await wait(1400);
  check(Math.abs(info().target[2] - 82) < 2, 'overview camera did not target the corridor');
  await click('[data-action="camPlayer"]');
  await wait(900);
  check(Math.abs(info().target[2] - 8) < 2, 'player camera did not target the tank');
  checks.push('camera presets');

  await click('[data-action="startTest"]');
  await click('[data-action="destroyBase"]');
  check(text('#report').includes('检验进行中'), 'base alone won the level');
  for (const id of ['road-1', 'road-2', 'road-3', 'guard']) await click(`[data-action="destroyEnemy"][data-id="${id}"]`);
  check(text('#report').includes('胜利条件达成'), 'victory missing');
  check(document.querySelector('[data-action="next"]').disabled, 'unfinished next level enabled');
  await click('[data-action="resetTest"]');
  await click('[data-action="startTest"]');
  await click('[data-action="destroyPlayer"]');
  check(text('#report').includes('失败条件达成'), 'defeat missing');
  checks.push('mission victory/defeat');

  await click('[data-tab="models"]');
  const jsonString = JSON.stringify({ asset: { version: '2.0' }, scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0 }], meshes: [{ primitives: [{ attributes: { POSITION: 0 } }] }], buffers: [{ byteLength: 36 }], bufferViews: [{ buffer: 0, byteLength: 36 }], accessors: [{ bufferView: 0, componentType: 5126, count: 3, type: 'VEC3', min: [0, 0, 0], max: [1, 1, 0] }] });
  const json = new TextEncoder().encode(jsonString.padEnd(Math.ceil(jsonString.length / 4) * 4, ' '));
  const glb = new ArrayBuffer(28 + json.length + 36), view = new DataView(glb);
  [0x46546c67, 2, glb.byteLength, json.length, 0x4e4f534a].forEach((value, index) => view.setUint32(index * 4, value, true));
  new Uint8Array(glb, 20, json.length).set(json);
  view.setUint32(20 + json.length, 36, true); view.setUint32(24 + json.length, 0x004e4942, true);
  new Float32Array(glb, 28 + json.length).set([0, 0, 0, 1, 0, 0, 0, 1, 0]);
  const transfer = new DataTransfer(); transfer.items.add(new File([glb], '自制三角形.glb'));
  document.querySelector('#modelFile').files = transfer.files;
  document.querySelector('#modelFile').dispatchEvent(new Event('change', { bubbles: true }));
  await settle();
  await click('[data-action="storeModel"]');
  check(text('#workspace').includes('自制三角形'), 'model library missing import');
  await click('[data-action="previewAsset"]');
  await click('[data-tab="workshop"]');
  check(document.querySelector('#boundModel').options.length === 2, 'player model not bindable');
  check(info().environment === 'workshop', 'workshop environment not restored');
  checks.push('model import + bind list');

  const repo = await SteelJourneyCore.openRepository();
  const profile = await repo.readProfile(), assets = await repo.listAssets();
  repo.close();
  check(profile.tanks.length === 1 && assets.length === 1, 'persistent records missing');
  check(profile.blueprints.length >= 1, 'draft was not autosaved');
  checks.push('persistence');
  return { passed: true, checks, viewportOverflow: document.documentElement.scrollWidth > innerWidth };
})()
