import { useDataContext } from '@/context/useContext';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { allGeneration, allTypes } from '@/constants/data';

const FilterButtons = () => {
  const { handleTypeClick, handleGenerationClick, handleResetClick } = useDataContext();

  return (
    <div className="flex-center flex-1 gap-4">
      {/* Filter */}
      <Menubar className="flex-center gap-1 text-center border-slate-200 text-slate-700 shadow-sm rounded-xl my-2">
        {/* Reset All */}
        <MenubarMenu>
          <MenubarTrigger
            className="cursor-pointer rounded-xl hover:bg-slate-200 transition ease-in-out duration-300"
            onClick={handleResetClick}
          >
            All
          </MenubarTrigger>
        </MenubarMenu>
        {/* Type */}
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer rounded-xl hover:bg-slate-200 transition ease-in-out duration-300">
            屬性 ▼
          </MenubarTrigger>
          <MenubarContent className="grid grid-cols-3 sm:flex-center flex-wrap gap-2 bg-white rounded-xl w-full p-2 ">
            {Object.values(allTypes).map(item => (
              <MenubarItem
                key={item.type}
                className="flex-center rounded-xl cursor-pointer font-bold text-white p-2"
                style={{ backgroundColor: item.color }} // TODO: 無法使用class加入
                onClick={() => handleTypeClick(item.zh_Type)}
              >
                {item.zh_Type}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        {/* Generation */}
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer rounded-xl hover:bg-slate-200 transition ease-in-out duration-300">
            世代 ▼
          </MenubarTrigger>
          <MenubarContent className="flex-center flex-wrap gap-2 bg-white rounded-xl p-2 w-1/2 sm:w-fit">
            {Object.values(allGeneration).map(item => (
              <MenubarItem
                key={item.id}
                className="flex-center rounded-xl cursor-pointer font-bold text-white p-2"
                style={{ backgroundColor: item.color }} // TODO: 無法使用class加入
                onClick={() => handleGenerationClick(item.zh_name)}
              >
                {item.region} ({item.id})
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default FilterButtons;
