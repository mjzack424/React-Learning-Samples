import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { createUser, deleteUser, getAllUsers } from "../services/blogsServices";

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState();

export const fetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
  const response = await getAllUsers();
  return response.data;
});

export const deletApiUser = createAsyncThunk(
  "/users/deletApiUser",
  async (initialUserId) => {
    await deleteUser(initialUserId);
    return initialUserId;
  },
);

export const AddNewUser = createAsyncThunk(
  "/users/AddNewUser",
  async (initialUser) => {
    const response = await createUser(initialUser);
    return response.data;
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //We have only one case here
    builder
      .addCase(fetchUsers.fulfilled, userAdapter.setAll)
      .addCase(AddNewUser.fulfilled, userAdapter.addOne)
      .addCase(deletApiUser.fulfilled, userAdapter.removeOne);
  },
});

export const { selectAll: selectAllusers, selectById: selectUserById } =
  userAdapter.getSelectors((state) => state.users);

// export const selectAllusers = (state) => state.users;
// export const selectUserById = (state, userId) =>
//   state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
