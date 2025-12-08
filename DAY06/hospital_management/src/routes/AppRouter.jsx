import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import ForgotPassword from '../features/auth/ForgotPassword';
import ResetPassword from '../features/auth/ResetPassword';
import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import PatientDashboard from '../features/patient/PatientDashboard';
import Appointments from '../features/patient/Appointments';
import MedicalRecords from '../features/patient/MedicalRecords';
import LabReports from '../features/patient/LabReports';
import Billing from '../features/patient/Billing';
import DoctorDashboard from '../features/doctor/DoctorDashboard';
import AdminDashboard from '../features/admin/AdminDashboard';
import { USER_ROLES } from '../constants/roles';

const AppRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
        <Route path="/forgot-password" element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/" />} />
        <Route path="/reset-password/:token" element={!isAuthenticated ? <ResetPassword /> : <Navigate to="/" />} />
        
        {/* Patient Routes */}
        <Route path="/patient/dashboard" element={<ProtectedRoute allowedRoles={[USER_ROLES.PATIENT]}><DashboardLayout><PatientDashboard /></DashboardLayout></ProtectedRoute>} />
        <Route path="/patient/appointments" element={<ProtectedRoute allowedRoles={[USER_ROLES.PATIENT]}><DashboardLayout><Appointments /></DashboardLayout></ProtectedRoute>} />
        <Route path="/patient/medical-records" element={<ProtectedRoute allowedRoles={[USER_ROLES.PATIENT]}><DashboardLayout><MedicalRecords /></DashboardLayout></ProtectedRoute>} />
        <Route path="/patient/lab-reports" element={<ProtectedRoute allowedRoles={[USER_ROLES.PATIENT]}><DashboardLayout><LabReports /></DashboardLayout></ProtectedRoute>} />
        <Route path="/patient/billing" element={<ProtectedRoute allowedRoles={[USER_ROLES.PATIENT]}><DashboardLayout><Billing /></DashboardLayout></ProtectedRoute>} />

        {/* Doctor Routes */}
        <Route path="/doctor/dashboard" element={<ProtectedRoute allowedRoles={[USER_ROLES.DOCTOR]}><DashboardLayout><DoctorDashboard /></DashboardLayout></ProtectedRoute>} />
        <Route path="/doctor/patients" element={<ProtectedRoute allowedRoles={[USER_ROLES.DOCTOR]}><DashboardLayout><div>Patients Page</div></DashboardLayout></ProtectedRoute>} />
        <Route path="/doctor/appointments" element={<ProtectedRoute allowedRoles={[USER_ROLES.DOCTOR]}><DashboardLayout><div>Appointments Page</div></DashboardLayout></ProtectedRoute>} />
        <Route path="/doctor/prescriptions" element={<ProtectedRoute allowedRoles={[USER_ROLES.DOCTOR]}><DashboardLayout><div>Prescriptions Page</div></DashboardLayout></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={[USER_ROLES.ADMIN]}><DashboardLayout><AdminDashboard /></DashboardLayout></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute allowedRoles={[USER_ROLES.ADMIN]}><DashboardLayout><div>Users Management Page</div></DashboardLayout></ProtectedRoute>} />
        <Route path="/admin/doctors" element={<ProtectedRoute allowedRoles={[USER_ROLES.ADMIN]}><DashboardLayout><div>Doctors Management Page</div></DashboardLayout></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={[USER_ROLES.ADMIN]}><DashboardLayout><div>Reports Page</div></DashboardLayout></ProtectedRoute>} />
        <Route path="/admin/settings" element={<ProtectedRoute allowedRoles={[USER_ROLES.ADMIN]}><DashboardLayout><div>Settings Page</div></DashboardLayout></ProtectedRoute>} />

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
