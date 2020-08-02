import { createStore } from "redux";
import { rootReducer } from "./Reducers";

export default function (initialState: any) {
  return createStore(rootReducer, initialState);
}
