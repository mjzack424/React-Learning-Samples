import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useGetBlogsQuery } from "../api/apiSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionsButton from "./ReactionsButton";
import Spinner from "./Spinner";

let Blog = ({ blog }) => {
  return (
    <article className="blog-excerpt">
      <h3>{blog.title}</h3>

      <div style={{ marginTop: "10px", marginRight: "10px" }}>
        <ShowTime timestamp={blog.date} />
      </div>

      <p className="blog-content">{blog.content.substring(0, 100)}</p>

      <Link to={`/blogs/${blog.id}`} className="button muted-button">
        مشاهده
      </Link>

      <ReactionsButton blog={blog} />
      <ShowAuthor userId={blog.user} />
    </article>
  );
};

//useSelector برای دسترسی
const BlogsList = () => {
  const {
    data: blogs = [],
    isLoading,
    isSuccess,
    isError,
    // isFetching,
    error,
    refetch,
  } = useGetBlogsQuery();
  const navigate = useNavigate();

  const sortedBlogs = useMemo(() => {
    const storedBlogs = blogs.slice();
    storedBlogs.sort((a, b) => b.date.localeCompare(a.date));
    return storedBlogs;
  }, [blogs]);

  let content;
  if (isLoading) {
    content = <Spinner text="بارگذاری..." />;
  } else if (isSuccess) {
    content = sortedBlogs.map((blog) => <Blog key={blog.id} blog={blog} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <>
      <section className="blog-list">
        <button
          className="full-button accent-button"
          style={{ marginTop: "1em" }}
          onClick={() => {
            navigate("blogs/create-blog");
          }}
        >
          ساخت پست جدید
        </button>
        <h2>فهرست پست ها</h2>
        {/* <button onClick={refetch}>رفرش پست ها🔄️</button> */}
        {content}
      </section>
    </>
  );
};
export default BlogsList;
