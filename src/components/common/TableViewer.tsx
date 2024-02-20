import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '@/context/useContext';

import { TypeLabel } from '@/components/common/TypeLabel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

import { PokemonDataProps } from '@/types';

const TableViewer = () => {
  const { currentPosts, markedItems, handleBookmarkClick } = useDataContext();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>NO.</TableHead>
          <TableHead className="text-left w-40">Pokemon</TableHead>
          <TableHead className="text-left w-40">屬性</TableHead>
          <TableHead>最大CP(Lv40)</TableHead>
          <TableHead>最大CP(Lv50)</TableHead>
          <TableHead>攻擊</TableHead>
          <TableHead>防禦</TableHead>
          <TableHead>HP</TableHead>
          <TableHead>收藏</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentPosts.map((data: PokemonDataProps) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.dexNr}</TableCell>
            <TableCell>
              <Link to={`/pokemon/${data.dexNr}`} className="flex-start gap-2">
                <img
                  src={data.assets.image}
                  alt={data.formId}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
                <p>{data.names.Chinese}</p>
              </Link>
            </TableCell>
            <TableCell>
              <div className="flex-start gap-1 font-bold text-white text-xs sm:text-sm">
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
            </TableCell>
            <TableCell>{data.maxCP.lv40}</TableCell>
            <TableCell>{data.maxCP.lv50}</TableCell>
            <TableCell className="text-red-700">{data.stats?.attack}</TableCell>
            <TableCell className="text-green-700">{data.stats?.defense}</TableCell>
            <TableCell className="text-sky-700">{data.stats?.stamina}</TableCell>
            <TableCell>
              <Button
                className="flex-center w-full h-full"
                onClick={() => handleBookmarkClick(data.dexNr, data.formId)}
              >
                {markedItems.some(item => item.dexNr === data.dexNr) ? (
                  <FaBookmark />
                ) : (
                  <FaRegBookmark />
                )}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableViewer;
