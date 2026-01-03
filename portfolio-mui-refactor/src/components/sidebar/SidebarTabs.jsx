import { useContext } from "react";
import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";

import MainContext from "../../context";
import { tabsData } from "../data/tabsData.sidebar";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);
  const data = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
      sx={{
        "& .MuiTabs-flexContainer": {
          alignItems: "center", // یا 'stretch' برای کشیده شدن
        },
      }}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          {...Tab}
          sx={{
            m: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            width: "100%", // عرض کامل
            // minWidth: "100%", // حداقل عرض کامل
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen?.(false)}
        ></Tab>
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
