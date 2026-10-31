@echo off
chcp 65001 >nul
title 钢铁征途 · 伪3D视图原型
cd /d "%~dp0..\.."
echo 正在启动本地静态服务（端口 8123）...
start "pseudo3d-server" cmd /c "node tools\pseudo3d\serve.js 8123"
timeout /t 2 >nul
start "" "http://127.0.0.1:8123/tools/pseudo3d/prototype.html"
echo.
echo 原型地址： http://127.0.0.1:8123/tools/pseudo3d/prototype.html
echo 关掉那个 pseudo3d-server 窗口即可停止服务。
timeout /t 3 >nul
