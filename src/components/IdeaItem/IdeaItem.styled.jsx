import { Paper } from "@mui/material";

import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme, hover, margin }) => ({
  backgroundColor: theme.palette.accent.main,
  padding: theme.spacing(3),
  paddingTop: theme.spacing(6),
  textAlign: "center",
  color: theme.palette.primary.main,
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  margin: margin && theme.spacing(2),

  transition: "transform 300ms ease",

  "&:hover": {
    transform: hover,
  },

  "& p": {
    fontWeight: 600,
    color: theme.palette.braun.main,
  },
}));
