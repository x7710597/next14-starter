/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        anton: ["Anton", "sans-serif"]
      },

      backgroundColor: {
        "main-bg": "#FAF5EF",
      },

      colors: {
        primary: "#3BA1C8",
        secondary: "#FFC226"
      },

    },
  },
  plugins: [],
}
