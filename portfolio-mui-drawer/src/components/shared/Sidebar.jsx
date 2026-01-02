import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Box,
  Divider,
  Avatar,
  Tab,
  Tabs,
  Drawer,
  Fab,
  SwipeableDrawer,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import {
  HomeRounded,
  InsertEmoticonRounded,
  SpeakerNotesRounded,
  TerminalRounded,
  CommentRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
  MenuRounded,
} from "@mui/icons-material";
import DrawerContent from "./DrawerContent";
// حالت برای تشخیص اینکه تصویر لود نشد

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
  {/* این بخش در موبایل نمایش داده نمی‌شود */}
  <DrawerContent value={value} handleChange={handleChange} />
  
  
  
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
    <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen} />
  </Drawer>
</Grid>

{/* دکمه شناور برای موبایل - جدا از Grid */}
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
