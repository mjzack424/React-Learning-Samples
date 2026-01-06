import { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Grid,
  Slide,
} from "@mui/material";

import { Projects } from "../../constants/projects";

const MyProjects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // برای اینکه انیمیشن کامل اجرا بشه
    const timer = setTimeout(() => {
      setLoading(true);
    }, 10);

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, []);
  return (
    <>
      {Projects.map((item, index) => {
        return (
          <Grid
            key={index}
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Slide
              direction="up"
              in={loading}
              style={{
                transitionDelay: loading ? `${index * 100 + 100}ms` : "0ms",
              }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  width: "100%",
                  backgroundColor: "steelblue",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    title={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" textAlign="left" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      gutterBottom
                    >
                      {item.info}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "flex-start", mt: "auto" }}>
                  <Button
                    href={item.link}
                    size="small"
                    color="primary"
                    target="_blank"
                  >
                    اطلاعات بیشتر
                  </Button>
                </CardActions>
              </Card>
            </Slide>
          </Grid>
        );
      })}
    </>
  );
};
export default MyProjects;
