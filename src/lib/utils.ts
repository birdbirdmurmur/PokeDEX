import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { allPokemonName, allTypes } from '@/constants/data';

// Shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// =========Format=========
// format dex number
export function formatDexNr(dexNr: number): string {
  return dexNr < 1000 ? dexNr.toString().padStart(4, '0') : dexNr.toString();
}

// format name to zh_name
export function formatZhName(nameData: string) {
  return allPokemonName.find(pokemon => pokemon.name === nameData)?.zh_name || '';
}

// format type to zh_type
export function formatZhType(typeData: string) {
  return allTypes.find(type => type.type === typeData)?.zh_Type || '';
}
// =========Format=========
