import React, { Component } from "react";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Button from "@mui/material/Button"
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        authedUser: ""
    }
    handleChange = (event) => {
        this.setState({ authedUser: event.target.value })
        this.props.dispatch(setAuthedUser(event.target.value))
    }

    render() {
        const { authedUser } = this.state
        const { users } = this.props
        return (
            <Container maxWidth="sm">
                <img
                    src={"https://deep-questions.com/wp-content/uploads/2018/12/deep-would-you-rather-questions.jpg"}
                    alt="would you rather logo"
                    width="40"
                // className={`${classes.logo}`}
                />
                <Typography component={'span'}>
                    Would You Rather Game
                </Typography>
                <Typography component={'span'}>
                    Sign in to get Started
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">User</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={authedUser}
                        label="Age"
                        onChange={this.handleChange}
                    >
                        {users && Object.values(users).map(user => (
                            <MenuItem value={user.id} key={user.id}>{user.name}</MenuItem>
                        ))}



                    </Select>

                    <Button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            if (this.state.authedUser) {
                                localStorage.setItem('authedUser', this.state.authedUser);
                                this.props.history.push('/')

                            }
                            else {
                                alert("please sign in to play ")
                            }
                        }}
                    >
                        Click me
                    </Button>
                </FormControl>
            </Container>
        )
    }
}
const mapStateToProps = ({ users, authedUser }) => {
    return {
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(withRouter(Login))