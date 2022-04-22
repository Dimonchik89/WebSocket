import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import multiClientMiddleware from "../middleware/axios";
import { reducers } from "./reducers";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(multiClientMiddleware)))
export default store;