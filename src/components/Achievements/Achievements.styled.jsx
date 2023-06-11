import { Grid } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  placeContent: "center",
}));

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const Quantity = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(6)} ${theme.spacing(7)}`,
  border: `${theme.palette.primary.main} 2px solid`,
  borderRadius: "50%",
  fontSize: theme.spacing(4),
  boxShadow: "inset 0px 0px 18px 1px rgba(0,0,0,0.6)",
  backgroundColor: theme.palette.accent.main,
  transition: "transform 300ms ease",
  fontWeight: 600,
  color: theme.palette.braun.main,

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const StyledType = styled("p")(({ theme }) => ({
  fontSize: theme.spacing(3),
  fontWeight: 600,
}));
