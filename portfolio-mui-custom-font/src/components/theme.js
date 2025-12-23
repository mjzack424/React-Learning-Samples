import { createTheme } from "@mui/material/styles";
// RTL theme
export const theme = createTheme({
  direction: "ltr",
  palette: {
    mode: "dark",
    primary: {
      main: "#8BE9FD",
    },
    secondary: {
      main: "#BD93F9",
    },
    success: {
      main: "#50FA7B",
    },
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
});
