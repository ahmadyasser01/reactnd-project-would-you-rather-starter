import { _getQuestions, _getUsers } from "../utils/_DATA";


const AUTHED_ID = 'tylermcginnis'



const getInitialData = async () => {
    return (dispatch) => {
        const users = await _getUsers();
        const questions = await _getQuestions();

        dispatch(users)
        dispatch(questions)
        dispatch(setAuthedUser(AUTHED_ID))
    }
}