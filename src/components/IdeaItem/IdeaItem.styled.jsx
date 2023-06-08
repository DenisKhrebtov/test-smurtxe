import { Paper, Divider } from "@mui/material";

import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.accent.main,
  padding: theme.spacing(3),
  paddingTop: theme.spacing(6),
  textAlign: "center",
  color: theme.palette.primary.main,
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(6),
  borderWidth: "1px",

  color: theme.palette.primary.main,
}));
