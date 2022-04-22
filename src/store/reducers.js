import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";

export const reducers = combineReducers({postsReducer});