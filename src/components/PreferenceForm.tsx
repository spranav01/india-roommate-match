
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface PreferenceFormProps {
  onSubmit: (data: any) => void;
}

const PreferenceForm = ({ onSubmit }: PreferenceFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    occupation: '',
    phone: '',
    email: '',
    location: '',
    budget: [15000],
    roomType: '',
    movingDate: '',
    lifestyle: {
      smoking: false,
      drinking: false,
      pets: false,
      cooking: false,
      guests: false,
      partying: false,
    },
    interests: [] as string[]
  });

  const [interest, setInterest] = useState('');
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLifestyleChange = (key: string, value: boolean) => {
    setFormData({
      ...formData,
      lifestyle: {
        ...formData.lifestyle,
        [key]: value
      }
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSliderChange = (value: number[]) => {
    setFormData({
      ...formData,
      budget: value
    });
  };

  const addInterest = () => {
    if (interest.trim() !== '' && !formData.interests.includes(interest.trim())) {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest.trim()]
      });
      setInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter(i => i !== interest)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Personal Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="Your full name" 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input 
              id="age" 
              name="age" 
              type="number" 
              placeholder="Your age" 
              min="18"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup 
              defaultValue={formData.gender}
              onValueChange={(value) => handleSelectChange('gender', value)}
            >
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="cursor-pointer">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="cursor-pointer">Other</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input 
              id="occupation" 
              name="occupation" 
              placeholder="Your occupation" 
              value={formData.occupation}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              placeholder="Your phone number" 
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Your email address" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Housing Preferences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location">Preferred Location</Label>
            <Select 
              onValueChange={(value) => handleSelectChange('location', value)}
              value={formData.location}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map(city => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="roomType">Room Type</Label>
            <Select 
              onValueChange={(value) => handleSelectChange('roomType', value)}
              value={formData.roomType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Room</SelectItem>
                <SelectItem value="shared">Shared Room</SelectItem>
                <SelectItem value="entire">Entire Apartment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2 col-span-2">
            <div className="flex justify-between">
              <Label>Budget Range (₹)</Label>
              <span className="text-sm font-medium">₹{formData.budget[0].toLocaleString('en-IN')}/month</span>
            </div>
            <Slider 
              min={5000} 
              max={50000} 
              step={1000}
              value={formData.budget}
              onValueChange={handleSliderChange}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹5,000</span>
              <span>₹50,000</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="movingDate">Move-in Date</Label>
            <Input 
              id="movingDate" 
              name="movingDate" 
              type="date" 
              value={formData.movingDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Lifestyle & Preferences</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="smoking" 
              checked={formData.lifestyle.smoking} 
              onCheckedChange={(checked) => handleLifestyleChange('smoking', checked as boolean)}
            />
            <Label htmlFor="smoking" className="cursor-pointer">Smoking friendly</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="drinking" 
              checked={formData.lifestyle.drinking} 
              onCheckedChange={(checked) => handleLifestyleChange('drinking', checked as boolean)}
            />
            <Label htmlFor="drinking" className="cursor-pointer">Drinking friendly</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="pets" 
              checked={formData.lifestyle.pets} 
              onCheckedChange={(checked) => handleLifestyleChange('pets', checked as boolean)}
            />
            <Label htmlFor="pets" className="cursor-pointer">Pet friendly</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="cooking" 
              checked={formData.lifestyle.cooking} 
              onCheckedChange={(checked) => handleLifestyleChange('cooking', checked as boolean)}
            />
            <Label htmlFor="cooking" className="cursor-pointer">Cooking regularly</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="guests" 
              checked={formData.lifestyle.guests} 
              onCheckedChange={(checked) => handleLifestyleChange('guests', checked as boolean)}
            />
            <Label htmlFor="guests" className="cursor-pointer">Guest friendly</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="partying" 
              checked={formData.lifestyle.partying} 
              onCheckedChange={(checked) => handleLifestyleChange('partying', checked as boolean)}
            />
            <Label htmlFor="partying" className="cursor-pointer">Party friendly</Label>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Interests & Hobbies</Label>
          <div className="flex">
            <Input 
              placeholder="Add an interest" 
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="rounded-r-none"
            />
            <Button 
              type="button"
              onClick={addInterest}
              className="rounded-l-none bg-staymate-primary hover:bg-staymate-secondary"
            >
              Add
            </Button>
          </div>
          
          {formData.interests.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.interests.map(int => (
                <Badge key={int} className="bg-staymate-light text-staymate-secondary pl-2 flex items-center">
                  {int}
                  <button 
                    type="button" 
                    onClick={() => removeInterest(int)}
                    className="ml-1 rounded-full hover:bg-staymate-secondary/10 p-1"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-staymate-primary hover:bg-staymate-secondary">
        Save Preferences
      </Button>
    </form>
  );
};

export default PreferenceForm;
