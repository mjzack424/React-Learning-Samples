import {
  createSlice,
  nanoid,
  createAsyncThunk,
  current,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { sub } from "date-fns-jalali";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../services/blogsServices";

// const initialState = {
//   blogs: [],
//   status: "idle",
//   error: null,
// };

const blogAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date), //sortComparer method can give as option to Adapter(is like sort array method)
  //Object here
});

const initialState = blogAdapter.getInitialState({
  //it have InitialState too
  status: "idle",
  error: null,
});
//the result of top code:
//{ids: [], entities: {}, status: "idle", error: null}
console.log(initialState);

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
    reactionsAdded: (state, action) => {
      const { blogId, reaction } = action.payload;
      const existingBlog = state.entities[blogId];
      if (existingBlog) {
        existingBlog.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, _) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "completed";
        // state.blogs = action.payload;
        blogAdapter.upsertMany(state, action.payload); //چندین
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        ((state.state = "failed"), (state.error = action.error.message));
      })
      .addCase(addNewBlog.fulfilled, blogAdapter.addOne) //اگر فقط یکی داشته باشیم
      .addCase(deleteApiBlog.fulfilled, blogAdapter.removeOne)
      .addCase(updateApiBlog.fulfilled, blogAdapter.updateOne);
  },
});

// export const selectAllBlogs = (state) => state.blogs.blogs;
// export const selectBlogById = (state, blogId) =>
//   state.blogs.blogs.find((blog) => blog.id === blogId);

export const {
  selectAll: selectAllBlogs,
  selectById: selectBlogById,
  selectIds: selectBlogIds,
} = blogAdapter.getSelectors((state) => state.blogs);

export const selectUserBlogs = createSelector(
  // [selectAllBlogs, (state, userId) => userId],
  [selectAllBlogs, (_, userId) => userId],

  (blogs, userId) => blogs.filter((blog) => blog.user === userId), //output selector
);
//selectUserBlogs(state,userId)

export const { blogAdded, blogUpdated, blogDeleted, reactionsAdded } =
  blogsSlice.actions;
export default blogsSlice.reducer;
