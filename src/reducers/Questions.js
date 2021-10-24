import { ADD_QUESTION, ANSWER_QUESTION, RECIEVE_QUESTIONS } from "../actions/Questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            const { qid, answer, authedUser } = action
            const SelectedOption = state[qid][answer]
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...SelectedOption,
                        votes: [...SelectedOption.votes,
                            authedUser]
                    }
                }

            }
        case ADD_QUESTION:
            const { question } = action
            console.log({
                ...state,
                [question.id]: question

            });
            return {
                ...state,
                [question.id]: question
            }


        default:
            return state;
    }
}
