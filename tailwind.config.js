// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     // Added colon after "screens"
//     screens: {
//       sm: "460px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//       "2xl": "1536px",
//     },
//     fontFamily: {
//       sans: '"Roboto", sans-serif',
//     },
//     extend: {
//       backgroundImage: {
//         "hero-pattern": "url('../cac-vom/public/images/cac-header1.jpg')",
//       },
//       fontSize: {
//         huge: "88rem",
//       },
//       height: {
//         screen: "100vh",
//       },
//     },
//   },
//   plugins: ["prettier-plugin-tailwindcss"],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    screens: {
      sm: "320px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    navLink: {
      display: "inline-block",
      padding: "8px 12px",
      color: "#333",
      textDecoration: "none",
      borderRadius: "4px",
      transition: "background-color 0.3s ease",
    },

    fontFamily: {
      sans: '"Roboto", sans-serif',
      "libre-baskerville-regular": ["Libre Baskerville", "serif"],
      "libre-baskerville-bold": ["Libre Baskerville", "serif"],
      "libre-baskerville-regular-italic": ["Libre Baskerville", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../cac-vom/public/images/cac-header1.jpg')",
      },
      fontSize: {
        huge: "88rem",
      },
      height: {
        screen: "100vh",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
