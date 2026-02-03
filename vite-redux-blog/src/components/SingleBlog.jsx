import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBlogById, deleteApiBlog } from "../reducers/blogSlice";
import ReactionsButton from "./ReactionsButton";
const SingleBlog = () => {
  const { blogid } = useParams();
  const blog = useSelector((state) => selectBlogById(state, blogid));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (blog) {
      dispatch(deleteApiBlog(blog.id));
      navigate("/");
    }
  };

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
        <ReactionsButton blog={blog} />
        <Link to={`/EditBlog/${blog.id}`} className="button">
          ویرایش مقاله
        </Link>
        <button
          className=" muted-button"
          style={{ marginRight: "10px" }}
          onClick={handleDelete}
        >
          حذف مقاله
        </button>
      </article>
    </section>
  );
};
export default SingleBlog;
