import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todo.types";

export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text,
      completed: false,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const toggleToDo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
