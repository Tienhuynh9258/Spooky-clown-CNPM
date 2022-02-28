import axios from 'axios';
import { API_SERVER_URL } from '../config';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const AuthAPI = {
  loadUser: () => axios.get(`${API_SERVER_URL}/api/auth`),

  registerUser: (data) => axios.post(`${API_SERVER_URL}/api/users`, data, config),

  loginUser: (data) => axios.post(`${API_SERVER_URL}/api/auth`, data, config),
  
};
