import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// =========Format=========
// format dex number
export function formatDexNr(dexNr: number): string {
  return dexNr < 1000 ? dexNr.toString().padStart(4, '0') : dexNr.toString();
}
// =========Format=========
