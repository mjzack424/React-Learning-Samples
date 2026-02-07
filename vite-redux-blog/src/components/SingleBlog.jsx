import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetBlogQuery } from "../api/apiSlice";

import ReactionsButton from "./ReactionsButton";
import Spinner from "./Spinner";
const SingleBlog = () => {
  const { blogid } = useParams();
  const { data: blog, isFetching, isSuccess } = useGetBlogQuery(blogid);
  const navigate = useNavigate();

  let content;
  if (isFetching) {
    content = <Spinner text="در حال بارگذاری..." />;
  } else if (isSuccess) {
    content = (
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
        >
          حذف مقاله
        </button>
      </article>
    );
  }
  const handleDelete = () => {
    if (blog) {
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
  return <section>{content}</section>;
};
export default SingleBlog;
