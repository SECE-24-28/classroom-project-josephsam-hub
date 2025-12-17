import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-hospital flex items-center justify-center">
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-red-100 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/" className="inline-block bg-white text-hospital-red px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            🏠 Go Home
          </Link>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/login" className="text-white hover:text-red-200 underline">Login</Link>
            <Link to="/contact" className="text-white hover:text-red-200 underline">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;