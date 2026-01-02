import { useState, useEffect } from "react";
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
import DrawerContent from "../shared/DrawerContent";
// حالت برای تشخیص اینکه تصویر لود نشد

const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
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
        <DrawerContent
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      </Drawer>
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
