import { Typography, Box } from "@mui/material";
import Typed from "typed.js";

import bg01 from "../assets/images/bg01.jpeg";
import { useEffect, useRef, useState, useMemo } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { lifeSpan } from "../constants/particles";
import { Helmet } from "react-helmet-async";

const Home = ({ helmetTitle }) => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const strings = useMemo(
    () => [
      "#من یک توسعه دهنده فرانت اند هستم.",
      "#من یک برنامه نویس هستم.",
      "#من یک بازی ساز هستم.",
      "#من یک مدرس هستم.",
    ],
    []
  );

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["محمد جواد ذاکریان"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
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
  }, [strings]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesLoaded(true);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {particlesLoaded && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <Particles
              options={lifeSpan}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        )}
        <Box component={"div"} sx={{ display: "flex" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center" }}
            color="whitesmoke"
          >{`|`}</Typography>
          <Typography
            ref={nameEl}
            variant="h3"
            sx={{ textAlign: "center" }}
            color="whitesmoke"
          ></Typography>
          <Typography
            variant="h3"
            sx={{ textAlign: "center" }}
            color="whitesmoke"
          >{`|`}</Typography>
        </Box>
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
    </>
  );
};
export default Home;
