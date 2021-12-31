import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    value: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
