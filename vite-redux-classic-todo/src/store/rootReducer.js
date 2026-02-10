import { combineReducers } from "redux";
import { todoReducer } from "./todos/todo.reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
});
