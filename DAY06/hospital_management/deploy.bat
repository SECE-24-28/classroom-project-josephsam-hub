@echo off
echo 🚀 Deploying Joe Hospital MERN Stack...
echo.

echo 📦 Building Frontend...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Frontend build failed!
    pause
    exit /b 1
)

echo ✅ Frontend built successfully!
echo.

echo 📤 Deploying to Netlify...
echo 1. Go to https://netlify.com
echo 2. Drag and drop the 'build' folder
echo 3. Or connect your GitHub repository
echo.

echo 🔧 Backend Deployment:
echo 1. Go to https://render.com
echo 2. Connect your GitHub repository
echo 3. Select 'server' folder as root directory
echo 4. Environment variables will be auto-configured
echo.

echo 🌐 Your URLs will be:
echo Frontend: https://joe-hospital.netlify.app
echo Backend: https://joe-hospital-backend.onrender.com
echo.

pause