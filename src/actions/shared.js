
import { recieveQuestions } from "./Questions";
import { recieveUsers } from "./Users";
import { setAuthedUser } from "./authedUser";
import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'sarahedo'



export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                console.log("usrs from handling", users);
                dispatch(recieveUsers(users))
                dispatch(recieveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())

            }).catch(err => {
                console.log(err);
            })

    }
}