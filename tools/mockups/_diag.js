(() => {
  const vp = document.querySelector('#viewport');
  const r = vp ? vp.getBoundingClientRect() : null;
  return {
    info: window.__steel3d && window.__steel3d.info ? window.__steel3d.info() : null,
    keys: Object.keys(window.__steel3d || {}),
    storage: document.querySelector('#storageStatus') && document.querySelector('#storageStatus').textContent,
    workspace: (document.querySelector('#workspace') || {}).textContent?.slice(0, 60),
    viewport: r ? { w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.left), y: Math.round(r.top) } : null,
    canvas: document.querySelector('#viewport canvas') ? { w: document.querySelector('#viewport canvas').width, h: document.querySelector('#viewport canvas').height } : null
  };
})()
