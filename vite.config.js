import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Esto asegura que las rutas sean relativas, útil cuando despliegas a subcarpetas
  resolve: {
    alias: {
      '@': '/src', // Esto permite usar '@' como alias para acceder a la carpeta src
    },
  },
})
