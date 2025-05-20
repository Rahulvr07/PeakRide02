import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Navigation, Compass } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';

interface LiveMapProps {
  center?: [number, number];
  zoom?: number;
  showUserLocation?: boolean;
  showDriverLocation?: boolean;
  isOffline?: boolean;
}

const LiveMap: React.FC<LiveMapProps> = ({
  center = [30.9, 77.1], // Shimla coordinates as default
  zoom = 13,
  showUserLocation = true,
  showDriverLocation = true,
  isOffline = false,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { activeBooking } = useBooking();
  const [compassHeading, setCompassHeading] = useState<number | null>(null);
  
  // Mock map implementation
  // This would be replaced with actual map integration using Mapbox or Google Maps
  useEffect(() => {
    if (mapRef.current) {
      // Mock map initialization - in real implementation, this would be map.create()
      const mockMap = document.createElement('div');
      mockMap.className = 'h-full w-full relative';
      mockMap.style.background = 'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
      mockMap.style.backgroundSize = 'cover';
      mockMap.style.backgroundPosition = 'center';
      
      mapRef.current.appendChild(mockMap);
      
      // Return cleanup function
      return () => {
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
        }
      };
    }
  }, []);
  
  // Mock compass functionality
  useEffect(() => {
    // In a real app, would use the device orientation API
    const intervalId = setInterval(() => {
      setCompassHeading(Math.floor(Math.random() * 360));
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Map container */}
      <div ref={mapRef} className="w-full h-full bg-slate-200 dark:bg-slate-800" />
      
      {/* Offline mode indicator */}
      {isOffline && (
        <div className="absolute top-4 left-0 right-0 mx-auto w-max bg-amber-500 text-white px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center">
          <AlertTriangle size={16} className="mr-2" />
          <span className="text-sm font-medium">Offline mode - Using cached map data</span>
        </div>
      )}
      
      {/* Compass */}
      <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg z-10">
        <div className="relative w-8 h-8">
          <Compass className="w-8 h-8 text-slate-700 dark:text-slate-300" />
          {compassHeading !== null && (
            <div 
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ transform: `rotate(${compassHeading}deg)` }}
            >
              <div className="w-1 h-3 bg-red-500 rounded-full absolute top-0.5" />
            </div>
          )}
        </div>
      </div>
      
      {/* Driver arrival time */}
      {activeBooking && showDriverLocation && (
        <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg z-10 animate-slide-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mr-3">
                <Navigation size={18} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Driver arriving in</p>
                <p className="font-semibold text-lg">8 minutes</p>
              </div>
            </div>
            <button className="btn-primary btn-small">Contact</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveMap;