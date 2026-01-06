import { useState, useEffect } from "react";

import { Divider, Chip, Typography, Slide } from "@mui/material";

const CustomDivider = ({ bColor, cColor, icon, text, textAlign="left" }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Slide
        direction="down"
        in={loading}
        style={{
          transitionDelay: loading ? "200ms" : "0ms",
        }}
      >
        <Divider
          textAlign={textAlign}
          sx={{
            "& .MuiDivider-wrapper": { paddingLeft: 0, paddingRight: 0 },
            width: 1,
            "&::before, &::after": {
              borderColor: bColor,
              borderWidth: 2,
            },
          }}
        >
          <Chip
            color={cColor}
            icon={icon}
            label={
              <Typography
                variant="body1"
                color="black"
                sx={{ textAlign: "center" }}
              >
                {text}
              </Typography>
            }
            sx={{ p: 3 }}
          ></Chip>
        </Divider>
      </Slide>
    </>
  );
};

export default CustomDivider;
