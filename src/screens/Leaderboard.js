import React, { Component } from "react";
import Header from "../components/nav";
import UserCard from "../components/UserCard";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import sortBy from "sort-by";

class Leaderboard extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        console.log(this.props.users, "from leaderboard");
        const { users } = this.props;
        return (
            <>
                <Header />

                {users.map(usr => {
                    const answeredQuestions = Object.keys(usr.answers).length;
                    const askedQuestions = Object.keys(usr.questions).length;
                    const score = answeredQuestions + askedQuestions


                    return (
                        {
                            ...usr,
                            score,
                            answeredQuestions,
                            askedQuestions
                        }
                    )
                }


                ).sort(sortBy('-score')).map(usr => (
                    <UserCard user={usr} />
                ))

                }

            </>
        )
    }
}
const mapStateToProps = ({ users }) => {
    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Leaderboard)