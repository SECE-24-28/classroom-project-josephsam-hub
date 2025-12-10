import React, { useState } from 'react';

const FloatingButtons = () => {
  const [showChat, setShowChat] = useState(false);

  const handleEmergencyCall = () => {
    // In a real app, this would initiate an emergency call
    alert('Emergency services contacted! Help is on the way.');
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      {/* Emergency Call Button */}
      <button
        onClick={handleEmergencyCall}
        className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center z-50 animate-pulse-slow"
        title="Emergency Call"
      >
        <span className="text-2xl">🚨</span>
      </button>

      {/* Chat Support Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-24 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center z-50"
        title="Chat Support"
      >
        <span className="text-xl">💬</span>
      </button>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-hospital text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">👨⚕️</span>
              </div>
              <div>
                <h4 className="font-semibold">Medical Support</h4>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 rounded p-1"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-hospital-red rounded-full flex items-center justify-center text-xs text-white">
                  JH
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-sm">Hello! How can I help you today?</p>
                  <p className="text-xs text-gray-500 mt-1">Just now</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-hospital-red text-white p-3 rounded-lg max-w-xs">
                  <p className="text-sm">I need help with booking an appointment</p>
                  <p className="text-xs opacity-75 mt-1">Just now</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-hospital-red rounded-full flex items-center justify-center text-xs text-white">
                  JH
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-sm">I'd be happy to help! You can book an appointment through our patient portal or call us at (555) 123-4567.</p>
                  <p className="text-xs text-gray-500 mt-1">Just now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-red focus:border-transparent"
              />
              <button className="bg-hospital-red text-white px-4 py-2 rounded-lg hover:bg-hospital-darkRed transition-colors">
                <span className="text-sm">Send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Style Floating Action */}
      <div className="fixed bottom-32 right-6 z-40">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center animate-float"
          title="WhatsApp Support"
        >
          <span className="text-lg">📱</span>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;