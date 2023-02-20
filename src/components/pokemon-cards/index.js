import React from 'react';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonCard from './PokemonCard';
import { PokemonCardsFlexContainer } from './styles';
import PropTypes from "prop-types";

const PokemonCards = ({ pokemonFilter, selectedPokemon, setSelectedPokemon }) => {
  const pokemonInfo = usePokemonInfo();

  return (
    <PokemonCardsFlexContainer container spacing={{ xs: 1, md: 3 }}>
      {pokemonInfo.map(
        ({
          image,
          name,
          types,
          weight,
          abilities,
          height
        }) => {
          if (name.toLowerCase().includes(pokemonFilter.toLowerCase())) {
            return (
              <PokemonCard
                key={name}
                name={name}
                image={image}
                types={types}
                weight={weight}
                height={height}
                selectedPokemon={selectedPokemon}
                setSelectedPokemon={setSelectedPokemon}
                ability={
                  abilities[0].ability.name
                }
              />
            );
          }
          return <></>;
        }
      )}
    </PokemonCardsFlexContainer>
  );
};

export default PokemonCards;

PokemonCards.propTypes = {
  pokemonFilter: PropTypes.string.isRequired,
  selectedPokemon: PropTypes.array.isRequired,
  setSelectedPokemon: PropTypes.func.isRequired,
};
