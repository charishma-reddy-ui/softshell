import React from 'react';
import { BarChart3 } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <BarChart3 size={28} className="text-primary-600 dark:text-primary-400 mr-2" />
      <span className="text-xl font-bold text-neutral-900 dark:text-white">
        Soft<span className="text-primary-600 dark:text-primary-400">Sell</span>
      </span>
    </div>
  );
};

export default Logo;