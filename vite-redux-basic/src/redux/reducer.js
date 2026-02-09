import {
  INCREMENT,
  DECREMENT,
  REST,
  INCREMENTAMOUNT,
  DECREMENTAMOUNT,
} from "./action";

const initalState = {
  count: 0,
};

export const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENTAMOUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENTAMOUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case REST:
      return {
        ...state,
        count: (state.count = 0),
      };

    default:
      return state;
  }
};
