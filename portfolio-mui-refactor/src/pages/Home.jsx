import { Typography, Box } from "@mui/material";
import Typed from "typed.js";

import bg01 from "../assets/images/bg01.jpeg";
import { useEffect, useRef } from "react";

const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "من یک توسعه دهنده فرانت اند هستم",
    "من یک برنامه نویس هستم",
    "من یک بازی ساز هستم",
    "من یک مدرس هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["[[ محمد جواد ذاکریان ]]"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });
    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });
    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg01})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        ref={nameEl}
        variant="h3"
        sx={{ textAlign: "center" }}
        color="whitesmoke"
      ></Typography>
      <Typography
        ref={infoEl}
        variant="h4"
        sx={{
          textAlign: "center",
          textDecoration: "underline",
          textDecorationColor: "#c1fffd",
        }}
        color="whitesmoke"
      ></Typography>
    </Box>
  );
};
export default Home;
