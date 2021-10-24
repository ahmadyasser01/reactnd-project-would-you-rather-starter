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
            <Route exact path="/new" component={NewQuestion} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            {/* //page not found  */}
            <Route exact path="/question/:id" component={questionRoute}></Route>
            <Route path="/notfound" component={NotFound}></Route>


        </Switch>
    )
}
export default Main