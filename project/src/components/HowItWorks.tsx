import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, Tag, Wallet } from 'lucide-react';
import { StepCard } from './StepCard';

const HowItWorks: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="how-it-works" 
      className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Turn your unused software licenses into cash with our straightforward process
          </p>
        </div>

        <div 
          ref={ref}
          className={`max-w-5xl mx-auto ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Process step 1 */}
            <StepCard 
              icon={<FileText className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              number={1}
              title="Register Your Licenses"
              description="Submit your unused software licenses through our secure portal"
            />

            {/* Connector line between steps */}
            <div className="hidden md:block absolute left-1/3 top-1/4 w-1/6 border-t-2 border-dashed border-primary-300 dark:border-primary-700"></div>
            
            {/* Process step 2 */}
            <StepCard 
              icon={<Tag className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              number={2}
              title="Get Expert Valuation"
              description="Our experts assess the market value of your licenses within 24 hours"
            />

            {/* Connector line between steps */}
            <div className="hidden md:block absolute left-2/3 top-1/4 w-1/6 border-t-2 border-dashed border-primary-300 dark:border-primary-700"></div>
            
            {/* Process step 3 */}
            <StepCard 
              icon={<Wallet className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              number={3}
              title="Get Paid Quickly"
              description="Receive payment through your preferred method once a buyer is matched"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;