(function () {
  "use strict";

  var TankGame = window.TankGame = window.TankGame || {};
  var Config = TankGame.Config || {};
  var onlineConfig = Config.online || {};
  var PROTOCOL = Number(onlineConfig.protocol) || 2;
  var MAX_PLAYERS = Number(onlineConfig.maxPlayers) || 10;
  var QUICK_MAX_PLAYERS = Number(onlineConfig.quickMaxPlayers) || 4;
  var QUICK_SLOTS = Number(onlineConfig.quickSlots) || 12;
  var QUICK_PREFIX = onlineConfig.quickSlotPrefix || "xpz-tank-qp-";
  var PROBE_TIMEOUT = Number(onlineConfig.quickProbeTimeout) || 4500;
  var HOST_ATTEMPTS = Number(onlineConfig.hostCodeAttempts) || 4;
  var PEER_MISSING = "联机组件加载失败，请刷新页面后重试";

  var id = Math.random().toString(36).slice(2) + Date.now().toString(36).slice(-4);
  var room = null;
  var listeners = [];
  var hitListeners = [];
  var shotListeners = [];
  var killListeners = [];
  var peer = null;
  var connections = {};
  var quick = null;
  var heartbeatTimer = null;

  function startHeartbeat() {
    if (heartbeatTimer) { return; }
    heartbeatTimer = setInterval(function () {
      if (!room) { return; }
      if (room.host) {
        broadcast({ type: "ping", code: room.code });
      } else if (room.lastHostSeen && Date.now() - room.lastHostSeen > 8000) {
        failRoom("与房主失去连接");
      }
    }, 2000);
    if (heartbeatTimer.unref) { heartbeatTimer.unref(); }
  }

  function stopHeartbeat() {
    if (!heartbeatTimer) { return; }
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }

  function randomCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  function nextSeed() {
    return (Date.now() ^ Math.floor(Math.random() * 0xFFFFFFFF)) >>> 0;
  }

  function emit() {
    var snapshot = room;
    listeners.slice().forEach(function (fn) { try { fn(snapshot); } catch (error) {} });
  }

  function withSender(message) {
    var next = Object.assign({}, message);
    if (!next.from) { next.from = id; }
    return next;
  }

  function sendTo(conn, message) {
    try { conn.send(withSender(message)); } catch (error) {}
  }

  function broadcast(message, exceptPeerId) {
    var outbound = withSender(message);
    Object.keys(connections).forEach(function (key) {
      if (exceptPeerId && key === exceptPeerId) { return; }
      try { connections[key].send(outbound); } catch (error) {}
    });
  }

  function peerOptions() {
    var servers = [];
    (onlineConfig.iceServers || []).forEach(function (server) { servers.push(server); });
    if (onlineConfig.turn) { servers.push(onlineConfig.turn); }
    return {
      debug: 0,
      config: {
        iceServers: servers,
        iceCandidatePoolSize: 2
      }
    };
  }

  function resetSession() {
    if (room && !room.host && room.code) {
      broadcast({ type: "leave", code: room.code, name: room.localName });
    }
    teardownQuick();
    shutdownPeer();
    room = null;
  }

  function createRoom(overrides) {
    room = Object.assign({
      code: "",
      peerId: "",
      host: false,
      index: 0,
      localId: id,
      localName: "",
      names: [],
      seed: nextSeed(),
      round: 1,
      started: false,
      phase: "lobby",
      readyNames: [],
      ended: false,
      clockOffsetMs: 0,
      remote: {},
      localKills: 0,
      maxPlayers: MAX_PLAYERS,
      quick: false,
      matching: false,
      retrying: false,
      connected: false,
      error: "",
      closed: false,
      excluded: false,
      peerNames: {},
      playerByConn: {},
      expectedPlayers: 0,
      result: null
    }, overrides || {});
    return room;
  }

  function shutdownPeer() {
    stopHeartbeat();
    connections = {};
    if (peer) { try { peer.destroy(); } catch (error) {} peer = null; }
  }

  function failRoom(reason) {
    if (!room) { return; }
    room.error = reason;
    room.phase = "closed";
    room.closed = true;
    room.connected = false;
    room.matching = false;
    teardownQuick();
    shutdownPeer();
    emit();
  }

  function applyTimeline(message) {
    if (!room || !message) { return; }
    room.round = Number(message.round) || room.round || 1;
    room.roundStartedAt = Number(message.roundStartedAt) || room.roundStartedAt || Date.now();
    room.combatStartedAt = Number(message.combatStartedAt) || room.combatStartedAt || room.roundStartedAt + 3000;
    room.expectedPlayers = Number(message.expectedPlayers) || room.expectedPlayers || room.names.length;
    if (!room.host && Number.isFinite(Number(message.hostNow))) {
      room.clockOffsetMs = Number(message.hostNow) - Date.now();
    }
  }

  function timelineMessage(type) {
    return {
      type: type,
      code: room.code,
      seed: room.seed,
      round: room.round,
      roundStartedAt: room.roundStartedAt,
      combatStartedAt: room.combatStartedAt,
      expectedPlayers: room.expectedPlayers,
      participants: room.names.slice(),
      hostNow: Date.now()
    };
  }

  function lobbyMessage() {
    return {
      type: "lobby",
      code: room.code,
      names: room.names.slice(),
      seed: room.seed,
      phase: room.phase || "lobby",
      readyNames: (room.readyNames || []).slice(),
      maxPlayers: room.maxPlayers,
      quick: Boolean(room.quick)
    };
  }

  function addReadyName(name) {
    if (!room || room.names.indexOf(name) === -1) { return false; }
    room.readyNames = room.readyNames || [];
    if (room.readyNames.indexOf(name) === -1) { room.readyNames.push(name); }
    return true;
  }

  function applyLobby(message) {
    if (!room || !message) { return; }
    room.names = message.names || room.names;
    room.seed = message.seed || room.seed;
    room.phase = message.phase || "lobby";
    room.readyNames = message.readyNames || [];
    if (Number(message.maxPlayers)) { room.maxPlayers = Number(message.maxPlayers); }
    if (message.quick !== undefined) { room.quick = Boolean(message.quick); }
    room.index = Math.max(0, room.names.indexOf(room.localName));
    room.excluded = room.names.indexOf(room.localName) === -1;
  }

  function evaluateEnd() {
    var local = room.localState || { name: room.localName, alive: true, ghost: false, survivalTime: 0, kills: room.localKills || 0 };
    var all = [{
      id: id,
      name: local.name || room.localName,
      alive: local.alive !== false,
      ghost: Boolean(local.ghost),
      deathAt: Number(local.deathAt) || 0,
      survivalTime: Number(local.survivalTime) || 0,
      kills: Number(local.kills) || 0
    }];
    Object.keys(room.remote || {}).forEach(function (key) {
      var player = room.remote[key];
      if (player) {
        all.push({
          id: key,
          name: player.name || key,
          alive: player.alive !== false,
          ghost: Boolean(player.ghost),
          deathAt: Number(player.deathAt) || 0,
          survivalTime: Number(player.survivalTime) || 0,
          kills: Number(player.kills) || 0
        });
      }
    });
    if (!room.host || room.ended || all.length < Math.max(2, Number(room.expectedPlayers || room.names.length))) { return; }
    var active = all.filter(function (player) { return player.alive && !player.ghost; });
    if (active.length !== 1) { return; }
    var endedAt = Date.now();
    var elapsedAtEnd = Math.max(0, (endedAt - Number(room.combatStartedAt || endedAt)) / 1000);
    all.forEach(function (player) {
      player.survivalTime = player.deathAt
        ? Math.max(0, (player.deathAt - Number(room.combatStartedAt || player.deathAt)) / 1000)
        : (player.alive && !player.ghost ? elapsedAtEnd : player.survivalTime);
    });
    all.sort(function (a, b) { return (b.survivalTime - a.survivalTime) || (b.kills - a.kills); });
    room.ended = true;
    room.endedAt = endedAt;
    room.phase = "result";
    room.result = { winner: active[0].name, winnerId: active[0].id, endedAt: endedAt, elapsed: elapsedAtEnd, standings: all };
    broadcast({ type: "end", code: room.code, result: room.result });
    emit();
  }

  function rejectJoin(conn, reason) {
    sendTo(conn, { type: "join-rejected", code: room.code, reason: reason });
    delete connections[conn.peer];
    setTimeout(function () { try { conn.close(); } catch (error) {} }, 250);
  }

  function dropPeer(peerId) {
    if (!room) { return; }
    delete connections[peerId];
    if (!room.host) {
      if (room.closed || room.retrying) { return; }
      if (peerId === room.code || peerId === room.peerId) { failRoom("房主已离开房间"); }
      return;
    }
    var playerId = room.playerByConn[peerId] || peerId;
    delete room.playerByConn[peerId];
    var name = room.peerNames[playerId];
    if (name) {
      room.names = room.names.filter(function (item) { return item !== name; });
      room.readyNames = (room.readyNames || []).filter(function (item) { return item !== name; });
      delete room.peerNames[playerId];
    }
    if (room.started && room.remote) {
      var remote = room.remote[playerId];
      if (!remote) {
        remote = room.remote[playerId] = {
          name: name || playerId,
          alive: false,
          ghost: true,
          survivalTime: 0,
          kills: 0
        };
      }
      remote.alive = false;
      remote.ghost = true;
      remote.disconnected = true;
      if (!remote.deathAt) { remote.deathAt = Date.now(); }
    }
    if (room.started && !room.ended) { evaluateEnd(); }
    if (room.host) { broadcast(lobbyMessage()); }
    emit();
  }

  function handleMessage(message, source) {
    if (!room || !message || message.code !== room.code) { return; }
    if (message.from === id) { return; }
    if (!room.host) { room.lastHostSeen = Date.now(); }

    if (message.type === "join") {
      if (!room.host) { return; }
      if (Number(message.protocol) !== PROTOCOL) { rejectJoin(source, "version"); return; }
      if (room.names.length >= (room.maxPlayers || MAX_PLAYERS)) { rejectJoin(source, "full"); return; }
      if (room.names.indexOf(message.name) !== -1) { rejectJoin(source, "name"); return; }
      room.names.push(message.name);
      room.peerNames[message.from] = message.name;
      if (source && source.peer) { room.playerByConn[source.peer] = message.from; }
      broadcast(lobbyMessage());
      emit();
      return;
    }

    if (message.type === "join-rejected") {
      if (room.host) { return; }
      if (message.reason === "full" && room.quick && quick && quick.joining) {
        retryQuickSlot();
        return;
      }
      room.error = message.reason === "full" ? "房间已满"
        : (message.reason === "version" ? "双方版本不一致，请刷新页面后再试" : "昵称已被占用，请换一个");
      room.phase = "closed";
      room.closed = true;
      teardownQuick();
      shutdownPeer();
      emit();
      return;
    }

    if (message.type === "continue") {
      if (room.host && addReadyName(message.name)) {
        room.phase = "lobby";
        room.started = false;
        room.ended = false;
        broadcast(lobbyMessage());
        emit();
      }
      return;
    }

    if (message.type === "leave") {
      if (room.host) {
        room.names = room.names.filter(function (item) { return item !== message.name; });
        room.readyNames = (room.readyNames || []).filter(function (item) { return item !== message.name; });
        Object.keys(room.peerNames).forEach(function (key) {
          if (room.peerNames[key] === message.name) { delete room.peerNames[key]; }
        });
        broadcast(lobbyMessage());
        emit();
      }
      return;
    }

    if (message.type === "room-closed") {
      room.closed = true;
      room.started = false;
      room.ended = false;
      room.phase = "closed";
      emit();
      return;
    }

    if (message.type === "lobby") {
      applyLobby(message);
      if (quick) {
        if (quick.confirmTimer) { clearTimeout(quick.confirmTimer); }
        quick = null;
      }
      emit();
      return;
    }

    if (message.type === "state") {
      if (!message.player) { return; }
      message.player.remoteId = message.from;
      message.player.hostile = true;
      message.player.team = "player";
      room.remote = room.remote || {};
      room.remote[message.from] = message.player;
      if (room.host) {
        broadcast(message, source && source.peer);
        evaluateEnd();
      }
      emit();
      return;
    }

    if (message.type === "start") {
      if (message.participants && message.participants.indexOf(room.localName) === -1) {
        room.excluded = true;
        room.started = false;
        room.phase = "closed";
        emit();
        return;
      }
      room.excluded = false;
      room.seed = message.seed || room.seed;
      applyTimeline(message);
      room.names = message.participants || room.names;
      room.phase = "playing";
      room.started = true;
      room.ended = false;
      room.result = null;
      emit();
      return;
    }

    if (message.type === "restart") {
      room.seed = message.seed || room.seed;
      applyTimeline(message);
      room.phase = "playing";
      room.started = true;
      room.ended = false;
      room.result = null;
      room.remote = {};
      emit();
      return;
    }

    if (message.type === "end") {
      room.phase = "result";
      room.ended = true;
      room.result = message.result;
      emit();
      return;
    }

    if (message.type === "hit") {
      if (room.host && room.remote && room.remote[message.from]) {
        room.remote[message.from].kills = Math.max(Number(room.remote[message.from].kills) || 0, Number(message.kills) || 0);
      }
      if (message.target === id) { hitListeners.forEach(function (fn) { fn(message); }); }
      if (room.host && source) { broadcast(message, source.peer); }
      return;
    }

    if (message.type === "kill") {
      if (room.host && room.remote && room.remote[message.from]) {
        room.remote[message.from].kills = Math.max(Number(room.remote[message.from].kills) || 0, Number(message.kills) || 0);
      }
      killListeners.forEach(function (fn) { fn(message); });
      if (room.host && source) { broadcast(message, source.peer); }
      return;
    }

    if (message.type === "shot") {
      shotListeners.forEach(function (fn) { fn(message); });
      if (room.host && source) { broadcast(message, source.peer); }
    }
  }

  function acceptConnection(conn) {
    if (!conn) { return; }
    connections[conn.peer] = conn;
    conn.on("data", function (message) { handleMessage(message, conn); });
    conn.on("close", function () { dropPeer(conn.peer); });
    conn.on("error", function () { dropPeer(conn.peer); });
  }


  function startHostPeer(attempt) {
    if (!room) { return; }
    if (!window.Peer) { failRoom(PEER_MISSING); return; }
    var candidate;
    try {
      candidate = new window.Peer(room.code, peerOptions());
    } catch (error) {
      failRoom(PEER_MISSING);
      return;
    }
    peer = candidate;
    candidate.on("open", function () {
      if (!room) { return; }
      room.connected = true;
      room.peerId = room.code;
      startHeartbeat();
      emit();
    });
    candidate.on("connection", acceptConnection);
    candidate.on("error", function (error) {
      if (!room) { return; }
      var type = error && error.type ? error.type : "network";
      if (type === "unavailable-id" && attempt < HOST_ATTEMPTS) {
        try { candidate.destroy(); } catch (destroyError) {}
        room.code = randomCode();
        room.peerId = room.code;
        startHostPeer(attempt + 1);
        return;
      }
      if (type === "peer-unavailable") { return; }
      room.connected = false;
      room.error = "联机服务连接失败：" + type;
      emit();
    });
  }

  function startClientPeer() {
    if (!room) { return; }
    if (!window.Peer) { failRoom(PEER_MISSING); return; }
    var candidate = new window.Peer(undefined, peerOptions());
    peer = candidate;
    candidate.on("open", function () {
      if (!room) { return; }
      var conn = candidate.connect(room.code, { reliable: true });
      conn.on("open", function () {
        if (!room) { try { conn.close(); } catch (error) {} return; }
        acceptConnection(conn);
        room.lastHostSeen = Date.now();
        startHeartbeat();
        sendTo(conn, { type: "join", code: room.code, name: room.localName, protocol: PROTOCOL });
      });
    });
    candidate.on("error", function (error) {
      var type = error && error.type ? error.type : "network";
      if (type === "peer-unavailable") { failRoom("房间不存在或已关闭"); return; }
      if (type === "unavailable-id") { failRoom("联机服务繁忙，请稍后重试"); return; }
      if (type === "network" || type === "server-error" || type === "socket-error") { failRoom(PEER_MISSING); }
    });
  }

  function teardownQuick() {
    if (!quick) { return; }
    if (quick.timer) { clearTimeout(quick.timer); }
    if (quick.confirmTimer) { clearTimeout(quick.confirmTimer); }
    if (quick.probe) { try { quick.probe.destroy(); } catch (error) {} }
    if (quick.claimPeer) { try { quick.claimPeer.destroy(); } catch (error) {} }
    quick = null;
  }

  function failQuick(reason) {
    teardownQuick();
    if (!room) { return; }
    room.matching = false;
    room.phase = "closed";
    room.error = reason;
    room.closed = true;
    emit();
  }

  function claimNextSlot(index) {
    if (!room || !quick || quick.cancelled) { return; }
    if (index >= quick.slots.length) { failQuick("暂时没有可加入的房间，请稍后再试"); return; }
    var slotId = quick.slots[index];
    var candidate;
    try {
      candidate = new window.Peer(slotId, peerOptions());
    } catch (error) {
      failQuick(PEER_MISSING);
      return;
    }
    var claimed = false;
    quick.claimPeer = candidate;
    candidate.on("open", function () {
      if (!room) { return; }
      claimed = true;
      peer = candidate;
      room.code = slotId;
      room.peerId = slotId;
      room.host = true;
      room.quick = true;
      room.matching = false;
      room.phase = "lobby";
      room.connected = true;
      candidate.on("connection", acceptConnection);
      startHeartbeat();
      if (quick) { quick.claimPeer = null; quick = null; }
      emit();
    });
    candidate.on("error", function (error) {
      if (claimed) {
        if (room) { room.connected = false; emit(); }
        return;
      }
      try { candidate.destroy(); } catch (destroyError) {}
      if (error && error.type === "unavailable-id") { claimNextSlot(index + 1); return; }
      failQuick(PEER_MISSING);
    });
  }

  function retryQuickSlot() {
    var state = quick;
    var hit = state && state.joining;
    if (!state || !hit || !room) { return; }
    room.retrying = true;
    if (state.confirmTimer) { clearTimeout(state.confirmTimer); state.confirmTimer = 0; }
    try { hit.conn.close(); } catch (error) {}
    delete connections[hit.conn.peer];
    state.slots = state.slots.filter(function (slotId) { return slotId !== hit.slotId; });
    state.joining = null;
    if (state.probe) { try { state.probe.destroy(); } catch (error) {} state.probe = null; }
    stopHeartbeat();
    peer = null;
    room.code = "";
    room.peerId = "";
    room.names = [room.localName];
    room.matching = true;
    room.phase = "matching";
    room.closed = false;
    room.connected = false;
    room.error = "";
    room.retrying = false;
    emit();
    probeForRoom();
  }

  function probeForRoom() {
    if (!quick) { return; }
    if (!quick.slots.length) { failQuick("暂时没有可加入的房间，请稍后再试"); return; }
    var probe;
    try {
      probe = new window.Peer(undefined, peerOptions());
    } catch (error) {
      claimNextSlot(0);
      return;
    }
    quick.probe = probe;
    var settled = false;
    var failed = 0;

    function finish(hit) {
      if (settled) { return; }
      settled = true;
      if (quick && quick.timer) { clearTimeout(quick.timer); quick.timer = 0; }
      if (!room || (quick && quick.cancelled)) { return; }
      if (hit) {
        room.matching = false;
        room.phase = "lobby";
        room.code = hit.slotId;
        room.peerId = hit.slotId;
        acceptConnection(hit.conn);
        room.lastHostSeen = Date.now();
        startHeartbeat();
        sendTo(hit.conn, { type: "join", code: hit.slotId, name: room.localName, protocol: PROTOCOL });
        if (quick) {
          quick.probe = probe;
          quick.joining = hit;
          quick.confirmTimer = setTimeout(function () {
            if (quick && quick.joining === hit) { retryQuickSlot(); }
          }, 5000);
          if (quick.confirmTimer.unref) { quick.confirmTimer.unref(); }
        }
        emit();
        return;
      }
      try { probe.destroy(); } catch (error) {}
      if (quick) { quick.probe = null; }
      claimNextSlot(0);
    }

    if (quick) {
      quick.timer = setTimeout(function () { finish(null); }, PROBE_TIMEOUT);
      if (quick.timer.unref) { quick.timer.unref(); }
    }

    probe.on("open", function () {
      if (!quick || !room) { return; }
      peer = probe;
      quick.slots.forEach(function (slotId) {
        var conn = probe.connect(slotId, { reliable: true });
        conn.on("open", function () {
          if (settled) { try { conn.close(); } catch (error) {} return; }
          finish({ slotId: slotId, conn: conn });
        });
        conn.on("error", function () {});
      });
    });

    probe.on("error", function (error) {
      if (!error) { return; }
      if (error.type === "peer-unavailable") {
        failed += 1;
        if (quick && failed >= quick.slots.length) { finish(null); }
        return;
      }
      if (error.type === "network" || error.type === "server-error" || error.type === "socket-error") {
        finish(null);
      }
    });
  }

  TankGame.Multiplayer = {
    onChange: function (fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (item) { return item !== fn; }); }; },
    onHit: function (fn) { hitListeners.push(fn); },
    onKill: function (fn) { killListeners.push(fn); },
    onShot: function (fn) { shotListeners.push(fn); },

    getSelfId: function () { return id; },
    isMatching: function () { return Boolean(room && room.matching); },

    host: function (name) {
      resetSession();
      createRoom({
        code: randomCode(),
        host: true,
        localName: name,
        names: [name],
        maxPlayers: MAX_PLAYERS
      });
      room.peerId = room.code;
      room.peerNames[id] = name;
      startHostPeer(0);
      emit();
      return room;
    },

    join: function (code, name) {
      resetSession();
      createRoom({
        code: String(code),
        peerId: String(code),
        host: false,
        localName: name,
        names: [name],
        maxPlayers: MAX_PLAYERS
      });
      startClientPeer();
      emit();
      return room;
    },

    quickMatch: function (name) {
      if (quick || !window.Peer) {
        if (!window.Peer) {
          resetSession();
          createRoom({ localName: name, names: [name], quick: true, phase: "closed", closed: true, error: PEER_MISSING });
          emit();
        }
        return room;
      }
      var slots = [];
      for (var i = 0; i < QUICK_SLOTS; i += 1) { slots.push(QUICK_PREFIX + i); }
      resetSession();
      createRoom({
        code: "",
        host: false,
        localName: name,
        names: [name],
        maxPlayers: QUICK_MAX_PLAYERS,
        quick: true,
        matching: true,
        phase: "matching"
      });
      quick = { cancelled: false, slots: slots, timer: 0, probe: null, claimPeer: null, joining: null, confirmTimer: 0 };
      emit();
      probeForRoom();
      return room;
    },

    cancelQuickMatch: function () {
      if (!quick) { return false; }
      quick.cancelled = true;
      teardownQuick();
      shutdownPeer();
      if (room && room.matching) { room = null; }
      emit();
      return true;
    },

    start: function () {
      var participants;
      if (!room || !room.host) { return false; }
      participants = room.phase === "lobby" && room.readyNames.length
        ? room.names.filter(function (name) { return room.readyNames.indexOf(name) !== -1; })
        : room.names.slice();
      if (participants.length < 2) { return false; }
      room.names = participants;
      Object.keys(room.peerNames).forEach(function (key) {
        if (participants.indexOf(room.peerNames[key]) === -1) { delete room.peerNames[key]; }
      });
      room.readyNames = [];
      room.phase = "playing";
      room.started = true;
      room.ended = false;
      room.result = null;
      room.expectedPlayers = room.names.length;
      room.round = room.round || 1;
      room.roundStartedAt = Date.now();
      room.combatStartedAt = room.roundStartedAt + 3000;
      room.remote = {};
      room.localKills = 0;
      room.localState = null;
      broadcast(timelineMessage("start"));
      emit();
      return true;
    },

    restart: function () {
      if (!room || !room.host) { return false; }
      room.seed = nextSeed();
      room.round = (room.round || 1) + 1;
      room.phase = "playing";
      room.started = true;
      room.ended = false;
      room.result = null;
      room.expectedPlayers = room.names.length;
      room.roundStartedAt = Date.now();
      room.combatStartedAt = room.roundStartedAt + 3000;
      room.remote = {};
      room.localKills = 0;
      room.localState = null;
      broadcast(timelineMessage("restart"));
      emit();
      return true;
    },

    continueGame: function () {
      if (!room || !room.result) { return false; }
      addReadyName(room.localName);
      room.phase = "lobby";
      room.started = false;
      room.ended = false;
      if (room.host) { broadcast(lobbyMessage()); } else { broadcast({ type: "continue", code: room.code, name: room.localName }); }
      emit();
      return true;
    },

    leave: function () {
      if (!room) { return; }
      if (!room.host) { broadcast({ type: "leave", code: room.code, name: room.localName }); }
      teardownQuick();
      room = null;
      shutdownPeer();
      emit();
    },

    close: function () {
      if (!room || !room.host) { return false; }
      broadcast({ type: "room-closed", code: room.code });
      teardownQuick();
      room = null;
      shutdownPeer();
      emit();
      return true;
    },

    clear: function () {
      teardownQuick();
      room = null;
      shutdownPeer();
      emit();
    },

    checkEnd: function () { evaluateEnd(); },
    getRoom: function () { return room; },
    now: function () { return Date.now() + Number(room && room.clockOffsetMs || 0); },

    sendHit: function (targetId, targetName, damage, killerId, killerName, kills) {
      if (!room || !room.started || room.ended) { return; }
      broadcast({
        type: "hit",
        code: room.code,
        target: targetId,
        targetName: targetName || "",
        damage: damage,
        killerId: killerId || id,
        killer: killerName || "",
        kills: Number(kills) || 0
      });
    },

    sendKill: function (killerId, killerName, kills) {
      if (!room || !room.started) { return; }
      broadcast({ type: "kill", code: room.code, killerId: killerId || id, killer: killerName || "", kills: Number(kills) || 0 });
    },

    sendShot: function (x, y, angle, damage, speed) {
      if (!room || !room.started) { return; }
      broadcast({ type: "shot", code: room.code, x: x, y: y, angle: angle, damage: damage, speed: speed });
    },

    publish: function (player) {
      if (!room || !room.started) { return; }
      room.localKills = Number(player.onlineKills || 0);
      room.localState = {
        name: player.name,
        alive: player.alive,
        ghost: Boolean(player.ghost),
        deathAt: Number(player.deathAt) || 0,
        survivalTime: Number(player.survivalTime) || 0,
        kills: room.localKills
      };
      if (room.host) { evaluateEnd(); }
      if (room.ended) { return; }
      broadcast({
        type: "state",
        code: room.code,
        player: {
          x: player.x,
          y: player.y,
          bodyAngle: player.bodyAngle,
          turretAngle: player.turretAngle,
          health: player.health,
          maxHealth: player.maxHealth,
          radius: player.radius,
          visualScale: player.visualScale,
          name: player.name,
          alive: player.alive,
          ghost: Boolean(player.ghost),
          deathAt: Number(player.deathAt) || 0,
          survivalTime: Number(player.survivalTime) || 0,
          kills: Number(player.onlineKills) || 0,
          team: "player",
          remoteId: id
        }
      });
    }
  };
}());
