import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://librarymanagement-1-t0w6.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
