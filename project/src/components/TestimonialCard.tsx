import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  position, 
  company,
  image
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-soft-lg p-8 relative">
      <div className="absolute top-8 left-8 opacity-10 text-primary-600 dark:text-primary-400">
        <Quote size={48} />
      </div>
      
      <div className="relative">
        <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-6 italic">
          "{quote}"
        </p>
        
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <img 
              src={image} 
              alt={name} 
              className="h-12 w-12 rounded-full object-cover border-2 border-primary-100 dark:border-primary-900"
            />
          </div>
          <div>
            <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
              {name}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {position}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};