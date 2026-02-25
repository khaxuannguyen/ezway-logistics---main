import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://kango-post.com/api',
  headers: {
    'Content-Type': 'application/json',
    'api-key': import.meta.env.VITE_KANGO_API_KEY,
  },
});

export default axiosClient;