import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllusers } from "../reducers/userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useAddNewBlogMutation } from "../api/apiSlice";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllusers);

  const [addNewBlog, { isLoading }] = useAddNewBlogMutation();

  const navitage = useNavigate();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);
  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const handleFromSumbit = async () => {
    if (canSave) {
      try {
        await addNewBlog({
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          user: userId,
          reactions: {
            thumbsUp: 0,
            celebrate: 0,
            heart: 0,
            onFire: 0,
            wtf: 0,
          },
        }).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navitage("/");
      } catch (error) {
        console.error("Failed to save the blog", error);
      }
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
        <label htmlFor="blogAuthor">نویسنده :</label>

        <select id="blogAuthor" value={userId} onChange={onAuthorChange}>
          <option value="">انتخاب نویسنده</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.fullname}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleFromSumbit} disabled={!canSave}>
          ذخیره پست
        </button>
      </form>
    </section>
  );
};

export default CreateBlog;
