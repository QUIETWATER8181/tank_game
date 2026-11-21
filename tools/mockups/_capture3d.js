// 只为「拼装界面样张」截一张干净的 3D 底图：隐藏全部 HTML 界面，让视口铺满 1440×900。
// 用法：node tools/pseudo3d/shoot.js --page=mode3d.html --afterFile=tools/mockups/_capture3d.js --afterWait=1500 --wait=6000 --out=tools/mockups/scene-clean.png
(function () {
  var hide = '.toolbar,.mode-tabs,.workbench,.report-panel,.build-dock,.scene-caption,.scene-hud,footer,.camera-capsule,.guide,#message,#crosshair';
  document.querySelectorAll(hide).forEach(function (el) { el.style.display = 'none'; });
  var viewport = document.getElementById('viewport');
  viewport.style.position = 'fixed';
  viewport.style.inset = '0';
  viewport.style.zIndex = '0';
  // 清掉选中框（Escape 在 workbench.mjs 里就是取消选中）
  document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape', key: 'Escape', bubbles: true }));
  window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape', key: 'Escape', bubbles: true }));
  window.dispatchEvent(new Event('resize'));
  return 'hidden-ui';
})();
