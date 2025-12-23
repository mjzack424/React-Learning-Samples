import Header from "./components/ui/Header";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// قبل (قدیمی):
//import rtlPlugin from "stylis-plugin-rtl";
// بعد (جدید و درست):
import rtlPlugin from "@mui/stylis-plugin-rtl";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { HelmetProvider, Helmet } from "react-helmet-async";


import { theme } from "./components/theme";
// RTL cache
const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
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
            <header>
              <Header />
            </header>

            <main>
              <Container>
                <Box sx={{ my: 2 }}>
                  {[...new Array(100)]
                    .map(
                      () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                    )
                    .join("\n")}
                </Box>
              </Container>
            </main>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </HelmetProvider>
  );
}

export default App;
