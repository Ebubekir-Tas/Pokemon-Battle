import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { HeaderContainer, SearchPokemon, BattleButton } from "./styles";
import { pokemonFilterState, selectedPokemonState, isPokemonBattlingState } from "../../recoil/atoms";
import usePokemonBattle from "../../hooks/usePokemonBattle";

const Header = () => {
  const [, determineWinner] = usePokemonBattle();
  const [pokemonFilter, setPokemonFilter] = useRecoilState(pokemonFilterState);
  const [selectedPokemon] = useRecoilState(selectedPokemonState);
  const [, setIsPokemonBattling] = useRecoilState(isPokemonBattlingState);

  const startBattle = () => {
    setIsPokemonBattling(true);
    determineWinner(selectedPokemon)
  };

  return (
    <HeaderContainer>
      <SearchPokemon
        variant="filled"
        label="Search Pokemon"
        value={pokemonFilter}
        defaultValue={pokemonFilter}
        onChange={(e) => setPokemonFilter(e.target.value)}
      />
      <BattleButton variant="contained" disabled={selectedPokemon.length !== 2} onClick={startBattle}>
        Battle
      </BattleButton>
    </HeaderContainer>
  );
};

Header.propTypes = {
  pokemonFilter: PropTypes.string.isRequired,
  setPokemonFilter: PropTypes.func.isRequired,
};

export default Header;
