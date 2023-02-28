import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { ModalContents } from './styles';

export default function BattleModal({ pokemon }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContents>
          {pokemon.map(({ name, image}) => {

          })}
        </ModalContents>
      </Modal>
  );
}
