import React, { createContext, useContext, useState, useEffect } from 'react';

import { getAllPokemonData } from '@/services/api';
import { PokemonDataProps } from '@/types';

const DataContext = createContext<PokemonDataProps[]>([]);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPokemonData();

        if (data) {
          setPokemonData(data);
        }
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={pokemonData}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
