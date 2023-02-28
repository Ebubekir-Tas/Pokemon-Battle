import React from 'react';
import { useRecoilState } from 'recoil';
import { HeaderContainer, SearchPokemon, BattleButton } from './styles';
import PropTypes from "prop-types";
import usePokemonBattle from '../../hooks/usePokemonBattle';
import { Typography } from '@mui/material';
import { pokemonFilterState, selectedPokemonState } from '../../recoil/atoms';

const Header = () => {
  const [winner, determineWinner] = usePokemonBattle();
  const [pokemonFilter, setPokemonFilter] = useRecoilState(pokemonFilterState)
  const [selectedPokemon] = useRecoilState(selectedPokemonState)
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
      <Typography variant="h3">{winner && `Winner: ${winner.charAt(0).toUpperCase() + winner.slice(1)}`}</Typography>
    </>
)};

export default Header;

Header.propTypes = {
  pokemonFilter: PropTypes.string.isRequired,
  setPokemonFilter: PropTypes.func.isRequired,
};
