/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '30vh',
      },
      colors: {
        color1: "#C4EAC3", // fringyflower
        color2: "#63A083", // patina
        color3: "#FFCDCD", // cosmos
        color4: "#FFF9C1", // egg white
      }
    },
  },
  plugins: [],
}

