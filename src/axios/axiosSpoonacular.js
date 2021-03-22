import axios from 'axios';

const spoonacular = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Default params
spoonacular.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params['apiKey'] = 'e8e64156f8fc4548b9deb4234293d973';
  return config;
});

export default spoonacular;
