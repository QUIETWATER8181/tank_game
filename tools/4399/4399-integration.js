(function () {
  "use strict";

  var platform = window.TankGame4399;
  var shareButton = document.getElementById("shareButton");
  var startButton = document.getElementById("startButton");
  var pauseRestartButton = document.getElementById("pauseRestartButton");
  var retryButtons = document.querySelectorAll(".retry-button");
  var observedVictory = false;
  var observedDefeat = false;

  if (!platform) { return; }

  function beginRun() {
    observedVictory = false;
    observedDefeat = false;
    platform.beginRun();
  }

  function observeResults() {
    var victoryPanel = document.getElementById("victoryPanel");
    var defeatPanel = document.getElementById("defeatPanel");
    var victoryVisible = victoryPanel && !victoryPanel.hidden;
    var defeatVisible = defeatPanel && !defeatPanel.hidden;
    var scoreElement;

    if ((victoryVisible && !observedVictory) || (defeatVisible && !observedDefeat)) {
      scoreElement = victoryVisible ? document.getElementById("victoryScore") : document.getElementById("defeatScore");
      platform.submitResult(scoreElement ? scoreElement.textContent : 0);
    }
    observedVictory = victoryVisible;
    observedDefeat = defeatVisible;
  }

  startButton.addEventListener("click", beginRun, true);
  pauseRestartButton.addEventListener("click", beginRun, true);
  retryButtons.forEach(function (button) {
    button.addEventListener("click", beginRun, true);
  });

  shareButton.addEventListener("click", function () {
    platform.share();
  });

  new MutationObserver(observeResults).observe(document.getElementById("gameStage"), {
    attributes: true,
    attributeFilter: ["hidden"],
    subtree: true
  });
  observeResults();
}());
