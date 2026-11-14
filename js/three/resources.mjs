// Each loaded asset owns its resources; dispose once even when meshes share them.
export function disposeObject(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set(), skeletons = new Set();
  root.traverse(object => {
    if (object.geometry) geometries.add(object.geometry);
    if (object.skeleton) skeletons.add(object.skeleton);
    for (const material of [].concat(object.material || [])) {
      materials.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
    }
  });
  skeletons.forEach(value => value.dispose());
  geometries.forEach(value => value.dispose());
  materials.forEach(value => value.dispose());
  const images = new Set();
  textures.forEach(value => { if (value.source?.data) images.add(value.source.data); value.dispose(); });
  images.forEach(value => { if (typeof value.close === 'function') value.close(); });
  root.removeFromParent();
}
