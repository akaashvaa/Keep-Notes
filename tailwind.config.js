/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#242424',
      },
    },
    screens: {
      xs: '480px',
      sm: '900px',
      md: '1300px',
    },
  },
  plugins: [],
}
