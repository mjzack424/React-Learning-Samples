import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Grid,
  Fab,
  Zoom,
  Slide,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

import {
  KeyboardArrowUp,
  Badge,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";

import { devEdu } from "../constants/details";
import { grey } from "@mui/material/colors";

const Resume = ({ helmetTitle }) => {
  const scrollRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // برای اینکه انیمیشن کامل اجرا بشه
    const timer = setTimeout(() => {
      setLoading(true);
    }, 10);

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, []);

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
                // display: "flex",
                // justifyContent: "flex-start",
                justifyContent: "center",
              }}
            >
              <Slide
                direction="down"
                in={loading}
                style={{ transitionDelay: loading ? "100ms" : "0ms" }}
              >
                <Divider
                  textAlign="center"
                  sx={{
                    "& .MuiDivider-wrapper": {
                      paddingLeft: 0,
                      paddingRight: 0,
                    },
                    width: 1,
                    "&::before, &::after": {
                      borderColor: "secondary.main",
                      borderWidth: 2,
                    },
                  }}
                >
                  <Chip
                    color="secondary"
                    icon={<Badge />}
                    label={
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        رزومه من
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  ></Chip>
                </Divider>
              </Slide>
            </Grid>
            <Grid
              size={6}
              display={"flex"}
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
              // sx={{backgroundColor:"ActiveCaption"}}
            >
              <Slide
                direction="down"
                in={loading}
                style={{ transitionDelay: loading ? "400ms" : "0ms" }}
              >
                <Divider
                  textAlign="left"
                  sx={{
                    "& .MuiDivider-wrapper": {
                      paddingLeft: 0,
                      paddingRight: 0,
                    },
                    width: 1,
                    "&::before, &::after": {
                      borderColor: "primary.main",
                      borderWidth: 2,
                    },
                  }}
                >
                  <Chip
                    color="success"
                    icon={<HomeRepairServiceRounded />}
                    label={
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        تجربیات
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  ></Chip>
                </Divider>
              </Slide>

              <Timeline>
                {devEdu.map((item, index) => (
                  <Slide
                    direction="up"
                    in={loading}
                    style={{
                      transitionDelay: loading ? `${index + 5}99ms` : "0ms",
                    }}
                  >
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot variant="outlined" color="warning">
                          <HomeRepairServiceRounded color="warning" />
                        </TimelineDot>
                        {index !== devEdu.length - 1 ? (
                          <TimelineConnector />
                        ) : null}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="caption" color="gray">
                          {item.year}
                        </Typography>
                        <Typography variant="body1" color="black">
                          {item.cert}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.major}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.place}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Slide>
                ))}
              </Timeline>
            </Grid>
            <Grid
              size={6}
              display={"flex"}
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
              // sx={{backgroundColor:"ActiveCaption"}}
            >
              <Slide
                direction="down"
                in={loading}
                style={{ transitionDelay: loading ? "400ms" : "0ms" }}
              >
                <Divider
                  textAlign="left"
                  sx={{
                    "& .MuiDivider-wrapper": {
                      paddingLeft: 0,
                      paddingRight: 0,
                    },
                    width: 1,
                    "&::before, &::after": {
                      borderColor: "primary.main",
                      borderWidth: 2,
                    },
                  }}
                >
                  <Chip
                    color="primary"
                    icon={<SchoolRounded />}
                    label={
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        تحصیلات
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  ></Chip>
                </Divider>
              </Slide>

              <Timeline>
                {devEdu.map((item, index) => (
                  <Slide
                    direction="up"
                    in={loading}
                    style={{
                      transitionDelay: loading ? `${index + 10}99ms` : "0ms",
                    }}
                  >
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot variant="outlined" color="info">
                          <SchoolRounded color="info" />
                        </TimelineDot>
                        {index !== devEdu.length - 1 ? (
                          <TimelineConnector />
                        ) : null}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="caption" color="gray">
                          {item.year}
                        </Typography>
                        <Typography variant="body1" color="black">
                          {item.cert}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.major}
                        </Typography>
                        <Typography variant="body2" color="black">
                          {item.place}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Slide>
                ))}
              </Timeline>
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
