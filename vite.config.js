import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  define: {
    'process.env.VITE_MY_SERVICE_ID': process.env.VITE_MY_SERVICE_ID,
    'process.env.VITE_MY_TEMPLATE_ID': process.env.VITE_MY_TEMPLATE_ID,
    'process.env.VITE_MY_PUBLIC_KEY': process.env.VITE_MY_PUBLIC_KEY,
  },
})
