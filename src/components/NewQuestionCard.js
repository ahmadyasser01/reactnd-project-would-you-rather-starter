import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import { handleAddQuestion } from '../actions/shared'


class NewQuestionCard extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleOnChange = (e) => {
        const { id, value } = e.target
        this.setState({ [id]: value })
    }

    handleAddQuestion = (e) => {
        e.preventDefault()

        const { optionOne: optionOneText, optionTwo: optionTwoText } = this.state
        const { authedUser: author, dispatch, history } = this.props

        dispatch(
            handleAddQuestion({
                optionOneText,
                optionTwoText,
                author,
            })
        )
    }
    render() {
        console.log(this.state, "my stttetete");
        const { optionOne, optionTwo } = this.state


        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Create New Question
                        </Typography>
                        <Typography variant="h6" color="text">
                            Would You Rather?
                        </Typography>
                        <TextField id="optionOne" label="Option 1" variant="standard"
                            onChange={this.handleOnChange}
                            value={optionOne}
                        />
                        <TextField id="optionTwo" label="Option 2" variant="standard"
                            value={optionTwo}
                            onChange={this.handleOnChange} />

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="Large" color="primary"
                        onClick={this.handleAddQuestion} >
                        Create
                    </Button>
                </CardActions>
            </Card >
        );
    }
}

export default NewQuestionCard