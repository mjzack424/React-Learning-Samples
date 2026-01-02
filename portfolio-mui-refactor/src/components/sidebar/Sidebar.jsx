import { useState } from "react";

import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

import { SidebarContent } from "./index";
import { SidebarDrawer, ActionButtonDrawer } from "../drawer";



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
      <SidebarDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}>
        <SidebarContent
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      </SidebarDrawer>
      <ActionButtonDrawer handleDrawerToggle={handleDrawerToggle}/>
    </>
  );
};

export default Sidebar;
