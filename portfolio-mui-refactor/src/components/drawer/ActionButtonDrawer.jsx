import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
const ActionButtonDrawer = ({handleDrawerToggle}) => {
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
        onClick={handleDrawerToggle}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default ActionButtonDrawer;
