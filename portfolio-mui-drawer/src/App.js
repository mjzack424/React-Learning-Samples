import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import ContentContainer from "./components/shared/ContentContainer";
import Sidebar from "./components/shared/Sidebar";
import TabPanel from "./components/tabs/TabPanel";
import { Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
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

export default App;
