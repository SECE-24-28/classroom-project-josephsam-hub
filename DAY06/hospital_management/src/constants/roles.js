export const USER_ROLES = {
  ADMIN: 'admin',
  DOCTOR: 'doctor',
  NURSE: 'nurse',
  RECEPTIONIST: 'receptionist',
  PATIENT: 'patient',
};

export const ROLE_PERMISSIONS = {
  [USER_ROLES.ADMIN]: ['all'],
  [USER_ROLES.DOCTOR]: ['view_patients', 'edit_prescriptions', 'view_appointments', 'view_lab_reports'],
  [USER_ROLES.NURSE]: ['view_patients', 'view_appointments', 'update_vitals'],
  [USER_ROLES.RECEPTIONIST]: ['manage_appointments', 'view_patients', 'billing'],
  [USER_ROLES.PATIENT]: ['view_own_records', 'book_appointments', 'view_bills'],
};
