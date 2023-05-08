import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@store': path.resolve(__dirname, './src/store'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@http': path.resolve(__dirname, './src/http'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@slices': path.resolve(__dirname, './src/store/slices'),
    },
  },
})
