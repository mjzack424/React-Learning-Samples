import { Grid } from "@mui/material";
const PagesContainer = ({ children }) => {
  return (
    <Grid size={{ xs: 12, md: 10 }} sx={{ backgroundColor: "secondary.main" }}>
      <header></header>
      {children}
      <main></main>
    </Grid>
  );
};
export default PagesContainer;
