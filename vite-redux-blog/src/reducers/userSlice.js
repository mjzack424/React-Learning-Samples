import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { createUser, deleteUser, getAllUsers } from "../services/blogsServices";

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
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    //We have only one case here
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload; //with returning new rewsult Immer will replace existing state with whatever we return
      }) //is like sweetch
      .addCase(AddNewUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deletApiUser.fulfilled, (state, action) => {
        return state.filter((user) => user.id !== action.payload);
      });
  },
});

export const selectAllusers = (state) => state.users;
export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
