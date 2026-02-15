//*Imports Here
const redux = require("redux");
const axios = require("axios");
const { thunk } = require("redux-thunk");
const applyMiddleware = redux.applyMiddleware;

//*Actions
//actions
const FETCH_FOOD_REQ = "FETCH_FOOD_REQ";
const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS";
const FETCH_FOOD_FAILD = "FETCH_FOOD_FAILD ";
//action creator
const fetchFoodReq = () => {
  return {
    type: FETCH_FOOD_REQ,
  };
};
const fetchFoodFaild = (err) => {
  return {
    type: FETCH_FOOD_FAILD,
    payload: err,
  };
};
const fetchFoodSuccess = (food) => {
  return {
    type: FETCH_FOOD_SUCCESS,
    payload: food,
  };
}; 

//*Reducers

//*Async Actions

//*Store

console.log("Shop is starting now...👌");

// based on vite-react-redux-raw-ThunkMiddleware