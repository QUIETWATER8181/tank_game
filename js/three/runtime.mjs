import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { FixedStepper } from './stepper.mjs';
import { disposeObject } from './resources.mjs';

export const QUALITY = {
  low: { dpr: 1, shadows: false, shadowSize: 512 },
  balanced: { dpr: 1.5, shadows: true, shadowSize: 1024 },
  high: { dpr: 2, shadows: true, shadowSize: 2048 }
};
const ENVIRONMENTS = {
  workshop: {
    background: '#16262c', fog: ['#16262c', 38, 120], floor: true, grid: true, environmentIntensity: .5,
    sun: [12, 20, 8], target: [0, 0, 0], shadow: 16, far: 260, distance: [1.6, 65], exposure: 1.18
  },
  level: {
    background: '#a9bcb4', fog: ['#b9c3b6', 95, 420], floor: false, grid: false, environmentIntensity: .6,
    sun: [90, 140, 20], target: [0, 0, 85], shadow: 105, far: 700, distance: [4, 320], exposure: .95
  }
};

export class SceneRuntime {
  constructor(host, onStats, onError) {
    this.host = host;
    this.onStats = onStats;
    this.onError = onError;
    this.systems = new Set();
    this.stepper = new FixedStepper();
    this.disposed = false;
    this.lost = false;
    this.dirty = true;
    this.frameId = 0;
    this.lastTime = 0;
    this.lastStats = 0;
    this.environment = null;
    this.focusPoint = null;
    this.tween = null;
    this.keys = new Set();
    this.keyboardPan = false;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.append(this.renderer.domElement);
    this.renderer.domElement.tabIndex = 0;
    this.renderer.domElement.setAttribute('aria-label', '可拖动旋转和缩放的 3D 场景');
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environmentTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene = new THREE.Scene();
    this.scene.environment = this.environmentTexture;
    this.scene.background = new THREE.Color('#16262c');
    this.scene.fog = new THREE.Fog('#16262c', 38, 120);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 260);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.075;
    this.controls.rotateSpeed = 0.85;
    this.controls.zoomSpeed = 0.9;
    this.controls.minDistance = 1.6;
    this.controls.maxDistance = 65;
    this.controls.maxPolarAngle = Math.PI * 0.495;
    this.controls.minPolarAngle = 0.02;
    this.controls.addEventListener('change', () => this.invalidate());
    this.scene.add(new THREE.HemisphereLight('#d8efff', '#4b5141', 1.55));
    this.sun = new THREE.DirectionalLight('#fff1d5', 2.8);
    this.sun.position.set(12, 20, 8);
    this.sun.castShadow = true;
    this.sun.shadow.normalBias = 0.025;
    this.sun.shadow.bias = -0.0004;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: '#2b3d41', roughness: 0.92, metalness: .08 }));
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);
    this.grid = new THREE.GridHelper(80, 80, '#557474', '#32494c');
    this.grid.position.y = 0.006;
    this.scene.add(this.grid);
    this.content = new THREE.Group();
    this.scene.add(this.content);
    this.onVisibility = () => {
      this.lastTime = 0;
      this.stepper.reset();
      if (document.hidden) { cancelAnimationFrame(this.frameId); this.frameId = 0; }
      else this.invalidate();
    };
    this.onLost = event => {
      event.preventDefault();
      this.lost = true;
      cancelAnimationFrame(this.frameId);
      this.frameId = 0;
      onError('显卡上下文已中断，正在等待恢复。');
    };
    this.onRestored = () => { this.lost = false; this.lastTime = 0; this.stepper.reset(); this.invalidate(); onError('3D 空间已恢复。'); };
    this.onKeyDown = event => {
      if (!this.keyboardPan || isEditable(event.target)) return;
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE'].includes(event.code)) { this.keys.add(event.code); this.invalidate(); }
    };
    this.onKeyUp = event => { this.keys.delete(event.code); };
    this.onBlur = () => this.keys.clear();
    document.addEventListener('visibilitychange', this.onVisibility);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
    this.renderer.domElement.addEventListener('webglcontextlost', this.onLost);
    this.renderer.domElement.addEventListener('webglcontextrestored', this.onRestored);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.setQuality('balanced');
    this.setEnvironment('workshop');
    this.resetCamera();
  }
  setEnvironment(name) {
    if (this.environment === name) return false;
    const preset = ENVIRONMENTS[name] || ENVIRONMENTS.workshop;
    this.environment = name;
    this.scene.background = new THREE.Color(preset.background);
    this.scene.fog.color.set(preset.fog[0]);
    this.scene.fog.near = preset.fog[1];
    this.scene.fog.far = preset.fog[2];
    this.floor.visible = preset.floor;
    this.grid.visible = preset.grid;
    this.sun.position.set(...preset.sun);
    this.sun.target.position.set(...preset.target);
    this.sun.target.updateMatrixWorld();
    Object.assign(this.sun.shadow.camera, { left: -preset.shadow, right: preset.shadow, top: preset.shadow, bottom: -preset.shadow, near: 1, far: preset.shadow * 4 });
    this.sun.shadow.camera.updateProjectionMatrix();
    this.sun.shadow.map?.dispose();
    this.sun.shadow.map = null;
    this.camera.far = preset.far;
    this.camera.updateProjectionMatrix();
    this.controls.minDistance = preset.distance[0];
    this.controls.maxDistance = preset.distance[1];
    this.controls.maxPolarAngle = Math.PI * 0.495;
    this.renderer.toneMappingExposure = preset.exposure;
    this.scene.environmentIntensity = preset.environmentIntensity;
    this.focusPoint = null;
    this.tween = null;
    return true;
  }
  // Explicit camera target for a level point: position + radius from level-scene focus data.
  focusOn(point, { distance, height, duration = 0.65, azimuth } = {}) {
    if (!point) return;
    const target = point.position.clone ? point.position.clone() : new THREE.Vector3(...point.position);
    const radius = point.radius || 4;
    const view = point.view || {};
    const span = Math.max(12, radius * 2.0);
    const length = distance ?? view.distance ?? span;
    const high = height ?? view.height ?? Math.max(5, length * 0.5);
    const angle = azimuth ?? view.azimuth ?? 0;
    const position = target.clone().add(new THREE.Vector3(Math.sin(angle) * length, high, -Math.cos(angle) * length));
    this.focusPoint = { position: target.clone(), radius, view };
    this.tween = {
      fromPos: this.camera.position.clone(), toPos: position,
      fromTarget: this.controls.target.clone(), toTarget: target,
      elapsed: 0, duration
    };
    this.invalidate();
  }
  focusPointById(focus, id, options) {
    if (!focus || !focus.has(id)) return false;
    this.focusOn(focus.get(id), options);
    return true;
  }
  setAutoRotate(enabled) {
    this.controls.autoRotate = Boolean(enabled);
    this.controls.autoRotateSpeed = 0.7;
    this.invalidate();
  }
  // The combat camera owns the view; stop any focus tween that would fight it.
  cancelCameraTween() {
    this.tween = null;
    this.invalidate();
  }
  setKeyboardPan(enabled) {
    this.keyboardPan = Boolean(enabled);
    if (!enabled) this.keys.clear();
  }
  resetCamera() {
    if (this.environment === 'level' && this.focusPoint) { this.focusOn(this.focusPoint, { duration: 0.001 }); return; }
    if (this.environment === 'level') { this.camera.position.set(16, 13, -16); this.controls.target.set(0, 2, 20); }
    else { this.camera.position.set(10.5, 8.4, 13.2); this.controls.target.set(0, 1.9, 0); }
    this.controls.update();
    this.invalidate();
  }
  resize() {
    const width = Math.max(1, this.host.clientWidth), height = Math.max(1, this.host.clientHeight);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.invalidate();
  }
  setQuality(name) {
    const preset = QUALITY[name] || QUALITY.balanced;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, preset.dpr));
    this.renderer.shadowMap.enabled = preset.shadows;
    this.sun.shadow.mapSize.setScalar(preset.shadowSize);
    this.sun.shadow.map?.dispose();
    this.sun.shadow.map = null;
    this.scene.traverse(object => {
      for (const material of [].concat(object.material || [])) material.needsUpdate = true;
    });
    this.resize();
  }
  // Systems own their gameplay state. A returned function unregisters/disposes it.
  addSystem(system) {
    this.systems.add(system);
    this.invalidate();
    return () => { if (this.systems.delete(system)) system.dispose?.(); };
  }
  invalidate() {
    this.dirty = true;
    if (!this.frameId && !this.disposed && !this.lost && !document.hidden) this.frameId = requestAnimationFrame(time => this.frame(time));
  }
  applyKeyboardPan(delta) {
    if (!this.keyboardPan || !this.keys.size) return false;
    const speed = Math.max(6, this.camera.position.distanceTo(this.controls.target)) * delta * 1.1;
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    forward.y = 0;
    if (forward.lengthSq() < 1e-6) forward.set(0, 0, -1);
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const move = new THREE.Vector3();
    if (this.keys.has('KeyW')) move.add(forward);
    if (this.keys.has('KeyS')) move.sub(forward);
    if (this.keys.has('KeyD')) move.add(right);
    if (this.keys.has('KeyA')) move.sub(right);
    if (this.keys.has('KeyE')) move.y += 1;
    if (this.keys.has('KeyQ')) move.y -= 1;
    if (move.lengthSq() === 0) return false;
    move.normalize().multiplyScalar(speed);
    const next = this.controls.target.clone().add(move);
    next.x = THREE.MathUtils.clamp(next.x, -80, 80);
    next.z = THREE.MathUtils.clamp(next.z, -40, 230);
    next.y = THREE.MathUtils.clamp(next.y, 0, 120);
    const shift = next.sub(this.controls.target);
    this.camera.position.add(shift);
    this.controls.target.add(shift);
    return true;
  }
  updateCameraTween(delta) {
    const tween = this.tween;
    if (!tween) return false;
    tween.elapsed += delta;
    const t = tween.duration <= 0 ? 1 : Math.min(1, tween.elapsed / tween.duration);
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    this.camera.position.lerpVectors(tween.fromPos, tween.toPos, eased);
    this.controls.target.lerpVectors(tween.fromTarget, tween.toTarget, eased);
    this.camera.lookAt(this.controls.target);
    if (t >= 1) { this.tween = null; this.controls.update(); }
    return true;
  }
  frame(time) {
    this.frameId = 0;
    if (this.disposed || this.lost || document.hidden) return;
    try {
      const delta = this.lastTime ? Math.min((time - this.lastTime) / 1000, 0.1) : 0;
      this.lastTime = time;
      const alpha = this.stepper.advance(delta, dt => this.systems.forEach(system => system.fixedUpdate?.(dt)));
      this.systems.forEach(system => system.update?.(delta, alpha));
      let moved = false;
      if (this.tween) moved = this.updateCameraTween(delta);
      else {
        moved = this.controls.update();
        if (this.applyKeyboardPan(delta)) { moved = true; this.controls.update(); }
      }
      if (this.dirty || moved || this.systems.size || this.controls.autoRotate) {
        this.dirty = false;
        const start = performance.now();
        this.renderer.render(this.scene, this.camera);
        if (!this.systems.size || time - this.lastStats > 300) {
          this.lastStats = time;
          this.onStats({ cpuMs: performance.now() - start, ...this.renderer.info.render, ...this.renderer.info.memory });
        }
      }
      if (moved || this.dirty || this.systems.size || this.controls.autoRotate) this.invalidate();
      else { this.lastTime = 0; this.stepper.reset(); }
    } catch (error) { this.onError('场景运行异常，请刷新重试。'); console.error(error); }
  }
  replaceContent(object) {
    for (const child of [...this.content.children]) disposeObject(child);
    this.content.add(object);
    this.invalidate();
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    cancelAnimationFrame(this.frameId);
    this.resizeObserver.disconnect();
    document.removeEventListener('visibilitychange', this.onVisibility);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    this.renderer.domElement.removeEventListener('webglcontextlost', this.onLost);
    this.renderer.domElement.removeEventListener('webglcontextrestored', this.onRestored);
    this.controls.dispose();
    this.systems.forEach(system => system.dispose?.());
    this.systems.clear();
    disposeObject(this.scene);
    this.sun.shadow.dispose();
    this.environmentTexture.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
function isEditable(target) {
  if (!target) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
}
