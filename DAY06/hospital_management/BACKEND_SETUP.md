# 🏥 Hospital Management System - Complete Setup Guide

## ✅ What's Been Created

### Backend (Node.js + Express + MySQL)
- ✅ User authentication (Register, Login, Forgot Password, Reset Password)
- ✅ MySQL database with auto-initialization
- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based user system (Admin, Doctor, Patient, Nurse, Receptionist)

### Frontend (React)
- ✅ Register page with validation
- ✅ Login page
- ✅ Forgot Password page
- ✅ Reset Password page
- ✅ Connected to backend API

## 🚀 Quick Start

### Option 1: Start Everything (Recommended)
```bash
# Double-click this file:
START_FULL_APP.bat
```

### Option 2: Start Separately

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```

**Terminal 2 - Frontend:**
```bash
npm start
```

## 📊 Database Information

- **Database Name**: `hospital_db`
- **Host**: `localhost`
- **User**: `root`
- **Password**: `plmokn00@`

The database and tables will be created automatically when you start the backend!

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `GET /api/auth/me` - Get current user (protected)

## 🧪 Testing the Application

### 1. Start the Application
```bash
START_FULL_APP.bat
```

### 2. Register a New User
- Go to: http://localhost:3000/register
- Fill in the form
- Select a role (Patient, Doctor, Nurse, Receptionist)
- Click Register

### 3. Login
- Go to: http://localhost:3000/login
- Use your registered email and password
- You'll be redirected to your role-specific dashboard

### 4. Test Forgot Password
- Go to: http://localhost:3000/forgot-password
- Enter your email
- You'll receive a reset token (displayed on screen for testing)
- Copy the reset URL and paste in browser
- Enter new password

## 📁 Project Structure

```
hospital_management/
├── backend/
│   ├── config/
│   │   └── database.js          # MySQL connection & initialization
│   ├── controllers/
│   │   └── authController.js    # Auth logic
│   ├── middleware/
│   │   └── auth.js              # JWT verification
│   ├── models/
│   │   └── User.js              # User model
│   ├── routes/
│   │   └── auth.js              # Auth routes
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Main server file
│
├── src/
│   ├── features/
│   │   └── auth/
│   │       ├── Login.jsx        # ✅ Working
│   │       ├── Register.jsx     # ✅ NEW - Working
│   │       ├── ForgotPassword.jsx # ✅ NEW - Working
│   │       └── ResetPassword.jsx  # ✅ NEW - Working
│   ├── routes/
│   │   └── AppRouter.jsx        # ✅ Updated with new routes
│   └── services/
│       └── authService.js       # ✅ Updated with API calls
│
├── START_BACKEND.bat            # Start backend only
├── START_APP.bat                # Start frontend only
└── START_FULL_APP.bat           # Start both (RECOMMENDED)
```

## 🎯 User Roles

When registering, you can choose:
- **Patient** - Book appointments, view records
- **Doctor** - Manage patients, prescriptions
- **Nurse** - Patient care, appointments
- **Receptionist** - Front desk, billing
- **Admin** - Full system access (can be set manually in database)

## 🔧 Troubleshooting

### Backend won't start
```bash
# Check if MySQL is running
# Check credentials in backend/.env
```

### Database connection error
```bash
# Verify MySQL credentials:
# User: root
# Password: plmokn00@
# Make sure MySQL service is running
```

### Frontend can't connect to backend
```bash
# Make sure backend is running on port 5000
# Check: http://localhost:5000/api/test
```

## 📝 Default Test Users

After registration, you can create test users:

**Admin User** (Create manually in database):
```sql
UPDATE users SET role = 'admin' WHERE email = 'your-email@example.com';
```

## 🎉 Features Working

✅ User Registration with validation
✅ User Login with JWT tokens
✅ Forgot Password with reset token
✅ Reset Password functionality
✅ Role-based authentication
✅ Protected routes
✅ Automatic database creation
✅ Password hashing
✅ Token-based sessions

## 🚀 Next Steps

1. ✅ Backend is running
2. ✅ Frontend is running
3. ✅ Database is created
4. ✅ Register/Login/Forgot Password working
5. 🔄 Build more features (appointments, billing, etc.)

## 📞 Support

If you encounter issues:
1. Check if MySQL is running
2. Verify credentials in `backend/.env`
3. Make sure ports 3000 and 5000 are available
4. Check console for error messages

---

**🎉 Your Hospital Management System is now fully functional!**

**Backend**: http://localhost:5000
**Frontend**: http://localhost:3000
