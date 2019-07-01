import * as ActionTypes from "../redux/ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { string } from "postcss-selector-parser";

// Creat action object
// using arrow function with parameters and return JS object
export const addComment = comment => ({
  // 1) define the type
  // 2) define "payload" that carried the data that sent back by addComment
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

// create another action creator call post comment
export const postComment = (dishId, rating, author, comment) => dispatch => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };
  // add another property called date
  newComment.date = new Date().toISOString();
  // return a fetch operation => be a post operation
  return fetch(
    baseUrl + "comments",
    // below structure of the request msg that going on.
    {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-Type": "application/json"
      },
      credentials: "same-origin"
    }
  )
    .then(
      response => {
        // first part is a situation where you receive a response from server
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        // second part that is where you will have to handle the error appropriate.
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log("post comments ", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

// create another action creator call post comment, set feedback object as a parameter
export const postFeedback = feedback => dispatch => {
  const newFeedback = {
    ...feedback
  };
  // add another property called date
  newFeedback.date = new Date().toISOString();
  // return a fetch operation => be a post operation
  return fetch(
    baseUrl + "Feedback",
    // below structure of the request msg that going on.
    {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "content-Type": "application/json"
      },
      credentials: "same-origin"
    }
  )
    .then(
      response => {
        // first part is a situation where you receive a response from server
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        // second part that is where you will have to handle the error appropriate.
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(response =>
      alert("Thank you for your feedback! " + JSON.stringify(response))
    )
    .catch(error => {
      console.log("post Feedback ", error.message);
      alert("Your Feedback could not be posted\nError: " + error.message);
    });
};

// first Thunk - fetchDishes that is return a function that is call or dispatch sever actions
// create 4 action creators functions
// 3 of then are returning an action object dishesLoading/dishesFailed/AddDishes
export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(
      response => {
        // first part is a situation where you receive a response from server
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        // second part that is where you will have to handle the error appropriate.
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errmess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + "comments")
    .then(
      response => {
        // first part is a situation where you receive a response from server
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        // second part that is where you will have to handle the error appropriate.
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const fetchPromos = () => dispatch => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions")
    .then(
      response => {
        // first part is a situation where you receive a response from server
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        // second part that is where you will have to handle the error appropriate.
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = errmess => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = promos => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});

export const fetchLeaders = () => dispatch => {
  dispatch(leadersLoading(true));

  return fetch(baseUrl + "leaders")
    .then(
      response => {
        // first part is a situation where you receive a response from server
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        // second part that is where you will have to handle the error appropriate.
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = errmess => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
});

export const addLeaders = leaders => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});
