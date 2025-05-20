import React, { createContext, useContext, useState, useEffect } from 'react';

interface RideOption {
  id: string;
  type: 'jeep' | 'bike' | 'shared';
  name: string;
  price: number;
  eta: number; // minutes
  seats: number;
}

interface DriverInfo {
  id: string;
  name: string;
  phone: string;
  rating: number;
  vehicle: string;
  licensePlate: string;
}

interface BookingDetails {
  id: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  price: number;
  driver?: DriverInfo;
  rideType: 'jeep' | 'bike' | 'shared';
  createdAt: string;
}

interface BookingContextType {
  availableRides: RideOption[];
  activeBooking: BookingDetails | null;
  pastBookings: BookingDetails[];
  createBooking: (booking: Partial<BookingDetails>) => Promise<BookingDetails>;
  cancelBooking: (bookingId: string) => Promise<void>;
  fetchBooking: (bookingId: string) => Promise<BookingDetails | null>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [availableRides, setAvailableRides] = useState<RideOption[]>([]);
  const [activeBooking, setActiveBooking] = useState<BookingDetails | null>(null);
  const [pastBookings, setPastBookings] = useState<BookingDetails[]>([]);
  
  // Load stored bookings from localStorage on mount
  useEffect(() => {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      try {
        const parsedBookings = JSON.parse(storedBookings) as BookingDetails[];
        const active = parsedBookings.find(b => 
          b.status === 'confirmed' || b.status === 'in_progress'
        );
        const past = parsedBookings.filter(b => 
          b.status === 'completed' || b.status === 'cancelled'
        );
        
        if (active) setActiveBooking(active);
        setPastBookings(past);
      } catch (error) {
        console.error('Failed to parse stored bookings', error);
      }
    }
  }, []);
  
  // Save bookings to localStorage whenever they change
  useEffect(() => {
    const allBookings = [...(activeBooking ? [activeBooking] : []), ...pastBookings];
    localStorage.setItem('bookings', JSON.stringify(allBookings));
  }, [activeBooking, pastBookings]);
  
  // Mock function to create a new booking
  const createBooking = async (bookingData: Partial<BookingDetails>): Promise<BookingDetails> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockDriver: DriverInfo = {
      id: 'driver-123',
      name: 'Rajendra Singh',
      phone: '+91 98765 43210',
      rating: 4.8,
      vehicle: 'Mahindra Thar',
      licensePlate: 'HP 01 AB 1234',
    };
    
    const newBooking: BookingDetails = {
      id: `booking-${Date.now()}`,
      pickup: bookingData.pickup || 'Unknown',
      destination: bookingData.destination || 'Unknown',
      date: bookingData.date || new Date().toISOString().split('T')[0],
      time: bookingData.time || '12:00',
      passengers: bookingData.passengers || 1,
      status: 'confirmed',
      price: bookingData.price || 1200,
      driver: mockDriver,
      rideType: bookingData.rideType || 'jeep',
      createdAt: new Date().toISOString(),
    };
    
    setActiveBooking(newBooking);
    return newBooking;
  };
  
  // Mock function to cancel a booking
  const cancelBooking = async (bookingId: string): Promise<void> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (activeBooking && activeBooking.id === bookingId) {
      const cancelledBooking = { ...activeBooking, status: 'cancelled' as const };
      setActiveBooking(null);
      setPastBookings(prev => [cancelledBooking, ...prev]);
    }
  };
  
  // Mock function to fetch a booking
  const fetchBooking = async (bookingId: string): Promise<BookingDetails | null> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (activeBooking && activeBooking.id === bookingId) {
      return activeBooking;
    }
    
    const foundBooking = pastBookings.find(booking => booking.id === bookingId);
    return foundBooking || null;
  };
  
  return (
    <BookingContext.Provider
      value={{
        availableRides,
        activeBooking,
        pastBookings,
        createBooking,
        cancelBooking,
        fetchBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the booking context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};