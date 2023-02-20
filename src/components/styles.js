import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledCard = styled(Card)({
  padding: 16,
  width: 200,
  height: 200,
  margin: '16px 0',
});

export const PokemonInfoContainer = styled(Box)({
  textAlign: 'left',
});

export const PokemonName = styled(Typography)({
  textAlign: 'left',
});

export const CardContainer = styled(Box)(({ theme }) => ({
  width: '30%',
  justifyContent: 'center',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}));

export const PokemonFlexContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
  placeContent: 'center',
  [theme.breakpoints.up('lg')]: {
    width: '75%',
  }
}));
