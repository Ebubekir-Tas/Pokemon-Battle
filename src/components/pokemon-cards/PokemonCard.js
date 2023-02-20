import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { typeColor } from '../../utils/colorByPokemonType'
import { PokemonInfoContainer, PokemonName, StyledCard, CardContainer } from './styles';

const PokemonCard = ({ name, image, types, randomAbility, weight }) => {
  const namesOfTypes = types.map(type => type.type.name);

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <CardContainer>
    <StyledCard variant="outlined">
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
      <Typography>ability: {randomAbility}</Typography>
      <Typography>weight: {weight}</Typography>
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
  randomAbility: PropTypes.string.isRequired,
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
