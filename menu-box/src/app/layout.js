// app/layout.js
// Este é um Server Component por padrão.

import './globals.css'; // Importe seu arquivo CSS global (onde Tailwind CSS é importado)
import { Inter } from 'next/font/google'; // Importe uma fonte, se estiver usando.

// Configure a fonte. 'subsets: ['latin']' é comum.
const inter = Inter({ subsets: ['latin'] });

// Metadados são importantes para SEO.
export const metadata = {
  title: 'MenuBox',
  description: 'Gerencie seus menus digitais de forma simples e eficiente.',
};

// O componente do layout raiz deve ser um componente React padrão
// que recebe 'children' como props.
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-foreground`}> {/* Adicionado aqui */}
        {children}
      </body>
    </html>
  );
}