import React, { Component } from "react";
import NewQuestionCard from '../components/NewQuestionCard'
import Header from '../components/nav'
class NewQuestion extends Component {
    render() {
        return (
            <>
                <Header />
                <NewQuestionCard />
            </>
        )
    }
}

export default NewQuestion