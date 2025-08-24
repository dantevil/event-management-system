import api from '../utils/apiEndpoint';

export const getVenues = async () => {
  try {
    const response = await api.get('/venues/getVenues');
    return response.data;
  } catch (error) {
    console.error('Error fetching venues:', error.response?.data || error.message);
    throw error;
  }
};