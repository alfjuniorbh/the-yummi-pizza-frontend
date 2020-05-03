import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production'
      ? 'http://45.76.138.129/the-yummi-pizza-backend/public/index.php/api'
      : 'http://localhost:8000/api',
});

export default api;
