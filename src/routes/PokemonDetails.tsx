import { Link, useParams } from 'react-router-dom';
import { useDataContext } from '@/context/useContext';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Loader from '@/components/common/Loader';
import TypeLabel from '@/components/common/TypeLabel';

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
                <TypeLabel
                  backgroundColor={data.primaryType.color}
                  text={data.primaryType.names.Chinese}
                />
                {data.secondaryType && (
                  <TypeLabel
                    backgroundColor={data.secondaryType.color}
                    text={data.secondaryType.names.Chinese}
                  />
                )}
              </div>
            </CardContent>

            {/* Stats */}
            <CardHeader className="mb-2 p-0">
              <CardTitle className="text-md">基礎值</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {/* Attack */}
                  <TableRow className="flex-between border-none">
                    <TableCell className="p-0 w-12">攻擊：</TableCell>
                    <TableCell className="w-32 p-0">
                      <div className="h-2 border bg-slate-300 rounded-xl">
                        <div
                          className="h-2 bg-red-500 rounded-xl"
                          style={{ width: `${(data.stats.attack / 500) * 100}%` }}
                        ></div>
                      </div>
                    </TableCell>
                    <TableCell className="p-0">{data.stats.attack}</TableCell>
                  </TableRow>
                  {/* Defense */}
                  <TableRow className="flex-between border-none">
                    <TableCell className="p-0 w-12">防禦：</TableCell>
                    <TableCell className="w-32 p-0">
                      <div className="h-2 border bg-slate-300 rounded-xl">
                        <div
                          className="h-2 bg-green-500 rounded-xl"
                          style={{ width: `${(data.stats.defense / 500) * 100}%` }}
                        ></div>
                      </div>
                    </TableCell>
                    <TableCell className="p-0">{data.stats.defense}</TableCell>
                  </TableRow>
                  {/* HP */}
                  <TableRow className="flex-between border-none">
                    <TableCell className="p-0 w-12">HP：</TableCell>
                    <TableCell className="w-32 p-0">
                      <div className="h-2 border bg-slate-300 rounded-xl">
                        <div
                          className="h-2 bg-sky-500 rounded-xl"
                          style={{ width: `${(data.stats.stamina / 500) * 100}%` }}
                        ></div>
                      </div>
                    </TableCell>
                    <TableCell className="p-0">{data.stats.stamina}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>

            {/* Max CP */}
            <CardHeader>最大CP</CardHeader>
            <CardContent>Lv40: {data.maxCP.lv40}</CardContent>
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
                  {filteredData.find(pokemon => pokemon.id === evo.id) && (
                    <Link
                      to={`/pokemon/${filteredData.find(pokemon => pokemon.id === evo.id)?.dexNr}`}
                      className="flex-center gap-1"
                    >
                      <img
                        src={filteredData.find(pokemon => pokemon.id === evo.id)?.assets.image}
                        alt={filteredData.find(pokemon => pokemon.id === evo.id)?.formId}
                        className="aspect-auto object-contain rounded"
                      />
                    </Link>
                  )}
                </ul>
              ))}

              <ul>
                {data.hasMegaEvolution && <li>超級進化：</li>}
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
            <Table>
              {/* Quick Moves */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">一般招式</TableHead>
                  <TableHead className="text-right">傷害</TableHead>
                  <TableHead className="hidden text-right">冷卻時間</TableHead>
                  <TableHead className="hidden text-right">能量</TableHead>
                  <TableHead className="text-right">EPS</TableHead>
                  <TableHead className="text-right">DPS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.values(data.quickMoves).map(move => (
                  <TableRow key={move.id}>
                    <TableCell className="font-medium">{move.names.English}</TableCell>
                    <TableCell className="text-right">{move.power}</TableCell>
                    <TableCell className="hidden text-right">{move.durationMs / 1000}s</TableCell>
                    <TableCell className="hidden text-right">{move.energy}</TableCell>
                    <TableCell className="text-right">
                      {(move.energy / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right">
                      {(move.power / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                  </TableRow>
                ))}
                {Object.values(data.eliteQuickMoves).map(move => (
                  <TableRow key={move.id}>
                    <TableCell className="font-medium">{move.names.English}(elite)</TableCell>
                    <TableCell className="text-right">{move.power}</TableCell>
                    <TableCell className="hidden text-right">{move.durationMs / 1000}s</TableCell>
                    <TableCell className="hidden text-right">{move.energy}</TableCell>
                    <TableCell className="text-right">
                      {(move.energy / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right">
                      {(move.power / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/* Cinematic Moves */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">特殊招式</TableHead>
                  <TableHead className="text-right">傷害</TableHead>
                  <TableHead className="hidden text-right">冷卻時間</TableHead>
                  <TableHead className="hidden text-right">能量</TableHead>
                  <TableHead className="text-right">EPS</TableHead>
                  <TableHead className="text-right">DPS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.values(data.cinematicMoves).map(move => (
                  <TableRow>
                    <TableCell className="font-medium">{move.names.English}</TableCell>
                    <TableCell className="text-right">{move.power}</TableCell>
                    <TableCell className="hidden text-right">{move.durationMs / 1000}s</TableCell>
                    <TableCell className="hidden text-right">{move.energy}</TableCell>
                    <TableCell className="text-right">
                      {(move.energy / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right">
                      {(move.power / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                  </TableRow>
                ))}
                {Object.values(data.eliteCinematicMoves).map(move => (
                  <TableRow key={move.id}>
                    <TableCell className="font-medium">{move.names.English}(elite)</TableCell>
                    <TableCell className="text-right">{move.power}</TableCell>
                    <TableCell className="hidden text-right">{move.durationMs / 1000}s</TableCell>
                    <TableCell className="hidden text-right">{move.energy}</TableCell>
                    <TableCell className="text-right">
                      {(move.energy / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right">
                      {(move.power / (move.durationMs / 1000)).toFixed(1)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
