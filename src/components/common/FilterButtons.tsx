import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { allGeneration, allTypes } from '@/constants/data';

type FilterButtonsProps = {
  handleTypeClick: (type: string) => void;
  handleGenerationClick: (generation: string) => void;
};

const FilterButtons = ({ handleTypeClick, handleGenerationClick }: FilterButtonsProps) => {
  return (
    <Menubar className="flex-center text-center border-slate-200 text-slate-700 shadow-sm rounded-xl my-2">
      <MenubarMenu>
        {/* Type */}
        <MenubarTrigger className="cursor-pointer rounded-xl hover:bg-slate-200">
          Type ▼
        </MenubarTrigger>
        <MenubarContent className="grid grid-cols-3 gap-2 bg-white w-full">
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
        <MenubarTrigger className="cursor-pointer rounded-xl hover:bg-slate-200">
          Generation ▼
        </MenubarTrigger>
        <MenubarContent className="grid grid-cols-3 gap-2 bg-white w-full">
          {Object.values(allGeneration).map(item => (
            <MenubarItem
              key={item.id}
              className="flex-center rounded-xl cursor-pointer font-bold text-white p-2"
              style={{ backgroundColor: item.color }} // TODO: 無法使用class加入
              onClick={() => handleGenerationClick(item.zh_name)}
            >
              {item.zh_name}({item.region})
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default FilterButtons;
