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
      xs: "320px",
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
      regular: ["Poppins-Regular", "sans-serif"],
      semibold: ["Poppins-SemiBold", "sans-serif"],
      bold: ["Poppins-Bold", "sans-serif"],
    },
    fontSize: {
      // Desktop fontsize starts
      "heading-xl": ["5.2rem", "1.3"], //'52px','56px'
      "heading-lg": ["4.4rem", "1.3"], //'44px','48px'
      heading1: ["4rem", "1.3"], //'40px','48px'
      heading2: ["3.6rem", "1.3"], //'36px','44px'
      heading3: ["3.2rem", "1.3"], //'32px','40px'
      heading4: ["2.8rem", "1.3"], //'28px', '36px'
      heading5: ["2.4rem", "1.3"], //'24px', '32px'
      heading6: ["2rem", "1.3"], //'20px', '28px'
      //para fontsize starts
      "para-lg": ["1.8rem", "1.3"], //'18px', '24px'
      para: ["1.6rem", "1.5"], //'16px', '24px'
      small: ["1.4rem", "1.5"], //'14px', '20px'
      "x-small": ["1.2rem", "1.5"], //'12px','18px'
      //para fontsize ends
    },
    /** font size **/
    colors: {
      transparent: "transparent",
      generic: {
        black: "#000",
        white: "#fff",
        "grey-500": "#767676",
        "grey-400": "#707070",
      },
      neutral: {
        0: "#334155",
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#3B3D52",
        800: "#1E293B",
        900: "#0F172A",
      },
      primary: {
        50: "#EEFBFF",
        100: "#DDF6FF",
        200: "#BAEDFF",
        300: "#87E0FF",
        400: "#54D2FF",
        500: "#00BBFD",
        600: "#00A4DD",
        700: "#00759E",
        800: "#00465F",
        900: "#001720",
      },
      secondary: {
        50: "#F1F4FD",
        100: "#E4EAFA",
        200: "#C9D5F6",
        300: "#A0B5EF",
        400: "#6A8AE5",
        500: "#3460DC",
        600: "#173EAD",
        700: "#112F82",
        800: "#0C1F56",
        900: "#06102B",
      },
      success: {
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#A7F3D0",
        300: "#6EE7B7",
        400: "#34D399",
        500: "#10B981",
        600: "#059669",
        700: "#047857",
        800: "#065F46",
        900: "#064E3B",
      },
      warning: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FBBF24",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: "#92400E",
        900: "#78350F",
      },
      error: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },
      linearGradient: {
        1: "linear-gradient(98.41deg, #6EE7B7 0%, #F59E0B 100%)",
        2: "linear-gradient(98.41deg, #00BBFD 0%, #3460DC 100%)",
        3: "linear-gradient(98.41deg, #10B981 0%, #00BBFD 100%)",
        4: "linear-gradient(98.41deg, #0A28A3 0%, #34D399 100%)",
        5: "linear-gradient(98.41deg, #FCD34D 0%, #69D8FF 100%)",
        6: "linear-gradient(98.41deg, #87E0FF 0%, #FEF3C7 100%)",
        7: "linear-gradient(98.41deg, #6EE7B7 0%, #BAEDFF 100%)",
        8: "linear-gradient(98.41deg, #D97706 0%, #87E0FF 100%)",
        9: "linear-gradient(98.41deg, #0A28A3 0%, #00A4DD 100%)",
        10: " linear-gradient(98.41deg, #34D399 0%, #059669 100%)",
      },
    },
    extend: {
      backgroundImage: {
        'footer-border-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI4IiBmaWxsPSIjMDBCQkZEIi8+CjxyZWN0IHg9IjIiIHdpZHRoPSIyIiBoZWlnaHQ9IjgiIGZpbGw9IiNCQUVERkYiLz4KPC9zdmc+Cg==')",
      }
    },
  },
  plugins: [],
};
export default config;
