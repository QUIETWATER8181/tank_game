import * as THREE from 'three';
import { SceneRuntime } from './runtime.mjs';
import { mountWorkbench } from './workbench.mjs';

const message = document.querySelector('#message');
let runtime, disposeWorkbench;
try {
  runtime = new SceneRuntime(document.querySelector('#viewport'), stats => {
    document.querySelector('#stats').textContent = `${stats.calls} 次绘制 · ${stats.triangles.toLocaleString()} 三角形\nCPU 提交 ${stats.cpuMs.toFixed(1)} ms · ${stats.geometries} 几何体 · ${stats.textures} 贴图`;
  }, text => { message.textContent = text; });
  document.querySelector('#resetCamera').addEventListener('click', () => runtime.resetCamera());
  document.querySelector('#quality').addEventListener('change', event => runtime.setQuality(event.target.value));
} catch (error) {
  runtime?.dispose(); runtime = null;
  document.querySelector('#stats').textContent = '3D 不可用：请开启 WebGL 2 / 硬件加速';
  console.error(error);
}
// Read-only diagnostics for the browser probes (no gameplay writes).
window.__steel3d = {
  runtime,
  info() {
    if (!runtime || runtime.disposed) return { available: false };
    const render = runtime.renderer.info.render;
    const box = new THREE.Box3().setFromObject(runtime.content);
    return {
      available: true,
      environment: runtime.environment,
      calls: render.calls, triangles: render.triangles,
      geometries: runtime.renderer.info.memory.geometries, textures: runtime.renderer.info.memory.textures,
      camera: runtime.camera.position.toArray().map(value => Number(value.toFixed(2))),
      target: runtime.controls.target.toArray().map(value => Number(value.toFixed(2))),
      contentChildren: runtime.content.children.length,
      contentBounds: Number.isFinite(box.min.x) ? [box.min.toArray().map(value => Number(value.toFixed(2))), box.max.toArray().map(value => Number(value.toFixed(2)))] : null,
      viewport: [runtime.host.clientWidth, runtime.host.clientHeight]
    };
  },
  levelFocus() {
    const scene = runtime?.content.children[0];
    const focus = scene?.userData?.focus;
    if (!focus) return null;
    return Object.fromEntries([...focus].map(([id, point]) => [id, { position: point.position.toArray(), radius: point.radius, label: point.label }]));
  }
};
mountWorkbench(runtime).then(dispose => { disposeWorkbench = dispose; });
window.addEventListener('pagehide', event => { if (!event.persisted) { disposeWorkbench?.(); runtime?.dispose(); } });
window.addEventListener('pageshow', () => runtime?.invalidate());
