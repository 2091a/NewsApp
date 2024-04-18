/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,js}","./*.{html,js}","./static/script/*.{html,js}"],
  theme: {
    extend: {
      width:{
        "1500px":"1500px",
        "1200px":"1200px",
        "800px":"800px",
        "600px":"600px",
        "400px":"400px"
      },
      height:{
        "1500px":"1500px",
        "1200px":"1200px",
        "800px":"800px",
        "600px":"600px",
        "400px":"400px"
      },
      boxShadow:{
        "moti":"rgba(60,64,67,0.3) 0px 1px 2px 0px, rgba(60,64,67,0.15)0px 1px 3px 1px;"
      }
    },
  },
  plugins: [],
}

