import { useContext } from "react";
import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

import MainContext from "../../context";
const ActionButtonDrawer = () => {
  const { setDrawerOpen, drawerOpen } = useContext(MainContext);
  return (
    <Box
      display={{ xs: "block", md: "none" }}
      sx={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 10000,
      }}
    >
      <Fab
        color="primary"
        aria-label="Sidebar"
        size="small"
        onClick={() => {
          setDrawerOpen(!drawerOpen);
        }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default ActionButtonDrawer;
