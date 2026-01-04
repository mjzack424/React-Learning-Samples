import { Box, Fade } from "@mui/material";

const Page = (props) => {
  const { children, pageNumber, index, ...others } = props;
  const isActive = pageNumber === index;
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && (
        <Fade in={isActive} timeout={500} unmountOnExit>
          <Box
            sx={{
              //  p: 3,
              height: "100vh",
              // overflow: "hidden",
              overflowY: "auto"
            }}
          >
            {children}
          </Box>
        </Fade>
      )}
    </div>
  );
};
export default Page;
