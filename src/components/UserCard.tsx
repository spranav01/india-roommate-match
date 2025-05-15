
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Star, 
  MapPin 
} from 'lucide-react';

interface UserCardProps {
  name: string;
  age: number;
  location: string;
  occupation: string;
  gender: string;
  rent: number;
  matchPercent: number;
  image: string;
  preferences: string[];
  onMessageClick: () => void;
}

const UserCard = ({ 
  name, 
  age, 
  location, 
  occupation, 
  gender, 
  rent, 
  matchPercent,
  image,
  preferences,
  onMessageClick
}: UserCardProps) => {
  return (
    <div className="staymate-card flex flex-col md:flex-row">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className="relative">
          <img
            src={image}
            alt={`${name}'s profile`}
            className="rounded-full w-32 h-32 mx-auto md:mx-0 object-cover border-4 border-white shadow"
          />
          <div className="absolute -top-2 -right-2 bg-staymate-primary text-white rounded-full px-2 py-1 text-xs font-bold">
            {matchPercent}% Match
          </div>
        </div>
      </div>
      
      <div className="md:w-3/4 md:pl-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{name}, {age}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin size={16} className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-staymate-dark">
              ₹{rent.toLocaleString('en-IN')}
              <span className="text-sm text-gray-500 font-normal">/month</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 text-sm text-gray-700">
          <p><span className="font-medium">Occupation:</span> {occupation}</p>
          <p><span className="font-medium">Gender:</span> {gender}</p>
        </div>
        
        <div className="mt-3">
          <div className="text-sm font-medium mb-2">Preferences:</div>
          <div className="flex flex-wrap gap-2">
            {preferences.map((pref, index) => (
              <Badge key={index} variant="outline" className="bg-staymate-light text-staymate-secondary">
                {pref}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex">
          <Button 
            className="flex items-center bg-staymate-primary hover:bg-staymate-secondary"
            onClick={onMessageClick}
          >
            <MessageSquare size={16} className="mr-2" />
            Message
          </Button>
          <Button variant="outline" className="ml-2 border-staymate-primary text-staymate-primary hover:bg-staymate-light">
            <Star size={16} className="mr-2" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
