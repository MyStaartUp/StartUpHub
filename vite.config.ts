import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // Répertoire pour les fichiers construits
    emptyOutDir: true, // Vide le répertoire 'dist' avant de le remplir
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@headlessui/react', '@heroicons/react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Limite de taille des chunks
  },
  base: '/',
  server: {
    host: true,
    port: 3000,
    strictPort: false,
    hmr: {
      overlay: true,
      clientPort: 3000
    }
  }
});