import axios from 'axios';
import config from '~/config';

const handleResponse = (response) => [response.data || response];
const handleError = (error) => [null, error.response?.data || error];

const api = axios.create({
  baseURL: config.baseURL,
});

api.interceptors.response.use(handleResponse, handleError);

export { api };
