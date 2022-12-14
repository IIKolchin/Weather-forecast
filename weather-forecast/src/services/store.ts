import thunk from "redux-thunk";
import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,

  )
);

export const store = createStore(rootReducer, enhancer);
