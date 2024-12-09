import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    svgr(),
  ],
  publicDir: './public',
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
  assetsInclude: ['**/*.tgs'],
  resolve: {
    alias: {
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
    }
  },
});