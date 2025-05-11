import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data from localStorage
    setTimeout(() => {
      // Mock user data since we don't have a backend
      const mockUser = {
        name: 'Demo User',
        email: 'demo@example.com',
        company: 'SoftSell Demo',
        licenseListings: []
      };
      
      setUser(mockUser);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name || 'User'}!</h1>
          <p className="text-gray-600 dark:text-gray-300">
            You are now viewing the SoftSell dashboard.
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Your Profile</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Email:</span> {user?.email}</p>
              <p><span className="font-medium">Company:</span> {user?.company || 'Not specified'}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Your Licenses</h2>
            {user?.licenseListings && user.licenseListings.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {user.licenseListings.map((license: any) => (
                  <div key={license.id} className="border dark:border-neutral-700 rounded-lg p-4">
                    <h3 className="font-medium">{license.licenseType}</h3>
                    <p>Quantity: {license.licenseCount}</p>
                    <p>Status: {license.status}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>You don't have any licenses yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;