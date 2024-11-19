import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
              "@media (max-width: 640px)": {
                fontSize: "0.875rem",
              },
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
            },
            ".dark code": {
              backgroundColor: theme("colors.gray.800"),
            },
            pre: {
              backgroundColor: theme("colors.gray.100"),
              ".dark &": {
                backgroundColor: theme("colors.gray.800"),
              },
              borderRadius: theme("borderRadius.lg"),
              padding: theme("spacing.4"),
              "@media (max-width: 640px)": {
                padding: theme("spacing.3"),
              },
            },
            img: {
              borderRadius: theme("borderRadius.lg"),
            },
            h1: {
              "@media (max-width: 640px)": {
                fontSize: "1.5rem",
                lineHeight: "2rem",
              },
            },
            h2: {
              "@media (max-width: 640px)": {
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
} satisfies Config;
