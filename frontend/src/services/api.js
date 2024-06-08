import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/authors`, { name, email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const googleLogin = () => {
  window.location.href = `${API_URL}/auth/google`;
};