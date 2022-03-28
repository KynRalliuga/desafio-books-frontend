import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers";

const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you actually want to use here
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(rootReducer, composedEnhancer);

const makeStore = () => store;

export const storeWrapper = createWrapper(makeStore, { debug: false });
