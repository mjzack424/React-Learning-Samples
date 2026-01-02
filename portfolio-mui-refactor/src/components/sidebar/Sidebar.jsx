import { useState } from "react";
import { Box, Drawer, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

import {SidebarContent} from "./index";


const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Grid
        display={{ xs: "none", md: "block" }}
        size={{ md: 2 }}
        sx={{ backgroundColor: grey[900] }}
      >
        <SidebarContent value={value} handleChange={handleChange} />
      </Grid>

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
        <SidebarContent
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      </Drawer>
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
          onClick={handleDrawerToggle}
        >
          <MenuRounded />
        </Fab>
      </Box>
    </>
  );
};

export default Sidebar;
