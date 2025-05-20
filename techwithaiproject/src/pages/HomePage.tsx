import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Shield, Clock, Wifi, ChevronRight } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';
import { useTranslation } from '../hooks/useTranslation';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { translate } = useTranslation();
  
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: translate('Hill Station Coverage'),
      description: translate('Specialized transportation solutions across 5 major hill stations in India.'),
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: translate('Safety Focused'),
      description: translate('SOS alerts, driver verification, and safety toolkit for peace of mind.'),
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: translate('Real-time Tracking'),
      description: translate('Know exactly where your ride is and get accurate ETAs even in low-signal areas.'),
    },
    {
      icon: <Wifi className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: translate('Works Offline'),
      description: translate('Book and track rides even without consistent internet connectivity.'),
    },
  ];
  
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Shimla",
      text: "PeakRide was a lifesaver during my trip to Shimla. When my phone lost connection, I could still track my jeep using the offline mode!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Manali",
      text: "As a frequent traveler to hill stations, I've tried many services. PeakRide offers the most reliable transportation with reasonable prices.",
      rating: 4,
    },
    {
      name: "Anita Desai",
      location: "Mussoorie",
      text: "The SOS feature gave me confidence when traveling alone. Thankfully I didn't need it, but knowing it was there was reassuring.",
      rating: 5,
    },
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/733162/pexels-photo-733162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {translate('Reliable Transportation in Hill Stations')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              {translate('Book jeeps, bikes, and shared rides with real-time tracking that works even in poor network areas.')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="btn-accent btn-large"
                onClick={() => navigate('/book')}
              >
                {translate('Book a Ride')}
              </button>
              <button 
                className="btn-outline bg-transparent text-white border-white hover:bg-white/10 btn-large"
                onClick={() => navigate('/emergency')}
              >
                {translate('Emergency Services')}
              </button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 -mb-24">
          <div className="max-w-3xl lg:max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-white dark:bg-slate-900 py-32 md:py-36">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {translate('Travel Safely in Hill Stations')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {translate('PeakRide is designed specifically for hill station transportation challenges, offering reliable service even in remote areas.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-primary-100 dark:bg-primary-900/50 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {translate('What Our Travelers Say')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {translate('Hear from people who have used PeakRide during their hill station adventures.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">"{testimonial.text}"</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {translate('Ready for your hill station adventure?')}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            {translate('Download the PeakRide app to access offline maps, real-time tracking, and emergency services during your trip.')}
          </p>
          <button 
            className="btn-accent btn-large"
            onClick={() => navigate('/book')}
          >
            {translate('Book Your Ride Now')} <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;