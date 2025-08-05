// app/(auth)/login/page.js
"use client";

import { useState } from 'react';
// Corrigindo os nomes para o padrão singular, caso ainda não tenha feito
import { LoginForm } from '@/components/auth-forms/LoginForm';
import { RegisterForm } from '@/components/auth-forms/RegisterForm';
import { cn } from '@/lib/utils';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowLogin(prev => !prev);
      setIsAnimating(false);
    }, 500);
  };


  return (
    <div className="relative w-full max-w-md h-[550px] overflow-hidden rounded-lg shadow-xl bg-white dark:bg-slate-950 flex justify-center items-center">
      
      {/* Container para as animações */}
      <div className={cn(
        "absolute inset-0 flex justify-center items-center",
        showLogin ? "z-10" : "z-0"
      )}>
        <LoginForm
          onSwitchToRegister={handleSwitch}
          isAnimating={isAnimating && showLogin}
        />
      </div>
      
      <div className={cn(
        "absolute inset-0 flex justify-center items-center",
        !showLogin ? "z-10" : "z-0"
      )}>
        <RegisterForm
          onSwitchToLogin={handleSwitch}
          isAnimating={isAnimating && !showLogin}
        />
      </div>
    </div>
  );
}