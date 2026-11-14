import * as THREE from 'three';
import { BALANCE } from '../mode/catalog.mjs';

const MARKER_COLOR = '#d7ee9a';
const HOVER_COLOR = '#8fc7d8';
const GHOST_COLORS = { ok: '#9fd66b', overlap: '#e8b23c', invalid: '#e05c4a' };
const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
const UNIT_EDGES = new THREE.EdgesGeometry(UNIT_BOX);

function createSelectionMarker() {
  const group = new THREE.Group();
  group.name = 'selection-marker';
  const edges = new THREE.LineSegments(
    UNIT_EDGES,
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
function createHoverMarker() {
  const group = new THREE.Group();
  group.name = 'hover-marker';
  const edges = new THREE.LineSegments(UNIT_EDGES, new THREE.LineBasicMaterial({ color: HOVER_COLOR, transparent: true, opacity: 0.5, depthTest: false }));
  edges.renderOrder = 6;
  group.add(edges);
  group.visible = false;
  return { group, edges };
}
// A translucent copy of the dragged part's box, tinted by placement legality.
function createGhost() {
  const group = new THREE.Group();
  group.name = 'drag-ghost';
  const material = new THREE.MeshBasicMaterial({ color: GHOST_COLORS.ok, transparent: true, opacity: 0.3, depthWrite: false });
  const body = new THREE.Mesh(UNIT_BOX, material);
  const edges = new THREE.LineSegments(UNIT_EDGES, new THREE.LineBasicMaterial({ color: GHOST_COLORS.ok, transparent: true, opacity: 0.9, depthWrite: false }));
  group.add(body, edges);
  group.visible = false;
  return { group, body, edges, material };
}

export function createBuildInteraction({ runtime, getGrid, onSelect, onDragMove, onDragEnd, onHover, onPreview }) {
  const dom = runtime.renderer.domElement;
  const host = runtime.host;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const plane = new THREE.Plane();
  const hit = new THREE.Vector3();
  const marker = createSelectionMarker();
  const hoverMarker = createHoverMarker();
  const ghost = createGhost();
  const parentRing = new THREE.Mesh(
    new THREE.RingGeometry(0.86, 1, 40),
    new THREE.MeshBasicMaterial({ color: MARKER_COLOR, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false })
  );
  parentRing.rotation.x = -Math.PI / 2;
  parentRing.renderOrder = 7;
  parentRing.visible = false;
  const pointers = new Set();
  runtime.scene.add(marker.group, hoverMarker.group, ghost.group, parentRing);
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
  // Rotated AABB half extents for a part, so the markers hug yawed parts.
  function halfExtents(size, yaw) {
    const c = Math.abs(Math.cos(yaw)), s = Math.abs(Math.sin(yaw));
    return [(size[0] * c + size[2] * s) / 2, size[1] / 2, (size[0] * s + size[2] * c) / 2];
  }
  function refreshMarker() {
    const group = selectedId ? partGroup(selectedId) : null;
    if (!group || !enabled) { marker.group.visible = false; return; }
    group.updateWorldMatrix(true, false);
    const world = new THREE.Vector3();
    group.getWorldPosition(world);
    const size = group.userData.partSize;
    if (!size) { marker.group.visible = false; return; }
    const half = halfExtents(size, group.rotation.y);
    marker.group.visible = true;
    marker.edges.position.copy(world);
    marker.edges.scale.set(half[0] * 2 + 0.04, half[1] * 2 + 0.04, half[2] * 2 + 0.04);
    marker.ring.position.set(world.x, 0.03, world.z);
    marker.ring.scale.setScalar(Math.max(half[0], half[2]) * 1.24 + 0.4);
  }
  function refreshHover() {
    const group = hoveredId && !drag ? partGroup(hoveredId) : null;
    if (!group || !enabled) { hoverMarker.group.visible = false; return; }
    group.updateWorldMatrix(true, false);
    const world = new THREE.Vector3();
    group.getWorldPosition(world);
    const size = group.userData.partSize;
    if (!size) { hoverMarker.group.visible = false; return; }
    const half = halfExtents(size, group.rotation.y);
    hoverMarker.group.visible = true;
    hoverMarker.edges.position.copy(world);
    hoverMarker.edges.scale.set(half[0] * 2 + 0.08, half[1] * 2 + 0.08, half[2] * 2 + 0.08);
  }
  function refreshGhost(preview) {
    if (!drag) { ghost.group.visible = false; parentRing.visible = false; return; }
    const size = drag.group.userData.partSize || [1, 1, 1];
    const target = preview?.position || drag.position;
    ghost.group.visible = true;
    ghost.group.position.set(...target);
    ghost.group.rotation.y = drag.yaw;
    ghost.group.scale.set(size[0] + 0.03, size[1] + 0.03, size[2] + 0.03);
    const color = GHOST_COLORS[preview?.status] || GHOST_COLORS.ok;
    ghost.material.color.set(color);
    ghost.edges.material.color.set(color);
    const parent = preview?.parentId ? partGroup(preview.parentId) : null;
    if (parent && parent.userData.partSize) {
      const world = new THREE.Vector3();
      parent.getWorldPosition(world);
      const half = halfExtents(parent.userData.partSize, parent.rotation.y);
      parentRing.visible = true;
      parentRing.position.set(world.x, 0.04, world.z);
      parentRing.scale.setScalar(Math.max(half[0], half[2]) * 1.2 + 0.3);
    } else parentRing.visible = false;
  }
  function setCursor(value) { dom.style.cursor = value; }
  function hideGhost() {
    ghost.group.visible = false;
    parentRing.visible = false;
  }

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
      position: world.clone(),
      yaw: group.rotation.y,
      preview: null
    };
    plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), world);
    runtime.controls.enabled = false;
    hoverMarker.group.visible = false;
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
      if (id !== hoveredId) { hoveredId = id; refreshHover(); onHover?.(id); }
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
    // Follow the cursor 1:1; the 0.1 m grid only applies after the drop.
    drag.position.set(
      THREE.MathUtils.clamp(drag.position.x, -BALANCE.maxExtent, BALANCE.maxExtent),
      THREE.MathUtils.clamp(drag.position.y, -BALANCE.maxExtent, BALANCE.maxExtent),
      THREE.MathUtils.clamp(drag.position.z, -BALANCE.maxExtent, BALANCE.maxExtent)
    );
    drag.group.position.set(drag.position.x, drag.position.y, drag.position.z);
    drag.group.rotation.y = drag.yaw;
    drag.group.updateWorldMatrix(true, true);
    drag.preview = onPreview?.(drag.id, drag.position.toArray(), drag.yaw) || null;
    refreshGhost(drag.preview);
    refreshMarker();
    onDragMove?.(drag.id, drag.position.toArray());
    runtime.invalidate();
  }
  function endDrag() {
    if (!drag) return;
    const finished = drag;
    drag = null;
    runtime.controls.enabled = true;
    hideGhost();
    if (finished.moved) onDragEnd?.(finished.id, finished.position.toArray(), finished.yaw);
    else { refreshMarker(); refreshHover(); }
    try { dom.releasePointerCapture?.(finished.pointerId); } catch { /* pointer already released */ }
    setCursor('');
  }
  function onPointerUp(event) {
    pointers.delete(event.pointerId);
    if (drag && event.pointerId === drag.pointerId) endDrag();
    else if (!pointers.size) runtime.controls.enabled = true;
  }
  function onPointerCancel(event) { pointers.delete(event.pointerId); endDrag(); runtime.controls.enabled = true; }
  // Wheel while dragging rotates the part: 15°, or 5° with Shift.
  function onWheel(event) {
    if (!drag || !drag.moved) return;
    event.preventDefault();
    const step = (event.shiftKey ? 5 : 15) * Math.PI / 180;
    drag.yaw += event.deltaY > 0 ? step : -step;
    drag.group.rotation.y = drag.yaw;
    drag.group.updateWorldMatrix(true, true);
    drag.preview = onPreview?.(drag.id, drag.position.toArray(), drag.yaw) || null;
    refreshGhost(drag.preview);
    refreshMarker();
    onDragMove?.(drag.id, drag.position.toArray());
    runtime.invalidate();
  }

  host.addEventListener('pointerdown', onPointerDown, true);
  host.addEventListener('pointermove', onPointerMove, true);
  host.addEventListener('pointerup', onPointerUp, true);
  host.addEventListener('pointercancel', onPointerCancel, true);
  host.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerCancel);
  return {
    setRoot(nextRoot) {
      root = nextRoot;
      tank = nextRoot?.userData?.tank || null;
      hoveredId = null;
      drag = null;
      runtime.controls.enabled = true;
      hideGhost();
      refreshMarker();
      refreshHover();
    },
    setSelected(id) { selectedId = id; refreshMarker(); },
    getPart(id) { return partGroup(id); },
    refresh() { refreshMarker(); refreshHover(); },
    setEnabled(value) {
      enabled = Boolean(value);
      if (!enabled) { drag = null; runtime.controls.enabled = true; marker.group.visible = false; hoverMarker.group.visible = false; hideGhost(); setCursor(''); }
      else { refreshMarker(); refreshHover(); }
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
      host.removeEventListener('wheel', onWheel);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
      marker.group.removeFromParent();
      marker.edges.material.dispose(); marker.ring.geometry.dispose(); marker.ring.material.dispose();
      hoverMarker.group.removeFromParent();
      hoverMarker.edges.material.dispose();
      ghost.group.removeFromParent();
      ghost.material.dispose(); ghost.edges.material.dispose();
      parentRing.removeFromParent();
      parentRing.geometry.dispose(); parentRing.material.dispose();
      dom.style.cursor = '';
      if (root) root = null;
    }
  };
}
