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
      {/* Alterações: */}
      {/* 1. `bg-background` -> `bg-white dark:bg-slate-950` */}
      {/* 2. `text-foreground` -> `text-slate-900 dark:text-slate-50` */}
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50`}>
        {children}
      </body>
    </html>
  );
}