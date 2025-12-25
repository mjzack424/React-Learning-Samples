import { createTheme } from "@mui/material/styles";
import {red, } from "@mui/material/colors"
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
    button: {
      fontFamily: "tahoma",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'dashed', color: 'secondary' },
              style: {
                border: `4px dashed ${red[500]}`,
              },
            },
            {
              props: { variant: 'dashed', color: 'black' },
              style: {
                border: `4px dashed ${"white"}`,
              },
            },
          ],
        },
      },
    },
  },
});
