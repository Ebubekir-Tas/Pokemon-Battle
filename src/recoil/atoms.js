import { atom } from 'recoil';

export const pokemonFilterState = atom({
  key: 'pokemonFilter',
  default: '',
});

export const selectedPokemonState = atom({
  key: 'selectedPokemon',
  default: [],
});