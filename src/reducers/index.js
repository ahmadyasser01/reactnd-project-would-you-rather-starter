import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./Questions";


export default combineReducers({
    authedUser,
    questions,
})