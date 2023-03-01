import React from "react";
import { useRecoilState } from 'recoil';
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { typeColor } from '../../utils/colorByPokemonType'
import { PokemonInfoContainer, PokemonName, StyledCard, CardContainer } from './styles';
import { selectedPokemonState } from "../../recoil/atoms";

const PokemonCard = ({ name, image, types, ability, weight, height }) => {
  const namesOfTypes = types.map(type => type.type.name);
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const [selectedPokemon, setSelectedPokemon] = useRecoilState(selectedPokemonState)
  const handleCardClick = () => {
    const index = selectedPokemon.findIndex(pokemon => pokemon.name === name);
    if (index !== -1) {
      setSelectedPokemon(selectedPokemon.filter((_, i) => i !== index));
    } else if (selectedPokemon.length < 2) {
      setSelectedPokemon([...selectedPokemon, { name, type: types[0].type.name, image: image }]);
    };
  };

  const isSelected = selectedPokemon.some(pokemon => pokemon.name === name);
  const highlightSelectedCard = isSelected ? { boxShadow: '0 0 0 2px black, 0 0 0 5px gold' } : {};

  return (
    <CardContainer>
      <StyledCard
        variant="outlined"
        onClick={handleCardClick} 
        style={highlightSelectedCard}
      >
        <PokemonName>{capitalizedName}</PokemonName>
        <PokemonInfoContainer>
        <img src={image} alt="pokemon_thumbnail" />
        <Typography>
          {namesOfTypes.map((typeName, index) => (
            <React.Fragment key={typeName}>
              {index > 0 && ', '}
              <span style={{ color: typeColor(typeName) }}>{typeName}</span>
            </React.Fragment>
          ))}
        </Typography>
        <Typography>ability: {ability}</Typography>
        <Typography>weight: {weight}</Typography>
        <Typography>height: {height}</Typography>
        </PokemonInfoContainer>
      </StyledCard>
    </CardContainer>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  ability: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      slot: PropTypes.number,
      type: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    })
  ).isRequired,
};
