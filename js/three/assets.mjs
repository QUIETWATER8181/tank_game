import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { disposeObject } from './resources.mjs';

// Only self-contained GLB previews: no uploads, external fetches, or decoder CDN.
export async function loadLocalModel(file) {
  if (!/\.glb$/i.test(file.name)) throw new Error('请选择 .glb 格式的模型。');
  if (file.size > 64 * 1024 * 1024) throw new Error('预览文件请控制在 64 MB 以内。');
  const data = await file.arrayBuffer();
  if (data.byteLength < 20) throw new Error('GLB 文件不完整。');
  const header = new DataView(data);
  if (header.getUint32(0, true) !== 0x46546c67 || header.getUint32(4, true) !== 2 || header.getUint32(8, true) !== data.byteLength) throw new Error('需要有效的 glTF 2.0 GLB 文件。');
  const jsonLength = header.getUint32(12, true);
  if (header.getUint32(16, true) !== 0x4e4f534a || 20 + jsonLength > data.byteLength) throw new Error('模型数据结构无效。');
  const json = JSON.parse(new TextDecoder().decode(new Uint8Array(data, 20, jsonLength)));
  if ([...(json.buffers || []), ...(json.images || [])].some(item => item.uri && !item.uri.startsWith('data:'))) throw new Error('请将贴图和缓冲数据内嵌到 GLB 后再导出。');
  if ((json.extensionsRequired || []).some(name => /draco|basisu|meshopt/i.test(name))) throw new Error('当前预览暂不支持压缩扩展，请导出未压缩 GLB。');
  const manager = new THREE.LoadingManager();
  manager.setURLModifier(url => {
    if (!/^(blob:|data:)/.test(url)) throw new Error('模型引用了外部资源，请导出内嵌贴图的 GLB。');
    return url;
  });
  const gltf = await new GLTFLoader(manager).parseAsync(data, '');
  // Preview normalization uses a parent; original mesh transforms remain intact.
  const wrapper = new THREE.Group();
  wrapper.add(gltf.scene);
  for (const scene of gltf.scenes) if (scene !== gltf.scene) {
    // Other scenes may share resources; keep them owned for eventual disposal.
    scene.visible = false;
    wrapper.add(scene);
  }
  const bounds = new THREE.Box3().setFromObject(gltf.scene);
  const size = bounds.getSize(new THREE.Vector3());
  const extent = Math.max(size.x, size.y, size.z);
  if (!Number.isFinite(extent) || extent <= 0) { disposeObject(wrapper); throw new Error('模型没有可显示的几何体。'); }
  const center = bounds.getCenter(new THREE.Vector3());
  const scale = 6 / extent;
  wrapper.scale.setScalar(scale);
  wrapper.position.set(-center.x * scale, -bounds.min.y * scale + 0.02, -center.z * scale);
  wrapper.traverse(object => { if (object.isMesh) { object.castShadow = true; object.receiveShadow = true; } });
  return wrapper;
}

export function createPlaceholder() {
  const group = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: '#91a478', metalness: 0.45, roughness: 0.55 });
  const dark = new THREE.MeshStandardMaterial({ color: '#2c3738', metalness: 0.5, roughness: 0.6 });
  function box(size, position, material) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.position.set(...position); mesh.castShadow = true; mesh.receiveShadow = true; group.add(mesh);
  }
  box([3.8, 0.8, 5], [0, 0.9, 0], body);
  box([0.65, 0.8, 5.3], [-2, 0.55, 0], dark);
  box([0.65, 0.8, 5.3], [2, 0.55, 0], dark);
  box([2.2, 0.8, 2.4], [0, 1.7, -0.3], body);
  box([0.25, 0.25, 3.4], [0, 1.8, 2.2], dark);
  return group;
}
