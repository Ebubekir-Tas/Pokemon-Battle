import { styled } from "@mui/system";
import { Box, TextField, Button } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: 16,
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    margin: 0,
    flexDirection: "column",
  },
}));

export const SearchPokemon = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: 8,
  width: 234,
  position: "relative",
  left: 0,
  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: 16,
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
  },
}));

export const BattleButton = styled(Button)(({ theme }) => ({
  height: 56,
  width: 120,
  position: "relative",
  marginRight: 16,
  [theme.breakpoints.up("md")]: {
    right: "-60px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    marginTop: 16,
    marginRight: 0,
  },
}));
