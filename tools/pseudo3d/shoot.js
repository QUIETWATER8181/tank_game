// 无头 Chrome 截图 + 数值自检工具（零依赖，走 CDP over WebSocket）
//
//   node tools/pseudo3d/shoot.js --mode=iso --out=tools/pseudo3d/shots/iso.png
//   node tools/pseudo3d/shoot.js --mode=pitch --cam=6300,1890 --wait=4000
//
// 它会：起一个本地静态服务（file:// 会让 canvas 变脏，getImageData 会抛安全错误）
//      → 起无头 Chrome → 打开原型 → 等若干帧 → 读 window.__pseudo3d.getStats()
//      → 截图存盘 → 打印统计 JSON。
"use strict";

var http = require("http");
var fs = require("fs");
var path = require("path");
var os = require("os");
var { spawn } = require("child_process");

var ROOT = path.resolve(__dirname, "..", "..");
var CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe"
];

var MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".mp4": "video/mp4"
};

function parseArgs(argv) {
  var args = {};
  argv.forEach(function (arg) {
    if (arg.indexOf("--") !== 0) { return; }
    var index = arg.indexOf("=");
    if (index === -1) { args[arg.slice(2)] = true; }
    else { args[arg.slice(2, index)] = arg.slice(index + 1); }
  });
  return args;
}

function startServer(port) {
  return new Promise(function (resolve, reject) {
    var server = http.createServer(function (request, response) {
      var urlPath = decodeURIComponent(request.url.split("?")[0]);
      var filePath = path.join(ROOT, urlPath);
      if (filePath.indexOf(ROOT) !== 0) { response.writeHead(403); response.end(); return; }
      if (urlPath === "/") { filePath = path.join(ROOT, "index.html"); }
      fs.readFile(filePath, function (error, data) {
        if (error) { response.writeHead(404); response.end("not found: " + urlPath); return; }
        response.writeHead(200, { "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
        response.end(data);
      });
    });
    server.on("error", reject);
    server.listen(port, "127.0.0.1", function () { resolve(server); });
  });
}

function findChrome() {
  for (var index = 0; index < CHROME_CANDIDATES.length; index += 1) {
    if (fs.existsSync(CHROME_CANDIDATES[index])) { return CHROME_CANDIDATES[index]; }
  }
  throw new Error("chrome/edge not found");
}

function delay(ms) {
  return new Promise(function (resolve) { setTimeout(resolve, ms); });
}

async function waitForDevtools(port, timeoutMs) {
  var started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      var response = await fetch("http://127.0.0.1:" + port + "/json/list");
      var targets = await response.json();
      var page = targets.filter(function (target) { return target.type === "page"; })[0];
      if (page && page.webSocketDebuggerUrl) { return page; }
    } catch (error) { /* chrome not ready yet */ }
    await delay(120);
  }
  throw new Error("devtools did not start");
}

function createClient(socket) {
  var nextId = 1;
  var pending = new Map();
  var events = [];
  socket.addEventListener("message", function (event) {
    var message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      var entry = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) { entry.reject(new Error(message.error.message)); }
      else { entry.resolve(message.result); }
      return;
    }
    if (message.method) { events.push(message); }
  });
  return {
    send: function (method, params) {
      var id = nextId;
      nextId += 1;
      return new Promise(function (resolve, reject) {
        pending.set(id, { resolve: resolve, reject: reject });
        socket.send(JSON.stringify({ id: id, method: method, params: params || {} }));
      });
    },
    events: events
  };
}

async function evaluate(client, expression) {
  var result = await client.send("Runtime.evaluate", {
    expression: expression,
    returnByValue: true,
    awaitPromise: true
  });
  if (result.exceptionDetails) {
    throw new Error("page error: " + JSON.stringify(result.exceptionDetails));
  }
  return result.result.value;
}

async function main() {
  var args = parseArgs(process.argv.slice(2));
  var port = Number(args.port || 8123);
  var debugPort = Number(args.debugPort || 9333);
  var mode = args.mode || "iso";
  var waitMs = Number(args.wait || 3500);
  var out = path.resolve(ROOT, args.out || ("tools/pseudo3d/shots/" + mode + ".png"));
  var extraQuery = args.query ? "&" + args.query : "";
  var camQuery = args.cam ? "&cam=" + args.cam : "";
  var url = args.page
    ? "http://127.0.0.1:" + port + "/" + args.page + (args.query ? "?" + args.query : "")
    : "http://127.0.0.1:" + port + "/tools/pseudo3d/prototype.html?mode=" + mode +
      "&shot=1" + camQuery + extraQuery;

  var server = await startServer(port);
  var profile = fs.mkdtempSync(path.join(os.tmpdir(), "pseudo3d-chrome-"));
  var chrome = spawn(findChrome(), [
    "--headless=new",
    "--remote-debugging-port=" + debugPort,
    "--user-data-dir=" + profile,
    "--window-size=1440,900",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-extensions",
    "--force-device-scale-factor=1",
    "about:blank"
  ], { stdio: "ignore" });

  var client = null;
  var consoleErrors = [];
  try {
    var page = await waitForDevtools(debugPort, 15000);
    var socket = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(function (resolve, reject) {
      socket.addEventListener("open", resolve);
      socket.addEventListener("error", reject);
    });
    client = createClient(socket);
    await client.send("Runtime.enable");
    await client.send("Page.enable");
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: 1440, height: 900, deviceScaleFactor: 1, mobile: false
    });
    await client.send("Page.navigate", { url: url });
    await delay(waitMs);

    var ready = await evaluate(client, "Boolean(window.__pseudo3d && window.__pseudo3d.ready)");
    if (!ready) { throw new Error("prototype never became ready: " + url); }

    var stats = await evaluate(client, "window.__pseudo3d.getStats()");
    var state = await evaluate(client, "window.__pseudo3d.getState()");
    var extra = null;
    if (args.eval) { extra = await evaluate(client, args.eval); }

    var screenshot = await client.send("Page.captureScreenshot", { format: "png", fromSurface: true });
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, Buffer.from(screenshot.data, "base64"));

    consoleErrors = client.events
      .filter(function (event) { return event.method === "Runtime.exceptionThrown" || event.method === "Runtime.consoleAPICalled" && event.params.type === "error"; })
      .map(function (event) {
        if (event.method === "Runtime.exceptionThrown") {
          return event.params.exceptionDetails.exception ? event.params.exceptionDetails.exception.description : event.params.exceptionDetails.text;
        }
        return (event.params.args || []).map(function (arg) { return arg.value || arg.description; }).join(" ");
      });

    console.log(JSON.stringify({
      url: url,
      out: out,
      state: state,
      stats: stats,
      extra: extra,
      consoleErrors: consoleErrors
    }, null, 2));
  } finally {
    try {
      // Browser.close 会让 WebSocket 直接断开，等待它的 Promise 可能永远不返回，加个超时兜底
      if (client) { await Promise.race([client.send("Browser.close"), delay(800)]); }
    } catch (error) { /* ignore */ }
    chrome.kill();
    server.close();
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch (error) { /* ignore */ }
  }
}

main().catch(function (error) {
  console.error(error.stack || String(error));
  process.exit(1);
});
