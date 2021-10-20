import React, { Component } from "react";
import Header from "../components/nav";
import NewQuestionCard from "../components/NewQuestionCard";
import { connect } from 'react-redux'
class Newquestion extends Component {

    render() {
        return (
            <>
                <Header />
                <NewQuestionCard dispatch={this.props.dispatch} authedUser={this.props.authedUser} />
            </>
        )
    }
}
const mapStateToProps = ({ authedUser, users }) => {
    return {
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(Newquestion)