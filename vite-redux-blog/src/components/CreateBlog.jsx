import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { blogAdded } from "../reducers/blogSlice";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navitage = useNavigate();
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const handleFromSumbit = () => {
    if (title && content) {
      //dispatch(blogAdded({ id: nanoid(), title, content }));
      dispatch(blogAdded(title, content));

      setTitle("");
      setContent("");
      navitage("/");
    }
  };
  return (
    <section>
      <h2>ساخت پست جدید</h2>

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

        <button type="button" onClick={handleFromSumbit}>
          ذخیره پست
        </button>
      </form>
    </section>
  );
};

export default CreateBlog;
