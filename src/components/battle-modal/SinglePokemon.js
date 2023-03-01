import React from "react";
import { useRecoilState } from "recoil";
import { pokemonBattleWinnerState } from '../../recoil/atoms';
import { PokemonImg } from './styles';

const SinglePokemon = ({ image, name, index }) => {
  const [battleWinner] = useRecoilState(pokemonBattleWinnerState);
  return (
    <PokemonImg
      src={image}
      alt="pokemon_thumbnail"
      rotateFirstPokemon={index === 0}
      firstPokemonWins={battleWinner === name  && index === 0}
      secondPokemonWins={battleWinner === name && index === 1}
      loserPokemon={battleWinner !== name}
    />
  );
};

export default SinglePokemon;

