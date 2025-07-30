// app/(auth)/login/page.js
"use client"; // Necessário porque este componente gerencia o estado e as interações do usuário.

import { useState } from 'react';
import { LoginForm } from '@/components/auth-forms/LoginForm';
import { RegisterForm } from '@/components/auth-forms/RegisterForm'; // Crie este componente de registro
import { cn } from '@/lib/utils'; // Se você usa 'cn' para utilitários de classe do shadcn/ui
// import './login.css'; // Opcional: Para suas animações Tailwind customizadas

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowLogin(prev => !prev);
      setIsAnimating(false);
    }, 500); // Duração da sua transição (500ms para `duration-500`)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted p-4">
      <div className="relative w-full max-w-md h-[550px] overflow-hidden rounded-lg shadow-xl bg-background flex justify-center items-center">
        {/* Container para as animações */}
        <div className={cn(
          "absolute inset-0 flex justify-center items-center",
          showLogin ? "z-10" : "z-0"
        )}>
          <LoginForm
            onSwitchToRegister={handleSwitch}
            isAnimating={isAnimating && showLogin} // Só animar se estiver visível e animando
          />
        </div>
        
        <div className={cn(
          "absolute inset-0 flex justify-center items-center",
          !showLogin ? "z-10" : "z-0"
        )}>
          <RegisterForm
            onSwitchToLogin={handleSwitch}
            isAnimating={isAnimating && !showLogin} // Só animar se estiver visível e animando
          />
        </div>
      </div>
    </div>
  );
}