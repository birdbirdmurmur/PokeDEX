import { useEffect, useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { calculateIV } from '@/lib/utils';
import { PokemonSelector } from '@/components/common/PokemonSelector';

const Calculator = () => {
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [hp, setHp] = useState(0);
  const [iv, setIV] = useState(0);

  useEffect(() => {
    setIV(calculateIV({ attack, defense, hp }));
  }, [attack, defense, hp]);

  return (
    <div className="flex-start flex-col max-container mt-10">
      <Tabs defaultValue="CP_bar" className="flex-center flex-col">
        <TabsList>
          <TabsTrigger value="CP_bar" className="hover:bg-slate-100">
            CP計算機
          </TabsTrigger>
          <TabsTrigger value="IV_bar" className="hover:bg-slate-100">
            IV計算機
          </TabsTrigger>
        </TabsList>

        {/* CP */}
        <TabsContent value="CP_bar">
          {/* Select Pokemon to get stats */}
          <PokemonSelector />
          {/* get IV */}
          {/* use calculateCP to get CP */}
        </TabsContent>

        {/* IV */}
        <TabsContent value="IV_bar">
          {/* 建立一條1-15格可選取的bar */}
          <div>
            {/* ATT */}
            <div>
              <div>攻擊</div>
              <input
                type="range"
                min="0"
                max="15"
                value={attack}
                onChange={e => setAttack(+e.target.value)}
              />
              {attack}
            </div>
            {/* DEF */}
            <div>
              <div>防禦</div>
              <input
                type="range"
                min="0"
                max="15"
                value={defense}
                onChange={e => setDefense(+e.target.value)}
              />
              {defense}
            </div>
            {/* HP */}
            <div>
              <div>HP</div>
              <input
                type="range"
                min="0"
                max="15"
                value={hp}
                onChange={e => setHp(+e.target.value)}
              />
              {hp}
            </div>
            {/* Show IV */}
            <div>
              <div>IV {iv}%</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Calculator;

// Selector to get Pokemon Stats
