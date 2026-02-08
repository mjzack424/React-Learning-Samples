import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "../reducers/userSlice";
import { useGetBlogsQuery } from "../api/apiSlice";

const UserPage = () => {
  const { userId } = useParams();
  
  const user = useSelector((state) => selectUserById(state, userId));

  // Use selectFromResult to filter blogs by user
  const { userBlogs = [], isLoading, isError } = useGetBlogsQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      userBlogs: data?.filter(blog => blog.user === userId) || []
    }),
  });

  // Handle loading/error states
  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (isError) return <div>خطا در دریافت اطلاعات</div>;
  if (!user) return <div>کاربر یافت نشد</div>;

  return (
    <section id="UserPage">
      <h2>{user.fullname}</h2>
      <ul>
        {userBlogs.length > 0 ? (
          userBlogs.map(blog => (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))
        ) : (
          <li style={{ listStyle: "none" }}>
            نویسنده مورد نظر هیچ پستی ارسال نکرده!
          </li>
        )}
      </ul>
    </section>
  );
};

export default UserPage;