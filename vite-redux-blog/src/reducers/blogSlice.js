import {
  createSlice,
  nanoid,
  createAsyncThunk,
  current,
  createSelector,
} from "@reduxjs/toolkit";
import { sub } from "date-fns-jalali";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../services/blogsServices";

const initialState = {
  blogs: [],
  status: "idle",
  error: null,
};

export const fetchBlogs = createAsyncThunk("/blog/fetchBlogs", async () => {
  //createAsyncThunk: سه اکشن اعزازم میکند شروع موفقیت شکست ما باید به این ها گوش بدیم و بال توجه به آن کار خاصی بکنیم
  const response = await getAllBlogs();
  return response.data;
});

export const addNewBlog = createAsyncThunk(
  "/blogs/addNewBlog",
  async (initalBlog) => {
    const response = await createBlog(initalBlog);
    return response.data;
  },
);

export const deleteApiBlog = createAsyncThunk(
  "/blogs/deleteApiBlog",
  async (initalBlogId) => {
    await deleteBlog(initalBlogId);
    return initalBlogId;
  },
);

export const updateApiBlog = createAsyncThunk(
  "/blogs/updateApiBlog",
  async (initalBlog) => {
    const response = await updateBlog(initalBlog, initalBlog.id);
    return response.data;
  },
);

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
            reactions: {
              thumbsUp: 0,
              celebrate: 0,
              heart: 0,
              onFire: 0,
              wtf: 0,
            },
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
    reactionsAdded: (state, action) => {
      const { blogId, reaction } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === blogId);
      if (existingBlog) {
        existingBlog.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "completed";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        ((state.state = "failed"), (state.error = action.error.message));
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(deleteApiBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      })
      .addCase(updateApiBlog.fulfilled, (state, action) => {
        const { id } = action.payload;
        const updatedBlogIndex = state.blogs.findIndex(
          (blog) => blog.id === id,
        );
        state.blogs[updatedBlogIndex] = action.payload;
      });
  },
});
export const selectAllBlogs = (state) => state.blogs.blogs;

export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);

export const selectUserBlogs = createSelector(
  // [selectAllBlogs, (state, userId) => userId],
  [selectAllBlogs, (_, userId) => userId],

  (blogs, userId) => blogs.filter((blog) => blog.user === userId), //output selector
);
//selectUserBlogs(state,userId)

export const { blogAdded, blogUpdated, blogDeleted, reactionsAdded } =
  blogsSlice.actions;
export default blogsSlice.reducer;
