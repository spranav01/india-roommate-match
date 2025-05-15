
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  MessageSquare, 
  User, 
  Menu, 
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be connected to actual auth state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    // For demo purposes only
    setIsLoggedIn(true);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-staymate-primary font-bold text-xl">stay</span>
              <span className="text-staymate-dark font-bold text-xl">mate</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-staymate-primary px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-staymate-primary px-3 py-2 rounded-md text-sm font-medium">
                  Profile
                </Link>
                <Link to="/chat" className="text-gray-700 hover:text-staymate-primary px-3 py-2 rounded-md text-sm font-medium">
                  Messages
                </Link>
                <div className="ml-3 flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-staymate-primary rounded-full w-4 h-4 text-xs text-white flex items-center justify-center">
                      2
                    </span>
                  </Button>
                  <Button variant="ghost" size="icon" className="relative">
                    <MessageSquare size={20} />
                    <span className="absolute -top-1 -right-1 bg-staymate-primary rounded-full w-4 h-4 text-xs text-white flex items-center justify-center">
                      3
                    </span>
                  </Button>
                  <Link to="/profile">
                    <Button variant="ghost" size="icon">
                      <User size={20} />
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={handleLogin}>
                  Log in
                </Button>
                <Button className="bg-staymate-primary hover:bg-staymate-secondary">
                  Sign up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-staymate-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="block text-gray-700 hover:text-staymate-primary px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>
                <Link to="/profile" className="block text-gray-700 hover:text-staymate-primary px-3 py-2 rounded-md text-base font-medium">
                  Profile
                </Link>
                <Link to="/chat" className="block text-gray-700 hover:text-staymate-primary px-3 py-2 rounded-md text-base font-medium">
                  Messages
                </Link>
                <div className="flex items-center space-x-3 px-3 py-2">
                  <Button variant="ghost" size="sm" className="relative flex items-center">
                    <Bell size={18} className="mr-2" />
                    <span>Notifications</span>
                    <span className="ml-1 bg-staymate-primary rounded-full w-5 h-5 text-xs text-white flex items-center justify-center">
                      2
                    </span>
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button variant="outline" onClick={handleLogin}>
                  Log in
                </Button>
                <Button className="bg-staymate-primary hover:bg-staymate-secondary">
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
