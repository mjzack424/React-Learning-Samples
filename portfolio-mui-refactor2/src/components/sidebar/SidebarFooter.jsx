import { Typography, Box } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";
const SidebarFooter = () => {
  return (
    <>
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
        <Typography variant="subtitle2" color="text.primary">
          طراحی شده توسط محمد جواد ذاکریان
        </Typography>
        <Typography variant="caption" color="text.primary">
          کپی رایت 1404
          <CopyrightRounded sx={{ verticalAlign: "middle", mx: 2 }} />
        </Typography>
      </Box>
    </>
  );
};
export default SidebarFooter;
