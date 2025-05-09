import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-soft border border-neutral-100 dark:border-neutral-700 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};