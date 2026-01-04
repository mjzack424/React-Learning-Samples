import {
  Divider,
  Chip,
  Box,
  Typography,
  LinearProgress,
  Badge,
} from "@mui/material";
const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{
          width: 1,
          "&::before, &::after": {
            borderColor: `${color}.main`,
          },
          mt: 1,
        }}
      >
        <Chip
          icon={
            <Box
              component="img"
              src={icon}
              sx={{
                height: 30,
              }}
            />
          }
          color={color}
          label={name}
          fontWeight="bold"
          sx={{ color: "#000", p: 3 }}
        />
      </Divider>
      <Box display={"flex"} alignItems={"center"} width={1}>
        <Box sx={{ minWidth: 35, mr: 1 }}>
          <Badge
            badgeContent={`${Math.round(value)}%`}
            fontWeight={"bold"}
            variant="standard"
            color={color}
          />
          {/* <Typography
            variant="body2"
            color="black"
            fontSize={"medium"}
            fontWeight={"bold"}
          >
            {Math.round(value)}%
          </Typography> */}
        </Box>

        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{
              height: 10,
              borderRadius: 2,
              //  transform: 'scaleX(-1)'
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
