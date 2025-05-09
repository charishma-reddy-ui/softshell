import React, { ReactNode } from 'react';

interface StepCardProps {
  icon: ReactNode;
  number: number;
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({ icon, number, title, description }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 group">
      <div className="relative">
        <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center font-semibold text-primary-700 dark:text-primary-300 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
          {number}
        </div>
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 dark:bg-primary-900/30 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};