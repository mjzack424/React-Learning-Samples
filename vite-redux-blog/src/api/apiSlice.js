import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["BLOG","USER"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: (result = []) => [
        { type: "BLOG", id: "LIST" },
        ...result.map(({ id }) => ({ type: "BLOG", id })),
      ],
    }),

    getBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: (result, error, id) => [{ type: "BLOG", id }],
    }),

    addNewBlog: builder.mutation({
      query: (initialBlog) => ({
        url: "/blogs",
        method: "POST",
        body: initialBlog,
      }),
      invalidatesTags: [{ type: "BLOG", id: "LIST" }],
    }),

    editBlog: builder.mutation({
      query: (blog) => ({
        url: `/blogs/${blog.id}`,
        method: "PUT",
        body: blog,
      }),
      invalidatesTags: (result, error, blog) => [
        { type: "BLOG", id: blog.id },
        { type: "BLOG", id: "LIST" },
      ],
    }),

    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "DELETE",
        invalidatesTags: ["BLOG"],
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useAddNewBlogMutation,
  useEditBlogMutation,
  useDeleteBlogMutation,
} = apiSlice;
