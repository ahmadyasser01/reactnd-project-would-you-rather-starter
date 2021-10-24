import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
const PrivateRoute = ({ authedUser, path, component: Component }) => {
    const location = useLocation();
    console.log(location, "location target")
    return (
        <Route render={(props) =>
            authedUser ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location },
                    }}
                />)} />
    )

}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(withRouter(PrivateRoute))