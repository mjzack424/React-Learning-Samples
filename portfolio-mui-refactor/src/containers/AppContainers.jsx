import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import ContentContainer from "./ContentContainer";
import { Sidebar } from "../components/sidebar/index";
import TabPanel from "../components/shared/TabPanel";
import { Typography } from "@mui/material";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";

function AppContainers() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          <TabPanel pageNumber={pageNumber} index={0}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              صفحه اصلی
            </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={1}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              درباره من
            </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={2}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              رزومه من
            </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نمونه کار ها
            </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نظرات
            </Typography>
          </TabPanel>
          <TabPanel pageNumber={pageNumber} index={5}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </TabPanel>
        </ContentContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainers;
