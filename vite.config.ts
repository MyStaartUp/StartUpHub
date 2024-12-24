import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Lancez le serveur sur le port 3000
    open: false, // Ouvre le projet automatiquement dans le navigateur
    host: true, // Autorise l'accès via l'adresse réseau locale
  },
  resolve: {
    alias: {
      '@': '/src', // Utilisation de '@' pour accéder au dossier 'src'
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
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclusion de dépendances spécifiques
  },
});