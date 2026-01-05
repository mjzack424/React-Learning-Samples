import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Sidebar } from "../components/sidebar/index";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layout/MainLayout";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { Home, About, Resume } from "../pages";

function AppContainers() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isSmUp) {
      setDrawerOpen(false);
    }
  }, [isSmUp]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  const pageTitleMaker = (page) => {
    const text = "وب سایت محمد جواد ذاکریان | ";
    return `${text}${page}`;
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
            <Home helmetTitle={pageTitleMaker("صفحه اصلی")} />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About helmetTitle={pageTitleMaker("درباره من")} />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Resume helmetTitle={pageTitleMaker("رزومه")} />
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
