// components/LoginForm.js
"use client"; // Esta diretiva é crucial para componentes que usam hooks de React e interatividade no cliente.

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// --- Schema Zod ---
// Definimos o schema normalmente. O Zod funciona perfeitamente em JavaScript.
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

// Em JavaScript, não usamos `type` ou `interface`.
// As props serão tipadas implicitamente ou documentadas via JSDoc se você quiser.
// Para React Hook Form, o tipo de dados do formulário será inferido em tempo de execução
// ou você precisaria usar um JSDoc complexo para anotação.
// Para este exemplo, removemos as anotações de tipo.

export function LoginForm({ onSwitchToRegister, isAnimating }) {
  const [isLoading, setIsLoading] = useState(false);

  // Aqui, `useForm` inferirá o tipo de `data` no `onSubmit`
  // com base no `zodResolver(loginSchema)`.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simular chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Login data:", data);
    // Você pode adicionar lógica de redirecionamento aqui, por exemplo:
    // import { useRouter } from 'next/navigation';
    // const router = useRouter();
    // router.push('/dashboard');
    setIsLoading(false);
  };

  return (
    <div className={`w-full transition-all duration-500 ${isAnimating ? 'animate-slide-out-left' : 'animate-slide-in-left'}`}>
      <Card className="w-full border-0 shadow-none bg-transparent">
        <CardHeader className="space-y-1 text-center pb-8">
          <CardTitle className="text-3xl font-bold">
            <span className="text-primary">Menu</span>
            <span className="text-menubox-gray">Box</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
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

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="text-center">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
            >
              Esqueceu a senha?
            </button>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-primary hover:underline font-medium"
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