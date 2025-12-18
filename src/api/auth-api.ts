import axios from '@/lib/axios';

export type LoginRequest = {
    username: string;
    password: string;
};

export const login = (request: LoginRequest) => {
    return axios.post('/api/login', request);
};

export const refreshToken = () => {
    return axios.post('/api/refresh');
};
