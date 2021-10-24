import { Component } from 'react';
import { handleInitialData } from './actions/shared';
import './App.css';
import { connect } from 'react-redux'
import Login from './screens/Login';
import PrivateRoute from './privateRoute'
import Main from './components/main'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/login"
            name="Login"
            render={(props) => <Login {...props} />}>

          </Route>

          <PrivateRoute path="/" component={Main}></PrivateRoute>


        </Switch>
      </div >
    );
  }
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App);
