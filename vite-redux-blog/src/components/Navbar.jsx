import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>وبلاگ ریداکس</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to={"/"}>مقالات</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
