import Navbar from "../NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main>
          <Navbar />
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
