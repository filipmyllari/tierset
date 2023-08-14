/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#244584',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #14213d, #1b2f5a)',
      },
    },
  },
  plugins: [],
}
