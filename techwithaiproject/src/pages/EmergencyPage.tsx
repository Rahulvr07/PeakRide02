import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, ShieldAlert, MapPin, User, Bell, AlertTriangle } from 'lucide-react';
import SOSButton from '../components/emergency/SOSButton';

const EmergencyPage: React.FC = () => {
  const navigate = useNavigate();
  
  const emergencyContacts = [
    { name: 'Local Police', number: '100', icon: <ShieldAlert size={20} className="text-secondary-600 dark:text-secondary-400" /> },
    { name: 'Ambulance', number: '108', icon: <ShieldAlert size={20} className="text-red-500" /> },
    { name: 'Tourist Helpline', number: '1363', icon: <User size={20} className="text-primary-600 dark:text-primary-400" /> },
    { name: 'Road Emergency', number: '1073', icon: <ShieldAlert size={20} className="text-amber-500" /> },
  ];
  
  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Emergency Services</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Access emergency assistance, even in low connectivity hill areas.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Main SOS Button */}
          <div className="card p-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold mb-2">Send Emergency Alert</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Tap the SOS button to alert emergency services and share your location.
              </p>
            </div>
            
            <div className="flex justify-center mb-6">
              <SOSButton className="w-48 h-48 text-xl" />
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle size={20} className="text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium mb-1">What happens when you press SOS?</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc ml-4">
                    <li>Your exact location is sent to emergency services</li>
                    <li>An SMS is dispatched (works without internet)</li>
                    <li>Local emergency contacts are notified</li>
                    <li>PeakRide support team is alerted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Contacts */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
            
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleEmergencyCall(contact.number)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-3">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{contact.number}</p>
                    </div>
                  </div>
                  
                  <button className="btn-secondary btn-small">
                    <Phone size={16} className="mr-1.5" />
                    Call
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Current Ride */}
          <div className="card p-4">
            <h3 className="font-semibold mb-3">Current Ride</h3>
            <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg mb-4">
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">No active ride</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Book a ride to enable ride-specific emergency features.</p>
            </div>
            <button 
              className="btn-primary w-full"
              onClick={() => navigate('/book')}
            >
              Book a Ride
            </button>
          </div>
          
          {/* Local Emergency Info */}
          <div className="card p-4">
            <h3 className="font-semibold mb-3">Local Emergency Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Nearest Hospital</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Indira Gandhi Medical College, Shimla</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">2.5 km away</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Nearest Police Station</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Mall Road Police Station</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">1.2 km away</p>
                </div>
              </li>
              <li className="flex items-start">
                <Bell size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Weather Alerts</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400">Light rain expected in 3 hours</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Emergency Contacts */}
          <div className="card p-4">
            <h3 className="font-semibold mb-3">My Emergency Contacts</h3>
            
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              <div className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <User size={16} className="text-slate-500 mr-2" />
                  <span className="text-sm">Add a family member</span>
                </div>
                <button className="text-primary-600 dark:text-primary-400 text-sm">
                  Add
                </button>
              </div>
              <div className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <MessageSquare size={16} className="text-slate-500 mr-2" />
                  <span className="text-sm">Set emergency message</span>
                </div>
                <button className="text-primary-600 dark:text-primary-400 text-sm">
                  Set
                </button>
              </div>
            </div>
            
            <div className="mt-4 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Your emergency contacts will receive your location and a distress message when you press the SOS button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;