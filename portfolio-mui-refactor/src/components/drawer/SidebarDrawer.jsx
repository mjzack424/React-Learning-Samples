import { Drawer } from "@mui/material";
const SidebarDrawer = ({ children, drawerOpen, setDrawerOpen }) => {
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
