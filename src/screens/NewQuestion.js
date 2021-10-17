import React, { Component } from "react";
import Header from "../components/nav";
import NewQuestionCard from "../components/NewQuestionCard";
class Newquestion extends Component {
    render() {
        return (
            <>
                <Header />
                <NewQuestionCard />
            </>
        )
    }
}

export default Newquestion