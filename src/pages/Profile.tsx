
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PreferenceForm from '@/components/PreferenceForm';
import { User, MapPin, Briefcase, Calendar, Star, Edit, IndianRupee } from 'lucide-react';

// Mock user data - in a real app, this would come from an API
const userData = {
  name: 'Arjun Kapoor',
  age: 27,
  gender: 'Male',
  occupation: 'UX Designer',
  phone: '+91 98765 43210',
  email: 'arjun.kapoor@example.com',
  location: 'Bangalore',
  joinDate: 'May 2023',
  avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  budget: 18000,
  roomType: 'Private Room',
  movingDate: '2023-08-15',
  about: 'Hi there! I\'m a UX designer looking for a place in Bangalore. I\'m clean, respectful, and enjoy cooking. I work from home most days but like to keep a good work-life balance. I enjoy hiking on weekends and watching documentaries.',
  interests: ['Design', 'Cooking', 'Hiking', 'Photography', 'Reading'],
  preferences: {
    smoking: false,
    drinking: true,
    pets: true,
    cooking: true,
    guests: true,
    partying: false
  }
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSaveProfile = (formData: any) => {
    console.log('Saving profile data:', formData);
    setIsEditing(false);
    // In a real app, this would update the user's profile via an API call
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="profile">My Profile</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="saved">Saved Roommates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              {!isEditing ? (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  {/* Profile Header */}
                  <div className="bg-gradient-to-r from-staymate-primary to-staymate-secondary p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-white">
                      <img 
                        src={userData.avatar} 
                        alt={userData.name} 
                        className="w-24 h-24 rounded-full object-cover border-4 border-white mb-4 md:mb-0 md:mr-6"
                      />
                      <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold">{userData.name}</h1>
                        <div className="mt-2 flex flex-col md:flex-row md:items-center md:space-x-4">
                          <div className="flex items-center justify-center md:justify-start">
                            <MapPin size={16} className="mr-1" />
                            <span>{userData.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start mt-1 md:mt-0">
                            <Briefcase size={16} className="mr-1" />
                            <span>{userData.occupation}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start mt-1 md:mt-0">
                            <Calendar size={16} className="mr-1" />
                            <span>Joined {userData.joinDate}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="mt-4 md:mt-0 md:ml-auto border-white text-white hover:bg-white/20"
                        onClick={() => setIsEditing(true)}
                      >
                        <Edit size={16} className="mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                  
                  {/* Profile Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* About Me */}
                      <div className="md:col-span-2">
                        <h2 className="text-lg font-semibold mb-3">About Me</h2>
                        <p className="text-gray-700">{userData.about}</p>
                        
                        <div className="mt-6">
                          <h2 className="text-lg font-semibold mb-3">Interests</h2>
                          <div className="flex flex-wrap gap-2">
                            {userData.interests.map(interest => (
                              <Badge key={interest} className="bg-staymate-light text-staymate-secondary">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Details</h2>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-500">Age</span>
                            <div className="font-medium">{userData.age}</div>
                          </div>
                          
                          <div>
                            <span className="text-sm text-gray-500">Gender</span>
                            <div className="font-medium">{userData.gender}</div>
                          </div>
                          
                          <div>
                            <span className="text-sm text-gray-500">Budget</span>
                            <div className="font-medium flex items-center">
                              <IndianRupee size={16} className="mr-1" />
                              {userData.budget.toLocaleString('en-IN')}/month
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-sm text-gray-500">Room Type</span>
                            <div className="font-medium">{userData.roomType}</div>
                          </div>
                          
                          <div>
                            <span className="text-sm text-gray-500">Move-in Date</span>
                            <div className="font-medium">
                              {new Date(userData.movingDate).toLocaleDateString('en-IN', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lifestyle Preferences */}
                    <div className="mt-8">
                      <h2 className="text-lg font-semibold mb-4">Lifestyle Preferences</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div className={`p-3 rounded-lg text-center ${userData.preferences.smoking ? 'bg-staymate-light text-staymate-secondary' : 'bg-gray-100 text-gray-500'}`}>
                          <div className="text-xl mb-1">🚬</div>
                          <div className="text-sm font-medium">Smoking</div>
                          <div className="text-xs mt-1">{userData.preferences.smoking ? 'Allowed' : 'Not Allowed'}</div>
                        </div>
                        
                        <div className={`p-3 rounded-lg text-center ${userData.preferences.drinking ? 'bg-staymate-light text-staymate-secondary' : 'bg-gray-100 text-gray-500'}`}>
                          <div className="text-xl mb-1">🍷</div>
                          <div className="text-sm font-medium">Drinking</div>
                          <div className="text-xs mt-1">{userData.preferences.drinking ? 'Allowed' : 'Not Allowed'}</div>
                        </div>
                        
                        <div className={`p-3 rounded-lg text-center ${userData.preferences.pets ? 'bg-staymate-light text-staymate-secondary' : 'bg-gray-100 text-gray-500'}`}>
                          <div className="text-xl mb-1">🐾</div>
                          <div className="text-sm font-medium">Pets</div>
                          <div className="text-xs mt-1">{userData.preferences.pets ? 'Allowed' : 'Not Allowed'}</div>
                        </div>
                        
                        <div className={`p-3 rounded-lg text-center ${userData.preferences.cooking ? 'bg-staymate-light text-staymate-secondary' : 'bg-gray-100 text-gray-500'}`}>
                          <div className="text-xl mb-1">🍳</div>
                          <div className="text-sm font-medium">Cooking</div>
                          <div className="text-xs mt-1">{userData.preferences.cooking ? 'Regularly' : 'Rarely'}</div>
                        </div>
                        
                        <div className={`p-3 rounded-lg text-center ${userData.preferences.guests ? 'bg-staymate-light text-staymate-secondary' : 'bg-gray-100 text-gray-500'}`}>
                          <div className="text-xl mb-1">👥</div>
                          <div className="text-sm font-medium">Guests</div>
                          <div className="text-xs mt-1">{userData.preferences.guests ? 'Welcome' : 'Limited'}</div>
                        </div>
                        
                        <div className={`p-3 rounded-lg text-center ${userData.preferences.partying ? 'bg-staymate-light text-staymate-secondary' : 'bg-gray-100 text-gray-500'}`}>
                          <div className="text-xl mb-1">🎉</div>
                          <div className="text-sm font-medium">Partying</div>
                          <div className="text-xs mt-1">{userData.preferences.partying ? 'Often' : 'Rarely'}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="mt-8">
                      <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <div className="text-sm text-gray-500">Email</div>
                          <div className="font-medium">{userData.email}</div>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <div className="text-sm text-gray-500">Phone</div>
                          <div className="font-medium">{userData.phone}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <PreferenceForm onSubmit={handleSaveProfile} />
              )}
            </TabsContent>
            
            <TabsContent value="preferences">
              <PreferenceForm onSubmit={handleSaveProfile} />
            </TabsContent>
            
            <TabsContent value="saved">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Saved Roommates</h2>
                
                {/* Placeholder for saved roommates */}
                <div className="text-center py-16">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium mb-2">No saved roommates yet</h3>
                  <p className="text-gray-500 mb-6">
                    When you save potential roommates, they'll appear here
                  </p>
                  <Button 
                    className="bg-staymate-primary hover:bg-staymate-secondary"
                    onClick={() => window.location.href = '/dashboard'}
                  >
                    Find Roommates
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
