# 🚀 Quick Start Guide - Hospital Management System

## ⚡ Get Running in 3 Steps

### Step 1: Install Dependencies (2 minutes)

**Windows Users:**
```bash
# Double-click this file:
INSTALL_DEPENDENCIES.bat
```

**Or run manually:**
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom@6 @reduxjs/toolkit react-redux axios react-hook-form yup @hookform/resolvers date-fns
```

### Step 2: Setup Environment (30 seconds)

Create `.env` file in root directory:
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENV=development
REACT_APP_HOSPITAL_NAME=City General Hospital
```

### Step 3: Start Development Server (10 seconds)

```bash
npm start
```

🎉 **Done!** Your app will open at `http://localhost:3000`

---

## 🎯 What You'll See

### Login Page
- Professional login form
- Email & password validation
- Role-based routing after login

### Dashboards (Based on Role)
- **Admin**: User management, reports, settings
- **Doctor**: Patients, appointments, prescriptions
- **Patient**: Appointments, medical records, billing
- **Nurse**: Patient care, appointments
- **Receptionist**: Appointments, billing

---

## 🧪 Testing the App (Without Backend)

Since backend isn't built yet, here's how to test:

### Option 1: Mock the Login (Quick Test)

Edit `src/services/authService.js`:

```javascript
export const authService = {
  login: async (credentials) => {
    // Mock response for testing
    return {
      user: {
        id: 1,
        name: 'John Doe',
        email: credentials.email,
        role: 'patient', // Change to: admin, doctor, nurse, receptionist
      },
      token: 'mock-jwt-token-12345',
    };
  },
  // ... rest of the methods
};
```

Now you can login with any email/password and see the patient dashboard!

### Option 2: Test Different Roles

Change `role: 'patient'` to:
- `'admin'` → See admin dashboard
- `'doctor'` → See doctor dashboard
- `'nurse'` → See nurse dashboard
- `'receptionist'` → See receptionist dashboard

---

## 📁 Key Files to Know

### 🔐 Authentication
- `src/features/auth/Login.jsx` - Login page
- `src/store/slices/authSlice.js` - Auth state
- `src/services/authService.js` - API calls

### 🎨 Layout
- `src/layouts/DashboardLayout.jsx` - Main wrapper
- `src/layouts/Sidebar.jsx` - Navigation menu
- `src/layouts/TopBar.jsx` - Top navigation

### 🛣️ Routing
- `src/routes/AppRouter.jsx` - All routes
- `src/routes/ProtectedRoute.jsx` - Route protection

### 📊 Dashboards
- `src/features/patient/PatientDashboard.jsx`
- `src/features/doctor/DoctorDashboard.jsx`
- `src/features/admin/AdminDashboard.jsx`

---

## 🎨 Customization Quick Tips

### Change Hospital Name
```javascript
// src/layouts/TopBar.jsx - Line 28
<Typography variant="h6">
  Your Hospital Name Here
</Typography>
```

### Change Theme Colors
```javascript
// src/App.js - Line 7-10
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' }, // Change this
    secondary: { main: '#dc004e' }, // And this
  },
});
```

### Add Menu Item to Sidebar
```javascript
// src/layouts/Sidebar.jsx
// Add to appropriate role's menuConfig:
{ 
  text: 'New Page', 
  icon: <YourIcon />, 
  path: '/role/new-page' 
}
```

---

## 🐛 Troubleshooting

### "Module not found" error
```bash
npm install
```

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in package.json
"start": "set PORT=3001 && react-scripts start"
```

### Redux state not updating
- Check if reducer is added to `src/store/index.js`
- Verify action is dispatched correctly

### Protected route redirects to login
- Check if user is authenticated in Redux state
- Verify role matches allowedRoles array

---

## 📚 Next Steps

### 1. Build Your First Feature
Start with patient registration:
```bash
# Create component
src/features/patient/PatientRegistration.jsx

# Add route in AppRouter.jsx
# Add form with React Hook Form
# Connect to service layer
```

### 2. Read Documentation
- `ARCHITECTURE_SUMMARY.md` - Complete overview
- `DEVELOPMENT_GUIDE.md` - Development workflow
- `PROJECT_STRUCTURE.md` - Folder structure details

### 3. Plan Backend Integration
- Design API endpoints
- Update service files with real URLs
- Implement error handling
- Add loading states

---

## 🎯 Feature Implementation Priority

### Week 1-2: Core Features
1. ✅ Authentication (Done)
2. ✅ Dashboards (Done)
3. 🔄 Patient Registration Form
4. 🔄 Appointment Booking
5. 🔄 Patient List with Search

### Week 3-4: Advanced Features
6. 🔄 Doctor Schedule Management
7. 🔄 Billing Module
8. 🔄 Lab Reports Upload/View
9. 🔄 Prescription Management

### Week 5-6: Backend Integration
10. 🔄 Connect all APIs
11. 🔄 Real-time notifications
12. 🔄 File upload/download
13. 🔄 Data synchronization

---

## 💡 Pro Tips

### 1. Use the Custom Hook
```javascript
import { useAuth } from '../hooks/useAuth';

const MyComponent = () => {
  const { user, isAdmin, hasPermission } = useAuth();
  
  if (hasPermission('view_patients')) {
    // Show content
  }
};
```

### 2. Consistent Error Handling
```javascript
try {
  const data = await patientService.getAll();
} catch (error) {
  console.error('Error:', error.response?.data?.message);
  // Show user-friendly error
}
```

### 3. Loading States
```javascript
import LoadingSpinner from '../components/common/LoadingSpinner';

{loading ? <LoadingSpinner /> : <YourContent />}
```

---

## 🎉 You're All Set!

Your professional Hospital Management System frontend is ready to go!

**Need Help?**
- Check `DEVELOPMENT_GUIDE.md` for detailed workflows
- Review `ARCHITECTURE_SUMMARY.md` for system overview
- Refer to `PROJECT_STRUCTURE.md` for file organization

**Happy Coding! 🚀**
