/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#322F2C",
        secondary: "#091F2B",
      },
      backgroundImage: {
        bannerImg: "",
      },
    },
  },
  plugins: [],
};
