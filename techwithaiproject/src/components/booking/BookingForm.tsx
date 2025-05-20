import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Search } from 'lucide-react';
import RideOptionCard from '../rides/RideOptionCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const mockRideOptions = [
  {
    id: 1,
    type: 'jeep',
    name: 'Mountain Jeep',
    price: 1200,
    time: 25,
    seats: 4,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVlcHxlbnwwfHwwfHx8MA%3D%3D',
    isPopular: true,
  },
  {
    id: 2,
    type: 'bike',
    name: 'Hill Rider',
    price: 800,
    time: 18,
    seats: 1,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isPopular: false,
  },
  {
    id: 3,
    type: 'shared',
    name: 'Shared Traveller',
    price: 450,
    time: 32,
    seats: 6,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isPopular: false,
  },
];

interface BookingFormProps {
  initialStep?: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ initialStep = 1 }) => {
  const navigate = useNavigate();
  const { translate } = useTranslation();
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [selectedRideId, setSelectedRideId] = useState<number | null>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };
  
  const handleBookRide = () => {
    // In a real application, this would create a booking in the backend
    navigate('/track/mock-booking-id');
  };
  
  return (
    <div className="card p-4 md:p-6">
      {currentStep === 1 && (
        <>
          <h2 className="text-xl font-semibold mb-4">{translate('Book Your Ride')}</h2>
          <form onSubmit={handleSearch}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {translate('Pickup Location')}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder={translate('Enter pickup location')}
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {translate('Destination')}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder={translate('Enter destination')}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {translate('Date')}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="date"
                      className="input pl-10"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {translate('Time')}
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="time"
                      className="input pl-10"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {translate('Passengers')}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                  <select
                    className="input pl-10"
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    required
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? translate('passenger') : translate('passengers')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button type="submit" className="btn-primary w-full flex justify-center items-center">
                <Search size={18} className="mr-2" />
                {translate('Search Rides')}
              </button>
            </div>
          </form>
        </>
      )}
      
      {currentStep === 2 && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{translate('Available Rides')}</h2>
            <button
              onClick={() => setCurrentStep(1)}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              {translate('Change Details')}
            </button>
          </div>
          
          <div className="space-y-2 mb-6">
            <p className="text-sm">
              <span className="font-medium">{translate('From')}:</span> {pickup}
            </p>
            <p className="text-sm">
              <span className="font-medium">{translate('To')}:</span> {destination}
            </p>
            <p className="text-sm">
              <span className="font-medium">{translate('When')}:</span> {date} at {time}
            </p>
            <p className="text-sm">
              <span className="font-medium">{translate('Passengers')}:</span> {passengers}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {mockRideOptions.map((ride) => (
              <RideOptionCard
                key={ride.id}
                type={ride.type as any}
                name={ride.name}
                price={ride.price}
                time={ride.time}
                seats={ride.seats}
                rating={ride.rating}
                image={ride.image}
                isPopular={ride.isPopular}
                onSelect={() => setSelectedRideId(ride.id)}
                selected={selectedRideId === ride.id}
              />
            ))}
          </div>
          
          <button
            className="btn-primary w-full"
            disabled={selectedRideId === null}
            onClick={handleBookRide}
          >
            {translate('Book Now')}
          </button>
        </>
      )}
    </div>
  );
};

export default BookingForm;