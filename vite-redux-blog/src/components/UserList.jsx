import { useSelector } from "react-redux";
import { selectAllusers } from "../reducers/userSlice";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = useSelector(selectAllusers);
  const renderedUsers = users.map((user) => {
    return (
      <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.fullname}</Link>
      </li>
    );
  });
  return (
    <>
      <section className="UserList">
        <h2>فهرست نویسندگان</h2>
        <u>{renderedUsers}</u>
      </section>
    </>
  );
};

export default UserList;
