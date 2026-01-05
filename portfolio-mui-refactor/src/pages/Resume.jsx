import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
  Grid,
  Box,
  Tooltip,
} from "@mui/material";
import { SelfImprovementRounded, CodeRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";

import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


import { devEdu } from "../constants/details";

const Resume = ({helmetTitle}) =>{

    const scrollRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);

  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [git, setGit] = useState(0);
  const [react, setReact] = useState(0);
  const [node, setNode] = useState(0);
  const [js, setJs] = useState(0);

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

    return(<>
      <Helmet>
        <title>
            {helmetTitle}
        </title>
      </Helmet>
      <Card
        ref={scrollRef}
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "auto",
        }}
      >
        <CardContent>
          <Grid container sx={{ ms: 3 }} direction="row-reverse">
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
    </>)
}

export default Resume;