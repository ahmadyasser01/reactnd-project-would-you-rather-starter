import { RECIEVE_USERS, USER_ADD_QUESTION, USER_ANSWER_QUESTION } from "../actions/users";




export default function users(state = {}, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case USER_ADD_QUESTION: {
            const { authedUser, qid } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: [...state[authedUser].questions, qid]
                }
            }
        }

        case USER_ANSWER_QUESTION:
            {
                const { authedUser, answer, qid, } = action
                return {
                    ...state,
                    [authedUser]: {
                        ...state[authedUser],
                        answers: {
                            ...state[authedUser].answers,
                            [qid]: answer

                        }
                    }
                }
            }
        default:
            return state

    }
}