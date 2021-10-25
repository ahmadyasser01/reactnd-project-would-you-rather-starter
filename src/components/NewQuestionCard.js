import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import { handleAddQuestion } from '../actions/Questions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

class NewQuestionCard extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    handleOnChange = (e) => {
        const { id, value } = e.target
        this.setState({ [id]: value })
    }

    handleAddQuestion = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { authedUser: author, dispatch, history } = this.props

        dispatch(
            handleAddQuestion({
                optionOneText,
                optionTwoText,
                author,
            })
        )
        history.push('/')
    }
    render() {
        const { optionOneText, optionTwoText } = this.state



        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={this.props.users[this.props.authedUser].avatarURL}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Create New Question
                        </Typography>
                        <Typography variant="h6" color="text">
                            Would You Rather?
                        </Typography>
                        <TextField id="optionOneText" label="Option 1" variant="standard"
                            value={optionOneText}
                            onChange={this.handleOnChange}

                        />
                        <TextField id="optionTwoText" label="Option 2" variant="standard"
                            value={optionTwoText}
                            onChange={this.handleOnChange}
                        />

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="Large" color="primary"
                        disabled={!optionOneText || !optionTwoText}
                        onClick={this.handleAddQuestion}

                    >
                        Create
                    </Button>
                </CardActions>
            </Card >
        );
    }
}
const mapStateToProps = ({ users, authedUser }) => {
    return {
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(withRouter(NewQuestionCard))