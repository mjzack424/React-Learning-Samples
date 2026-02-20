const Layout = ({ children, about }) => {
  return (
    <div className="container">
      {children}
      {about}
    </div>
  );
};
export default Layout;
