import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    fullname: "محمد جواد ذاکریان",
  },
  {
    id: "2",
    fullname: "زهرا ذاکریان",
  },
  {
    id: "3",
    fullname: "ریحانه حاجی محمدی",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export default usersSlice.reducer;
