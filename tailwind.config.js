/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#D9D9D9",
        grey: "#848484",
        darkGrey: "#292929",
        "primary-button": "#1a4a7a",
        "secondary-button": "#cdcdf4",
        accent: "#1a1a7a",

        textBright: "#ffffff",
        textLightGrey: "#DFE1F3",
        textGrey: "#B4B4B4",
        textDarkGrey: "#414462",
        textHover: "#c8cad2",
        violet: "#4700DF",
        darkBg: "#242431",
        brightBg: "#DFE1F3",

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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gauntler: "url('/gauntler1.png')",
        gauntlerTile: "url('/gauntlerGameTile.png')",
        babushcatsTile: "url('/babushcatsGameTile.png')",
      },
      boxShadow: {
        imageShadow: "16px 16px 0px 0px rgb(91, 13, 218)",
        insetBottom: "inset 0px -24px 20px -20px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
