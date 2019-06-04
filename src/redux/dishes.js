import * as ActionTypes from "../redux/ActionTypes";

// state extends to contain 3 properties isLoading/errMess/dishes
export const Dishes = (
  state = {
    isLoading: true,
    errMess: null,
    dishes: []
  },
  action
) => {
  // switch 3 actions types that is going to receive here.
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload
      };

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: []
      };

    default:
      return state;
  }
};
