import React from 'react';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizes[size]} bg-gradient-hospital rounded-lg flex items-center justify-center shadow-lg`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="1.5" fill="white"/>
        </svg>
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-bold text-gray-900`}>Joe Hospital</h1>
          {size !== 'sm' && (
            <p className="text-xs text-gray-600">Caring for Life, Connected by Heart</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;