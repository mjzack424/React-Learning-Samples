import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Fab,
  Zoom,
  Slide,
  useTheme,
  Box,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { KeyboardArrowUp, AccountCircle } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import { map } from "../assets/icons";
import { CustomDivider } from "../components/common";
import { ContactForm } from "../components/pages";

const Contact = ({ helmetTitle }) => {
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
              <CustomDivider
                bColor={"warning.main"}
                cColor={"warning"}
                icon={<AccountCircle />}
                text={"ارتباط با من"}
                delay="100ms"
                textAlign="center"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ width: 1 }}>
            <Slide
              direction="up"
              in={loading}
              sx={{
                transitionDelay: "500ms",
              }}
            >
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundImage: `url(${map})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "400px",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="black"
                    sx={{
                      fontFamily: "vazir",
                      mt: 4,
                      display: {
                        // xs: "none",
                        // sm: "none",
                        md: "block",
                      },
                    }}
                  >
                    بیا در مورد همه چیز باهم صحبت کنیم
                  </Typography>
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{
                      mt: 2,
                      display: {
                        // xs: "none",
                        // sm: "none",
                        md: "block",
                      },
                    }}
                  >
                    👋{" "}
                    <a
                      href="mailto:zack424@yahoo.com"
                      alt="email"
                      style={{
                        color: "tomato",
                      }}
                    >
                      ایمیل
                    </a>{" "}
                    بزن به من
                  </Typography>
                </Box>
              </Grid>
            </Slide>

            <Grid
              size={{ xs: 12, md: 8 }}
              sx={{
                display: {
                  // xs: "none",
                  md: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Slide
                direction="up"
                in={loading}
                style={{
                  transitionDelay: loading ? "200ms" : "0ms",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    // backgroundColor: "steelblue",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ContactForm theme={theme} />
                </Card>
              </Slide>
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

export default Contact;
