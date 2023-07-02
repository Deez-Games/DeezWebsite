/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app//*.{js,ts,jsx,tsx,mdx}",
    "./pages//.{js,ts,jsx,tsx,mdx}",
    "./components/**/.{js,ts,jsx,tsx,mdx}",
 
    // Or if using src directory:
    "./src/*/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      lightGrey: "#D9D9D9",
      grey: "#848484",
      darkGrey: "#292929",
      violet: "#5B0DDA",
      'text': '#ffffff',
      'background': '#16213e',
      'primary-button': '#1a4a7a',
      'secondary-button': '#cdcdf4',
      'accent': '#1a1a7a',

      // 'text': '#ffffff',
      // 'background': '#16213E',
      // 'primary-button': '#3f82ee',
      // 'secondary-button': '#b9d1f9',
      // 'accent': '#3f82ee',
//         'text': '#ffffff',
// 'background': '#1f1d36',
// 'primary-button': '#58d55a',
// 'secondary-button': '#f2cbca',
// 'accent': '#5a58d5',


      } 
    },
  },
  plugins: [],
}

