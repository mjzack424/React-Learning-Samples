import { Box, Divider } from "@mui/material";
import { SidebarFooter, SidebarHeader, SidebarTabs } from "../sidebar/index";

// حالت برای تشخیص اینکه تصویر لود نشد
const SidebarContent = () => {
  const name = "محمد جواد ذاکریان";
  const mysummary = "فرانت انت دولاپر و علاقه مند به یادیگری.";
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <SidebarHeader name={name} mysummary={mysummary} />
      <Divider variant="middle" sx={{ mb: 2 }} />
      <SidebarTabs />
      <Divider variant="middle" sx={{ mt: 2 }} />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
