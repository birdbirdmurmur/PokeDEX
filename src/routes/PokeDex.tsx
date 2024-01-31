import { Input } from '@/components/ui/input';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

const PokeDex = () => {
  return (
    <section className="flex-start flex-col gap-2 w-full h-full py-4">
      {/* SearchBar */}
      <div className="flex-center max-container w-screen">
        <Input
          type="search"
          placeholder="Search Pokémon, eg. 妙蛙種子、皮卡丘"
          className="text-slate-500 text-center border-slate-200 rounded-xl shadow-lg h-16 w-9/12"
        />
      </div>

      {/* filter buttons */}
      <div className="flex-center max-container w-screen ">
        <Menubar className="border-slate-200 rounded-xl text-slate-700">
          {/* Type */}
          <MenubarMenu>
            <MenubarTrigger>Type ▼</MenubarTrigger>
            <MenubarContent className="flex flex-row gap-4">
              <MenubarItem className="border">一般</MenubarItem>
              <MenubarItem className="border">格鬥</MenubarItem>
              <MenubarItem className="border">飛行</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* Generation */}
          <MenubarMenu>
            <MenubarTrigger>Generation ▼</MenubarTrigger>
            <MenubarContent className="flex flex-row gap-4">
              <MenubarItem className="border">第一世代(關都)</MenubarItem>
              <MenubarItem className="border">第二世代(城都)</MenubarItem>
              <MenubarItem className="border">第三世代(豐緣)</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* All pokemon list */}
      <div className="flex-center w-full border">
        <div className="flex-start flex-wrap -mx-2">
          <div className="w-1/3 border">Card</div>
          <div className="w-1/3 border">Card</div>
          <div className="w-1/3 border">Card</div>
          <div className="w-1/3 border">Card</div>
        </div>
      </div>
    </section>
  );
};

export default PokeDex;
