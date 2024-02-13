export type PokemonDataProps = {
  id: string;
  formId: string;
  dexNr: number;
  generation: string;
  names: Names;
  stats: {
    stamina: number;
    attack: number;
    defense: number;
  };
  primaryType: {
    type: string;
    names: Names;
    color: string;
  };
  secondaryType: {
    type: string;
    names: Names;
    color: string;
  };
  pokemonClass: string;
  quickMoves: { [key: string]: Move };
  cinematicMoves: { [key: string]: Move };
  eliteQuickMoves: { [key: string]: Move };
  eliteCinematicMoves: { [key: string]: Move };
  assets: {
    image: string;
    shinyImage: string;
  };
  assetForms: {
    image: string;
    shinyImage: string;
    form: string;
    costume: string;
    isFemale: boolean;
  }[];
  regionForms: { [key: string]: RegionForm };
  evolutions: Evolution[];
  hasMegaEvolution: boolean;
  megaEvolutions: { [key: string]: MegaEvolution };
};

export type Names = {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
  Chinese: string;
};

export type TypeInfo = {
  type: string;
  names: Names;
};

export type Move = {
  id: string;
  power: number;
  energy: number;
  durationMs: number;
  type: TypeInfo;
  names: Names;
  combat: CombatStats;
};

export type CombatStats = {
  energy: number;
  power: number;
  turns: number;
  buffs: {
    activationChance: number;
    attackerAttackStatsChange: number;
    attackerDefenseStatsChange: number;
    targetAttackStatsChange: number;
    targetDefenseStatsChange: number;
  };
};

export type Evolution = {
  id: string;
  formId: string;
  candies: number;
  item: {
    id: string;
    names: Names;
  };
  quests: {
    id: string;
    type: string;
    names: Names;
  }[];
  zh_name: string;
};

export type MegaEvolution = {
  id: string;
  names: Names;
  stats: {
    stamina: number;
    attack: number;
    defense: number;
  };
  primaryType: TypeInfo;
  secondaryType: TypeInfo;
  assets: {
    image: string;
    shinyImage: string;
  };
};

export type RegionForm = {
  id: string;
  formId: string;
  dexNr: number;
  generation: number;
  names: Names;
  stats: {
    stamina: number;
    attack: number;
    defense: number;
  };
  primaryType: TypeInfo;
  secondaryType: TypeInfo;
  pokemonClass: string;
  quickMoves: { [key: string]: Move };
  cinematicMoves: { [key: string]: Move };
  eliteQuickMoves: { [key: string]: Move };
  eliteCinematicMoves: { [key: string]: Move };
  assets: {
    image: string;
    shinyImage: string;
  };
  regionForms: { [key: string]: RegionForm };
  evolutions: Evolution[];
  hasMegaEvolution: boolean;
  megaEvolutions: { [key: string]: MegaEvolution };
};
