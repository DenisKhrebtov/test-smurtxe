import { TableHead, TableCell } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.accent.main,
  fontSize: theme.spacing(4),
}));

export const StyledTableHeadCol = styled(TableCell)(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: theme.palette.primary.main,
  fontWeight: 500,
}));
