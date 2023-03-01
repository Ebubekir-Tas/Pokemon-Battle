import React, { useState, useEffect } from 'react';
import SinglePokemon from './SinglePokemon';
import { useRecoilState } from 'recoil';
import { selectedPokemonState, isPokemonBattlingState, pokemonBattleWinnerState } from '../../recoil/atoms';
import { ModalContents, PokemonFlexContainer, WinnerHeader} from './styles';
import { Modal } from '@mui/material';

const BattleModal = () => {
  const [selectedPokemon, setSelectedPokemon] = useRecoilState(selectedPokemonState);
  const [isPokemonBattling, setIsPokemonBattling] = useRecoilState(isPokemonBattlingState);
  const [battleWinner, setBattleWinner] = useRecoilState(pokemonBattleWinnerState);
  const [displayWinner, setDisplayWinner] = useState(false);

  useEffect(() => {
    if (isPokemonBattling) {
      setTimeout(() => {
        setDisplayWinner(true);
      }, 3000);
    }
  }, [isPokemonBattling]);

  const handleCloseModal = () => {
    setSelectedPokemon([]);
    setIsPokemonBattling(false);
    setDisplayWinner(false);
    setBattleWinner('');
  };
  
  return (
    <Modal
      open={isPokemonBattling}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContents>
        {displayWinner && (
          <WinnerHeader variant="h3">
            {battleWinner && `Winner: ${battleWinner.charAt(0).toUpperCase() + battleWinner.slice(1)}`}
          </WinnerHeader>
        )}
        <PokemonFlexContainer>
          {selectedPokemon.map(({ name, image }, i) => (
            <SinglePokemon image={image} name={name} index={i} />
          ))}
        </PokemonFlexContainer>
      </ModalContents>
    </Modal>
  );
};

export default BattleModal;

