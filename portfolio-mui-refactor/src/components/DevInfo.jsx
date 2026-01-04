import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
const DevInfo = ({ children }) => {
  return (
    <>
      <Typography
        variant="body1"
        color="black"
        textAlign={"left"}
        sx={{ mt: 2 }}
      >
        <KeyboardArrowLeftRounded
          //   fontSize="large"
          sx={{ verticalAlign: "bottom", color: "primary.main" }}
        />
        {children}
      </Typography>
    </>
  );
};
export default DevInfo;
