export const RECIEVE_USERS = 'RECIEVE_USERS'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'


export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export function userAnswerQuestion({ authedUser, answer, qid }) {
    return {
        type: USER_ANSWER_QUESTION,
        authedUser,
        answer,
        qid
    }
}

export function userAddQuestion({ authedUser, qid }) {
    return {
        type: USER_ADD_QUESTION,
        authedUser,
        qid
    }
}