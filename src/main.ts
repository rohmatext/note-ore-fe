import { PiniaColada } from '@pinia/colada';
import { createHead } from '@unhead/vue/client';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);
const pinia = createPinia();
const head = createHead({
    init: [
        {
            titleTemplate(title) {
                return title ? `${title} | ${import.meta.env.VITE_APP_NAME}` : import.meta.env.VITE_APP_NAME;
            },
        },
    ],
});

app.use(head);
app.use(router);
app.use(pinia);

app.use(PiniaColada, {
    queryOptions: {
        gcTime: 300_000, // 5 minutes
    },
});
app.mount('#app');
