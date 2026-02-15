console.log("redux project...💻");
const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

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
    type: BUY_ICECREAM,
    info: "second redux action", //Property
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

//*Store
const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
