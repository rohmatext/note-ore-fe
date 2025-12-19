import { listUser, userById } from '@/api/user-api';
import { defineQuery, useQuery } from '@pinia/colada';
import { ref } from 'vue';

export const USER_QUERY_KEYS = {
    root: ['users'] as const,
    byId: (id: number) => [...USER_QUERY_KEYS.root, id] as const,
    list: (cursor: string) => [...USER_QUERY_KEYS.root, cursor],
};

export const usePaginatedUsers = defineQuery(() => {
    const cursor = ref<string>('');

    const query = useQuery({
        key: USER_QUERY_KEYS.list(cursor.value),
        query: () => listUser(cursor.value),
    });

    return { cursor, query };
});

export const useUserById = defineQuery(() => {
    const id = ref<number>(0);

    const query = useQuery({
        key: USER_QUERY_KEYS.byId(id.value),
        query: () => userById(id.value),
    });

    return {
        id,
        query,
    };
});
