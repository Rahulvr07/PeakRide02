import React, { useState } from 'react';
import { User, Shield, Clock, MapPin, Settings, LogOut, ChevronRight, Truck, Users, CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const mockPastRides = [
  {
    id: '12345',
    date: '2023-10-15',
    from: 'Mall Road, Shimla',
    to: 'Kufri',
    amount: 950,
    vehicle: 'Jeep',
  },
  {
    id: '12344',
    date: '2023-10-12',
    from: 'Shimla Bus Stand',
    to: 'Mall Road, Shimla',
    amount: 450,
    vehicle: 'Shared',
  },
  {
    id: '12343',
    date: '2023-10-05',
    from: 'Kufri',
    to: 'Shimla Bus Stand',
    amount: 850,
    vehicle: 'Jeep',
  },
];

const ProfilePage: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'rides' | 'preferences'>('profile');
  
  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <LoginComponent onLogin={login} />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Summary */}
          <div className="card p-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-3">
                <User size={32} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="font-semibold text-lg">Rahul Sharma</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">+91 98765 43210</p>
              <div className="badge-primary">Premium Member</div>
              
              <div className="w-full mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <button 
                  className="flex items-center justify-center w-full text-sm text-red-600 dark:text-red-400 hover:underline"
                  onClick={logout}
                >
                  <LogOut size={16} className="mr-1.5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="md:col-span-3 space-y-6">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-700">
              <button
                className={`pb-3 px-4 text-sm font-medium ${
                  activeTab === 'profile'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button
                className={`pb-3 px-4 text-sm font-medium ${
                  activeTab === 'rides'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300'
                }`}
                onClick={() => setActiveTab('rides')}
              >
                My Rides
              </button>
              <button
                className={`pb-3 px-4 text-sm font-medium ${
                  activeTab === 'preferences'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300'
                }`}
                onClick={() => setActiveTab('preferences')}
              >
                Preferences
              </button>
            </div>
            
            {/* Profile Tab Content */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="input"
                        value="Rahul Sharma"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="input"
                        value="+91 98765 43210"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="input"
                        value="rahul.sharma@example.com"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Emergency Contact
                      </label>
                      <input
                        type="text"
                        className="input"
                        value="+91 99999 88888"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="btn-primary">
                      Edit Information
                    </button>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Account Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg text-center">
                      <Truck size={24} className="text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                      <p className="text-xl font-bold">32</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Total Rides</p>
                    </div>
                    <div className="bg-secondary-50 dark:bg-secondary-900/30 p-4 rounded-lg text-center">
                      <MapPin size={24} className="text-secondary-600 dark:text-secondary-400 mx-auto mb-2" />
                      <p className="text-xl font-bold">5</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Locations</p>
                    </div>
                    <div className="bg-accent-50 dark:bg-accent-900/30 p-4 rounded-lg text-center">
                      <CreditCard size={24} className="text-accent-500 mx-auto mb-2" />
                      <p className="text-xl font-bold">₹15K</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Spent</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center">
                      <Users size={24} className="text-slate-600 dark:text-slate-400 mx-auto mb-2" />
                      <p className="text-xl font-bold">18</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Co-travelers</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Rides Tab Content */}
            {activeTab === 'rides' && (
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Past Rides</h3>
                  <div className="space-y-4">
                    {mockPastRides.map((ride) => (
                      <div 
                        key={ride.id}
                        className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-sm transition-shadow"
                      >
                        <div>
                          <div className="flex items-center mb-1">
                            <Badge type={ride.vehicle.toLowerCase() as any} />
                            <p className="text-sm font-medium ml-2">{ride.from} to {ride.to}</p>
                          </div>
                          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                            <Clock size={12} className="mr-1" />
                            <span>{new Date(ride.date).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>₹{ride.amount}</span>
                          </div>
                        </div>
                        <button className="text-primary-600 dark:text-primary-400">
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-center">
                    <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                      View All Rides
                    </button>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Favorite Destinations</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin size={18} className="text-slate-500 mr-2" />
                        <span className="text-sm">Mall Road, Shimla</span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">12 rides</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin size={18} className="text-slate-500 mr-2" />
                        <span className="text-sm">Kufri</span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">8 rides</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin size={18} className="text-slate-500 mr-2" />
                        <span className="text-sm">Shimla Bus Stand</span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">5 rides</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Preferences Tab Content */}
            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">App Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Shield size={18} className="text-slate-600 dark:text-slate-400 mr-3" />
                        <span>Location Services</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bell size={18} className="text-slate-600 dark:text-slate-400 mr-3" />
                        <span>Notifications</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Settings size={18} className="text-slate-600 dark:text-slate-400 mr-3" />
                        <span>Offline Maps</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-6 bg-slate-800 dark:bg-slate-700 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="text-sm font-medium">Visa ending in 4242</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Expires 04/25</p>
                        </div>
                      </div>
                      <div className="badge-success">Default</div>
                    </div>
                    
                    <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-6 bg-amber-500 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">
                          MC
                        </div>
                        <div>
                          <p className="text-sm font-medium">Mastercard ending in 8888</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Expires 09/26</p>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline flex items-center mt-3">
                      <CreditCard size={16} className="mr-1.5" />
                      Add Payment Method
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Badge component for ride types
interface BadgeProps {
  type: 'jeep' | 'bike' | 'shared';
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  const styles = {
    jeep: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-100',
    bike: 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-100',
    shared: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100',
  };
  
  const labels = {
    jeep: 'Jeep',
    bike: 'Bike',
    shared: 'Shared',
  };
  
  const icons = {
    jeep: <Truck size={12} className="mr-1" />,
    bike: <Truck size={12} className="mr-1" />,
    shared: <Users size={12} className="mr-1" />,
  };
  
  return (
    <span className={`badge ${styles[type]} flex items-center`}>
      {icons[type]}
      {labels[type]}
    </span>
  );
};

// Login Component
interface LoginComponentProps {
  onLogin: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send OTP to this phone number
    setShowOtpInput(true);
  };
  
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would verify the OTP
    onLogin();
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <User size={32} className="text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to PeakRide</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Sign in to access your rides, track bookings, and manage your account.
          </p>
        </div>
        
        <div className="card p-6">
          {!showOtpInput ? (
            <form onSubmit={handleSendOtp}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    We'll send a verification code to this number
                  </p>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send OTP
                </button>
                
                <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    OTP sent to {phoneNumber}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <button 
                    type="button" 
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    onClick={() => setShowOtpInput(false)}
                  >
                    Change number
                  </button>
                  <button 
                    type="button" 
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Resend OTP
                  </button>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Verify & Sign In
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;