import { getInitialData } from "../utils/apiHelper"
import { recieveUsers } from "./users"
import { receiveQuestions } from "./Questions"
export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(recieveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))

        })
    }
}