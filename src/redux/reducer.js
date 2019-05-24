import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

// initial configuration of the state
export const initialState = {
  dishes: DISHES, // JS dishes Object
  comments: COMMENTS, // comments Object
  leaders: LEADERS, // leaders Object
  promotions: PROMOTIONS // promotions Object
};

// create first reducer function
// and initialize state, the default value will be initialState.
export const Reducer = (state = initialState, action) => {
  return state; // return current state from the reducer function that is pure function.
};
