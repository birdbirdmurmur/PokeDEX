import axios from 'axios';

const BASE_URL = 'https://pokemon-go-api.github.io/pokemon-go-api/api/';
const URLS = {
  AllPokemon: BASE_URL + 'pokedex.json',
  RaidBosses: BASE_URL + 'raidboss.json',
};

export const getAllPokemonData = async () => {
  try {
    const res = await axios.get(URLS.AllPokemon);
    return res.data;
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
