import { defineConfig } from 'vite';

export default defineConfig({
  base: '/clases-html/', // Asegúrate de que las rutas sean relativas
  resolve: {
    alias: {
      '@': '/src', // Esto permite usar '@' como alias para acceder a la carpeta src
    },
  }
});
