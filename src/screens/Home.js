
import React, { Component } from "react";
import sortBy from 'sort-by'

import BasicTabs from "../components/Tabs";
import Header from "../components/nav";
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
class Home extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const { questions, authedUser } = this.props;
        const answeredQuestions = questions.filter(
            (q) =>
                q.optionOne.votes.includes(authedUser) ||
                q.optionTwo.votes.includes(authedUser)
        )

        const unAnsweredQuestions = questions.filter(
            (q) =>
                !q.optionOne.votes.includes(authedUser) &&
                !q.optionTwo.votes.includes(authedUser)
        )

        return (
            <div>
                <Header />
                <BasicTabs unAnsweredQuestions={unAnsweredQuestions} answeredQuestions={answeredQuestions} />
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser, users, questions }) => {
    return {
        authedUser,
        users,
        questions: Object.values
            (questions)
    }
}

export default connect(mapStateToProps)(Home);