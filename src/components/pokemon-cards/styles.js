import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)({
  padding: 16,
  width: 200,
  height: 225,
});

export const PokemonInfoContainer = styled(Box)({
  textAlign: "left",
});

export const PokemonName = styled(Typography)({
  textAlign: "left",
  fontWeight: 600,
});

export const CardContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "center",
  },
}));

export const PokemonCardsFlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  justifyContent: "space-between",
  margin: 16,
  [theme.breakpoints.up("md")]: {
    width: "75%",
  },
  [theme.breakpoints.up("sm")]: {
    "& > :nth-child(3n-2)": {
      justifyContent: "flex-start",
    },
    "& > :nth-child(3n-1)": {
      justifyContent: "center",
    },
    "& > :nth-child(3n)": {
      justifyContent: "flex-end",
    },
  },
}));


/*

todo: just make each card width 100% instead of this justify stuff.
but the white space shouldn't be 100%.
you need a component underneath the 100% that is the width of the content that has a white background

*/