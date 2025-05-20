import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Phone, MessageCircle, Share2, AlertTriangle, 
  Navigation, UserCheck, ShieldCheck, Users, Umbrella, 
  Car 
} from 'lucide-react';
import LiveMap from '../components/tracking/LiveMap';
import SOSButton from '../components/emergency/SOSButton';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

const TrackingPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const isOnline = useNetworkStatus();
  const [tripStatus, setTripStatus] = useState<'arriving' | 'onTrip' | 'nearDestination'>('arriving');
  const [etaMinutes, setEtaMinutes] = useState(8);
  const [showDriverInfo, setShowDriverInfo] = useState(false);
  
  // Mock decreasing ETA every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setEtaMinutes(prev => {
        if (prev <= 1) {
          setTripStatus('onTrip');
          return 22; // Set new ETA for destination
        }
        return prev - 1;
      });
      
      // Change status when appropriate
      if (tripStatus === 'onTrip' && etaMinutes <= 5) {
        setTripStatus('nearDestination');
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }, [tripStatus, etaMinutes]);
  
  const driverInfo = {
    name: "Rajendra Singh",
    rating: 4.8,
    vehicle: "Mahindra Thar",
    licensePlate: "HP 01 AB 1234",
    trips: 387,
    verified: true,
  };
  
  return (
    <div className="h-screen flex flex-col">
      {/* Live Map */}
      <div className="flex-1 relative">
        <LiveMap showDriverLocation showUserLocation isOffline={!isOnline} />
        
        {/* Top status bar */}
        <div className="absolute top-4 left-0 right-0 mx-auto w-max px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg z-20 flex items-center space-x-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-green-500' : 'bg-amber-500'}`}></span>
          <span className="text-sm font-medium">
            {isOnline ? 'Live Tracking' : 'Offline Mode'}
          </span>
        </div>
        
        {/* Driver arriving notification */}
        {tripStatus === 'arriving' && (
          <div className="absolute top-16 left-4 right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg z-10 animate-slide-in">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">Driver arriving in {etaMinutes} min</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {driverInfo.vehicle} · {driverInfo.licensePlate}
                </p>
              </div>
              <button 
                className="btn-outline btn-small flex items-center"
                onClick={() => setShowDriverInfo(!showDriverInfo)}
              >
                <UserCheck size={16} className="mr-1.5" />
                Driver Info
              </button>
            </div>
            
            {showDriverInfo && (
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 mr-3"></div>
                  <div>
                    <h3 className="font-medium">{driverInfo.name}</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg 
                            key={star}
                            className={`w-4 h-4 ${star <= Math.round(driverInfo.rating) ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                        {driverInfo.rating} · {driverInfo.trips} trips
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-3">
                  <div className="flex-1 bg-primary-50 dark:bg-primary-900/30 rounded-lg p-2 flex items-center justify-center">
                    <Car size={16} className="text-primary-600 dark:text-primary-400 mr-1.5" />
                    <span className="text-xs">{driverInfo.vehicle}</span>
                  </div>
                  <div className="flex-1 bg-primary-50 dark:bg-primary-900/30 rounded-lg p-2 flex items-center justify-center">
                    <ShieldCheck size={16} className="text-primary-600 dark:text-primary-400 mr-1.5" />
                    <span className="text-xs">Verified</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 btn-secondary btn-small">
                    <Phone size={16} className="mr-1.5" />
                    Call
                  </button>
                  <button className="flex-1 btn-outline btn-small">
                    <MessageCircle size={16} className="mr-1.5" />
                    Message
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Bottom tracking panel */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold">
                {tripStatus === 'arriving' && 'Driver arriving soon'}
                {tripStatus === 'onTrip' && 'On the way to destination'}
                {tripStatus === 'nearDestination' && 'Almost there!'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {tripStatus === 'arriving' && `${etaMinutes} minutes away`}
                {tripStatus === 'onTrip' && `${etaMinutes} minutes to destination`}
                {tripStatus === 'nearDestination' && `${etaMinutes} minutes to destination`}
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Share2 size={18} className="text-slate-700 dark:text-slate-300" />
              </button>
              
              <SOSButton className="h-10" />
            </div>
          </div>
          
          {/* Trip conditions */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Umbrella size={16} className="text-slate-500 mr-1.5" />
                <span className="text-sm">Light rain</span>
              </div>
              <div className="flex items-center">
                <Navigation size={16} className="text-slate-500 mr-1.5" />
                <span className="text-sm">Hilly terrain</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="text-slate-500 mr-1.5" />
                <span className="text-sm">3 passengers</span>
              </div>
            </div>
          </div>
          
          {!isOnline && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-3 mb-4">
              <div className="flex items-start">
                <AlertTriangle size={18} className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  You're in offline mode. Location updates will be limited until connection is restored.
                </p>
              </div>
            </div>
          )}
          
          {/* Ride Details */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Booking ID
              </span>
              <span className="text-sm font-medium">
                {bookingId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Pickup
              </span>
              <span className="text-sm font-medium">
                Mall Road, Shimla
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Destination
              </span>
              <span className="text-sm font-medium">
                Kufri
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Payment
              </span>
              <span className="text-sm font-medium">
                ₹950 (Prepaid)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;