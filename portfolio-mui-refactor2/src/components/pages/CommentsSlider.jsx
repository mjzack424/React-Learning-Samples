import { Avatar, Typography, Card, CardContent, Box } from "@mui/material";
import Slider from "react-slick";
import { userComments } from "../../constants/details";

const CommentsSlider = () => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%" }, // عرض responsive
          maxWidth: 800,
        }}
      >
        <Slider {...options}>
          {userComments.map((item, index) => (
            <Box
              key={index}
              component="div"
              sx={{
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
              }}
            >
              <Avatar
                src={item.avatar}
                variant="rounded"
                sx={{
                  height: 100,
                  width: 100,
                  margin: "0 auto",
                  mb: 2,
                }}
              />
              <Typography
                variant="body1"
                textAlign="center"
                color="black"
                fontWeight="bold"
              >
                {item.fullname}
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
                sx={{ mt: 1, mb: 2 }}
              >
                {item.jobTitle}
              </Typography>
              <Card
                sx={{
                  backgroundColor: "lightsalmon",
                  width: { xs: "100%", sm: "80%" },
                  margin: "0 auto",
                  borderRadius: 5,
                  mt: 2,
                }}
              >
                <CardContent>
                  <Typography variant="body2" textAlign="center">
                    {item.comment}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default CommentsSlider;
