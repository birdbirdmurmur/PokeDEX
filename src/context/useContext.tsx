import { createContext, useContext, useState, useEffect, SetStateAction, Dispatch } from 'react';

import { PokemonDataProps, markedItemsProps } from '@/types';
import useDebounce from '@/hooks/useDebounce';
import { usePokemonData } from '@/lib/queries/queries';
import Loader from '@/components/common/Loader';

type DataContextProps = {
  originalData: PokemonDataProps[];
  filteredData: PokemonDataProps[];
  currentPosts: PokemonDataProps[];
  currentPage: number;
  totalPages: number;
  markedItems: markedItemsProps[];
  viewTable: string;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleTypeClick: (type: string) => void;
  handleGenerationClick: (generation: string) => void;
  handleResetClick: () => void;
  handlePageChange: (page: number) => void;
  handleBookmarkClick: (dexNr: number, formId: string) => void;
  handleViewClick: (view: string) => void;
};

const DataContext = createContext<DataContextProps>({
  originalData: [],
  filteredData: [],
  currentPosts: [],
  currentPage: 1,
  totalPages: 1,
  markedItems: [],
  viewTable: 'card',
  searchTerm: '',
  setSearchTerm: () => {},
  handleTypeClick: () => {},
  handleGenerationClick: () => {},
  handleResetClick: () => {},
  handlePageChange: () => {},
  handleBookmarkClick: () => {},
  handleViewClick: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: allPokemonData, isSuccess, isLoading } = usePokemonData();

  const [originalData, setOriginalData] = useState<PokemonDataProps[]>([]);
  const [filteredData, setFilteredData] = useState<PokemonDataProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [markedItems, setMarkedItems] = useState<markedItemsProps[]>(() => {
    const storedItems = localStorage.getItem('markedItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [viewTable, setViewTable] = useState(() => {
    const storedView = localStorage.getItem('viewTable');
    return storedView || 'card';
  });

  const postsPerPage = 50; // 每頁顯示資料筆數
  const indexOfLastPost = currentPage * postsPerPage; // 當前頁面的最後一筆
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 當前頁面的第一筆

  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    localStorage.setItem('markedItems', JSON.stringify(markedItems));
  }, [markedItems]);

  useEffect(() => {
    if (isSuccess) {
      setOriginalData(allPokemonData);
      setFilteredData(allPokemonData);
    }
  }, [isSuccess]);

  useEffect(() => {
    const filteredData = originalData.filter(
      pokemon =>
        pokemon.names.English.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        pokemon.names.Chinese.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
    setFilteredData(filteredData);
  }, [originalData, debouncedSearch]);

  useEffect(() => {
    localStorage.setItem('viewTable', viewTable);
  }, [viewTable]);

  // =========Handle Function
  const handleTypeClick = (type: string) => {
    setCurrentPage(1);
    setFilteredData(
      originalData.filter(
        pokemon =>
          pokemon.primaryType.names.Chinese === type ||
          pokemon.secondaryType?.names.Chinese === type,
      ),
    );
  };

  const handleGenerationClick = (generation: string) => {
    setCurrentPage(1);
    setFilteredData(originalData.filter(pokemon => pokemon.generation === generation));
  };

  const handleResetClick = () => {
    setCurrentPage(1);
    setFilteredData(originalData);
    setSearchTerm('');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleBookmarkClick = (dexNr: number, formId: string) => {
    setMarkedItems(prevItems => {
      const isMarked = prevItems.some(item => item.dexNr === dexNr);
      if (isMarked) {
        return prevItems.filter(item => item.dexNr !== dexNr);
      } else {
        return [...prevItems, { dexNr, formId }];
      }
    });
  };

  const handleViewClick = (view: string) => {
    setViewTable(view);
  };

  // =========Handle Function

  if (isLoading) {
    return <Loader />;
  }

  const value = {
    originalData,
    filteredData,
    currentPosts,
    currentPage,
    totalPages,
    markedItems,
    viewTable,
    searchTerm,
    setSearchTerm,
    handleTypeClick,
    handleGenerationClick,
    handleResetClick,
    handlePageChange,
    handleBookmarkClick,
    handleViewClick,
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
