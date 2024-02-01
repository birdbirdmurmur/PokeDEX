import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { getAllPokemonData } from '@/services/api';
import { PokemonDataProps } from '@/types';
import { formatDexNr } from '@/lib/utils';

const PokeDex = () => {
  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPokemonData();
      setPokemonData(data);
    };

    fetchData();
  }, []);

  return (
    <section className="flex-start flex-col gap-2 w-full h-full py-4">
      {/* SearchBar */}
      <div className="flex-center max-container w-screen">
        <Input
          type="search"
          placeholder="Search Pokémon, eg. 妙蛙種子、皮卡丘"
          className="text-slate-500 text-center border-slate-200 rounded-xl shadow-md h-16 w-9/12"
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
          {pokemonData.slice(0, 151).map(data => (
            <div className="col-span-1 flex-center flex-col w-full mx-auto px-4 py-2 border rounded-xl shadow-md sm:flex-between sm:flex-row">
              {/* Info */}
              <div className="flex-between flex-col items-center sm:items-start gap-4">
                <div className="flex-center flex-col gap-1 sm:flex-row">
                  <div>#{formatDexNr(data.dexNr)}</div>
                  <div className="font-bold text-sky-900">{data.formId}</div>
                </div>
                <div className="flex-center gap-1">
                  <label className="text-sky-700 text-sm">{data.primaryType.names.English}</label>
                  <label className="text-sky-700 text-sm">
                    {data.secondaryType && data.secondaryType.names.English}
                  </label>
                </div>
              </div>
              {/* Image */}
              <div className="flex-center w-full sm:w-[60px] h-[60px]">
                <img
                  src={data.assets.image}
                  alt={data.formId}
                  className="w-full h-full aspect-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PokeDex;
