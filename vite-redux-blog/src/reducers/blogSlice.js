import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: nanoid(), //nanoid
      // date: new Date().toISOString(),
      title: "پست نخست",
      content: "محتوای جذاب اولین پست ما 😂",
    },
    {
      id: nanoid(), //nanoid
      // date: new Date().toISOString(),
      title: "پست دوم",
      content: "عجب بالا و پایین داره دنیا!",
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
      prepare(title, content) {
        //Complex logic can be here
        return {
          payload: {
            id: nanoid(),
            title,
            content,
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
