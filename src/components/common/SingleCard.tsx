import { Link } from 'react-router-dom';
import { PokemonDataProps } from '@/types';

type SingleCardProps = {
  data: PokemonDataProps;
};

const SingleCard = ({ data }: SingleCardProps) => {
  return (
    <Link to={`/pokemon/${data.dexNr}`} className="hover:scale-105 hover:shadow-lg transition-all">
      <div className="flex-center flex-col w-full mx-auto px-2 py-1 border rounded-xl shadow-md sm:flex-between md:flex-row gap-2">
        {/* Info */}
        <div className="flex-center flex-col gap-2 w-content whitespace-nowrap">
          {/* Title */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 text-center w-full">
            <div className="text-slate-300 w-full">#{data.dexNr}</div>
            <div className="font-bold text-sky-900 w-full">{data.names.Chinese}</div>
          </div>
          {/* Type */}
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
        </div>
        {/* Image */}
        <div className="flex-center w-20 h-20">
          <img
            src={data.assets.image}
            alt={data.formId}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
