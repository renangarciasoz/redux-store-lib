import { createStore } from "redux";
import Reducers from "./reducers";

export function Store(initialState = {}) {
  return createStore(Reducers, initialState);
}
