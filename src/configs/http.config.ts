import axios, {AxiosError} from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';

const REQUEST_TIME_OUT = 30000;
const instance = axios.create({
  timeout: REQUEST_TIME_OUT,
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${Config.API_TOKEN}`,
  },
});

instance.interceptors.response.use((response) => {
  return response.data;
}, async function (error: AxiosError) {
  Alert.alert('Ops!', error.message);
});

export default instance;
