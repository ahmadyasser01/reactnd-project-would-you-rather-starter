import { RECIEVE_USERS, USER_ADD_QUESTION, USER_ANSWER_QUESTION } from "../actions/Users";




export default function users(state = {}, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case USER_ADD_QUESTION: {
            const { authedUser, questionId } = state
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: [...state[authedUser].questions, questionId]
                }
            }
        }

        case USER_ANSWER_QUESTION:
            {
                const { authedUser, answer, questionId, } = state
                return {
                    ...state,
                    [authedUser]: {
                        ...state[authedUser],
                        answers: {
                            ...state[authedUser].answers,
                            [questionId]: answer

                        }
                    }
                }
            }
        default:
            return { ...state }

    }
}