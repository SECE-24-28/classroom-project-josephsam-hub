import React, { createContext, useContext, useState, useEffect } from 'react';

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

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('hospital_user');
    const savedAuth = localStorage.getItem('hospital_auth');
    
    if (savedUser && savedAuth === 'true') {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Mock login function (frontend only)
  const login = async (credentials) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock authentication logic
      const { email, password, role } = credentials;
      
      // Simple validation for demo
      if (email && password.length >= 6) {
        const mockUser = {
          id: Date.now(),
          email,
          role: role || 'patient',
          name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          avatar: role === 'admin' ? '👨‍⚕️' : '👤',
          loginTime: new Date().toISOString()
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        
        // Persist to localStorage
        localStorage.setItem('hospital_user', JSON.stringify(mockUser));
        localStorage.setItem('hospital_auth', 'true');
        
        return { success: true, user: mockUser };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Login failed. Please check your credentials.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Mock register function
  const register = async (userData) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const { email, password, fullName, role } = userData;
      
      if (email && password && fullName) {
        const mockUser = {
          id: Date.now(),
          email,
          name: fullName,
          role: role || 'patient',
          avatar: role === 'admin' ? '👨‍⚕️' : '👤',
          registrationTime: new Date().toISOString()
        };
        
        return { success: true, user: mockUser };
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Registration failed. Please try again.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Forgot password function
  const forgotPassword = async (email) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email) {
        return { 
          success: true, 
          message: 'Password reset link has been sent to your email address.' 
        };
      } else {
        throw new Error('Email is required');
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to send reset link.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('hospital_user');
    localStorage.removeItem('hospital_auth');
  };

  // Check if user has specific role
  const hasRole = (role) => {
    return user?.role === role;
  };

  // Get redirect path based on role
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