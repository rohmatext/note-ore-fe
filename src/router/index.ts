import { refreshToken } from '@/api/auth-api';
import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

import { handleHotUpdate, routes } from 'vue-router/auto-routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(async (to, _, next) => {
    const auth = useAuthStore();
    if (!auth.token) {
        try {
            const { data } = await refreshToken();
            await auth.setToken(data.data.token);
        } catch (error) {
            auth.$destroy();
            if (to.meta.requireAuth) {
                return next('/');
            }
        }
    }

    if (auth.user) {
        if (to.path === '/') {
            return next('/admin');
        }
    }

    next();
});

export default router;

if (import.meta.hot) {
    handleHotUpdate(router);
}
