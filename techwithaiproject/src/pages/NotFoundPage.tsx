import React from 'react';
import { Link } from 'react-router-dom';
import { ZapOff as MapOff, Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <MapOff size={48} className="text-slate-500" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Lost in the Hills?</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The page you're looking for seems to have wandered off the trail. Let's get you back to safety!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="btn-primary w-full sm:w-auto">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <Link to="/book" className="btn-outline w-full sm:w-auto">
            <Search size={18} className="mr-2" />
            Book a Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;