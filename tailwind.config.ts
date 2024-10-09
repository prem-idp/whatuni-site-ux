import { Container } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1216px",
    },
    screens: {
      xs: "350px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xl2: "1300px",
      xxl: "1400px",
      xxl2: "1600px",
      xxxl: "1920px",
    },
    fontFamily: {
      farro: ["Farro", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      "heading-xl": ["5.2rem", "6.7rem"], //'52px','67px'
      "heading-lg": ["4.4rem", "5.7rem"], //'44px','57px'
      heading1: ["4rem", "5.2rem"], //'40px','52px'
      heading2: ["3.6rem", "4.7rem"], //'36px','47px'
      heading3: ["3.2rem", "4.2rem"], //'32px','42px'
      heading4: ["2.8rem", "3.6rem"], //'28px', '36px'
      heading5: ["2.4rem", "3.1rem"], //'24px', '31px'
      heading6: ["2rem", "2.6rem"], //'20px', '26 px'
      "para-lg": ["1.8rem", "2.4rem"], //'18px', '24px'
      para: ["1.6rem", "2.4rem"], //'16px', '24px'
      small: ["1.4rem", "2.1rem"], //'14px', '21px'
      "x-small": ["1.2rem", "1.8rem"], //'12px','18px'
      "xs-small": ["1rem", "2rem"], //'10px','20px'
      overline: ["1.4rem", "1.2rem"], //'14px', '12px'
    },
    extend: {
      colors: {
        "success-400": "#34D399",
        "success-700": "#047857",
        "blue-500": "#3460DC",
        "blue-200": "#0FBEFD",
        "neutral-200":"#E2E8F0",
        "blue-100":"#C8F0F5",
          grey: {
          300: "#333",
          400: "#707070",
          500: "#767676",
          600: "#e6e6e6",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#ADB2B6",
          400: "#82898F",
          500: "#5C656E",
          600: "#333F48",
          700: "#767676",
        },
        primary: {
          50: "#EDF7FF",
          100: "#E6F1FB",
          200: "#E6F1FB",
          300: "#0086F8",
          400: "#4664DC",
          500: "#0657AD",
        },
        secondary: {
          100: "#FDFAAF",
          200: "#B4E646",
          300: "#51C21A",
          400: "#0ACBA0",
          500: "#1E8782",
        },
        tertiary: {
          50: "#FFF7E0",
          100: "#FFF0BE",
          200: "#FFD700",
          300: "#FFA514",
          400: "#FF8300",
          500: "#973A14",
          600: "#BC5B00",
        },
        positive: {
          default: "#168721",
          light: "#EEF2C0",
          dark: "#106519",
        },
        negative: {
          default: "#BC0000",
          light: "#FFEEEE",
          dark: "#800101",
        },
      },
      backgroundImage: {
        gradientBlack:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        gradientBlack1:
          "linear-gradient(180deg, rgba(0,0,0,0) 50.5%, rgba(0,0,0,1) 100%)",
        gradient1: "linear-gradient(98.41deg, #6EE7B7 0%, #F59E0B 100%)",
        gradient2: "linear-gradient(98.41deg, #00BBFD 0%, #3460DC 100%)",
        gradient3: "linear-gradient(98.41deg, #10B981 0%, #00BBFD 100%)",
        gradient4: "linear-gradient(98.41deg, #0A28A3 0%, #34D399 100%)",
        gradient5: "linear-gradient(98.41deg, #FCD34D 0%, #69D8FF 100%)",
        gradient6: "linear-gradient(98.41deg, #87E0FF 0%, #FEF3C7 100%)",
        gradient7: "linear-gradient(98.41deg, #6EE7B7 0%, #BAEDFF 100%)",
        gradient8: "linear-gradient(98.41deg, #D97706 0%, #87E0FF 100%)",
        gradient9: "linear-gradient(98.41deg, #0A28A3 0%, #00A4DD 100%)",
        gradient10: "linear-gradient(98.41deg, #34D399 0%, #059669 100%)",
      },
      boxShadow: {
        "custom-1":
          "0px 2px 4px -2px rgba(16, 24, 40, 0.1), 0px 4px 6px -1px rgba(16, 24, 40, 0.1)",
        "custom-2": "0px 1px 2px 0px rgba(16,24,40,0.05)",
        "custom-3":
          "0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        "custom-4":
          "0px 2px 4px -2px rgba(16, 24, 40, 0.1),0px -2px 6px -1px rgba(16,24,40,0.07)",
        "custom-5":
          "0px 4px 6px -4px rgba(16,24,40,0.1),0px 10px 15px -3px rgba(16,24,40,0.1)",
        "custom-6": "0px 25px 50px -12px rgba(16, 24, 40, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
