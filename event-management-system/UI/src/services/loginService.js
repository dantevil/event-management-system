import api from '../utils/apiEndpoint';

export const login = async (data) => {
  try {
    const res = await api.post('/auth/login', data);
    return res.data;
  } catch (error) {
    console.error('Login Failed:', error.response?.data || error.message);
  }
};
export default login;