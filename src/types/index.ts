export type PokemonDataProps = {
  id: string;
  formId: string;
  dexNr: number;
  generation: number;
  primaryType: {
    type: string;
    names: Names;
  };
  secondaryType: {
    type: string;
    names: Names;
  };
  assets: {
    image: string;
    shinyImage: string;
  };
};

export type Names = {
  English: string;
  German: string;
  French: string;
  Italian: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
}
