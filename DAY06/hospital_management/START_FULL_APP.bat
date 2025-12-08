@echo off
echo ========================================
echo Hospital Management System
echo Starting Backend and Frontend
echo ========================================
echo.

start "Backend Server" cmd /k "cd backend && node server.js"
timeout /t 3 /nobreak > nul
start "Frontend React" cmd /k "npm start"

echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
