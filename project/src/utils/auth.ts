import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Check if user is authenticated by calling the backend
export const checkAuth = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      withCredentials: true, // Important for sending cookies
    });
    return !!response.data;
  } catch (error) {
    return false;
  }
};

// Get user profile from backend
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

// Handle redirect after authentication
export const handleAuthRedirect = () => {
  const redirectUrl = localStorage.getItem('redirectAfterAuth');
  if (redirectUrl) {
    localStorage.removeItem('redirectAfterAuth');
    window.location.href = redirectUrl;
  }
};