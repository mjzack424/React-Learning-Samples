import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Box,
  Divider,
  Avatar,
  Tab,
  Tabs,
  Drawer,
  SwipeableDrawer,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  InsertEmoticonRounded,
  SpeakerNotesRounded,
  TerminalRounded,
  CommentRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";
// حالت برای تشخیص اینکه تصویر لود نشد
const DrawerContent = ({ value, handleChange }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const name = "محمد جواد ذاکریان";
  const mysummary = "فرانت انت دولاپر و علاقه مند به یادیگری.";
  //   const imageAddress = require("../../assets/images/prof1.jpg");
  const [imageError, setImageError] = useState(false);
  const [profImage, setProfImage] = useState(null);

  // حروف اولیه نام برای fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  useEffect(() => {
    const loadImage = async () => {
      try {
        // dynamic import – اگر فایل نبود، ارور می‌ده اما catch می‌شه
        const image = await import("../../assets/images/prof1.jpg");
        setProfImage(image.default);
      } catch (err) {
        // فایل پیدا نشد → fallback رو فعال کن
        console.warn("تصویر پروفایل پیدا نشد، از fallback استفاده می‌شود.");
        setImageError(true);
      }
    };

    loadImage();
  }, []);
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <Avatar
        alt="تصویر پروفایل محمد جواد ذاکریان"
        title={"تصویر پروفایل"}
        src={imageError ? undefined : profImage}
        onError={() => setImageError(true)} // وقتی تصویر لود نشد، حالت رو تغییر بده
        variant="rounded"
        sx={{
          width: "80%", // حداکثر ۸۰٪ عرض sidebar
          height: "auto", // نسبت حفظ بشه
          maxWidth: 200, // بیشتر از ۲۰۰ نشه
          mx: "auto",
          my: 2,
        }}
      >
        {imageError ? initials : null}{" "}
        {/* اگر تصویر نبود، حروف اولیه رو نشون بده */}
      </Avatar>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="caption">{mysummary}</Typography>
      <Divider sx={{ backgroundColor: grey[900], mt: 2 }} variant="middle" />
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
      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          طراحی شده با توسط محمد جواد ذاکریان
        </Typography>
        <Typography variant="caption" color="whitesmoke">
          کپی رایت 1404
          <CopyrightRounded sx={{ verticalAlign: "middle", mx: 2 }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerContent;
