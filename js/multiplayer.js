(function () {
  "use strict";
  var TankGame = window.TankGame = window.TankGame || {};
  var id = Math.random().toString(36).slice(2), room = null, listeners = [], hitListeners = [], shotListeners = [], peer = null, connections = {}, fallback = null;
  function emit() { listeners.forEach(function (fn) { fn(room); }); }
  function sendFallback(message) { if (fallback) { fallback.postMessage(Object.assign({ from: id }, message)); } }
  function broadcast(message) { Object.keys(connections).forEach(function (key) { try { connections[key].send(message); } catch (error) {} }); sendFallback(message); }
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
      } else if (message.type === "state") { room.remote = room.remote || {}; room.remote[message.from] = message.player; if (room.host) { broadcast(message); } emit(); }
      else if (message.type === "start") { room.seed = message.seed || room.seed; room.started = true; emit(); }
      else if (message.type === "hit") { if (message.target === room.localName) { hitListeners.forEach(function (fn) { fn(message.damage); }); } if (room.host) { broadcast(message); } }
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
      if (message.type === "start") { room.seed = message.seed || room.seed; room.started = true; emit(); }
      if (message.type === "state") { room.remote = room.remote || {}; room.remote[message.from] = message.player; emit(); }
      if (message.type === "hit" && message.target === room.localName) { hitListeners.forEach(function (fn) { fn(message.damage); }); }
      if (message.type === "shot") { shotListeners.forEach(function (fn) { fn(message); }); }
    };
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
    onShot: function (fn) { shotListeners.push(fn); },
    host: function (name) { room = { code: String(Math.floor(100000 + Math.random() * 900000)), host: true, index: 0, localId: id, localName: name, names: [name], seed: (Date.now() ^ Math.floor(Math.random() * 0xFFFFFFFF)) >>> 0, started: false, remote: {} }; setupPeer(); emit(); return room; },
    join: function (code, name) { room = { code: String(code), host: false, index: 0, localId: id, localName: name, names: [name], seed: 0, started: false, remote: {} }; setupPeer(); emit(); return room; },
    start: function () { if (!room || !room.host || room.names.length < 2) { return false; } room.started = true; broadcast({ type: "start", code: room.code, seed: room.seed }); emit(); return true; },
    getRoom: function () { return room; },
    sendHit: function (target, damage) { if (!room || !room.started) { return; } broadcast({ type: "hit", code: room.code, target: target, damage: damage, from: id }); },
    sendShot: function (x, y, angle, damage) { if (!room || !room.started) { return; } broadcast({ type: "shot", code: room.code, from: id, x: x, y: y, angle: angle, damage: damage }); },
    publish: function (player) { if (!room || !room.started) { return; } var message = { type: "state", code: room.code, from: id, player: { x: player.x, y: player.y, bodyAngle: player.bodyAngle, turretAngle: player.turretAngle, health: player.health, maxHealth: player.maxHealth, radius: player.radius, visualScale: player.visualScale, name: player.name, alive: player.alive, team: "player", remoteId: id } }; broadcast(message); }
  };
}());
