import React, { useState } from 'react';
import { AlertOctagon, PhoneCall, AlertCircle } from 'lucide-react';

interface SOSButtonProps {
  className?: string;
}

const SOSButton: React.FC<SOSButtonProps> = ({ className = '' }) => {
  const [isActive, setIsActive] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleSOSClick = () => {
    if (isActive) {
      // Cancel SOS
      setIsActive(false);
      return;
    }
    
    // Start confirmation countdown
    setShowConfirmation(true);
    setCountdown(3);
    
    const intervalId = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setShowConfirmation(false);
          setIsActive(true);
          // Trigger SOS alert in a real app
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  const handleCancel = () => {
    setShowConfirmation(false);
  };
  
  return (
    <>
      <button
        className={`relative ${
          isActive 
            ? 'bg-red-500 text-white animate-pulse'
            : 'bg-white dark:bg-slate-800 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-slate-700'
        } rounded-full p-4 shadow-lg transition-all duration-300 ${className}`}
        onClick={handleSOSClick}
        aria-label={isActive ? 'Cancel emergency alert' : 'Send emergency alert'}
      >
        {isActive ? (
          <div className="flex items-center">
            <AlertOctagon size={24} className="animate-pulse" />
            <span className="ml-2 font-bold">SOS ACTIVE</span>
          </div>
        ) : (
          <div className="flex items-center">
            <AlertOctagon size={24} />
            <span className="ml-2 font-bold">SOS</span>
          </div>
        )}
      </button>
      
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full mx-4 animate-slide-in">
            <div className="text-center mb-4">
              <AlertCircle size={48} className="text-red-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold">Confirm Emergency Alert</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                SOS will be sent in {countdown} seconds. This will alert emergency services.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                onClick={handleSOSClick}
              >
                <AlertOctagon size={18} className="mr-2" />
                Send SOS Now
              </button>
              
              <button
                className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 py-3 rounded-lg font-medium transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>
              
              <div className="border-t border-slate-200 dark:border-slate-700 pt-3 mt-3">
                <a
                  href="tel:108"
                  className="w-full flex items-center justify-center text-secondary-600 dark:text-secondary-400 hover:underline font-medium"
                >
                  <PhoneCall size={18} className="mr-2" />
                  Call Emergency Services
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SOSButton;