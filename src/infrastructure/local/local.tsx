import axios from 'axios';

function LocalServer() {
  return axios.create({
    baseURL: '/api/',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
    validateStatus: (status) => status >= 200 && status <= 500,
  });
}

export default LocalServer;
