import * as ActionTypes from "../redux/ActionTypes";
import { DISHES } from "../shared/dishes";

// Creat action object
// using arrow function with 4 parameters and return JS object
export const addComment = (dishId, rating, author, comment) => ({
  // 1) define the type
  // 2) define "payload" that carried the data that sent back by addComment
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

// first Thunk - fetchDishes that is return a function that is call or dispatch sever actions
// create 4 action creators functions
// 3 of then are returning an action object dishesLoading/dishesFailed/AddDishes
export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  // setTimeout function to delay here
  setTimeout(() => {
    dispatch(AddDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errmess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const AddDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});
