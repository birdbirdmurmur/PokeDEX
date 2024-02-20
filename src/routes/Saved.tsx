import { useDataContext } from '@/context/useContext';

import SingleCard from '@/components/common/SingleCard';

import { PokemonDataProps, markedItemsProps } from '@/types';

const Saved = () => {
  const { originalData } = useDataContext();
  const getMarkedItems = JSON.parse(localStorage.getItem('markedItems') || '[]');

  const data = originalData.filter((item: markedItemsProps) => {
    return getMarkedItems.some((markedItem: markedItemsProps) => markedItem.formId === item.formId);
  });

  return (
    <div className="flex-start flex-col max-container w-full gap-2 py-4">
      <h1 className="h2-bold">Your Saved</h1>
      <div className="grid grid-cols-3 gap-2 w-full sm:w-3/4 mx-2">
        {data.map((data: PokemonDataProps) => (
          <SingleCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Saved;
