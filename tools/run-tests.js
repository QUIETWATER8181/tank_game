// 跑 tests/*.test.js：每个文件一个独立 node 进程，超时就杀掉并记 FAIL。
//
// 为什么需要超时：有几个用例会碰 Audio / 音轨，那里面用 setInterval 做循环音效，
// 在 node 里没人 stop 就会一直挂着（浏览器里是正常的）。表现是「已经打印了 PASS，
// 但进程不退出」，手工跑套件时会被卡住十几分钟，还以为是游戏代码死循环。
//
// 用法：node tools/run-tests.js [--timeout=180000] [关键字]
"use strict";

var fs = require("fs");
var os = require("os");
var path = require("path");
var spawn = require("child_process").spawn;

var root = path.resolve(__dirname, "..");
var testsDir = path.join(root, "tests");
var timeoutMs = Number(process.env.TEST_TIMEOUT_MS || 180000);
var filter = null;

process.argv.slice(2).forEach(function (arg) {
  var match = /^--timeout=(\d+)$/.exec(arg);
  if (match) { timeoutMs = Number(match[1]); return; }
  if (arg.indexOf("--") !== 0) { filter = arg; }
});

var files = fs.readdirSync(testsDir)
  .filter(function (name) { return /\.test\.js$/.test(name); })
  .filter(function (name) { return !filter || name.indexOf(filter) !== -1; })
  .sort();

if (!files.length) {
  console.error("没有匹配到测试文件");
  process.exit(1);
}

var results = [];
var startedAll = Date.now();

function runNext(index) {
  if (index >= files.length) { return report(); }
  var name = files[index];
  var logPath = path.join(os.tmpdir(), "tank-test-" + process.pid + "-" + index + ".log");
  var out = fs.openSync(logPath, "w");
  var started = Date.now();
  var settled = false;
  var child = spawn(process.execPath, [path.join(testsDir, name)], {
    cwd: root,
    stdio: ["ignore", out, out]   // 走文件描述符，不建管道
  });

  var timer = setTimeout(function () {
    if (settled) { return; }
    settled = true;
    try { child.kill("SIGKILL"); } catch (error) { /* 已经退出 */ }
    finish(name, null, Date.now() - started, logPath, "超时 " + Math.round(timeoutMs / 1000) + "s 未退出", out);
  }, timeoutMs);

  child.on("exit", function (code, signal) {
    if (settled) { return; }
    settled = true;
    clearTimeout(timer);
    finish(name, signal ? null : code, Date.now() - started, logPath, null, out);
  });

  child.on("error", function (error) {
    if (settled) { return; }
    settled = true;
    clearTimeout(timer);
    finish(name, null, Date.now() - started, logPath, error.message, out);
  });
}

function finish(name, code, elapsed, logPath, note, out) {
  fs.closeSync(out);
  var passed = code === 0 && !note;
  var output = "";
  try { output = fs.readFileSync(logPath, "utf8"); } catch (error) { /* 没日志就算了 */ }
  try { fs.unlinkSync(logPath); } catch (error) { /* 忽略 */ }
  results.push({ name: name, passed: passed, elapsed: elapsed, note: note, output: output });
  console.log((passed ? "  ok  " : "  FAIL ") + name + "  " + (elapsed / 1000).toFixed(1) + "s" +
    (note ? "  (" + note + ")" : ""));
  if (!passed) {
    var lines = output.trim().split(/\r?\n/);
    lines.slice(-8).forEach(function (line) { console.log("        " + line); });
  }
  runNext(results.length);
}

function report() {
  var failed = results.filter(function (item) { return !item.passed; });
  console.log("");
  console.log("tests=" + results.length + " failures=" + failed.length +
    " 总耗时 " + ((Date.now() - startedAll) / 1000).toFixed(1) + "s");
  if (failed.length) {
    failed.forEach(function (item) { console.log("  FAIL " + item.name + (item.note ? "：" + item.note : "")); });
    process.exit(1);
  }
  process.exit(0);
}

runNext(0);
