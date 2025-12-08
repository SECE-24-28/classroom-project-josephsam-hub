# Hospital Management System - Project Structure

## 📁 Folder Structure

```
src/
├── assets/                    # Static files (images, fonts)
├── components/                # Reusable UI components
│   ├── common/               # Generic components (Button, Card, etc.)
│   ├── forms/                # Form components
│   ├── tables/               # Table components
│   ├── charts/               # Chart components
│   └── modals/               # Modal dialogs
├── features/                  # Feature-based modules
│   ├── auth/                 # Authentication (Login, Register)
│   ├── patient/              # Patient module
│   ├── doctor/               # Doctor module
│   ├── admin/                # Admin module
│   ├── appointments/         # Appointments management
│   ├── billing/              # Billing & payments
│   ├── lab/                  # Lab reports
│   └── pharmacy/             # Pharmacy inventory
├── layouts/                   # Layout components
│   ├── DashboardLayout.jsx   # Main dashboard wrapper
│   ├── Sidebar.jsx           # Navigation sidebar
│   └── TopBar.jsx            # Top navigation bar
├── routes/                    # Routing configuration
│   ├── AppRouter.jsx         # Main router
│   └── ProtectedRoute.jsx    # Route protection HOC
├── services/                  # API service layer
│   ├── api.js                # Axios instance with interceptors
│   └── authService.js        # Authentication API calls
├── store/                     # Redux state management
│   ├── index.js              # Store configuration
│   └── slices/               # Redux slices
│       ├── authSlice.js      # Auth state
│       └── uiSlice.js        # UI state
├── utils/                     # Utility functions
│   └── validation.js         # Form validation schemas
├── hooks/                     # Custom React hooks
│   └── useAuth.js            # Authentication hook
├── constants/                 # Application constants
│   ├── roles.js              # User roles & permissions
│   └── routes.js             # Route paths
├── App.js                     # Root component
└── index.js                   # Entry point
```

## 🎯 Naming Conventions

### Files
- **Components**: PascalCase (e.g., `PatientDashboard.jsx`)
- **Utilities**: camelCase (e.g., `validation.js`)
- **Constants**: camelCase (e.g., `roles.js`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.js`)

### Variables & Functions
- **Components**: PascalCase (e.g., `const PatientCard = () => {}`)
- **Functions**: camelCase (e.g., `const handleSubmit = () => {}`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `const USER_ROLES = {}`)
- **Props**: camelCase (e.g., `const MyComponent = ({ userName }) => {}`)

### Redux
- **Slices**: camelCase with 'Slice' suffix (e.g., `authSlice`)
- **Actions**: camelCase (e.g., `loginSuccess`)
- **Selectors**: camelCase with 'select' prefix (e.g., `selectUser`)

## 🔐 Security Best Practices

### 1. Authentication & Authorization
- JWT tokens stored in localStorage (consider httpOnly cookies for production)
- Automatic token refresh via interceptors
- Role-based access control (RBAC) on all routes
- Session timeout handling

### 2. Input Validation
- Client-side validation with Yup schemas
- Sanitization of user inputs
- XSS prevention through React's built-in escaping

### 3. API Security
- HTTPS only in production
- CORS configuration
- Rate limiting (backend)
- Request/response interceptors for error handling

### 4. Data Protection
- No sensitive data in localStorage
- Environment variables for configuration
- Secure password requirements
- PII data handling compliance

## 🚀 Scalability Guidelines

### Adding New Features
1. Create feature folder in `src/features/[feature-name]/`
2. Add route constants in `src/constants/routes.js`
3. Create service file in `src/services/[feature]Service.js`
4. Add Redux slice if needed in `src/store/slices/`
5. Update router in `src/routes/AppRouter.jsx`

### Adding New User Roles
1. Add role to `src/constants/roles.js`
2. Define permissions in `ROLE_PERMISSIONS`
3. Create dashboard component
4. Add routes in `AppRouter.jsx`
5. Update Sidebar menu items

### Component Reusability
- Keep components small and focused
- Use composition over inheritance
- Extract common logic to custom hooks
- Create shared components in `components/common/`

## 🔄 State Management Strategy

### Redux (Global State)
- User authentication
- UI state (sidebar, theme)
- Shared data across features

### Local State (useState)
- Form inputs
- Component-specific UI state
- Temporary data

### Server State (React Query - Future)
- API data caching
- Background refetching
- Optimistic updates

## 📦 Future Backend Integration

### API Endpoints Structure
```
/api/auth/*           - Authentication
/api/patients/*       - Patient management
/api/doctors/*        - Doctor management
/api/appointments/*   - Appointments
/api/billing/*        - Billing & payments
/api/lab-reports/*    - Lab reports
/api/pharmacy/*       - Pharmacy inventory
```

### Data Flow
1. Component dispatches action
2. Service layer makes API call
3. Response updates Redux store
4. Component re-renders with new data

## 🧪 Testing Strategy (Future)

- **Unit Tests**: Components, utilities, hooks
- **Integration Tests**: Feature workflows
- **E2E Tests**: Critical user journeys
- **Tools**: Jest, React Testing Library, Cypress

## 📱 Responsive Design

- Mobile-first approach
- Material-UI breakpoints
- Collapsible sidebar on mobile
- Touch-friendly UI elements

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG 2.1)
