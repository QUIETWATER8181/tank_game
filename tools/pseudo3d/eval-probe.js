// 截图后回读探针信息 + 性能面板文本
(function () {
  var probe = window.__probe || {};
  var stats = document.getElementById("perfStats");
  probe.stats = stats ? stats.textContent.replace(/\n/g, " | ") : null;
  return probe;
}())
