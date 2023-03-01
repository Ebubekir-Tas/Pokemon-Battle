import React from 'react';
import { useRecoilState } from 'recoil';
import { pokemonFilterState } from '../../recoil/atoms';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import PokemonCard from './PokemonCard';
import { PokemonCardsFlexContainer, CardContainer } from './styles';

const PokemonCards = () => {
  const pokemonInfo = usePokemonInfo();
  const [pokemonFilter] = useRecoilState(pokemonFilterState)

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
                ability={
                  abilities[0].ability.name
                }
              />
            );
          }
          return <CardContainer />;
        }
      )}
    </PokemonCardsFlexContainer>
  );
};

export default PokemonCards;
