/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1C4980',
        secondaryColor: '#0073E6',
        secondaryLight: '#E5F1FC',
        borderColor: '#BACBD5',
        accentPurple: '#6548EE',
        accentPurpleLight: '#EBE8FD',
        accentPink: '#E9407A',
        accentPinkLight: '#FCE8EF',
        successGreen: '#05C165',
      },
    },
  },
  plugins: [],
};
