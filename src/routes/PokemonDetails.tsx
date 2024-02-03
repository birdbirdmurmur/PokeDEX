import { useDataContext } from '@/context/useContext';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams();
  const data = useDataContext().find(item => item.dexNr.toString() === id);

  console.log(data);

  // Loading
  if (!data) {
    return <div className="h-screen text-center">Loading...</div>;
  }

  return (
    <div className="h-screen text-center">
      <h1 className="font-bold">
        No.{data.dexNr} {data.formId}
      </h1>
      <p>Generation: {data.generation}</p>
      <div className="flex gap-4">
        {data.assets && data.assets.image ? (
          <>
            <img
              src={data.assets.image}
              alt={data.formId}
              className="w-[60px] h-[60px] aspect-auto object-contain"
            />
            <img src={data.assets.shinyImage} alt={data.formId} />
          </>
        ) : (
          <img
            src="/assets/icons/poke-ball.svg"
            alt={data.formId}
            className="w-[40px] h-[40px] aspect-auto object-contain"
          />
        )}
      </div>
      <ul>
        <li>{data.primaryType.names.English}</li>
        <li>{data.secondaryType && data.secondaryType.names.English}</li>
      </ul>
      <ul>
        <li>HP: {data.stats.stamina}</li>
        <li>ATT: {data.stats.attack}</li>
        <li>DEF: {data.stats.defense}</li>
      </ul>
      <div>
        <h3 className="font-bold">一般招式</h3>
        {Object.values(data.quickMoves).map(move => (
          <li>{move.names.English}</li>
        ))}
        {Object.values(data.eliteQuickMoves).map(move => (
          <li>{move.names.English} (elite)</li>
        ))}
        <h3 className="font-bold">特殊招式</h3>
        {Object.values(data.cinematicMoves).map(move => (
          <li>{move.names.English}</li>
        ))}
        {Object.values(data.eliteCinematicMoves).map(move => (
          <li>{move.names.English} (elite)</li>
        ))}
      </div>
      {/* Evolutions */}
      <div>
        <h3 className="font-bold">進化</h3>
        {data.evolutions.map(evo => (
          <ul>
            <li>{evo.id}</li>
            <li>Candies: {evo.candies}</li>
          </ul>
        ))}
        <ul>
          {data.hasMegaEvolution && <li>Yes</li>}
          {Object.values(data.megaEvolutions).map(evo => (
            <li>{evo.names.English}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
