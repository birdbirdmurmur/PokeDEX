import { createContext, useContext, useState, useEffect, SetStateAction, Dispatch } from 'react';

import { PokemonDataProps } from '@/types';
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

  const [filteredData, setFilteredData] = useState<PokemonDataProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (allPokemonData) {
      const filteredData = allPokemonData.filter(
        pokemon =>
          pokemon.names.English.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pokemon.names.Chinese.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredData(filteredData);
    }
  }, [allPokemonData, debouncedSearch]);

  // =========Handle Function
  const handleTypeClick = (type: string) => {
    if (allPokemonData) {
      setFilteredData(
        allPokemonData.filter(
          pokemon =>
            pokemon.primaryType.names.Chinese === type ||
            pokemon.secondaryType?.names.Chinese === type,
        ),
      );
    }
  };

  const handleGenerationClick = (generation: string) => {
    if (allPokemonData) {
      setFilteredData(
        allPokemonData.filter(pokemon => pokemon.generation.toString() === generation),
      );
    }
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
