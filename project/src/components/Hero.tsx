import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import { DollarSign, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-10 -left-10 w-80 h-80 bg-secondary-100 dark:bg-secondary-900/20 rounded-full opacity-70 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto md:flex items-center justify-between gap-8 lg:gap-16 ${
            inView ? 'animate-fadeIn' : 'opacity-0'
          }`}
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white mb-4">
              Turn Unused Software Licenses Into Cash
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              SoftSell helps businesses recover costs by selling their excess or unused software licenses safely and legally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <DollarSign size={20} className="mr-2" />
                Sell Your Licenses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Zap size={20} className="mr-2" />
                Get a Free Valuation
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-soft-lg">
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software dashboard" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;