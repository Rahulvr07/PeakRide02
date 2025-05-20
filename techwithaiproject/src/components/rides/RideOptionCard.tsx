import React from 'react';
import { Clock, Users, Truck, DollarSign, Star } from 'lucide-react';

interface RideOptionCardProps {
  type: 'jeep' | 'bike' | 'shared';
  name: string;
  price: number;
  time: number; // in minutes
  seats?: number;
  rating: number;
  image: string;
  isPopular?: boolean;
  onSelect: () => void;
  selected: boolean;
}

const RideOptionCard: React.FC<RideOptionCardProps> = ({
  type,
  name,
  price,
  time,
  seats,
  rating,
  image,
  isPopular = false,
  onSelect,
  selected,
}) => {
  const iconMap = {
    jeep: <Truck size={20} className="text-secondary-600 dark:text-secondary-400" />,
    bike: <Truck size={20} className="text-accent-500" />,
    shared: <Users size={20} className="text-primary-600 dark:text-primary-400" />,
  };
  
  return (
    <div 
      className={`card p-3 transition-all duration-200 cursor-pointer ${
        selected 
          ? 'ring-2 ring-primary-500 dark:ring-primary-400' 
          : 'hover:shadow-md'
      }`}
      onClick={onSelect}
    >
      <div className="relative h-36 rounded-lg overflow-hidden mb-3">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {isPopular && (
          <div className="absolute top-2 right-2 badge-accent">
            Popular
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{name}</h3>
            <div className="flex items-center mt-1">
              {iconMap[type]}
              <span className="text-sm text-slate-500 dark:text-slate-400 ml-1.5">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="font-semibold">₹{price}</div>
            <div className="flex items-center text-amber-500">
              <Star size={14} className="fill-amber-500" />
              <span className="text-sm ml-1">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{time} min</span>
          </div>
          {seats && (
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              <span>{seats} seats</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RideOptionCard;