// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(var(--primary))',
        'menubox-gray': 'hsl(var(--menubox-gray-hsl))',
        'menubox-cyan-light': 'hsl(var(--menubox-cyan-light-hsl))',
        'menubox-gray-light': 'hsl(var(--menubox-gray-light-hsl))',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: { /* ... */ },
        destructive: { /* ... */ },
        muted: { /* ... */ },
        accent: { /* ... */ },
        popover: { /* ... */ },
        card: { /* ... */ },
      },
      borderRadius: { /* ... */ },
      keyframes: {
        'slide-in-left': { /* ... */ },
        'slide-out-left': { /* ... */ },
        'slide-in-right': { /* ... */ },
        'slide-out-right': { /* ... */ },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'slide-out-left': 'slide-out-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.5s ease-out forwards',
      },
    },
  },
  plugins: [], // Vazio, pois tailwindcss-animate foi removido e não há outros plugins v4 compatíveis
};