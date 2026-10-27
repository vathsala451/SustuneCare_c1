import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Exact Requested Sustune Care Design Tokens
          navy: "#0B1F3A", // Midnight Navy (Signature brand sections & nav)
          navyDeep: "#061224",
          gold: "#D8B56D", // Champagne Gold (Accents, highlights, selected states)
          goldMuted: "#F3DC87",
          goldLight: "#FAF5EA",
          goldBronze: "#967530",
          ivory: "#F6F3ED", // Warm Ivory (Editorial content, service details, pricing, FAQs)
          teal: "#176B63", // Heritage Teal (Care indicators & verified status)
          tealDark: "#0E4842",
          tealLight: "#E8F3F1",
          slate: "#263548", // Slate Ink (Body text & high contrast elements)
          slateLight: "#5A6E85",
          white: "#FFFFFF",
          mist: "#E9EEF3", // Cool Mist (Subtle panels & backgrounds)
          border: "#DCE3EA", // Muted Border

          // Backwards-compatible aliases
          cerulean: "#176B63",
          ceruleanDark: "#0E4842",
          emerald: "#176B63",
          emeraldDark: "#0E4842",
          emeraldLight: "#E8F3F1",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        button: "8px",
        card: "16px",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(11, 31, 58, 0.04)",
        card: "0 12px 36px -6px rgba(11, 31, 58, 0.08)",
        cardHover: "0 24px 48px -12px rgba(11, 31, 58, 0.14)",
        goldGlow: "0 4px 20px -2px rgba(216, 181, 109, 0.35)",
        tealGlow: "0 4px 20px -2px rgba(23, 107, 99, 0.3)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
