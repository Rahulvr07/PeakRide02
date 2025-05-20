import React from 'react';
import BookingForm from '../components/booking/BookingForm';
import { Calendar, Clock, Users, CreditCard, Truck, Umbrella } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Book a Ride</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Fill in the details below to book your hill station transportation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <BookingForm />
          </div>
          
          <div className="space-y-6">
            <div className="card p-4">
              <h3 className="font-semibold mb-3">Booking Tips</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Calendar size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Book at least 2 hours in advance for best rates</span>
                </li>
                <li className="flex items-start">
                  <Clock size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Morning rides (6-9 AM) tend to have lower wait times</span>
                </li>
                <li className="flex items-start">
                  <Users size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Shared rides are 60% cheaper than private jeeps</span>
                </li>
                <li className="flex items-start">
                  <CreditCard size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Cash and online payment options available</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-4">
              <h3 className="font-semibold mb-3">Current Conditions</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Umbrella size={20} className="text-secondary-600 dark:text-secondary-400 mr-2" />
                  <span className="text-sm">Light rain expected</span>
                </div>
                <span className="text-sm font-medium">12°C</span>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-3">
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  <span className="font-medium">Note:</span> Road conditions may be slippery. 
                  Choose 4x4 Jeeps for hilly terrain today.
                </p>
              </div>
            </div>
            
            <div className="card p-4">
              <h3 className="font-semibold mb-3">Popular Destinations</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Mall Road, Shimla</span>
                    <Truck size={16} className="text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Old Manali</span>
                    <Truck size={16} className="text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Nainital Lake</span>
                    <Truck size={16} className="text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Mussoorie, The Mall</span>
                    <Truck size={16} className="text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;