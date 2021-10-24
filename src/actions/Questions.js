import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { userAddQuestion, userAnswerQuestion } from './users'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export function answerQuestion({ qid, answer, authedUser }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
export function handleAddQuestion({ author, optionOneText, optionTwoText }) {
    return (dispatch) => {
        return _saveQuestion({ optionOneText, optionTwoText, author }).then(
            question => {
                dispatch(userAddQuestion({ authedUser: author, qid: question.id }))
                dispatch(addQuestion(question))

            }
        )
    }
}


export function handleAnswerQuestion({ authedUser, qid, answer }) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(userAnswerQuestion({ authedUser, qid, answer }))
            dispatch(answerQuestion({ qid, authedUser, answer }))
        })
    }
}