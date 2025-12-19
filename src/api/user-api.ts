import axios from '@/lib/axios';
import { useAuthStore } from '@/stores/auth';
import type { User } from '@/types/user';

export type UpdateUserRequest = Omit<User, 'id' | 'role'>;
export type CreateUserRequest = UpdateUserRequest & { password: string };

export const me = () => {
    const auth = useAuthStore();
    return axios.get('/api/me', {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    });
};

export const listUser = () => {
    const auth = useAuthStore();

    return axios.get('/api/users', {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    });
};

export const userById = (id: number) => {
    const auth = useAuthStore();

    return axios.get(`/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    });
};

export const createUser = (request: CreateUserRequest) => {
    const auth = useAuthStore();

    return axios.post(`/api/users`, request, {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    });
};

export const updateUser = (id: number, request: UpdateUserRequest) => {
    const auth = useAuthStore();

    return axios.patch(`/api/users/${id}`, request, {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    });
};

export const deleteUser = (id: number) => {
    const auth = useAuthStore();

    return axios.delete(`/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    });
};
