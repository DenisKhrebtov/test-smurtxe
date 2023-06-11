import { Paper } from "@mui/material";

import { styled } from "@mui/material/styles";

export const AddButton = styled(Paper)(({ theme, margin }) => ({
  backgroundColor: theme.palette.braun.main,
  padding: theme.spacing(3),
  paddingTop: theme.spacing(6),
  color: theme.palette.primary.main,
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: theme.spacing(7),

  margin: margin && theme.spacing(2),

  transition: "opacity 300ms ease",

  "&:hover": {
    opacity: "0.8",
    cursor: "pointer",
  },

  "& p": {
    fontWeight: 600,
    color: theme.palette.braun.main,
  },
}));
