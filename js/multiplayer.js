(function () {
  "use strict";
  var TankGame = window.TankGame = window.TankGame || {};
  var id = Math.random().toString(36).slice(2), room = null, listeners = [], hitListeners = [], shotListeners = [], killListeners = [], peer = null, connections = {}, fallback = null;
  function emit() { listeners.forEach(function (fn) { fn(room); }); }
  function sendFallback(message) { if (fallback) { fallback.postMessage(Object.assign({ from: id }, message)); } }
  function broadcast(message) { Object.keys(connections).forEach(function (key) { try { connections[key].send(message); } catch (error) {} }); sendFallback(message); }
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
    return { type: type, code: room.code, seed: room.seed, round: room.round, roundStartedAt: room.roundStartedAt, combatStartedAt: room.combatStartedAt, expectedPlayers: room.expectedPlayers, hostNow: Date.now() };
  }
  function acceptConnection(conn) {
    connections[conn.peer] = conn;
    conn.on("data", function (message) {
      if (!room || !message || message.code !== room.code) { return; }
      if (message.type === "join" && room.host) {
        if (room.names.indexOf(message.name) === -1 && room.names.length < 10) { room.names.push(message.name); }
        broadcast({ type: "lobby", code: room.code, names: room.names, seed: room.seed }); emit();
      } else if (message.type === "lobby") {
        room.names = message.names || room.names;
        room.seed = message.seed || room.seed;
        room.index = Math.max(0, room.names.indexOf(room.localName));
        emit();
      } else if (message.type === "state") { message.player.remoteId = message.from; message.player.hostile = true; message.player.team = "player"; room.remote = room.remote || {}; room.remote[message.from] = message.player; if (room.host) { broadcast(message); evaluateEnd(); } emit(); }
      else if (message.type === "start") { room.seed = message.seed || room.seed; applyTimeline(message); room.started = true; room.ended = false; emit(); }
      else if (message.type === "restart") { room.seed = message.seed || room.seed; applyTimeline(message); room.started = true; room.ended = false; room.result = null; room.remote = {}; emit(); }
      else if (message.type === "end") { room.ended = true; room.result = message.result; emit(); }
      else if (message.type === "hit") { if (room.host && room.remote && room.remote[message.from]) { room.remote[message.from].kills = Math.max(Number(room.remote[message.from].kills) || 0, Number(message.kills) || 0); } if (message.target === room.localName) { hitListeners.forEach(function (fn) { fn(message); }); } if (room.host) { broadcast(message); } }
      else if (message.type === "kill") { if (room.host && room.remote && room.remote[message.from]) { room.remote[message.from].kills = Math.max(Number(room.remote[message.from].kills) || 0, Number(message.kills) || 0); } killListeners.forEach(function (fn) { fn(message); }); if (room.host) { broadcast(message); } }
      else if (message.type === "shot") { shotListeners.forEach(function (fn) { fn(message); }); if (room.host) { broadcast(message); } }
    });
  }
  function ensureFallback() {
    if (fallback || !window.BroadcastChannel) { return; }
    fallback = new BroadcastChannel("xpz-tank-local-rooms");
    fallback.onmessage = function (event) {
      var message = event.data || {};
      if (message.from === id || !room || message.code !== room.code) { return; }
      if (message.type === "lobby") { room.names = message.names || room.names; room.seed = message.seed || room.seed; room.index = Math.max(0, room.names.indexOf(room.localName)); emit(); }
      if (message.type === "start") { room.seed = message.seed || room.seed; applyTimeline(message); room.started = true; room.ended = false; emit(); }
      if (message.type === "state") { message.player.remoteId = message.from; message.player.hostile = true; message.player.team = "player"; room.remote = room.remote || {}; room.remote[message.from] = message.player; if (room.host) { evaluateEnd(); } emit(); }
      if (message.type === "restart") { room.seed = message.seed || room.seed; applyTimeline(message); room.started = true; room.ended = false; room.result = null; room.remote = {}; emit(); }
      if (message.type === "end") { room.ended = true; room.result = message.result; emit(); }
      if (message.type === "hit") { if (room.host && room.remote && room.remote[message.from]) { room.remote[message.from].kills = Math.max(Number(room.remote[message.from].kills) || 0, Number(message.kills) || 0); } if (message.target === room.localName) { hitListeners.forEach(function (fn) { fn(message); }); } }
      if (message.type === "kill") { if (room.host && room.remote && room.remote[message.from]) { room.remote[message.from].kills = Math.max(Number(room.remote[message.from].kills) || 0, Number(message.kills) || 0); } killListeners.forEach(function (fn) { fn(message); }); }
      if (message.type === "shot") { shotListeners.forEach(function (fn) { fn(message); }); }
    };
  }
  function evaluateEnd() {
    var local = room.localState || { name: room.localName, alive: true, ghost: false, survivalTime: 0, kills: room.localKills || 0 };
    var all = [{ name: local.name || room.localName, alive: local.alive !== false, ghost: Boolean(local.ghost), deathAt: Number(local.deathAt) || 0, survivalTime: Number(local.survivalTime) || 0, kills: Number(local.kills) || 0 }];
    Object.keys(room.remote || {}).forEach(function (key) {
      var player = room.remote[key];
      if (player) { all.push({ name: player.name || key, alive: player.alive !== false, ghost: Boolean(player.ghost), deathAt: Number(player.deathAt) || 0, survivalTime: Number(player.survivalTime) || 0, kills: Number(player.kills) || 0 }); }
    });
    if (!room.host || room.ended || all.length < Math.max(2, Number(room.expectedPlayers || room.names.length))) { return; }
    var active = all.filter(function (player) { return player.alive && !player.ghost; });
    if (active.length !== 1) { return; }
    var endedAt = Date.now();
    var elapsedAtEnd = Math.max(0, (endedAt - Number(room.combatStartedAt || endedAt)) / 1000);
    all.forEach(function (player) {
      player.survivalTime = player.deathAt ? Math.max(0, (player.deathAt - Number(room.combatStartedAt || player.deathAt)) / 1000) : (player.alive && !player.ghost ? elapsedAtEnd : player.survivalTime);
    });
    all.sort(function (a, b) { return (b.survivalTime - a.survivalTime) || (b.kills - a.kills); });
    room.ended = true;
    room.endedAt = endedAt;
    room.result = { winner: active[0].name, endedAt: endedAt, elapsed: elapsedAtEnd, standings: all };
    broadcast({ type: "end", code: room.code, result: room.result });
    emit();
  }
  function setupPeer() {
    if (!window.Peer || !room) { ensureFallback(); return; }
    try {
      peer = new window.Peer(room.host ? room.code : undefined);
      peer.on("open", function () { room.connected = true; emit(); if (!room.host) { var conn = peer.connect(room.code, { reliable: true }); conn.on("open", function () { acceptConnection(conn); conn.send({ type: "join", code: room.code, name: room.localName }); }); } });
      peer.on("connection", acceptConnection);
      peer.on("error", function () { ensureFallback(); emit(); });
    } catch (error) { ensureFallback(); }
  }
  TankGame.Multiplayer = {
    onChange: function (fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (item) { return item !== fn; }); }; },
    onHit: function (fn) { hitListeners.push(fn); },
    onKill: function (fn) { killListeners.push(fn); },
    onShot: function (fn) { shotListeners.push(fn); },
    host: function (name) { room = { code: String(Math.floor(100000 + Math.random() * 900000)), host: true, index: 0, localId: id, localName: name, names: [name], seed: (Date.now() ^ Math.floor(Math.random() * 0xFFFFFFFF)) >>> 0, round: 1, started: false, ended: false, clockOffsetMs: 0, remote: {}, localKills: 0 }; setupPeer(); emit(); return room; },
    join: function (code, name) { room = { code: String(code), host: false, index: 0, localId: id, localName: name, names: [name], seed: 0, round: 0, started: false, ended: false, clockOffsetMs: 0, remote: {}, localKills: 0 }; setupPeer(); emit(); return room; },
    start: function () { if (!room || !room.host || room.names.length < 2) { return false; } room.started = true; room.ended = false; room.result = null; room.expectedPlayers = room.names.length; room.round = room.round || 1; room.roundStartedAt = Date.now(); room.combatStartedAt = room.roundStartedAt + 3000; broadcast(timelineMessage("start")); emit(); return true; },
    restart: function () { if (!room || !room.host) { return false; } room.seed = (Date.now() ^ Math.floor(Math.random() * 0xFFFFFFFF)) >>> 0; room.round = (room.round || 1) + 1; room.started = true; room.ended = false; room.result = null; room.expectedPlayers = room.names.length; room.roundStartedAt = Date.now(); room.combatStartedAt = room.roundStartedAt + 3000; room.remote = {}; room.localKills = 0; room.localState = null; broadcast(timelineMessage("restart")); emit(); return true; },
    checkEnd: function () { evaluateEnd(); },
    getRoom: function () { return room; },
    now: function () { return Date.now() + Number(room && room.clockOffsetMs || 0); },
    sendHit: function (target, damage, killer, kills) { if (!room || !room.started || room.ended) { return; } broadcast({ type: "hit", code: room.code, target: target, damage: damage, killer: killer || "", kills: Number(kills) || 0, from: id }); },
    sendKill: function (killer, kills) { if (!room || !room.started) { return; } broadcast({ type: "kill", code: room.code, killer: killer, kills: Number(kills) || 0, from: id }); },
    sendShot: function (x, y, angle, damage) { if (!room || !room.started) { return; } broadcast({ type: "shot", code: room.code, from: id, x: x, y: y, angle: angle, damage: damage }); },
    publish: function (player) { if (!room || !room.started) { return; } room.localKills = Number(player.onlineKills || 0); room.localState = { name: player.name, alive: player.alive, ghost: Boolean(player.ghost), deathAt: Number(player.deathAt) || 0, survivalTime: Number(player.survivalTime) || 0, kills: room.localKills }; if (room.host) { evaluateEnd(); } if (room.ended) { return; } var message = { type: "state", code: room.code, from: id, player: { x: player.x, y: player.y, bodyAngle: player.bodyAngle, turretAngle: player.turretAngle, health: player.health, maxHealth: player.maxHealth, radius: player.radius, visualScale: player.visualScale, name: player.name, alive: player.alive, ghost: Boolean(player.ghost), deathAt: Number(player.deathAt) || 0, survivalTime: Number(player.survivalTime) || 0, kills: Number(player.onlineKills) || 0, team: "player", remoteId: id } }; broadcast(message); }
  };
}());
