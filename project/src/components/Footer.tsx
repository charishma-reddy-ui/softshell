import React from 'react';
import Logo from './Logo';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-neutral-400 mb-4">
                Helping businesses recover costs by selling their excess or unused software licenses safely and legally.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors" 
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors" 
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#how-it-works" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#why-choose-us" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail size={16} className="text-primary-400 mr-2" />
                  <a 
                    href="mailto:info@softsell.com" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    info@softsell.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="text-primary-400 mr-2" />
                  <a 
                    href="tel:+18005551234" 
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    +1 (800) 555-1234
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-neutral-800 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
            <p className="text-neutral-500">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            
            <div className="mt-4 sm:mt-0">
              <a 
                href="#" 
                className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
              >
                Terms
              </a>
              <span className="mx-2 text-neutral-700">|</span>
              <a 
                href="#" 
                className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
              >
                Privacy
              </a>
              <span className="mx-2 text-neutral-700">|</span>
              <a 
                href="#" 
                className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;