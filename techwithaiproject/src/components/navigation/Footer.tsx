import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              PeakRide provides reliable transportation solutions for hill stations, 
              even in low connectivity areas. Book jeeps, bikes, and shared rides with real-time tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Book a Ride
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hill Stations</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 dark:text-slate-400">Shimla</li>
              <li className="text-slate-600 dark:text-slate-400">Manali</li>
              <li className="text-slate-600 dark:text-slate-400">Mussoorie</li>
              <li className="text-slate-600 dark:text-slate-400">Nainital</li>
              <li className="text-slate-600 dark:text-slate-400">Darjeeling</li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary-600 dark:text-primary-400 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">support@peakride.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary-600 dark:text-primary-400 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">+91 98765 43210</span>
              </li>
              <li className="mt-4">
                <button className="btn-outline w-full">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PeakRide. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;