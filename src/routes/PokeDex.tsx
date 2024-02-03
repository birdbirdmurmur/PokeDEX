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
import { formatDexNr, formatZhName, formatZhType } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useDataContext } from '@/context/useContext';

const PokeDex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useDataContext();

  const filteredData = data.filter(
    pokemon =>
      pokemon.formId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formatZhName(pokemon.names.English).toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
        <Menubar className="border-slate-200 rounded-xl text-slate-700 shadow-sm">
          {/* Type */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">Type ▼</MenubarTrigger>
            <MenubarContent className="flex-between flex-row gap-2 bg-white">
              <MenubarItem className="border rounded-xl">一般</MenubarItem>
              <MenubarItem className="border rounded-xl">格鬥</MenubarItem>
              <MenubarItem className="border rounded-xl">飛行</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* Generation */}
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">Generation ▼</MenubarTrigger>
            <MenubarContent className="flex-between flex-row gap-2 bg-white">
              <MenubarItem className="border rounded-xl">第一世代(關都)</MenubarItem>
              <MenubarItem className="border rounded-xl">第二世代(城都)</MenubarItem>
              <MenubarItem className="border rounded-xl">第三世代(豐緣)</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* All pokemon list */}
      <div className="flex-center max-container w-screen">
        <div className="grid grid-cols-3 gap-2 px-2 w-11/12">
          {/* Single Card */}
          {filteredData.map((data: PokemonDataProps, key) => (
            <Link to={`/pokemon/${data.dexNr}`} key={key} className="hover:scale-105">
              <div className="col-span-1 flex-center flex-col w-full mx-auto px-4 py-2 border rounded-xl shadow-md sm:flex-between sm:flex-row">
                {/* Info */}
                <div className="flex-between flex-col items-center sm:items-start gap-4">
                  <div className="flex justify-center items-start flex-col gap-1">
                    <div className="text-slate-400">#{formatDexNr(data.dexNr)}</div>
                    <div className="font-bold text-sky-900">{formatZhName(data.names.English)}</div>
                  </div>
                  <div className="flex-center gap-1">
                    <label className="text-sky-700 text-sm">
                      {formatZhType(data.primaryType.names.English)}
                    </label>
                    <label className="text-sky-700 text-sm">
                      {data.secondaryType && formatZhType(data.secondaryType.names.English)}
                    </label>
                  </div>
                </div>
                {/* Image */}
                <div className="flex-center w-[80px] h-[80px]">
                  {data.assets && data.assets.image ? (
                    <img
                      src={data.assets.image}
                      alt={data.formId}
                      className="w-[60px] h-[60px] aspect-auto object-contain"
                    />
                  ) : (
                    <img
                      src="/assets/icons/poke-ball.svg"
                      alt={data.formId}
                      className="w-[40px] h-[40px] aspect-auto object-contain"
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
