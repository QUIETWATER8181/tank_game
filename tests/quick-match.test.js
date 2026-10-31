"use strict";

var assert = require("assert");
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var root = path.resolve(__dirname, "..");

function FakeNetwork() {
  this.peers = {};
  this.seq = 0;
}

function FakeConn(remotePeerId) {
  this.peer = remotePeerId;
  this.handlers = {};
  this.remote = null;
  this.destroyed = false;
}

FakeConn.prototype.on = function (event, fn) {
  (this.handlers[event] = this.handlers[event] || []).push(fn);
  return this;
};

FakeConn.prototype.emit = function (event, payload) {
  (this.handlers[event] || []).slice().forEach(function (fn) { fn(payload); });
};

FakeConn.prototype.send = function (data) {
  if (this.destroyed) { return; }
  var copy = JSON.parse(JSON.stringify(data));
  var remote = this.remote;
  setImmediate(function () {
    if (remote && !remote.destroyed) { remote.emit("data", copy); }
  });
};

FakeConn.prototype.close = function () {
  if (this.destroyed) { return; }
  this.destroyed = true;
  this.emit("close");
  if (this.remote && !this.remote.destroyed) { this.remote.emit("close"); }
};

function makePair(aId, bId) {
  var a = new FakeConn(bId);
  var b = new FakeConn(aId);
  a.remote = b;
  b.remote = a;
  return [a, b];
}

function FakePeer(net, id) {
  var self = this;
  this.net = net;
  this.id = id || "anon" + (++net.seq);
  this.handlers = {};
  this.connections = {};
  this.destroyed = false;
  this.conflict = Boolean(net.peers[this.id]);
  if (!this.conflict) { net.peers[this.id] = this; }
  net.lastPeer = this;
  setImmediate(function () {
    if (self.destroyed) { return; }
    if (self.conflict) { self.emit("error", { type: "unavailable-id" }); return; }
    self.emit("open", self.id);
  });
}

FakePeer.prototype.on = function (event, fn) {
  (this.handlers[event] = this.handlers[event] || []).push(fn);
  return this;
};

FakePeer.prototype.emit = function (event, payload) {
  (this.handlers[event] || []).slice().forEach(function (fn) { fn(payload); });
};

FakePeer.prototype.connect = function (peerId) {
  var self = this;
  var target = this.net.peers[peerId];
  var pair = makePair(this.id, peerId);
  var local = pair[0];
  var remote = pair[1];
  this.connections[peerId] = local;
  setImmediate(function () {
    if (self.destroyed) { return; }
    if (!target || target.destroyed) {
      self.emit("error", { type: "peer-unavailable", message: "Could not connect to peer " + peerId });
      return;
    }
    target.connections[self.id] = remote;
    target.emit("connection", remote);
    local.emit("open");
    remote.emit("open");
  });
  return local;
};

FakePeer.prototype.destroy = function () {
  var self = this;
  if (this.destroyed) { return; }
  this.destroyed = true;
  if (this.net.peers[this.id] === this) { delete this.net.peers[this.id]; }
  Object.keys(this.connections).forEach(function (key) {
    self.connections[key].close();
  });
  this.connections = {};
};

function createMultiplayer(net, options) {
  var opts = options || {};
  var browser = { TankGame: {} };
  if (!opts.noPeer) {
    browser.Peer = function (id) { return new FakePeer(net, id); };
  }
  var context = {
    console: console,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    clearInterval: clearInterval,
    setImmediate: setImmediate,
    window: browser
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "js", "config.js"), "utf8"), context);
  vm.runInContext(fs.readFileSync(path.join(root, "js", "multiplayer.js"), "utf8"), context);
  return context.window.TankGame.Multiplayer;
}

function sleep(ms) { return new Promise(function (resolve) { setTimeout(resolve, ms); }); }

function playerIdByName(room, name) {
  var keys = Object.keys(room.remote || {});
  for (var i = 0; i < keys.length; i += 1) {
    if (room.remote[keys[i]].name === name) { return keys[i]; }
  }
  return "";
}

