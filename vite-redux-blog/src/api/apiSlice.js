import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//or (is the same)
// import { createApi } from '@reduxjs/toolkit/query/react'

// createApi //برای ساختن API
// fetchBaseQuery //یک رپر است دور فچ

export const apiSlice = createApi({
  reducerPath: "api", //مسیر قرار گیری کش های ما //state.api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }), //base url
  tagTypes: ["BLOGS"], //برای بی اعتبار کردن کش استفاده میکنیم
  endpoints: (builder) => ({
    //مسیر هایی که قرار است به آن ها درخواست بفرستیم
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["BLOGS"],
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
      invalidatesTags: ["BLOGS"],
    }),
    editBlog: builder.mutation({
        query: blog => ({
            url: `/blogs/${blog.id}`,
            method: "PUT", //or "PATCH"
            body: blog
        })
    })
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery, useAddNewBlogMutation, useEditBlogMutation } =
  apiSlice;
