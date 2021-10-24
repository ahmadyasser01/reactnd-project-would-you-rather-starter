import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./Questions";
import users from "./Users";
import { loadingBarReducer } from 'react-redux-loading'

const mainReducer = combineReducers({
    authedUser,
    questions,
    users,
    loadingBar: loadingBarReducer,

})

export default mainReducer;