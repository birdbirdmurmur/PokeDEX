import { useDataContext } from '@/context/useContext';

import SingleCard from '@/components/common/SingleCard';

import { PokemonDataProps } from '@/types';

const CardView = () => {
  const { currentPosts } = useDataContext();

  return (
    <div className="grid grid-cols-3 gap-2 w-full sm:w-3/4 mx-2">
      {currentPosts.map((data: PokemonDataProps) => (
        <SingleCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default CardView;
