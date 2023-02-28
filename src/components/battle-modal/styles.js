import { Modal } from "@mui/material";
import { styled } from "@mui/system";

export const PokemonImg = styled('img')({
  transform: 'rotate(180deg) scaleY(-1)',
});

export const ModalContents = styled(Modal)({
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'space-around',
  top: '50%',
  transform: 'translateY(-50%)',
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.75)',
});