import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from "./todo.types";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, list: [...state.list, action.payload] };
    case DELETE_TODO:
      return { ...state, list: state.list.filter(t => t.id !== action.payload) };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t)
      };
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
