import axios from '@/lib/axios';
import { useAuthStore } from '@/stores/auth';

export const me = () => {
    const auth = useAuthStore();
    return axios.get('/api/me', {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    });
};
