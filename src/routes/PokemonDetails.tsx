import { useParams } from 'react-router-dom';
import { useDataContext } from '@/context/useContext';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from '@/components/common/Loader';

const PokemonDetails = () => {
  const { id } = useParams();
  const { filteredData } = useDataContext();

  const data = filteredData.find(data => data.dexNr.toString() === id);
  // ⬆️可用 new Map修改

  if (!data) return <Loader />;

  return (
    <div className="flex-center flex-col max-container">
      {/* Top */}
      <div className="flex-center flex-col w-full mt-3">
        {/* Title */}
        <div className="flex-between flex-col sm:flex-row gap-0 sm:gap-4 text-center w-1/2">
          <p className="base-medium text-slate-400">#{data.dexNr}</p>
          <h2 className="h2-bold text-sky-900">{data.names.Chinese}</h2>
          <div className="base-medium text-slate-400">{data.generation}</div>
        </div>
        {/* Image */}
        <div className="flex justify-center gap-4 my-2">
          <img
            src={data.assets.image}
            alt={data.formId}
            className="aspect-auto object-contain rounded"
          />
          <img
            src={data.assets.shinyImage}
            alt={data.formId}
            className="hidden sm:block aspect-auto object-contain rounded"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row gap-12 max-container w-full">
        {/* Details - Left */}
        <div className="flex flex-col gap-4 w-full">
          {/* Info */}
          <Card className="flex-center flex-col rounded-xl shadow-md w-full">
            {/* Type */}
            <CardHeader className="mb-2 p-0">
              <CardTitle className="text-md">屬性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex-center sm:flex-start gap-1 font-bold text-white text-xs sm:text-sm w-full">
                <label
                  className="px-2 py-1 rounded-xl"
                  style={{ backgroundColor: data.primaryType.color }}
                >
                  {data.primaryType.names.Chinese}
                </label>
                {data.secondaryType && (
                  <label
                    className="px-2 py-1 rounded-xl"
                    style={{ backgroundColor: data.secondaryType.color }}
                  >
                    {data.secondaryType.names.Chinese}
                  </label>
                )}
              </div>
            </CardContent>

            {/* Stats */}
            <CardHeader className="mb-2 p-0">
              <CardTitle className="text-md">基礎值</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex-center gap-5 w-48">
                <p>HP:</p>
                <div className="w-full h-2 border bg-slate-300 rounded-xl">
                  <div
                    className="h-2 bg-sky-500 rounded-xl"
                    style={{ width: `${(data.stats.stamina / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-center gap-5 w-48">
                <p>ATT:</p>
                <div className="w-full h-2 border bg-slate-300 rounded-xl">
                  <div
                    className="h-2 bg-sky-500 rounded-xl"
                    style={{ width: `${(data.stats.attack / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-center gap-5 w-48">
                <p>DEF:</p>
                <div className="w-full h-2 border bg-slate-300 rounded-xl">
                  <div
                    className="h-2 bg-sky-500 rounded-xl"
                    style={{ width: `${(data.stats.defense / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evolution */}
          <Card className="flex-center flex-col rounded-xl shadow-md">
            <CardHeader className="mb-2 p-0">
              <CardTitle className="text-md">進化</CardTitle>
            </CardHeader>
            <CardContent>
              {data.evolutions.map(evo => (
                <ul key={evo.id} className="flex gap-4">
                  <li>{evo.zh_name}</li>
                  <li>所需糖果: {evo.candies}</li>
                </ul>
              ))}
              <ul>
                {data.hasMegaEvolution && <li>Yes</li>}
                {Object.values(data.megaEvolutions).map(evo => (
                  <li key={evo.id}>{evo.names.English}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Details - Right */}
        {/* Moves */}
        <div className="flex flex-col gap-4 w-full">
          <Card className="flex-center flex-col rounded-xl shadow-md">
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
      </div>
    </div>
  );
};

export default PokemonDetails;
