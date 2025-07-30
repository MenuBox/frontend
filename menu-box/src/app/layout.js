// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MenuBox',
  description: 'Gerencie seus menus digitais de forma simples e eficiente.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/*
        CORREÇÃO FINAL:
        Trocamos 'bg-background' e 'text-foreground' por classes padrão do Tailwind.
        Isso define um fundo branco com texto escuro (modo claro) e um fundo
        quase preto com texto claro (modo escuro) para toda a aplicação.
      */}
      <body className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>
        {children}
      </body>
    </html>
  );
}