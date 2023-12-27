/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
        'sm': '500px',
        'md': '650px',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        pinknew: "#F8D4FB",
        orangenew: "#E17344",
        melrose: "#9DA0FF",
        melrose100: "#C7C8FF",
        downriver: "#091647",
      },
    },
  },
  plugins: [],
}

