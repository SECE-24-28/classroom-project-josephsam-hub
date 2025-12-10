import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedAccessibility = localStorage.getItem('accessibility');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedAccessibility === 'true') {
      setIsAccessibilityMode(true);
      document.documentElement.classList.add('accessibility-large');
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleAccessibility = () => {
    setIsAccessibilityMode(!isAccessibilityMode);
    if (!isAccessibilityMode) {
      document.documentElement.classList.add('accessibility-large');
      localStorage.setItem('accessibility', 'true');
    } else {
      document.documentElement.classList.remove('accessibility-large');
      localStorage.setItem('accessibility', 'false');
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const value = {
    isDark,
    isAccessibilityMode,
    language,
    toggleTheme,
    toggleAccessibility,
    changeLanguage,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};