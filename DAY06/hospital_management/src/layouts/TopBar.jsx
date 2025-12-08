import { AppBar, Toolbar, IconButton, Typography, Badge, Avatar, Menu, MenuItem, Box, Chip } from '@mui/material';
import { Menu as MenuIcon, Notifications, AccountCircle, Logout, FavoriteBorder, LocalHospital } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../store/slices/uiSlice';
import { logout } from '../store/slices/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'linear-gradient(135deg, #d32f2f 0%, #ff6659 100%)',
        boxShadow: '0 4px 20px rgba(211, 47, 47, 0.2)',
      }}
    >
      <Toolbar sx={{ minHeight: '70px !important' }}>
        <IconButton 
          color="inherit" 
          edge="start" 
          onClick={() => dispatch(toggleSidebar())}
          sx={{ 
            mr: 2,
            '&:hover': { 
              background: 'rgba(255, 255, 255, 0.1)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <MenuIcon />
        </IconButton>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocalHospital sx={{ fontSize: 32, color: '#fff' }} />
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                letterSpacing: '-0.5px',
                background: 'linear-gradient(90deg, #fff 0%, #ffcccc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              HealthConnect
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '10px' }}>
              Caring for Life, Connected by Heart
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip 
            icon={<FavoriteBorder sx={{ color: '#fff !important' }} />}
            label={user?.role?.toUpperCase() || 'USER'}
            sx={{ 
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              fontWeight: 600,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          />
          
          <IconButton 
            color="inherit"
            sx={{
              '&:hover': { 
                background: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.1) rotate(15deg)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Badge badgeContent={4} color="warning">
              <Notifications />
            </Badge>
          </IconButton>
          
          <IconButton 
            onClick={handleMenu} 
            color="inherit"
            sx={{
              '&:hover': { 
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Avatar 
              sx={{ 
                width: 40, 
                height: 40,
                background: 'linear-gradient(135deg, #fff 0%, #ffcccc 100%)',
                color: '#d32f2f',
                fontWeight: 700,
                border: '2px solid rgba(255, 255, 255, 0.5)',
              }}
            >
              {user?.name?.[0] || 'U'}
            </Avatar>
          </IconButton>
          
          <Menu 
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)} 
            onClose={handleClose}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(211, 47, 47, 0.2)',
              }
            }}
          >
            <MenuItem 
              onClick={handleClose}
              sx={{ 
                borderRadius: 2,
                mx: 1,
                '&:hover': { background: 'rgba(211, 47, 47, 0.05)' }
              }}
            >
              <AccountCircle sx={{ mr: 1, color: '#d32f2f' }} /> 
              <Typography>My Profile</Typography>
            </MenuItem>
            <MenuItem 
              onClick={handleLogout}
              sx={{ 
                borderRadius: 2,
                mx: 1,
                '&:hover': { background: 'rgba(211, 47, 47, 0.05)' }
              }}
            >
              <Logout sx={{ mr: 1, color: '#d32f2f' }} /> 
              <Typography>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
