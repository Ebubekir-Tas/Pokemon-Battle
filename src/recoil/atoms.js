import { atom } from 'recoil';

export const pokemonFilterState = atom({
  key: 'pokemonFilter',
  default: '',
});

export const selectedPokemonState = atom({
  key: 'selectedPokemon',
  default: [],
});

export const isPokemonBattlingState = atom({
  key: 'isPokemonBattling',
  default: false,
});

export const pokemonBattleWinnerState = atom({
  key: 'pokemonBattleWinner',
  default: '',
});
