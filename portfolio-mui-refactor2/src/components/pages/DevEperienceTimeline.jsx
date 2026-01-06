import { useState, useEffect } from "react";
import { Typography, Slide } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";

import { devEdu } from "../../constants/details";
const DevEperienceTimeline = () => {
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
      <Timeline>
        {devEdu.map((item, index) => (
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 10}99ms` : "0ms",
            }}
          >
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="info">
                  <SchoolRounded color="info" />
                </TimelineDot>
                {index !== devEdu.length - 1 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="gray">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.cert}
                </Typography>
                <Typography variant="body2" color="black">
                  {item.major}
                </Typography>
                <Typography variant="body2" color="black">
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};
export default DevEperienceTimeline;
