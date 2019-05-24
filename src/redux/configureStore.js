import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  //Create the store
  const store = createStore(Reducer, initialState);
  return store;
};
