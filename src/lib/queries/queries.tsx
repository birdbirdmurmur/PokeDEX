import { useQuery } from '@tanstack/react-query';
import { getAllPokemonData } from '@/services/api';
import { PokemonDataProps } from '@/types';

export const usePokemonData = () => {
  return useQuery<PokemonDataProps[]>({
    queryKey: ['allPokemonData'],
    queryFn: getAllPokemonData,
    staleTime: 1000 * 60 * 20, // 20 minutes
  });
};
