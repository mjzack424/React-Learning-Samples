import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import ContentContainer from "./ContentContainer";
import Sidebar from "../components/sidebar/Sidebar";
import TabPanel from "../components/shared/TabPanel";
import { Typography } from "@mui/material";
import SidebarContainer from "./SidebarContainer";

function AppContainers() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <SidebarContainer>
        <Sidebar value={value} handleChange={handleChange} />
      </SidebarContainer>
      <ContentContainer>
        <TabPanel value={value} index={0}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            صفحه اصلی
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            درباره من
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            رزومه من
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            نمونه کار ها
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            نظرات
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            ارتباط با من
          </Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
}

export default AppContainers;
