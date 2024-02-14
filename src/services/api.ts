import axios from 'axios';
import { updatedPokemonData } from '@/lib/utils';
import { PokemonDataProps } from '@/types';

const BASE_URL = 'https://pokemon-go-api.github.io/pokemon-go-api/api/';
const URLS = {
  AllPokemon: BASE_URL + 'pokedex.json',
  RaidBosses: BASE_URL + 'raidboss.json',
};

export const getAllPokemonData = async () => {
  try {
    const res = await axios.get(URLS.AllPokemon);
    const data = res.data;
    const updatedData = data
      .filter((item: PokemonDataProps) => item.assets)
      .map(updatedPokemonData);

    return updatedData;
  } catch (error) {
    console.log('Error fetching data: ', error);
  }
};

export const getCurrentRaidBosses = async () => {
  try {
    const res = await axios.get(URLS.RaidBosses);
    return res.data;
  } catch (error) {
    console.log('Error fetching data: ', error);
  }
};
