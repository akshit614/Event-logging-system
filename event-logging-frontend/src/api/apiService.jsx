import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; 

export const fetchLogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/logs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching logs:', error);
    return [];
  }
};
