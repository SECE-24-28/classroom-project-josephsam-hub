import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const NavbarPublic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme, language, changeLanguage, toggleAccessibility, isAccessibilityMode } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hospital rounded-lg flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="1.5" fill="white"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Joe Hospital</h1>
                <p className="text-xs text-gray-600">Caring for Life, Connected by Heart</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={location.pathname === item.path ? 'nav-link-active' : 'nav-link'}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="btn-secondary text-sm py-2 px-4">
                Login
              </Link>
              <Link to="/emergency" className="btn-primary text-sm py-2 px-4">
                Emergency
              </Link>
            </div>

            {/* Theme & Settings */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Toggle Dark Mode"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              
              <button
                onClick={toggleAccessibility}
                className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isAccessibilityMode ? 'bg-red-100' : ''}`}
                title="Accessibility Mode"
              >
                👁️
              </button>

              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="text-sm border rounded px-2 py-1"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-hospital-red bg-red-50'
                      : 'text-gray-700 hover:text-hospital-red hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-2 px-3 py-2">
                <Link to="/login" className="btn-secondary text-sm py-2 px-4 flex-1 text-center">
                  Login
                </Link>
                <Link to="/emergency" className="btn-primary text-sm py-2 px-4 flex-1 text-center">
                  Emergency
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarPublic;