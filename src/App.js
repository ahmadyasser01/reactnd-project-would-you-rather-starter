import './App.css';
import Login from './screens/Login'
// import Home from './screens/Home'
// import Newquestion from './screens/NewQuestion';
// import Leaderboard from './screens/Leaderboard';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props
    console.log(loading);
    return (
      <div className="App" >
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Login />}

      </div>
    );


  }
}
function mapStateToProps({ authedUser, users, questions }) {
  console.log(users, "mapstate")
  return {
    loading: users === // because Object.keys(new Date()).length === 0;
      // we have to do some additional check
      null // 👈 null and undefined check
      && Object.keys(users).length === 0
      && Object.getPrototypeOf(users) === Object.prototype,
    authedUser,


  }
}
export default connect(mapStateToProps)(App);
