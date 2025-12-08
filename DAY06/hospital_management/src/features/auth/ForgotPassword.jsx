import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, TextField, Button, Typography, Alert, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from '../../services/authService';
import { forgotPasswordSchema } from '../../utils/validation';

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [resetInfo, setResetInfo] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(forgotPasswordSchema)
  });

  const onSubmit = async (data) => {
    try {
      setError('');
      const response = await authService.forgotPassword(data.email);
      setSuccess('Password reset instructions sent!');
      setResetInfo(response);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset email');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Card sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 3 }}>
            Enter your email to receive password reset instructions
          </Typography>
          
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
              {resetInfo && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" display="block">
                    Reset URL: {resetInfo.resetUrl}
                  </Typography>
                </Box>
              )}
            </Alert>
          )}
          
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
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Send Reset Link
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="primary">Back to Login</Typography>
              </Link>
            </Box>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
