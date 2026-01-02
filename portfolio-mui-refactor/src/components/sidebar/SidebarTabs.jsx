import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  InsertEmoticonRounded,
  SpeakerNotesRounded,
  TerminalRounded,
  CommentRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

const SidebarTabs = ({ value, handleChange, setDrawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-flexContainer": {
            alignItems: "center", // یا 'stretch' برای کشیده شدن
          },
        }}
      >
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          iconPosition="start"
          {...tabProps(0)}
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
        <Tab
          label="درباره من"
          icon={<InsertEmoticonRounded />}
          iconPosition="start"
          {...tabProps(1)}
          sx={{
            m: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            width: "100%", // عرض کامل
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen?.(false)}
        ></Tab>
        <Tab
          label="رزومه من"
          icon={<SpeakerNotesRounded />}
          iconPosition="start"
          {...tabProps(2)}
          sx={{
            m: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            width: "100%", // عرض کامل
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen?.(false)}
        ></Tab>
        <Tab
          label="نمونه کار ها"
          icon={<TerminalRounded />}
          iconPosition="start"
          {...tabProps(3)}
          sx={{
            m: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            width: "100%", // عرض کامل
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen?.(false)}
        />
        <Tab
          label="نظرات"
          icon={<CommentRounded />}
          iconPosition="start"
          {...tabProps(4)}
          sx={{
            m: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            width: "100%", // عرض کامل
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen?.(false)}
        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
          iconPosition="start"
          {...tabProps(5)}
          sx={{
            m: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            width: "100%", // عرض کامل
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen?.(false)}
        />
        {/* <Tab
            label={
              <div>
                <Typography variant="subtitle2" color="white">
                  <HomeRounded sx={{verticalAlign: "middle", mx:2}}/>
                  خانه
                </Typography>
              </div>
            }
          ></Tab> */}
      </Tabs>
    </>
  );
};

export default SidebarTabs;
