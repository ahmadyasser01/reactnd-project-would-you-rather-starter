
import React, { Component } from "react";

import BasicTabs from "../components/Tabs";
import Header from "../components/nav";
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <BasicTabs />
            </div>
        )
    }
}

export default Home;