import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Cambia esto a '/' cuando tengas dominio propio
  base: '/adguard-latam-web/',
})
