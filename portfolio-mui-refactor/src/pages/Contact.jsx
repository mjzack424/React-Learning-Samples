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
  TextField,
  InputAdornment,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import {
  KeyboardArrowUp,
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
  AccountCircle,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import { map } from "../assets/icons";
import { contactValidationSchema } from "./validations/contactValidation";

const Contact = ({ helmetTitle }) => {
  const scrollRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY; //process is global object on node

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

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };
  const formike = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
    validationSchema: contactValidationSchema,
  });
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
                sx={{ transitionDelay: loading ? "100ms" : "0ms" }}
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
                      borderColor: "warning.main",
                      borderWidth: 2,
                    },
                  }}
                >
                  <Chip
                    color="warning"
                    icon={<AccountCircle />}
                    label={
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{ textAlign: "center" }}
                      >
                        ارتباط با من
                      </Typography>
                    }
                    sx={{ p: 3 }}
                  ></Chip>
                </Divider>
              </Slide>
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
                  <form autoComplete="off" onSubmit={formike.handleSubmit}>
                    <CardContent>
                      <Grid container>
                        <Grid width={1} size={12}>
                          <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="نام و نام خانوادیگی"
                                name="fullname"
                                variant="outlined"
                                helperText={
                                  formike.touched.fullname
                                    ? formike.errors.fullname
                                    : null
                                }
                                error={Boolean(
                                  formike.touched.fullname &&
                                    formike.errors.fullname
                                )}
                                value={formike.values?.fullname}
                                onChange={formike.handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Face6Rounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="پست الکترونیک"
                                name="email"
                                variant="outlined"
                                helperText={
                                  formike.touched.email
                                    ? formike.errors.email
                                    : null
                                }
                                error={Boolean(
                                  formike.touched.email && formike.errors.email
                                )}
                                value={formike.values?.email}
                                onChange={formike.handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <EmailRounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid size={12}>
                              <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="عنوان"
                                name="subject"
                                variant="outlined"
                                helperText={
                                  formike.touched.subject
                                    ? formike.errors.subject
                                    : null
                                }
                                error={Boolean(
                                  formike.touched.subject &&
                                    formike.errors.subject
                                )}
                                value={formike.values?.subject}
                                onChange={formike.handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <SubjectRounded />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid size={12}>
                              <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="پیام"
                                name="message"
                                variant="outlined"
                                multiline
                                rows={6}
                                helperText={
                                  formike.touched.message
                                    ? formike.errors.message
                                    : null
                                }
                                error={Boolean(
                                  formike.touched.message &&
                                    formike.errors.message
                                )}
                                value={formike.values?.message}
                                onChange={formike.handleChange}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions
                      sx={{ alignItems: "start", flexDirection: "column" }}
                    >
                      <ReCAPTCHA
                        sitekey={siteKey}
                        theme={theme.palette.mode}
                        hl="fa"
                        onChange={(value) => {
                          formike.setFieldValue("recaptcha", value);
                        }}
                      />
                      {formike.errors.recaptcha &&
                        formike.touched.recaptcha && (
                          <Typography variant="caption" color="error">
                            {formike.errors.recaptcha}
                          </Typography>
                        )}
                      <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        ارسال پیام
                      </Button>
                    </CardActions>
                  </form>
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
