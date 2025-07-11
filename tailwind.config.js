// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",
        foreground: "#111827",
        muted: "#6b7280",
        border: "#e5e7eb",
        ring: "#d1d5db",
        card: "#ffffff",
        accent: "#3b82f6"
      },
    },
  },
  plugins: [],
};
