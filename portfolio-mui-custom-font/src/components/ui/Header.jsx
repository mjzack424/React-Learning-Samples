import { cloneElement } from "react";
import { AppBar, Toolbar, Button, useScrollTrigger } from "@mui/material";
//Toolbar: alow you add appBar Horizantaly

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

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Button variant="primary">کلیک کن</Button>

            <p>وب سایت شخصی محمد جواد ذاکریان</p>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
