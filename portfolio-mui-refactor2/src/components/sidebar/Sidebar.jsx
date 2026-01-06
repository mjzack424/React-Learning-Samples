import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

import { SidebarContent } from "./index";
import { SidebarDrawer, ActionButtonDrawer } from "../drawer";
import { useTheme } from "@mui/material/styles";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <>
      <Grid
        display={{ xs: "none", md: "block" }}
        size={{ md: 2 }}
        sx={{
          // backgroundColor: grey[900],
          backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400],
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
