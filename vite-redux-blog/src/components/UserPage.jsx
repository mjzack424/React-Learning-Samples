import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "../reducers/userSlice";
import { selectAllBlogs, selectUserBlogs } from "../reducers/blogSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));
  //old not used
  const userBlogsOld = useSelector((state) => {
    const allBlogs = selectAllBlogs(state);
    return allBlogs.filter((blog) => blog.user === userId);
  });
  //new
  const userBlogs = useSelector((state) => selectUserBlogs(state, userId));

  const blogTitles = userBlogs.map((blog) => (
    <li key={blog.id}>
      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
    </li>
  ));
  return (
    <>
      <section id="UserPage">
        <h2>{user.fullname}</h2>
        <ul>
          {userBlogs.length > 0 ? (
            blogTitles
          ) : (
            <li style={{ listStyle: "none" }}>
              نویسنده مورد نظر هیچ پستی ارسال نکرده!
            </li>
          )}
        </ul>
      </section>
    </>
  );
};

export default UserPage;
