import { configureStore } from "@reduxjs/toolkit";

import blogsReducer from "../reducers/blogSlice";
import usersReducer, { extendedAPiSlice } from "../reducers/userSlice";
import { apiSlice } from "../api/apiSlice"; //🆕

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, //🆕
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), //🆕
  //خط بالا میگه میدل ویر هایی که پیش فرض هست رو بگیر ادامش اضافه کن میدل ویر جدید رو
  //این میدلویر برای طول عمر کش هست هر وقت ای پی آی الایس ساختیم باید این میدلویر رو هم بسازیم
});

//Fetch all users from API
//console.log(apiSlice.endpoints.getUsers);
store.dispatch(extendedAPiSlice.endpoints.getUsers.initiate());
