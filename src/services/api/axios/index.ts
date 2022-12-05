// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { BASE_URL } from '../../../shared/constants';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

interface ErrorResponse {
  data: ErrorData;
}

interface ErrorData {
  success: boolean;
  status_code: number;
  status_message: string;
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const { response } = error;
    const { data } = response as ErrorResponse;
    throw new Error(data.status_message);
  }
);
