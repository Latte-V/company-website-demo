@echo off
chcp 65001 >nul
echo ========================================
echo   小微AI科技官网 - 启动服务
echo ========================================
echo.
cd /d "%~dp0"
echo 正在启动开发服务器...
echo.
powershell -ExecutionPolicy Bypass -Command "npm run dev"
pause
