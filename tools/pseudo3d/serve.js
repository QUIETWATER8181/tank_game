// 最小静态服务器（零依赖），给原型用。
//   node tools/pseudo3d/serve.js [port]
// 然后打开 http://127.0.0.1:8123/tools/pseudo3d/prototype.html
"use strict";

var http = require("http");
var fs = require("fs");
var path = require("path");

var ROOT = path.resolve(__dirname, "..", "..");
var PORT = Number(process.argv[2] || 8123);

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
  ".mp4": "video/mp4",
  ".ico": "image/x-icon"
};

http.createServer(function (request, response) {
  var urlPath = decodeURIComponent(request.url.split("?")[0]);
  if (urlPath === "/") { urlPath = "/index.html"; }
  var filePath = path.join(ROOT, urlPath);
  if (filePath.indexOf(ROOT) !== 0) {
    response.writeHead(403);
    response.end("forbidden");
    return;
  }
  fs.readFile(filePath, function (error, data) {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("not found: " + urlPath);
      return;
    }
    response.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(data);
  });
}).listen(PORT, "127.0.0.1", function () {
  console.log("pseudo3d prototype: http://127.0.0.1:" + PORT + "/tools/pseudo3d/prototype.html");
  console.log("game (unchanged):   http://127.0.0.1:" + PORT + "/index.html");
});
