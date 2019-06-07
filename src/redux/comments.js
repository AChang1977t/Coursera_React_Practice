import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = {
    erroMess: null,
    comments: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        comments: action.payload
      };
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        comments: []
      };

    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();

      // we can't modify the state the we sent in as the parameter
      // so we use "concat function" to create a new object to pushes the new element into the array
      return { ...state, comments: state.comments.concat(comment) }; // this creat a new object to return from function here.

    default:
      return state;
  }
};
