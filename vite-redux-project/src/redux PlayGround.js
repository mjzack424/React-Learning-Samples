import { configureStore } from "@reduxjs/toolkit";
//Actions
const actionOne = { type: "counter/increment" };

//Action Creators
const increment = (number) => {
  return {
    type: "counter/increment",
    payload: number,
  };
};

//Reducers
const reducerOne = (state, action) => {
  return newState;
};

(state, action) => newState;

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === "counter/increment") {
    const copyState = { ...state };
    return {
      value: (copyState.value += 1),
    };
  }

  return state;
};

//Store
const store = configureStore({ reducer: counterReducer });
store.getState();

//Dispatch
store.dispatch({ type: "counter/increment" });
//or
store.dispatch(increment());

//Selectors
const selectCounterValue = (state) => state.value;
const currentValue = selectCounterValue(store.getState());
console.log(currentValue);


ForChange =>Dispatch>Reducer
