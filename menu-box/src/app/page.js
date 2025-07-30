// src/app/page.js
// Este pode ser um Server Component (não precisa de "use client" se o Link é de next/link)
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-menubox-cyan-light/20 via-background to-menubox-gray-light/30">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            <span className="text-primary">Menu</span>
            <span className="text-menubox-gray">Box</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Organize seus menus digitais de forma simples e elegante
          </p>
        </div>

        <div className="space-y-4">
          {/* O Link apontará para a sua rota de autenticação */}
          <Link href="/auth/login"> 
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Começar Agora
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            Acesse sua conta ou crie uma nova
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;