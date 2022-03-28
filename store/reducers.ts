import { combineReducers } from "redux";

import apiLoginReducer from "./api/login/reducer";
import { RootReducerState } from "./types";

const rootReducer = combineReducers<RootReducerState>({
  apiLogin: apiLoginReducer,
});

export default rootReducer;
