import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function Header({ history, dispatch, authedUser, users }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 2, textAlign: "left" }}>
                        Would You Rather?
                    </Typography>
                    <Link to={"/"}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to={"/new"}>
                        <Button color="inherit">New Question</Button>
                    </Link>
                    <Link to={"/leaderboard"}>
                        <Button color="inherit">Leaderboard</Button>
                    </Link>
                    <Typography variant="h6" component="div"> {authedUser}</Typography>
                    <span>
                        <img width="40"
                            src={users[authedUser].avatarURL}
                            alt={authedUser}
                        ></img>
                    </span>
                    <Button
                        color="inherit"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(unsetAuthedUser())
                            history.push('/login')
                        }}>
                        <span>Logout </span>
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(withRouter(Header))