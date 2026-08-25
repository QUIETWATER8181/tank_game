(function () {
  "use strict";

  // All platform calls are optional so the game remains playable outside 4399.
  var lastSubmittedScore = null;
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

  function submitScore(score) {
    var api = getApi();
    var numericScore = Math.max(0, Math.floor(Number(score) || 0));
    if (!api || typeof api.submitScore !== "function" || numericScore === lastSubmittedScore) { return; }

    var submit = function () {
      lastSubmittedScore = numericScore;
      call("submitScore", [numericScore, function () {}]);
    };

    var loggedIn = true;
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
    progress: function (percent) {
      call("progress", [Math.max(0, Math.min(100, Math.round(percent)))]);
    },
    share: function () {
      call("share");
    },
    login: function (callback) {
      var api = getApi();
      if (!api || typeof api.login !== "function") {
        if (typeof callback === "function") { callback(null); }
        return;
      }
      try { api.login(callback); } catch (error) {
        if (typeof callback === "function") { callback(null); }
      }
    },
    submitScore: submitScore
  };

  window.TankGame4399.progress(10);
  window.addEventListener("load", function () {
    window.TankGame4399.progress(100);
  });
}());