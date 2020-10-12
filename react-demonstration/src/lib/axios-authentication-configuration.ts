import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzMN8YKNDnf1WrO_dSpDqm0QJEWL7jYzM'
});

instance.interceptors.request.use(requestConfig => {
    return requestConfig;
  });

export default instance;