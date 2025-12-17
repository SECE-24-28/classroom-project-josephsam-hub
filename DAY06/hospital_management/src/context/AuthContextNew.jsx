import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('hospital_user');
    const savedAuth = localStorage.getItem('hospital_auth');
    const token = localStorage.getItem('hospital_token');
    
    if (savedUser && savedAuth === 'true' && token) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (credentials) => {
    setIsLoading(true);
    
    try {
      const response = await authAPI.login(credentials);
      
      if (response.data.success) {
        const { user, accessToken, refreshToken } = response.data.data;
        
        setUser(user);
        setIsAuthenticated(true);
        
        localStorage.setItem('hospital_token', accessToken);
        localStorage.setItem('hospital_refresh_token', refreshToken);
        localStorage.setItem('hospital_user', JSON.stringify(user));
        localStorage.setItem('hospital_auth', 'true');
        
        return { success: true, user };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed. Please check your credentials.';
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    
    try {
      const response = await authAPI.register(userData);
      
      if (response.data.success) {
        return { success: true, user: response.data.data.user };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email) => {
    setIsLoading(true);
    
    try {
      const response = await authAPI.forgotPassword(email);
      
      if (response.data.success) {
        return { success: true, message: response.data.message };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to send reset link.';
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('hospital_refresh_token');
      if (refreshToken) {
        await authAPI.logout(refreshToken);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('hospital_user');
      localStorage.removeItem('hospital_auth');
      localStorage.removeItem('hospital_token');
      localStorage.removeItem('hospital_refresh_token');
    }
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  const getRedirectPath = (role) => {
    switch (role) {
      case 'admin':
        return '/admin/dashboard';
      case 'patient':
        return '/patient/dashboard';
      default:
        return '/';
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    forgotPassword,
    logout,
    hasRole,
    getRedirectPath,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};