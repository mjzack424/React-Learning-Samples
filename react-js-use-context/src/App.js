import "./App.css";
import Product from "./components/Product";
import Profile from "./components/Profile";
import Box from "./components/Box";
import Npc from "./components/Npc";

import { ProductProvider } from "./context/productContext";
import { UserProvider } from "./context/userContext";
import { BoxProvider } from "./context/BoxContext";
import { NpcProvider } from "./context/NpcContext";
import { BlogProvider } from "./context/blog";
import Blog from "./components/Blog";

function App() {
  return (
    <NpcProvider>
      <BoxProvider>
        <BlogProvider>
          <ProductProvider>
            <UserProvider>
              <div className="App">
                <h1>useContext Example</h1>
                <Blog />
                <hr />
                <Npc />
                <hr />
                <Box />
                <hr />
                <Product />
                <hr />
                <Profile />
              </div>
            </UserProvider>
          </ProductProvider>
        </BlogProvider>
      </BoxProvider>
    </NpcProvider>
  );
}

export default App;
