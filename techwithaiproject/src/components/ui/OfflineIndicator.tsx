import React from 'react';
import { WifiOff } from 'lucide-react';

const OfflineIndicator: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white py-1 px-4 z-50 flex items-center justify-center">
      <WifiOff size={16} className="mr-2" />
      <span className="text-sm font-medium">You're offline. Limited features available.</span>
    </div>
  );
};

export default OfflineIndicator;