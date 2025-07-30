// app/page.js
// Componentes de cliente não são necessários aqui, pois não há interatividade do cliente que exija hooks.
// Este pode ser um Server Component por padrão.
// Se você for adicionar interatividade futura, pode adicionar "use client" no topo.

import Link from "next/link"; // Importar Link do Next.js
import { Button } from "@/components/ui/button"; // Assumindo que o Button é um Client Component se usa hooks ou eventos.

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
          {/* Usar o componente Link do Next.js para navegação */}
          <Link href="/auth"> 
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

export default HomePage; // Exporta como default para ser a página principal