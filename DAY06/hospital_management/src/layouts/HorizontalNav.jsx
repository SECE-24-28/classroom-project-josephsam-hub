import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Dashboard, CalendarMonth, Description, Science, Payment, Help } from '@mui/icons-material';

const menuItems = [
  { label: 'Dashboard', icon: <Dashboard />, path: '/patient/dashboard' },
  { label: 'Appointments', icon: <CalendarMonth />, path: '/patient/appointments' },
  { label: 'Medical Records', icon: <Description />, path: '/patient/medical-records' },
  { label: 'Lab Reports', icon: <Science />, path: '/patient/lab-reports' },
  { label: 'Billing', icon: <Payment />, path: '/patient/billing' },
  { label: 'Help', icon: <Help />, path: '/patient/help' },
];

export default function HorizontalNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ background: 'linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)', borderBottom: '1px solid rgba(211, 47, 47, 0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flex: 1, justifyContent: 'center' }}>
            {menuItems.map((item) => (
              <Box
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 3,
                  py: 1.5,
                  cursor: 'pointer',
                  borderRadius: 3,
                  background: isActive(item.path) ? 'linear-gradient(135deg, #d32f2f 0%, #ff4d4d 100%)' : 'transparent',
                  color: isActive(item.path) ? '#fff' : '#666',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: isActive(item.path) ? 'linear-gradient(135deg, #d32f2f 0%, #ff4d4d 100%)' : 'rgba(211, 47, 47, 0.08)',
                    color: isActive(item.path) ? '#fff' : '#d32f2f',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>{item.icon}</Box>
                <Box sx={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap' }}>{item.label}</Box>
              </Box>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#d32f2f' }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.path}
                onClick={() => { navigate(item.path); setMobileOpen(false); }}
                sx={{
                  mx: 1,
                  mb: 1,
                  borderRadius: 2,
                  background: isActive(item.path) ? 'linear-gradient(135deg, #d32f2f 0%, #ff4d4d 100%)' : 'transparent',
                  color: isActive(item.path) ? '#fff' : '#666',
                  '&:hover': { background: isActive(item.path) ? 'linear-gradient(135deg, #d32f2f 0%, #ff4d4d 100%)' : 'rgba(211, 47, 47, 0.08)' },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600, fontSize: 14 }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
