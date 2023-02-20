import React from 'react';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonCard from './PokemonCard';
import { PokemonCardsFlexContainer } from './styles';

const PokemonCards = () => {
  const pokemonInfo = usePokemonInfo();
  const pokemonFilter = '';
  return (
    <PokemonCardsFlexContainer>
      {pokemonInfo.map(
        ({
          image,
          name,
          types,
          weight,
          abilities,
        }) => {
          if (name.toLowerCase().includes(pokemonFilter.toLowerCase())) {
            return (
              <PokemonCard
                key={name}
                name={name}
                image={image}
                types={types}
                weight={weight}
                randomAbility={
                  abilities[
                    Math.floor(Math.random() * abilities.length)
                  ].ability.name
                }
              />
            );
          }
          return null;
        }
      )}
    </PokemonCardsFlexContainer>
  );
};

export default PokemonCards;