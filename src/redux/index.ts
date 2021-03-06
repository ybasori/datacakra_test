import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Logger } from "./types";

import auth from "./reducers/auth";
import user from "./reducers/user";
import tourist from "./reducers/tourist";

const reducer = combineReducers({ auth, user, tourist });

const logger: Logger =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.group(action.type);
    console.info("dispatching", action);
    const result = next(action);
    console.log("next state", getState());
    console.groupEnd();
    return result;
  };

const store = createStore(
  reducer,
  applyMiddleware(
    ...[...(process.env.NODE_ENV === "development" ? [logger] : []), thunk]
  )
);

export { store };
