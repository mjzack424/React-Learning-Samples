console.log("redux project...💻");
const redux = require("redux");
const createStore = redux.createStore;

//*Actions
//types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";


//Action creator
//is a function return a function
const buyCake = () => {
  //action
  return {
    type: (BUY_CAKE, "BUY_CAKE"),
    info: "first redux action", //Property
  };
};

const buyIceCream = () => {
  //action
  return {
    type: (BUY_ICECREAM),
    info: "second redux action", //Property
  };
};

//*Reducers
//(previousState, action) => newState

const initalState = {
  numberOfCakes: 10,
  numberOfZIceCream: 10,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //make a copy
        numberOfCakes: state.numberOfCakes - 1,
      };
      case "BUY_ICECREAM":
      return {
        ...state, //make a copy
        numberOfZIceCream: state.numberOfZIceCream - 1,
      };

    default:
      return state;
  }
};

//*Store
const store = createStore(reducer);

console.log("inital state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState()),
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());


unsubscribe();


