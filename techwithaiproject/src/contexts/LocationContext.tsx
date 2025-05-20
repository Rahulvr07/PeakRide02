import React, { createContext, useContext, useState, useEffect } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp?: number;
}

interface LocationContextType {
  currentLocation: Coordinates | null;
  isTracking: boolean;
  error: string | null;
  startTracking: () => void;
  stopTracking: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<Coordinates | null>(null);
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [watchId, setWatchId] = useState<number | null>(null);
  
  // Clean up geolocation watcher on unmount
  useEffect(() => {
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [watchId]);
  
  const handleLocationSuccess = (position: GeolocationPosition) => {
    setCurrentLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy,
      timestamp: position.timestamp,
    });
    setError(null);
  };
  
  const handleLocationError = (error: GeolocationPositionError) => {
    setError(error.message);
    setIsTracking(false);
  };
  
  const startTracking = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }
    
    // First get current position immediately
    navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
    
    // Then start watching position for updates
    const id = navigator.geolocation.watchPosition(
      handleLocationSuccess,
      handleLocationError,
      {
        enableHighAccuracy: true,
        maximumAge: 30000, // 30 seconds
        timeout: 27000, // 27 seconds
      }
    );
    
    setWatchId(id);
    setIsTracking(true);
  };
  
  const stopTracking = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsTracking(false);
  };
  
  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        isTracking,
        error,
        startTracking,
        stopTracking,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the location context
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};