import { PiniaColada } from '@pinia/colada';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(PiniaColada, {
    queryOptions: {
        gcTime: 300_000, // 5 minutes
    },
});
app.mount('#app');
