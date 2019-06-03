import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();

      // we can't modify the state the we sent in as the parameter
      // so we use "concat function" to create a new object to pushes the new element into the array
      return state.concat(comment); // this creat a new object to return from function here.
    default:
      return state;
  }
};
