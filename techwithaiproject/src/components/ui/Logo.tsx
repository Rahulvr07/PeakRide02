import React from 'react';
import { Mountain } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Mountain size={28} className="text-primary-600 dark:text-primary-400" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full" />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
        PeakRide
      </span>
    </div>
  );
};

export default Logo;