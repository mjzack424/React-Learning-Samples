import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//useSelector برای دسترسی
const BlogsList = () => {
  const blogs = useSelector((st) => st.blogs); //blogs در blogsSlice تعرف شده
  const renderBlogs = blogs.map((b) => (
    <article className="blog-excerpt">
      <h3>{b.title}</h3>
      <p className="blog-content">{b.content.substring(0, 100)}</p>
      <Link to={`/blogs/${b.id}`} className="button muted-button">
        مشاهده
      </Link>
    </article>
  ));
  return (
    <>
      <section className="blog-list">
        <h2>فهرست پست ها</h2>
        {renderBlogs}
      </section>
    </>
  );
};
export default BlogsList;
