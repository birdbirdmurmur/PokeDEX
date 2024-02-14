import { allGeneration, allPokemonName, allTypes } from '@/constants/data';
import { PokemonDataProps } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calculate CP
export function calculateCP(stats: PokemonDataProps['stats']) {
  return Math.round(
    ((stats.attack + 15) *
      Math.sqrt(stats.stamina + 15) *
      Math.sqrt(stats.defense + 15) *
      Math.pow(0.79030001, 2)) /
      10,
  );
}

export function getZhName(dexNr: number) {
  return allPokemonName[dexNr - 1].zh_name;
}

export function getZhType(type: string) {
  return allTypes.find(typeData => typeData.type === type)?.zh_Type ?? '';
}

export function getColor(type: string) {
  return allTypes.find(typeData => typeData.type === type)?.color ?? '';
}

export function updatedPokemonData(item: PokemonDataProps) {
  return {
    ...item,
    names: {
      ...item.names,
      Chinese: getZhName(item.dexNr),
    },
    generation: allGeneration[parseInt(item.generation) - 1].zh_name,
    primaryType: {
      ...item.primaryType,
      names: {
        ...item.primaryType.names,
        Chinese: getZhType(item.primaryType.names.English),
      },
      color: getColor(item.primaryType.names.English),
    },
    secondaryType: item.secondaryType && {
      ...item.secondaryType,
      names: {
        ...item.secondaryType.names,
        Chinese: getZhType(item.secondaryType.names.English),
      },
      color: getColor(item.secondaryType.names.English),
    },
    evolutions: item.evolutions.map(evo => ({
      ...evo,
      zh_name:
        allPokemonName.find(pokemon => pokemon.name.toLowerCase() === evo.id.toLowerCase())
          ?.zh_name ?? '',
    })),
    maxCP: {
      lv40: item.stats && calculateCP(item.stats),
    },
  };
}
