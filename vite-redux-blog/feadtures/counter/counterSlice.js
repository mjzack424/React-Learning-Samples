import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Redux Thunk
//Async this most be add after one second
//تابع بیرونی
//this is outer function thank return thunk
// export const incrementAsync = amount => {
//   //this is inner function thunk it Self
//   return async (dispatch, getState)=> {
//     setTimeout(()=> {
//       dispatch(incrementByAmount(amount))
//     }, 2000)
//   }
// }

// Redux Thunk
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};

export const { increment, decrement, incrementByAmount, setAmount } =
  counterSlice.actions;
export const selectCount = (state) => state.counter.value; //new added
export default counterSlice.reducer;
