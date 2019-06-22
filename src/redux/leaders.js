import * as ActionTypes from "../redux/ActionTypes";

export const Leaders = (
  state = {
    isLoading: true,
    errMess: null,
    leaders: []
  },
  action
) => {
  // switch 3 actions types that is going to receive here.
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload
      };

    case ActionTypes.LEADERS_LOADING:
      return { ...state, isLoading: true, errMess: null, leaders: [] };

    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        leaders: []
      };

    default:
      return state;
  }
};
