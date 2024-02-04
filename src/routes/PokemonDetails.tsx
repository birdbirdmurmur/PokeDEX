import { useParams } from 'react-router-dom';
import { useDataContext } from '@/context/useContext';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from '@/components/common/Loader';

const PokemonDetails = () => {
  const { id } = useParams();
  const data = useDataContext().find(item => item.dexNr.toString() === id);

  if (!data) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          No.{data.dexNr} {data.names.Chinese}
        </h1>
        <p className="text-gray-500">{data.generation}</p>
      </div>

      <div className="flex justify-center gap-4 my-4">
        {data.assets && data.assets.image ? (
          <>
            <img
              src={data.assets.image}
              alt={data.formId}
              className="w-32 h-32 object-cover rounded"
            />
            <img
              src={data.assets.shinyImage}
              alt={data.formId}
              className="w-32 h-32 object-cover rounded"
            />
          </>
        ) : (
          <img
            src="/assets/icons/poke-ball.svg"
            alt={data.formId}
            className="w-32 h-32 object-cover rounded"
          />
        )}
      </div>

      <ul className="flex-center gap-4 mb-4">
        <li className="capitalize">{data.primaryType.names.Chinese}</li>
        {data.secondaryType && <li className="capitalize">{data.secondaryType.names.Chinese}</li>}
      </ul>

      <Card>
        <CardHeader>
          <CardTitle className="text-md">基本數值</CardTitle>
        </CardHeader>
        <CardContent>
          <p>HP: {data.stats.stamina}</p>
          <p>ATT: {data.stats.attack}</p>
          <p>DEF: {data.stats.defense}</p>
        </CardContent>
      </Card>

      <div className="flex justify-center my-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-md">一般招式</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.values(data.quickMoves).map(move => (
              <p key={move.id}>{move.names.English}</p>
            ))}
            {Object.values(data.eliteQuickMoves).map(move => (
              <p key={move.id}>{move.names.English} (elite)</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-md">特殊招式</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.values(data.cinematicMoves).map(move => (
              <li key={move.id}>{move.names.English}</li>
            ))}
            {Object.values(data.eliteCinematicMoves).map(move => (
              <li key={move.id}>{move.names.English} (elite)</li>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="font-bold mb-2">進化</h3>
        {data.evolutions.map(evo => (
          <ul key={evo.id}>
            <li>{evo.id}</li>
            <li>Candies: {evo.candies}</li>
          </ul>
        ))}
        <ul>
          {data.hasMegaEvolution && <li>Yes</li>}
          {Object.values(data.megaEvolutions).map(evo => (
            <li key={evo.id}>{evo.names.English}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
