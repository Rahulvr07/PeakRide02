import React from 'react';
import { Truck, Bike, Users, Shield, Clock, MapPin, Wifi, CreditCard, Umbrella, Mountain } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      name: 'Mountain Jeep',
      description: 'Comfortable 4x4 jeeps perfect for mountain terrain and group travel.',
      features: [
        '4-6 seater vehicles',
        'Experienced mountain drivers',
        'Luggage space',
        'All-weather capability',
      ],
      price: 'Starting from ₹1200',
    },
    {
      icon: <Bike className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      name: 'Hill Rider',
      description: 'Quick and agile bikes for solo travelers or couples.',
      features: [
        '1-2 seater options',
        'Fuel-efficient',
        'Easy maneuverability',
        'Ideal for short trips',
      ],
      price: 'Starting from ₹800',
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      name: 'Shared Traveller',
      description: 'Economic shared rides for budget-conscious travelers.',
      features: [
        'Fixed routes',
        'Multiple pickup points',
        'Cost-effective',
        'Meet fellow travelers',
      ],
      price: 'Starting from ₹450',
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety First',
      description: 'Verified drivers and vehicles with real-time tracking.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service for your convenience.',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Wide Coverage',
      description: 'Service available across major hill stations.',
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Offline Mode',
      description: 'Works even in low connectivity areas.',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Easy Payments',
      description: 'Multiple payment options including cash.',
    },
    {
      icon: <Umbrella className="w-6 h-6" />,
      title: 'Weather Updates',
      description: 'Real-time weather alerts and road conditions.',
    },
  ];

  const destinations = [
    {
      name: 'Shimla',
      image: 'https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      routes: ['Mall Road', 'Kufri', 'Chail', 'Naldehra'],
    },
    {
      name: 'Manali',
      image: 'https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      routes: ['Old Manali', 'Solang Valley', 'Rohtang Pass', 'Hadimba Temple'],
    },
    {
      name: 'Mussoorie',
      image: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      routes: ['The Mall', 'Kempty Falls', 'Lal Tibba', 'Cloud' ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              Choose from our range of transportation options designed specifically for hill station travel.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transportation Options</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Select the perfect ride for your hill station adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="card p-6">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Features</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Experience hassle-free travel with our comprehensive features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explore our most requested routes and destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {destinations.map((destination, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium mb-2">Popular Routes:</h4>
                  <ul className="space-y-2">
                    {destination.routes.map((route, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <MapPin size={14} className="mr-2" />
                        {route}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Clear and upfront pricing with no hidden charges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Base Rates</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">First 5 km</span>
                  <span className="font-medium">₹300</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">Per km after</span>
                  <span className="font-medium">₹40</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">Waiting charge</span>
                  <span className="font-medium">₹2/min</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Night charge</span>
                  <span className="font-medium">+20%</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Package Deals</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">4 hours / 40 km</span>
                  <span className="font-medium">₹2000</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">8 hours / 80 km</span>
                  <span className="font-medium">₹3500</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">Full day sightseeing</span>
                  <span className="font-medium">₹4500</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Weekend trips</span>
                  <span className="font-medium">Custom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book your ride now and experience hassle-free hill station travel.
          </p>
          <button className="btn-accent btn-large">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;