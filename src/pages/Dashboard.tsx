
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserCard from '@/components/UserCard';
import { Search, MapPin, IndianRupee, SlidersHorizontal, X } from 'lucide-react';

// Mock roommate data - in a real app, this would come from an API
const mockRoommates = [
  {
    id: 1,
    name: 'Aarav Singh',
    age: 26,
    location: 'Indira Nagar, Bangalore',
    occupation: 'Software Engineer',
    gender: 'Male',
    rent: 15000,
    matchPercent: 92,
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
    preferences: ['Non-smoker', 'Vegetarian', 'Early riser', 'Tech enthusiast']
  },
  {
    id: 2,
    name: 'Nisha Verma',
    age: 24,
    location: 'Koramangala, Bangalore',
    occupation: 'Digital Marketer',
    gender: 'Female',
    rent: 18000,
    matchPercent: 87,
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    preferences: ['Pet friendly', 'Clean', 'Social', 'Movie buff']
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    age: 29,
    location: 'HSR Layout, Bangalore',
    occupation: 'Product Manager',
    gender: 'Male',
    rent: 22000,
    matchPercent: 82,
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    preferences: ['Gym enthusiast', 'Non-vegetarian', 'Weekend traveler']
  },
  {
    id: 4,
    name: 'Anjali Patel',
    age: 25,
    location: 'Whitefield, Bangalore',
    occupation: 'UX Designer',
    gender: 'Female',
    rent: 16500,
    matchPercent: 78,
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
    preferences: ['Artistic', 'Yoga practitioner', 'Book lover', 'Foodie']
  },
  {
    id: 5,
    name: 'Rohit Sharma',
    age: 27,
    location: 'Electronic City, Bangalore',
    occupation: 'Data Scientist',
    gender: 'Male',
    rent: 17000,
    matchPercent: 76,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    preferences: ['Gamer', 'Night owl', 'Tech enthusiast', 'Coffee lover']
  }
];

const locations = ['Indira Nagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'Electronic City', 'MG Road', 'Marathahalli'];
const occupations = ['Software Engineer', 'Designer', 'Marketing', 'Finance', 'Student', 'Healthcare', 'Other'];

const Dashboard = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    gender: '',
    occupation: '',
    priceRange: [5000, 30000],
    preferences: [] as string[]
  });
  
  const [roommates, setRoommates] = useState(mockRoommates);
  
  const handleMessageClick = (id: number) => {
    // In a real app, this would navigate to chat with this user
    console.log(`Message user with id: ${id}`);
    window.location.href = '/chat'; // Simple redirect for demo
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const handleFilterChange = (key: string, value: any) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };
  
  const applyFilters = () => {
    // In a real app, this would trigger an API call with the filters
    // For this demo, we'll just console.log the filters
    console.log('Applied filters:', filters);
    // Close the filters panel
    setShowFilters(false);
  };
  
  const clearFilters = () => {
    setFilters({
      location: '',
      gender: '',
      occupation: '',
      priceRange: [5000, 30000],
      preferences: []
    });
  };
  
  const addPreference = (pref: string) => {
    if (pref && !filters.preferences.includes(pref)) {
      setFilters({
        ...filters,
        preferences: [...filters.preferences, pref]
      });
    }
  };
  
  const removePreference = (pref: string) => {
    setFilters({
      ...filters,
      preferences: filters.preferences.filter(p => p !== pref)
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-staymate-dark mb-4 md:mb-0">Find Your Roommate</h1>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search by name or keywords"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button 
                onClick={toggleFilters}
                variant="outline"
                className={`flex items-center ${showFilters ? 'bg-staymate-light text-staymate-primary' : ''}`}
              >
                <SlidersHorizontal size={18} className="mr-2" />
                Filters
                {(filters.location || filters.gender || filters.occupation || filters.preferences.length > 0) && (
                  <Badge className="ml-2 bg-staymate-primary">
                    {Object.values(filters).filter(f => f && (typeof f === 'string' || Array.isArray(f) && f.length > 0)).length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
          
          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Filter Roommates</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <Select 
                    value={filters.location}
                    onValueChange={(value) => handleFilterChange('location', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any location</SelectItem>
                      {locations.map(loc => (
                        <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <Select 
                    value={filters.gender}
                    onValueChange={(value) => handleFilterChange('gender', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any gender</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                  <Select 
                    value={filters.occupation}
                    onValueChange={(value) => handleFilterChange('occupation', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any occupation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any occupation</SelectItem>
                      {occupations.map(occ => (
                        <SelectItem key={occ} value={occ}>{occ}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Price Range</label>
                  <span className="text-sm text-gray-500">
                    ₹{filters.priceRange[0].toLocaleString('en-IN')} - ₹{filters.priceRange[1].toLocaleString('en-IN')}
                  </span>
                </div>
                <Slider 
                  min={5000} 
                  max={50000} 
                  step={1000} 
                  value={filters.priceRange}
                  onValueChange={(value) => handleFilterChange('priceRange', value)}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹5,000</span>
                  <span>₹50,000</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferences</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {filters.preferences.map(pref => (
                    <Badge key={pref} variant="secondary" className="flex items-center bg-staymate-light text-staymate-secondary pl-2">
                      {pref}
                      <button 
                        onClick={() => removePreference(pref)}
                        className="ml-1 hover:bg-staymate-secondary/10 rounded-full p-1"
                      >
                        <X size={12} />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {['Non-smoker', 'Vegetarian', 'Pet friendly', 'Early riser', 'Night owl', 'Clean'].map(pref => (
                    <Button 
                      key={pref}
                      variant="outline"
                      size="sm"
                      onClick={() => addPreference(pref)}
                      className={filters.preferences.includes(pref) ? 'bg-staymate-light text-staymate-secondary' : ''}
                      disabled={filters.preferences.includes(pref)}
                    >
                      {pref}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button variant="ghost" className="mr-2" onClick={toggleFilters}>
                  Cancel
                </Button>
                <Button className="bg-staymate-primary hover:bg-staymate-secondary" onClick={applyFilters}>
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
          
          {/* Roommates List */}
          <div className="space-y-6">
            {roommates.map(roommate => (
              <UserCard
                key={roommate.id}
                name={roommate.name}
                age={roommate.age}
                location={roommate.location}
                occupation={roommate.occupation}
                gender={roommate.gender}
                rent={roommate.rent}
                matchPercent={roommate.matchPercent}
                image={roommate.image}
                preferences={roommate.preferences}
                onMessageClick={() => handleMessageClick(roommate.id)}
              />
            ))}
          </div>
          
          {/* No Results */}
          {roommates.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">😕</div>
              <h3 className="text-xl font-semibold mb-2">No roommates found</h3>
              <p className="text-gray-500 mb-6">Try changing your filters or search terms</p>
              <Button 
                variant="outline" 
                className="border-staymate-primary text-staymate-primary hover:bg-staymate-light"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
