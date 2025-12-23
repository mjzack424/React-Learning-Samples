import { cloneElement } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  Typography,
} from "@mui/material";
//Toolbar: alow you add appBar Horizantaly
import {styled} from "@mui/material/styles"
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true, //به صورت پیش فرض فالز اگر ترو باشه سریع بین شناور شدن و نشدن اتفاق میوفته
    threshold: 0, //آستانه تحمل،پیش فرض 100، کاربر شروع کردن اسکرول کردن فعال بشه
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const CustomizedButton = styled(Button) `
  color: lime;
`

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <CustomizedButton variant="contained" color="info">
               کلیک کن
            </CustomizedButton>
            <Button variant="contained" color="success">
              کلیک کن
            </Button>
            <Button variant="dashed" color="secondary" >
              کلیک کن
            </Button>
            <Button variant="dashed" color="black" >
              کلیک کن
            </Button>
            <Typography variant="caption" padding={1}>
              وب سایت شخصی محمد جواد ذاکریان
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
