/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bggray1": "#F2F2F2",
        "bgwhite": "#FFFFFF",
        "beige": "#C3A69D",
        "graytext": "#58595B"
      },
      margin: {
        "normalx": "10rem",
        "mobilex": "1.5rem"
      },
      padding: {
        "normalx": "10rem",
        "mobilex": "1.5rem"
      }
    },
  },
  plugins: [],
}
