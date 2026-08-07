//src\context\StoreContext.jsx:
import { createContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import { initialState } from "../reducers/initialState";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
