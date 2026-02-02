import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchBlogs, selectAllBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionsButton from "./ReactionsButton";
//useSelector برای دسترسی
const BlogsList = () => {
  const dispatche = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector(selectAllBlogs); //blogs در blogsSlice تعرف شده
  const blogStatus = useSelector((status) => status.blogs.status);

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatche(fetchBlogs());
    }
  }, [blogStatus, dispatche]);

  const orderedBlogs = blogs
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderBlogs = orderedBlogs.map((b) => (
    <article className="blog-excerpt" key={b.id}>
      <h3>{b.title}</h3>
      <div style={{ marginTop: "10px", marginRight: "10px" }}>
        <ShowTime timestamp={b.date} />
      </div>
      <p className="blog-content">{b.content.substring(0, 100)}</p>
      <Link to={`/blogs/${b.id}`} className="button muted-button">
        مشاهده
      </Link>
      <ReactionsButton blog={b} />
      <ShowAuthor userId={b.user} />
    </article>
  ));
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
        {renderBlogs}
      </section>
    </>
  );
};
export default BlogsList;
