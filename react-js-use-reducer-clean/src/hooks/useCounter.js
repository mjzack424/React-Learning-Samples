import { useReducer } from "react";
import { ACTIONS, counterReducer } from "../reducers/counterReducer";

export default function useCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const increment = () => dispatch({ type: ACTIONS.INCREMENT });

  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });

  const incrementByAmount = (amount) =>
    dispatch({
      type: ACTIONS.INCREMENT_BY_AMOUNT,
      payload: amount,
    });

  const decrementByAmount = (amount) =>
    dispatch({
      type: ACTIONS.DECREMENT_BY_AMOUNT,
      payload: amount,
    });

  const reset = () => dispatch({ type: ACTIONS.RESET });

  return {
    count,
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
  };
}
