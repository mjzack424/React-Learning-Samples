import {  Box, IconButton, Link, Zoom } from "@mui/material";
import { GitHub, Telegram, Instagram } from "@mui/icons-material";

const SocialMediaInfo = (show) => {
  return (
    <Box component={"div"} sx={{ m: "0 auto", textAlign: "center" }}>
      <Zoom in={show}>
        <IconButton aria-label="GitHub">
          {/* // Method 2: Opening in a new tab/window */}
          <Link
            href="https://github.com/mjzack424"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ color: "gray" }} />
          </Link>
        </IconButton>
      </Zoom>
      <Zoom in={show}>
        <IconButton aria-label="GitHub">
          {/* // Method 2: Opening in a new tab/window */}
          <Link
            href="https://t.me/Make_3DAssets_Free"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram sx={{ color: "gray" }} />
          </Link>
        </IconButton>
      </Zoom>
      <Zoom in={show}>
        <IconButton aria-label="GitHub">
          {/* // Method 2: Opening in a new tab/window */}
          <Link
            href="https://www.instagram.com/zack424_artworks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram sx={{ color: "gray" }} />
          </Link>
        </IconButton>
      </Zoom>
    </Box>
  );
};

export default SocialMediaInfo;
