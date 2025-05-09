import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ className = '' }) => {
  // Backend URL where Clerk is hosted
  const backendUrl = 'http://localhost:3000';

  // Function to handle login
  const handleLogin = () => {
    console.log("Login button clicked"); // For debugging
    // Redirect to Clerk sign-in page with proper redirect URL
    window.location.href = `${backendUrl}/sign-in?redirect_url=${encodeURIComponent(window.location.origin + '/dashboard')}`;
  };

  // Function to handle signup
  const handleSignup = () => {
    console.log("Signup button clicked"); // For debugging
    // Redirect to Clerk sign-up page with proper redirect URL
    window.location.href = `${backendUrl}/sign-up?redirect_url=${encodeURIComponent(window.location.origin + '/dashboard')}`;
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <button 
        className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
        onClick={handleLogin}
      >
        <LogIn size={18} className="mr-2 inline" />
        Login
      </button>
      
      <button 
        className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
        onClick={handleSignup}
      >
        <UserPlus size={18} className="mr-2 inline" />
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;