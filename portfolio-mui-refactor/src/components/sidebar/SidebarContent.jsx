import { Box } from "@mui/material";

import {
  SidebarFooter,
  SidebarHeader,
  SidebarTabs,
} from "../sidebar/index";

// حالت برای تشخیص اینکه تصویر لود نشد
const SidebarContent = ({ value, handleChange, setDrawerOpen = () => {} }) => {
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
      <SidebarTabs
        value={value}
        handleChange={handleChange}
        setDrawerOpen={setDrawerOpen}
      />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
