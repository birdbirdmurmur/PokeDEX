import axios from "axios";

const URL = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';

export const getAllPokemonData = async () => {
  const res = await axios.get(URL)
  // console.log(res.data);
  return res.data;
};

