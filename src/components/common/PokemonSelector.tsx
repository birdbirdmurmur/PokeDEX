import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { calculateCP, cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useDataContext } from '@/context/useContext';

export const PokemonSelector = () => {
  const { filteredData } = useDataContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const stats = filteredData.find(pokemon => pokemon.names.Chinese === value)?.stats;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between rounded-xl"
        >
          <div className="text-center w-full">
            {value
              ? `No.${
                  filteredData.find(pokemon => pokemon.names.Chinese === value)?.dexNr
                } ${value}`
              : 'Select Pokemon...'}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="bg-white">
          <CommandInput placeholder="Search Pokemon..." />
          <CommandEmpty>No Pokemon found.</CommandEmpty>
          <CommandGroup className="max-h-[640px] overflow-y-auto">
            {filteredData.map(pokemon => (
              <CommandItem
                key={pokemon.dexNr}
                value={pokemon.names.Chinese}
                onSelect={currentValue => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
                className={cn(
                  'cursor-pointer hover:bg-slate-400',
                  value === pokemon.names.Chinese ? 'border rounded-xl' : '',
                )}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === pokemon.names.Chinese ? 'opacity-100' : 'opacity-0',
                  )}
                />
                <div>
                  No.{pokemon.dexNr} {pokemon.names.Chinese}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>

      <div className="flex-between">
        <div>ATT: {stats?.attack}</div>
        <div>DEF: {stats?.defense}</div>
        <div>HP: {stats?.stamina}</div>
      </div>

      <div>
        <div>最大CP:</div>
        <div>LV20: {stats && calculateCP(stats, 20)}</div>
        <div>LV30: {stats && calculateCP(stats, 30)}</div>
        <div>LV40: {stats && calculateCP(stats, 40)}</div>
      </div>
    </Popover>
  );
};
