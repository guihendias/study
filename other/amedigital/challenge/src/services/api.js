import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alodjinha.herokuapp.com',
});

export default api;
