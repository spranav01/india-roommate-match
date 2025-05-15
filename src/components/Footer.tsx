
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-staymate-primary font-bold text-xl">stay</span>
              <span className="text-staymate-dark font-bold text-xl">mate</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Finding your perfect roommate just got easier. Connect with like-minded people
              who share your living preferences.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  Roommate Guide
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  City Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:text-staymate-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} StayMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
