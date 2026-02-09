import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState();

export const extendedAPiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      transformResponse: (responseData) => {
        return userAdapter.setAll(initialState, responseData);
      },
      providesTags: ["USER"],
    }),
    addNewUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["USER"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const selectUsersResult = extendedAPiSlice.endpoints.getUsers.select();

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   //We have only one case here
  //   builder
  //     .addCase(fetchUsers.fulfilled, userAdapter.setAll)
  //     .addCase(AddNewUser.fulfilled, userAdapter.addOne)
  //     .addCase(deletApiUser.fulfilled, userAdapter.removeOne);
  // },
});

// export const selectAllusers = (state) => state.users;

const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult?.data,
);

export const { selectAll: selectAllusers, selectById: selectUserById } =
  userAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);

export const {
  useGetUsersQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
} = extendedAPiSlice;

export default usersSlice.reducer;
