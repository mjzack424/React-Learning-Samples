import { useState, useEffect, useRef } from "react";
import { Card, CardContent, Grid, Fab, Zoom, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import {
  KeyboardArrowUp,
  Badge,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import CustomDivider from "../components/common/CustomDivider";
import { DevEduTimeline, DevEperienceTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
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
              sx={{
                width: 1,
                mt: 1,
                mb: 3,
                justifyContent: "center",
              }}
            >
              <CustomDivider
                bColor={"secondary.main"}
                cColor={"secondary"}
                icon={<Badge />}
                text={"رزومه من"}
                delay="100ms"
                textAlign="center"
              />
            </Grid>
            <Grid
              size={6}
              display={"flex"}
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <CustomDivider
                bColor={"primary.main"}
                cColor={"success"}
                icon={<HomeRepairServiceRounded />}
                text={"تجربیات"}
                delay="400ms"
                textAlign="left"
              />
              <DevEduTimeline />
            </Grid>
            <Grid
              size={6}
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
                icon={<SchoolRounded />}
                text={"تحصیلات"}
                delay="400ms"
                textAlign="left"
              />
              <DevEperienceTimeline />
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
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </>
  );
};

export default Resume;
