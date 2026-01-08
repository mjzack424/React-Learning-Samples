import { configureStore } from "@reduxjs/toolkit";
//Actions
const actionOne = { type: "counter/increment" };

//Action Creators
export const increment = (number) => {
  return {
    type: "counter/increment",
    payload: number,
  };
};

//Reducers
(state, action) => newState;

const initialState = { value: 0 };



const counterReducer = (state = initialState, action) => {
  if (action.type === "counter/increment") {
    const copyState = { ...state };
    return {
      value: (copyState.value += action.payload),
    };
  }

  return state;
};

//Store
export const store = configureStore({ reducer: counterReducer });
// store.getState();

//Dispatch
// store.dispatch({ type: "counter/increment" });
// store.dispatch(increment());

//Selectors
const selectCounterValue = (state) => state.value;
export const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
