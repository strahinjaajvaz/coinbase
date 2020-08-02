import { combineReducers, createStore } from "redux";

import UserReducer from "./UserReducer";

const rootReducer = combineReducers({ user: UserReducer });

export function createReduxStore(initialState: any) {
  console.log(initialState);
  return createStore(rootReducer, initialState);
}

export type RootState = ReturnType<typeof rootReducer>;
