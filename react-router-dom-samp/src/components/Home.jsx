import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <p>this is home page</p>
      <Link to="/about">about page</Link>
    </>
  );
};

export default Home;
