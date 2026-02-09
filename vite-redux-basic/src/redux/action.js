export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const REST = "REST";
export const INCREMENTAMOUNT = "INCREMENTAMOUNT";
export const DECREMENTAMOUNT = "DECREMENTAMOUNT";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const rest = () => {
  return { type: REST };
};

export const incrementByAmount = (amount) => {
  return { type: INCREMENTAMOUNT, payload: amount };
};

export const decrementByAmount = (amount) => {
  return { type: DECREMENTAMOUNT, payload: amount };
};
