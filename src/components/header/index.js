import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { HeaderContainer, SearchPokemon, BattleButton } from "./styles";
import { Typography } from "@mui/material";
import { pokemonFilterState, selectedPokemonState, isPokemonBattlingState } from "../../recoil/atoms";
import usePokemonBattle from "../../hooks/usePokemonBattle";

const Header = () => {
  const [winner, determineWinner] = usePokemonBattle();
  const [pokemonFilter, setPokemonFilter] = useRecoilState(pokemonFilterState);
  const [selectedPokemon] = useRecoilState(selectedPokemonState);
  const [, setIsPokemonBattling] = useRecoilState(isPokemonBattlingState);

  return (
    <>
      <HeaderContainer>
        <SearchPokemon
          variant="filled"
          label="Search Pokemon"
          value={pokemonFilter}
          defaultValue={pokemonFilter}
          onChange={(e) => setPokemonFilter(e.target.value)}
        />
        <BattleButton variant="contained" disabled={selectedPokemon.length !== 2} onClick={() => setIsPokemonBattling(true)}>
          Battle
        </BattleButton>
      </HeaderContainer>
      <Typography variant="h3">{winner && `Winner: ${winner.charAt(0).toUpperCase() + winner.slice(1)}`}</Typography>
    </>
  );
};

Header.propTypes = {
  pokemonFilter: PropTypes.string.isRequired,
  setPokemonFilter: PropTypes.func.isRequired,
};

export default Header;
