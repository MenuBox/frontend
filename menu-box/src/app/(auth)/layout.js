// src/app/(auth)/layout.js

export default function AuthLayout({ children }) {
  return (
    // CORRIGIDO: Usando cores padrão do Tailwind para o gradiente
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300/20 via-white to-slate-300/30 dark:from-cyan-800/20 dark:via-black dark:to-slate-700/30 p-4">
      {children}
    </div>
  );
}