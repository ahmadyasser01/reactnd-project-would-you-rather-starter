import React, { Component } from "react";
import Header from "../components/nav";
import UserCard from "../components/UserCard";

class Leaderboard extends Component {
    render() {
        return (
            <>
                <Header />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </>
        )
    }
}

export default Leaderboard