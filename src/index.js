import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./screens/App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/config/theme"


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
