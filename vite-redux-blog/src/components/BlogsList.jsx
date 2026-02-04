import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchBlogs, selectAllBlogs } from "../reducers/blogSlice";
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
Blog = memo(Blog); //زمانی تعییر میکند که پراپی که بهش داده شده تغییر  کند

//useSelector برای دسترسی
const BlogsList = () => {
  const dispatche = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector(selectAllBlogs); //blogs در blogsSlice تعرف شده
  const blogStatus = useSelector((status) => status.blogs.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatche(fetchBlogs());
    }
  }, [blogStatus, dispatche]);
  let content;
  if (blogStatus === "loading") {
    content = <Spinner text="بارگذاری..." />;
  } else if (blogStatus === "completed") {
    const orderedBlogs = blogs
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedBlogs.map((blog) => <Blog key={blog.id} blog={blog} />);
  } else if (blogStatus === "failed") {
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
        {content}
      </section>
    </>
  );
};
export default BlogsList;
