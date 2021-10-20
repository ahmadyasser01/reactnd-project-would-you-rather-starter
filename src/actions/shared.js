
import { addQuestion, recieveQuestions } from "./Questions";
import { recieveUsers, userAddQuestion } from "./Users";
import { setAuthedUser } from "./authedUser";
import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion } from "../utils/_DATA";

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
export const handleAddQuestion = ({ author, optionOneText, optionTwoText }) => {
    console.log(author, optionOneText, optionTwoText, "options one and two before dispatch")
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion({ author, optionOneText, optionTwoText }).then(question => {
            console.log(question, "test question")
            dispatch(userAddQuestion({
                authedUser: author,
                qid: question.id
            }))
            dispatch(addQuestion(question))
            dispatch(hideLoading())

        })
    }
}