import { createStore } from "redux";
import rootReducer from "./reducers";

export function Store(initialState = {}) {
  return createStore(rootReducer, initialState);
}
