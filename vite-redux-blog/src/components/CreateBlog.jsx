import { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogAdded } from "../reducers/blogSlice";
import { useNavigate } from "react-router-dom";
import { selectAllusers } from "../reducers/userSlice";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllusers);

  const navitage = useNavigate();
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);
  const canSave = [title, content, userId].every(Boolean);

  const handleFromSumbit = () => {
    if (canSave) {
      //dispatch(blogAdded({ id: nanoid(), title, content }));
      dispatch(blogAdded(title, content, userId));

      setTitle("");
      setContent("");
      setUserId("");
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
