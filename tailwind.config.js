/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      xxs: ['8px', '10px'],
      xs: ['10px', '12px'],
      sm: ['14px', '17px'],
      base: ['18px', '22px'],
      lg: ['20px', '24px'],
      xl: ['22px', '27px'],
      '2xl':['25px','30px'],
      'mxl':['28px', '34px'],
      '3xl':['30px', '36px'],
      '4xl':['40px','48px'],
      '5xl': ['45px', '54px'],
      '6xl': ['60px','72px'],
    }
  },
  plugins: [],
}