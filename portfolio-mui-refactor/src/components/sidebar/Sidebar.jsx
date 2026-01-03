import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

import { SidebarContent } from "./index";
import { SidebarDrawer, ActionButtonDrawer } from "../drawer";

const Sidebar = () => {
  return (
    <>
      <Grid
        display={{ xs: "none", md: "block" }}
        size={{ md: 2 }}
        sx={{
          backgroundColor: grey[900],
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
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
