import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Typography, Grid } from "@mui/material";

// قبل (قدیمی):
//import rtlPlugin from "stylis-plugin-rtl";
// بعد (جدید و درست):
import rtlPlugin from "@mui/stylis-plugin-rtl";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { HelmetProvider, Helmet } from "react-helmet-async";

import { theme } from "./theme/index";

// RTL cache
const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
  return (
    <HelmetProvider>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Helmet>
            <title>وب سایت شخصی محمد جواد ذاکریان</title>
          </Helmet>
          {/* Grid System */}
          <Grid container spacing={1} sx={{ height: "100vh", padding: "8px" }}>
            {children}
          </Grid>
        </ThemeProvider>
      </CacheProvider>
    </HelmetProvider>
  );
};

export default MainLayout;
