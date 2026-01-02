import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children }) => {
  return (
    <Grid
      display={{ xs: "none", md: "block" }}
      size={{ md: 2 }}
      sx={{ backgroundColor: grey[900] }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
