import { createContext, useContext, useState, useEffect, SetStateAction, Dispatch } from 'react';

import { PokemonDataProps } from '@/types';
import { allGeneration, allPokemonName, allTypes } from '@/constants/data';
import useDebounce from '@/hooks/useDebounce';
import { usePokemonData } from '@/lib/queries/queries';

type DataContextProps = {
  filteredData: PokemonDataProps[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleTypeClick: (type: string) => void;
  handleGenerationClick: (generation: string) => void;
};

const DataContext = createContext<DataContextProps>({
  filteredData: [],
  searchTerm: '',
  setSearchTerm: () => {},
  handleTypeClick: () => {},
  handleGenerationClick: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: allPokemonData } = usePokemonData();

  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]);
  const [filteredData, setFilteredData] = useState<PokemonDataProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useDebounce(searchTerm, 500);

  // Update Data
  useEffect(() => {
    if (allPokemonData) {
      const updatedData = allPokemonData.map((item: PokemonDataProps) => ({
        ...item,
        names: {
          ...item.names,
          Chinese: allPokemonName[item.dexNr - 1].zh_name,
        },
        generation: allGeneration[parseInt(item.generation) - 1].zh_name,
        primaryType: {
          ...item.primaryType,
          names: {
            ...item.primaryType.names,
            Chinese:
              allTypes.find(type => type.type === item.primaryType.names.English)?.zh_Type ?? '',
          },
          color: allTypes.find(type => type.type === item.primaryType.names.English)?.color ?? '',
        },
        secondaryType: item.secondaryType && {
          ...item.secondaryType,
          names: {
            ...item.secondaryType.names,
            Chinese:
              allTypes.find(type => type.type === item.secondaryType.names.English)?.zh_Type ?? '',
          },
          color: allTypes.find(type => type.type === item.secondaryType.names.English)?.color ?? '',
        },
        evolutions: item.evolutions.map(evo => ({
          ...evo,
          zh_name:
            allPokemonName.find(pokemon => pokemon.name.toLowerCase() === evo.id.toLowerCase())
              ?.zh_name ?? '',
        })),
      }));

      setPokemonData(updatedData);
    }
  }, [allPokemonData]);

  useEffect(() => {
    const filteredData = pokemonData.filter(
      pokemon =>
        pokemon.assets &&
        (pokemon.names.English.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pokemon.names.Chinese.toLowerCase().includes(searchTerm.toLowerCase())),
    );
    setFilteredData(filteredData);
  }, [pokemonData, debouncedSearch]);

  // =========Handle Function
  const handleTypeClick = (type: string) => {
    setFilteredData(
      pokemonData.filter(pokemon => pokemon.assets && pokemon.primaryType.names.Chinese === type),
    );
  };

  const handleGenerationClick = (generation: string) => {
    setFilteredData(
      pokemonData.filter(pokemon => pokemon.assets && pokemon.generation.toString() === generation),
    );
  };
  // =========Handle Function

  const value = {
    filteredData,
    searchTerm,
    setSearchTerm,
    handleTypeClick,
    handleGenerationClick,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
