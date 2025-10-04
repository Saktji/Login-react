/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'neon-pink': '#FF6EC7',
        'neon-cyan': '#00FFFF',
        'neon-red': '#FF3131',
        'neon-gray': '#CCCCCC',
        'neon-purple': '#9D00FF',
      },
      boxShadow: {
        glow: '0 0 10px #FF6EC7, 0 0 20px #FF6EC7',
      },
    },
  },
  plugins: [],
}

