import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      cabinet_grotesk: ['Cabinet Grotesk', 'sans-serif'],
      manrope: ["var(--font-manrope)"],
    },
    extend: {
      backgroundImage: {
        // 'hero-background': "url('public/background.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // 'gradient-purple' : ['rgba(128, 58, 217, 0.2)', 'rgba(128, 58, 217, 1)'],
      },
    },
  },
  plugins: [],
};
export default config;
