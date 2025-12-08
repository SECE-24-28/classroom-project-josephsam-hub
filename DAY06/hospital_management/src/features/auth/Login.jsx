import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Card, TextField, Button, Typography, Alert, Container, Divider, IconButton } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice';
import { authService } from '../../services/authService';
import { loginSchema } from '../../utils/validation';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    try {
      dispatch(loginStart());
      const response = await authService.login(data);
      dispatch(loginSuccess(response));
      
      // Navigate based on role
      const roleRoutes = {
        admin: '/admin/dashboard',
        doctor: '/doctor/dashboard',
        patient: '/patient/dashboard',
        receptionist: '/receptionist/dashboard',
        nurse: '/nurse/dashboard',
      };
      navigate(roleRoutes[response.user.role] || '/');
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      dispatch(loginFailure(message));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card sx={{ p: 4, width: '100%' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Hospital Management System
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
            Login
          </Typography>
          
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              {...register('password', { required: 'Password is required' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            
            <Divider sx={{ my: 2 }}>OR</Divider>
            
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              sx={{
                borderColor: '#d32f2f',
                color: '#d32f2f',
                '&:hover': {
                  borderColor: '#d32f2f',
                  background: 'rgba(211, 47, 47, 0.05)',
                },
              }}
            >
              Continue with Google
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="primary">Forgot Password?</Typography>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="primary">Register</Typography>
              </Link>
            </Box>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
