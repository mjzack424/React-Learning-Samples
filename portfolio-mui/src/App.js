import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";

import { HelmetProvider, Helmet } from "react-helmet-async";

// RTL cache
const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// RTL theme
const theme = createTheme({
  direction: "rtl",
});

function App() {
  return (
    <HelmetProvider>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Helmet>
            <title>وب سایت شخصی محمد جواد ذاکریان</title>
          </Helmet>

          <div style={{ padding: 24 }}>
            <h1>هدر</h1>
            <p>محتوا</p>
            <Button variant="contained">کلیک کن</Button>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </HelmetProvider>
  );
}

export default App;
