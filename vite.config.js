import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/my-app/"
})
