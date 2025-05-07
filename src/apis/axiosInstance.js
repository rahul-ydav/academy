import axios from 'axios';
import BackendPoint from '../../BackendPoint';

const axiosInstance = axios.create({
  baseURL: BackendPoint,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     console.error('Request error:', error);
//     return Promise.reject(error);
//   }
// );

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      
      switch (status) {
        case 401:
          console.error('Unauthorized access');
          window.location.href = '/Login'; // Redirect to login page
          break;
        case 403:
          console.error('Forbidden access');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error(`Error with status code: ${status}`);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;