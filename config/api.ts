// Central API configuration
// Change this BASE_URL to switch between environments (e.g., local dev vs production)

export const BASE_URL = 'https://petbuddy-backend-rnu7.onrender.com';

// API endpoint helpers
export const API = {
  // Auth
  login: `${BASE_URL}/api/login`,
  register: `${BASE_URL}/api/register`,

  // Pet
  petRegister: `${BASE_URL}/api/petRegister`,
  petData: `${BASE_URL}/api/petData`,

  // Gallery
  addGallery: `${BASE_URL}/api/addGallery`,
  getGallery: `${BASE_URL}/api/getGallery`,

  // Activity
  addActivity: `${BASE_URL}/api/addActivity`,
  getActivity: `${BASE_URL}/api/getActivity`,

  // Reminder
  addReminder: `${BASE_URL}/api/addReminder`,
  getReminder: `${BASE_URL}/api/getReminder`,

  // Profile
  getProfile: `${BASE_URL}/api/getProfile`,

  // Services
  doctorData: `${BASE_URL}/api/doctorData`,
  groomingData: `${BASE_URL}/api/groomingData`,
  boardingData: `${BASE_URL}/api/boardingData`,
  trainingData: `${BASE_URL}/api/trainingData`,
};
