// components/LoginForm.js
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export function LoginForm({ onSwitchToRegister, isAnimating }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Login data:", data);
    setIsLoading(false);
  };

  return (
    <div className={`w-full transition-all duration-500 ${isAnimating ? 'animate-slide-out-left' : 'animate-slide-in-left'}`}>
      <Card className="w-full border-0 shadow-none bg-transparent">
        <CardHeader className="space-y-1 text-center pb-8">
          <CardTitle className="text-3xl font-bold">
            {/* Alteração: Cores do título */}
            <span className="text-blue-600 dark:text-blue-400">Menu</span>
            <span className="text-slate-700 dark:text-slate-300">Box</span>
          </CardTitle>
          {/* Alteração: Cor da descrição */}
          <CardDescription className="text-slate-500 dark:text-slate-400">
            Entre na sua conta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
                className="h-12"
              />
              {errors.email && (
                // Alteração: Cor do texto de erro
                <p className="text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className="h-12"
              />
              {errors.password && (
                // Alteração: Cor do texto de erro
                <p className="text-sm text-red-500 dark:text-red-400">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              // Alteração: Cores do botão principal
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="text-center">
            <button
              type="button"
              // Alteração: Cor do link
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              Esqueceu a senha?
            </button>
          </div>

          <div className="text-center pt-4">
            {/* Alteração: Cor do texto secundário */}
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Não tem uma conta?{" "}
              <button
                type="button"
                onClick={onSwitchToRegister}
                // Alteração: Cor do link de cadastro
                className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
                disabled={isAnimating}
              >
                Criar uma conta
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}