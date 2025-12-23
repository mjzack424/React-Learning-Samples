import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";
import CssBaseline from "@mui/material/CssBaseline";

// Create RTL cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// RTL-enabled theme
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: '"Cairo", "Roboto", "Arial", sans-serif', // Optional: use an Arabic-friendly font
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes styles and applies direction */}
      <div dir="rtl">
        <App />
      </div>
    </ThemeProvider>
  </CacheProvider>
);
