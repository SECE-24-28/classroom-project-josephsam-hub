export const PUBLIC_ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  HOME: '/',
};

export const ADMIN_ROUTES = {
  DASHBOARD: '/admin/dashboard',
  USERS: '/admin/users',
  DOCTORS: '/admin/doctors',
  DEPARTMENTS: '/admin/departments',
  REPORTS: '/admin/reports',
  SETTINGS: '/admin/settings',
};

export const DOCTOR_ROUTES = {
  DASHBOARD: '/doctor/dashboard',
  PATIENTS: '/doctor/patients',
  APPOINTMENTS: '/doctor/appointments',
  PRESCRIPTIONS: '/doctor/prescriptions',
  SCHEDULE: '/doctor/schedule',
};

export const PATIENT_ROUTES = {
  DASHBOARD: '/patient/dashboard',
  APPOINTMENTS: '/patient/appointments',
  MEDICAL_RECORDS: '/patient/medical-records',
  LAB_REPORTS: '/patient/lab-reports',
  BILLING: '/patient/billing',
  PROFILE: '/patient/profile',
};

export const RECEPTIONIST_ROUTES = {
  DASHBOARD: '/receptionist/dashboard',
  APPOINTMENTS: '/receptionist/appointments',
  PATIENTS: '/receptionist/patients',
  BILLING: '/receptionist/billing',
};

export const NURSE_ROUTES = {
  DASHBOARD: '/nurse/dashboard',
  PATIENTS: '/nurse/patients',
  APPOINTMENTS: '/nurse/appointments',
};
