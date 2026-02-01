import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns-jalali";

const initialState = {
  blogs: [
    {
      id: nanoid(), //nanoid
      // date: new Date().toISOString(),
      date: sub(new Date(), { days: 12, minutes: 10 }).toISOString(),
      title: "پست نخست",
      content: "محتوای جذاب اولین پست ما 😂",
      user: "1",
    },
    {
      id: nanoid(), //nanoid
      // date: new Date().toISOString(),
      date: sub(new Date(), { minutes: 35 }).toISOString(),
      title: "پست دوم",
      content: "عجب بالا و پایین داره دنیا!",
      user: "2",
    },
  ],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      prepare(title, content, userId) {
        //Complex logic can be here
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
    blogUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === id);
      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    },
    blogDeleted: (state, action) => {
      const { id } = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id); //this return new array
    },
  },
});
export const selectAllBlogs = (state) => state.blogs.blogs;

export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);

export const { blogAdded, blogUpdated, blogDeleted } = blogsSlice.actions;
export default blogsSlice.reducer;
