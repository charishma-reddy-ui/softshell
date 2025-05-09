import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Shield, Lock, Clock } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="why-choose-us" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Why Businesses Trust SoftSell
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Our platform offers the most secure and profitable way to resell your software licenses
          </p>
        </div>

        <div 
          ref={ref}
          className={`max-w-6xl mx-auto ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              title="Maximum Return"
              description="Our marketplace algorithms ensure you get the best price for your licenses"
            />

            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              title="Legal Compliance"
              description="All transfers are 100% compliant with license agreements and regulations"
            />

            <FeatureCard 
              icon={<Lock className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              title="Secure Process"
              description="End-to-end encryption and strict verification protocols protect your assets"
            />

            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              title="Fast Turnaround"
              description="Most licenses are valued and sold within 7 days"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;