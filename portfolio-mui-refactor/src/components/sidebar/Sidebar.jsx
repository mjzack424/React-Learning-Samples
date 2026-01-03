import { useState } from "react";
import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

import { SidebarContent } from "./index";
import { SidebarDrawer, ActionButtonDrawer } from "../drawer";

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Grid
        display={{ xs: "none", md: "block" }}
        size={{ md: 2 }}
        sx={{ backgroundColor: grey[900] }}
      >
        <SidebarContent />
      </Grid>
      <SidebarDrawer>
        <SidebarContent />
      </SidebarDrawer>
      <ActionButtonDrawer />
    </>
  );
};

export default Sidebar;
