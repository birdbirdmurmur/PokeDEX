import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
