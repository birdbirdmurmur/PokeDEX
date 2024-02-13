import { Input } from '@/components/ui/input';
import SingleCard from '@/components/common/SingleCard';
import FilterButtons from '@/components/common/FilterButtons';
import Loader from '@/components/common/Loader';

import { useDataContext } from '@/context/useContext';
import { PokemonDataProps } from '@/types';

const PokeDex = () => {
  const { filteredData, searchTerm, setSearchTerm, handleTypeClick, handleGenerationClick } =
    useDataContext();

  if (filteredData.length === 0) return <Loader />;

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
      {/* All pokemon list */}
      <div className="flex-center w-full">
        <div className="grid grid-cols-3 gap-2 w-full sm:w-3/4 mx-2">
          {/* Single Card */}
          {filteredData.map((data: PokemonDataProps) => (
            <SingleCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeDex;
