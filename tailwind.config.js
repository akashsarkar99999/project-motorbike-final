/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'image-1':"url('https://i.postimg.cc/VvvgSYf1/01.jpg')",
        'image-2':"url('https://i.postimg.cc/hGn0L8D2/02.jpg')",
        'image-3':"url('https://i.postimg.cc/FRWgX2j6/03.jpg')"
      },
      fontFamily:{
        inter: "'Inter', sans-serif",
        noto: "'Noto Sans', sans-serif"
      }
    },
  },
  plugins: [require('daisyui'),],
}

