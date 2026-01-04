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
import {
  SelfImprovementRounded,
  CodeRounded,
  KeyboardArrowLeftRounded,
} from "@mui/icons-material";

import DevInfo from "../pages/components/DevInfo";
import Skill from "../pages/components/Skill";
import avatat from "../assets/images/prof2.jpg";
import { devSkills } from "../constants/skills";

const About = () => {
  const { htmlSkill, cssSkill, gitSkill, reactSkill, nodeSkill, jsSkill } =
    devSkills;
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll"
        }}
        title="درباره من"
      >
        <CardContent>
          <Grid container sx={{ ms: 3 }} direction="row-reverse">
            <Grid
              size={{ xs: 12, md: 8 }}
              display={"flex"}
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
              // sx={{backgroundColor:"ActiveCaption"}}
            >
              <Divider
                textAlign="left"
                sx={{
                  "& .MuiDivider-wrapper": { paddingLeft: 0, paddingRight: 0 },
                  width: 1,
                  "&::before, &::after": {
                    borderColor: "primary.main",
                    borderWidth: 2,
                  },
                }}
              >
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
          <Grid container>
            <Grid
              sx={{
                width: 1,
                mt: 1,
                // display: "flex",
                // justifyContent: "flex-start",
                justifyContent: "center",
              }}
            >
              <Divider
                textAlign="center"
                sx={{
                  "& .MuiDivider-wrapper": { paddingLeft: 0, paddingRight: 0 },
                  width: 1,
                  "&::before, &::after": {
                    borderColor: "secondary.main",
                    borderWidth: 2,
                  },
                }}
              >
                <Chip
                  color="secondary"
                  icon={<SelfImprovementRounded />}
                  label={
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ textAlign: "center" }}
                    >
                      مهارت های من
                    </Typography>
                  }
                  sx={{ p: 3 }}
                ></Chip>
              </Divider>
              <Skill
                name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={95}
              />
              <Skill
                name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={95}
              />
              <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={95}
              />
              <Skill
                name={reactSkill.name}
                icon={reactSkill.icon}
                color={reactSkill.color}
                value={95}
              />
              <Skill
                name={nodeSkill.name}
                icon={nodeSkill.icon}
                color={nodeSkill.color}
                value={95}
              />
              <Skill
                name={gitSkill.name}
                icon={gitSkill.icon}
                color={gitSkill.color}
                value={95}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
