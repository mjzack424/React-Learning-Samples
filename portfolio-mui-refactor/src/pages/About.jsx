import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
  Grid,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import avatat from "../assets/images/prof2.jpg";
import { CodeRounded, KeyboardArrowLeftRounded } from "@mui/icons-material";

import DevInfo from "../components/DevInfo";

const About = () => {
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
        title="درباره من"
      >
        <CardContent>
          <Grid container sx={{ ms: 3 }} direction="row-reverse">
            <Grid
              size={{ xs: 12, md: 8 }}
              // sx={{backgroundColor:"ActiveCaption"}}
            >
              <Divider textAlign="left">
                <Chip
                  color="primary"
                  icon={<CodeRounded />}
                  label={
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ textAlign: "center" }}
                    >
                      توسعه فرانت اند و مدرس برنامه نویسی
                    </Typography>
                  }
                  sx={{ p: 3 }}
                ></Chip>
              </Divider>
              <DevInfo>نام و نام خانوادگی: محمد جواد ذاکریان</DevInfo>
              <DevInfo>سن: 30</DevInfo>
              <DevInfo>شهر: قم</DevInfo>
              <DevInfo>پست الکترونیک: zack424@yahoo.com</DevInfo>
              <DevInfo>شماره موبایل: 09387207944</DevInfo>
            </Grid>
            <Grid size={{ xs: 0, md: 4 }} display={{ xs: "none", md: "block" }}>
              <Avatar
                src={avatat}
                variant="rounded"
                sx={{ height: 250, width: 250 }}
              >
                MJZ
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
