/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-slate-blue": "#7065F0",
        "ghost-white": "#F7F7FD",
      },
      screens: {
        'sm': { 'max': '550px' },   
        'md': { 'max': '768px' },   
        "lg": { 'max': '1024px' },
        "xl": { 'max': '1300px' } ,  
        "2xl": {'max' : '1450px'}
      }
    },
  },
  plugins: [],
}