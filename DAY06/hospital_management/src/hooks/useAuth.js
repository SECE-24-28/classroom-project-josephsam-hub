import { useSelector } from 'react-redux';
import { ROLE_PERMISSIONS } from '../constants/roles';

export const useAuth = () => {
  const { user, isAuthenticated, token } = useSelector((state) => state.auth);

  const hasPermission = (permission) => {
    if (!user) return false;
    const userPermissions = ROLE_PERMISSIONS[user.role] || [];
    return userPermissions.includes('all') || userPermissions.includes(permission);
  };

  return {
    user,
    isAuthenticated,
    token,
    hasPermission,
    isAdmin: user?.role === 'admin',
    isDoctor: user?.role === 'doctor',
    isPatient: user?.role === 'patient',
  };
};
