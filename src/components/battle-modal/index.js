import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedPokemonState, isPokemonBattlingState } from '../../recoil/atoms';
import { Modal } from '@mui/material';
import { ModalContents } from './styles';
import SinglePokemon from './SinglePokemon';

export default function BattleModal() {
  const [selectedPokemon, setSelectedPokemon] = useRecoilState(selectedPokemonState)
  const [isPokemonBattling, setIsPokemonBattling] = useRecoilState(isPokemonBattlingState);

  return (
    <Modal
      open={isPokemonBattling}
      onClose={() => {
        setSelectedPokemon([]);
        setIsPokemonBattling(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContents>
        {selectedPokemon.map(({ name, image}, i) => (
          <SinglePokemon image={image} index={i} />
        ))}
      </ModalContents>
    </Modal>
  );
}
