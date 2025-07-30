"use client"; // Esta diretiva é importante se esta utilidade for usada em Client Components.

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina e condicionalmente aplica classes CSS, resolvendo conflitos do Tailwind CSS.
 * @param {...any} inputs - Vários argumentos que podem ser strings de classe, objetos, ou arrays.
 * @returns {string} Uma string de classe CSS combinada.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}