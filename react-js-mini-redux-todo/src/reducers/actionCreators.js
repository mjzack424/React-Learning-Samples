//src\reducers\actionCreators.js:
import {ACTIONS} from "./actions";

export const addTodo = (todo) => ({
  type: ACTIONS.ADD_TODO,
  payload: todo,
});

export const editTodo = (id, updates) => ({
  type: ACTIONS.EDIT_TODO,
  payload: {
    id,
    updates,
  },
});

export const deleteTodo = (id) => ({
  type: ACTIONS.DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: ACTIONS.TOGGLE_TODO,
  payload: id,
});
