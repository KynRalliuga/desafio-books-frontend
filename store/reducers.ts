import { combineReducers } from "redux";

import apiLoginReducer from "./api/login/reducer";
import apiBooksReducer from "./api/books/reducer";
import { RootReducerState } from "./types";

const rootReducer = combineReducers<RootReducerState>({
  apiLogin: apiLoginReducer,
  apiBooks: apiBooksReducer,
});

export default rootReducer;
