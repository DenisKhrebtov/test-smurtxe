import { Paper, Button } from "@mui/material";

import { styled } from "@mui/material/styles";

export const HoverWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.accent.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  transition: "opacity 300ms ease, visibility 300ms ease",
  zIndex: 1,
  opacity: 0,
  visibility: "hidden",
}));

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

  transition: "all 300ms ease-in-out",

  "&:hover": {
    transform: hover,
  },

  "&:hover div": {
    transition: "all 300ms ease-in-out",
    visibility: "visible",
    opacity: 1,
  },

  "& p": {
    fontWeight: 600,
    color: theme.palette.braun.main,
  },
}));

export const StyledPrimaryBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.braun.main,
  color: theme.palette.primary.main,
  fontWeight: 600,

  "&:hover": {
    opacity: "0.8",
    backgroundColor: theme.palette.braun.main,
    color: theme.palette.primary.main,
  },
}));

export const StyledSecondaryBtn = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.braun.main,
  borderWidth: "2px",
  color: theme.palette.primary.main,
  fontWeight: 600,

  "&:hover": {
    opacity: "0.8",
    borderColor: theme.palette.braun.main,
    borderWidth: "2px",
    color: theme.palette.primary.main,
  },
}));
