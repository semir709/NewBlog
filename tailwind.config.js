/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004474",
        // secondary: "#41548D",
        secondary: "#868686",
        // gray: "#868686",
        customGray: "#3B3B3B",
        customLight: "#6D6D6D",
        action: "#00C6BA",
      },

      fontWeight: {
        light: "200",
        normal: "300",
        medium: "400",
        bold: "500",
      },
    },
  },
  plugins: [],
};
