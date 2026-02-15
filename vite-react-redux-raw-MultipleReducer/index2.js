console.log("\n");
console.log("redux project...💻");
const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

//*Actions
//types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const BUT_CANDY = "BUT_CANDY";

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
    type: "BUY_ICECREAM",
    info: "second redux action", //Property
  };
};

const buyCandy = () => {
  return {
    type: BUT_CANDY,
    info: "third redux action",
  };
};

//*Reducers
//(previousState, action) => newState

const initalCakeState = {
  numberOfCakes: 10,
};

const initalIceCreamState = {
  numberOfZIceCream: 20,
};

const initalCandyState = {
  numberOfCandy: 60,
};

const iceCreamReducer = (state = initalIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state, //make a copy
        numberOfZIceCream: state.numberOfZIceCream - 1,
      };

    default:
      return state;
  }
};

const cakeReducer = (state = initalCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //make a copy
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const candyRducer = (state = initalCandyState, action) => {
  switch (action.type) {
    case BUT_CANDY:
      return {
        ...state,
        numberOfCandy: state.numberOfCandy - 1,
      };

    default:
      return state;
  }
};

//*Store
const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  candy: candyRducer,
});
const store = createStore(rootReducer);

console.log("inital state", store.getState());
console.log("\n");

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState()),
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log("\n");
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
console.log("\n");
store.dispatch(buyCandy());
store.dispatch(buyCandy());
store.dispatch(buyCandy());
store.dispatch(buyCandy());
store.dispatch(buyCandy());
store.dispatch(buyCandy());
console.log("\n");

unsubscribe();
