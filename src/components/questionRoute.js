import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AnsweredQuestion from './AnsweredQuestion'
import UnAnsweredQuestion from './unAnsweredQuestion'


class QuestionRoute extends Component {

    render() {
        const { questions, authedUser, match, history, users } = this.props
        const qId = match.params.id
        const question = questions[qId]

        if (!question) {
            history.push('/404')
        }
        question.avatarURL = users[authedUser].avatarURL;
        const isAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
        return isAnswered ? (<AnsweredQuestion question={question} />) : (<UnAnsweredQuestion question={question} />)


    }
}
const mapStateToProps = ({ authedUser, users, questions }) => {
    return {
        authedUser, users, questions
    }
}

export default connect(mapStateToProps)(withRouter(QuestionRoute))
