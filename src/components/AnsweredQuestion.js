import React, { Component } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, LinearProgress } from '@mui/material';
import Header from "./nav";
import Divider from '@mui/material/Divider';

// import RadioButtonsGroup from '../components/RadioOptions'
class AnsweredQuestion extends Component {
    render() {
        const { avatarURL, author, optionOne, optionTwo } = this.props.question
        const { authedUser } = this.props
        const optionOneVotes = optionOne.votes.length;
        const optionTwoVotes = optionTwo.votes.length;
        const total = optionOneVotes + optionTwoVotes;
        const optionOneVotesPercentage = Math.round(optionOneVotes / total * 10000) / 100
        const optionTwoVotesPercentage = Math.round(optionTwoVotes / total * 10000) / 100
        // console.log(optionOneVotesPercentage, optionTwoVotesPercentage);

        return (
            <div>
                <Header />
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={avatarURL}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {author} asks Would You rather
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                            {optionOne.text}
                        </Typography>
                        <span>{optionOne.votes.includes(authedUser) && "[you selected this answer]"}</span>

                        <Typography variant="body2" color="text.secondary">
                            {optionOneVotes} choosed this option from {total} with perctentage {optionOneVotesPercentage}%
                        </Typography>

                        <LinearProgress variant="determinate" value={optionOneVotesPercentage} />
                        <Divider middle="true" />
                        <Divider />
                        <Typography variant="h5" color="text.primary">
                            {optionTwo.text}
                        </Typography>
                        <span> {optionTwo.votes.includes(authedUser) && "[you selected this answer]"}</span>
                        <Typography variant="body2" color="text.secondary">
                            {optionTwoVotes} choosed this option from {total} with perctentage {optionTwoVotesPercentage}%
                        </Typography>

                        <LinearProgress variant="determinate" value={optionTwoVotesPercentage} />

                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

            </div>
        )
    }
}

export default AnsweredQuestion