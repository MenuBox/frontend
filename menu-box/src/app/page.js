// src/app/page.js
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    // Alteração 1: Gradiente de fundo com cores padrão
    <div className="min-h-screen flex items-center justify-center bg-slate-200 dark:bg-slate-900">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            {/* Alteração 2: Cores do título */}
            <span className="text-blue-600 dark:text-blue-600">Menu</span>
            <span className="text-slate-700 dark:text-slate-700">Box</span>
          </h1>
          {/* Alteração 3: Cor do parágrafo */}
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Organize seus menus digitais de forma simples e elegante
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/login">
            {/* Alteração 4: Cores do botão */}
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Começar Agora
            </Button>
          </Link>
          {/* Alteração 5: Cor do parágrafo secundário */}
          <p className="pt-2 text-sm text-slate-500 dark:text-slate-400">
            Acesse sua conta ou crie uma nova
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;