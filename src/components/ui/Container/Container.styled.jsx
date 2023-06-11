import { Container } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),

  color: theme.palette.primary.main,
}));
