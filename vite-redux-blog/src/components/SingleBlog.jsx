import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SingleBlog = () => {
  const { blogid } = useParams();
  const blog = useSelector((st) => st.blogs.find((b) => b.id === blogid));
  if (!blog) {
    return (
      <section>
        <h2>پست مورد نظر پیدا نشد رفیق!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="blog">
        <h2>{blog.title}</h2>
        <p className="blog-content">{blog.content.substring(0, 100)}</p>
        <Link to={`/EditBlog/${blog.id}`} className="button">
          ویرایش مقاله
        </Link>
      </article>
    </section>
  );
};
export default SingleBlog;
