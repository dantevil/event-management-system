import api from '../utils/apiEndpoint';

export const getOrganizers = async () => {
  try {
    const response = await api.get('/organizers/getOrganizers');
    return response.data;
  } catch (error) {
    console.error('Error fetching organizers:', error.response?.data || error.message);
    throw error;
  }
};