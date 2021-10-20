import React, { Component } from "react";
import Header from "../components/nav";
import UserCard from "../components/UserCard";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

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
                {users.map(usr => (
                    <UserCard name={usr.name} />
                )

                )}

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