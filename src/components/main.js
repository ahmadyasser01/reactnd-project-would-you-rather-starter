import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../screens/Home'
import Leaderboard from '../screens/Leaderboard'
import NewQuestion from '../screens/NewQuestion'
import NotFound from '../screens/NotFound'
import questionRoute from './questionRoute'



const Main = () => {
    return (
        <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={NewQuestion} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/questions/:id" component={questionRoute}></Route>
            <Route path="/404" component={NotFound}></Route>


        </Switch>
    )
}
export default Main