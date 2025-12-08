@echo off
echo Installing Hospital Management System Dependencies...
echo.

npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom@6 @reduxjs/toolkit react-redux axios react-hook-form yup @hookform/resolvers date-fns

echo.
echo Dependencies installed successfully!
echo.
echo Next steps:
echo 1. Copy .env.example to .env
echo 2. Run: npm start
echo.
pause
