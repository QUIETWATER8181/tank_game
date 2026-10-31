(function () {
  "use strict";

  var activeRun = 0;
  var submittedRun = -1;
  var pendingScore = null;
  var retryTimer = 0;
  var loginPending = false;

  function getApi() {
    return window.h5api;
  }

  function call(method, args) {
    var api = getApi();
    if (!api || typeof api[method] !== "function") { return false; }
    try {
      api[method].apply(api, args || []);
      return true;
    } catch (error) {
      return false;
    }
  }

  function normalizeScore(score) {
    return Math.max(0, Math.floor(Number(score) || 0));
  }

  function flushScore() {
    var api = getApi();
    var expectedRun;
    var loggedIn = true;

    if (!pendingScore || submittedRun === pendingScore.run || !api || typeof api.submitScore !== "function") { return; }
    expectedRun = pendingScore.run;

    function submit() {
      if (!pendingScore || pendingScore.run !== expectedRun) { return; }
      if (call("submitScore", [pendingScore.score, function () {}])) {
        submittedRun = pendingScore.run;
        pendingScore = null;
        window.clearInterval(retryTimer);
        retryTimer = 0;
      }
    }

    if (typeof api.isLogin === "function") {
      try { loggedIn = Boolean(api.isLogin()); } catch (error) { loggedIn = true; }
    }
    if (!loggedIn && typeof api.login === "function") {
      if (loginPending) { return; }
      loginPending = true;
      try {
        api.login(function () {
          loginPending = false;
          submit();
        });
      } catch (error) {
        loginPending = false;
      }
      return;
    }
    submit();
  }

  window.TankGame4399 = {
    beginRun: function () {
      activeRun += 1;
      submittedRun = -1;
      pendingScore = null;
      loginPending = false;
      if (retryTimer) {
        window.clearInterval(retryTimer);
        retryTimer = 0;
      }
    },

    progress: function (percent) {
      call("progress", [Math.max(0, Math.min(100, Math.round(Number(percent) || 0)))]);
    },

    submitResult: function (score) {
      if (submittedRun === activeRun || (pendingScore && pendingScore.run === activeRun)) { return false; }
      pendingScore = { run: activeRun, score: normalizeScore(score) };
      flushScore();
      if (pendingScore && !retryTimer) {
        retryTimer = window.setInterval(flushScore, 1000);
        window.setTimeout(function () {
          if (retryTimer) {
            window.clearInterval(retryTimer);
            retryTimer = 0;
          }
        }, 15000);
      }
      return true;
    },

    share: function () {
      return call("share");
    },

    login: function (callback) {
      var done = typeof callback === "function" ? callback : function () {};
      if (!call("login", [done])) { done(null); }
    },

    isAvailable: function () {
      return Boolean(getApi());
    }
  };

  window.TankGame4399.progress(10);
  document.addEventListener("DOMContentLoaded", function () {
    window.TankGame4399.progress(60);
  });
  window.addEventListener("load", function () {
    window.TankGame4399.progress(100);
    flushScore();
  });
}());
