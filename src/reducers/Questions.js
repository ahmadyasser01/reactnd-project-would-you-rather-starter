import { ADD_QUESTION, ANSWER_QUESTION, RECIEVE_QUESTIONS } from "../actions/Questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            const { questionId, answer, authedUser } = action
            const SelectedOption = state[questionId][answer]
            return {
                ...state,
                [questionId]: {
                    ...state[questionId],
                    [answer]: {
                        questionId,
                        votes: [...SelectedOption.votes,
                            authedUser]
                    }
                }

            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...questions,
                [question.id]: question
            }


        default:
            return state;
    }
}
