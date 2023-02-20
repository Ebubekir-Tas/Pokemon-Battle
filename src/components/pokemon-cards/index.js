import React from 'react';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonCard from './PokemonCard';
import { PokemonFlexContainer } from './styles';

const PokemonCards = () => {
  const pokemonInfo = usePokemonInfo();
  return (
    <PokemonFlexContainer>
      {pokemonInfo.map(
        ({
          sprites: { front_default },
          name,
          types,
          weight,
          abilities,
        }) => (
          <PokemonCard
            name={name}
            image={front_default}
            types={types}
            weight={weight}
            randomAbility={
              abilities[
                Math.floor(Math.random() * abilities.length)
              ].ability.name
            }
          />
        )
      )}
    </PokemonFlexContainer>
  );
};

export default PokemonCards;