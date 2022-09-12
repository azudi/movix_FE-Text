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
        acearware: {
          // 50: '#EEF7EC',
          100: '#F2F2F2',
          200: 'rgba(0,100,210,0.06)',
          // 250: '#84C870',
          // 300: '#77C360',
          // 400: '#77B550',
          500: '#1271E3',
          // 700: '#009549',
        },
        acearwaregray: {
          100: '#F8F8F8',
          150: '#E6F0FB',
          200: '#697A69',
          // 300: '#9E9E9E',
          // 400: '#949494',
          // 500: '#414142',
          // 600: '#373737',
          // 700: '#272727',
        },
      },
      fontSize: {
        xxs: '.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
}
