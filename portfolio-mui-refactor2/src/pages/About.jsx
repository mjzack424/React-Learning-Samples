import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  Grid,
  Box,
  Tooltip,
  Fab,
  Zoom,
  useTheme,
} from "@mui/material";
import { SelfImprovementRounded, CodeRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { grey } from "@mui/material/colors";

import { DevInfo, Skills } from "../components/pages";
import avatat from "../assets/images/prof2.jpg";
import { devWorkInfo } from "../constants/details";
import { CustomDivider } from "../components/common";

const About = ({ helmetTitle }) => {
  const scrollRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      setShowScroll(el.scrollTop > 1);
    };

    el.addEventListener("scroll", onScroll);

    return () => el.removeEventListener("scroll", onScroll); //* this will run on unmout
  }, []);

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Card
        ref={scrollRef}
        sx={{
          height: "100vh",
          backgroundColor:
            theme.palette.mode === "dark" ? grey[800] : "whitesmoke",
          overflowY: "auto",
        }}
      >
        <CardContent>
          <Grid container sx={{ ms: 3 }} direction="row-reverse">
            <Grid
              size={{ xs: 12, md: 8 }}
              display={"flex"}
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <CustomDivider
                bColor={"primary.main"}
                cColor={"primary"}
                icon={<CodeRounded />}
                text={"توسعه فرانت اند و مدرس برنامه نویسی"}
              />
              <Grid
                container
                sx={{
                  "& .MuiDivider-wrapper": { paddingLeft: 0, paddingRight: 0 },
                  width: 1,
                }}
              >
                <Grid size={{ xs: 12, md: 10 }}>
                  <DevInfo>نام و نام خانوادگی: محمد جواد ذاکریان</DevInfo>
                  <DevInfo>سن: 30</DevInfo>
                  <DevInfo>شهر: قم</DevInfo>
                  <DevInfo>پست الکترونیک: zack424@yahoo.com</DevInfo>
                  <DevInfo>شماره موبایل: 09387207944</DevInfo>
                </Grid>
                <Grid
                  size={{ xs: 4, md: 2 }}
                  display={{ xs: "none", md: "block" }}
                >
                  {devWorkInfo.map((item, index) => (
                    <Box key={index} sx={{ width: 1, mb: 2 }}>
                      <Tooltip
                        title={item.tooltipTitle}
                        placement="right"
                        arrow
                      >
                        <Chip
                          icon={item.icon}
                          label={
                            <Typography variant="body1" color="whitesmoke">
                              <CountUp
                                start={0}
                                end={item.total}
                                duration={2}
                              />
                            </Typography>
                          }
                          sx={{ p: 2, backgroundColor: item.color, width: 1 }}
                        />
                      </Tooltip>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 0, md: 4 }} display={{ xs: "none", md: "block" }}>
              <Avatar
                src={avatat}
                variant="rounded"
                sx={{ height: 250, width: 250 }}
              >
                MJZ
              </Avatar>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              sx={{
                width: 1,
                mt: 1,
                justifyContent: "center",
              }}
            >
              <CustomDivider
                bColor={"secondary.main"}
                cColor={"secondary"}
                icon={<SelfImprovementRounded />}
                text={"مهارت های من"}
                textAlign="center"
              />
              <Skills />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Zoom in={showScroll}>
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default About;