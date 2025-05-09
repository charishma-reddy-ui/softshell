import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for auth cookies
});

// License listings
export const getLicenseListings = async () => {
  const response = await api.get('/licenses');
  return response.data;
};

export const createLicenseListing = async (licenseData: {
  licenseType: string;
  licenseCount: number;
  description?: string;
}) => {
  const response = await api.post('/licenses', licenseData);
  return response.data;
};

// User profile
export const getUserProfile = async () => {
  const response = await api.get('/user');
  return response.data;
};

export const updateUserProfile = async (userData: {
  name?: string;
  company?: string;
}) => {
  const response = await api.patch('/user', userData);
  return response.data;
};

// Contact form / inquiries
export const submitInquiry = async (inquiryData: {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  licenseCount?: string;
  message: string;
}) => {
  const response = await api.post('/inquiries', inquiryData);
  return response.data;
};

export default api;