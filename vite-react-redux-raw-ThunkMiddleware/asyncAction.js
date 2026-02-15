const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// const thunkMiddleware = require("redux-thunk").default;
// const thunkMiddleware = require("redux-thunk");

const { thunk } = require("redux-thunk");


const axios = require("axios");

//*state
//object
const initialState = {
  loading: false,
  users: [],
  err: "",
};

//*action

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//action creator >functions that resturn action
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user,
  };
};

const fetchUserFailure = (err) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        err: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        err: action.payload,
      };

    default:
      return state;
  }
};
//Asynce Action creator
const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest()); //set loading: true
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //response.data is the array if users
        // const users = response.data; //all user Data
        const users = response.data.map((user) => user.id); //only brings userId
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err.message));
        //err.message is the error desctiption
      });
  };
};

//*store
const store = createStore(reducer, applyMiddleware(thunk));

//subscribe to store
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUser());