(async function () {
  // 1. 没有在线房间时，快速匹配应当自己开一间快速房。
  var net = new FakeNetwork();
  var host = createMultiplayer(net);
  var hostRoom = host.quickMatch("阿水");
  await sleep(80);
  assert.strictEqual(hostRoom.host, true, "no room available means we host one");
  assert.strictEqual(hostRoom.code, "xpz-tank-qp-0", "the first free quick slot is claimed");
  assert.strictEqual(hostRoom.quick, true);
  assert.strictEqual(hostRoom.matching, false);
  assert.strictEqual(host.isMatching(), false);

  // 2. 第二个陌生人快速匹配时应加入已有房间，而不是再开一间。
  var guest = createMultiplayer(net);
  var guestRoom = guest.quickMatch("徐同学");
  await sleep(80);
  assert.strictEqual(guestRoom.host, false, "the guest joins the existing quick room");
  assert.strictEqual(guestRoom.code, "xpz-tank-qp-0");
  assert.strictEqual(host.getRoom().names.slice().sort().join(","), ["徐同学", "阿水"].sort().join(","));

  // 3. 重名必须被拒绝，否则命中会打错人。
  var dupe = createMultiplayer(net);
  var dupeRoom = dupe.quickMatch("阿水");
  await sleep(80);
  assert.strictEqual(dupeRoom.closed, true, "duplicate nickname is rejected");
  assert.ok(/昵称已被占用/.test(dupeRoom.error), "duplicate nickname reason is reported: " + dupeRoom.error);
  assert.strictEqual(host.getRoom().names.length, 2, "rejected player never enters the roster");

  // 4. 第三名玩家加入，凑满三人验证中继。
  var third = createMultiplayer(net);
  var thirdRoom = third.quickMatch("路人");
  await sleep(80);
  assert.strictEqual(thirdRoom.host, false);
  assert.strictEqual(host.getRoom().names.length, 3);

  // 5. 房主开局后，所有客户端应收到同一份时间线。
  assert.strictEqual(host.start(), true);
  await sleep(60);
  assert.strictEqual(guestRoom.started, true, "guest starts with the host");
  assert.strictEqual(thirdRoom.started, true, "third player starts with the host");
  assert.strictEqual(guestRoom.combatStartedAt, hostRoom.combatStartedAt);
  assert.strictEqual(thirdRoom.combatStartedAt, hostRoom.combatStartedAt);

  // 6. 三人都上报状态后，命中应按玩家 ID 精确路由到被击中的那一个。
  host.publish({ name: "阿水", alive: true, ghost: false, survivalTime: 5, onlineKills: 0, x: 1, y: 1, health: 100, maxHealth: 100 });
  guest.publish({ name: "徐同学", alive: true, ghost: false, survivalTime: 5, onlineKills: 0, x: 2, y: 2, health: 100, maxHealth: 100 });
  third.publish({ name: "路人", alive: true, ghost: false, survivalTime: 5, onlineKills: 0, x: 3, y: 3, health: 100, maxHealth: 100 });
  await sleep(80);
  var thirdId = playerIdByName(guestRoom, "路人");
  assert.ok(thirdId, "guest sees the third player snapshot");
  var hits = [];
  third.onHit(function (message) { hits.push(message); });
  var guestSelfId = guest.getSelfId();
  guest.sendHit(thirdId, "路人", 25, guestSelfId, "徐同学", 1);
  await sleep(60);
  assert.strictEqual(hits.length, 1, "the relayed hit reaches exactly one player");
  assert.strictEqual(hits[0].target, thirdId);
  assert.strictEqual(hits[0].damage, 25);
  assert.strictEqual(hits[0].killerId, guestSelfId);

  // 7. 客人掉线后，房主应移除该成员，并在只剩一人时结算。
  var guestConnId = Object.keys(host.getRoom().playerByConn).filter(function (key) {
    return host.getRoom().playerByConn[key] === guestSelfId;
  })[0];
  assert.ok(guestConnId, "host maps the data connection to a player id");
  net.peers[guestConnId].destroy();
  await sleep(60);
  assert.strictEqual(host.getRoom().names.join(","), "阿水,路人", "disconnected player leaves the roster");
  assert.strictEqual(host.getRoom().ended, false, "two players are still fighting");

  var thirdConnId = Object.keys(host.getRoom().playerByConn).filter(function (key) {
    return host.getRoom().playerByConn[key] === third.getSelfId();
  })[0];
  net.peers[thirdConnId].destroy();
  await sleep(60);
  assert.strictEqual(host.getRoom().ended, true, "the last player standing ends the round");
  assert.strictEqual(host.getRoom().result.winner, "阿水");

  // 8. 加入不存在的房间号应立刻报错，而不是一直卡在连接中。
  var lonely = createMultiplayer(net);
  var lonelyRoom = lonely.join("999999", "孤独");
  await sleep(60);
  assert.strictEqual(lonelyRoom.closed, true);
  assert.ok(/房间不存在/.test(lonelyRoom.error), "missing room reports an error: " + lonelyRoom.error);

  // 9. 取消匹配后房间应被清空，不留下幽灵状态。
  var canceller = createMultiplayer(net);
  canceller.quickMatch("取消者");
  assert.strictEqual(canceller.isMatching(), true);
  assert.strictEqual(canceller.cancelQuickMatch(), true);
  assert.strictEqual(canceller.isMatching(), false);
  assert.strictEqual(canceller.getRoom(), null);

  // 10. 满员房不能把后来者卡死：应自动换到下一个空槽另开一间。
  var net2 = new FakeNetwork();
  var fullHost = createMultiplayer(net2);
  fullHost.quickMatch("房主");
  await sleep(80);
  for (var index = 0; index < 3; index += 1) {
    var filler = createMultiplayer(net2);
    filler.quickMatch("路人" + index);
    await sleep(80);
  }
  assert.strictEqual(fullHost.getRoom().names.length, 4, "quick room caps at four players");
  var overflow = createMultiplayer(net2);
  var overflowRoom = overflow.quickMatch("第五人");
  await sleep(400);
  assert.strictEqual(overflowRoom.closed, false, "a full room must not trap newcomers");
  assert.strictEqual(overflowRoom.host, true, "the newcomer opens its own quick room instead");
  assert.strictEqual(overflowRoom.code, "xpz-tank-qp-1", "the next free slot is claimed");

  // 11. PeerJS 加载失败时必须明确报错，绝不能伪装成可用房间（否则会给一个别人连不进的房间号）。
  var offline = createMultiplayer(new FakeNetwork(), { noPeer: true });
  var offlineHost = offline.host("断网甲");
  assert.strictEqual(offlineHost.closed, true, "host must not fake a room without PeerJS");
  assert.strictEqual(offlineHost.connected, false);
  assert.ok(/加载失败/.test(offlineHost.error), "host should explain why it failed");
  var offlineJoin = offline.join("123456", "断网乙");
  assert.strictEqual(offlineJoin.closed, true, "join must not fake a room without PeerJS");
  assert.ok(/加载失败/.test(offlineJoin.error));
  var offlineQuick = offline.quickMatch("断网丙");
  assert.strictEqual(offlineQuick.closed, true, "quick match must not fake a room without PeerJS");
  assert.strictEqual(offline.isMatching(), false);

  console.log("quick match and lobby tests passed");
}()).catch(function (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
