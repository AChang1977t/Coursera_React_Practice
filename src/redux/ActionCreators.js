import * as ActionTypes from "../redux/ActionTypes";

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
