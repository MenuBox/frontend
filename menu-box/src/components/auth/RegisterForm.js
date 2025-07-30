// components/RegisterForm.js
"use client"; // Essencial para componentes que usam hooks do React (useState, useForm) e interatividade.

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; // Zod funciona perfeitamente em JavaScript para validação.

// Importe seus componentes de UI da Shadcn/ui.
// Certifique-se de que esses arquivos também são .js ou .jsx se você não estiver usando TypeScript no projeto.
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Definimos o schema do Zod normalmente.
const registerSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  // Se você tiver um campo de confirmação de senha, adicione-o aqui no schema.
  // Por exemplo:
  // confirmPassword: z.string().min(6, "Confirme sua senha"),
}).refine((data) => data.password, { // Exemplo de validação de refinamento se houver confirmPassword
  // message: "As senhas não coincidem",
  // path: ["confirmPassword"],
});


// Removemos as anotações de tipo do TypeScript para as props e a função.
export function RegisterForm({ onSwitchToLogin, isAnimating }) {
  const [isLoading, setIsLoading] = useState(false);

  // useForm: Em JavaScript, o tipo de dados `data` no `onSubmit` será inferido em tempo de execução
  // com base no `zodResolver(registerSchema)`.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // A função `onSubmit` recebe os dados do formulário.
  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simular chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Register data:", data);
    // Aqui você faria a chamada real para sua API de registro.
    // Ex: const response = await fetch('/api/register', { method: 'POST', body: JSON.stringify(data) });
    // Ex: const result = await response.json();
    setIsLoading(false);
  };

  return (
    <div className={`w-full transition-all duration-500 ${isAnimating ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
      <Card className="w-full border-0 shadow-none bg-transparent">
        <CardHeader className="space-y-1 text-center pb-8">
          <CardTitle className="text-3xl font-bold">
            <span className="text-primary">Menu</span>
            <span className="text-menubox-gray">Box</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Crie sua conta para começar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                {...register("name")}
                className="h-12"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

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
                <p className="text-sm text-destructive">{errors.email.message}</p>
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
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            {/* Se você tivesse um campo de confirmação de senha, ele ficaria aqui */}
            {/*
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword")}
                className="h-12"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>
            */}

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Criando conta..." : "Registrar"}
            </Button>
          </form>

          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-primary hover:underline font-medium"
                disabled={isAnimating}
              >
                Fazer login
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}