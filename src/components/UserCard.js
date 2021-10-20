import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function UserCard({ user }) {
    console.log(user)
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
                        {user.name}
                    </Typography>
                    <Typography variant="h6" color="text">
                        Answered Questions:<span>{user.answeredQuestions}</span>
                    </Typography>
                    <Typography variant="h6" color="text">
                        Asked Questions:<span>{user.askedQuestions}</span>
                    </Typography>
                    <Typography variant="h6" color="text">
                        Score:<span>{user.score}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card >
    );
}