import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vite outputs to the correct directory
    assetsDir: 'assets', // Keep assets organized
  },
  server: {
    host: true // Allow external access if needed
  }
});
