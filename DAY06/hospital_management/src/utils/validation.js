import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const registerSchema = yup.object({
  name: yup.string().min(2, 'Name must be at least 2 characters').required('Full name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone must be 10 digits').required('Phone number is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain lowercase letter')
    .matches(/[A-Z]/, 'Password must contain uppercase letter')
    .matches(/[0-9]/, 'Password must contain number')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm password'),
  role: yup.string().required('Role is required'),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
});

export const resetPasswordSchema = yup.object({
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain lowercase letter')
    .matches(/[A-Z]/, 'Password must contain uppercase letter')
    .matches(/[0-9]/, 'Password must contain number')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm password'),
});
