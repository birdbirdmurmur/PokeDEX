import { CMP, allGeneration, allPokemonName, allTypes } from '@/constants/data';
import { IVsProps, PokemonDataProps } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calculate CP
export function calculateCP(stats: PokemonDataProps['stats'], level: number) {
  const { attack, defense, stamina } = stats;
  const CMPnumber = CMP.find(item => item.level === level)?.value ?? 0;
  return Math.round(
    ((attack + 15) * Math.sqrt(stamina + 15) * Math.sqrt(defense + 15) * Math.pow(CMPnumber, 2)) /
      10,
  );
}

export function calculateIV({ attack, defense, hp }: IVsProps) {
  const IV = Math.round(((attack + defense + hp) / 45) * 100);
  return IV;
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
      lv20: item.stats && calculateCP(item.stats, 20),
      lv25: item.stats && calculateCP(item.stats, 25),
      lv30: item.stats && calculateCP(item.stats, 30),
      lv35: item.stats && calculateCP(item.stats, 35),
      lv40: item.stats && calculateCP(item.stats, 40),
      lv45: item.stats && calculateCP(item.stats, 45),
      lv50: item.stats && calculateCP(item.stats, 50),
      lv51: item.stats && calculateCP(item.stats, 51),
    },
  };
}
