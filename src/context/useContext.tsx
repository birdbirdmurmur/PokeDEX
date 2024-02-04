import React, { createContext, useContext, useState, useEffect } from 'react';

import { getAllPokemonData } from '@/services/api';
import { PokemonDataProps } from '@/types';
import { allGeneration, allPokemonName, allTypes } from '@/constants/data';

const DataContext = createContext<PokemonDataProps[]>([]);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPokemonData();

        if (data) {
          const updatedData = data.map((item: PokemonDataProps) => {
            const updatedItem = {
              ...item,
              names: {
                ...item.names,
                Chinese: allPokemonName[item.dexNr - 1].zh_name,
              },
              generation: allGeneration[item.generation - 1].zh_name,
              primaryType: {
                ...item.primaryType,
                names: {
                  ...item.primaryType.names,
                  Chinese: allTypes.find(type => type.type === item.primaryType.names.English)
                    ?.zh_Type,
                },
              },
            };

            if (item.secondaryType) {
              updatedItem.secondaryType = {
                ...item.secondaryType,
                names: {
                  ...item.secondaryType.names,
                  Chinese:
                    allTypes.find(type => type.type === item.secondaryType.names.English)
                      ?.zh_Type ?? 'defaultChineseValue',
                },
              };
            }

            return updatedItem;
          });

          setPokemonData(updatedData);
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
