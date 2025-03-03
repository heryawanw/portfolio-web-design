/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#457D2D',
        light: '#D5F2B1',
        secondary: '#64748b',
        dark: '#0A0A0A',
      },
      screens: {
        '2xl': '1320px', 
      },
      textColor: ['active'],
    },
  },
  plugins: [],
};

