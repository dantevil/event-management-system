import api from '../utils/apiEndpoint';

export const registerAttendee = async (eventId,title,emailId) => {
  try {
    const response = await api.post('/attendees/registerAttendee', { eventId,title,emailId });
    return response.data;
  } catch (error) {
    console.error('Error registering attendee:', error.response?.data || error.message);
    throw error;
  }
};

export const getAttendeesByEvent = async (eventId) => {
  try {
    const response = await api.get(`/attendees/getAttendees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching attendees:', error.response?.data || error.message);
    throw error;
  }
};