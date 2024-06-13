/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-to-tl': 'linear-gradient(to top left, #B75CFF, #671AE4)', // Diagonal gradient
      },
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
