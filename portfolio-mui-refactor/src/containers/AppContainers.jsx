import { useState } from "react";
import { Typography, Box } from "@mui/material";

import { Sidebar } from "../components/sidebar/index";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layout/MainLayout";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import bg01 from "../assets/images/bg01.jpeg";

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
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Box
              sx={{
                backgroundImage: `url(${bg01})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
              }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center" }}
                color="whitesmoke"
              >
                صفحه اصلی
              </Typography>
            </Box>
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              درباره من
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              رزومه من
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نمونه کار ها
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              نظرات
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={5}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ارتباط با من
            </Typography>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainers;
