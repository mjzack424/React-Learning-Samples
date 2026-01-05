import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Avatar,
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Grid,
  Fab,
  Zoom,
  Slide,
  Box,
} from "@mui/material";

import {
  KeyboardArrowUp,
  Badge,
  HomeRepairServiceRounded,
  SchoolRounded,
  ForumRounded,
} from "@mui/icons-material";

import Slider from "react-slick";

import { userComments } from "../constants/details";

const Comments = ({ helmetTitle }) => {
  const scrollRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  const [loading, setLoading] = useState(false);

   const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  };
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

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Card
        ref={scrollRef}
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
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
                      borderColor: "success.main",
                      borderWidth: 2,
                    },
                  }}
                >
                  <Chip
                    color="success"
                    icon={<ForumRounded />}
                    label={
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        نظرات
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  ></Chip>
                </Divider>
              </Slide>
            </Grid>
            <Grid
  size={12}
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
  }}
>
  <Box
    component="div"
    sx={{
      width: { xs: "90%", sm: "80%", md: "70%" }, // عرض responsive
      maxWidth: 800,
    }}
  >
    <Slider {...options}>
      {userComments.map((item, index) => (
        <Box
          key={index}
          component="div"
          sx={{
            justifyContent: "center",
            textAlign: "center",
            padding: 2,
          }}
        >
          <Avatar
            src={item.avatar}
            variant="rounded"
            sx={{ height: 100, width: 100, margin: "0 auto", mb: 2 }}
          />
          <Typography
            variant="body1"
            textAlign="center"
            color="black"
            fontWeight="bold"
          >
            {item.fullname}
          </Typography>
          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 1, mb: 2 }}
          >
            {item.jobTitle}
          </Typography>
          <Card
            sx={{
              backgroundColor: "lightsalmon",
              width: { xs: "100%", sm: "80%" },
              margin: "0 auto",
              borderRadius: 5,
              mt: 2,
            }}
          >
            <CardContent>
              <Typography variant="body2" textAlign="center">
                {item.comment}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Slider>
  </Box>
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

export default Comments;
