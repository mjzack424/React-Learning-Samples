import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Fab, Typography } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import mainContext from "../context";

const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(mainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        top: {
          xs: 65,
          md: "unset",
        },
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleThemeChange}
        sx={{ ml: 2, color: "whitesmoke" }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined
            sx={{
              mr: {
                md: 1,
                xs: "unset",
              },
            }}
          />
        ) : (
          <NightlightOutlined
            sx={{
              mr: {
                md: 1,
                xs: "unset",
              },
            }}
          />
        )}
        <Typography
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          {theme.palette.mode === "dark" ? "روز" : "شب"}
        </Typography>
      </Fab>
    </Box>
  );
};

export default ThemeActionButton;
