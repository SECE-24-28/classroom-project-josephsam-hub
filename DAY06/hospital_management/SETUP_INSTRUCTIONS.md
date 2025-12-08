# Hospital Management System - Setup Instructions

## 1. Install Dependencies

Run the following command in your terminal:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom@6 @reduxjs/toolkit react-redux axios react-hook-form yup @hookform/resolvers date-fns recharts
```

## 2. Install Dev Dependencies

```bash
npm install --save-dev @types/react @types/react-dom
```

## 3. Start Development Server

```bash
npm start
```

## Security Best Practices Implemented:

1. **JWT Token Management**: Secure storage in httpOnly cookies (backend) + localStorage fallback
2. **Role-Based Access Control (RBAC)**: Protected routes per user role
3. **Input Sanitization**: All forms validated with Yup schemas
4. **XSS Prevention**: React's built-in escaping + DOMPurify for rich text
5. **CSRF Protection**: Token-based authentication ready
6. **Secure Headers**: Content Security Policy ready for production
7. **API Interceptors**: Automatic token refresh and error handling
8. **Environment Variables**: Sensitive configs in .env files

## Project Structure Philosophy:

- **Feature-based architecture**: Each module is self-contained
- **Separation of concerns**: Components, services, state management separated
- **Reusability**: Shared components and utilities
- **Scalability**: Easy to add new roles and features
- **Type safety ready**: Can migrate to TypeScript easily
