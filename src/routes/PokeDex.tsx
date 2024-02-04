import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { PokemonDataProps } from '@/types';
import { Link } from 'react-router-dom';
import { useDataContext } from '@/context/useContext';
import { allGeneration, allTypes } from '@/constants/data';
import Loader from '@/components/common/Loader';

const PokeDex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useDataContext();

  const filteredData = data.filter(
    pokemon =>
      pokemon.names.English.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.names.Chinese.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!data || !filteredData) return <Loader />;

  return (
    <section className="flex-start flex-col gap-2 w-full h-full py-4">
      {/* SearchBar */}
      <div className="flex-center max-container w-screen">
        <Input
          type="search"
          placeholder="Search Pokémon, eg. 妙蛙種子、皮卡丘"
          className="text-slate-500 text-center border-slate-200 rounded-xl shadow-md h-16 w-9/12"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* filter buttons */}
      <div className="flex-center max-container w-screen my-2">
        <Menubar className="flex-center text-center border-slate-200 text-slate-700 shadow-sm">
          {/* Type */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">Type ▼</MenubarTrigger>
            <MenubarContent className="flex-center flex-wrap gap-2 bg-white w-full">
              {Object.values(allTypes).map(item => (
                <MenubarItem
                  key={item.type}
                  className="border rounded-xl cursor-pointer font-bold text-white p-2"
                  style={{ backgroundColor: item.color }} // TODO: 無法使用class加入
                >
                  {item.zh_Type}
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          {/* Generation */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">Generation ▼</MenubarTrigger>
            <MenubarContent className="flex-center flew-wrap gap-2 bg-white w-full">
              {Object.values(allGeneration).map(item => (
                <MenubarItem
                  key={item.id}
                  className="border rounded-xl cursor-pointer font-bold text-white p-2"
                  style={{ backgroundColor: item.color }} // TODO: 無法使用class加入
                >
                  {item.zh_name}({item.region})
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* All pokemon list */}
      <div className="flex-center max-container w-screen">
        <div className="grid grid-cols-3 gap-2">
          {/* Single Card */}
          {filteredData.map((data: PokemonDataProps) => (
            <Link to={`/pokemon/${data.dexNr}`} key={data.id} className="hover:scale-105">
              <div className="col-span-1 flex-center flex-col w-full mx-auto px-4 py-2 border rounded-xl shadow-md sm:flex-between sm:flex-row gap-1">
                {/* Info */}
                <div className="flex-between flex-col sm:flex-start gap-1">
                  {/* Name */}
                  <div className="text-slate-400 sm:text-center">#{data.dexNr}</div>
                  <div className="font-bold text-sky-900">{data.names.Chinese}</div>
                  {/* Type */}
                  <div className="flex-start gap-1">
                    <label className="text-sky-700 text-sm">{data.primaryType.names.Chinese}</label>
                    <label className="text-sky-700 text-sm">
                      {data.secondaryType && data.secondaryType.names.Chinese}
                    </label>
                  </div>
                </div>
                {/* Image */}
                <div className="flex-center">
                  {data.assets && data.assets.image ? (
                    <img
                      src={data.assets.image}
                      alt={data.formId}
                      className="w-20 h-20 object-contain"
                    />
                  ) : (
                    <img
                      src="/assets/icons/poke-ball.svg"
                      alt={data.formId}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PokeDex;
