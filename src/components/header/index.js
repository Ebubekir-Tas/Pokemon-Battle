import React from 'react';
import { HeaderContainer, SearchPokemon, BattleButton } from './styles';

const Header = () => (
  <HeaderContainer>
    <SearchPokemon variant="filled" label="Search Pokemon" />
    <BattleButton variant="outlined">Battle</BattleButton>
  </HeaderContainer>
);

export default Header;
