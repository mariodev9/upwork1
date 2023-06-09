/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // TODO: CAMBIAR A EXTEND
    fontSize: {
      xl: "17px",
      "2xl": "27px",
      "3xl": "34px",
      navItem: "24px",
    },
    extend: {
      // backgroundImage: {},
      colors: {
        primary: "#1D90F4",
        primaryhover: "#027BE4",
        bginput: "#ECECEC",
        label: "#86888D",
        graysubtitle: "#79869F",
        outlinebutton: "#F4F7F9",
        // Gray
        navbarbg: "#E9E9E9",
        gray_navbar: "#939393",
      },
      height: {
        navbar: "89px",
      },
      spacing: {
        20: "4rem",
      },
    },
  },
  plugins: [],
};
