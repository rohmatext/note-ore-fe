import { me } from '@/api/user-api';
import type { User } from '@/types/user';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const token = ref<string | null>(null);

    const setUser = (value: User) => {
        user.value = value;
    };

    const setToken = async (value: string) => {
        try {
            token.value = value;
            const { data } = await me();
            const u: User = (({ id, name, username }: User) => ({ id, name, username }))(data.data);
            setUser(u);
        } catch (error) {
            $destroy();
            throw error;
        }
    };

    const $destroy = () => {
        token.value = null;
        user.value = null;
    };

    return { user, token, setToken, $destroy };
});
