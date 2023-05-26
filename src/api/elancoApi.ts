import axios from 'axios';

const API_URL = 'https://engineering-task.elancoapps.com/api/applications'; 

export const fetchApplications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
