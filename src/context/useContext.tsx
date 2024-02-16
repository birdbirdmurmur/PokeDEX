import { createContext, useContext, useState, useEffect, SetStateAction, Dispatch } from 'react';

import { PokemonDataProps } from '@/types';
import useDebounce from '@/hooks/useDebounce';
import { usePokemonData } from '@/lib/queries/queries';
import Loader from '@/components/common/Loader';

type DataContextProps = {
  originalData: PokemonDataProps[];
  filteredData: PokemonDataProps[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleTypeClick: (type: string) => void;
  handleGenerationClick: (generation: string) => void;
};

const DataContext = createContext<DataContextProps>({
  originalData: [],
  filteredData: [],
  searchTerm: '',
  setSearchTerm: () => {},
  handleTypeClick: () => {},
  handleGenerationClick: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: allPokemonData, isSuccess, isLoading } = usePokemonData();

  const [originalData, setOriginalData] = useState<PokemonDataProps[]>([]);
  const [filteredData, setFilteredData] = useState<PokemonDataProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useDebounce(searchTerm, 500);

  // 當成功載入資料時，設定pokemonData
  useEffect(() => {
    if (isSuccess) {
      setOriginalData(allPokemonData);
      setFilteredData(allPokemonData);
    }
  }, [isSuccess]);

  // 當searchTerm改變時，篩選資料
  useEffect(() => {
    const filteredData = originalData.filter(
      pokemon =>
        pokemon.names.English.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        pokemon.names.Chinese.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
    setFilteredData(filteredData);
  }, [originalData, debouncedSearch]);

  // =========Handle Function
  const handleTypeClick = (type: string) => {
    setFilteredData(
      originalData.filter(
        pokemon =>
          pokemon.primaryType.names.Chinese === type ||
          pokemon.secondaryType?.names.Chinese === type,
      ),
    );
  };

  const handleGenerationClick = (generation: string) => {
    setFilteredData(originalData.filter(pokemon => pokemon.generation === generation));
  };
  // =========Handle Function

  if (isLoading) {
    return <Loader />;
  }

  const value = {
    originalData,
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
