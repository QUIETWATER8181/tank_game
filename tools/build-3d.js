// Commit the bundle: both file:// and static hosting work without npm at runtime.
const fs = require('node:fs');
const path = require('node:path');
const esbuild = require('esbuild');
const root = path.resolve(__dirname, '..');
esbuild.buildSync({
  absWorkingDir: root, entryPoints: ['js/three/main.mjs'],
  outfile: 'js/three/scene.bundle.js', bundle: true, minify: true,
  format: 'iife', target: ['es2022'], legalComments: 'eof'
});
fs.copyFileSync(path.join(root, 'node_modules/three/LICENSE'), path.join(root, 'js/three/THREE-LICENSE.txt'));
esbuild.buildSync({
  absWorkingDir: root, entryPoints: ['js/mode/index.mjs'],
  outfile: 'js/mode/core.bundle.js', bundle: true, minify: true,
  format: 'iife', globalName: 'SteelJourneyCore', target: ['es2022']
});
for (const file of ['mode3d.html', 'css/mode3d.css', 'js/mode/core.bundle.js', 'js/three/scene.bundle.js', 'js/three/THREE-LICENSE.txt']) {
  const destination = path.join(root, '发布包', file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file), destination);
}
console.log('3D bundle built and release assets synchronized.');
