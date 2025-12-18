import Axios from 'axios';

const axios = Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default axios;

export const AxiosInstance = Axios;
