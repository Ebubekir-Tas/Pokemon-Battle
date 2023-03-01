import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const PokemonImg = styled('img')(({ 
  rotateFirstPokemon, firstPokemonWins, secondPokemonWins, loserPokemon
}) => ({
  ...loserPokemon && {
    animation: 'flash 1s ease-in-out',
    animationDelay: '2s',
  },
  ...firstPokemonWins && {
    animation: 'chargeAttack1 2s linear forwards',
  },
  ...secondPokemonWins && {
      animation: 'chargeAttack2 2s linear forwards',
  },
  ...rotateFirstPokemon && {
    transform: 'rotate(180deg) scaleY(-1)',
  },
  '@keyframes chargeAttack1': {
    '0%': {
      transform: 'rotate(180deg) scaleY(-1)',
    },
    '60%': {
      transform: 'rotate(540deg) scaleY(-1)',
    },
    '70%': {
      transform: 'translateX(-20%) rotate(180deg) scaleY(-1)',
    },
    '80%': {
      transform: 'translateX(50%) rotate(180deg) scaleY(-1)',
    },
    '100%': {
      transform: 'translateX(0) rotate(180deg) scaleY(-1)',
    },
  },
  '@keyframes chargeAttack2': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '60%': {
      transform: 'rotate(360deg)',
    },
    '70%': {
      transform: 'translateX(20%)',
    },
    '80%': {
      transform: 'translateX(-50%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  '@keyframes flash': {
    '0%': {
      opacity: 0,
    },
    '25%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
    '75%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
}));

export const ModalContents = styled(Box)({
  top: '50%',
  transform: 'translateY(-50%)',
  position: 'relative',
  background: 'rgba(255, 255, 255, 1)',   border: '2px solid #000',
  boxShadow: 24,
  p: 4
});

export const PokemonFlexContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
});

export const WinnerHeader = styled(Typography)({
  display: 'flex',
  justifyContent: 'space-around',
});