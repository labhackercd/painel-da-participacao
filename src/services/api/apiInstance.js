/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIS_BASE_URL,
});
