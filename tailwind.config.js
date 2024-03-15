/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  "./default.js"],
  theme: {
      fontFamily: {
      DM: ['DM Sans', 'sans-serif'],
      },
      screens:{
        sm2: '326px',
        sm: '376px',
        tab: '426px',
        ibw: '650px',
        minL: '769px',
        L: '1025px',
        xL: '1280px',
        maxL: '1440px',
      },

    extend: {
      colors: {
      'softred': 'hsl(10, 79%, 65%)',
    },
  },
  },
  plugins: [],
}

