import { createStore } from "redux";
import mainReducer from '../reducers'
import allMiddleware from '../middleware'

const store = createStore(mainReducer, allMiddleware);
export default store;