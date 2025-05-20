import React, { useState } from 'react';
import { 
  Car, MapPin, Clock, DollarSign, Users, Bell, 
  ChevronRight, Shield, AlertTriangle, Settings 
} from 'lucide-react';

const DriverDashboardPage: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  const todayStats = {
    rides: 5,
    earnings: 2450,
    hours: 6,
    rating: 4.8,
  };

  const upcomingRides = [
    {
      id: 1,
      pickup: 'Mall Road, Shimla',
      destination: 'Kufri',
      time: '2:30 PM',
      passengers: 4,
      fare: 850,
    },
    {
      id: 2,
      pickup: 'Shimla Bus Stand',
      destination: 'Mall Road',
      time: '4:00 PM',
      passengers: 2,
      fare: 450,
    },
  ];

  const recentRides = [
    {
      id: 101,
      date: '2024-03-15',
      pickup: 'Mall Road',
      destination: 'Kufri',
      fare: 950,
      rating: 5,
    },
    {
      id: 102,
      date: '2024-03-15',
      pickup: 'Shimla Bus Stand',
      destination: 'Mall Road',
      fare: 450,
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Welcome, Rajendra</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">HP 01 AB 1234</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                <Settings className="w-6 h-6" />
              </button>
              <button 
                className={`px-4 py-2 rounded-full font-medium ${
                  isOnline 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}
                onClick={() => setIsOnline(!isOnline)}
              >
                {isOnline ? 'Online' : 'Offline'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <Car className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">Today's Rides</span>
                </div>
                <div className="text-2xl font-bold">{todayStats.rides}</div>
              </div>
              
              <div className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">Earnings</span>
                </div>
                <div className="text-2xl font-bold">₹{todayStats.earnings}</div>
              </div>
              
              <div className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">Hours</span>
                </div>
                <div className="text-2xl font-bold">{todayStats.hours}h</div>
              </div>
              
              <div className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <Star className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">Rating</span>
                </div>
                <div className="text-2xl font-bold">{todayStats.rating}</div>
              </div>
            </div>

            {/* Upcoming Rides */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Rides</h2>
              <div className="space-y-4">
                {upcomingRides.map(ride => (
                  <div 
                    key={ride.id}
                    className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                        <span className="font-medium">{ride.pickup}</span>
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                        <span className="font-medium">{ride.destination}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{ride.time}</span>
                        <span className="mx-2">•</span>
                        <Users className="w-4 h-4 mr-1" />
                        <span>{ride.passengers} passengers</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">₹{ride.fare}</div>
                      <button className="btn-primary btn-small mt-2">
                        Accept
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Rides */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Rides</h2>
              <div className="space-y-4">
                {recentRides.map(ride => (
                  <div 
                    key={ride.id}
                    className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  >
                    <div>
                      <div className="flex items-center mb-2">
                        <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                        <span className="font-medium">{ride.pickup}</span>
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                        <span className="font-medium">{ride.destination}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{new Date(ride.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">₹{ride.fare}</div>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`w-4 h-4 ${
                              index < ride.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weather Alert */}
            <div className="card p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Weather Alert</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Light rain expected in Shimla region. Drive carefully and maintain safe distance.
                  </p>
                </div>
              </div>
            </div>

            {/* Vehicle Status */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Vehicle Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Vehicle Check</span>
                  <span className="badge-success">Passed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Insurance</span>
                  <span className="badge-success">Valid</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Permit</span>
                  <span className="badge-warning">Renew Soon</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="btn-outline w-full justify-start">
                  <Shield className="w-5 h-5 mr-2" />
                  Update Documents
                </button>
                <button className="btn-outline w-full justify-start">
                  <Settings className="w-5 h-5 mr-2" />
                  Account Settings
                </button>
                <button className="btn-outline w-full justify-start">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default DriverDashboardPage;