import api from '../utils/apiEndpoint';

export const getEvents = async () => {
  try {
    const res = await api.get('/events/getEvents');
    return res.data;
  } catch (error) {
    console.error('Error fetching events:', error.response?.data || error.message);
    throw error;
  }
};