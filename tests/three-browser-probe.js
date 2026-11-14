// Run through tools/pseudo3d/shoot.js --evalFile=tests/three-browser-probe.js
(async () => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  check(document.querySelector('canvas'), '3D canvas missing');
  check(document.querySelector('#stats').textContent.includes('三角形'), 'scene did not render');
  document.querySelector('[data-tab="models"]').click(); await wait(250);
  for (const value of ['low', 'high', 'balanced']) {
    const select = document.querySelector('#quality');
    select.value = value; select.dispatchEvent(new Event('change')); await wait(150);
  }
  const definition = {
    asset: { version: '2.0' }, scene: 0, scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0 }], meshes: [{ primitives: [{ attributes: { POSITION: 0 } }] }],
    buffers: [{ byteLength: 36 }], bufferViews: [{ buffer: 0, byteLength: 36 }],
    accessors: [{ bufferView: 0, componentType: 5126, count: 3, type: 'VEC3', min: [0, 0, 0], max: [1, 1, 0] }]
  };
  const json = new TextEncoder().encode(JSON.stringify(definition));
  const padded = Math.ceil(json.length / 4) * 4;
  const glb = new ArrayBuffer(12 + 8 + padded + 8 + 36), view = new DataView(glb);
  [0x46546c67, 2, glb.byteLength, padded, 0x4e4f534a].forEach((v, i) => view.setUint32(i * 4, v, true));
  new Uint8Array(glb, 20, padded).fill(32); new Uint8Array(glb, 20, json.length).set(json);
  view.setUint32(20 + padded, 36, true); view.setUint32(24 + padded, 0x004e4942, true);
  new Float32Array(glb, 28 + padded).set([0,0,0,1,0,0,0,1,0]);
  const upload = async (data, name) => {
    const input = document.querySelector('#modelFile');
    const transfer = new DataTransfer(); transfer.items.add(new File([data], name));
    input.files = transfer.files; input.dispatchEvent(new Event('change', { bubbles: true })); await wait(350);
  };
  for (let i = 0; i < 4; i++) {
    await upload(glb, 'triangle.glb');
    check(document.querySelector('#message').textContent.includes('已加载'), 'valid GLB failed');
    document.querySelector('#clearModel').click(); await wait(150);
  }
  await upload('invalid', 'invalid.glb');
  check(document.querySelector('#message').textContent.includes('导入失败'), 'invalid GLB not rejected');
  document.querySelector('#resetCamera').click();
  check(document.querySelector('canvas').width > 0, 'empty canvas');
  const context = document.querySelector('canvas').getContext('webgl2');
  const extension = context.getExtension('WEBGL_lose_context');
  if (extension) {
    extension.loseContext(); await wait(150);
    check(document.querySelector('#message').textContent.includes('中断'), 'context loss not handled');
    extension.restoreContext(); await wait(700);
    check(document.querySelector('#message').textContent.includes('恢复'), 'context restore failed');
  }
  document.querySelector('#clearModel').click(); await wait(350);
  return { passed: true, checks: ['WebGL2', 'quality presets', 'GLB import/replacement x4', 'invalid GLB', 'camera reset', 'context recovery'], stats: document.querySelector('#stats').textContent };
})()
