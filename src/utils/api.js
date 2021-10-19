import { _getQuestions, _getUsers } from "./_DATA";

export async function getInitialData() {
    const users = await _getUsers();
    const questions = await _getQuestions();

    return {
        users,
        questions
    }
}