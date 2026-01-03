import { useContext } from "react";
import { Drawer } from "@mui/material";
import MainContext from "../../context";
const SidebarDrawer = ({ children }) => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 420,
        },
      }}
    >
      {children}
    </Drawer>
  );
};
export default SidebarDrawer;
