import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/multimedia/api/multimedia/',
  headers: { 'Content-Type': 'application/json' }
});

export const fetchItems = () => API.get('/');
