import api from '../utils/apiEndpoint';

export const registerEvent = async (data) => {
  try {
    const response = await api.post('/attendees/registerAttendee', data);
    return response.data;
  } catch (error) {
    console.error('Event registration failed:', error.response?.data || error.message);
    throw error;
  }
};