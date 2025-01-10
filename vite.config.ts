import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
    host: true, // Permet l'accès depuis le réseau
    port: 5173  // Port par défaut de Vite
  }
});