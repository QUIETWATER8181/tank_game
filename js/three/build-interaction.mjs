import * as THREE from 'three';
import { snapValue } from '../mode/placement.mjs';
import { BALANCE } from '../mode/catalog.mjs';

const MARKER_COLOR = '#d7ee9a';

function createSelectionMarker() {
  const group = new THREE.Group();
  group.name = 'selection-marker';
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)),
    new THREE.LineBasicMaterial({ color: MARKER_COLOR, transparent: true, opacity: 0.95, depthTest: false })
  );
  edges.renderOrder = 8;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.92, 1, 48),
    new THREE.MeshBasicMaterial({ color: MARKER_COLOR, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.renderOrder = 7;
  group.add(edges, ring);
  group.visible = false;
  return { group, edges, ring };
}

export function createBuildInteraction({ runtime, getGrid, onSelect, onDragMove, onDragEnd, onHover }) {
  const dom = runtime.renderer.domElement;
  const host = runtime.host;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const plane = new THREE.Plane();
  const hit = new THREE.Vector3();
  const marker = createSelectionMarker();
  const pointers = new Set();
  runtime.scene.add(marker.group);
  let root = null, tank = null, selectedId = null, hoveredId = null, drag = null, enabled = true, disposed = false;

  function pick(event) {
    if (!tank) return null;
    const rect = dom.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, runtime.camera);
    const hits = raycaster.intersectObject(tank, true);
    for (const entry of hits) {
      let node = entry.object;
      while (node && node !== tank && !node.userData.partId) node = node.parent;
      if (node && node.userData.partId) return { id: node.userData.partId, group: node, point: entry.point };
    }
    return null;
  }
  function partGroup(id) {
    return tank?.userData?.parts?.get(id) || null;
  }
  function refreshMarker() {
    const group = selectedId ? partGroup(selectedId) : null;
    if (!group || !enabled) { marker.group.visible = false; return; }
    group.updateWorldMatrix(true, false);
    const world = new THREE.Vector3();
    group.getWorldPosition(world);
    const size = group.userData.partSize;
    if (!size) { marker.group.visible = false; return; }
    const yaw = group.rotation.y;
    const c = Math.abs(Math.cos(yaw)), s = Math.abs(Math.sin(yaw));
    const half = [(size[0] * c + size[2] * s) / 2, size[1] / 2, (size[0] * s + size[2] * c) / 2];
    marker.group.visible = true;
    marker.edges.position.copy(world);
    marker.edges.scale.set(half[0] * 2 + 0.04, half[1] * 2 + 0.04, half[2] * 2 + 0.04);
    marker.ring.position.set(world.x, 0.03, world.z);
    marker.ring.scale.setScalar(Math.max(half[0], half[2]) * 1.24 + 0.4);
  }
  function setCursor(value) { dom.style.cursor = value; }

  function onPointerDown(event) {
    if (!enabled || disposed || event.button !== 0) return;
    pointers.add(event.pointerId);
    if (pointers.size > 1) { endDrag(); runtime.controls.enabled = true; return; }
    const found = pick(event);
    if (!found) return;
    event.stopPropagation();
    event.preventDefault();
    onSelect?.(found.id);
    const group = found.group;
    group.updateWorldMatrix(true, false);
    const world = new THREE.Vector3();
    group.getWorldPosition(world);
    drag = {
      id: found.id, group, pointerId: event.pointerId,
      startX: event.clientX, startY: event.clientY, moved: false,
      mode: event.shiftKey ? 'vertical' : 'horizontal',
      startPosition: world.clone(),
      offset: new THREE.Vector3().subVectors(world, found.point),
      position: world.clone()
    };
    plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), world);
    runtime.controls.enabled = false;
    try { dom.setPointerCapture?.(event.pointerId); } catch { /* synthetic or stale pointer */ }
    setCursor('grabbing');
  }
  function onPointerMove(event) {
    if (disposed) return;
    if (!drag) {
      if (!enabled || event.pointerType === 'touch') return;
      const found = pick(event);
      const id = found?.id || null;
      setCursor(id ? 'grab' : '');
      if (id !== hoveredId) { hoveredId = id; onHover?.(id); }
      return;
    }
    if (event.pointerId !== drag.pointerId) return;
    event.stopPropagation();
    const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
    if (distance > 3) drag.moved = true;
    if (!drag.moved) return;
    if (drag.mode === 'vertical') {
      drag.position.set(drag.startPosition.x, drag.startPosition.y - (event.clientY - drag.startY) * 0.02, drag.startPosition.z);
    } else {
      const rect = dom.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, runtime.camera);
      if (!raycaster.ray.intersectPlane(plane, hit)) return;
      drag.position.set(hit.x + drag.offset.x, drag.startPosition.y, hit.z + drag.offset.z);
    }
    const grid = getGrid ? getGrid() : BALANCE.snapGrid;
    const step = grid || 0.001;
    let snapped;
    if (drag.mode === 'vertical') snapped = [drag.startPosition.x, snapValue(drag.position.y, step), drag.startPosition.z];
    else snapped = [snapValue(drag.position.x, step), drag.startPosition.y, snapValue(drag.position.z, step)];
    snapped = snapped.map(value => Math.max(-BALANCE.maxExtent, Math.min(BALANCE.maxExtent, value)));
    drag.position.set(...snapped);
    drag.group.position.set(...snapped);
    drag.group.updateWorldMatrix(true, true);
    refreshMarker();
    onDragMove?.(drag.id, [...snapped]);
    runtime.invalidate();
  }
  function endDrag() {
    if (!drag) return;
    const finished = drag;
    drag = null;
    runtime.controls.enabled = true;
    if (finished.moved) onDragEnd?.(finished.id, finished.position.toArray());
    else refreshMarker();
    try { dom.releasePointerCapture?.(finished.pointerId); } catch { /* pointer already released */ }
    setCursor('');
  }
  function onPointerUp(event) {
    pointers.delete(event.pointerId);
    if (drag && event.pointerId === drag.pointerId) endDrag();
    else if (!pointers.size) runtime.controls.enabled = true;
  }
  function onPointerCancel(event) { pointers.delete(event.pointerId); endDrag(); runtime.controls.enabled = true; }

  host.addEventListener('pointerdown', onPointerDown, true);
  host.addEventListener('pointermove', onPointerMove, true);
  host.addEventListener('pointerup', onPointerUp, true);
  host.addEventListener('pointercancel', onPointerCancel, true);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerCancel);
  return {
    setRoot(nextRoot) {
      root = nextRoot;
      tank = nextRoot?.userData?.tank || null;
      hoveredId = null;
      drag = null;
      runtime.controls.enabled = true;
      refreshMarker();
    },
    setSelected(id) { selectedId = id; refreshMarker(); },
    getPart(id) { return partGroup(id); },
    refresh: refreshMarker,
    setEnabled(value) {
      enabled = Boolean(value);
      if (!enabled) { drag = null; runtime.controls.enabled = true; marker.group.visible = false; setCursor(''); }
      else refreshMarker();
    },
    // Animated pulse keeps the selection readable without tinting shared materials.
    update() {
      if (!marker.group.visible) return;
      const time = performance.now() * 0.0035;
      marker.edges.material.opacity = 0.65 + Math.sin(time) * 0.25;
      marker.ring.material.opacity = 0.28 + Math.sin(time + 1.2) * 0.12;
    },
    dispose() {
      disposed = true;
      host.removeEventListener('pointerdown', onPointerDown, true);
      host.removeEventListener('pointermove', onPointerMove, true);
      host.removeEventListener('pointerup', onPointerUp, true);
      host.removeEventListener('pointercancel', onPointerCancel, true);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
      marker.group.removeFromParent();
      marker.edges.geometry.dispose(); marker.edges.material.dispose();
      marker.ring.geometry.dispose(); marker.ring.material.dispose();
      dom.style.cursor = '';
      if (root) root = null;
    }
  };
}
