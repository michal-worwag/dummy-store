import axios from 'axios';
import { store } from '@/store';
import { setTokens, logoutUser } from '@/features/auth/authSlice';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
});

// Flaga do śledzenia czy token jest odświeżany
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => axiosInstance(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const state = store.getState();
        const refreshToken = state.auth.refreshToken;

        const response = await axiosInstance.post('/auth/refresh', {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = response.data;

        store.dispatch(
          setTokens({ accessToken, refreshToken: newRefreshToken })
        );

        // Wykonaj ponownie wszystkie oczekujące requesty
        failedQueue.forEach((request) => request.resolve());
        failedQueue = [];

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        failedQueue.forEach((request) => request.reject(refreshError));
        failedQueue = [];
        store.dispatch(logoutUser());
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
