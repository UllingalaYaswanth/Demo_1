/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        moveLeft:{
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50px)' },
        },
      },
      animation:{
        moveLeft: 'moveLeft 2s infinite alternate', 
      }
    },
  },
  plugins: [],
}

