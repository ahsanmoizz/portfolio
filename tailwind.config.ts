import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          500: "#ff16d1",
        },
      },
      boxShadow: {
        neon: "0 0 20px #ff16d1",
      },
    },
  },
  plugins: [],
};
export default config;
