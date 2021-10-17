export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'



export function recieveQuestions(Questions) {
    return {
        type: RECIEVE_QUESTIONS,
        Questions
    }
}

export function answerQuestion({ questionId, answer, authedUser }) {
    type: ANSWER_QUESTION,
        authedUser,
        questionId,
        answer
}

export function addQuestion(question) {
    type: ADD_QUESTION,
        question
}

