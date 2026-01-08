import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feadtures/counter/counterSlice";

export const store = configureStore({
  // reducer: counterReducer,
  reducer: {
    counter: counterReducer,
  }
});
