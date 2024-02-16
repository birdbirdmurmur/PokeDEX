import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import SingleCard from '@/components/common/SingleCard';
import FilterButtons from '@/components/common/FilterButtons';
// import Loader from '@/components/common/Loader';

import { useDataContext } from '@/context/useContext';
import { PokemonDataProps } from '@/types';
import { PokeDexPagination } from '@/components/common/PokeDexPagination';
import { Button } from '@/components/ui/button';
import TableViewer from '@/components/common/TableViewer';

const PokeDex = () => {
  const { filteredData, searchTerm, setSearchTerm, handleTypeClick, handleGenerationClick } =
    useDataContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewTable, setViewTable] = useState(() => {
    const storedView = localStorage.getItem('viewTable');
    return storedView || 'card';
  });

  const postsPerPage = 50; // per page
  const indexOfLastPost = currentPage * postsPerPage; // 當前頁面的最後一筆
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 當前頁面的第一筆

  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    localStorage.setItem('viewTable', viewTable);
  }, [viewTable]);

  // if (filteredData.length === 0) return <Loader />;

  return (
    <div className="flex-start flex-col max-container w-full gap-2 py-4">
      {/* SearchBar */}
      <Input
        type="search"
        placeholder="Search Pokémon, eg. 妙蛙種子、皮卡丘"
        className="text-slate-500 text-center border-slate-200 rounded-xl shadow-md h-16 w-3/4"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {/* filter buttons */}
      <FilterButtons
        handleTypeClick={handleTypeClick}
        handleGenerationClick={handleGenerationClick}
      />
      {/*  */}
      <div>
        <Button onClick={() => setViewTable('card')} className="hover:bg-slate-200">
          Card View
        </Button>
        <Button onClick={() => setViewTable('table')} className="hover:bg-slate-200">
          Table View
        </Button>
      </div>
      {/* All pokemon list */}
      <div className="flex-center flex-col w-full">
        {/* View */}
        {viewTable === 'card' ? (
          <div className="grid grid-cols-3 gap-2 w-full sm:w-3/4 mx-2">
            {/* Single Card */}
            {currentPosts.map((data: PokemonDataProps) => (
              <SingleCard key={data.id} data={data} />
            ))}
          </div>
        ) : (
          <TableViewer currentPosts={currentPosts} />
        )}
        {/* Pagination */}
        <PokeDexPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PokeDex;
