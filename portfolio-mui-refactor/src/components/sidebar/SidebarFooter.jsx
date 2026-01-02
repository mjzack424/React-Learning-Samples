import { Typography, Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CopyrightRounded } from "@mui/icons-material";
const SidebarFooter = () => {
  return (
    <>
      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          طراحی شده توسط محمد جواد ذاکریان
        </Typography>
        <Typography variant="caption" color="whitesmoke">
          کپی رایت 1404
          <CopyrightRounded sx={{ verticalAlign: "middle", mx: 2 }} />
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
