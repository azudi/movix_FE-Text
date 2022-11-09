/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        xxs: '375px',
        xs: '425px',
      },
      colors: {
       scellogreen: {
          500: '#007F00',
        },
        scellored: {
          500: '#D30000',
        },
        scelloo: {
          50:  '#F4F2FF',
          100: '#E5E5E5',
          300: '#6D5BD0',
          500: '#6E6893'
        },
      },
      fontSize: {
        xxs: '.625rem',
      },
      transform: {
        ".flip-x": { "--tw-rotate-x": "180deg" },
      }
    },
  },
  variants: {
    extend: {},
  },
}
