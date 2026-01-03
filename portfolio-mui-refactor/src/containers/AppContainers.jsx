import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import PagesContainer from "./PagesContainer";
import { Sidebar } from "../components/sidebar/index";
import Page from "../pages/components/Page";
import { Typography, Box } from "@mui/material";
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
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Box
              sx={{
                backgroundImage: `url(${require("../assets/images/bg01.jpeg")})`,
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
