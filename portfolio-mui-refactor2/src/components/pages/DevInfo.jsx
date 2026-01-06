import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
const Info = ({ children }) => {
  return (
    <>
      <Typography
        variant="body1"
        color="text.primary"
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

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی: محمد جواد ذاکریان</Info>
      <Info>سن: 30</Info>
      <Info>شهر: قم</Info>
      <Info>پست الکترونیک: zack424@yahoo.com</Info>
      <Info>شماره موبایل: 09387207944</Info>
    </>
  );
};

export default DevInfo;
