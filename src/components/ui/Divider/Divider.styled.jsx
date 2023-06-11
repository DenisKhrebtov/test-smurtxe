import { Divider } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(6),
  borderWidth: "1px",

  color: theme.palette.primary.main,
}));
