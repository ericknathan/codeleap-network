import { enviroment } from '@/config/enviroment';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: enviroment.API_BASE_URL,
})