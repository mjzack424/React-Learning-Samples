import {
  HomeRounded,
  InsertEmoticonRounded,
  SpeakerNotesRounded,
  TerminalRounded,
  CommentRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabs = [
    {
      label: "صفحه اصلی",
      icon: <HomeRounded />,
      ...tabProps(0),
    },
    {
      label: "درباره من",
      icon: <InsertEmoticonRounded />,
      ...tabProps(1),
    },
    {
      label: "رزومه من",
      icon: <SpeakerNotesRounded />,
      ...tabProps(2),
    },
    {
      label: "نمونه کار ها",
      icon: <TerminalRounded />,
      ...tabProps(3),
    },
    {
      label: "نظرات",
      icon: <CommentRounded />,
      ...tabProps(4),
    },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(5),
    },
  ];
  return tabs;
};
