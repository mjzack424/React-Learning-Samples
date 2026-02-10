import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todo.types";

const initailState = {
  list: [],
};

export const todoReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };

    default:
      return state;
  }
};
