import axios from 'axios';
import { updatedPokemonData } from '@/lib/utils';
import { PokemonDataProps } from '@/types';

const BASE_URL = 'https://pokemon-go-api.github.io/pokemon-go-api/api/';
const URLS = {
  AllPokemon: `${BASE_URL}pokedex.json`,
  RaidBosses: `${BASE_URL}raidboss.json`,
};

export const getAllPokemonData = async () => {
  const res = await axios.get(URLS.AllPokemon);
  const data = res.data;
  // 直接篩選掉assets為空的資料
  const updatedData = await data
    .filter((item: PokemonDataProps) => item.assets)
    .map(updatedPokemonData);

  return updatedData;
};

export const getCurrentRaidBosses = async () => {
  const res = await axios.get(URLS.RaidBosses);
  const data = res.data;
  return data;
};
