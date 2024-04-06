/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      boxShadow: {
        'innerCustom': '0 0px 0px 1px rgba(195, 212, 233, 0.4)',
      }
    },
  },
  plugins: [],
}

