import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAllBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
//useSelector برای دسترسی
const BlogsList = () => {
  const blogs = useSelector(selectAllBlogs); //blogs در blogsSlice تعرف شده
  const navigate = useNavigate();
  const orderedBlogs = blogs
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderBlogs = orderedBlogs.map((b) => (
    <article className="blog-excerpt" key={b.id}>
      <h3>{b.title}</h3>
      <div style={{ marginTop: "10px" }}>
        <ShowTime timestamp={b.date} />
      </div>
      <p className="blog-content">{b.content.substring(0, 100)}</p>
      <Link to={`/blogs/${b.id}`} className="button muted-button">
        مشاهده
      </Link>
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
