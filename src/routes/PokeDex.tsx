import { useDataContext } from '@/context/useContext';

import FilterButtons from '@/components/common/FilterButtons';
import TableViewer from '@/components/common/TableViewer';
import CardView from '@/components/common/CardView';
import PokeDexPagination from '@/components/common/PokeDexPagination';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaTh, FaTable } from 'react-icons/fa';

const PokeDex = () => {
  const { searchTerm, setSearchTerm, viewTable, handleViewClick } = useDataContext();

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
      <div className="flex-between w-3/4">
        <div className="flex-1"></div>
        {/* filter buttons */}
        <FilterButtons />
        {/* Toggle View */}
        <div className="flex justify-end flex-1 gap-0">
          <Button onClick={() => handleViewClick('card')} className="rounded hover:bg-slate-200">
            <FaTh /> Card
          </Button>
          <Button onClick={() => handleViewClick('table')} className="rounded hover:bg-slate-200">
            <FaTable />
            Table
          </Button>
        </div>
      </div>
      {/* All pokemon list */}
      <div className="flex-center flex-col w-full">
        {/* View */}
        {viewTable === 'card' ? <CardView /> : <TableViewer />}
        {/* Pagination */}
        <PokeDexPagination />
      </div>
    </div>
  );
};

export default PokeDex;
