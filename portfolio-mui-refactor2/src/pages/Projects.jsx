import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Divider,
  Chip,
  Grid,
  Fab,
  Zoom,
  Slide,
  useTheme,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import { KeyboardArrowUp, Badge } from "@mui/icons-material";

import { Projects as myProjects } from "../constants/projects";
import { grey } from "@mui/material/colors";

const Projects = ({ helmetTitle }) => {
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
                      borderColor: "primary.main",
                      borderWidth: 2,
                    },
                  }}
                >
                  <Chip
                    color="primary"
                    icon={<Badge />}
                    label={
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        نمونه کار های من
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  ></Chip>
                </Divider>
              </Slide>
            </Grid>
          </Grid>
          <Grid container sx={{ mx: 3 }} spacing={2}>
            {myProjects.map((item, index) => {
              return (
                <Grid
                  key={index}
                  size={{ xs: 12, md: 4 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Slide
                    direction="up"
                    in={loading}
                    style={{
                      transitionDelay: loading
                        ? `${index * 100 + 100}ms`
                        : "0ms",
                    }}
                  >
                    <Card
                      sx={{
                        maxWidth: 345,
                        width: "100%",
                        backgroundColor: "steelblue",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardActionArea
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "stretch",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={item.image}
                          alt={item.title}
                          title={item.title}
                          sx={{ objectFit: "cover" }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="body1"
                            textAlign="left"
                            gutterBottom
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            textAlign="left"
                            gutterBottom
                          >
                            {item.info}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions
                        sx={{ justifyContent: "flex-start", mt: "auto" }}
                      >
                        <Button
                          href={item.link}
                          size="small"
                          color="primary"
                          target="_blank"
                        >
                          اطلاعات بیشتر
                        </Button>
                      </CardActions>
                    </Card>
                  </Slide>
                </Grid>
              );
            })}
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

export default Projects;
