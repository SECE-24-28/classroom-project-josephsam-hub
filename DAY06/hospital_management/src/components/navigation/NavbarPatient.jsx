import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const NavbarPatient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Dashboard', path: '/patient/dashboard', icon: '📊' },
    { name: 'Appointments', path: '/patient/appointments', icon: '📅' },
    { name: 'Lab Reports', path: '/patient/lab-reports', icon: '🧪' },
    { name: 'Medical Records', path: '/patient/medical-records', icon: '📋' },
    { name: 'Prescriptions', path: '/patient/prescriptions', icon: '💊' },
    { name: 'Billing', path: '/patient/billing', icon: '💳' },
    { name: 'Profile', path: '/patient/profile', icon: '👤' },
    { name: 'Support', path: '/patient/support', icon: '🆘' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/patient/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hospital rounded-lg flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="1.5" fill="white"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">Patient Portal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-hospital-red bg-red-50'
                    : 'text-gray-700 hover:text-hospital-red hover:bg-gray-50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Toggle Dark Mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">{user?.avatar || '👤'}</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">{user?.name || 'Patient'}</p>
                <p className="text-xs text-gray-500">ID: #{user?.id || '12345'}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-hospital-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-hospital-red p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-hospital-red bg-red-50'
                      : 'text-gray-700 hover:text-hospital-red hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarPatient;