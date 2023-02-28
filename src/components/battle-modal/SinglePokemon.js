import React from "react";
import PropTypes from "prop-types";
import { AttackAnimation, PokemonImg } from './styles';

const SinglePokemon = ({ image }) => {
  return (
    <>
      <PokemonImg src={image} alt="pokemon_thumbnail" />
    </>
  );
};

export default SinglePokemon;

