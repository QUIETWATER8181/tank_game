(function () {
  "use strict";

  var TankGame = window.TankGame = window.TankGame || {};

  function AudioSystem() {
    this.context = null;
    this.master = null;
    this.muted = false;
    this.music = null;
    this.musicPath = null;
    this.musicEnabled = true;
    this.musicVolume = 70;
    this.musicBlocked = false;
    this.releaseVersion = "20260825-audio2";
    this.soundEffects = {};
    this.failedSoundEffects = {};
    this.activeSoundEffects = [];
    this.maxSoundChannels = 16;
    this.burningSounds = [];
    this.cinematicSounds = [];
    this.prewarmScheduled = false;
  }

  AudioSystem.prototype.initialize = function () {
    this.initializeMusic();
    if (this.context) {
      if (this.context.state === "suspended" && this.context.resume) {
        try { this.context.resume(); } catch (error) {}
      }
      return;
    }
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) { return; }
    try {
      this.context = new AudioContextClass();
      this.master = this.context.createGain();
      this.master.gain.value = this.muted ? 0 : 0.22;
      this.master.connect(this.context.destination);
    } catch (error) {
      this.context = null;
      this.master = null;
    }
    if (this.context && this.context.state === "suspended" && this.context.resume) {
      try { this.context.resume(); } catch (resumeError) {}
    }
  };

  AudioSystem.prototype.resolveMediaPath = function (path) {
    if (!path || !window.location || !/^https?:$/.test(window.location.protocol)) { return path; }
    return path + (path.indexOf("?") === -1 ? "?" : "&") + "v=" + this.releaseVersion;
  };

  AudioSystem.prototype.initializeSoundEffects = function (name) {
    var self = this;
    var configured = TankGame.Config.soundEffects || {};
    if (!name || !configured[name]) { return; }
    [name].forEach(function (effectName) {
      if (self.soundEffects[effectName] || self.failedSoundEffects[effectName] || !window.Audio) { return; }
      var sound = new window.Audio(self.resolveMediaPath(configured[effectName]));
      sound.preload = "auto";
      sound.volume = {
        begin: 0.62, again: 0.62, shoot: 0.55, defeat: 0.68,
        explode: 0.68, pickup: 0.62, pageTurn: 0.3, boostPickup: 0.62, hit: 0.56, victory: 0.68, burn: 0.22, trumpCardSlash: 0.72
      }[effectName] || 0.45;
      sound.addEventListener("error", function () {
        delete self.soundEffects[effectName];
        self.failedSoundEffects[effectName] = true;
      });
      self.soundEffects[effectName] = sound;
    });
  };

  AudioSystem.prototype.prewarmCriticalAssets = function () {
    var self = this;
    var names = ["begin", "again", "shoot", "hit", "explode", "boostPickup"];
    if (this.prewarmScheduled || !window.Audio) { return; }
    this.prewarmScheduled = true;
    names.forEach(function (name) { self.initializeSoundEffects(name); });
  };

  AudioSystem.prototype.playLoaded = function (name, onFailure, maxDuration) {
    var self = this;
    var aliases = { enemyShoot: "shoot" };
    var source = this.soundEffects[aliases[name] || name];
    var instance;
    var promise;
    var durationTimer;
    if (!source || this.muted) { return false; }
    while (this.activeSoundEffects.length >= this.maxSoundChannels) {
      this.activeSoundEffects.shift().pause();
    }
    instance = source.cloneNode(true);
    instance.volume = source.volume;
    instance.addEventListener("ended", function () {
      var index = self.activeSoundEffects.indexOf(instance);
      if (index !== -1) { self.activeSoundEffects.splice(index, 1); }
      if (durationTimer) { window.clearTimeout(durationTimer); }
    }, { once: true });
    this.activeSoundEffects.push(instance);
    try {
      promise = instance.play();
    } catch (error) {
      this.activeSoundEffects.splice(this.activeSoundEffects.indexOf(instance), 1);
      return false;
    }
    if (promise && promise.catch) {
      promise.catch(function () {
        var index = self.activeSoundEffects.indexOf(instance);
        if (index !== -1) { self.activeSoundEffects.splice(index, 1); }
        if (onFailure) { onFailure(); }
      });
    }
    if (maxDuration > 0) {
      durationTimer = window.setTimeout(function () {
        instance.pause();
        var index = self.activeSoundEffects.indexOf(instance);
        if (index !== -1) { self.activeSoundEffects.splice(index, 1); }
      }, maxDuration);
    }
    return true;
  };

  AudioSystem.prototype.startBurning = function () {
    var self = this;
    var sound;
    var stopTimer;
    if (this.muted) { return null; }
    if (this.soundEffects.burn) {
      sound = this.soundEffects.burn.cloneNode(true);
      sound.loop = true;
      sound.volume = this.soundEffects.burn.volume;
      sound.currentTime = 0;
      sound.play().catch(function () {});
      var handle = { sound: sound, stopTimer: null };
      this.burningSounds.push(handle);
      stopTimer = window.setTimeout(function () { self.stopBurning(handle); }, 3250);
      handle.stopTimer = stopTimer;
      return handle;
    }
    if (!this.context || !this.master) { return null; }
    sound = { fallback: true, timers: [] };
    sound.timers.push(window.setInterval(function () {
      self.tone(72 + Math.random() * 48, 0.08 + Math.random() * 0.08, "sawtooth", 0.018, 42);
    }, 155));
    sound.timers.push(window.setTimeout(function () { self.stopBurning(sound); }, 3250));
    this.burningSounds.push(sound);
    return sound;
  };

  AudioSystem.prototype.stopBurning = function (handle) {
    var index;
    if (!handle) { return; }
    if (handle.stopTimer) { window.clearTimeout(handle.stopTimer); }
    if (handle.timers) {
      handle.timers.forEach(function (timer) {
        window.clearTimeout(timer);
        window.clearInterval(timer);
      });
    }
    if (handle.sound) {
      handle.sound.pause();
      handle.sound.currentTime = 0;
    }
    index = this.burningSounds.indexOf(handle);
    if (index !== -1) { this.burningSounds.splice(index, 1); }
  };

  AudioSystem.prototype.stopAllBurning = function () {
    var self = this;
    this.burningSounds.slice().forEach(function (handle) { self.stopBurning(handle); });
  };

  AudioSystem.prototype.initializeMusic = function () {
    var self = this;
    var desiredPath = this.musicPath || TankGame.Config.backgroundMusic;
    if (this.music || !window.Audio || !desiredPath) { return; }
    this.musicPath = desiredPath;
    this.music = new window.Audio(this.resolveMediaPath(desiredPath));
    this.music.loop = true;
    this.music.preload = "auto";
    this.music.volume = this.musicVolume / 100;
    this.music.addEventListener("playing", function () {
      self.musicBlocked = false;
    });
    this.music.addEventListener("error", function () {
      self.musicBlocked = true;
    });
  };

  AudioSystem.prototype.startMusicFromGesture = function () {
    this.initialize();
    this.playMusic();
  };

  AudioSystem.prototype.setMusicTrack = function (path, restart) {
    var desiredPath = path || TankGame.Config.backgroundMusic;
    if (this.music && this.musicPath === desiredPath) {
      if (restart) { this.music.currentTime = 0; }
      this.playMusic();
      return;
    }
    if (this.music) {
      this.music.pause();
      this.music.currentTime = 0;
    }
    this.music = null;
    this.musicPath = desiredPath;
    this.initializeMusic();
    this.playMusic();
  };

  AudioSystem.prototype.startCinematicAudio = function () {
    var self = this;
    var configured = TankGame.Config.cinematicSoundEffects || {};
    var volumes = { rotor: 0.58, pilot: 0.74 };
    this.stopCinematicAudio();
    if (!window.Audio) { return; }
    Object.keys(configured).forEach(function (name) {
      var sound = new window.Audio(self.resolveMediaPath(configured[name]));
      var playPromise;
      sound.loop = true;
      sound.preload = "auto";
      sound.currentTime = 0;
      sound.cinematicVolume = volumes[name] || 0.6;
      sound.volume = self.muted ? 0 : sound.cinematicVolume;
      self.cinematicSounds.push(sound);
      playPromise = sound.play();
      if (playPromise && playPromise.catch) { playPromise.catch(function () {}); }
    });
  };

  AudioSystem.prototype.stopCinematicAudio = function () {
    this.cinematicSounds.forEach(function (sound) {
      sound.pause();
      sound.currentTime = 0;
    });
    this.cinematicSounds = [];
  };

  AudioSystem.prototype.setMusicVolume = function (value) {
    var numericValue = Number(value);
    this.musicVolume = Math.max(0, Math.min(100, Number.isFinite(numericValue) ? Math.round(numericValue) : 70));
    this.initializeMusic();
    if (this.music) { this.music.volume = this.musicVolume / 100; }
    if (this.musicVolume > 0) {
      this.musicEnabled = true;
      this.playMusic();
    } else if (this.music) {
      this.musicEnabled = false;
      this.music.pause();
    }
    return this.musicVolume;
  };

  AudioSystem.prototype.getMusicVolume = function () {
    return this.musicVolume;
  };

  AudioSystem.prototype.playMusic = function () {
    var self = this;
    var playPromise;
    if (!this.musicEnabled || this.musicVolume <= 0) { return; }
    this.initializeMusic();
    if (!this.music) { return; }
    try {
      playPromise = this.music.play();
    } catch (error) {
      this.musicBlocked = true;
      return;
    }
    if (playPromise && playPromise.then) {
      playPromise.then(function () {
        self.musicBlocked = false;
      }).catch(function () {
        self.musicBlocked = true;
      });
    }
  };

  AudioSystem.prototype.setMusicEnabled = function (enabled) {
    this.musicEnabled = enabled;
    if (enabled) {
      this.playMusic();
    } else if (this.music) {
      this.music.pause();
    }
  };

  AudioSystem.prototype.toggleMusic = function () {
    this.setMusicEnabled(!this.musicEnabled);
    return this.musicEnabled;
  };

  AudioSystem.prototype.setMuted = function (muted) {
    this.muted = muted;
    if (this.master && this.context) {
      this.master.gain.setTargetAtTime(muted ? 0 : 0.22, this.context.currentTime, 0.03);
    }
    if (muted) {
      this.activeSoundEffects.forEach(function (sound) { sound.pause(); });
      this.activeSoundEffects = [];
      this.stopAllBurning();
    }
    this.cinematicSounds.forEach(function (sound) {
      sound.volume = muted ? 0 : sound.cinematicVolume;
    });
  };

  AudioSystem.prototype.toggleMuted = function () {
    this.setMuted(!this.muted);
    return this.muted;
  };

  AudioSystem.prototype.tone = function (frequency, duration, type, volume, slide) {
    if (!this.context || !this.master || this.muted) { return; }
    var now = this.context.currentTime;
    var oscillator = this.context.createOscillator();
    var gain = this.context.createGain();
    oscillator.type = type || "square";
    oscillator.frequency.setValueAtTime(frequency, now);
    if (slide) { oscillator.frequency.exponentialRampToValueAtTime(Math.max(30, slide), now + duration); }
    gain.gain.setValueAtTime(volume || 0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    oscillator.connect(gain);
    gain.connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + duration);
  };

  AudioSystem.prototype.play = function (name) {
    var self = this;
    var aliases = { enemyShoot: "shoot" };
    this.initializeSoundEffects(aliases[name] || name);
    if (this.playLoaded(name, null, name === "trumpCardSlash" ? 1000 : 0)) { return; }
    if (name === "begin") { this.tone(440, 0.16, "triangle", 0.09, 660); }
    if (name === "again") { this.tone(392, 0.16, "triangle", 0.09, 587); }
    if (name === "shoot") { this.tone(170, 0.1, "square", 0.1, 70); }
    if (name === "enemyShoot") { this.tone(120, 0.12, "sawtooth", 0.08, 55); }
    if (name === "hit") { this.tone(520, 0.07, "triangle", 0.07, 220); }
    if (name === "explode") { this.tone(95, 0.38, "sawtooth", 0.12, 35); }
    if (name === "pickup") { this.tone(440, 0.1, "sine", 0.08, 660); window.setTimeout(function () { self.tone(660, 0.14, "sine", 0.07, 880); }, 90); }
    if (name === "count") { this.tone(330, 0.12, "square", 0.07, 300); }
    if (name === "go") { this.tone(660, 0.25, "square", 0.1, 900); }
    if (name === "pageTurn") {
      this.tone(540, 0.055, "triangle", 0.045, 690);
      window.setTimeout(function () { self.tone(690, 0.075, "triangle", 0.035, 810); }, 42);
    }
    if (name === "trumpCardSlash") {
      this.tone(980, 0.075, "sawtooth", 0.08, 260);
      window.setTimeout(function () { self.tone(380, 0.11, "triangle", 0.055, 120); }, 45);
    }
    if (name === "levelClear") { this.tone(392, 0.14, "triangle", 0.08, 523); window.setTimeout(function () { self.tone(523, 0.2, "triangle", 0.08, 659); }, 130); }
    if (name === "victory") { this.tone(523, 0.2, "triangle", 0.08, 659); window.setTimeout(function () { self.tone(659, 0.25, "triangle", 0.08, 784); }, 170); }
    if (name === "defeat") { this.tone(220, 0.35, "sawtooth", 0.08, 90); }
  };

  AudioSystem.prototype.playPageTurnTone = function () {
    var self = this;
    var playTone = function () {
      if (!self.context || !self.master || self.muted || self.context.state === "closed") { return; }
      // Schedule the first oscillator immediately. Waiting for resume()'s
      // promise loses the user-gesture window in file:// browser sessions.
      self.tone(520, 0.075, "triangle", 0.095, 700);
      window.setTimeout(function () {
        if (!self.muted && self.context && self.context.state !== "closed") {
          self.tone(700, 0.095, "triangle", 0.075, 900);
        }
      }, 42);
    };
    if (!this.context || !this.master || this.muted) { return false; }
    if (this.context.state === "suspended" && this.context.resume) {
      try {
        // Resume is still requested in the gesture, but the tone is queued
        // before its promise settles so local-file playback remains audible.
        this.context.resume();
      } catch (error) {}
    }
    playTone();
    return true;
  };

  AudioSystem.prototype.playPageTurn = function () {
    var source;
    var promise;
    var tonePlayed;
    if (this.muted) { return false; }

    // Keep context creation/resume inside the page-turn user gesture. This is
    // important when the game is opened directly through file://.
    this.initialize();
    // A second resume call is intentional. In Chromium, the first call can
    // happen while the help panel is opening and finish after the click
    // handler. Calling it again here keeps this exact gesture associated with
    // the audio context used for the page-turn cue.
    if (this.context && this.context.state === "suspended" && this.context.resume) {
      try { this.context.resume(); } catch (error) {}
    }
    // Start the fallback tone first, synchronously. A local audio element can
    // be present but still be blocked or unloaded when index.html is opened
    // directly from disk.
    tonePlayed = this.playPageTurnTone();
    this.initializeSoundEffects("pageTurn");
    source = this.soundEffects.pageTurn;

    // The Web Audio cue above is the guaranteed cue. The WAV is an optional
    // richer layer and must never be allowed to replace or delay it.
    if (source) {
      try {
        source.pause();
        source.currentTime = 0;
        source.volume = Math.max(source.volume || 0, 0.42);
        promise = source.play();
        if (promise && promise.catch) { promise.catch(function () {}); }
      } catch (error) {
        // The Web Audio cue already played, so an element failure is harmless.
      }
    }
    return Boolean(tonePlayed || source);
  };
  AudioSystem.prototype.playBurning = function () {
    this.initializeSoundEffects("burn");
    return this.startBurning();
  };

  AudioSystem.prototype.stopBurningSound = function (sound) {
    this.stopBurning(sound);
  };


  TankGame.Audio = new AudioSystem();
}());
