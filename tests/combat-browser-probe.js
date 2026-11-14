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
  const text = selector => document.querySelector(selector)?.textContent || '';
  const battle = () => window.__steel3d?.battle?.() || null;
  const info = () => window.__steel3d?.info?.() || { available: false };
  const key = (type, code) => window.dispatchEvent(new KeyboardEvent(type, { code, key: code.slice(3).toLowerCase(), bubbles: true }));
  const viewport = document.querySelector('#viewport');
  const rect = () => viewport.getBoundingClientRect();
  const pointer = (type, x, y) => viewport.dispatchEvent(new PointerEvent(type, {
    bubbles: true, cancelable: true, pointerId: 11, pointerType: 'mouse', button: 0,
    buttons: type === 'pointerup' ? 0 : 1, clientX: x, clientY: y
  }));
  const checks = [];

  // Enter the first level with the starter tank and start the real battle.
  await click('[data-action="manufacture"]');
  await click('[data-action="prepare"]');
  check(info().environment === 'level', 'level environment not activated');
  check(battle() === null, 'battle existed before starting');
  await click('[data-action="startTest"]');
  await wait(700);
  let state = battle();
  check(state && state.active, 'battle did not start');
  check(state.status === 'running', `run status ${state.status}`);
  check(state.maxHealth > 0 && state.health > 0, 'player has no health');
  check(state.total === 4, 'expected four enemies');
  check(document.querySelector('#crosshair') && !document.querySelector('#crosshair').hidden, 'crosshair hidden in battle');
  check(document.querySelector('#cameraCapsule').hidden, 'camera capsule shown in battle');
  checks.push('battle start + HUD');

  // Drive forward: the tank must move under kinematic control.
  const startZ = state.position[1];
  key('keydown', 'KeyW');
  await wait(2000);
  key('keyup', 'KeyW');
  state = battle();
  check(state && state.position[1] > startZ + 4, `tank did not drive (z=${state?.position[1]})`);
  checks.push('kinematic driving');

  // Aim at the enemy the player can see and fire: the shell must spawn and connect.
  const screen = window.__steel3d.enemyScreen(0);
  check(screen && screen.depth < 1, 'first enemy is not on screen');
  let box = rect();
  pointer('pointermove', box.left + box.width * screen.x, box.top + box.height * screen.y);
  await wait(400);
  pointer('pointerdown', box.left + box.width * screen.x, box.top + box.height * screen.y);
  for (let index = 0; index < 26; index++) {
    await wait(300);
    state = battle();
    if (!state || state.hits > 0) break;
    const aim = window.__steel3d.enemyScreen(0);
    if (!aim) break;
    box = rect();
    pointer('pointermove', box.left + box.width * aim.x, box.top + box.height * aim.y);
  }
  pointer('pointerup', box.left + box.width * screen.x, box.top + box.height * screen.y);
  state = battle();
  const damaged = Boolean(state && state.enemyHealth.some(health => health < 140));
  check(state && state.shots > 0, 'firing produced no shells');
  check(state.hits > 0 || damaged, 'shells never connected with the enemy');
  checks.push('aim + ballistics + hit');

  // Push past the trigger line: the enemy must return fire.
  key('keydown', 'KeyW');
  for (let index = 0; index < 48; index++) {
    await wait(250);
    state = battle();
    if (!state || state.projectiles > 0 || state.health < state.maxHealth) break;
  }
  key('keyup', 'KeyW');
  state = battle();
  check(state && (state.projectiles > 0 || state.health < state.maxHealth), 'enemy never fired back');
  check(text('#sceneHud').includes('敌坦'), 'battle HUD did not render');
  checks.push('enemy AI + HUD');

  // Finishing through the dev buttons must drop out of combat and rebuild the wreck scene.
  for (const id of ['road-1', 'road-2', 'road-3', 'guard']) {
    const button = document.querySelector(`[data-action="destroyEnemy"][data-id="${id}"]`);
    if (button && !button.disabled) await click(`[data-action="destroyEnemy"][data-id="${id}"]`);
  }
  const base = document.querySelector('[data-action="destroyBase"]');
  if (base && !base.disabled) await click('[data-action="destroyBase"]');
  check(text('#report').includes('胜利条件达成'), 'victory not reported');
  check(battle() === null || battle().active === false, 'combat still active after victory');
  await wait(700);
  check(document.querySelector('#crosshair').hidden, 'crosshair still visible after the battle');
  checks.push('victory + combat teardown');

  return { passed: true, checks };
})()
