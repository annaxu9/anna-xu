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
        melrose: "#9DA0FF",
        melrose100: "#C7C8FF",
        lightgray: "#D3D9DF",
        beginner: "#FFFCBA", 
        intermediate: "#D1FF95", 
        advanced: "#95FFDF",
        yale: "#103567",
        pink: "#FF6275",
      },
    },
  },
  plugins: [],
}

