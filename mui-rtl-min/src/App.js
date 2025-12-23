import "./App.css";
import { Button, createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, ThemeContext } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
//Note Create Custom Theme
const theme = createTheme({
  direction: "rtl",
});

//Note Ceate RTL cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeContext theme={theme}>
        <div className="App">
          <header className="App-header">Learn React</header>
          <main>
            <ul>
              <li>npm i @mui/material</li>
              <li>npm i stylis-plugin-rtl</li>
              <li>npm i stylis</li>
              <li>npm i @emotion/react"</li>
              <li>npm i @emotion/styled"</li>
            </ul>
            <div>
              <Button variant="contained">بزن روش</Button>
            </div>
          </main>
        </div>
      </ThemeContext>
    </CacheProvider>
  );
}

export default App;
