# 🚀 How to Run the Hospital Management System

## ✅ Everything is Ready!

Your complete Hospital Management System with MySQL backend is now set up.

## 🎯 To Run the Application:

### Step 1: Start Backend Server
Open a **NEW terminal/command prompt** and run:
```bash
cd C:\Users\josep\OneDrive\Documents\GitHub\classroom-project-josephsam-hub\DAY06\hospital_management\backend
node server.js
```

You should see:
```
🚀 Server running on port 5000
📊 Database: hospital_db
✅ Database and tables created successfully
```

### Step 2: Start Frontend (Keep backend running)
Open **ANOTHER terminal/command prompt** and run:
```bash
cd C:\Users\josep\OneDrive\Documents\GitHub\classroom-project-josephsam-hub\DAY06\hospital_management
npm start
```

Browser will automatically open at: http://localhost:3000

## 🎉 What You Can Do Now:

### 1. Register a New User
- Click "Register" on login page
- Fill in your details
- Choose a role (Patient, Doctor, Nurse, Receptionist)
- Submit

### 2. Login
- Use your registered email and password
- You'll be redirected to your role-specific dashboard

### 3. Test Forgot Password
- Click "Forgot Password?" on login page
- Enter your email
- You'll get a reset token (shown on screen for testing)
- Copy the reset URL and open in browser
- Set new password

## 📊 Database Info

- **Database**: hospital_db (auto-created)
- **Host**: localhost
- **User**: root
- **Password**: plmokn00@

## 🔗 URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Test Backend**: http://localhost:5000/api/test

## ✅ Features Working:

✅ User Registration
✅ User Login
✅ Forgot Password
✅ Reset Password
✅ Role-based Dashboards
✅ JWT Authentication
✅ MySQL Database
✅ Password Encryption

## 🎯 Quick Test:

1. Go to: http://localhost:3000/register
2. Register with:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Role: Patient
   - Password: test123
3. Login with those credentials
4. You'll see the Patient Dashboard!

---

**Both terminals must stay open while using the app!**
