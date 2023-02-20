import React from 'react';
import { HeaderContainer, SearchPokemon, BattleButton } from './styles';
import PropTypes from "prop-types";
import usePokemonBattle from '../../hooks/usePokemonBattle';

const Header = ({ pokemonFilter, setPokemonFilter, selectedPokemon }) => {
  const [winner, determineWinner] = usePokemonBattle();
  return (
    <>
  <HeaderContainer>
    <SearchPokemon 
      variant="filled"
      label="Search Pokemon"
      value={pokemonFilter}
      defaultValue={pokemonFilter}
      onChange={e => setPokemonFilter(e.target.value)}
    />
    <BattleButton variant="outlined" onClick={()=> determineWinner(selectedPokemon[0], selectedPokemon[1])}>Battle</BattleButton>
  </HeaderContainer>
  <div>{winner && `Winner: ${winner}`}</div>
  </>
)};

export default Header;

Header.propTypes = {
  pokemonFilter: PropTypes.string.isRequired,
  setPokemonFilter: PropTypes.func.isRequired,
  selectedPokemon: PropTypes.string.isRequired,
};
