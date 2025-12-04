import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test-website/',   // 👈 THIS must match your repo name exactly
  build: {
    outDir: 'docs',         // 👈 This is what GitHub Pages will serve
  },
});

