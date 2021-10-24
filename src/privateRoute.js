import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoute = ({ authedUser, path, component: Component, exact }) => {
    return (
        <Route render={(props) =>
            authedUser ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />)} />
    )

}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute)