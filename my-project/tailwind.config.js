/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      playFair: "'PlayFair Display', serif",
      lato: "'lato', serif",
    },
  },
  plugins: [],
};
