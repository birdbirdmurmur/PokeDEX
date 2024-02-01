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

const PokeDex = () => {
  const [pokemonData, setPokemonData] = useState();

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
      <div className="flex-center w-full">
        <div className="flex-between flex-wrap max-w-4xl gap-4">
          {/* Single Card */}
          <div className="flex-between w-[280px] px-4 py-2 border rounded-xl shadow-md">
            {/* Left */}
            <div>
              <div className="flex-between gap-4">
                <div>#0001</div> {/* dexNr */}
                <div>妙蛙種子</div> {/* formId or Id or names.English */}
              </div>
              <div>
                <label>草</label> {/* primaryType.names.English */}
                <label>毒</label> {/* secondaryType.names.English */}
              </div>
            </div>
            {/* Right */}
            <div>
              <img src="/assets/icons/poke-ball.svg" alt="" width={60} height={60} />
            </div>
          </div>
          <div className="flex-between w-[280px] px-4 py-2 border rounded-xl shadow-md">
            {/* Left */}
            <div>
              <div className="flex-between gap-4">
                <div>#0001</div> {/* dexNr */}
                <div>妙蛙種子</div> {/* formId or Id or names.English */}
              </div>
              <div>
                <label>草</label> {/* primaryType.names.English */}
                <label>毒</label> {/* secondaryType.names.English */}
              </div>
            </div>
            {/* Right */}
            <div>
              <img src="/assets/icons/poke-ball.svg" alt="" width={60} height={60} />
            </div>
          </div>
          <div className="flex-between w-[280px] px-4 py-2 border rounded-xl shadow-md">
            {/* Left */}
            <div>
              <div className="flex-between gap-4">
                <div>#0001</div> {/* dexNr */}
                <div>妙蛙種子</div> {/* formId or Id or names.English */}
              </div>
              <div>
                <label>草</label> {/* primaryType.names.English */}
                <label>毒</label> {/* secondaryType.names.English */}
              </div>
            </div>
            {/* Right */}
            <div>
              <img src="/assets/icons/poke-ball.svg" alt="" width={60} height={60} />
            </div>
          </div>
          <div className="flex-between w-[280px] px-4 py-2 border rounded-xl shadow-md">
            {/* Left */}
            <div>
              <div className="flex-between gap-4">
                <div>#0001</div> {/* dexNr */}
                <div>妙蛙種子</div> {/* formId or Id or names.English */}
              </div>
              <div>
                <label>草</label> {/* primaryType.names.English */}
                <label>毒</label> {/* secondaryType.names.English */}
              </div>
            </div>
            {/* Right */}
            <div>
              <img src="/assets/icons/poke-ball.svg" alt="" width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokeDex;
