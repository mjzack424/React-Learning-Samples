import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogUpdated } from "../reducers/blogSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { blogid } = useParams();

  const blog = useSelector((state) => state.blogs.find((blog) => blog.id === blogid));

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const navitage = useNavigate();
  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const handleSubmit = () => {
    if (title && content) {
      dispatch(blogUpdated({ id: blogid, title, content }));
      navitage(`/blogs/${blogid}`);
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
      <h2>
        ویرایش مقاله
        {title}
      </h2>

      <form autoComplete="on">
        <label htmlFor="blogTitle">عنوان پست :</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="blogContent">محتوای اصلی :</label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={content}
          onChange={onContentChange}
        ></textarea>

        <button type="button" onClick={handleSubmit}>
          ویرایش مقاله
        </button>
      </form>
    </section>
  );
};
export default EditBlog;

// const CreateBlog = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navitage = useNavigate();
//   const dispatch = useDispatch();
//   const onTitleChange = (e) => setTitle(e.target.value);
//   const onContentChange = (e) => setContent(e.target.value);
//   const handleFromSumbit = () => {
//     if (title && content) {
//       //dispatch(blogAdded({ id: nanoid(), title, content }));
//       dispatch(blogAdded(title, content));

//       setTitle("");
//       setContent("");
//       navitage("/");
//     }
//   };
//   return (

//   );
// };

// export default CreateBlog;
