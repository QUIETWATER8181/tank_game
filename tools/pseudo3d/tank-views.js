// Verification harness for the procedural tank: white-on-black silhouettes plus
// numeric measurements. Driven by shoot.js:
//
//   node tools/pseudo3d/shoot.js --page=mode3d.html --query=view=side \
//     --afterFile=tools/pseudo3d/tank-views.js --afterWait=1200 \
//     --evalFile=tools/pseudo3d/tank-views.js --out=tools/pseudo3d/shots/tank-side.png
//
// `?view=side|front|top|three|iso` picks the camera; `?plain=1` skips the white-out
// so the screenshot keeps the real materials. The script only reads the scene; the
// only writes are the camera, the background and the material emissive/colour used
// to flatten the silhouette, which is what makes the ASCII check meaningful.
(function () {
  const params = new URLSearchParams(location.search);
  const view = params.get('view') || 'three';
  const plain = params.get('plain') === '1';
  const solo = params.get('solo');
  const hide = (params.get('hide') || '').split(',').filter(Boolean);
  const runtime = window.__steel3d && window.__steel3d.runtime;
  if (!runtime || runtime.disposed) return { error: '3D runtime unavailable' };

  // Full-bleed viewport so the screenshot contains nothing but the tank.
  for (const selector of ['header.toolbar', 'nav.mode-tabs', 'aside.workbench', 'aside.report-panel',
    'footer', '.build-dock', '.scene-hud', '.scene-caption']) {
    for (const element of document.querySelectorAll(selector)) element.style.display = 'none';
  }
  const host = document.getElementById('viewport');
  host.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;z-index:0';
  runtime.resize();

  const workshop = runtime.content.children[0];
  const tank = workshop && workshop.getObjectByName('tank');
  if (!tank) return { error: 'tank not found' };
  for (const child of workshop.children) child.visible = child === tank;

  runtime.floor.visible = false;
  runtime.grid.visible = false;
  runtime.scene.fog = null;
  if (!plain) runtime.scene.background.setHex(0x000000);

  const Vector3 = runtime.camera.position.constructor;

  // ---- measurements -------------------------------------------------------
  const boundsOf = object => {
    object.updateMatrixWorld(true);
    const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
    const point = new Vector3();
    object.traverse(mesh => {
      if (!mesh.isMesh) return;
      const position = mesh.geometry.attributes.position;
      for (let index = 0; index < position.count; index++) {
        point.set(position.getX(index), position.getY(index), position.getZ(index));
        mesh.localToWorld(point);
        for (let axis = 0; axis < 3; axis++) {
          const value = point.getComponent(axis);
          if (value < min[axis]) min[axis] = value;
          if (value > max[axis]) max[axis] = value;
        }
      }
    });
    return { min, max };
  };

  const parts = [];
  let triangles = 0, meshes = 0;
  const materials = new Set();
  for (const [id, group] of tank.userData.parts || new Map()) {
    const box = boundsOf(group);
    let partTriangles = 0;
    group.traverse(object => {
      if (!object.isMesh) return;
      partTriangles += (object.geometry.index ? object.geometry.index.count : object.geometry.attributes.position.count) / 3;
    });
    parts.push({
      id, role: group.userData.partRole, triangles: Math.round(partTriangles),
      min: box.min.map(v => Number(v.toFixed(3))), max: box.max.map(v => Number(v.toFixed(3)))
    });
  }
  tank.traverse(object => {
    if (!object.isMesh) return;
    meshes++;
    triangles += (object.geometry.index ? object.geometry.index.count : object.geometry.attributes.position.count) / 3;
    materials.add(object.material);
  });
  const whole = boundsOf(tank);
  const center = [0, 1, 2].map(axis => (whole.min[axis] + whole.max[axis]) / 2);
  const size = [0, 1, 2].map(axis => whole.max[axis] - whole.min[axis]);

  // ---- camera: place, then fit the projected box to the frame -------------
  const camera = runtime.camera;
  const controls = runtime.controls;
  camera.fov = 30;
  camera.near = 0.1;
  camera.far = 400;
  camera.updateProjectionMatrix();
  controls.maxPolarAngle = Math.PI * 0.995;
  controls.minPolarAngle = 0;
  controls.maxDistance = 400;

  const directions = {
    side: [1, 0, 0], front: [0, 0, 1], top: [0, 1, 0.0001],
    three: [0.95, 0.34, 0.35], iso: [0.75, 0.45, 0.6]
  };
  const dir = directions[view] || directions.three;
  const dirLength = Math.hypot(...dir) || 1;
  const unit = dir.map(value => value / dirLength);
  camera.up.set(0, 1, 0);
  if (view === 'top') camera.up.set(0, 0, -1);

  const target = new Vector3(...center);
  let distance = Math.max(...size) * 1.6;
  const corners = [];
  for (const x of [whole.min[0], whole.max[0]]) {
    for (const y of [whole.min[1], whole.max[1]]) {
      for (const z of [whole.min[2], whole.max[2]]) corners.push(new Vector3(x, y, z));
    }
  }
  const place = () => {
    camera.position.set(
      target.x + unit[0] * distance,
      target.y + unit[1] * distance,
      target.z + unit[2] * distance
    );
    camera.lookAt(target);
    camera.updateMatrixWorld(true);
  };
  for (let pass = 0; pass < 4; pass++) {
    place();
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const corner of corners) {
      const ndc = corner.clone().project(camera);
      minX = Math.min(minX, ndc.x); maxX = Math.max(maxX, ndc.x);
      minY = Math.min(minY, ndc.y); maxY = Math.max(maxY, ndc.y);
    }
    const halfHeight = distance * Math.tan((camera.fov * Math.PI) / 360);
    const right = new Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const up = new Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
    const spanX = (maxX - minX) / 2, spanY = (maxY - minY) / 2;
    // Re-centre on the projected box, then pull back so the box fits with margin.
    target.addScaledVector(right, ((minX + maxX) / 2) * halfHeight * camera.aspect);
    target.addScaledVector(up, ((minY + maxY) / 2) * halfHeight);
    distance *= Math.max(spanX, spanY, 0.35) * 1.06;
  }
  place();
  controls.target.copy(target);
  controls.update();
  runtime.invalidate();

  // ---- isolate a part (framing stays locked to the whole tank) ------------
  if (solo || hide.length) {
    for (const [id, group] of tank.userData.parts || new Map()) {
      group.visible = solo ? id === solo : !hide.includes(id);
    }
  }

  // ---- silhouette white-out ----------------------------------------------
  if (!plain) {
    tank.traverse(object => {
      if (!object.isMesh) return;
      for (const material of [].concat(object.material)) {
        if (material.emissive) { material.emissive.setHex(0xffffff); material.emissiveIntensity = 1; }
        if (material.color) material.color.setHex(0xffffff);
        material.needsUpdate = true;
      }
    });
    runtime.renderer.toneMappingExposure = 1;
  }

  return {
    view, plain,
    triangles: Math.round(triangles),
    meshes,
    materials: materials.size,
    calls: runtime.renderer.info.render.calls,
    size: size.map(v => Number(v.toFixed(3))),
    center: center.map(v => Number(v.toFixed(2))),
    min: whole.min.map(v => Number(v.toFixed(3))),
    max: whole.max.map(v => Number(v.toFixed(3))),
    camera: camera.position.toArray().map(v => Number(v.toFixed(2))),
    target: target.toArray().map(v => Number(v.toFixed(2))),
    parts
  };
})();
