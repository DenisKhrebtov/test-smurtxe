import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./index.css";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#666666",
    },
    secondary: {
      main: "#ccd5ae",
    },
    accent: {
      main: "#e9edc9",
    },
    braun: {
      main: "#d4a373,",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
