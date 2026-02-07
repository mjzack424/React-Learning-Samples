import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//or (is the same)
// import { createApi } from '@reduxjs/toolkit/query/react'

// createApi //برای ساختن API
// fetchBaseQuery //یک رپر است دور فچ

export const apiSlice = createApi({
  reducerPath: "api", //مسیر قرار گیری کش های ما //state.api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }), //base url
  endpoints: (builder) => ({
    //مسیر هایی که قرار است به آن ها درخواست بفرستیم
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    getBlog: builder.query({
      query: (initialId) => `/blogs/${initialId}`,
    }),
    addNewBlog: builder.mutation({
      query: (initialBlog) => ({
        url: "/blogs",
        method: "POST",
        body: initialBlog,
      }),
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery, useAddNewBlogMutation } =
  apiSlice;
