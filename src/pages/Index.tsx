
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would pass search params
    navigate('/dashboard');
  };

  // Demo features for homepage
  const features = [
    {
      title: 'Find Compatible Roommates',
      description: 'Our advanced matching algorithm helps you find roommates with similar lifestyles, interests, and preferences.',
      icon: '🤝'
    },
    {
      title: 'Secure Messaging',
      description: 'Chat with potential roommates directly through our secure messaging system.',
      icon: '💬'
    },
    {
      title: 'Budget & Location Filters',
      description: 'Find roommates in your preferred neighborhood and within your budget range.',
      icon: '₹'
    },
    {
      title: 'Verified Profiles',
      description: 'Feel safe with our verified user profiles and ratings system.',
      icon: '✅'
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      name: 'Aditya Sharma',
      location: 'Mumbai',
      quote: 'I found my roommate within a week! We have similar work schedules and food habits, making us a perfect match.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Priya Patel',
      location: 'Bangalore',
      quote: 'StayMate made it so easy to find someone who is compatible with my lifestyle. I love the preference matching system!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Rahul Gupta',
      location: 'Delhi',
      quote: 'After struggling to find a good roommate for months, I found the perfect match on StayMate in just days.',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg'
    }
  ];

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹15,000',
    '₹15,000 - ₹20,000',
    '₹20,000 - ₹30,000',
    'Above ₹30,000'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-staymate-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-staymate-dark leading-tight">
                Find Your Ideal <span className="text-staymate-primary">Roommate</span> in India
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Connect with roommates who match your lifestyle preferences, budget, and location needs - making shared living easy and comfortable.
              </p>
              
              <form onSubmit={handleSearch} className="mt-8 bg-white p-4 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Select onValueChange={setCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select onValueChange={setBudget}>
                      <SelectTrigger>
                        <SelectValue placeholder="Budget Range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map(range => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="bg-staymate-primary hover:bg-staymate-secondary">
                    Find Roommates
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-sm text-gray-500">
                Join over 10,000 users finding compatible roommates across India
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" 
                  alt="Roommates in apartment" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-sm font-medium">Find matches in</div>
                  <div className="flex items-center mt-1">
                    <span className="text-staymate-primary font-bold text-xl">24</span>
                    <span className="ml-1 text-sm text-gray-500">hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How StayMate Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="staymate-card flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              onClick={() => navigate('/dashboard')}
              className="bg-staymate-primary hover:bg-staymate-secondary text-lg px-10"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-staymate-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="staymate-card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-staymate-primary to-staymate-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Ideal Roommate?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Create your profile, set your preferences, and start matching with potential roommates today.
          </p>
          <Button 
            onClick={() => navigate('/dashboard')}
            variant="outline" 
            className="bg-white text-staymate-primary hover:bg-gray-100 border-white text-lg px-8"
          >
            Sign Up Now
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
