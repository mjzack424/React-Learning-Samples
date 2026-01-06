import { createContext } from "react";

export default createContext({
  pageNumber: 0,
  drawerOpen: false,
  handlePageNumber: () => {},
  handleThemeChange: () => {},
  setDrawerOpen: () => {},
});
