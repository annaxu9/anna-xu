/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '500px',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        pinknew: "#F8D4FB",
        orangenew: "#E17344",
        melrose: "#9DA0FF",
        downriver: "#091647",
      },
    },
  },
  plugins: [],
}

