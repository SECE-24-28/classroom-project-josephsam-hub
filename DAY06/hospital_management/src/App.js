import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Public Site Components
import NavbarPublic from './components/navigation/NavbarPublic';
import NavbarPatient from './components/navigation/NavbarPatient';
import NavbarAdmin from './components/navigation/NavbarAdmin';
import Footer from './components/ui/Footer';
import FloatingButtons from './components/ui/FloatingButtons';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './publicSite/Home';
import Services from './publicSite/Services';
import Doctors from './publicSite/Doctors';
import Contact from './publicSite/Contact';

// Auth Pages
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';

// Portal Pages
import PatientDashboard from './portal/patient/Dashboard';
import AdminDashboard from './portal/admin/AdminDashboard';

// Layout Components
const PublicLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <NavbarPublic />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingButtons />
  </div>
);

const PatientLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <NavbarPatient />
    <main className="flex-1">{children}</main>
  </div>
);

const AdminLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <NavbarAdmin />
    <main className="flex-1">{children}</main>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
              <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
              <Route path="/doctors" element={<PublicLayout><Doctors /></PublicLayout>} />
              <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* Protected Patient Portal Routes */}
              <Route path="/patient/dashboard" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><PatientDashboard /></PatientLayout>
                </ProtectedRoute>
              } />
              <Route path="/patient/appointments" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><div className="p-6"><h1 className="text-2xl font-bold">Appointments</h1><p>Patient appointments management will be implemented here.</p></div></PatientLayout>
                </ProtectedRoute>
              } />
              <Route path="/patient/lab-reports" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><div className="p-6"><h1 className="text-2xl font-bold">Lab Reports</h1><p>Lab reports will be displayed here.</p></div></PatientLayout>
                </ProtectedRoute>
              } />
              <Route path="/patient/medical-records" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><div className="p-6"><h1 className="text-2xl font-bold">Medical Records</h1><p>Medical records will be shown here.</p></div></PatientLayout>
                </ProtectedRoute>
              } />
              <Route path="/patient/prescriptions" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><div className="p-6"><h1 className="text-2xl font-bold">Prescriptions</h1><p>Prescription management will be here.</p></div></PatientLayout>
                </ProtectedRoute>
              } />
              <Route path="/patient/billing" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><div className="p-6"><h1 className="text-2xl font-bold">Billing</h1><p>Billing information will be displayed here.</p></div></PatientLayout>
                </ProtectedRoute>
              } />
              <Route path="/patient/profile" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><div className="p-6"><h1 className="text-2xl font-bold">Profile</h1><p>Patient profile management will be here.</p></div></PatientLayout>
                </ProtectedRoute>
              } />
              <Route path="/patient/support" element={
                <ProtectedRoute requiredRole="patient">
                  <PatientLayout><div className="p-6"><h1 className="text-2xl font-bold">Support</h1><p>Patient support center will be implemented here.</p></div></PatientLayout>
                </ProtectedRoute>
              } />
              
              {/* Protected Admin Portal Routes */}
              <Route path="/admin/dashboard" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><AdminDashboard /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/doctors" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><div className="p-6"><h1 className="text-2xl font-bold">Manage Doctors</h1><p>Doctor management interface will be here.</p></div></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/patients" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><div className="p-6"><h1 className="text-2xl font-bold">Manage Patients</h1><p>Patient management interface will be here.</p></div></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/appointments" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><div className="p-6"><h1 className="text-2xl font-bold">Manage Appointments</h1><p>Appointment management will be here.</p></div></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/services" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><div className="p-6"><h1 className="text-2xl font-bold">Services Editor</h1><p>Services management will be here.</p></div></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/lab" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><div className="p-6"><h1 className="text-2xl font-bold">Lab Management</h1><p>Lab management interface will be here.</p></div></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/billing" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><div className="p-6"><h1 className="text-2xl font-bold">Billing Reports</h1><p>Billing reports and analytics will be here.</p></div></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/settings" element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout><div className="p-6"><h1 className="text-2xl font-bold">Admin Settings</h1><p>System settings will be here.</p></div></AdminLayout>
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
