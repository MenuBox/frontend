// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // A seção 'content' permanece similar para escanear seus arquivos.
  content: [
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}', // Mantenha se seus componentes estiverem em 'src'
  ],
  // A seção 'theme' permanece para estender o tema padrão.
  theme: {
    extend: {
      // Cores: No Tailwind v4, é recomendado usar variáveis CSS para a maioria das cores.
      // Você já definiu hsl(var(--primary)) no globals.css, que é o ideal.
      // Para 'menubox-gray', 'menubox-cyan-light', 'menubox-gray-light',
      // você as define como variáveis CSS no globals.css (como fiz acima)
      // e as usa diretamente como `bg-[hsl(var(--menubox-cyan-light-hsl))]` ou
      // mapeia para um nome de cor aqui.
      colors: {
        // Exemplo: se você quer usar 'text-menubox-gray' no JSX
        'primary': 'hsl(var(--primary))',
        'menubox-gray': 'hsl(var(--menubox-gray-hsl))',
        'menubox-cyan-light': 'hsl(var(--menubox-cyan-light-hsl))',
        'menubox-gray-light': 'hsl(var(--menubox-gray-light-hsl))',
        // Outras cores do shadcn/ui referenciadas a partir de variáveis CSS
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Suas animações Tailwind CSS (ainda definidas aqui)
        'slide-in-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'slide-out-left': 'slide-out-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.5s ease-out forwards',
      },
    },
  },
  // 'plugins' não é mais usado da mesma forma na v4 para plugins como tailwindcss-animate.
  // Você precisará verificar a documentação do tailwindcss-animate para a v4 quando ela for lançada,
  // ou aplicar as animações diretamente via keyframes no Tailwind.
  // Por enquanto, removemos a linha do plugin.
  // plugins: [require("tailwindcss-animate")], // Removido para v4
};