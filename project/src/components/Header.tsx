import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import Logo from './Logo';
import AuthButtons from './AuthButtons';
import axios from 'axios';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user', {
          withCredentials: true,
        });
        setIsAuthenticated(!!response.data);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = 'http://localhost:3000/sign-in?redirect_url=http://localhost:5173/dashboard';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-neutral-900 shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <Wallet size={18} className="mr-2" />
              Get Started
            </button>
            
            {/* Add auth buttons to desktop menu */}
            <AuthButtons />
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 shadow-soft py-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center w-full mt-4 px-4 py-2 rounded-md font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <Wallet size={18} className="mr-2" />
              Get Started
            </button>
            
            {/* Add auth buttons to mobile menu */}
            <div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-700">
              <AuthButtons className="flex-col space-y-3 space-x-0 items-stretch" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;