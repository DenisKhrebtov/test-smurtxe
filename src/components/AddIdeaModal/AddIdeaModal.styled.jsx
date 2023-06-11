import { Box, Button } from "@mui/material";

import { styled } from "@mui/material/styles";

export const ModalWindow = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#fff",
  border: `2px solid ${theme.palette.primary.main} `,
  boxShadow: 24,
  padding: theme.spacing(4),
}));

export const Wrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  justifyContent: "center",
}));

export const StyledFormControl = styled("form")(({ theme }) => ({
  gap: theme.spacing(3),
  width: "100%",
  display: "inline-flex",
  flexDirection: "column",
}));

export const AddButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.braun.main,
  color: theme.palette.primary.main,
  fontWeight: 700,

  "&:hover": {
    opacity: "0.9",
    backgroundColor: theme.palette.braun.main,
    cursor: "pointer",
  },
}));
