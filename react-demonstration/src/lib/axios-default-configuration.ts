import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-demonstration-362b4.firebaseio.com'
});

instance.interceptors.request.use(requestConfig => {
    return requestConfig;
  });

export default instance;