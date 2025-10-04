// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/Login-react/', // ← required for GitHub Pages
//   plugins: [react()],
// })


// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Login-react/', // ← MUST match your GitHub repo name
  plugins: [react()],
});
