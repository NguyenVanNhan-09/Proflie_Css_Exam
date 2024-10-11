/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            primary: "#FF6464",
         },
         screens: {
            mbi: { max: "375px" },
         },
      },
      fontFamily: {
         heebo: ["Heebo", "sans-serif"],
      },
   },
   plugins: [],
};
