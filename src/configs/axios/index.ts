import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
axiosClient.interceptors.response.use(
    (response) => response.data.results,
    (error) => Promise.reject(error)
);
