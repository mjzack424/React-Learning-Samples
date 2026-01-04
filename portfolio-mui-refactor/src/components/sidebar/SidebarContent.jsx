import { Box, Divider } from "@mui/material";

import { SidebarFooter, SidebarHeader, SidebarTabs } from "../sidebar/index";
import { grey } from "@mui/material/colors";

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
      <Divider variant="middle" color={grey[900]} sx={{}}/>
      <SidebarTabs />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
