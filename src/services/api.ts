import axios from 'axios';
import env from "../endpoints.config";

export const api  = axios.create({
  baseURL: env.REACT_APP_BASE_URL_API,
})