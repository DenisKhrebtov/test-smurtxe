import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

export const HeadingStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.primary.main,
  fontWeight: 500,
}));
