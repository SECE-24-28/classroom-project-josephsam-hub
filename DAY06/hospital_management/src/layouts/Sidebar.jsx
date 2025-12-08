import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Box, Divider, Typography } from '@mui/material';
import { Dashboard, People, CalendarMonth, LocalHospital, Receipt, Science, Settings, Favorite, MedicalServices, Healing } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { USER_ROLES } from '../constants/roles';

const Sidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const getMenuItems = () => {
    const role = user?.role;
    
    const menuConfig = {
      [USER_ROLES.ADMIN]: [
        { text: 'Dashboard', icon: <Dashboard />, path: '/admin/dashboard' },
        { text: 'Users', icon: <People />, path: '/admin/users' },
        { text: 'Doctors', icon: <LocalHospital />, path: '/admin/doctors' },
        { text: 'Reports', icon: <Receipt />, path: '/admin/reports' },
        { text: 'Settings', icon: <Settings />, path: '/admin/settings' },
      ],
      [USER_ROLES.DOCTOR]: [
        { text: 'Dashboard', icon: <Dashboard />, path: '/doctor/dashboard' },
        { text: 'Patients', icon: <People />, path: '/doctor/patients' },
        { text: 'Appointments', icon: <CalendarMonth />, path: '/doctor/appointments' },
        { text: 'Prescriptions', icon: <LocalHospital />, path: '/doctor/prescriptions' },
      ],
      [USER_ROLES.PATIENT]: [
        { text: 'Dashboard', icon: <Dashboard />, path: '/patient/dashboard' },
        { text: 'Appointments', icon: <CalendarMonth />, path: '/patient/appointments' },
        { text: 'Medical Records', icon: <LocalHospital />, path: '/patient/medical-records' },
        { text: 'Lab Reports', icon: <Science />, path: '/patient/lab-reports' },
        { text: 'Billing', icon: <Receipt />, path: '/patient/billing' },
      ],
      [USER_ROLES.RECEPTIONIST]: [
        { text: 'Dashboard', icon: <Dashboard />, path: '/receptionist/dashboard' },
        { text: 'Appointments', icon: <CalendarMonth />, path: '/receptionist/appointments' },
        { text: 'Patients', icon: <People />, path: '/receptionist/patients' },
        { text: 'Billing', icon: <Receipt />, path: '/receptionist/billing' },
      ],
      [USER_ROLES.NURSE]: [
        { text: 'Dashboard', icon: <Dashboard />, path: '/nurse/dashboard' },
        { text: 'Patients', icon: <People />, path: '/nurse/patients' },
        { text: 'Appointments', icon: <CalendarMonth />, path: '/nurse/appointments' },
      ],
    };

    return menuConfig[role] || [];
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarOpen ? 260 : 70,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarOpen ? 260 : 70,
          boxSizing: 'border-box',
          mt: '70px',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowX: 'hidden',
          background: 'linear-gradient(180deg, #ffffff 0%, #fff5f5 100%)',
          borderRight: '1px solid rgba(211, 47, 47, 0.1)',
          boxShadow: '4px 0 20px rgba(211, 47, 47, 0.05)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', p: 1 }}>
        {sidebarOpen && (
          <Box sx={{ p: 2, mb: 1 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              p: 2,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.05) 0%, rgba(255, 102, 89, 0.05) 100%)',
              border: '1px solid rgba(211, 47, 47, 0.1)',
            }}>
              <Favorite sx={{ color: '#d32f2f', fontSize: 28 }} />
              <Box>
                <Typography variant="caption" sx={{ color: '#666', fontSize: '10px' }}>
                  Welcome back,
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#d32f2f' }}>
                  {user?.name || 'User'}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        
        <List sx={{ px: 1 }}>
          {getMenuItems().map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 3,
                  minHeight: 48,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.08) 0%, rgba(255, 102, 89, 0.08) 100%)',
                    transform: 'translateX(4px)',
                    boxShadow: '0 4px 12px rgba(211, 47, 47, 0.1)',
                  },
                  '&.Mui-selected': {
                    background: 'linear-gradient(135deg, #d32f2f 0%, #ff6659 100%)',
                    color: '#fff',
                    boxShadow: '0 4px 12px rgba(211, 47, 47, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #d32f2f 0%, #ff6659 100%)',
                    },
                    '& .MuiListItemIcon-root': {
                      color: '#fff',
                    },
                  },
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    minWidth: sidebarOpen ? 40 : 'auto',
                    color: location.pathname === item.path ? '#fff' : '#d32f2f',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {sidebarOpen && (
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: location.pathname === item.path ? 600 : 500,
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {sidebarOpen && (
          <Box sx={{ p: 2, mt: 2 }}>
            <Divider sx={{ mb: 2, borderColor: 'rgba(211, 47, 47, 0.1)' }} />
            <Box sx={{
              p: 2,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.05) 0%, rgba(255, 102, 89, 0.05) 100%)',
              border: '1px solid rgba(211, 47, 47, 0.1)',
              textAlign: 'center',
            }}>
              <MedicalServices sx={{ color: '#d32f2f', fontSize: 32, mb: 1 }} />
              <Typography variant="caption" sx={{ color: '#666', display: 'block', mb: 0.5 }}>
                Need Help?
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#d32f2f', fontSize: 12 }}>
                24/7 Support Available
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
