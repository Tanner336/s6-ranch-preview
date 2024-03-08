import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    return {
        // base: command === 'build' ? '/s6-ranch-preview' : '',
        base: '',
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        build: {
            target: 'esnext'
        },
        plugins: [react()],
        server: {
            port: 3000,
        },
    };
}
);
