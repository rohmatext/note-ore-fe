import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: [
                {
                    src: './src/pages',
                    path: '',
                },
            ],
            dts: './src/types/router.d.ts',
        }),
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
