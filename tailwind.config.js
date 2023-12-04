/** @type {import('tailwindcss').Config} */
export default {
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      md: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... },
      '3xl': '1850px',
      
      '4xl': '2100px',
      '5xl': '2300px',
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
