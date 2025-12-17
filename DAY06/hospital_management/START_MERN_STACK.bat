@echo off
echo Starting Joe Hospital MERN Stack...
echo.

echo Starting Backend Server...
start cmd /k "cd server && npm run dev"

timeout /t 3

echo Starting Frontend React App...
start cmd /k "npm start"

echo.
echo ✅ Joe Hospital MERN Stack Started!
echo 🏥 Frontend: http://localhost:3000
echo 🔧 Backend: http://localhost:5000
echo 📊 API Health: http://localhost:5000/api/health
echo.
pause