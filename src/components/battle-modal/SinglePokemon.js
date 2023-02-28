import React from "react";
import { PokemonImg } from './styles';

const SinglePokemon = ({ image, index }) => {
  return (
    <PokemonImg
      src={image}
      alt="pokemon_thumbnail"
      flipFirstPokemon={index === 0}
    />
  );
};

export default SinglePokemon;

