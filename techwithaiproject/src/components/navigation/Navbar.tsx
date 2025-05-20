import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, MapPin, Bell, Sun, Moon, Car } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  // Check if current route is active
  const isActive = (path: string) => location.pathname === path;
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Book Ride', path: '/book' },
    { name: 'Services', path: '/services' },
    { name: 'Safety', path: '/safety' },
    { name: 'About', path: '/about' },
    { name: 'Emergency', path: '/emergency' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/driver/signup"
            className="btn-secondary btn-small flex items-center"
          >
            <Car size={16} className="mr-1.5" />
            Become a Driver
          </Link>
          
          {isAuthenticated ? (
            <Link
              to="/profile"
              className="flex items-center space-x-2 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                <User size={16} className="text-primary-600 dark:text-primary-400" />
              </div>
            </Link>
          ) : (
            <Link
              to="/profile"
              className="btn-primary btn-small"
            >
              Sign In
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-slate-900 animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                <Logo />
              </Link>
              <button 
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 text-lg font-medium ${
                    isActive(link.path)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/driver/signup"
                className="btn-secondary w-full flex items-center justify-center"
                onClick={closeMenu}
              >
                <Car size={18} className="mr-2" />
                Become a Driver
              </Link>
              
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <LanguageSwitcher />
                  
                  <button
                    onClick={() => {
                      toggleTheme();
                      closeMenu();
                    }}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </div>
              
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 py-2"
                  onClick={closeMenu}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <User size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium">{user?.name || 'User'}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">View Profile</p>
                  </div>
                </Link>
              ) : (
                <Link
                  to="/profile"
                  className="btn-primary w-full flex justify-center"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;