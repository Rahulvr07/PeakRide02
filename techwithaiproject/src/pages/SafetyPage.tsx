import React from 'react';
import { Shield, AlertTriangle, Users, Car, MapPin, Phone, Bell, CheckCircle, Clock, Wifi } from 'lucide-react';
import SOSButton from '../components/emergency/SOSButton';

const SafetyPage: React.FC = () => {
  const safetyFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: 'Driver Verification',
      description: 'All drivers undergo thorough background checks and verification process.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: 'SOS Alert System',
      description: 'One-tap emergency assistance with location sharing capabilities.',
    },
    {
      icon: <Car className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: 'Vehicle Safety',
      description: 'Regular vehicle inspections and maintenance checks.',
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: 'Route Monitoring',
      description: 'Real-time tracking and route deviation alerts.',
    },
    {
      icon: <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency assistance.',
    },
    {
      icon: <Bell className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: 'Weather Alerts',
      description: 'Real-time weather updates and safety advisories.',
    },
  ];

  const safetyTips = [
    'Always wear your seatbelt',
    'Keep emergency contacts updated',
    'Share your ride details with family',
    'Stay alert during night travel',
    'Follow weather advisories',
    'Keep essential medicines handy',
    'Download offline maps',
    'Carry warm clothes',
  ];

  const emergencyContacts = [
    { name: 'Police', number: '100' },
    { name: 'Ambulance', number: '108' },
    { name: 'Tourist Helpline', number: '1363' },
    { name: 'Road Emergency', number: '1073' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6782567/pex els-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Safety is Our Priority</h1>
            <p className="text-xl text-white/80 mb-8">
              Advanced safety features and protocols designed specifically for hill station travel.
            </p>
            <SOSButton className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Features</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Comprehensive safety measures to ensure worry-free travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="card p-6">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Emergency Response System</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Quick and efficient emergency response protocol.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">SOS Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">One-Tap Alert</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Instantly alert emergency services and share your location.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Emergency Contacts</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Automatic notifications to your emergency contacts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">24/7 Support Team</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Dedicated team to handle emergency situations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <span className="font-medium">{contact.name}</span>
                      <a
                        href={`tel:${contact.number}`}
                        className="flex items-center text-primary-600 dark:text-primary-400"
                      >
                        <Phone size={16} className="mr-1" />
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Travel Safety Tips</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Essential tips for safe hill station travel.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyTips.map((tip, index) => (
              <div key={index} className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">
                    {index + 1}
                  </span>
                </div>
                <span className="text-slate-700 dark:text-slate-300">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Safety Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Weather Safety</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Stay informed about weather conditions for safer travel.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <Bell className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Weather Alerts</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Real-time weather updates and alerts for your route.
              </p>
            </div>
            <div className="card p-6">
              <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Route Planning</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Adjust travel times based on weather forecasts.
              </p>
            </div>
            <div className="card p-6">
              <Wifi className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Offline Access</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Access safety features even without internet connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Travel with Confidence</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experience safe and reliable transportation in hill stations with PeakRide.
          </p>
          <button className="btn-accent btn-large">
            Book a Safe Ride
          </button>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;