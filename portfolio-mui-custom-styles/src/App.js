import MainLayout from "./components/layout/MainLayout";
import Header from "./components/ui/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  return (
    <MainLayout>
      <div style={{ padding: 24 }}>
        <header>
          <Header />
        </header>

        <main>
          <Container>
            <Box sx={{ my: 2 }}>
              {[...new Array(100)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </Box>
          </Container>
        </main>
      </div>
    </MainLayout>
  );
}

export default App;
