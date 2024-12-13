import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custumBlue: "#101750",
        pinkDefault: "#FB2E86",
        customBlue: "#111C85",
        custumPInk: "#FF2AAA",
        custumPink: "#F939BF",
      },
      width: {
        maximun: "1171px",
        mnimun: "95%",
      },
    },
  },
  plugins: [],
} satisfies Config;
