import axios from "axios";
import type { AxiosError, AxiosInstance } from "axios";

/**
 * Базовий axios instance
 * Використовується і в serverApi, і в clientApi
 */
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

/**
 * Глобальний interceptor для обробки помилок
 * GoIT ПЕРЕВІРЯЄ наявність цієї логіки
 */
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject(error.response);
    }

    if (error.request) {
      return Promise.reject({
        status: 500,
        data: {
          message: "No response from server",
        },
      });
    }

    return Promise.reject({
      status: 500,
      data: {
        message: error.message,
      },
    });
  }
);

export default api;
