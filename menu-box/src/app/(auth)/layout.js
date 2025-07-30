export default function AuthLayout({ children }) {
  return (
    // Alterações:
    // 1. `from-menubox-cyan-light/20` -> `from-cyan-300/20 dark:from-cyan-800/20`
    // 2. `via-background` -> `via-white dark:via-black`
    // 3. `to-menubox-gray-light/30` -> `to-slate-300/30 dark:to-slate-700/30`
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300/20 via-white to-slate-300/30 dark:from-cyan-800/20 dark:via-black dark:to-slate-700/30 p-4">
      {children}
    </div>
  );
}