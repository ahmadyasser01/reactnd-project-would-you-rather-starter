import React, { Component } from "react";
import Header from "../components/nav";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import CardActionArea from '@mui/material/CardActionArea'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
class Leaderboard extends Component {

    render() {
        const { users } = this.props
        console.log(users)
        return (
            <>
                <Header></Header>
                <Container className="content" component="main">
                    {users.map(usr => {
                        const answeredQuestions = Object.keys(usr.answers).length;
                        const askedQuestions = Object.keys(usr.questions).length;
                        const score = answeredQuestions + askedQuestions


                        return (
                            {
                                ...usr,
                                score,
                                answeredQuestions,
                                askedQuestions
                            }
                        )
                    }


                    ).sort(sortBy('-score')).map(usr => (
                        <Card sx={{ maxWidth: 345 }} key={usr.id}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={usr.avatarURL}
                                    alt={usr.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component={'p'}>
                                        {usr.name}
                                    </Typography>
                                    <Typography variant="h6" color="text" component={'p'}>
                                        Answered Questions:<span>{usr.answeredQuestions}</span>
                                    </Typography>
                                    <Typography variant="h6" color="text" component={'p'}>
                                        Asked Questions:<span>{usr.askedQuestions}</span>
                                    </Typography>
                                    <Typography variant="h6" color="text" component={'p'}>
                                        Score:<span>{usr.score}</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card >
                    ))

                    }

                </Container>
            </>
        )
    }
}
const mapStateToProps = ({ users }) => {
    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Leaderboard)