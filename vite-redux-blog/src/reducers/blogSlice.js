import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(), //nanoid
    // date: new Date().toISOString(),
    title: "پست نخست",
    content: "محتوای جذاب اولین پست ما 😂",
  },
  {
    id: nanoid(), //nanoid
    // date: new Date().toISOString(),
    title: "پست دوم",
    content: "عجب بالا و پایین داره دنیا!",
  },
];

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { blogAdded } = blogsSlice.actions;
export default blogsSlice.reducer;
