# Hospital Management System - Development Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom@6 @reduxjs/toolkit react-redux axios react-hook-form yup @hookform/resolvers date-fns
```

### 2. Create Environment File
Copy `.env.example` to `.env` and configure:
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### 3. Start Development Server
```bash
npm start
```

## 🏗️ Architecture Overview

### Tech Stack
- **React 19** - UI library
- **Material-UI** - Component library
- **Redux Toolkit** - State management
- **React Router v6** - Routing
- **React Hook Form** - Form handling
- **Yup** - Validation
- **Axios** - HTTP client

### Key Features
✅ Role-based authentication (Admin, Doctor, Patient, Nurse, Receptionist)
✅ Protected routes with RBAC
✅ Responsive dashboard layouts
✅ Reusable component architecture
✅ Centralized API service layer
✅ Form validation & sanitization
✅ Security best practices

## 📋 Development Workflow

### Adding a New Page

1. **Create Component**
```jsx
// src/features/[module]/[PageName].jsx
import { Box, Typography } from '@mui/material';

const PageName = () => {
  return (
    <Box>
      <Typography variant="h4">Page Title</Typography>
      {/* Your content */}
    </Box>
  );
};

export default PageName;
```

2. **Add Route**
```jsx
// src/routes/AppRouter.jsx
import PageName from '../features/[module]/PageName';

// Inside Routes
<Route path="page-name" element={<PageName />} />
```

3. **Add to Sidebar** (if needed)
```jsx
// src/layouts/Sidebar.jsx
// Add to menuConfig for appropriate role
{ text: 'Page Name', icon: <Icon />, path: '/role/page-name' }
```

### Creating a Service

```javascript
// src/services/[feature]Service.js
import api from './api';

export const featureService = {
  getAll: async () => {
    const response = await api.get('/endpoint');
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/endpoint', data);
    return response.data;
  },
};
```

### Adding Redux State

```javascript
// src/store/slices/[feature]Slice.js
import { createSlice } from '@reduxjs/toolkit';

const featureSlice = createSlice({
  name: 'feature',
  initialState: { data: [], loading: false },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = featureSlice.actions;
export default featureSlice.reducer;
```

Then add to store:
```javascript
// src/store/index.js
import featureReducer from './slices/featureSlice';

export const store = configureStore({
  reducer: {
    feature: featureReducer,
  },
});
```

## 🔐 Security Checklist

- [ ] All routes protected with authentication
- [ ] Role-based access control implemented
- [ ] Input validation on all forms
- [ ] XSS prevention (sanitization)
- [ ] CSRF tokens (backend integration)
- [ ] Secure token storage
- [ ] HTTPS in production
- [ ] Environment variables for sensitive data
- [ ] Error messages don't expose system info
- [ ] Rate limiting (backend)

## 🎨 UI/UX Guidelines

### Color Palette
- Primary: `#1976d2` (Blue)
- Secondary: `#dc004e` (Pink)
- Success: `#388e3c` (Green)
- Warning: `#f57c00` (Orange)
- Error: `#d32f2f` (Red)

### Spacing
- Use Material-UI spacing system: `sx={{ p: 2, m: 3 }}`
- Grid spacing: `spacing={3}`

### Typography
- Page titles: `variant="h4"`
- Section titles: `variant="h6"`
- Body text: `variant="body1"`

## 📱 Responsive Breakpoints

```javascript
xs: 0px      // Mobile
sm: 600px    // Tablet
md: 900px    // Small laptop
lg: 1200px   // Desktop
xl: 1536px   // Large desktop
```

## 🧪 Testing (Future Implementation)

### Unit Test Example
```javascript
import { render, screen } from '@testing-library/react';
import PatientDashboard from './PatientDashboard';

test('renders dashboard title', () => {
  render(<PatientDashboard />);
  expect(screen.getByText(/Patient Dashboard/i)).toBeInTheDocument();
});
```

## 🚢 Deployment Checklist

- [ ] Update `.env` with production API URL
- [ ] Build production bundle: `npm run build`
- [ ] Test production build locally
- [ ] Configure CORS on backend
- [ ] Set up HTTPS
- [ ] Configure CSP headers
- [ ] Enable compression
- [ ] Set up monitoring/logging
- [ ] Backup strategy in place

## 📚 Useful Commands

```bash
# Development
npm start                 # Start dev server
npm test                  # Run tests
npm run build            # Production build

# Code Quality
npm run lint             # Run linter (after setup)
npm run format           # Format code (after setup)

# Dependencies
npm install [package]    # Add package
npm update               # Update packages
npm audit fix            # Fix vulnerabilities
```

## 🐛 Common Issues & Solutions

### Issue: Module not found
**Solution**: Run `npm install` to ensure all dependencies are installed

### Issue: Port already in use
**Solution**: Kill process on port 3000 or change port in package.json

### Issue: Redux state not updating
**Solution**: Check if reducer is added to store configuration

### Issue: Protected route not working
**Solution**: Verify user role matches allowedRoles array

## 📞 Support & Resources

- Material-UI Docs: https://mui.com/
- Redux Toolkit: https://redux-toolkit.js.org/
- React Router: https://reactrouter.com/
- React Hook Form: https://react-hook-form.com/

## 🎯 Next Steps

1. ✅ Set up project structure
2. ✅ Implement authentication
3. ✅ Create dashboard layouts
4. 🔄 Build feature modules (appointments, billing, etc.)
5. 🔄 Integrate with backend API
6. 🔄 Add comprehensive testing
7. 🔄 Deploy to production

---

**Note**: This is a production-ready frontend architecture. Backend integration will require updating service files with actual API endpoints.
