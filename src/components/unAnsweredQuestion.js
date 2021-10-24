import React, { Component } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import ErrorRadios from "./RadioButtons";
import Header from "./nav";
import { connect } from 'react-redux'
class UnAnsweredQuestion extends Component {
    render() {
        const { avatarURL, author } = this.props.question
        console.log(this.props.question, "check question from unanswereds")


        return (

            <div>
                <Header />
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`${avatarURL}`}
                        alt="img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {author} asks Would You rather
                        </Typography>
                        <ErrorRadios question={this.props.question} authedUser={this.props.authedUser} dispatch={this.props.dispatch} />
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>

            </div>
        )
    }
}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(UnAnsweredQuestion)