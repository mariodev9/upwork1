/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xl: "17px",
      "2xl": "27px",
      "3xl": "34px",
    },
    extend: {
      // backgroundImage: {},
      colors: {
        primary: "#1D90F4",
        primaryhover: "#027BE4",
        bginput: "#ECECEC",
        label: "#86888D",
        graysubtitle: "#79869F",
        outlinebutton: "#F4F7F9"
      },
    },
  },
  plugins: [],
};
