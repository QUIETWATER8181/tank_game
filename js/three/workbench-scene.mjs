import * as THREE from 'three';
import { buildTankModel } from './tank-model.mjs';
import { buildLevelScene } from './level-scene.mjs';

// Workshop staging: a build plate under the tank plus the proxy model itself.
function buildPlatform(group) {
  const plate = new THREE.Mesh(
    new THREE.CylinderGeometry(5.6, 5.9, .12, 48),
    new THREE.MeshStandardMaterial({ color: '#26343a', roughness: .72, metalness: .35 })
  );
  plate.position.y = -.06;
  plate.receiveShadow = true;
  group.add(plate);
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(5.0, 5.18, 64),
    new THREE.MeshBasicMaterial({ color: '#b7ce92', transparent: true, opacity: .55, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = .006;
  group.add(ring);
  for (let index = 0; index < 12; index++) {
    const angle = (index / 12) * Math.PI * 2;
    const tick = new THREE.Mesh(
      new THREE.BoxGeometry(.06, .01, .5),
      new THREE.MeshBasicMaterial({ color: index % 3 === 0 ? '#d7e8ac' : '#7f9c86' })
    );
    tick.position.set(Math.cos(angle) * 5.5, .007, Math.sin(angle) * 5.5);
    tick.rotation.y = -angle;
    group.add(tick);
  }
}

export function blueprintScene(blueprint, selectedId) {
  const group = new THREE.Group();
  group.name = 'workshop';
  buildPlatform(group);
  const tank = buildTankModel(blueprint, { faction: 'player', merged: true });
  tank.userData.selectedId = selectedId || null;
  group.add(tank);
  group.userData.tank = tank;
  return group;
}

export function missionScene(run, { combat = false, playerPose = null } = {}) {
  return buildLevelScene(run, { combat, playerPose });
}
