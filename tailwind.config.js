/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1408px',
      },
      margin: {
        ['screen-adaptive']: '10vw',
      },
      colors: {
        primary: '#4DABF7',
        lightblue: '#E7F5FF',
        lightgray: '#F8F8F8',
        dark3: '#5C5F66',
        gray9: '#212529',
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        xl: [
          '1.25rem',
          {
            lineHeight: '1.6',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2.25rem',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2.75rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
